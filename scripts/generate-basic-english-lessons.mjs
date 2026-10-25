/**
 * Generator script to create comprehensive 90-day Basic English learning data.
 * Covers:
 * 1. Learn Basic English (3–5 sentences)
 * 2. Sentence Formation Practice (2–3 graded exercises)
 * 3. Related Interview Question (Interview question, Hindi explanation, combined sample answer, Hindi explanation of sample answer, customization tip)
 * Following the required progression:
 * - Days 1–15: Self-Introduction
 * - Days 16–30: Daily Routines
 * - Days 31–45: Education and Interests
 * - Days 46–60: Past Experiences
 * - Days 61–75: Project Explanations
 * - Days 76–90: HR & Technical Interview Questions
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Days 1–15: Self-Introduction progression
const INTERVIEW_QUESTIONS_BLOCK1 = [
  // Day 1
  {
    question: "Tell me about yourself.",
    questionHindi: "अपने बारे में कुछ बताइए। (इंटरव्यू का सबसे आम और महत्वपूर्ण पहला सवाल)",
    patternsUsed: "Subject + am + noun ➔ am + verb-ing ➔ want to + base verb",
    sampleAnswer: "My name is [your name]. I am a student. I am studying Computer Science. I want to become a software engineer.",
    sampleAnswerHindi: "सरल व्याख्या: यहाँ आपने सीखे हुए वाक्यों को जोड़कर अपना परिचय दिया है: 'मेरा नाम [आपका नाम] है। मैं एक विद्यार्थी हूँ। मैं कंप्यूटर साइंस पढ़ रहा हूँ। मैं एक सॉफ्टवेयर इंजीनियर बनना चाहता हूँ।'",
    customizationTip: "ब्रैकेट '[your name]' में अपना असली नाम लिखें और 'Computer Science' की जगह अपनी कॉलेज ब्रांच लिख सकते हैं।"
  },
  // Day 2
  {
    question: "Are you comfortable collaborating in a student team?",
    questionHindi: "क्या आप छात्रों की टीम में मिलकर काम करने में सहज हैं?",
    patternsUsed: "Subject + are + plural noun ➔ are + adverb + adjective ➔ are + verb-ing",
    sampleAnswer: "Yes. We are college students. You are very kind to ask. We are working hard together on our projects.",
    sampleAnswerHindi: "सरल व्याख्या: यहाँ 'We are' और 'You are' का उपयोग करके टीम भावना और सहयोगात्मक दृष्टिकोण व्यक्त किया गया है।",
    customizationTip: "'our projects' की जगह आप अपने कॉलेज प्रोजेक्ट या लैब असाइनमेंट का नाम भी लिख सकते हैं।"
  },
  // Day 3
  {
    question: "How would you describe your personality and dedication?",
    questionHindi: "आप एक इंटरव्यूअर को अपनी कार्यशैली और समर्पण कैसे बताएंगे?",
    patternsUsed: "Subject + is/am + noun ➔ is/am + adjective",
    sampleAnswer: "I am a dedicated student. My teacher is very supportive. I am very punctual and confident today.",
    sampleAnswerHindi: "सरल व्याख्या: अपनी विशेषताओं (punctual, confident) को 'I am' के साथ प्रस्तुत किया गया है।",
    customizationTip: "आप 'punctual' के साथ 'curious' (जिज्ञासु) या 'hardworking' जैसे विशेषण भी जोड़ सकते हैं।"
  },
  // Day 4
  {
    question: "What technical equipment and foundation do you have?",
    questionHindi: "आपके पास कौन से टूल्स और तकनीकी बुनियादी ज्ञान हैं?",
    patternsUsed: "Subject + have + noun ➔ have + adjective + noun",
    sampleAnswer: "I have a laptop for daily practice. I have basic knowledge of C++. I have two projects on my resume.",
    sampleAnswerHindi: "सरल व्याख्या: 'I have' का उपयोग करके अपने उपकरण, बुनियादी ज्ञान और रेज़्युमे प्रोजेक्ट्स का उल्लेख किया गया है।",
    customizationTip: "'C++' की जगह अपनी मुख्य प्रोग्रामिंग भाषा (Java, Python, JS) और अपने प्रोजेक्ट्स की संख्या लिखें।"
  },
  // Day 5
  {
    question: "What technical strengths does your background provide?",
    questionHindi: "आपकी तकनीकी पृष्ठभूमि क्या क्षमताएं प्रदान करती है?",
    patternsUsed: "Subject + has + adjective + noun ➔ have + noun",
    sampleAnswer: "I have good coding skills. My academic course has strong fundamentals in DSA. I have a creative solution for difficult problems.",
    sampleAnswerHindi: "सरल व्याख्या: 'have' और 'has' का उपयोग करके कोडिंग कौशल और बुनियादी ज्ञान की मजबूती दर्शाई गई है।",
    customizationTip: "'DSA' की जगह आप अपने पसंदीदा विषय (Web Development / Database) का नाम लिख सकते हैं।"
  },
  // Day 6
  {
    question: "What is your primary goal right now as a fresher?",
    questionHindi: "एक फ्रेशर के रूप में अभी आपका प्राथमिक लक्ष्य क्या है?",
    patternsUsed: "Subject + want to + base verb + object",
    sampleAnswer: "I want to improve my speaking. I want to learn data structures. I want to join a product-based company as a software developer.",
    sampleAnswerHindi: "सरल व्याख्या: 'I want to + verb' का उपयोग करके अपने सीखने और करियर के लक्ष्यों को क्रमबद्ध किया गया है।",
    customizationTip: "'product-based company' की जगह अपनी पसंदीदा कंपनी या भूमिका (जैसे Frontend / Backend Developer) लिख सकते हैं।"
  },
  // Day 7
  {
    question: "Where do you see yourself beginning your engineering career?",
    questionHindi: "आप अपने इंजीनियरिंग करियर की शुरुआत किस रूप में देखते हैं?",
    patternsUsed: "Subject + wants to / want to + base verb",
    sampleAnswer: "I want to crack the technical interview. I want to build reliable software. Everyone wants to succeed through consistent effort.",
    sampleAnswerHindi: "सरल व्याख्या: 'want to' और 'wants to' से लक्ष्य और सकारात्मक दृष्टिकोण प्रस्तुत किया गया है।",
    customizationTip: "'build reliable software' की जगह 'work in high-impact teams' भी कह सकते हैं।"
  },
  // Day 8
  {
    question: "What do you need to do daily to prepare for this job?",
    questionHindi: "इस नौकरी की तैयारी के लिए आपको रोज़ाना क्या करने की आवश्यकता है?",
    patternsUsed: "Subject + need + noun ➔ need to + base verb",
    sampleAnswer: "I need more practice. I need to practice every day. I need to solve algorithmic problems with high accuracy.",
    sampleAnswerHindi: "सरल व्याख्या: 'I need' (संज्ञा) और 'I need to' (क्रिया) का उपयोग करके अपनी तैयारी की ज़रूरतें बताई गई हैं।",
    customizationTip: "आप कितने घंटे या प्रश्न रोज़ हल करते हैं (जैसे 'solve two problems daily') यह भी जोड़ सकते हैं।"
  },
  // Day 9
  {
    question: "How should an engineering student prepare for technical interviews?",
    questionHindi: "एक इंजीनियरिंग छात्र को तकनीकी इंटरव्यू की तैयारी कैसे करनी चाहिए?",
    patternsUsed: "Subject + needs to + base verb + object",
    sampleAnswer: "A candidate needs to revise notes daily. She needs to speak confidently. The code needs optimization before submission.",
    sampleAnswerHindi: "सरल व्याख्या: तीसरे व्यक्ति (candidate, code) के साथ 'needs to' और 'needs' का प्रयोग करके तैयारी का सुझाव दिया गया है।",
    customizationTip: "'revise notes' की जगह 'practice mock interviews' भी लिख सकते हैं।"
  },
  // Day 10
  {
    question: "What kind of programming tasks do you genuinely like?",
    questionHindi: "आपको किस तरह के प्रोग्रामिंग कार्यों पर काम करना पसंद है?",
    patternsUsed: "Subject + like + verb-ing ➔ like to + base verb",
    sampleAnswer: "I like coding in C++. I like to solve logical puzzles. I like clean and readable code in all my projects.",
    sampleAnswerHindi: "सरल व्याख्या: अपनी पसंद और रुचियों को 'I like' और 'I like to' से स्पष्ट रूप से व्यक्त किया गया है।",
    customizationTip: "'C++' की जगह अपनी पसंदीदा भाषा का नाम लिखें।"
  },
  // Day 11
  {
    question: "What technical tasks can you handle independently?",
    questionHindi: "आप स्वतंत्र रूप से कौन से तकनीकी कार्य संभाल सकते हैं?",
    patternsUsed: "Subject + can + base verb + object",
    sampleAnswer: "I can code in C++ and JavaScript. I can solve problems using a hash map. I can explain my logic step by step.",
    sampleAnswerHindi: "सरल व्याख्या: 'I can + verb' से अपनी तकनीकी क्षमता और समझाने के कौशल का प्रदर्शन किया गया है।",
    customizationTip: "'C++ and JavaScript' की जगह उन टूल्स के नाम लिखें जिनमें आप सबसे सहज हैं।"
  },
  // Day 12
  {
    question: "What do you do if you need a moment to think during an interview?",
    questionHindi: "यदि इंटरव्यू के दौरान आपको सोचने के लिए कुछ समय चाहिए तो आप क्या कहते हैं?",
    patternsUsed: "Could you please + base verb ➔ May I + base verb",
    sampleAnswer: "Could you please repeat the question? May I take a moment to think? I want to understand the constraints clearly.",
    sampleAnswerHindi: "सरल व्याख्या: विनम्रतापूर्वक प्रश्न दोहराने और सोचने का समय मांगने के लिए 'Could you please' और 'May I' का प्रयोग किया गया है।",
    customizationTip: "इंटरव्यू में घबराने के बजाय शांति से यह वाक्य बोलें।"
  },
  // Day 13
  {
    question: "What responsibilities do you balance as a student preparing for placements?",
    questionHindi: "प्लेसमेंट की तैयारी करने वाले छात्र के रूप में आप किन जिम्मेदारियों को संतुलित करते हैं?",
    patternsUsed: "Subject + have to + base verb",
    sampleAnswer: "I have to practice coding every single day. We have to handle edge cases carefully. I have to balance exams and placement preparation.",
    sampleAnswerHindi: "सरल व्याख्या: 'have to + verb' का उपयोग करके कॉलेज और प्लेसमेंट की दोहरी जिम्मेदारियों को बताया गया है।",
    customizationTip: "अपनी वास्तविक दिनचर्या के अनुसार समय (जैसे 'dedicate 3 hours daily') जोड़ सकते हैं।"
  },
  // Day 14
  {
    question: "Tell me about your morning routine and study consistency.",
    questionHindi: "अपनी सुबह की दिनचर्या और अध्ययन की निरंतरता के बारे में बताइए।",
    patternsUsed: "Simple Present: Subject + base verb + adverb",
    sampleAnswer: "I wake up early and review my notes. I solve two coding problems every morning. Daily practice builds confidence.",
    sampleAnswerHindi: "सरल व्याख्या: नियमित क्रियाओं (wake up, review, solve) के लिए सिंपल प्रेजेंट का स्वाभाविक उपयोग किया गया है।",
    customizationTip: "'two coding problems' की जगह अपनी वास्तविक संख्या लिख सकते हैं।"
  },
  // Day 15
  {
    question: "Why did you choose Computer Science and why do you want this job?",
    questionHindi: "आपने कंप्यूटर साइंस क्यों चुना और आप यह नौकरी क्यों चाहते हैं?",
    patternsUsed: "Subject + want to + base verb ➔ would like to + base verb",
    sampleAnswer: "I want to become a software engineer because I love building software. I would like to learn from experienced engineers and contribute to your team.",
    sampleAnswerHindi: "सरल व्याख्या: 'want to' और 'would like to' से अपनी प्रेरणा और कंपनी में योगदान देने की इच्छा जताई गई है।",
    customizationTip: "कंपनी का नाम या तकनीक जोड़कर इसे कस्टमाइज़ कर सकते हैं।"
  }
];

// Helper to generate context-specific interview questions based on the 6 progression blocks
function getProgressionInterviewQuestion(day, topic, sentences, practice) {
  if (day <= 15) {
    return INTERVIEW_QUESTIONS_BLOCK1[day - 1];
  }

  // Block 2: Days 16–30 (Daily Routines & Problem-Solving Habits)
  if (day <= 30) {
    const routineQuestions = [
      {
        question: "What does your typical daily placement preparation routine look like?",
        questionHindi: "आपकी रोज़ाना प्लेसमेंट तैयारी की दिनचर्या कैसी दिखती है?",
        sampleAnswer: "I wake up early. I practice coding for two hours. I complete my daily tasks consistently.",
        sampleAnswerHindi: "सरल व्याख्या: दैनिक रूटीन के लिए सिंपल प्रेजेंट का उपयोग करके अपनी निरंतरता दिखाई गई है।",
        customizationTip: "आप रोज़ कितने घंटे कोडिंग करते हैं, वह समय जोड़ें।"
      },
      {
        question: "How do you stay disciplined when solving tough coding problems?",
        questionHindi: "कठिन कोडिंग प्रश्न हल करते समय आप अनुशासन कैसे बनाए रखते हैं?",
        sampleAnswer: "I do not panic during practice. I break the problem into smaller parts. I review my notes before coding.",
        sampleAnswerHindi: "सरल व्याख्या: नकारात्मक वाक्य (do not panic) और सकारात्मक क्रियाओं से अनुशासन दर्शाया गया है।",
        customizationTip: "'break into smaller parts' जैसे स्पष्ट चरणों का उल्लेख करें।"
      },
      {
        question: "What are your study commitments for the upcoming weeks?",
        questionHindi: "आने वाले हफ्तों के लिए आपकी पढ़ाई के क्या संकल्प हैं?",
        sampleAnswer: "I will optimize my problem-solving speed. I am going to build a new portfolio project. Consistent effort will lead to success.",
        sampleAnswerHindi: "सरल व्याख्या: भविष्य की योजनाओं के लिए 'will' और 'going to' का प्रयोग किया गया है।",
        customizationTip: "अपने आगामी प्रोजेक्ट का नाम यहाँ जोड़ सकते हैं।"
      },
      {
        question: "What core concepts have you learned recently in your preparation?",
        questionHindi: "अपनी तैयारी में आपने हाल ही में कौन से मुख्य कॉन्सेप्ट सीखे हैं?",
        sampleAnswer: "I have learned the core concepts of OOP. I have solved over 200 coding problems. I have worked with relational databases.",
        sampleAnswerHindi: "सरल व्याख्या: 'have + V3' (learned, solved, worked) का उपयोग करके अपनी उपलब्धियां साझा की गई हैं।",
        customizationTip: "प्रश्नों की वास्तविक संख्या (जैसे 'over 150 problems') लिखें।"
      },
      {
        question: "What is your philosophy on writing maintainable software?",
        questionHindi: "पठनीय और मेंटेन करने योग्य सॉफ्टवेयर लिखने पर आपका क्या विचार है?",
        sampleAnswer: "In my opinion, readable code is very important. I think that clean logic prevents bugs. I believe we should test edge cases first.",
        sampleAnswerHindi: "सरल व्याख्या: 'In my opinion' और 'I believe' से पेशेवर विचार व्यक्त किए गए हैं।",
        customizationTip: "कोड की पठनीयता पर अपना संक्षिप्त दृष्टिकोण जोड़ें।"
      }
    ];
    const item = routineQuestions[(day - 16) % routineQuestions.length];
    return {
      question: item.question,
      questionHindi: item.questionHindi,
      patternsUsed: "Daily Routine Habits (Simple Present & Future Commitments)",
      sampleAnswer: item.sampleAnswer,
      sampleAnswerHindi: item.sampleAnswerHindi,
      customizationTip: item.customizationTip
    };
  }

  // Block 3: Days 31–45 (Education, Branch & Technical Interests)
  if (day <= 45) {
    const educationQuestions = [
      {
        question: "Which computer science subjects do you enjoy the most?",
        questionHindi: "आपको कंप्यूटर साइंस के कौन से विषय सबसे ज्यादा पसंद हैं?",
        sampleAnswer: "I like Data Structures and Algorithms. I enjoy learning database concepts. I find operating systems very interesting.",
        sampleAnswerHindi: "सरल व्याख्या: 'I like' और 'I enjoy' का उपयोग करके अपने पसंदीदा विषयों को बताया गया है।",
        customizationTip: "अपने सबसे पसंदीदा विषयों (जैसे DBMS, Computer Networks) के नाम लिखें।"
      },
      {
        question: "How did you develop an interest in software programming?",
        questionHindi: "प्रोग्रामिंग में आपकी रुचि कैसे विकसित हुई?",
        sampleAnswer: "I started coding in college. I like to solve logical puzzles. Building useful applications gives me satisfaction.",
        sampleAnswerHindi: "सरल व्याख्या: 'I started' और 'I like to solve' से अपनी रुचि की शुरुआत समझाई गई है।",
        customizationTip: "जब आपने पहली बार कोडिंग की थी, उस वर्ष या घटना का उल्लेख करें।"
      },
      {
        question: "What data structures do you use most frequently?",
        questionHindi: "आप सबसे अधिक किन डेटा स्ट्रक्चर्स का उपयोग करते हैं?",
        sampleAnswer: "I frequently use arrays, hash maps, and stacks. I can solve problems using two pointers. I like clean data structures.",
        sampleAnswerHindi: "सरल व्याख्या: अक्सर उपयोग किए जाने वाले डेटा स्ट्रक्चर्स का सीधा उल्लेख किया गया है।",
        customizationTip: "वे डेटा स्ट्रक्चर लिखें जिन पर आपकी अच्छी पकड़ है।"
      },
      {
        question: "What technical blogs or documentation do you read regularly?",
        questionHindi: "आप नियमित रूप से कौन से तकनीकी ब्लॉग या डॉक्यूमेंटेशन पढ़ते हैं?",
        sampleAnswer: "I regularly read official documentation. I follow tech articles on web development. I like learning modern engineering practices.",
        sampleAnswerHindi: "सरल व्याख्या: निरंतर सीखने की आदत दर्शाने के लिए 'I regularly read' का प्रयोग किया गया है।",
        customizationTip: "आप जहाँ से पढ़ते हैं (जैसे MDN, GeeksforGeeks, Dev.to) उसका नाम जोड़ें।"
      },
      {
        question: "Why is continuous learning important in the tech industry?",
        questionHindi: "टेक इंडस्ट्री में निरंतर सीखना क्यों महत्वपूर्ण है?",
        sampleAnswer: "Technology evolves rapidly. I need to practice every day. I want to adapt quickly to modern frameworks.",
        sampleAnswerHindi: "सरल व्याख्या: इंडस्ट्री की गति और अपनी सीखने की उत्सुकता को 'need to' और 'want to' से जोड़ा गया है।",
        customizationTip: "तकनीक में बदलाव को लेकर अपना संक्षिप्त विचार जोड़ें।"
      }
    ];
    const item = educationQuestions[(day - 31) % educationQuestions.length];
    return {
      question: item.question,
      questionHindi: item.questionHindi,
      patternsUsed: "Education & Technical Interests (I like / I enjoy / I frequently use)",
      sampleAnswer: item.sampleAnswer,
      sampleAnswerHindi: item.sampleAnswerHindi,
      customizationTip: item.customizationTip
    };
  }

  // Block 4: Days 46–60 (Past Experiences & Overcoming Roadblocks)
  if (day <= 60) {
    const experienceQuestions = [
      {
        question: "Tell me about a technical project you completed last semester.",
        questionHindi: "पिछले सेमेस्टर में पूरे किए गए किसी तकनीकी प्रोजेक्ट के बारे में बताइए।",
        sampleAnswer: "I built a responsive web application for student tracking. We worked on a team project. I designed the database schema.",
        sampleAnswerHindi: "सरल व्याख्या: 'I built' (V2) और 'We worked' से पूरे किए गए प्रोजेक्ट का विवरण दिया गया है।",
        customizationTip: "'student tracking' की जगह अपने असली प्रोजेक्ट का नाम लिखें।"
      },
      {
        question: "Have you ever encountered a difficult bug in your code?",
        questionHindi: "क्या आपको कभी अपने कोड में किसी कठिन बग का सामना करना पड़ा है?",
        sampleAnswer: "Yes. I encountered an unexpected edge case with empty inputs. I diagnosed the issue by tracing variable values. The fix was adding a proper boundary check.",
        sampleAnswerHindi: "सरल व्याख्या: समस्या (encountered), जांच (diagnosed), और समाधान (fix was) को क्रम से समझाया गया है।",
        customizationTip: "अपने किसी वास्तविक बग (जैसे null pointer, off-by-one) का उल्लेख करें।"
      },
      {
        question: "Tell me about an error that took time to resolve.",
        questionHindi: "किसी ऐसी एरर के बारे में बताइए जिसे सुलझाने में समय लगा।",
        sampleAnswer: "The program crashed on negative numbers. I used print statements to pinpoint the error. I solved it by updating the pointer logic.",
        sampleAnswerHindi: "सरल व्याख्या: पास्ट टेंस (crashed, used, solved) में समस्या का समाधान बताया गया है।",
        customizationTip: "एरर को सुलझाने में आपने क्या टूल या तरीका इस्तेमाल किया, वह लिखें।"
      },
      {
        question: "What experience do you have with teamwork and collaboration?",
        questionHindi: "टीम वर्क और साथियों के साथ काम करने का आपका क्या अनुभव है?",
        sampleAnswer: "We worked in a three-member team. We divided the tasks to finish faster. Pair programming helped us catch bugs early.",
        sampleAnswerHindi: "सरल व्याख्या: 'We divided' और 'helped us' से टीम में समन्वय का प्रदर्शन किया गया है।",
        customizationTip: "अपनी टीम के सदस्यों की वास्तविक संख्या लिखें।"
      },
      {
        question: "What have you learned from your past coding mistakes?",
        questionHindi: "अपनी पिछली कोडिंग गलतियों से आपने क्या सीखा है?",
        sampleAnswer: "Debugging taught me the value of patience. Writing unit tests prevents regressions. I always test edge cases now.",
        sampleAnswerHindi: "सरल व्याख्या: गलतियों से मिली सीख को सकारात्मक रूप में प्रस्तुत किया गया है।",
        customizationTip: "धैर्य और टेस्टिंग पर अपना अनुभव साझा करें।"
      }
    ];
    const item = experienceQuestions[(day - 46) % experienceQuestions.length];
    return {
      question: item.question,
      questionHindi: item.questionHindi,
      patternsUsed: "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
      sampleAnswer: item.sampleAnswer,
      sampleAnswerHindi: item.sampleAnswerHindi,
      customizationTip: item.customizationTip
    };
  }

  // Block 5: Days 61–75 (Project Explanations & System Architecture)
  if (day <= 75) {
    const projectQuestions = [
      {
        question: "What problem does your primary capstone project solve?",
        questionHindi: "आपका मुख्य प्रोजेक्ट उपयोगकर्ताओं के लिए किस समस्या का समाधान करता है?",
        sampleAnswer: "My project helps students track placement consistency. The platform serves active users. It automates daily practice reminders.",
        sampleAnswerHindi: "सरल व्याख्या: प्रोजेक्ट के उद्देश्य (helps track) और प्रभाव (automates) को समझाया गया है।",
        customizationTip: "अपने प्रोजेक्ट का मुख्य उद्देश्य 1–2 वाक्यों में लिखें।"
      },
      {
        question: "What was your specific role in your major project?",
        questionHindi: "आपके मुख्य प्रोजेक्ट में आपकी विशिष्ट भूमिका और ज़िम्मेदारी क्या थी?",
        sampleAnswer: "I was responsible for developing the backend REST APIs. I designed the database schema. I tested all endpoints for edge cases.",
        sampleAnswerHindi: "सरल व्याख्या: 'I was responsible for' का उपयोग करके अपनी व्यक्तिगत जिम्मेदारी स्पष्ट की गई है।",
        customizationTip: "'backend REST APIs' की जगह अपना वास्तविक काम (Frontend UI / Database / Logic) लिखें।"
      },
      {
        question: "Why did you choose your specific technology stack?",
        questionHindi: "आपने अपने प्रोजेक्ट के लिए यह विशेष टेक्नोलॉजी स्टैक क्यों चुना?",
        sampleAnswer: "The technology stack includes React, Node.js, and MongoDB. We chose it because it supports rapid prototyping and clean scalability.",
        sampleAnswerHindi: "सरल व्याख्या: टेक्नोलॉजी स्टैक का नाम और चुनने का मुख्य कारण (scalability) बताया गया है।",
        customizationTip: "अपने प्रोजेक्ट में उपयोग की गई वास्तविक लाइब्रेरी और डेटाबेस के नाम लिखें।"
      },
      {
        question: "How did you optimize performance in your project?",
        questionHindi: "आपने अपने प्रोजेक्ट में परफॉरमेंस को कैसे ऑप्टिमाइज़ किया?",
        sampleAnswer: "I optimized database query response times. The time complexity of our core algorithm is O(N). This approach avoids nested loops.",
        sampleAnswerHindi: "सरल व्याख्या: कॉम्प्लेक्सिटी (O(N)) और क्वेरी ऑप्टिमाइज़ेशन का उल्लेख किया गया है।",
        customizationTip: "आपने कैसे स्पीड सुधारी (जैसे indexing, caching) वह जोड़ सकते हैं।"
      },
      {
        question: "How do you test your application before deployment?",
        questionHindi: "डिप्लॉयमेंट से पहले आप अपने एप्लिकेशन का परीक्षण कैसे करते हैं?",
        sampleAnswer: "We test both functions independently. We test with edge cases and null inputs. We successfully deployed the application online.",
        sampleAnswerHindi: "सरल व्याख्या: टेस्टिंग और डिप्लॉयमेंट की प्रक्रिया को सरल शब्दों में बताया गया है।",
        customizationTip: "जहाँ आपने डिप्लॉय किया (जैसे Vercel, Netlify, Render) उसका नाम लिखें।"
      }
    ];
    const item = projectQuestions[(day - 61) % projectQuestions.length];
    return {
      question: item.question,
      questionHindi: item.questionHindi,
      patternsUsed: "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
      sampleAnswer: item.sampleAnswer,
      sampleAnswerHindi: item.sampleAnswerHindi,
      customizationTip: item.customizationTip
    };
  }

  // Block 6: Days 76–90 (HR & Technical Interview Scenarios)
  const hrQuestions = [
    {
      question: "What is your greatest strength as an aspiring engineer?",
      questionHindi: "एक उभरते इंजीनियर के रूप में आपकी सबसे बड़ी ताकत क्या है?",
      sampleAnswer: "My greatest strength is my consistency and discipline. I learn new technologies very quickly. I stay focused under deadline pressure.",
      sampleAnswerHindi: "सरल व्याख्या: अपनी मुख्य शक्ति (consistency, quick learning) को आत्मविश्वास से बताया गया है।",
      customizationTip: "अपनी वास्तविक ताकत (जैसे 'attention to detail' या 'problem-solving') लिखें।"
    },
    {
      question: "What is one area you are actively working to improve?",
      questionHindi: "एक ऐसा क्षेत्र कौन सा है जिसमें आप सक्रिय रूप से सुधार कर रहे हैं?",
      sampleAnswer: "One area I am actively improving is public speaking. I practice spoken English every day to build confidence. I welcome constructive feedback.",
      sampleAnswerHindi: "सरल व्याख्या: कमजोरी को सकारात्मक रूप में प्रस्तुत करके सुधार का प्रयास दिखाया गया है।",
      customizationTip: "आप जिस कौशल पर मेहनत कर रहे हैं, उसका उल्लेख करें।"
    },
    {
      question: "How do you handle deadline pressure when multiple tasks are pending?",
      questionHindi: "जब कई कार्य लंबित हों तो आप डेडलाइन के दबाव को कैसे संभालते हैं?",
      sampleAnswer: "I handle deadline pressure by prioritizing tasks calmly. I break complex requirements into smaller milestones. I communicate clearly with my team.",
      sampleAnswerHindi: "सरल व्याख्या: दबाव में शांत रहकर प्राथमिकताओं को तय करने की कार्यशैली बताई गई है।",
      customizationTip: "'prioritizing tasks' के साथ अपने समय प्रबंधन का तरीका जोड़ें।"
    },
    {
      question: "Where do you see yourself in three to five years?",
      questionHindi: "आप तीन से पांच वर्षों में खुद को कहाँ देखते हैं?",
      sampleAnswer: "In three years, I want to become a proficient full-stack engineer. I hope to mentor junior developers and lead technical modules.",
      sampleAnswerHindi: "सरल व्याख्या: 'want to' और 'hope to' का उपयोग करके अपने करियर विकास का खाका प्रस्तुत किया गया है।",
      customizationTip: "अपनी पसंदीदा तकनीकी दिशा (AI, Cloud, Full-stack) लिखें।"
    },
    {
      question: "Do you have any questions for me as the interviewer?",
      questionHindi: "क्या आपके पास मेरे (इंटरव्यूअर) लिए कोई प्रश्न हैं?",
      sampleAnswer: "May I ask about the team structure? What technologies does the team plan to adopt next? Thank you for your valuable time today.",
      sampleAnswerHindi: "सरल व्याख्या: अंत में विनम्रता से कंपनी और टीम के बारे में सवाल पूछने का तरीका दिखाया गया है।",
      customizationTip: "टीम या प्रोजेक्ट के बारे में एक वास्तविक प्रश्न पूछें।"
    }
  ];
  const item = hrQuestions[(day - 76) % hrQuestions.length];
  return {
    question: item.question,
    questionHindi: item.questionHindi,
    patternsUsed: "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
    sampleAnswer: item.sampleAnswer,
    sampleAnswerHindi: item.sampleAnswerHindi,
    customizationTip: item.customizationTip
  };
}

// Read current basic lessons to get existing sentences & practice
import { BASIC_ENGLISH_LESSONS as CURRENT_LESSONS } from "../lib/basic-english-lessons.js";

const UPDATED_LESSONS = {};

for (let d = 1; d <= 90; d++) {
  const current = CURRENT_LESSONS[d];
  const interviewQuestion = getProgressionInterviewQuestion(
    d,
    current.topic,
    current.sentences,
    current.practice
  );

  UPDATED_LESSONS[d] = {
    ...current,
    interviewQuestion
  };
}

// Generate the updated library
const fileContent = `/**
 * Basic English Lessons Library (Days 1–90)
 * 
 * Provides:
 * 1. Learn Basic English — 3–5 beginner sentence patterns with Devanagari Hindi and examples.
 * 2. Sentence Formation Practice — 2–3 graded exercises (Easy -> Medium -> Challenging).
 * 3. Related Interview Question — Interview question, simple Hindi explanation, combined sample answer,
 *    simple Hindi explanation of sample answer, and customization tips.
 *
 * Progression:
 * - Days 1–15: Self-Introduction
 * - Days 16–30: Daily Routines
 * - Days 31–45: Education and Interests
 * - Days 46–60: Past Experiences
 * - Days 61–75: Project Explanations
 * - Days 76–90: HR and Technical Interview Questions
 */

export const BASIC_ENGLISH_LESSONS = {
${Object.entries(UPDATED_LESSONS)
  .map(
    ([day, data]) =>
      `  ${day}: ${JSON.stringify(data, null, 4).replace(/\\n/g, "\n  ")}`
  )
  .join(",\n")}
};

/**
 * Normalizes input string for forgiving, learner-friendly answer checking.
 */
function normalizeText(str) {
  if (!str) return "";
  return str
    .trim()
    .toLowerCase()
    .replace(/[’‘\`]/g, "'")
    .replace(/[“”"]/g, '"')
    .replace(/[.?!,;:]+$/, "") // strip trailing punctuation
    .replace(/\\s+/g, " ");
}

/**
 * Expands common English contractions for flexible matching.
 */
function expandContractions(str) {
  return str
    .replace(/\\bi'm\\b/g, "i am")
    .replace(/\\byou're\\b/g, "you are")
    .replace(/\\bwe're\\b/g, "we are")
    .replace(/\\bthey're\\b/g, "they are")
    .replace(/\\bhe's\\b/g, "he is")
    .replace(/\\bshe's\\b/g, "she is")
    .replace(/\\bit's\\b/g, "it is")
    .replace(/\\bdon't\\b/g, "do not")
    .replace(/\\bdoesn't\\b/g, "does not")
    .replace(/\\bdidn't\\b/g, "did not")
    .replace(/\\bcan't\\b/g, "cannot")
    .replace(/\\bwon't\\b/g, "will not")
    .replace(/\\bthat's\\b/g, "that is");
}

/**
 * Validates a user's English translation against expected sentence and accepted variations.
 * @param {string} userInput - The user's typed sentence.
 * @param {string} expected - Canonical expected sentence.
 * @param {string[]} acceptedAnswers - Optional list of additional acceptable variants.
 * @returns {boolean}
 */
export function checkSentenceAnswer(userInput, expected, acceptedAnswers = []) {
  if (!userInput || !userInput.trim()) return false;

  const cleanUser = normalizeText(userInput);
  const cleanExpected = normalizeText(expected);

  if (cleanUser === cleanExpected) return true;

  // Check acceptable alternatives
  if (Array.isArray(acceptedAnswers)) {
    for (const alt of acceptedAnswers) {
      if (cleanUser === normalizeText(alt)) return true;
    }
  }

  // Check expanded contraction equivalence
  if (expandContractions(cleanUser) === expandContractions(cleanExpected)) {
    return true;
  }

  if (Array.isArray(acceptedAnswers)) {
    for (const alt of acceptedAnswers) {
      if (expandContractions(cleanUser) === expandContractions(normalizeText(alt))) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Get basic English lesson for any given day (1–90) with safe fallback.
 * @param {number} day 
 * @returns {object}
 */
export function getBasicEnglishLesson(day = 1) {
  const normalizedDay = Math.max(1, Math.min(90, parseInt(day, 10) || 1));
  const lesson = BASIC_ENGLISH_LESSONS[normalizedDay];
  if (lesson) return lesson;

  // Fallback to Day 1 baseline
  return BASIC_ENGLISH_LESSONS[1];
}
`;

const outputPath = path.resolve(__dirname, "../lib/basic-english-lessons.js");
fs.writeFileSync(outputPath, fileContent, "utf-8");
console.log(`Successfully updated all 90 basic English lessons with Related Interview Questions at: ${outputPath}`);
