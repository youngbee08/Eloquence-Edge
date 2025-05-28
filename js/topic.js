window.addEventListener("online", () => alert("Back Online"));
window.addEventListener("offline", () => alert("You're offline"));
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { 
  getAuth,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";
//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: window.env.API_KEY,
authDomain: "eloquence-edge-705e3.firebaseapp.com",
projectId: "eloquence-edge-705e3",
storageBucket: "eloquence-edge-705e3.firebasestorage.app",
messagingSenderId: "1018115553583",
appId: "1:1018115553583:web:677adf9dd6b5ee56cfc9da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
const auth = getAuth(app)
// Initialize Firestore
const db = getFirestore(app)
// ColRef
const usersColRef = collection(db, "Users");
import { bonusTopicsAndExplanations, topicsAndExplanations } from "./dashboard.js";

const searchParams = new URLSearchParams(location.search);
const main = document.getElementById("mainPoint");
let topicId;
let index = 0;
let isMuted = false;
console.log(topicsAndExplanations.length)
let userId;
if (searchParams.has("id")) {
  userId = searchParams.get("id");
} //else{
//   location.href = "../auth/signin.html"
// }
if (searchParams.has('t')) {
  topicId = parseInt(searchParams.get('t'));
  if (topicId <= 53) {
    if (!topicsAndExplanations[topicId -1].locked) {
      const topicObj = topicsAndExplanations[topicId - 1];
      main.innerHTML += `
        <h2>${topicObj.topic}</h2>
      `;
      if (!topicsAndExplanations[topicId - 1]) {
        document.getElementById("notFound").style.display = "flex";
        main.style.display = 'none'
      } else {
        main.style.display = "flex";
        speak(main.innerText)
      }
    }else{
      document.getElementById("locked").style.display = "flex";
      document.getElementById("container").style.display = 'none';
    }
  }else{
    document.getElementById("notFound").style.display = "flex";
    document.getElementById("container").style.display = 'none';
  }
} else {
  document.getElementById("notFound").style.display = "flex";
  document.getElementById("container").style.display = 'none';
}
function displayExplanation(i) {
  const topicObj = topicsAndExplanations[topicId - 1];
  if (topicObj && topicObj.topicExplanation[i]) {
        main.innerHTML += `
          <div>
            <ul>
              <li><strong>${capitalize(topicObj.topicExplanation[i].type)}:</strong> ${topicObj.topicExplanation[i].content}</li>
            </ul>
          </div>
        `;
    }
  }
  
function speak (text) { 
  if (isMuted) return;
  const utterance = new SpeechSynthesisUtterance(text);

  speechSynthesis.speak(utterance);
}
main.addEventListener("click", handleMainClick);

function handleMainClick() {
  const topicObj = topicsAndExplanations[topicId - 1];
  if (topicObj && topicObj.topicExplanation[index]) {
    const explanation = topicObj.topicExplanation[index];
    const text = `${capitalize(explanation.type)}: ${explanation.content}`;
    speak(text); 

    displayExplanation(index);
    
    index++;

    if (index >= topicObj.topicExplanation.length) {
      main.removeEventListener("click", handleMainClick);
      document.querySelector(".tapP").style.display = 'none';
      document.querySelector("#nextBtn").style.display = 'block';
    }
  }
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
document.getElementById("muteIcon").addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted) {
    speechSynthesis.cancel()
  }
  document.getElementById("muteIcon").classList.toggle('fa-volume-mute');
});
console.log(topicsAndExplanations[topicId - 1])
async function next() {
  document.querySelector("#nextBtn").innerHTML = "Please Wait...."
  try {
    const userDocRef = doc(usersColRef, userId);
    const userSubColRef = collection(userDocRef, "progress")
    const userSubDocRef = doc(userSubColRef, `Topic ${topicId}`)
    const topicDetails = {
      isFinished:true,
      isFinishedAt:Date.now()
    }
    await setDoc(userSubDocRef, topicDetails)
  } catch (error) {
    console.log(error)
  } finally{
    document.querySelector("#nextBtn").innerHTML = "Next"
  }
}
document.querySelector("#nextBtn").addEventListener("click", next)