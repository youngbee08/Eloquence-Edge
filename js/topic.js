// import { bonusTopicsAndExplanations, topicsAndExplanations } from "./dashboard.js";
let topicsAndExplanations = [
  // --- Basic Level ---
  {
    topic: "Introduction to English Grammar",
    topicID: 1,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Grammar is the system of rules that govern the structure of sentences in a language." },
      { type: "example", content: "Example: 'She eats breakfast every morning.'" },
      { type: "usage", content: "Grammar helps in constructing clear, correct sentences in both speaking and writing." }
    ]
  },
  {
    topic: "Nouns",
    topicID: 2,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Nouns are words that name people, places, things, or ideas." },
      { type: "example", content: "Examples: dog, happiness, car, city." },
      { type: "usage", content: "Nouns can be either singular (one) or plural (more than one)." }
    ]
  },
  {
    topic: "Pronouns",
    topicID: 3,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Pronouns are words used to replace nouns in sentences." },
      { type: "example", content: "Examples: he, she, it, they. 'Sarah is happy because she won.'" },
      { type: "usage", content: "Pronouns avoid repeating nouns and make sentences less awkward." }
    ]
  },
  {
    topic: "Verbs",
    topicID: 4,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Verbs are words that describe actions or states of being." },
      { type: "example", content: "Examples: run, jump, is, eat." },
      { type: "usage", content: "Verbs are essential for forming sentences and describing what happens." }
    ]
  },
  {
    topic: "Adjectives",
    topicID: 5,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Adjectives are words that describe or modify nouns." },
      { type: "example", content: "Examples: happy, tall, blue, old." },
      { type: "usage", content: "Adjectives provide more information about a noun in a sentence." }
    ]
  },
  {
    topic: "Adverbs",
    topicID: 6,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Adverbs describe how, when, or where an action takes place." },
      { type: "example", content: "Examples: quickly, often, here, very." },
      { type: "usage", content: "Adverbs modify verbs, adjectives, or other adverbs. Example: 'She runs quickly.'" }
    ]
  },
  {
    topic: "Prepositions",
    topicID: 7,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Prepositions show the relationship between a noun or pronoun and other words in a sentence." },
      { type: "example", content: "Examples: on, at, under, between." },
      { type: "usage", content: "Prepositions help indicate direction, place, or time." }
    ]
  },
  {
    topic: "Conjunctions",
    topicID: 8,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Conjunctions connect words, phrases, or clauses." },
      { type: "example", content: "Examples: and, but, or, because." },
      { type: "usage", content: "Conjunctions help join ideas and make sentences more fluid." }
    ]
  },
  {
    topic: "Interjections",
    topicID: 9,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Interjections are words or phrases used to express emotions or sudden reactions." },
      { type: "example", content: "Examples: Wow!, Oops!, Ah!" },
      { type: "usage", content: "Interjections add emotional context to conversations." }
    ]
  },
  {
    topic: "Articles",
    topicID: 10,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Articles are used to define nouns as specific or unspecific." },
      { type: "example", content: "Examples: a, an, the. 'I saw a dog.' 'The dog is mine.'" },
      { type: "usage", content: "Use 'a' or 'an' for indefinite nouns and 'the' for specific nouns." }
    ]
  },
  {
    topic: "Possessive Nouns",
    topicID: 11,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Possessive nouns show ownership or possession." },
      { type: "example", content: "Examples: Sarah's book, the dog's collar." },
      { type: "usage", content: "Add an apostrophe and 's' to form possessives for singular nouns." }
    ]
  },
  {
    topic: "Subject-Verb Agreement",
    topicID: 12,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Subject-verb agreement means the subject and verb in a sentence must match in number (singular/plural)." },
      { type: "example", content: "Examples: 'She runs.' (singular) 'They run.' (plural)." },
      { type: "usage", content: "Make sure the subject and verb agree in number for clear sentences." }
    ]
  },
  {
    topic: "Plural Nouns",
    topicID: 13,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Plural nouns refer to more than one person, place, or thing." },
      { type: "example", content: "Examples: dogs, books, cars." },
      { type: "usage", content: "Most plural nouns are formed by adding 's' to the singular form." }
    ]
  },
  {
    topic: "Singular Nouns",
    topicID: 14,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Singular nouns refer to one person, place, or thing." },
      { type: "example", content: "Examples: dog, book, car." },
      { type: "usage", content: "A singular noun represents just one item or entity." }
    ]
  },
  {
    topic: "Regular Verbs",
    topicID: 15,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Regular verbs follow a predictable pattern when forming past tense, usually by adding '-ed'." },
      { type: "example", content: "Examples: walk → walked, talk → talked." },
      { type: "usage", content: "Regular verbs are easy to conjugate and form the past tense by adding '-ed'." }
    ]
  },
  {
    topic: "Irregular Verbs",
    topicID: 16,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Irregular verbs do not follow the typical '-ed' rule for past tense formation." },
      { type: "example", content: "Examples: go → went, eat → ate." },
      { type: "usage", content: "Irregular verbs need to be memorized as their past forms are not consistent." }
    ]
  },
  {
    topic: "Contractions",
    topicID: 17,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Contractions are shortened forms of two words combined into one." },
      { type: "example", content: "Examples: I'm (I am), don't (do not), they're (they are)." },
      { type: "usage", content: "Contractions are commonly used in informal writing and speaking." }
    ]
  },
  {
    topic: "Question Forms",
    topicID: 18,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Question forms are used to ask about something." },
      { type: "example", content: "Examples: 'What is your name?' 'Where do you live?'" },
      { type: "usage", content: "Questions can start with 'who', 'what', 'where', 'how', and 'why.'" }
    ]
  },
  {
    topic: "Imperatives",
    topicID: 19,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Imperatives are commands or requests." },
      { type: "example", content: "Examples: 'Sit down.', 'Please pass the salt.'" },
      { type: "usage", content: "Use imperatives to give instructions, orders, or requests." }
    ]
  },
  {
    topic: "Quantifiers",
    topicID: 20,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Quantifiers tell us how much or how many of something." },
      { type: "example", content: "Examples: some, much, many, few." },
      { type: "usage", content: "Use quantifiers to express amounts or quantities of something." }
    ]
  },
  {
    topic: "Comparative Adjectives",
    topicID: 21,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Comparative adjectives are used to compare two things." },
      { type: "example", content: "Examples: taller, smarter, faster." },
      { type: "usage", content: "Comparative adjectives are formed by adding '-er' or using 'more'." }
    ]
  },
  {
    topic: "Superlative Adjectives",
    topicID: 22,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Superlative adjectives describe the highest degree of a quality." },
      { type: "example", content: "Examples: tallest, smartest, fastest." },
      { type: "usage", content: "Superlatives are formed by adding '-est' or using 'most'." }
    ]
  },
  {
    topic: "This/That, These/Those",
    topicID: 23,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "This and that are used for singular nouns; these and those are used for plural nouns." },
      { type: "example", content: "Examples: 'This is my book.' 'These are my books.'" },
      { type: "usage", content: "Use 'this' or 'these' for things near, and 'that' or 'those' for things farther away." }
    ]
  },
  {
    topic: "There is/There are",
    topicID: 24,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Use 'there is' for singular things and 'there are' for plural things." },
      { type: "example", content: "Examples: 'There is a book on the table.' 'There are three books on the table.'" },
      { type: "usage", content: "This construction is used to state the existence or presence of something." }
    ]
  },
  {
    topic: "Punctuation",
    topicID: 25,
    isFinishedTopic: false,
    topicLevel: "Basic",
    topicExplanation: [
      { type: "definition", content: "Punctuation marks are used to clarify the meaning of sentences." },
      { type: "example", content: "Examples: period (.), question mark (?), comma (,)." },
      { type: "usage", content: "Correct punctuation is crucial for clear writing." }
    ]
  },

  // --- Intermediate Level ---
  {
    topic: "Tenses (Present, Past, Future)",
    topicID: 26,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Tenses indicate the time of an action or state." },
      { type: "example", content: "Examples: 'I eat.' (present) 'I ate.' (past) 'I will eat.' (future)" },
      { type: "usage", content: "Each tense is used to describe actions occurring in different times." }
    ]
  },
  {
    topic: "Continuous Tenses",
    topicID: 27,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Continuous tenses describe ongoing actions or states." },
      { type: "example", content: "Examples: 'I am eating.' (present continuous), 'I was eating.' (past continuous)." },
      { type: "usage", content: "Continuous tenses use forms of the verb 'to be' with the '-ing' form of the verb." }
    ]
  },
  {
    topic: "Perfect Tenses",
    topicID: 28,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Perfect tenses describe actions that were completed before another event." },
      { type: "example", content: "Examples: 'I have eaten.' (present perfect), 'I had eaten.' (past perfect)." },
      { type: "usage", content: "Perfect tenses use 'have' or 'had' with the past participle of the verb." }
    ]
  },
  {
    topic: "Conditional Sentences",
    topicID: 29,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Conditional sentences express situations that depend on certain conditions." },
      { type: "example", content: "Examples: 'If I study, I will pass the exam.'" },
      { type: "usage", content: "Conditional sentences are formed with 'if' and a result clause." }
    ]
  },
  {
    topic: "Passive Voice",
    topicID: 30,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Passive voice shifts the focus from the subject performing the action to the action itself." },
      { type: "example", content: "Examples: 'The book was read by her.'" },
      { type: "usage", content: "Use the passive voice to emphasize the action or receiver of the action." }
    ]
  },
  {
    topic: "Reported Speech",
    topicID: 31,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Reported speech is used to report what someone has said." },
      { type: "example", content: "Examples: 'She said she was tired.'" },
      { type: "usage", content: "In reported speech, the tense usually shifts back." }
    ]
  },
  {
    topic: "Relative Clauses",
    topicID: 32,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Relative clauses give more information about a noun." },
      { type: "example", content: "Examples: 'The man who is sitting there is my friend.'" },
      { type: "usage", content: "Relative clauses are often introduced with 'who', 'which', or 'that.'" }
    ]
  },
  {
    topic: "Articles with Countable/Uncountable Nouns",
    topicID: 33,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Use articles correctly with countable and uncountable nouns." },
      { type: "example", content: "Examples: 'I have an apple.' (countable) 'I have some water.' (uncountable)" },
      { type: "usage", content: "Use 'a' or 'an' with singular countable nouns and 'some' with uncountable nouns." }
    ]
  },
  {
    topic: "Modals of Deduction",
    topicID: 34,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Modals of deduction express how certain or uncertain we are about something." },
      { type: "example", content: "Examples: 'She must be at work.' 'She might be at work.'" },
      { type: "usage", content: "Modals like 'must', 'might', and 'could' are used for deductions." }
    ]
  },
  {
    topic: "Gerunds and Infinitives",
    topicID: 35,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Gerunds are the '-ing' form of a verb; infinitives are the base form of the verb preceded by 'to'." },
      { type: "example", content: "Examples: 'I like swimming.' (gerund), 'I want to swim.' (infinitive)" },
      { type: "usage", content: "Gerunds and infinitives can be used with different verbs, but their usage can vary." }
    ]
  },
  {
    topic: "Collocations",
    topicID: 36,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Collocations are words that frequently occur together in a language." },
      { type: "example", content: "Examples: 'make a decision', 'take a break.'" },
      { type: "usage", content: "Using common collocations improves the fluency and naturalness of your speech and writing." }
    ]
  },
  {
    topic: "Adjective + Noun Combinations",
    topicID: 37,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Some adjectives are often used with certain nouns to form common combinations." },
      { type: "example", content: "Examples: 'strong coffee', 'high expectations.'" },
      { type: "usage", content: "Learning adjective + noun combinations helps you sound more natural." }
    ]
  },
  {
    topic: "Phrasal Verbs",
    topicID: 38,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Phrasal verbs are verb phrases consisting of a verb and a particle (preposition or adverb)." },
      { type: "example", content: "Examples: 'give up', 'run into', 'take off.'" },
      { type: "usage", content: "Phrasal verbs can be tricky, but they are essential for sounding natural in English." }
    ]
  },
  {
    topic: "Question Tags",
    topicID: 39,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Question tags are short questions added to the end of a statement." },
      { type: "example", content: "Examples: 'You're coming to the party, aren't you?' 'It's cold today, isn't it?'" },
      { type: "usage", content: "Question tags confirm or clarify information." }
    ]
  },
  {
    topic: "Direct and Indirect Objects",
    topicID: 40,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    topicExplanation: [
      { type: "definition", content: "Direct objects receive the action of the verb; indirect objects indicate who or what benefits from the action." },
      { type: "example", content: "Examples: 'I gave him the book.' (direct object = book, indirect object = him)" },
      { type: "usage", content: "Understanding direct and indirect objects is key to constructing more complex sentences." }
    ]
  },

  // --- Advanced Level ---
  {
    topic: "Inversion for Emphasis",
    topicID: 41,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Inversion involves changing the normal word order of a sentence for emphasis or style." },
      { type: "example", content: "Example: 'Never have I seen such a beautiful sunset.'" },
      { type: "usage", content: "Inversion can be used to emphasize ideas or create more formal sentences." }
    ]
  },
  {
    topic: "Causative Form",
    topicID: 42,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Causative forms describe actions that are done by someone else on behalf of the subject." },
      { type: "example", content: "Examples: 'I had my hair cut.' 'She got her car repaired.'" },
      { type: "usage", content: "Causative forms use 'have' or 'get' followed by a past participle." }
    ]
  },
  {
    topic: "Complex Sentences with Subordinate Clauses",
    topicID: 43,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Complex sentences contain a main clause and one or more subordinate clauses." },
      { type: "example", content: "Examples: 'I stayed home because I was sick.'" },
      { type: "usage", content: "Subordinate clauses can function as subjects, objects, or adverbs in a sentence." }
    ]
  },
  {
    topic: "Ellipsis in Sentences",
    topicID: 44,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Ellipsis omits certain parts of a sentence to avoid repetition." },
      { type: "example", content: "Examples: 'She loves coffee; he, tea.'" },
      { type: "usage", content: "Ellipsis helps in making sentences more concise." }
    ]
  },
  {
    topic: "Nominalization",
    topicID: 45,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Nominalization is the process of converting verbs or adjectives into nouns." },
      { type: "example", content: "Examples: 'decide' → 'decision', 'happy' → 'happiness.'" },
      { type: "usage", content: "Nominalization helps to create more formal or academic language." }
    ]
  },
  {
    topic: "Relative Pronouns in Complex Sentences",
    topicID: 46,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Relative pronouns link relative clauses to main clauses." },
      { type: "example", content: "Examples: 'The book which I read is great.'" },
      { type: "usage", content: "Relative pronouns like 'who', 'whom', 'whose' are used in more advanced sentence structures." }
    ]
  },
  {
    topic: "Subjunctive Mood",
    topicID: 47,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "The subjunctive mood is used to express wishes, doubts, or hypothetical situations." },
      { type: "example", content: "Examples: 'I wish I were there.' 'If I were you, I would leave.'" },
      { type: "usage", content: "The subjunctive is used in more formal, hypothetical, or unreal situations." }
    ]
  },
  {
    topic: "Parallel Structure",
    topicID: 48,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Parallel structure involves using the same pattern of words to show that two or more ideas have the same level of importance." },
      { type: "example", content: "Examples: 'She likes reading, writing, and swimming.'" },
      { type: "usage", content: "Parallel structure makes writing clearer and more balanced." }
    ]
  },
  {
    topic: "Conditional Clauses (Advanced)",
    topicID: 49,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Advanced conditional sentences express more complex situations, often involving hypothetical or unreal scenarios." },
      { type: "example", content: "Examples: 'If I had known, I would have helped you.'" },
      { type: "usage", content: "Conditional clauses can express regret, possibility, or hypothetical situations." }
    ]
  },
  {
    topic: "Inversion after Negative Adverbials",
    topicID: 50,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Inversion occurs after negative adverbials for emphasis or formality." },
      { type: "example", content: "Examples: 'Never have I seen such a beautiful painting.'" },
      { type: "usage", content: "Inversion with negative adverbials is common in formal writing and for emphasis." }
    ]
  },
  {
    topic: "The Future Perfect Tense",
    topicID: 51,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "The future perfect tense expresses an action that will be completed before another point in the future." },
      { type: "example", content: "Examples: 'By next year, I will have finished my project.'" },
      { type: "usage", content: "The future perfect tense is used to describe actions that will be completed by a certain future time." }
    ]
  },
  {
    topic: "Verb Patterns with Prepositions",
    topicID: 52,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Verb patterns with prepositions refer to how certain verbs are followed by specific prepositions." },
      { type: "example", content: "Examples: 'interested in', 'good at', 'rely on.'" },
      { type: "usage", content: "Learning these patterns helps in constructing more natural sentences." }
    ]
  },
  {
    topic: "Complex Sentence Structures",
    topicID: 53,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    topicExplanation: [
      { type: "definition", content: "Complex sentence structures use multiple clauses, including main and subordinate clauses, to create more nuanced sentences." },
      { type: "example", content: "Examples: 'Although he was tired, he finished his work.'" },
      { type: "usage", content: "Complex sentences are important for expressing more detailed thoughts and ideas." }
    ]
  }
]
let searchParams = new URLSearchParams(location.search);
let topicId;
console.log(searchParams);
if (searchParams.has('t')) {
    topicId = searchParams.get('t') ;
    console.log(topicId);  
    document.getElementById("main").style.display = "flex";
} else{
    alert('Unable to load topic');
    document.getElementById("notFound").style.display = "flex";
    // location.href = "./dashboard.html"
}
const displayExplanation = ()=>{
  if (document.getElementById("main")) {
    const main = document.getElementById("main");
    main.innerHTML += `
      <div>
      <ul><h2>${topicsAndExplanations[topicId - 1].topic}</h2>
        <li>${topicsAndExplanations[topicId - 1].topicExplanation[0].type}:${topicsAndExplanations[topicId - 1].topicExplanation[0].content}</li>
      </ul>
      </div>
    `;
    document.body.addEventListener("click", ()=>{
      main.innerHTML += `
       <div>
       <li>${topicsAndExplanations[topicId - 1].topicExplanation[0].type}:${topicsAndExplanations[topicId - 1].topicExplanation[0].content}</li>
      </div>
      `;
      console.log('clicked')
    });
  }
};
displayExplanation()
console.log(topicsAndExplanations[topicId].topic);
