export let topicsAndExplanations = [
  // --- Basic Level ---
  {
    topic: "Introduction to English Grammar",
    topicID: 1,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Grammar is the system of rules that govern the structure of sentences in a language." },
      { type: "example", content: "Example: 'She eats breakfast every morning.' (Subject + Verb + Object)" },
      { type: "usage", content: "Grammar helps in constructing clear, correct sentences in both speaking and writing." },
      { type: "detail", content: "Grammar includes parts of speech, tenses, and sentence structure." },
      { type: "tip", content: "Start with simple sentences (subject + verb + object) before moving to complex ones." },
      { type: "common-mistake", content: "Incorrect: 'She go to school.' Correct: 'She goes to school.' (Subject-verb agreement)" }
    ]
  },
  {
    topic: "Nouns",
    topicID: 2,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Nouns are words that name people, places, things, or ideas." },
      { type: "example", content: "Examples: dog (thing), Paris (place), happiness (idea)." },
      { type: "usage", content: "Nouns can be subjects or objects in sentences." },
      { type: "detail", content: "Types: Common (city), Proper (London), Abstract (love), Collective (team)." },
      { type: "tip", content: "Capitalize Proper Nouns (e.g., December, Microsoft)." },
      { type: "common-mistake", content: "Incorrect: 'I need a advice.' Correct: 'I need advice.' (Uncountable noun)" }
    ]
  },
  {
    topic: "Pronouns",
    topicID: 3,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Pronouns replace nouns to avoid repetition." },
      { type: "example", content: "Examples: he, she, it, they. 'Sarah is happy because she won.'" },
      { type: "usage", content: "Pronouns must agree in number/gender with the noun they replace." },
      { type: "detail", content: "Types: Personal (I, you), Possessive (mine, yours), Reflexive (myself)." },
      { type: "tip", content: "Use 'it' for animals/objects unless the gender is known (e.g., a pet)." },
      { type: "common-mistake", content: "Incorrect: 'Me and John went shopping.' Correct: 'John and I went shopping.'" }
    ]
  },
  {
    topic: "Verbs",
    topicID: 4,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Verbs describe actions (run) or states (be)." },
      { type: "example", content: "Action: 'She writes a letter.' State: 'They are happy.'" },
      { type: "usage", content: "Every sentence must have at least one verb." },
      { type: "detail", content: "Types: Action (jump), Linking (is), Helping (can)." },
      { type: "tip", content: "Add '-s' to verbs for third-person singular (e.g., 'He walks')." },
      { type: "common-mistake", content: "Incorrect: 'She don’t like apples.' Correct: 'She doesn’t like apples.'" }
    ]
  },
  // ... (similarly expanded for all other topics)
  {
    topic: "Tenses (Present, Past, Future)",
    topicID: 26,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Tenses indicate when an action occurs (present, past, future)." },
      { type: "example", content: "Present: 'I eat.' Past: 'I ate.' Future: 'I will eat.'" },
      { type: "usage", content: "Use present for habits, past for completed actions, future for plans." },
      { type: "detail", content: "Each tense has simple, continuous, perfect, and perfect continuous forms." },
      { type: "tip", content: "Signal words: Present (always), Past (yesterday), Future (tomorrow)." },
      { type: "common-mistake", content: "Incorrect: 'I am eating dinner at 8 PM yesterday.' Correct: 'I ate dinner at 8 PM yesterday.'" }
    ]
  },
  {
    topic: "Passive Voice",
    topicID: 30,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Passive voice emphasizes the action/receiver, not the doer." },
      { type: "example", content: "Active: 'She wrote the book.' Passive: 'The book was written by her.'" },
      { type: "usage", content: "Use passive when the doer is unknown/unimportant (e.g., 'The window was broken.')." },
      { type: "detail", content: "Form: [Object] + [be] + [past participle] + (by + agent)." },
      { type: "tip", content: "Avoid overusing passive in formal writing; active voice is usually clearer." },
      { type: "common-mistake", content: "Incorrect: 'The letter was wrote by him.' Correct: 'The letter was written by him.'" }
    ]
  },
  // --- Advanced Level ---
  {
    topic: "Subjunctive Mood",
    topicID: 47,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "The subjunctive expresses hypotheticals, wishes, or demands." },
      { type: "example", content: "Wish: 'I wish I were taller.' Demand: 'It’s vital that he be present.'" },
      { type: "usage", content: "Often follows verbs like 'suggest', 'demand', or expressions like 'It’s important.'" },
      { type: "detail", content: "Uses base verb form (e.g., 'be' instead of 'is') in formal contexts." },
      { type: "tip", content: "In modern English, the subjunctive is less common but still used in formal writing." },
      { type: "common-mistake", content: "Incorrect: 'If I was rich...' (hypothetical) Correct: 'If I were rich...'" }
    ]
  }
  // ... (all other topics expanded similarly)
];
export let bonusTopicsAndExplanations = [
  {
    topic: "Describing Trends (Task 1) [NEW]",
    topicID: 54,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Vocabulary to describe graphs/charts: upward/downward trends, stability, fluctuations." 
      },
      { 
        type: "example", 
        content: "Example: 'Sales **peaked** at 20,000 in 2020 before **plummeting** to 5,000.'" 
      },
      { 
        type: "usage", 
        content: "Use: **soared**, **rocketed**, **plateaued**, **a gradual decline**." 
      },
      {
        type: "Tip",
        content: "Avoid repeating 'increase/decrease'—use synonyms for Band 7+."
      }
    ]
  },
  {
    topic: "Comparing Data (Task 1) [NEW]",
    topicID: 55,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Language to compare data points (e.g., higher/lower, similar to, in contrast)." 
      },
      { 
        type: "example", 
        content: "Example: 'In 2010, coal use **was twice as high as** solar energy.'" 
      },
      { 
        type: "usage", 
        content: "Key phrases: **'while'**, **'whereas'**, **'compared to'**." 
      }
    ]
  },
  {
    topic: "Opinion Essay Phrases [NEW]",
    topicID: 56,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Phrases to express agreement/disagreement formally." 
      },
      { 
        type: "example", 
        content: "Example: 'I **strongly concur** that...', 'While some argue..., I **lean toward**...'" 
      },
      { 
        type: "usage", 
        content: "Use in introductions/conclusions for Band 7+ cohesion." 
      },
      {
        type: "Mistake",
        content: "Avoid 'I think'—use 'I contend' or 'It is argued'."
      }
    ]
  },
  {
    topic: "Linking Words (Cohesion) [NEW]",
    topicID: 57,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Transition words to connect ideas logically (crucial for Band 7+)." 
      },
      { 
        type: "example", 
        content: "Examples: '**However**,...', '**Furthermore**,...', '**As a result**,...'" 
      },
      { 
        type: "usage", 
        content: "Use 3-5 linking words per paragraph in Task 2." 
      }
    ]
  },
  {
    topic: "Hedging Language (Speaking Part 3) [NEW]",
    topicID: 58,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Softening statements to sound less absolute." 
      },
      { 
        type: "example", 
        content: "Examples: 'It **could be argued** that...', 'There’s **a tendency** for...'" 
      },
      { 
        type: "usage", 
        content: "Use in Part 3 to discuss abstract ideas naturally." 
      }
    ]
  },
  {
    topic: "Phrasal Verbs for Speaking [NEW]",
    topicID: 59,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Common phrasal verbs to sound fluent in Speaking." 
      },
      { 
        type: "example", 
        content: "Examples: '**come up with** (an idea)', '**put off** (delay)', '**bring up** (mention)'." 
      },
      { 
        type: "usage", 
        content: "Use 1-2 phrasal verbs per answer in Part 1/3." 
      }
    ]
  },
  {
    topic: "Common Article Mistakes [NEW]",
    topicID: 60,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Correct use of 'a/an/the' in Writing." 
      },
      { 
        type: "example", 
        content: "Mistake: 'Government should solve problem.' → Correct: '**The** government should solve **the** problem.'" 
      },
      { 
        type: "usage", 
        content: "Always check articles in Task 1/2 before submitting." 
      }
    ]
  },
  {
    topic: "Prepositions in Graphs (Task 1) [NEW]",
    topicID: 61,
    isFinishedTopic: false,
    topicLevel: "Bonus",
    topicExplanation: [
      { 
        type: "definition", 
        content: "Prepositions to describe data accurately." 
      },
      { 
        type: "example", 
        content: "Examples: '**from** 2000 **to** 2010', '**at** 20%', '**by** 10%'." 
      },
      { 
        type: "usage", 
        content: "Incorrect prepositions lower Task 1 accuracy." 
      }
    ]
  },
];
const main = document.getElementById("main");
const displayTopics = ()=>{
  topicsAndExplanations.forEach((eachTopicAndExplanation, index) => {
  const isFirst = index === 0;
  const isLast = index === 52;
  const isFinished = eachTopicAndExplanation.isFinishedTopic;

  const shouldBlur = !isFirst && !isFinished;
  const shouldHide = isLast;
  if (main) {
    main.innerHTML += `
    <div class="goal ${shouldBlur ? 'blurred' : ''}">
      <div class="first topicController">
        <div class="today">
          <div class="checked">
            <i class="fas fa-check"></i>
          </div>
          ${shouldBlur ? '<h2>Next Goal</h2>': "<h2>Today's Goal</h2>"}
        </div>
        <i class="fas fa-chevron-up" style="transition: 1s ease-in-out;"></i>
      </div>
      <div class="second topics">
        <h4>${eachTopicAndExplanation.topic}</h4>
        <div class="start">
          <p><b>Estimated Time: 5mins</b></p>
          <button name="${eachTopicAndExplanation.topicID}" id="startBtn"><i class="fas fa-play"></i> Start</button>
        </div>
      </div>
      ${shouldBlur ? '<div class="padlock"><i class="fas fa-lock"></i></div>' : ''}
    </div>
    ${!shouldHide ? `<div class="hrcon">
      <hr>
      <h5>Next Topic</h5>
      <hr>
     </div>` : ''}
  `;
  }
  });


};
displayTopics()
if (main) {
    document.addEventListener("DOMContentLoaded", ()=>{
      const sideBar = document.querySelector("#aside");
      const main = document.getElementById("main");
      const togglebarTwo = document.querySelector(".img2");
      const topicController = document.querySelector(".topicController");
      const topicControllerTwo = document.querySelector(".fa-chevron-up");
      const topicsSec = document.querySelector(".topics");
      const startBtn = document.getElementById("startBtn");
      const toggleSidebarFnc = ()=>{
        sideBar.classList.toggle("togglebar");
      };
      const toggleTopic = () =>{
          topicsSec.classList.toggle("hideSecond");
          topicControllerTwo.classList.toggle("controlController");
      }
      const toggleSidebar = document.querySelectorAll(".toggleSidebar").forEach(eachSideBar => {
          eachSideBar.addEventListener("click", toggleSidebarFnc)
      });
      topicController.addEventListener("click", toggleTopic);
      startBtn.addEventListener("click", (e)=>{
        const {name} = e.target
        window.location.href=`./topic.html?t=${name}`
    })
  })
}