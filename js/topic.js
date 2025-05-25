import { bonusTopicsAndExplanations, topicsAndExplanations } from "./dashboard.js";

const searchParams = new URLSearchParams(location.search);
const main = document.getElementById("mainPoint");
let topicId;
let index = 0;
let isMuted = false;

if (searchParams.has('t')) {
    topicId = parseInt(searchParams.get('t'));
    const topicObj = topicsAndExplanations[topicId - 1];
    main.innerHTML += `
      <h2>${topicObj.topic}</h2>
    `;
    if (!topicsAndExplanations[topicId - 1]) {
        document.getElementById("notFound").style.display = "flex";
    } else {
        main.style.display = "flex";
        speak(main.innerText)
    }
} else {
    document.getElementById("notFound").style.display = "flex";
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


  utterance.pitch = 1.4;
  utterance.rate = 1.3;

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

if (main.innerText.endsWith("Common-mistake: Incorrect: 'She go to school.' Correct: 'She goes to school.' (Subject-verb agreement)")) {
  alert("continue")
}