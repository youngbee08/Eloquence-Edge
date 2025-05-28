// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification
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
// Initialize Provider
const provider = new GoogleAuthProvider();
// ColRef
const usersColRef = collection(db, "Users");
//Decalaring all my values in a variable
const formCon = document.getElementById("formCon");
const userNameInp = document.getElementById("userNameInp");
const emailInp = document.getElementById("emailInp");
const passwordInp = document.getElementById("passwordInp");
const signupbtn = document.getElementById("createBtn");
const hiddenParapgragh = document.getElementById("hiddenPara");
const notAcceptedPassword = ["+","=","/","?","~","`",")","(","*","^","%","!",",","."];
const continueBtn = document.getElementById("continueBtn");
// Declaration ends //

// ADDING EVENT-LISTENERS TO MY BUTTONS OR FORM //
formCon.addEventListener("submit", signUpWithEmailAndPassword)
continueBtn.addEventListener("click", signUpWithGoogle)
// EVENT-LISTENERS ENDS //

// Variable Declaration //
let userData = [];
const emailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|co|org|net|gov|edu|info|biz|io|me|tech|us|uk|ng|ca|au|in|za|de|fr|it|es|jp|cn|[a-z]{2,})$/i;
// Variable Declaration Ends //

async function signUpWithGoogle(e) {
    e.preventDefault()
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
        
        const userDetails={
            userName:user.displayName,
            email:user.email
        };
        const customName = result.user.uid;
        console.log("Signed in as:", user.displayName);
        const usersDocRef = doc(usersColRef, customName);
        await setDoc(usersDocRef, userDetails);
        location.replace("../user/dashboard.html");
    } catch (error) {
        console.log(error);
    }
}
async function signUpWithEmailAndPassword(e) {
    try {
        e.preventDefault();
        hiddenParapgragh.display="none";
        document.getElementById("loadingSpinner").style.display="flex";
        document.getElementById("normalText").style.display="none";
        const  signUpDetails= {
            email:emailInp.value.trim(),
            password:passwordInp.value.trim()
        };
        const  userDetails= {
            userName:userNameInp.value.trim(),
            email:signUpDetails.email,
            profilePic:'',
            createdAt:Date.now()
        };
        if (!emailFormat.test(signUpDetails.email)) {
            throw new Error("*Invalid Email Address");
        }
        if (!/[A-Z]/.test(signUpDetails.password)) {
            throw new Error("*Password must contain at least one uppercase letter (A-Z).");
        }
        if (!/[a-z]/.test(signUpDetails.password)) {
            throw new Error("*Password must contain at least one lowercase letter (a-z).");
        }
        if (!/\d/.test(signUpDetails.password)) {
            throw new Error("*Password must include at least one number (0-9).");
        }
        if (!/[@$!%*?&]/.test(signUpDetails.password)) {
            throw new Error("*Password must have at least one special character (@, $, !, %, *, ?, &).");
        }
        const {email,password} = signUpDetails;
        const res = await createUserWithEmailAndPassword(auth, email,password);
        const customName = res.user.uid;
        const userDocRef = doc(usersColRef, customName);
        await setDoc(userDocRef, userDetails);
        await sendEmailVerification(res.user);
        location.replace(`./verifyAccount.html?vid=${res.user.uid}`);
    } catch (error) {
        console.log(error);
        hiddenParapgragh.style.display="inline";
        hiddenParapgragh.classList.add("invalid");
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
            hiddenParapgragh.textContent = "*Email already in use";
            return
        }
        if (error.message === "Firebase: Error (auth/network-request-failed)."){
            hiddenParapgragh.textContent ="Error occured, Please Try Again"
            return
        }
        hiddenParapgragh.textContent = error.message;
    } finally{
        document.getElementById("loadingSpinner").style.display="none";
        document.getElementById("normalText").style.display="inline";
    }
}
document.getElementById("pass").addEventListener("mouseover", (event)=>{
    if (event.target.nodeName === "I") {
        document.getElementById("pass").classList.toggle("changeInpBg")
    }
});
document.getElementById("pass").addEventListener("mouseout", (event)=>{
    if (event.target.nodeName === "I") {
        document.getElementById("pass").classList.toggle("changeInpBg")
    }
});
const eyestroke = document.getElementById("fa-eye-slash");
eyestroke.addEventListener("click", showBack);
function showBack (){
    document.getElementById("passwordInp").type="text"
    document.getElementById("eye-con").innerHTML=""
    document.getElementById("eye-con").innerHTML=`
      <i class="fas fa-eye" id="fa-eye-slash"></i>
    `;
    document.querySelector(".fa-eye").addEventListener("click", hide)
    
};
function hide(){
    document.getElementById("passwordInp").type="password"
    document.getElementById("eye-con").innerHTML=""
    document.getElementById("eye-con").innerHTML=`
      <i class="fas fa-eye-slash" id="fa-eye-slash"></i>
    `;
    document.querySelector(".fa-eye-slash").addEventListener("click", showBack);    
};