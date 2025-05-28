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
export let topicsAndExplanations = [
  // --- Basic Level ---
  {
    topic: "Introduction to English Grammar",
    topicID: 1,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: false,
    topicExplanation: [
      { type: "definition", content: "Grammar is the system of rules that govern the structure of sentences in a language." },
      { type: "example", content: "Example: 'She eats breakfast every morning.'" },
      { type: "usage", content: "Grammar helps in constructing clear, correct sentences in both speaking and writing." },
      { type: "tips", content: "Start with basic parts of speech before moving to complex sentence structures." },
      { type: "common-Mistakes", content: "Ignoring subject-verb agreement or misplacing modifiers." },
      { type: "importance", content: "Strong grammar skills improve clarity and credibility in communication." },
      { type: "practice", content: "Try identifying the parts of speech in a simple sentence." }
    ]
  },
  {
    topic: "Nouns",
    topicID: 2,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Nouns are words that name people, places, things, or ideas." },
      { type: "example", content: "Examples: dog, happiness, car, city." },
      { type: "usage", content: "Nouns can be either singular (one) or plural (more than one)." },
      { type: "tips", content: "Identify if the noun is concrete (can be touched) or abstract (an idea)." },
      { type: "common-Mistakes", content: "Using plural forms incorrectly or confusing countable vs uncountable nouns." },
      { type: "importance", content: "Nouns form the core building blocks of most sentences." },
      { type: "practice", content: "List five nouns from your surroundings and identify their type." }
    ]
  },
  {
    topic: "Pronouns",
    topicID: 3,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Pronouns are words used to replace nouns in sentences." },
      { type: "example", content: "Examples: he, she, it, they. 'Sarah is happy because she won.'" },
      { type: "usage", content: "Pronouns avoid repeating nouns and make sentences less awkward." },
      { type: "tips", content: "Ensure pronouns clearly refer to the right noun (antecedent)." },
      { type: "common-Mistakes", content: "Vague pronoun reference or mismatched pronoun and antecedent." },
      { type: "importance", content: "Pronouns improve sentence flow and avoid repetition." },
      { type: "practice", content: "Write a paragraph and replace all nouns with appropriate pronouns." }
    ]
  },
  {
    topic: "Verbs",
    topicID: 4,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Verbs are words that describe actions or states of being." },
      { type: "example", content: "Examples: run, jump, is, eat." },
      { type: "usage", content: "Verbs are essential for forming sentences and describing what happens." },
      { type: "tips", content: "Learn regular vs irregular verb forms early." },
      { type: "common-Mistakes", content: "Confusing verb tenses or using the wrong auxiliary verb." },
      { type: "importance", content: "Verbs are the heart of sentence construction." },
      { type: "practice", content: "List 10 action verbs and use each in a sentence." }
    ]
  },
  {
    topic: "Adjectives",
    topicID: 5,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Adjectives are words that describe or modify nouns." },
      { type: "example", content: "Examples: happy, tall, blue, old." },
      { type: "usage", content: "Adjectives provide more information about a noun in a sentence." },
      { type: "tips", content: "Use adjectives to add detail and interest to your writing." },
      { type: "common-Mistakes", content: "Using too many adjectives can clutter a sentence." },
      { type: "importance", content: "They enhance clarity by specifying characteristics." },
      { type: "practice", content: "Describe five items around you using three adjectives each." }
    ]
  },
  {
    topic: "Adverbs",
    topicID: 6,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Adverbs describe how, when, or where an action takes place." },
      { type: "example", content: "Examples: quickly, often, here, very." },
      { type: "usage", content: "Adverbs modify verbs, adjectives, or other adverbs. Example: 'She runs quickly.'" },
      { type: "tips", content: "Look for words ending in '-ly' to spot many adverbs." },
      { type: "common-Mistakes", content: "Using adjectives instead of adverbs, e.g., 'She runs quick' instead of 'quickly'." },
      { type: "importance", content: "They give more detail about the action, improving clarity." },
      { type: "practice", content: "Write five sentences and modify the verbs using different adverbs." }
    ]
  },
  {
    topic: "Prepositions",
    topicID: 7,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Prepositions show the relationship between a noun or pronoun and other words in a sentence." },
      { type: "example", content: "Examples: on, at, under, between." },
      { type: "usage", content: "Prepositions help indicate direction, place, or time." },
      { type: "tips", content: "Learn common prepositional phrases like 'in front of' and 'next to'." },
      { type: "common-Mistakes", content: "Using wrong prepositions, e.g., 'interested on' instead of 'interested in'." },
      { type: "importance", content: "Prepositions clarify relationships in sentences." },
      { type: "practice", content: "Identify prepositions in a paragraph and list them." }
    ]
  },
  {
    topic: "Conjunctions",
    topicID: 8,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Conjunctions connect words, phrases, or clauses." },
      { type: "example", content: "Examples: and, but, or, because." },
      { type: "usage", content: "Conjunctions help join ideas and make sentences more fluid." },
      { type: "tips", content: "Use 'FANBOYS' to remember common coordinating conjunctions." },
      { type: "common-Mistakes", content: "Starting a sentence with a conjunction incorrectly." },
      { type: "importance", content: "They improve sentence flow and reduce repetition." },
      { type: "practice", content: "Combine two related short sentences using conjunctions." }
    ]
  },
  {
    topic: "Interjections",
    topicID: 9,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Interjections are words or phrases used to express emotions or sudden reactions." },
      { type: "example", content: "Examples: Wow!, Oops!, Ah!" },
      { type: "usage", content: "Interjections add emotional context to conversations." },
      { type: "tips", content: "Interjections are often followed by exclamation marks or commas." },
      { type: "common-Mistakes", content: "Overusing interjections can make writing seem informal." },
      { type: "importance", content: "They convey emotion and spontaneity in speech." },
      { type: "practice", content: "List 5 interjections and use them in expressive sentences." }
    ]
  },
  {
    topic: "Articles",
    topicID: 10,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Articles are used to define nouns as specific or unspecific." },
      { type: "example", content: "Examples: a, an, the. 'I saw a dog.' 'The dog is mine.'" },
      { type: "usage", content: "Use 'a' or 'an' for indefinite nouns and 'the' for specific nouns." },
      { type: "tips", content: "Use 'an' before vowel sounds and 'a' before consonant sounds." },
      { type: "common-Mistakes", content: "Mixing 'a' and 'an' or omitting 'the' where necessary." },
      { type: "importance", content: "Articles help specify the noun's identity or quantity." },
      { type: "practice", content: "Write 5 sentences using each article at least once." }
    ]
  },
  {
    topic: "Possessive Nouns",
    topicID: 11,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Possessive nouns show ownership or possession." },
      { type: "example", content: "Examples: Sarah's book, the dog's collar." },
      { type: "usage", content: "Add an apostrophe and 's' to form possessives for singular nouns." },
      { type: "tips", content: "For plural nouns ending in 's', just add an apostrophe (e.g., boys' room)." },
      { type: "common-Mistakes", content: "Confusing plural forms with possessive forms." },
      { type: "importance", content: "They clarify who owns or is related to something." },
      { type: "practice", content: "Change 5 plural nouns into their possessive form." }
    ]
  },
  {
    topic: "Subject-Verb Agreement",
    topicID: 12,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Subject-verb agreement means the subject and verb in a sentence must match in number (singular/plural)." },
      { type: "example", content: "Examples: 'She runs.' (singular) 'They run.' (plural)." },
      { type: "usage", content: "Make sure the subject and verb agree in number for clear sentences." },
      { type: "tips", content: "Identify the true subject of the sentence to match the verb correctly." },
      { type: "common-Mistakes", content: "Getting confused when subjects are separated by phrases or clauses." },
      { type: "importance", content: "It keeps your sentences grammatically correct and understandable." },
      { type: "practice", content: "Write 5 sentences and underline the subject and verb." }
    ]
  },
  {
    topic: "Plural Nouns",
    topicID: 13,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Plural nouns refer to more than one person, place, or thing." },
      { type: "example", content: "Examples: dogs, books, cars." },
      { type: "usage", content: "Most plural nouns are formed by adding 's' to the singular form." },
      { type: "tips", content: "Learn the irregular plural forms (e.g., child → children)." },
      { type: "common-Mistakes", content: "Using singular verbs with plural nouns and vice versa." },
      { type: "importance", content: "They indicate quantity and help with accurate communication." },
      { type: "practice", content: "Write 10 singular nouns and convert them to plural." }
    ]
  },
  {
    topic: "Singular Nouns",
    topicID: 14,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Singular nouns refer to one person, place, or thing." },
      { type: "example", content: "Examples: dog, book, car." },
      { type: "usage", content: "A singular noun represents just one item or entity." },
      { type: "tips", content: "Pair singular nouns with singular verbs." },
      { type: "common-Mistakes", content: "Using plural modifiers or verbs with singular nouns." },
      { type: "importance", content: "They are the default form for many nouns." },
      { type: "practice", content: "Pick 10 plural nouns and convert them to singular." }
    ]
  },
  {
    topic: "Regular Verbs",
    topicID: 15,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Regular verbs follow a predictable pattern when forming past tense, usually by adding '-ed'." },
      { type: "example", content: "Examples: walk → walked, talk → talked." },
      { type: "usage", content: "Regular verbs are easy to conjugate and form the past tense by adding '-ed'." },
      { type: "tips", content: "Watch for spelling rules like 'stop → stopped' (double consonant)." },
      { type: "common-Mistakes", content: "Misapplying the -ed rule or using irregular verbs by mistake." },
      { type: "importance", content: "They simplify learning verb conjugation." },
      { type: "practice", content: "Write 10 regular verbs and convert them to past tense." }
    ]
  },
  {
    topic: "Irregular Verbs",
    topicID: 16,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Irregular verbs do not follow the typical '-ed' rule for past tense formation." },
      { type: "example", content: "Examples: go → went, eat → ate." },
      { type: "usage", content: "Irregular verbs need to be memorized as their past forms are not consistent." },
      { type: "tips", content: "Make a list of common irregular verbs and study them regularly." },
      { type: "common-Mistakes", content: "Using regular patterns with irregular verbs, e.g., 'goed' instead of 'went'." },
      { type: "importance", content: "They are essential for fluent conversation and writing." },
      { type: "practice", content: "List 10 irregular verbs and write their past tense forms." }
    ]
  },
  {
    topic: "Contractions",
    topicID: 17,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Contractions are shortened forms of two words combined into one." },
      { type: "example", content: "Examples: I'm (I am), don't (do not), they're (they are)." },
      { type: "usage", content: "Contractions are commonly used in informal writing and speaking." },
      { type: "tips", content: "Avoid using contractions in formal or academic writing." },
      { type: "common-Mistakes", content: "Mixing up similar contractions like 'your' and 'you're'." },
      { type: "importance", content: "They help conversations sound natural and fluent." },
      { type: "practice", content: "Write 5 full sentences and rewrite them using contractions." }
    ]
  },
  {
    topic: "Question Forms",
    topicID: 18,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Question forms are used to ask about something." },
      { type: "example", content: "Examples: 'What is your name?' 'Where do you live?'" },
      { type: "usage", content: "Questions can start with 'who', 'what', 'where', 'how', and 'why.'" },
      { type: "tips", content: "Practice using auxiliary verbs (do, does, did) for questions." },
      { type: "common-Mistakes", content: "Forgetting auxiliary verbs or incorrect word order." },
      { type: "importance", content: "Questions are essential for conversation and information gathering." },
      { type: "practice", content: "Write 10 questions using different question words." }
    ]
  },
  {
    topic: "Imperatives",
    topicID: 19,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Imperatives are commands or requests." },
      { type: "example", content: "Examples: 'Sit down.', 'Please pass the salt.'" },
      { type: "usage", content: "Use imperatives to give instructions, orders, or requests." },
      { type: "tips", content: "Add 'please' to make imperatives more polite." },
      { type: "common-Mistakes", content: "Using the subject 'you' unnecessarily in imperative sentences." },
      { type: "importance", content: "They are useful in instructions, recipes, and daily interactions." },
      { type: "practice", content: "Write 5 commands and 5 polite requests using the imperative form." }
    ]
  },
  {
    topic: "Quantifiers",
    topicID: 20,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Quantifiers tell us how much or how many of something." },
      { type: "example", content: "Examples: some, much, many, few." },
      { type: "usage", content: "Use quantifiers to express amounts or quantities of something." },
      { type: "tips", content: "'Many' is used with countable nouns; 'much' with uncountable nouns." },
      { type: "common-Mistakes", content: "Mixing up 'much' and 'many' or using them with the wrong noun type." },
      { type: "importance", content: "They help describe quantities clearly and precisely." },
      { type: "practice", content: "List 10 nouns and add a suitable quantifier to each." }
    ]
  },
  {
    topic: "Comparative Adjectives",
    topicID: 21,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Comparative adjectives are used to compare two things." },
      { type: "example", content: "Examples: taller, smarter, faster." },
      { type: "usage", content: "Comparative adjectives are formed by adding '-er' or using 'more'." },
      { type: "tips", content: "Use 'than' to show comparison, e.g., 'She is taller than him.'" },
      { type: "common-Mistakes", content: "Using 'more' and '-er' together, e.g., 'more taller'." },
      { type: "importance", content: "They help compare qualities and make sentences more informative." },
      { type: "practice", content: "Write 5 comparative sentences using different adjectives." }
    ]
  },
  {
    topic: "Superlative Adjectives",
    topicID: 22,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Superlative adjectives describe the highest degree of a quality." },
      { type: "example", content: "Examples: tallest, smartest, fastest." },
      { type: "usage", content: "Superlatives are formed by adding '-est' or using 'most'." },
      { type: "tips", content: "Use 'the' before superlative adjectives, e.g., 'She is the smartest student.'" },
      { type: "common-Mistakes", content: "Omitting 'the' or combining 'most' with '-est'." },
      { type: "importance", content: "They identify extremes and highlight distinctions." },
      { type: "practice", content: "Write 5 superlative sentences using different adjectives." }
    ]
  },
  {
    topic: "This/That, These/Those",
    topicID: 23,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "This and that are used for singular nouns; these and those are used for plural nouns." },
      { type: "example", content: "Examples: 'This is my book.' 'These are my books.'" },
      { type: "usage", content: "Use 'this' or 'these' for things near, and 'that' or 'those' for things farther away." },
      { type: "tips", content: "Pair them with gestures or context to clarify meaning." },
      { type: "common-Mistakes", content: "Mixing singular and plural forms, e.g., 'this books'." },
      { type: "importance", content: "They help point out specific things clearly in conversation." },
      { type: "practice", content: "Write 4 sentences using each demonstrative word correctly." }
    ]
  },
  {
    topic: "There is/There are",
    topicID: 24,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Use 'there is' for singular things and 'there are' for plural things." },
      { type: "example", content: "Examples: 'There is a book on the table.' 'There are three books on the table.'" },
      { type: "usage", content: "This construction is used to state the existence or presence of something." },
      { type: "tips", content: "Start descriptive sentences with 'there is/are' to sound natural." },
      { type: "common-Mistakes", content: "Using 'is' with plural or 'are' with singular." },
      { type: "importance", content: "Essential for describing scenes and situations." },
      { type: "practice", content: "Write 5 sentences using 'there is' and 5 using 'there are'." }
    ]
  },
  {
    topic: "Punctuation",
    topicID: 25,
    isFinishedTopic: false,
    topicLevel: "Basic",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Punctuation marks are used to clarify the meaning of sentences." },
      { type: "example", content: "Examples: period (.), question mark (?), comma (,)." },
      { type: "usage", content: "Correct punctuation is crucial for clear writing." },
      { type: "tips", content: "Always end sentences with proper punctuation." },
      { type: "common-Mistakes", content: "Overusing commas or forgetting end punctuation." },
      { type: "importance", content: "It ensures clarity, flow, and proper sentence structure." },
      { type: "practice", content: "Rewrite a paragraph with missing punctuation." }
    ]
  },
  {
    topic: "Tenses (Present, Past, Future)",
    topicID: 26,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Tenses indicate the time of an action or state." },
      { type: "example", content: "Examples: 'I eat.' (present) 'I ate.' (past) 'I will eat.' (future)" },
      { type: "usage", content: "Each tense is used to describe actions occurring in different times." },
      { type: "tips", content: "Identify time clues in sentences like 'yesterday' or 'tomorrow'." },
      { type: "common-Mistakes", content: "Using the wrong verb form for a given time." },
      { type: "importance", content: "Tenses are essential for understanding and expressing time." },
      { type: "practice", content: "Write one sentence each for present, past, and future tense." }
    ]
  },
  {
    topic: "Continuous Tenses",
    topicID: 27,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Continuous tenses describe ongoing actions or states." },
      { type: "example", content: "Examples: 'I am eating.' (present continuous), 'I was eating.' (past continuous)." },
      { type: "usage", content: "Continuous tenses use forms of the verb 'to be' with the '-ing' form of the verb." },
      { type: "tips", content: "Use continuous tenses for temporary or in-progress actions." },
      { type: "common-Mistakes", content: "Using base verbs instead of '-ing' forms." },
      { type: "importance", content: "They help describe actions that happen over a period of time." },
      { type: "practice", content: "Write 5 sentences using different continuous tenses." }
    ]
  },
  {
    topic: "Perfect Tenses",
    topicID: 28,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Perfect tenses describe actions that were completed before another event." },
      { type: "example", content: "Examples: 'I have eaten.' (present perfect), 'I had eaten.' (past perfect)." },
      { type: "usage", content: "Perfect tenses use 'have' or 'had' with the past participle of the verb." },
      { type: "tips", content: "Learn the past participles of irregular verbs." },
      { type: "common-Mistakes", content: "Confusing perfect tenses with past simple." },
      { type: "importance", content: "They help show connections between different time frames." },
      { type: "practice", content: "Write 5 sentences using different perfect tenses." }
    ]
  },
  {
    topic: "Conditional Sentences",
    topicID: 29,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Conditional sentences express situations that depend on certain conditions." },
      { type: "example", content: "Examples: 'If I study, I will pass the exam.'" },
      { type: "usage", content: "Conditional sentences are formed with 'if' and a result clause." },
      { type: "tips", content: "Learn the different types: zero, first, second, and third conditionals." },
      { type: "common-Mistakes", content: "Using the wrong verb tense for the type of conditional." },
      { type: "importance", content: "Useful for expressing possibilities, hypotheses, and consequences." },
      { type: "practice", content: "Write an example of each type of conditional sentence." }
    ]
  },
  {
    topic: "Passive Voice",
    topicID: 30,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Passive voice shifts the focus from the subject performing the action to the action itself." },
      { type: "example", content: "Examples: 'The book was read by her.'" },
      { type: "usage", content: "Use the passive voice to emphasize the action or receiver of the action." },
      { type: "tips", content: "Use the correct form of 'to be' + past participle." },
      { type: "common-Mistakes", content: "Forgetting the past participle or using active structure instead." },
      { type: "importance", content: "It’s important for academic and formal writing." },
      { type: "practice", content: "Change 5 active sentences into passive voice." }
    ]
  },
  {
    topic: "Reported Speech",
    topicID: 31,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Reported speech is used to tell what someone else has said without quoting them directly." },
      { type: "example", content: "Example: She said she was tired." },
      { type: "usage", content: "In reported speech, verb tenses usually shift back one step (present → past, past → past perfect)." },
      { type: "tips", content: "Change pronouns and time expressions appropriately when reporting." },
      { type: "common-Mistakes", content: "Not changing tense or time expressions when switching to reported speech." },
      { type: "importance", content: "Helps relay information without repeating exact words." },
      { type: "practice", content: "Convert direct speech sentences into reported speech." }
    ]
  },
  {
    topic: "Relative Clauses",
    topicID: 32,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Relative clauses add extra information about a noun without starting a new sentence." },
      { type: "example", content: "Example: The man who is sitting there is my friend." },
      { type: "usage", content: "Common relative pronouns include who, which, that, whom, and whose." },
      { type: "tips", content: "Use 'who' for people and 'which' for things." },
      { type: "common-Mistakes", content: "Omitting relative pronouns when necessary or using incorrect ones." },
      { type: "importance", content: "Relative clauses make your writing more descriptive and concise." },
      { type: "practice", content: "Create sentences combining two ideas using relative clauses." }
    ]
  },
  {
    topic: "Articles with Countable/Uncountable Nouns",
    topicID: 33,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Articles are used differently with countable and uncountable nouns to show specificity or quantity." },
      { type: "example", content: "Examples: I have an apple. (countable), I have some water. (uncountable)" },
      { type: "usage", content: "Use 'a' or 'an' with singular countable nouns; 'some' or no article with uncountable nouns." },
      { type: "tips", content: "Uncountable nouns do not take plural forms and usually no indefinite article." },
      { type: "common-Mistakes", content: "Using 'a' or 'an' with uncountable nouns or plural nouns." },
      { type: "importance", content: "Correct article use makes your meaning clear and natural." },
      { type: "practice", content: "Identify articles and noun types in sample sentences." }
    ]
  },
  {
    topic: "Modals of Deduction",
    topicID: 34,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Modals of deduction express how sure or unsure we are about something." },
      { type: "example", content: "Examples: She must be at work. She might be at work." },
      { type: "usage", content: "Use modals like must, might, could, can't to show different levels of certainty." },
      { type: "tips", content: "Pay attention to context to choose the correct modal." },
      { type: "common-Mistakes", content: "Using modals incorrectly to express certainty or impossibility." },
      { type: "importance", content: "They help communicate degrees of probability or certainty." },
      { type: "practice", content: "Make sentences using different modals of deduction." }
    ]
  },
  {
    topic: "Gerunds and Infinitives",
    topicID: 35,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Gerunds are verbs ending in -ing used as nouns; infinitives are 'to' + base verb." },
      { type: "example", content: "Examples: I like swimming. (gerund), I want to swim. (infinitive)" },
      { type: "usage", content: "Some verbs are followed by gerunds, others by infinitives, and some by both with different meanings." },
      { type: "tips", content: "Learn common verbs with gerunds (enjoy, avoid) and infinitives (want, hope)." },
      { type: "common-Mistakes", content: "Confusing when to use gerund or infinitive after certain verbs." },
      { type: "importance", content: "Using gerunds and infinitives correctly makes your English more accurate." },
      { type: "practice", content: "List verbs and practice sentences with gerunds and infinitives." }
    ]
  },
  {
    topic: "Collocations",
    topicID: 36,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Collocations are common word pairings or groups that sound natural together." },
      { type: "example", content: "Examples: make a decision, take a break." },
      { type: "usage", content: "Using collocations correctly helps your English sound fluent and native-like." },
      { type: "tips", content: "Learn collocations by theme or frequent usage." },
      { type: "common-Mistakes", content: "Using incorrect or unnatural word combinations." },
      { type: "importance", content: "Mastering collocations improves speaking and writing flow." },
      { type: "practice", content: "Match verbs with correct nouns in collocations." }
    ]
  },
  {
    topic: "Adjective + Noun Combinations",
    topicID: 37,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Certain adjectives often pair naturally with specific nouns." },
      { type: "example", content: "Examples: strong coffee, high expectations." },
      { type: "usage", content: "Using common adjective + noun pairs helps you sound more natural." },
      { type: "tips", content: "Practice common adjective + noun combinations by topic." },
      { type: "common-Mistakes", content: "Mixing incompatible adjectives and nouns." },
      { type: "importance", content: "These combinations enrich vocabulary and expression." },
      { type: "practice", content: "Write sentences using adjective + noun pairs." }
    ]
  },
  {
    topic: "Phrasal Verbs",
    topicID: 38,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Phrasal verbs are verbs combined with prepositions or adverbs creating new meanings." },
      { type: "example", content: "Examples: give up, run into, take off." },
      { type: "usage", content: "Phrasal verbs are common in everyday English and often informal." },
      { type: "tips", content: "Learn phrasal verbs in context to remember meanings." },
      { type: "common-Mistakes", content: "Misusing or misunderstanding phrasal verbs." },
      { type: "importance", content: "They are essential for fluency and natural communication." },
      { type: "practice", content: "Use phrasal verbs in dialogues or sentences." }
    ]
  },
  {
    topic: "Question Tags",
    topicID: 39,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Question tags are short questions added to statements to confirm or check information." },
      { type: "example", content: "Examples: You're coming, aren't you? It's cold, isn't it?" },
      { type: "usage", content: "If the statement is positive, the tag is negative and vice versa." },
      { type: "tips", content: "Match the verb and subject in the tag to the main sentence." },
      { type: "common-Mistakes", content: "Using wrong auxiliary verbs or mismatching positive/negative." },
      { type: "importance", content: "They make conversations more interactive and engaging." },
      { type: "practice", content: "Add question tags to given statements." }
    ]
  },
  {
    topic: "Direct and Indirect Objects",
    topicID: 40,
    isFinishedTopic: false,
    topicLevel: "Intermediate",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Direct objects receive the action of the verb; indirect objects tell who or what benefits from the action." },
      { type: "example", content: "Example: I gave him the book. (direct object = book, indirect object = him)" },
      { type: "usage", content: "Indirect objects usually come before the direct object without a preposition." },
      { type: "tips", content: "Identify objects by asking 'what?' or 'to/for whom?' after the verb." },
      { type: "common-Mistakes", content: "Confusing direct and indirect objects or misplacing prepositions." },
      { type: "importance", content: "Understanding these objects improves sentence clarity and complexity." },
      { type: "practice", content: "Label direct and indirect objects in sentences." }
    ]
  },

  // --- Advanced Level ---
    {
    topic: "Inversion for Emphasis",
    topicID: 41,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Inversion involves changing the normal word order of a sentence for emphasis or style." },
      { type: "example", content: "Example: 'Never have I seen such a beautiful sunset.'" },
      { type: "usage", content: "Inversion can be used to emphasize ideas or create more formal sentences." },
      { type: "tips", content: "Common inversion starts with negative adverbs or adverbial phrases." },
      { type: "common-Mistakes", content: "Avoid using inversion in informal writing unless for effect." },
      { type: "importance", content: "It adds variety and emphasis in formal or literary contexts." },
      { type: "practice", content: "Rewrite sentences to use inversion for emphasis." }
    ]
  },
  {
    topic: "Causative Form",
    topicID: 42,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Causative forms describe actions done by someone else on behalf of the subject." },
      { type: "example", content: "Examples: 'I had my hair cut.' 'She got her car repaired.'" },
      { type: "usage", content: "Use 'have' or 'get' + object + past participle to form causative sentences." },
      { type: "tips", content: "Distinguish between active and causative forms for clarity." },
      { type: "common-Mistakes", content: "Incorrect word order or missing the object in causative structures." },
      { type: "importance", content: "Useful for describing services or actions performed by others." },
      { type: "practice", content: "Create sentences using 'have' and 'get' in causative form." }
    ]
  },
  {
    topic: "Complex Sentences with Subordinate Clauses",
    topicID: 43,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Complex sentences contain a main clause and one or more subordinate clauses." },
      { type: "example", content: "Example: 'I stayed home because I was sick.'" },
      { type: "usage", content: "Subordinate clauses can act as subjects, objects, or adverbials." },
      { type: "tips", content: "Use subordinating conjunctions like because, although, since." },
      { type: "common-Mistakes", content: "Avoid run-on sentences and comma splices." },
      { type: "importance", content: "Complex sentences express detailed and nuanced ideas." },
      { type: "practice", content: "Combine simple sentences into complex ones using subordinate clauses." }
    ]
  },
  {
    topic: "Ellipsis in Sentences",
    topicID: 44,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Ellipsis is the omission of parts of a sentence to avoid repetition." },
      { type: "example", content: "Example: 'She loves coffee; he, tea.'" },
      { type: "usage", content: "Ellipsis makes sentences concise and avoids redundancy." },
      { type: "tips", content: "Ellipsis often involves leaving out repeated verbs or phrases." },
      { type: "common-Mistakes", content: "Overusing ellipsis can confuse the reader." },
      { type: "importance", content: "It helps improve sentence flow and brevity." },
      { type: "practice", content: "Rewrite sentences using ellipsis to omit repeated elements." }
    ]
  },
  {
    topic: "Nominalization",
    topicID: 45,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Nominalization converts verbs or adjectives into nouns." },
      { type: "example", content: "Examples: 'decide' → 'decision', 'happy' → 'happiness.'" },
      { type: "usage", content: "Used to create more formal or academic language." },
      { type: "tips", content: "Identify common suffixes like -tion, -ment, -ness." },
      { type: "common-Mistakes", content: "Excessive nominalization can make writing dense." },
      { type: "importance", content: "Nominalization helps in writing formal and objective texts." },
      { type: "practice", content: "Transform verbs and adjectives into nouns in sentences." }
    ]
  },
  {
    topic: "Relative Pronouns in Complex Sentences",
    topicID: 46,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Relative pronouns link relative clauses to main clauses." },
      { type: "example", content: "Example: 'The book which I read is great.'" },
      { type: "usage", content: "Common relative pronouns include who, whom, whose, which, that." },
      { type: "tips", content: "Use 'who' for people and 'which' for things." },
      { type: "common-Mistakes", content: "Confusing relative pronouns or omitting necessary ones." },
      { type: "importance", content: "They add detail and specify which person or thing is meant." },
      { type: "practice", content: "Write sentences using different relative pronouns." }
    ]
  },
  {
    topic: "Subjunctive Mood",
    topicID: 47,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "The subjunctive mood expresses wishes, doubts, or hypothetical situations." },
      { type: "example", content: "Examples: 'I wish I were there.' 'If I were you, I would leave.'" },
      { type: "usage", content: "Used in formal statements of wish, demand, or condition." },
      { type: "tips", content: "Remember the subjunctive uses 'were' instead of 'was' in hypotheticals." },
      { type: "common-Mistakes", content: "Using indicative mood instead of subjunctive in wishes." },
      { type: "importance", content: "It expresses unreal or hypothetical ideas clearly." },
      { type: "practice", content: "Create sentences expressing wishes or hypothetical situations." }
    ]
  },
  {
    topic: "Parallel Structure",
    topicID: 48,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Parallel structure means using the same pattern of words to show equal importance." },
      { type: "example", content: "Example: 'She likes reading, writing, and swimming.'" },
      { type: "usage", content: "Maintain consistency in lists or paired ideas." },
      { type: "tips", content: "Use the same grammatical form (verbs, nouns) in a series." },
      { type: "common-Mistakes", content: "Mixing verb forms or structures in a list." },
      { type: "importance", content: "Parallelism improves clarity and rhythm in writing." },
      { type: "practice", content: "Rewrite sentences to make them parallel." }
    ]
  },
  {
    topic: "Conditional Clauses (Advanced)",
    topicID: 49,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Advanced conditionals express hypothetical or unreal situations." },
      { type: "example", content: "Example: 'If I had known, I would have helped you.'" },
      { type: "usage", content: "Often use past perfect and modal verbs to show unreal past." },
      { type: "tips", content: "Distinguish between zero, first, second, and third conditionals." },
      { type: "common-Mistakes", content: "Mixing tenses incorrectly in conditional sentences." },
      { type: "importance", content: "Used for expressing regret, hypothetical outcomes, or possibilities." },
      { type: "practice", content: "Write sentences using different types of conditionals." }
    ]
  },
  {
    topic: "Inversion after Negative Adverbials",
    topicID: 50,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Inversion occurs after negative adverbials for emphasis or formality." },
      { type: "example", content: "Example: 'Never have I seen such a beautiful painting.'" },
      { type: "usage", content: "Common with negative adverbs like never, rarely, seldom." },
      { type: "tips", content: "Use inversion to create formal or emphatic effects in writing." },
      { type: "common-Mistakes", content: "Avoid using inversion in informal contexts unless stylistically intended." },
      { type: "importance", content: "Enhances emphasis and variety in sentence structures." },
      { type: "practice", content: "Rewrite sentences with negative adverbials to use inversion." }
    ]
  },
  {
    topic: "The Future Perfect Tense",
    topicID: 51,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "The future perfect tense describes an action that will be completed before a future time." },
      { type: "example", content: "Example: 'By next year, I will have finished my project.'" },
      { type: "usage", content: "Use 'will have' + past participle for this tense." },
      { type: "tips", content: "Combine with time expressions like 'by then', 'before that'." },
      { type: "common-Mistakes", content: "Confusing future perfect with simple future or present perfect." },
      { type: "importance", content: "Shows completion of future actions relative to another time." },
      { type: "practice", content: "Create sentences using the future perfect tense with time phrases." }
    ]
  },
  {
    topic: "Verb Patterns with Prepositions",
    topicID: 52,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Verb patterns with prepositions refer to verbs followed by specific prepositions." },
      { type: "example", content: "Examples: 'interested in', 'good at', 'rely on.'" },
      { type: "usage", content: "Correct verb + preposition combinations are essential for natural speech." },
      { type: "tips", content: "Memorize common verb-preposition pairs to avoid errors." },
      { type: "common-Mistakes", content: "Incorrect or omitted prepositions after certain verbs." },
      { type: "importance", content: "Helps learners produce more fluent and accurate sentences." },
      { type: "practice", content: "Practice sentences using verbs with their correct prepositions." }
    ]
  },
  {
    topic: "Complex Sentence Structures",
    topicID: 53,
    isFinishedTopic: false,
    topicLevel: "Advanced",
    locked: true,
    topicExplanation: [
      { type: "definition", content: "Complex sentences contain multiple clauses, including main and subordinate clauses." },
      { type: "example", content: "Example: 'Although he was tired, he finished his work.'" },
      { type: "usage", content: "Used to express detailed, nuanced thoughts and relationships." },
      { type: "tips", content: "Use conjunctions like although, because, since, while to link clauses." },
      { type: "common-Mistakes", content: "Avoid run-ons and comma splices when joining clauses." },
      { type: "importance", content: "Essential for advanced writing and clear communication." },
      { type: "practice", content: "Combine simple sentences into complex ones using appropriate conjunctions." }
    ]
  }
]
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
let userId;
const searchParams = new URLSearchParams(location.search);
if (searchParams.has("id")) {
  userId = searchParams.get("id");
} //else{
//   location.href = "../auth/signin.html"
// }
const main = document.getElementById("main");

const displayTopics = ()=>{
  topicsAndExplanations.forEach((eachTopicAndExplanation, index) => {
  const isFirst = index === 0;
  const isLast = index === 52;
  const isFinished = eachTopicAndExplanation.isFinishedTopic;

  const locked = eachTopicAndExplanation.locked;
  const shouldBlur = locked && !isFinished;
  // console.log(shouldBlur)
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
        window.location.href=`./topic.html?id=${userId}&t=${name}`
        topicsAndExplanations[name-1].locked == false;
    })
  })
}

console.log(topicsAndExplanations.filter(topicsAndExplanation=>topicsAndExplanation.isFinishedTopic))