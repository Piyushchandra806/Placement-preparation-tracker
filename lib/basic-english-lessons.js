/**
 * Basic English Lessons Library (Days 1–90)
 * 
 * Provides:
 * 1. Learn Basic English — 3–5 beginner sentence patterns with Devanagari Hindi and examples.
 * 2. When and How to Use It (usageGuide) — Meaning in simple Hindi, when to use, where to use,
 *    how to use (formula), 2 practical examples with Hindi meanings, and 1 common mistake to avoid.
 * 3. Sentence Formation Practice — 2–3 graded exercises (Easy -> Medium -> Challenging).
 * 4. Related Interview Question — Interview question, simple Hindi explanation, combined sample answer,
 *    simple Hindi explanation of sample answer, and customization tips.
 *
 * Progression:
 * - Days 1–15: Self-Introduction & Core Foundations
 * - Days 16–30: Daily Routines & Problem Solving
 * - Days 31–45: Education, Branch & Technical Interests
 * - Days 46–60: Past Experiences & Overcoming Challenges
 * - Days 61–75: Project Architecture & Impact
 * - Days 76–90: HR and Technical Interview Scenarios
 */

export const BASIC_ENGLISH_LESSONS = {
  1: {
    "day": 1,
    "topic": "Identity & Introduction",
    "patternFocus": "I am (पहचान व स्थिति) & I want to (इच्छा)",
    "sentences": [
        {
            "english": "I am a student.",
            "hindi": "मैं एक विद्यार्थी हूँ।",
            "pattern": "Subject + am + noun.",
            "example": "I am a computer science student. (मैं कंप्यूटर साइंस का छात्र हूँ।)"
        },
        {
            "english": "I am learning English.",
            "hindi": "मैं अंग्रेज़ी सीख रहा हूँ।",
            "pattern": "Subject + am + verb-ing.",
            "example": "I am learning coding. (मैं कोडिंग सीख रहा हूँ।)"
        },
        {
            "english": "I want to become a software engineer.",
            "hindi": "मैं सॉफ्टवेयर इंजीनियर बनना चाहता हूँ।",
            "pattern": "Subject + want to + base verb.",
            "example": "I want to become a web developer. (मैं वेब डेवलपर बनना चाहता हूँ।)"
        },
        {
            "english": "I am ready for the interview.",
            "hindi": "मैं इंटरव्यू के लिए तैयार हूँ।",
            "pattern": "Subject + am + adjective + prepositional phrase.",
            "example": "I am ready for the technical test. (मैं टेक्निकल टेस्ट के लिए तैयार हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैं एक विद्यार्थी हूँ।",
            "expected": "I am a student.",
            "pattern": "Subject + am + noun.",
            "explanation": "सरल व्याख्या: 'मैं' (I) के साथ हमेशा 'am' आता है और एकवचन संज्ञा (noun) से पहले 'a' लगता है: I + am + a student.",
            "acceptedAnswers": [
                "I am a student.",
                "I'm a student.",
                "I am a student",
                "I'm a student"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं अंग्रेज़ी सीख रहा हूँ।",
            "expected": "I am learning English.",
            "pattern": "Subject + am + verb-ing.",
            "explanation": "सरल व्याख्या: जब कोई काम वर्तमान में जारी हो, तो 'am + verb-ing' (learning) का प्रयोग होता है: I + am + learning English.",
            "acceptedAnswers": [
                "I am learning English.",
                "I'm learning English.",
                "I am learning English",
                "I'm learning English"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं सॉफ्टवेयर इंजीनियर बनना चाहता हूँ।",
            "expected": "I want to become a software engineer.",
            "pattern": "Subject + want to + base verb.",
            "explanation": "सरल व्याख्या: इच्छा व्यक्त करने के लिए 'want to' के बाद क्रिया का पहला रूप (become) आता है: I + want to + become a software engineer.",
            "acceptedAnswers": [
                "I want to become a software engineer.",
                "I want to become a software engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about yourself.",
        "questionHindi": "अपने बारे में कुछ बताइए। (इंटरव्यू का सबसे आम और महत्वपूर्ण पहला सवाल)",
        "patternsUsed": "Subject + am + noun ➔ am + verb-ing ➔ want to + base verb",
        "sampleAnswer": "My name is [your name]. I am a student. I am studying Computer Science. I want to become a software engineer.",
        "sampleAnswerHindi": "सरल व्याख्या: यहाँ आपने सीखे हुए वाक्यों को जोड़कर अपना परिचय दिया है: 'मेरा नाम [आपका नाम] है। मैं एक विद्यार्थी हूँ। मैं कंप्यूटर साइंस पढ़ रहा हूँ। मैं एक सॉफ्टवेयर इंजीनियर बनना चाहता हूँ।'",
        "customizationTip": "ब्रैकेट '[your name]' में अपना असली नाम लिखें और 'Computer Science' की जगह अपनी कॉलेज ब्रांच लिख सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"I am\" = मैं हूँ (मेरी पहचान, स्थिति या वर्तमान कार्य) | \"I want to\" = मैं कुछ करना चाहता हूँ (मेरी इच्छा)",
        "whenToUse": "अपनी पहचान या स्थिति बताने के लिए 'I am' का प्रयोग करें। किसी वस्तु (noun) की चाहत के लिए 'I want' और किसी कार्य (verb) को करने की इच्छा के लिए 'I want to' का प्रयोग करें।",
        "whereToUse": "Self-introduction, दैनिक बातचीत, और जॉब इंटरव्यू के शुरुआती परिचय में।",
        "howToUse": "Subject + am + Noun/Adjective (पहचान/स्थिति) | Subject + want to + base verb (इच्छा)",
        "examples": [
            {
                "english": "I want a laptop.",
                "hindi": "मुझे एक लैपटॉप चाहिए।"
            },
            {
                "english": "I want to learn English.",
                "hindi": "मैं अंग्रेज़ी सीखना चाहता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I want to a laptop.",
            "correct": "I want a laptop.",
            "explanationHindi": "'to' का प्रयोग केवल क्रिया (action verb) से पहले होता है, वस्तु (noun) से पहले नहीं।"
        }
    }
},
  2: {
    "day": 2,
    "topic": "Second Person & Plural Forms",
    "patternFocus": "You are / We are / They are (आप / हम / वे)",
    "sentences": [
        {
            "english": "You are very helpful.",
            "hindi": "आप बहुत मददगार हैं।",
            "pattern": "Subject + are + adverb + adjective.",
            "example": "You are very kind. (आप बहुत दयालु हैं।)"
        },
        {
            "english": "We are college students.",
            "hindi": "हम कॉलेज के विद्यार्थी हैं।",
            "pattern": "Subject + are + plural noun.",
            "example": "We are engineering classmates. (हम इंजीनियरिंग के सहपाठी हैं।)"
        },
        {
            "english": "They are working hard.",
            "hindi": "वे कड़ी मेहनत कर रहे हैं।",
            "pattern": "Subject + are + verb-ing + adverb.",
            "example": "They are studying in the library. (वे लाइब्रेरी में पढ़ाई कर रहे हैं।)"
        },
        {
            "english": "You are on the right track.",
            "hindi": "आप सही रास्ते पर हैं।",
            "pattern": "Subject + are + prepositional phrase.",
            "example": "You are improving every day. (आप हर रोज़ सुधार कर रहे हैं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "आप बहुत दयालु हैं।",
            "expected": "You are very kind.",
            "pattern": "Subject + are + adverb + adjective.",
            "explanation": "सरल व्याख्या: 'You' (आप) के साथ हमेशा 'are' का प्रयोग होता है: You + are + very kind.",
            "acceptedAnswers": [
                "You are very kind.",
                "You're very kind.",
                "You are very kind",
                "You're very kind"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम कॉलेज के विद्यार्थी हैं।",
            "expected": "We are college students.",
            "pattern": "Subject + are + plural noun.",
            "explanation": "सरल व्याख्या: बहुवचन 'We' (हम) के साथ 'are' और 'students' का उपयोग करें: We + are + college students.",
            "acceptedAnswers": [
                "We are college students.",
                "We're college students.",
                "We are college students",
                "We're college students"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "वे कड़ी मेहनत कर रहे हैं।",
            "expected": "They are working hard.",
            "pattern": "Subject + are + verb-ing + adverb.",
            "explanation": "सरल व्याख्या: 'They' (वे) के साथ 'are + verb-ing' (working) आता है: They + are + working hard.",
            "acceptedAnswers": [
                "They are working hard.",
                "They're working hard.",
                "They are working hard",
                "They're working hard"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Are you comfortable collaborating in a student team?",
        "questionHindi": "क्या आप छात्रों की टीम में मिलकर काम करने में सहज हैं?",
        "patternsUsed": "Subject + are + plural noun ➔ are + adverb + adjective ➔ are + verb-ing",
        "sampleAnswer": "Yes. We are college students. You are very kind to ask. We are working hard together on our projects.",
        "sampleAnswerHindi": "सरल व्याख्या: यहाँ 'We are' और 'You are' का उपयोग करके टीम भावना और सहयोगात्मक दृष्टिकोण व्यक्त किया गया है।",
        "customizationTip": "'our projects' की जगह आप अपने कॉलेज प्रोजेक्ट या लैब असाइनमेंट का नाम भी लिख सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"You are\" = आप हैं / तुम हो | \"We are\" = हम हैं | \"They are\" = वे / वो लोग हैं",
        "whenToUse": "सामने वाले व्यक्ति ('You') या अपनी पूरी टीम ('We') या अन्य लोगों ('They') की स्थिति, भूमिका या कार्य बताने के लिए।",
        "whereToUse": "टीम प्रोजेक्ट, क्लासरूम डिस्कशन, और ग्रुप मीटिंग्स में।",
        "howToUse": "You / We / They + are + Plural Noun / Adjective / Verb-ing",
        "examples": [
            {
                "english": "We are college students.",
                "hindi": "हम कॉलेज के विद्यार्थी हैं।"
            },
            {
                "english": "You are very supportive.",
                "hindi": "आप बहुत मददगार हैं।"
            }
        ],
        "commonMistake": {
            "incorrect": "We is working on a project.",
            "correct": "We are working on a project.",
            "explanationHindi": "बहुवचन कर्ता (We, They) के साथ 'is' का प्रयोग कभी नहीं होता, हमेशा 'are' आता है।"
        }
    }
},
  3: {
    "day": 3,
    "topic": "Third Person Singular",
    "patternFocus": "He is / She is / It is (वह / यह)",
    "sentences": [
        {
            "english": "He is a software developer.",
            "hindi": "वह एक सॉफ्टवेयर डेवलपर है।",
            "pattern": "Subject + is + article + noun.",
            "example": "He is our team leader. (वह हमारे टीम लीडर हैं।)"
        },
        {
            "english": "She is preparing for campus placements.",
            "hindi": "वह कैंपस प्लेसमेंट की तैयारी कर रही है।",
            "pattern": "Subject + is + verb-ing + prepositional phrase.",
            "example": "She is practicing interview questions. (वह इंटरव्यू प्रश्नों का अभ्यास कर रही है।)"
        },
        {
            "english": "It is an interesting problem.",
            "hindi": "यह एक दिलचस्प सवाल है।",
            "pattern": "Subject + is + adjective + noun.",
            "example": "It is a very good question. (यह बहुत अच्छा सवाल है।)"
        },
        {
            "english": "He is very punctual.",
            "hindi": "वह समय का बहुत पाबंद है।",
            "pattern": "Subject + is + adverb + adjective.",
            "example": "She is very confident today. (वह आज बहुत आत्मविश्वासी है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "वह एक सॉफ्टवेयर डेवलपर है।",
            "expected": "He is a software developer.",
            "pattern": "Subject + is + article + noun.",
            "explanation": "सरल व्याख्या: 'He' (वह) एकवचन के साथ 'is' और पेशे से पहले 'a' आता है: He + is + a software developer.",
            "acceptedAnswers": [
                "He is a software developer.",
                "He's a software developer.",
                "He is a software developer"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "वह इंटरव्यू की तैयारी कर रही है।",
            "expected": "She is preparing for interviews.",
            "pattern": "Subject + is + verb-ing + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'She' (स्त्रीलिंग) के साथ 'is + preparing' (verb-ing) आता है: She + is + preparing for interviews.",
            "acceptedAnswers": [
                "She is preparing for interviews.",
                "She's preparing for interviews.",
                "She is preparing for interviews"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह एक बहुत अच्छा सवाल है।",
            "expected": "It is a very good question.",
            "pattern": "Subject + is + adjective + noun.",
            "explanation": "सरल व्याख्या: स्थिति या वस्तु के लिए 'It is' और विशेषण का प्रयोग करें: It + is + a very good question.",
            "acceptedAnswers": [
                "It is a very good question.",
                "It's a very good question.",
                "It is a very good question"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How would you describe your personality and dedication?",
        "questionHindi": "आप एक इंटरव्यूअर को अपनी कार्यशैली और समर्पण कैसे बताएंगे?",
        "patternsUsed": "Subject + is/am + noun ➔ is/am + adjective",
        "sampleAnswer": "I am a dedicated student. My teacher is very supportive. I am very punctual and confident today.",
        "sampleAnswerHindi": "सरल व्याख्या: अपनी विशेषताओं (punctual, confident) को 'I am' के साथ प्रस्तुत किया गया है।",
        "customizationTip": "आप 'punctual' के साथ 'curious' (जिज्ञासु) या 'hardworking' जैसे विशेषण भी जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"He is\" = वह है (पुरुष) | \"She is\" = वह है (महिला) | \"It is\" = यह है (निर्जीव/कोड/सिस्टम)",
        "whenToUse": "किसी तीसरे व्यक्ति (He/She) या किसी वस्तु, फ़ीचर या समाधान ('It') की स्थिति या विशेषता दर्शाने के लिए।",
        "whereToUse": "टीम के सदस्यों का परिचय देते समय या अपने सॉफ्टवेयर/कोड की प्रकृति समझाते समय।",
        "howToUse": "He / She / It + is + Noun / Adjective / Verb-ing",
        "examples": [
            {
                "english": "She is our project mentor.",
                "hindi": "वह हमारी प्रोजेक्ट मेंटर हैं।"
            },
            {
                "english": "It is an efficient algorithm.",
                "hindi": "यह एक कुशल एल्गोरिदम है।"
            }
        ],
        "commonMistake": {
            "incorrect": "He are a talented programmer.",
            "correct": "He is a talented programmer.",
            "explanationHindi": "एकवचन तीसरे व्यक्ति (He, She, It) के साथ 'are' नहीं, हमेशा 'is' आता है।"
        }
    }
},
  4: {
    "day": 4,
    "topic": "Possession with Have",
    "patternFocus": "I have (मेरे पास है / मेरा है)",
    "sentences": [
        {
            "english": "I have a laptop.",
            "hindi": "मेरे पास एक लैपटॉप है।",
            "pattern": "Subject + have + noun.",
            "example": "I have a fast computer. (मेरे पास एक तेज़ कंप्यूटर है।)"
        },
        {
            "english": "I have a doubt in this concept.",
            "hindi": "मुझे इस कॉन्सेप्ट में एक संदेह है।",
            "pattern": "Subject + have + noun + prepositional phrase.",
            "example": "I have a question about recursion. (रिकर्शन को लेकर मेरा एक सवाल है।)"
        },
        {
            "english": "I have two major projects on my resume.",
            "hindi": "मेरे रेज़्युमे पर दो मुख्य प्रोजेक्ट हैं।",
            "pattern": "Subject + have + noun phrase + prepositional phrase.",
            "example": "I have certifications in web development. (मेरे पास वेब डेवलपमेंट के प्रमाणपत्र हैं।)"
        },
        {
            "english": "I have basic knowledge of C++.",
            "hindi": "मुझे C++ का बुनियादी ज्ञान है।",
            "pattern": "Subject + have + adjective + noun + prepositional phrase.",
            "example": "I have good problem-solving skills. (मेरे पास अच्छा प्रॉब्लम सॉल्विंग कौशल है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरे पास एक लैपटॉप है।",
            "expected": "I have a laptop.",
            "pattern": "Subject + have + noun.",
            "explanation": "सरल व्याख्या: पास होने का भाव दर्शाने के लिए 'I have' का उपयोग करें: I + have + a laptop.",
            "acceptedAnswers": [
                "I have a laptop.",
                "I have a laptop"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मेरा एक सवाल है।",
            "expected": "I have a question.",
            "pattern": "Subject + have + noun.",
            "explanation": "सरल व्याख्या: प्रश्न या संदेह के लिए 'I have a question' का प्रयोग करें: I + have + a question.",
            "acceptedAnswers": [
                "I have a question.",
                "I have a question"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मुझे C++ का बुनियादी ज्ञान है।",
            "expected": "I have basic knowledge of C++.",
            "pattern": "Subject + have + adjective + noun + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'ज्ञान है' के लिए 'I have basic knowledge of C++' का उपयोग करें।",
            "acceptedAnswers": [
                "I have basic knowledge of C++.",
                "I have basic knowledge of C++"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What technical equipment and foundation do you have?",
        "questionHindi": "आपके पास कौन से टूल्स और तकनीकी बुनियादी ज्ञान हैं?",
        "patternsUsed": "Subject + have + noun ➔ have + adjective + noun",
        "sampleAnswer": "I have a laptop for daily practice. I have basic knowledge of C++. I have two projects on my resume.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I have' का उपयोग करके अपने उपकरण, बुनियादी ज्ञान और रेज़्युमे प्रोजेक्ट्स का उल्लेख किया गया है।",
        "customizationTip": "'C++' की जगह अपनी मुख्य प्रोग्रामिंग भाषा (Java, Python, JS) और अपने प्रोजेक्ट्स की संख्या लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I have\" = मेरे पास है / मुझे है (अधिकार, कौशल या उपकरण)",
        "whenToUse": "जब आपको अपने पास मौजूद किसी उपकरण, तकनीकी कौशल, प्रोजेक्ट या ज्ञान का स्वामित्व (possession) बताना हो।",
        "whereToUse": "रेज़्युमे डिस्कशन, तकनीकी इंटरव्यू, और स्किल्स का प्रदर्शन करते समय।",
        "howToUse": "Subject (I/You/We/They) + have + Noun / Skill",
        "examples": [
            {
                "english": "I have a laptop for daily practice.",
                "hindi": "मेरे पास दैनिक अभ्यास के लिए एक लैपटॉप है।"
            },
            {
                "english": "I have strong fundamentals in C++.",
                "hindi": "मेरे पास C++ की मजबूत बुनियादी समझ है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I am having two projects on my resume.",
            "correct": "I have two projects on my resume.",
            "explanationHindi": "स्थायी स्वामित्व या कौशल दर्शाने के लिए 'having' नहीं, सिर्फ 'have' का प्रयोग करें।"
        }
    }
},
  5: {
    "day": 5,
    "topic": "Third Person Possession",
    "patternFocus": "He has / She has / It has (उसके पास है / इसमें है)",
    "sentences": [
        {
            "english": "He has good coding skills.",
            "hindi": "उसके पास अच्छा कोडिंग कौशल है।",
            "pattern": "Subject + has + adjective + noun.",
            "example": "He has strong fundamentals in DSA. (डीएसए में उसकी मजबूत पकड़ है।)"
        },
        {
            "english": "She has an interview today.",
            "hindi": "उसका आज एक इंटरव्यू है।",
            "pattern": "Subject + has + article + noun + time adverb.",
            "example": "She has a technical round at 3 PM. (उसका दोपहर 3 बजे टेक्निकल राउंड है।)"
        },
        {
            "english": "This application has dark mode.",
            "hindi": "इस एप्लिकेशन में डार्क मोड है।",
            "pattern": "Subject + has + noun.",
            "example": "This algorithm has linear time complexity. (इस एल्गोरिदम की टाइम कॉम्प्लेक्सिटी लीनियर है।)"
        },
        {
            "english": "He has a creative solution.",
            "hindi": "उसके पास एक रचनात्मक समाधान है।",
            "pattern": "Subject + has + adjective + noun.",
            "example": "She has an efficient approach. (उसके पास एक कुशल दृष्टिकोण है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "उसके पास अच्छा कोडिंग कौशल है।",
            "expected": "He has good coding skills.",
            "pattern": "Subject + has + adjective + noun.",
            "explanation": "सरल व्याख्या: 'He' (वह/उसके) के साथ 'have' नहीं बल्कि 'has' आता है: He + has + good coding skills.",
            "acceptedAnswers": [
                "He has good coding skills.",
                "He has good coding skills"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "उसका आज एक इंटरव्यू है।",
            "expected": "She has an interview today.",
            "pattern": "Subject + has + article + noun + time adverb.",
            "explanation": "सरल व्याख्या: 'She' के साथ 'has' और 'interview' से पहले स्वर ध्वनि के कारण 'an' आता है: She + has + an interview today.",
            "acceptedAnswers": [
                "She has an interview today.",
                "She has an interview today"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इस एप्लिकेशन में डार्क मोड है।",
            "expected": "This application has dark mode.",
            "pattern": "Subject + has + noun.",
            "explanation": "सरल व्याख्या: 'This application' एकवचन है, इसलिए 'has' का उपयोग होता है: This application + has + dark mode.",
            "acceptedAnswers": [
                "This application has dark mode.",
                "This app has dark mode.",
                "This application has dark mode"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What technical strengths does your background provide?",
        "questionHindi": "आपकी तकनीकी पृष्ठभूमि क्या क्षमताएं प्रदान करती है?",
        "patternsUsed": "Subject + has + adjective + noun ➔ have + noun",
        "sampleAnswer": "I have good coding skills. My academic course has strong fundamentals in DSA. I have a creative solution for difficult problems.",
        "sampleAnswerHindi": "सरल व्याख्या: 'have' और 'has' का उपयोग करके कोडिंग कौशल और बुनियादी ज्ञान की मजबूती दर्शाई गई है।",
        "customizationTip": "'DSA' की जगह आप अपने पसंदीदा विषय (Web Development / Database) का नाम लिख सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"He has\" / \"She has\" = उसके पास है | \"It has\" = इसमें है (फ़ीचर्स/विशेषताएं)",
        "whenToUse": "जब किसी तीसरे व्यक्ति के पास कोई हुनर हो, या आपके सॉफ्टवेयर/ऐप में कोई विशेष क्षमता या फ़ीचर मौजूद हो।",
        "whereToUse": "सॉफ्टवेयर डेमो, प्रोजेक्ट आर्किटेक्चर प्रेजेंटेशन, और टीम प्रोफाइलिंग में।",
        "howToUse": "He / She / It + has + Noun / Feature",
        "examples": [
            {
                "english": "This web app has a responsive design.",
                "hindi": "इस वेब ऐप में एक रिस्पॉन्सिव डिज़ाइन है।"
            },
            {
                "english": "He has good debugging skills.",
                "hindi": "उसके पास अच्छा डिबगिंग कौशल है।"
            }
        ],
        "commonMistake": {
            "incorrect": "The system have a database error.",
            "correct": "The system has a database error.",
            "explanationHindi": "एकवचन संज्ञा (The system, He, She, It) के साथ 'have' की जगह 'has' आता है।"
        }
    }
},
  6: {
    "day": 6,
    "topic": "Desires & Career Goals",
    "patternFocus": "I want / I want to (मैं चाहता हूँ)",
    "sentences": [
        {
            "english": "I want to improve my speaking.",
            "hindi": "मैं अपना बोलना सुधारना चाहता हूँ।",
            "pattern": "Subject + want to + base verb + object.",
            "example": "I want to speak English fluently. (मैं धाराप्रवाह अंग्रेज़ी बोलना चाहता हूँ।)"
        },
        {
            "english": "I want to learn data structures.",
            "hindi": "मैं डेटा स्ट्रक्चर्स सीखना चाहता हूँ।",
            "pattern": "Subject + want to + base verb + noun.",
            "example": "I want to practice algorithms daily. (मैं रोज़ एल्गोरिदम का अभ्यास करना चाहता हूँ।)"
        },
        {
            "english": "I want to join a product-based company.",
            "hindi": "मैं एक प्रोडक्ट-बेस्ड कंपनी में शामिल होना चाहता हूँ।",
            "pattern": "Subject + want to + base verb + noun phrase.",
            "example": "I want to work as a frontend developer. (मैं फ्रंटएंड डेवलपर के रूप में काम करना चाहता हूँ।)"
        },
        {
            "english": "I want your feedback on my code.",
            "hindi": "मुझे अपने कोड पर आपकी राय चाहिए।",
            "pattern": "Subject + want + possessive + noun.",
            "example": "I want some advice for the interview. (मुझे इंटरव्यू के लिए कुछ सलाह चाहिए।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैं अपना बोलना सुधारना चाहता हूँ।",
            "expected": "I want to improve my speaking.",
            "pattern": "Subject + want to + base verb + object.",
            "explanation": "सरल व्याख्या: 'सुधारना चाहता हूँ' के लिए 'want to improve' आता है: I + want to + improve my speaking.",
            "acceptedAnswers": [
                "I want to improve my speaking.",
                "I want to improve my speaking"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं डेटा स्ट्रक्चर्स सीखना चाहता हूँ।",
            "expected": "I want to learn data structures.",
            "pattern": "Subject + want to + base verb + noun.",
            "explanation": "सरल व्याख्या: 'want to' के बाद क्रिया 'learn' आएगी: I + want to + learn data structures.",
            "acceptedAnswers": [
                "I want to learn data structures.",
                "I want to learn data structures"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं एक प्रोडक्ट-बेस्ड कंपनी में शामिल होना चाहता हूँ।",
            "expected": "I want to join a product-based company.",
            "pattern": "Subject + want to + base verb + noun phrase.",
            "explanation": "सरल व्याख्या: 'शामिल होना' के लिए 'join' का प्रयोग करें: I + want to + join a product-based company.",
            "acceptedAnswers": [
                "I want to join a product-based company.",
                "I want to join a product-based company"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is your primary goal right now as a fresher?",
        "questionHindi": "एक फ्रेशर के रूप में अभी आपका प्राथमिक लक्ष्य क्या है?",
        "patternsUsed": "Subject + want to + base verb + object",
        "sampleAnswer": "I want to improve my speaking. I want to learn data structures. I want to join a product-based company as a software developer.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I want to + verb' का उपयोग करके अपने सीखने और करियर के लक्ष्यों को क्रमबद्ध किया गया है।",
        "customizationTip": "'product-based company' की जगह अपनी पसंदीदा कंपनी या भूमिका (जैसे Frontend / Backend Developer) लिख सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"I want\" = मुझे चाहिए / मैं चाहता हूँ (वस्तु) | \"I want to\" = मैं कुछ करना चाहता हूँ (कार्य)",
        "whenToUse": "किसी चीज़ या वस्तु (noun) के लिए 'I want', और कोई नया काम या करियर लक्ष्य (verb) पूरा करने के लिए 'I want to'।",
        "whereToUse": "HR इंटरव्यू में करियर गोल्स बताते समय, और अपनी प्राथमिकताएं रखते समय।",
        "howToUse": "I want + Noun (वस्तु) | I want to + base verb (क्रिया)",
        "examples": [
            {
                "english": "I want a software developer job.",
                "hindi": "मुझे सॉफ्टवेयर डेवलपर की नौकरी चाहिए।"
            },
            {
                "english": "I want to improve my speaking.",
                "hindi": "मैं अपना बोलना सुधारना चाहता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I want to a job in tech.",
            "correct": "I want a job in tech.",
            "explanationHindi": "'to' केवल क्रिया (action) से पहले लगता है; वस्तु या पद (noun) से पहले सीधे 'want' आता है।"
        }
    }
},
  7: {
    "day": 7,
    "topic": "Third Person Desires",
    "patternFocus": "He wants to / She wants to (वह चाहता/चाहती है)",
    "sentences": [
        {
            "english": "He wants to crack the interview.",
            "hindi": "वह इंटरव्यू क्रैक करना चाहता है।",
            "pattern": "Subject + wants to + base verb + object.",
            "example": "He wants to get placed this semester. (वह इसी सेमेस्टर में प्लेस होना चाहता है।)"
        },
        {
            "english": "She wants to build a full-stack project.",
            "hindi": "वह एक फुल-स्टैक प्रोजेक्ट बनाना चाहती है।",
            "pattern": "Subject + wants to + base verb + object.",
            "example": "She wants to learn React and Node.js. (वह रिएक्ट और नोड.जेएस सीखना चाहती है।)"
        },
        {
            "english": "Everyone wants to write clean code.",
            "hindi": "हर कोई साफ और स्पष्ट कोड लिखना चाहता है।",
            "pattern": "Pronoun + wants to + base verb + noun phrase.",
            "example": "Everyone wants to succeed in life. (हर कोई जीवन में सफल होना चाहता है।)"
        },
        {
            "english": "The interviewer wants to test our logic.",
            "hindi": "इंटरव्यूअर हमारे लॉजिक का परीक्षण करना चाहता है।",
            "pattern": "Subject + wants to + base verb + noun phrase.",
            "example": "They want to understand our thought process. (वे हमारी सोच प्रक्रिया को समझना चाहते हैं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "वह इंटरव्यू क्रैक करना चाहता है।",
            "expected": "He wants to crack the interview.",
            "pattern": "Subject + wants to + base verb + object.",
            "explanation": "सरल व्याख्या: 'He' एकवचन है, इसलिए 'want' में 's' जुड़कर 'wants to' बनता है: He + wants to + crack the interview.",
            "acceptedAnswers": [
                "He wants to crack the interview.",
                "He wants to crack the interview"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "वह एक फुल-स्टैक प्रोजेक्ट बनाना चाहती है।",
            "expected": "She wants to build a full-stack project.",
            "pattern": "Subject + wants to + base verb + object.",
            "explanation": "सरल व्याख्या: 'She' के साथ 'wants to build' का उपयोग करें: She + wants to + build a full-stack project.",
            "acceptedAnswers": [
                "She wants to build a full-stack project.",
                "She wants to build a full-stack project"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हर कोई साफ कोड लिखना चाहता है।",
            "expected": "Everyone wants to write clean code.",
            "pattern": "Pronoun + wants to + base verb + noun phrase.",
            "explanation": "सरल व्याख्या: 'Everyone' को एकवचन माना जाता है, इसलिए 'wants to' आता है: Everyone + wants to + write clean code.",
            "acceptedAnswers": [
                "Everyone wants to write clean code.",
                "Everyone wants to write clean code"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Where do you see yourself beginning your engineering career?",
        "questionHindi": "आप अपने इंजीनियरिंग करियर की शुरुआत किस रूप में देखते हैं?",
        "patternsUsed": "Subject + wants to / want to + base verb",
        "sampleAnswer": "I want to crack the technical interview. I want to build reliable software. Everyone wants to succeed through consistent effort.",
        "sampleAnswerHindi": "सरल व्याख्या: 'want to' और 'wants to' से लक्ष्य और सकारात्मक दृष्टिकोण प्रस्तुत किया गया है।",
        "customizationTip": "'build reliable software' की जगह 'work in high-impact teams' भी कह सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"He wants to\" / \"She wants to\" = वह (कुछ कार्य) करना चाहता/चाहती है",
        "whenToUse": "जब आपको किसी टीम सदस्य, सहपाठी या व्यक्ति के लक्ष्यों या इच्छाओं का उल्लेख करना हो।",
        "whereToUse": "टीम वर्क, क्लाइंट मीटिंग्स, और रेफरेंस चर्चा में।",
        "howToUse": "He / She / Everyone + wants to + base verb",
        "examples": [
            {
                "english": "She wants to join a product company.",
                "hindi": "वह एक प्रोडक्ट कंपनी में शामिल होना चाहती है।"
            },
            {
                "english": "Everyone wants to succeed through effort.",
                "hindi": "हर कोई मेहनत से सफल होना चाहता है।"
            }
        ],
        "commonMistake": {
            "incorrect": "He want to learn Python.",
            "correct": "He wants to learn Python.",
            "explanationHindi": "He, She, It और एकवचन कर्ता के साथ 'want' में 's' जोड़कर 'wants' लिखा जाता है।"
        }
    }
},
  8: {
    "day": 8,
    "topic": "Necessity & Practice",
    "patternFocus": "I need / I need to (मुझे ज़रूरत है)",
    "sentences": [
        {
            "english": "I need more practice.",
            "hindi": "मुझे और अधिक अभ्यास की आवश्यकता है।",
            "pattern": "Subject + need + adjective + noun.",
            "example": "I need some help with graphs. (मुझे ग्राफ्स में थोड़ी मदद चाहिए।)"
        },
        {
            "english": "I need to practice every day.",
            "hindi": "मुझे हर रोज़ अभ्यास करने की आवश्यकता है।",
            "pattern": "Subject + need to + base verb + time expression.",
            "example": "I need to revise my notes daily. (मुझे रोज़ अपने नोट्स दोहराने की ज़रूरत है।)"
        },
        {
            "english": "I need to solve this problem.",
            "hindi": "मुझे इस समस्या को हल करने की ज़रूरत है।",
            "pattern": "Subject + need to + base verb + object.",
            "example": "I need to fix this compilation error. (मुझे यह कंपाइलर एरर ठीक करने की ज़रूरत है।)"
        },
        {
            "english": "I need some time to think.",
            "hindi": "मुझे सोचने के लिए थोड़ा समय चाहिए।",
            "pattern": "Subject + need + noun phrase + to-infinitive.",
            "example": "I need a minute to analyze the constraints. (मुझे शर्तें समझने के लिए एक मिनट चाहिए।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मुझे और अधिक अभ्यास की आवश्यकता है।",
            "expected": "I need more practice.",
            "pattern": "Subject + need + adjective + noun.",
            "explanation": "सरल व्याख्या: 'ज़रूरत है' के लिए 'I need' आता है: I + need + more practice.",
            "acceptedAnswers": [
                "I need more practice.",
                "I need more practice"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मुझे हर रोज़ अभ्यास करने की आवश्यकता है।",
            "expected": "I need to practice every day.",
            "pattern": "Subject + need to + base verb + time expression.",
            "explanation": "सरल व्याख्या: जब किसी क्रिया की ज़रूरत हो, तो 'need to + base verb' आता है: I + need to + practice every day.",
            "acceptedAnswers": [
                "I need to practice every day.",
                "I need to practice daily.",
                "I need to practice every day"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मुझे इस समस्या को हल करने की ज़रूरत है।",
            "expected": "I need to solve this problem.",
            "pattern": "Subject + need to + base verb + object.",
            "explanation": "सरल व्याख्या: 'हल करने की ज़रूरत है' के लिए: I + need to + solve this problem.",
            "acceptedAnswers": [
                "I need to solve this problem.",
                "I need to solve this problem"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What do you need to do daily to prepare for this job?",
        "questionHindi": "इस नौकरी की तैयारी के लिए आपको रोज़ाना क्या करने की आवश्यकता है?",
        "patternsUsed": "Subject + need + noun ➔ need to + base verb",
        "sampleAnswer": "I need more practice. I need to practice every day. I need to solve algorithmic problems with high accuracy.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I need' (संज्ञा) और 'I need to' (क्रिया) का उपयोग करके अपनी तैयारी की ज़रूरतें बताई गई हैं।",
        "customizationTip": "आप कितने घंटे या प्रश्न रोज़ हल करते हैं (जैसे 'solve two problems daily') यह भी जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"I need\" = मुझे ज़रूरत है (वस्तु/संसाधन की) | \"I need to\" = मुझे कुछ करना होगा / आवश्यकता है (क्रिया)",
        "whenToUse": "अनिवार्यता दर्शाने के लिए। किसी संसाधन या सामग्री के लिए 'need' और किसी ज़रूरी कदम या एक्शन के लिए 'need to'।",
        "whereToUse": "टास्क प्लानिंग, इंटरव्यू तैयारी, और ऑफिस के दैनिक लक्ष्यों में।",
        "howToUse": "I need + Noun | I need to + base verb",
        "examples": [
            {
                "english": "I need more practice.",
                "hindi": "मुझे और अभ्यास की आवश्यकता है।"
            },
            {
                "english": "I need to practice every day.",
                "hindi": "मुझे रोज़ाना अभ्यास करने की ज़रूरत है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I need to more time for preparation.",
            "correct": "I need more time for preparation.",
            "explanationHindi": "संज्ञा (more time) से पहले सिर्फ 'need' आता है, 'need to' नहीं।"
        }
    }
},
  9: {
    "day": 9,
    "topic": "Third Person Necessity",
    "patternFocus": "He needs to / She needs to (उसे आवश्यकता है)",
    "sentences": [
        {
            "english": "He needs to revise his notes.",
            "hindi": "उसे अपने नोट्स दोहराने की आवश्यकता है।",
            "pattern": "Subject + needs to + base verb + object.",
            "example": "He needs to prepare for tomorrow's test. (उसे कल के टेस्ट की तैयारी करनी है।)"
        },
        {
            "english": "She needs to speak more confidently.",
            "hindi": "उसे अधिक आत्मविश्वास के साथ बोलने की आवश्यकता है।",
            "pattern": "Subject + needs to + base verb + adverb.",
            "example": "She needs to explain her project clearly. (उसे अपना प्रोजेक्ट स्पष्टता से समझाना होगा।)"
        },
        {
            "english": "This function needs optimization.",
            "hindi": "इस फ़ंक्शन को ऑप्टिमाइज़ेशन की ज़रूरत है।",
            "pattern": "Subject + needs + noun.",
            "example": "This query needs an index. (इस डेटाबेस क्वेरी को इंडेक्स की ज़रूरत है।)"
        },
        {
            "english": "The team needs another developer.",
            "hindi": "टीम को एक और डेवलपर की ज़रूरत है।",
            "pattern": "Subject + needs + noun phrase.",
            "example": "The project needs more unit tests. (प्रोजेक्ट को और अधिक यूनिट टेस्ट की ज़रूरत है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "उसे अपने नोट्स दोहराने की आवश्यकता है।",
            "expected": "He needs to revise his notes.",
            "pattern": "Subject + needs to + base verb + object.",
            "explanation": "सरल व्याख्या: 'He' के साथ 'needs to' का प्रयोग होता है: He + needs to + revise his notes.",
            "acceptedAnswers": [
                "He needs to revise his notes.",
                "He needs to revise his notes"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "उसे अधिक आत्मविश्वास के साथ बोलने की आवश्यकता है।",
            "expected": "She needs to speak more confidently.",
            "pattern": "Subject + needs to + base verb + adverb.",
            "explanation": "सरल व्याख्या: 'She needs to speak' के बाद क्रियाविशेषण 'more confidently' आएगा: She + needs to + speak more confidently.",
            "acceptedAnswers": [
                "She needs to speak more confidently.",
                "She needs to speak more confidently"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इस फ़ंक्शन को ऑप्टिमाइज़ेशन की ज़रूरत है।",
            "expected": "This function needs optimization.",
            "pattern": "Subject + needs + noun.",
            "explanation": "सरल व्याख्या: 'This function' एकवचन है, इसलिए 'needs' आएगा: This function + needs + optimization.",
            "acceptedAnswers": [
                "This function needs optimization.",
                "This function needs optimization"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How should an engineering student prepare for technical interviews?",
        "questionHindi": "एक इंजीनियरिंग छात्र को तकनीकी इंटरव्यू की तैयारी कैसे करनी चाहिए?",
        "patternsUsed": "Subject + needs to + base verb + object",
        "sampleAnswer": "A candidate needs to revise notes daily. She needs to speak confidently. The code needs optimization before submission.",
        "sampleAnswerHindi": "सरल व्याख्या: तीसरे व्यक्ति (candidate, code) के साथ 'needs to' और 'needs' का प्रयोग करके तैयारी का सुझाव दिया गया है।",
        "customizationTip": "'revise notes' की जगह 'practice mock interviews' भी लिख सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"He needs to\" / \"It needs to\" = उसे (यह काम) करने की ज़रूरत है / इसमें यह होना चाहिए",
        "whenToUse": "जब किसी साथी को सुझाव देना हो, या किसी कोड मॉड्यूल में सुधार की आवश्यकता बतानी हो।",
        "whereToUse": "कोड रिव्यू, बग रिपोर्टिंग, और स्प्रिंट प्लानिंग में।",
        "howToUse": "He / She / It + needs to + base verb",
        "examples": [
            {
                "english": "This function needs to return a boolean.",
                "hindi": "इस फ़ंक्शन को एक बूलियन लौटाने की ज़रूरत है।"
            },
            {
                "english": "He needs to review the pull request.",
                "hindi": "उसे पुल रिक्वेस्ट की समीक्षा करने की आवश्यकता है।"
            }
        ],
        "commonMistake": {
            "incorrect": "The code need to be optimized.",
            "correct": "The code needs to be optimized.",
            "explanationHindi": "एकवचन कर्ता (The code, He) के साथ 'need' नहीं, 'needs' आता है।"
        }
    }
},
  10: {
    "day": 10,
    "topic": "Preferences & Interests",
    "patternFocus": "I like / I like to (मुझे पसंद है)",
    "sentences": [
        {
            "english": "I like coding in C++.",
            "hindi": "मुझे C++ में कोडिंग करना पसंद है।",
            "pattern": "Subject + like + verb-ing + prepositional phrase.",
            "example": "I like building web applications. (मुझे वेब ऐप्स बनाना पसंद है।)"
        },
        {
            "english": "I like to solve logical puzzles.",
            "hindi": "मुझे तार्किक पहेलियाँ हल करना पसंद है।",
            "pattern": "Subject + like to + base verb + object.",
            "example": "I like to learn new technologies. (मुझे नई तकनीकें सीखना पसंद है।)"
        },
        {
            "english": "I like working in a collaborative team.",
            "hindi": "मुझे सहयोगी टीम में काम करना पसंद है।",
            "pattern": "Subject + like + verb-ing + prepositional phrase.",
            "example": "I like helping my batchmates. (मुझे अपने सहपाठियों की मदद करना पसंद है।)"
        },
        {
            "english": "I like clean and readable code.",
            "hindi": "मुझे साफ और पढ़ने में आसान कोड पसंद है।",
            "pattern": "Subject + like + adjective + noun phrase.",
            "example": "I like simple solutions. (मुझे सरल समाधान पसंद हैं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मुझे C++ में कोडिंग करना पसंद है।",
            "expected": "I like coding in C++.",
            "pattern": "Subject + like + verb-ing + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'पसंद है' के लिए 'I like' और 'coding' का प्रयोग करें: I + like + coding in C++.",
            "acceptedAnswers": [
                "I like coding in C++.",
                "I like coding in C++"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मुझे तार्किक पहेलियाँ हल करना पसंद है।",
            "expected": "I like to solve logical puzzles.",
            "pattern": "Subject + like to + base verb + object.",
            "explanation": "सरल व्याख्या: 'हल करना पसंद है' के लिए 'like to solve' आता है: I + like to + solve logical puzzles.",
            "acceptedAnswers": [
                "I like to solve logical puzzles.",
                "I like to solve logical puzzles"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मुझे साफ और पढ़ने में आसान कोड पसंद है।",
            "expected": "I like clean and readable code.",
            "pattern": "Subject + like + adjective + noun phrase.",
            "explanation": "सरल व्याख्या: विशेषण 'clean and readable' का उपयोग करें: I + like + clean and readable code.",
            "acceptedAnswers": [
                "I like clean and readable code.",
                "I like clean and readable code"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What kind of programming tasks do you genuinely like?",
        "questionHindi": "आपको किस तरह के प्रोग्रामिंग कार्यों पर काम करना पसंद है?",
        "patternsUsed": "Subject + like + verb-ing ➔ like to + base verb",
        "sampleAnswer": "I like coding in C++. I like to solve logical puzzles. I like clean and readable code in all my projects.",
        "sampleAnswerHindi": "सरल व्याख्या: अपनी पसंद और रुचियों को 'I like' और 'I like to' से स्पष्ट रूप से व्यक्त किया गया है।",
        "customizationTip": "'C++' की जगह अपनी पसंदीदा भाषा का नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I like\" = मुझे पसंद है (कोई विषय/चीज़) | \"I like to\" = मुझे करना अच्छा लगता है (हॉबी/गतिविधि)",
        "whenToUse": "जब इंटरव्यूअर आपसे आपकी रुचियां, पसंदीदा तकनीक या खाली समय की गतिविधियां पूछे।",
        "whereToUse": "HR इंटरव्यू ('What are your hobbies?') और टेक्निकल इंटरव्यू ('Which tech stack do you prefer?') में।",
        "howToUse": "I like + Noun | I like to + base verb",
        "examples": [
            {
                "english": "I like clean data structures.",
                "hindi": "मुझे स्वच्छ डेटा स्ट्रक्चर्स पसंद हैं।"
            },
            {
                "english": "I like to solve algorithmic puzzles.",
                "hindi": "मुझे एल्गोरिथम पहेलियां सुलझाना पसंद है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I like to coding in JavaScript.",
            "correct": "I like to code in JavaScript.",
            "explanationHindi": "'to' के बाद क्रिया का मूल रूप (base verb - code) आता है, '-ing' रूप नहीं।"
        }
    }
},
  11: {
    "day": 11,
    "topic": "Expressing Abilities",
    "patternFocus": "I can / I cannot (मैं कर सकता हूँ / नहीं कर सकता)",
    "sentences": [
        {
            "english": "I can solve this problem using a hash map.",
            "hindi": "मैं हैश मैप का उपयोग करके इस समस्या को हल कर सकता हूँ।",
            "pattern": "Subject + can + base verb + object + prepositional phrase.",
            "example": "I can optimize this code. (मैं इस कोड को ऑप्टिमाइज़ कर सकता हूँ।)"
        },
        {
            "english": "I can code in C++ and JavaScript.",
            "hindi": "मैं C++ और जावास्क्रिप्ट में कोड कर सकता हूँ।",
            "pattern": "Subject + can + base verb + prepositional phrase.",
            "example": "I can write SQL queries. (मैं SQL क्वेरी लिख सकता हूँ।)"
        },
        {
            "english": "I cannot hear you clearly.",
            "hindi": "मुझे आपकी आवाज़ स्पष्ट सुनाई नहीं दे रही है।",
            "pattern": "Subject + cannot + base verb + object + adverb.",
            "example": "I cannot recall the exact syntax right now. (मुझे अभी सही सिंटेक्स याद नहीं आ रहा है।)"
        },
        {
            "english": "I can explain my logic step by step.",
            "hindi": "मैं अपने लॉजिक को कदम-दर-कदम समझा सकता हूँ।",
            "pattern": "Subject + can + base verb + object + adverb phrase.",
            "example": "I can walk you through my code. (मैं आपको अपने कोड का फ्लो समझा सकता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैं C++ और जावास्क्रिप्ट में कोड कर सकता हूँ।",
            "expected": "I can code in C++ and JavaScript.",
            "pattern": "Subject + can + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: क्षमता के लिए 'can + base verb' (code) का प्रयोग करें: I + can + code in C++ and JavaScript.",
            "acceptedAnswers": [
                "I can code in C++ and JavaScript.",
                "I can code in C++ and JavaScript"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मुझे आपकी आवाज़ स्पष्ट सुनाई नहीं दे रही है।",
            "expected": "I cannot hear you clearly.",
            "pattern": "Subject + cannot + base verb + object + adverb.",
            "explanation": "सरल व्याख्या: असमर्थता के लिए 'cannot' या 'can't' का प्रयोग करें: I + cannot + hear you clearly.",
            "acceptedAnswers": [
                "I cannot hear you clearly.",
                "I can't hear you clearly.",
                "I cannot hear you clearly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं अपने लॉजिक को कदम-दर-कदम समझा सकता हूँ।",
            "expected": "I can explain my logic step by step.",
            "pattern": "Subject + can + base verb + object + adverb phrase.",
            "explanation": "सरal व्याख्या: 'कदम-दर-कदम' के लिए 'step by step' का उपयोग करें: I + can + explain my logic step by step.",
            "acceptedAnswers": [
                "I can explain my logic step by step.",
                "I can explain my logic step by step"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What technical tasks can you handle independently?",
        "questionHindi": "आप स्वतंत्र रूप से कौन से तकनीकी कार्य संभाल सकते हैं?",
        "patternsUsed": "Subject + can + base verb + object",
        "sampleAnswer": "I can code in C++ and JavaScript. I can solve problems using a hash map. I can explain my logic step by step.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I can + verb' से अपनी तकनीकी क्षमता और समझाने के कौशल का प्रदर्शन किया गया है।",
        "customizationTip": "'C++ and JavaScript' की जगह उन टूल्स के नाम लिखें जिनमें आप सबसे सहज हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"I can\" = मैं कर सकता हूँ (मेरी क्षमता) | \"I cannot\" (can't) = मैं नहीं कर सकता (सीमा)",
        "whenToUse": "अपनी तकनीकी क्षमता, प्रोग्रामिंग प्रॉब्लम हल करने की योग्यता, या किसी सीमा को स्पष्ट करने के लिए।",
        "whereToUse": "लाइव कोडिंग इंटरव्यू, प्रोजेक्ट डेमो, और टेक्निकल डिस्कशन में।",
        "howToUse": "Subject + can / cannot + base verb (बिना 'to' के)",
        "examples": [
            {
                "english": "I can solve this problem in O(N) time.",
                "hindi": "मैं इस समस्या को O(N) समय में हल कर सकता हूँ।"
            },
            {
                "english": "I can build clean REST APIs.",
                "hindi": "मैं स्वच्छ REST APIs बना सकता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I can to explain my logic.",
            "correct": "I can explain my logic.",
            "explanationHindi": "Modal verb 'can' के बाद 'to' कभी नहीं आता; सीधे base verb (explain) आती है।"
        }
    }
},
  12: {
    "day": 12,
    "topic": "Polite Requests & Permissions",
    "patternFocus": "Could you / May I (क्या आप / क्या मैं)",
    "sentences": [
        {
            "english": "Could you please repeat the question?",
            "hindi": "क्या आप कृपया सवाल दोबारा दोहरा सकते हैं?",
            "pattern": "Could + subject + adverb + base verb + object?",
            "example": "Could you please speak a bit louder? (क्या आप थोड़ा तेज़ बोल सकते हैं?)"
        },
        {
            "english": "May I take a moment to think?",
            "hindi": "क्या मैं सोचने के लिए एक पल ले सकता हूँ?",
            "pattern": "May + subject + base verb + noun phrase + to-infinitive?",
            "example": "May I drink some water? (क्या मैं थोड़ा पानी पी सकता हूँ?)"
        },
        {
            "english": "Could you please explain this constraint?",
            "hindi": "क्या आप कृपया इस शर्त को समझा सकते हैं?",
            "pattern": "Could + subject + adverb + base verb + object?",
            "example": "Could you clarify the input range? (क्या आप इनपुट रेंज स्पष्ट कर सकते हैं?)"
        },
        {
            "english": "May I share my screen now?",
            "hindi": "क्या मैं अब अपनी स्क्रीन शेयर कर सकता हूँ?",
            "pattern": "May + subject + base verb + object + adverb?",
            "example": "May I begin writing the code? (क्या मैं कोड लिखना शुरू कर सकता हूँ?)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या आप कृपया सवाल दोबारा दोहरा सकते हैं?",
            "expected": "Could you please repeat the question?",
            "pattern": "Could + subject + adverb + base verb + object?",
            "explanation": "सरल व्याख्या: विनम्र अनुरोध के लिए 'Could you please repeat' का उपयोग करें।",
            "acceptedAnswers": [
                "Could you please repeat the question?",
                "Could you please repeat the question"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मैं सोचने के लिए एक पल ले सकता हूँ?",
            "expected": "May I take a moment to think?",
            "pattern": "May + subject + base verb + noun phrase + to-infinitive?",
            "explanation": "सरल व्याख्या: इंटरव्यू में सोचने की अनुमति के लिए 'May I take a moment to think?' सबसे उपयुक्त है।",
            "acceptedAnswers": [
                "May I take a moment to think?",
                "May I take a moment to think"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "क्या मैं अब अपनी स्क्रीन शेयर कर सकता हूँ?",
            "expected": "May I share my screen now?",
            "pattern": "May + subject + base verb + object + adverb?",
            "explanation": "सरल व्याख्या: अनुमति मांगने के लिए 'May I + base verb' का प्रयोग करें: May I + share my screen now?",
            "acceptedAnswers": [
                "May I share my screen now?",
                "May I share my screen now"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What do you do if you need a moment to think during an interview?",
        "questionHindi": "यदि इंटरव्यू के दौरान आपको सोचने के लिए कुछ समय चाहिए तो आप क्या कहते हैं?",
        "patternsUsed": "Could you please + base verb ➔ May I + base verb",
        "sampleAnswer": "Could you please repeat the question? May I take a moment to think? I want to understand the constraints clearly.",
        "sampleAnswerHindi": "सरल व्याख्या: विनम्रतापूर्वक प्रश्न दोहराने और सोचने का समय मांगने के लिए 'Could you please' और 'May I' का प्रयोग किया गया है।",
        "customizationTip": "इंटरव्यू में घबराने के बजाय शांति से यह वाक्य बोलें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you\" = क्या आप कृपया (विनम्र निवेदन) | \"May I\" = क्या मैं (विनम्र अनुमति)",
        "whenToUse": "इंटरव्यूअर से प्रश्न दोहराने का अनुरोध करते समय, या कोई उदाहरण लिखने या स्पष्टीकरण मांगने की अनुमति लेते समय।",
        "whereToUse": "टेक्निकल इंटरव्यू, क्लाइंट कॉल्स, और औपचारिक बैठकों में।",
        "howToUse": "Could you please + base verb ...? | May I + base verb ...?",
        "examples": [
            {
                "english": "Could you please repeat the constraint?",
                "hindi": "क्या आप कृपया कंस्ट्रेंट दोहरा सकते हैं?"
            },
            {
                "english": "May I share my screen?",
                "hindi": "क्या मैं अपनी स्क्रीन साझा कर सकता हूँ?"
            }
        ],
        "commonMistake": {
            "incorrect": "Can you please repeating the question?",
            "correct": "Could you please repeat the question?",
            "explanationHindi": "विनम्र अनुरोध के लिए 'Could' अधिक पेशेवर है और इसके बाद हमेशा base verb (repeat) आती है।"
        }
    }
},
  13: {
    "day": 13,
    "topic": "Daily Duty & Obligation",
    "patternFocus": "I have to / We have to (मुझे / हमें करना पड़ता है)",
    "sentences": [
        {
            "english": "I have to practice coding every single day.",
            "hindi": "मुझे हर एक दिन कोडिंग का अभ्यास करना पड़ता है।",
            "pattern": "Subject + have to + base verb + object + frequency.",
            "example": "I have to prepare for placements. (मुझे प्लेसमेंट की तैयारी करनी है।)"
        },
        {
            "english": "We have to handle edge cases carefully.",
            "hindi": "हमें कॉर्नर और एज केसेस को सावधानी से संभालना होगा।",
            "pattern": "Subject + have to + base verb + object + adverb.",
            "example": "We have to test negative numbers. (हमें ऋणात्मक संख्याओं का परीक्षण करना होगा।)"
        },
        {
            "english": "He has to submit his project before Friday.",
            "hindi": "उसे शुक्रवार से पहले अपना प्रोजेक्ट जमा करना होगा।",
            "pattern": "Subject + has to + base verb + object + prepositional phrase.",
            "example": "She has to attend the mock interview. (उसे मॉक इंटरव्यू में शामिल होना है।)"
        },
        {
            "english": "I have to reduce the time complexity.",
            "hindi": "मुझे टाइम कॉम्प्लेक्सिटी कम करनी होगी।",
            "pattern": "Subject + have to + base verb + object.",
            "example": "I have to write clean comments. (मुझे स्पष्ट टिप्पणियाँ लिखनी होंगी।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मुझे हर एक दिन कोडिंग का अभ्यास करना पड़ता है।",
            "expected": "I have to practice coding every single day.",
            "pattern": "Subject + have to + base verb + object + frequency.",
            "explanation": "सरल व्याख्या: अनिवार्यता दर्शाने के लिए 'I have to + base verb' आता है: I + have to + practice coding every single day.",
            "acceptedAnswers": [
                "I have to practice coding every single day.",
                "I have to practice coding every single day"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हमें कॉर्नर और एज केसेस को सावधानी से संभालना होगा।",
            "expected": "We have to handle edge cases carefully.",
            "pattern": "Subject + have to + base verb + object + adverb.",
            "explanation": "सरल व्याख्या: 'We have to handle' के साथ क्रियाविशेषण 'carefully' का प्रयोग करें।",
            "acceptedAnswers": [
                "We have to handle edge cases carefully.",
                "We have to handle edge cases carefully"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मुझे टाइम कॉम्प्लेक्सिटी कम करनी होगी।",
            "expected": "I have to reduce the time complexity.",
            "pattern": "Subject + have to + base verb + object.",
            "explanation": "सरल व्याख्या: 'कम करने' के लिए 'reduce' क्रिया का उपयोग करें: I + have to + reduce the time complexity.",
            "acceptedAnswers": [
                "I have to reduce the time complexity.",
                "I have to reduce the time complexity"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What responsibilities do you balance as a student preparing for placements?",
        "questionHindi": "प्लेसमेंट की तैयारी करने वाले छात्र के रूप में आप किन जिम्मेदारियों को संतुलित करते हैं?",
        "patternsUsed": "Subject + have to + base verb",
        "sampleAnswer": "I have to practice coding every single day. We have to handle edge cases carefully. I have to balance exams and placement preparation.",
        "sampleAnswerHindi": "सरल व्याख्या: 'have to + verb' का उपयोग करके कॉलेज और प्लेसमेंट की दोहरी जिम्मेदारियों को बताया गया है।",
        "customizationTip": "अपनी वास्तविक दिनचर्या के अनुसार समय (जैसे 'dedicate 3 hours daily') जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"I have to\" / \"We have to\" = मुझे / हमें (नियम या ज़िम्मेदारी के तहत) करना पड़ता है",
        "whenToUse": "जब किसी काम को समय सीमा, नियम या टीम की ज़िम्मेदारी के कारण करना अनिवार्य हो।",
        "whereToUse": "स्प्रिंट प्लानिंग, डेडलाइन डिस्कशन, और कॉलेज असाइनमेंट सबमिशन में।",
        "howToUse": "Subject + have to / has to + base verb",
        "examples": [
            {
                "english": "We have to test all edge cases.",
                "hindi": "हमें सभी एज केसेस का परीक्षण करना होगा।"
            },
            {
                "english": "I have to submit the project by evening.",
                "hindi": "मुझे शाम तक प्रोजेक्ट जमा करना है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I must to complete this task.",
            "correct": "I have to complete this task.",
            "explanationHindi": "'must' के साथ 'to' कभी नहीं आता; 'to' केवल 'have to' के साथ प्रयोग होता है।"
        }
    }
},
  14: {
    "day": 14,
    "topic": "Daily Routine Habits",
    "patternFocus": "Simple Present Routine (नियमित दिनचर्या)",
    "sentences": [
        {
            "english": "I wake up early and review my notes.",
            "hindi": "मैं सुबह जल्दी उठता हूँ और अपने नोट्स दोहराता हूँ।",
            "pattern": "Subject + base verb + adverb + and + base verb + object.",
            "example": "I wake up at 6 AM every day. (मैं रोज़ सुबह 6 बजे उठता हूँ।)"
        },
        {
            "english": "I solve two coding problems every morning.",
            "hindi": "मैं हर सुबह दो कोडिंग प्रश्न हल करता हूँ।",
            "pattern": "Subject + base verb + quantity + noun + time phrase.",
            "example": "I read technical articles daily. (मैं रोज़ तकनीकी लेख पढ़ता हूँ।)"
        },
        {
            "english": "He practices English speaking with friends.",
            "hindi": "वह दोस्तों के साथ अंग्रेज़ी बोलने का अभ्यास करता है।",
            "pattern": "Subject + verb(-s) + object + prepositional phrase.",
            "example": "She explains her logic aloud. (वह अपने लॉजिक को बोलकर समझाती है।)"
        },
        {
            "english": "Consistency brings great results.",
            "hindi": "नियमितता से बेहतरीन परिणाम मिलते हैं।",
            "pattern": "Noun + verb(-s) + adjective + noun.",
            "example": "Daily practice builds confidence. (दैनिक अभ्यास से आत्मविश्वास बढ़ता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैं सुबह जल्दी उठता हूँ और अपने नोट्स दोहराता हूँ।",
            "expected": "I wake up early and review my notes.",
            "pattern": "Subject + base verb + adverb + and + base verb + object.",
            "explanation": "सरल व्याख्या: नियमित आदत के लिए प्रेजेंट सिंपल का प्रयोग करें: I + wake up early + and + review my notes.",
            "acceptedAnswers": [
                "I wake up early and review my notes.",
                "I wake up early and review my notes"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं हर सुबह दो कोडिंग प्रश्न हल करता हूँ।",
            "expected": "I solve two coding problems every morning.",
            "pattern": "Subject + base verb + quantity + noun + time phrase.",
            "explanation": "सरल व्याख्या: 'I solve' के बाद मात्रा और समय का उल्लेख करें: I + solve two coding problems every morning.",
            "acceptedAnswers": [
                "I solve two coding problems every morning.",
                "I solve two coding problems every morning"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "दैनिक अभ्यास से आत्मविश्वास बढ़ता है।",
            "expected": "Daily practice builds confidence.",
            "pattern": "Noun + verb(-s) + noun.",
            "explanation": "सरल व्याख्या: एकवचन संज्ञा 'Daily practice' के साथ 'builds' आता है: Daily practice + builds confidence.",
            "acceptedAnswers": [
                "Daily practice builds confidence.",
                "Daily practice builds confidence"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about your morning routine and study consistency.",
        "questionHindi": "अपनी सुबह की दिनचर्या और अध्ययन की निरंतरता के बारे में बताइए।",
        "patternsUsed": "Simple Present: Subject + base verb + adverb",
        "sampleAnswer": "I wake up early and review my notes. I solve two coding problems every morning. Daily practice builds confidence.",
        "sampleAnswerHindi": "सरल व्याख्या: नियमित क्रियाओं (wake up, review, solve) के लिए सिंपल प्रेजेंट का स्वाभाविक उपयोग किया गया है।",
        "customizationTip": "'two coding problems' की जगह अपनी वास्तविक संख्या लिख सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"Simple Present Routine\" = दैनिक आदतें, नियमित दिनचर्या और तथ्य (करता हूँ / करते हैं)",
        "whenToUse": "जब आपको अपनी दैनिक दिनचर्या, अध्ययन की आदतें, या निरंतर कोडिंग अभ्यास का वर्णन करना हो।",
        "whereToUse": "HR राउंड ('Walk me through your typical day') और सामान्य बातचीत में।",
        "howToUse": "I + base verb (V1) ... | He/She + verb-s/es ...",
        "examples": [
            {
                "english": "I wake up early and practice coding.",
                "hindi": "मैं सुबह जल्दी उठता हूँ और कोडिंग का अभ्यास करता हूँ।"
            },
            {
                "english": "I review data structures every evening.",
                "hindi": "मैं हर शाम डेटा स्ट्रक्चर्स का दोहराव करता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Daily I am practicing coding.",
            "correct": "Daily I practice coding.",
            "explanationHindi": "नियमित आदत (routine) के लिए continuous ('am practicing') नहीं, Simple Present ('practice') का प्रयोग करें।"
        }
    }
},
  15: {
    "day": 15,
    "topic": "Asking Wh- Questions",
    "patternFocus": "What / Why / How (क्या / क्यों / कैसे)",
    "sentences": [
        {
            "english": "What is the time complexity of this approach?",
            "hindi": "इस तरीके की टाइम कॉम्प्लेक्सिटी क्या है?",
            "pattern": "What + is + noun phrase + prepositional phrase?",
            "example": "What is the best data structure here? (यहाँ सबसे अच्छा डेटा स्ट्रक्चर कौन सा है?)"
        },
        {
            "english": "Why do we use a hash set here?",
            "hindi": "हम यहाँ हैश सेट का उपयोग क्यों करते हैं?",
            "pattern": "Why + do + subject + base verb + object + adverb?",
            "example": "Why did you choose this language? (आपने यह प्रोग्रामिंग भाषा क्यों चुनी?)"
        },
        {
            "english": "How does this function work?",
            "hindi": "यह फ़ंक्शन कैसे काम करता है?",
            "pattern": "How + does + subject + base verb?",
            "example": "How do we handle duplicate elements? (हम डुप्लिकेट एलिमेंट्स को कैसे संभालते हैं?)"
        },
        {
            "english": "Where can I find the error?",
            "hindi": "मुझे एरर कहाँ मिल सकती है?",
            "pattern": "Where + can + subject + base verb + object?",
            "example": "Where should we store the result? (हमें परिणाम कहाँ स्टोर करना चाहिए?)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस तरीके की टाइम कॉम्प्लेक्सिटी क्या है?",
            "expected": "What is the time complexity of this approach?",
            "pattern": "What + is + noun phrase + prepositional phrase?",
            "explanation": "सरल व्याख्या: प्रश्न पूछने के लिए 'What is + noun phrase' का उपयोग करें: What is the time complexity of this approach?",
            "acceptedAnswers": [
                "What is the time complexity of this approach?",
                "What is the time complexity of this approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम यहाँ हैश सेट का उपयोग क्यों करते हैं?",
            "expected": "Why do we use a hash set here?",
            "pattern": "Why + do + subject + base verb + object + adverb?",
            "explanation": "सरल व्याख्या: कारण पूछने के लिए 'Why do we use' का प्रयोग करें: Why + do + we use a hash set here?",
            "acceptedAnswers": [
                "Why do we use a hash set here?",
                "Why do we use a hash set here"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह फ़ंक्शन कैसे काम करता है?",
            "expected": "How does this function work?",
            "pattern": "How + does + subject + base verb?",
            "explanation": "सरल व्याख्या: एकवचन 'this function' के लिए 'How does' आता है: How + does + this function work?",
            "acceptedAnswers": [
                "How does this function work?",
                "How does this function work"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Why did you choose Computer Science and why do you want this job?",
        "questionHindi": "आपने कंप्यूटर साइंस क्यों चुना और आप यह नौकरी क्यों चाहते हैं?",
        "patternsUsed": "Subject + want to + base verb ➔ would like to + base verb",
        "sampleAnswer": "I want to become a software engineer because I love building software. I would like to learn from experienced engineers and contribute to your team.",
        "sampleAnswerHindi": "सरल व्याख्या: 'want to' और 'would like to' से अपनी प्रेरणा और कंपनी में योगदान देने की इच्छा जताई गई है।",
        "customizationTip": "कंपनी का नाम या तकनीक जोड़कर इसे कस्टमाइज़ कर सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"What\" = क्या | \"Why\" = क्यों | \"How\" = कैसे | \"When\" = कब | \"Where\" = कहाँ",
        "whenToUse": "इंटरव्यूअर से प्रश्न स्पष्ट करने, इनपुट/आउटपुट कंस्ट्रेंट्स समझने या तकनीकी जानकारी मांगने के लिए।",
        "whereToUse": "प्रॉब्लम स्टेटमेंट समझने (Problem Understanding phase) और बातचीत में।",
        "howToUse": "Wh-word + do / does / is / can + subject + base verb ...?",
        "examples": [
            {
                "english": "What are the input constraints?",
                "hindi": "इनपुट की सीमाएं (constraints) क्या हैं?"
            },
            {
                "english": "How should we handle duplicate values?",
                "hindi": "हमें डुप्लिकेट वैल्यूज़ को कैसे संभालना चाहिए?"
            }
        ],
        "commonMistake": {
            "incorrect": "What the function does?",
            "correct": "What does the function do?",
            "explanationHindi": "Wh- प्रश्न में सहायक क्रिया (does) कर्ता से पहले आती है और मुख्य क्रिया मूल रूप (do) में रहती है।"
        }
    }
},
  16: {
    "day": 16,
    "topic": "Past Achievements & Projects",
    "patternFocus": "Simple Past (मैंने किया / पूरा किया - V2)",
    "sentences": [
        {
            "english": "I built a responsive web application.",
            "hindi": "मैंने एक रिस्पॉन्सिव वेब एप्लिकेशन बनाया।",
            "pattern": "Subject + past verb (V2) + object.",
            "example": "I built a placement tracker tool. (मैंने एक प्लेसमेंट ट्रैकर टूल बनाया।)"
        },
        {
            "english": "I completed my assignment yesterday.",
            "hindi": "मैंने कल अपना असाइनमेंट पूरा किया।",
            "pattern": "Subject + past verb (V2) + object + time adverb.",
            "example": "I solved 50 coding problems last week. (मैंने पिछले हफ्ते 50 कोडिंग प्रश्न हल किए।)"
        },
        {
            "english": "We worked on a team project last semester.",
            "hindi": "हमने पिछले सेमेस्टर एक टीम प्रोजेक्ट पर काम किया।",
            "pattern": "Subject + past verb (V2) + prepositional phrase + time phrase.",
            "example": "We designed a clean database schema. (हमने एक साफ डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "I learned data structures in my second year.",
            "hindi": "मैंने अपने दूसरे वर्ष में डेटा स्ट्रक्चर्स सीखा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "I improved my typing speed. (मैंने अपनी टाइपिंग स्पीड सुधारी।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने एक रिस्पॉन्सिव वेब एप्लिकेशन बनाया।",
            "expected": "I built a responsive web application.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: भूतकाल के लिए क्रिया का दूसरा रूप 'built' (V2) आता है: I + built + a responsive web application.",
            "acceptedAnswers": [
                "I built a responsive web application.",
                "I built a responsive web app.",
                "I built a responsive web application"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने कल अपना असाइनमेंट पूरा किया।",
            "expected": "I completed my assignment yesterday.",
            "pattern": "Subject + past verb (V2) + object + time adverb.",
            "explanation": "सरल व्याख्या: 'पूरा किया' के लिए 'completed' और समय 'yesterday' का प्रयोग करें।",
            "acceptedAnswers": [
                "I completed my assignment yesterday.",
                "I finished my assignment yesterday.",
                "I completed my assignment yesterday"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैंने अपने दूसरे वर्ष में डेटा स्ट्रक्चर्स सीखा।",
            "expected": "I learned data structures in my second year.",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'सीखा' के लिए 'learned' आता है: I + learned data structures in my second year.",
            "acceptedAnswers": [
                "I learned data structures in my second year.",
                "I learnt data structures in my second year.",
                "I learned data structures in my second year"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What does your typical daily placement preparation routine look like?",
        "questionHindi": "आपकी रोज़ाना प्लेसमेंट तैयारी की दिनचर्या कैसी दिखती है?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I wake up early. I practice coding for two hours. I complete my daily tasks consistently.",
        "sampleAnswerHindi": "सरल व्याख्या: दैनिक रूटीन के लिए सिंपल प्रेजेंट का उपयोग करके अपनी निरंतरता दिखाई गई है।",
        "customizationTip": "आप रोज़ कितने घंटे कोडिंग करते हैं, वह समय जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Simple Past (V2)\" = मैंने किया / बनाया / पूरा किया (अतीत में संपन्न कार्य)",
        "whenToUse": "जब आपको अपने कॉलेज प्रोजेक्ट, पिछली इंटर्नशिप, या हल की गई किसी समस्या का वर्णन करना हो।",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड और बिहेवियरल इंटरव्यू में।",
        "howToUse": "Subject + Past Tense Verb (V2) + Object",
        "examples": [
            {
                "english": "I built a responsive web application.",
                "hindi": "मैंने एक रिस्पॉन्सिव वेब एप्लिकेशन बनाया।"
            },
            {
                "english": "I resolved the memory leak issue.",
                "hindi": "मैंने मेमोरी लीक की समस्या का समाधान किया।"
            }
        ],
        "commonMistake": {
            "incorrect": "Last year I build a chat application.",
            "correct": "Last year I built a chat application.",
            "explanationHindi": "अतीत के पूरे हो चुके कार्य के लिए हमेशा क्रिया का दूसरा रूप (V2 - built) प्रयोग करें।"
        }
    }
},
  17: {
    "day": 17,
    "topic": "Negative Statements",
    "patternFocus": "I do not / He does not (मैं नहीं करता / वह नहीं करता)",
    "sentences": [
        {
            "english": "I do not panic during technical interviews.",
            "hindi": "मैं टेक्निकल इंटरव्यू के दौरान घबराता नहीं हूँ।",
            "pattern": "Subject + do not + base verb + prepositional phrase.",
            "example": "I do not guess answers blindly. (मैं बिना सोचे-समझे अंदाज़ा नहीं लगाता।)"
        },
        {
            "english": "He does not waste his study time.",
            "hindi": "वह अपने पढ़ने का समय बर्बाद नहीं करता है।",
            "pattern": "Subject + does not + base verb + object.",
            "example": "She does not skip daily revision. (वह रोज़ का रिवीजन कभी नहीं छोड़ती।)"
        },
        {
            "english": "We do not use unnecessary global variables.",
            "hindi": "हम अनावश्यक ग्लोबल वेरिएबल्स का उपयोग नहीं करते हैं।",
            "pattern": "Subject + do not + base verb + adjective + noun.",
            "example": "This code does not leak memory. (यह कोड मेमोरी लीक नहीं करता है।)"
        },
        {
            "english": "I did not find any syntax errors.",
            "hindi": "मुझे कोई सिंटेक्स एरर नहीं मिला।",
            "pattern": "Subject + did not + base verb + object.",
            "example": "I did not notice this edge case earlier. (मैंने पहले इस एज केस पर ध्यान नहीं दिया था।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैं टेक्निकल इंटरव्यू के दौरान घबराता नहीं हूँ।",
            "expected": "I do not panic during technical interviews.",
            "pattern": "Subject + do not + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: नकारात्मक वाक्य के लिए 'do not + base verb' (panic) का प्रयोग करें।",
            "acceptedAnswers": [
                "I do not panic during technical interviews.",
                "I don't panic during technical interviews.",
                "I do not panic during technical interviews"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "वह अपने पढ़ने का समय बर्बाद नहीं करता है।",
            "expected": "He does not waste his study time.",
            "pattern": "Subject + does not + base verb + object.",
            "explanation": "सरल व्याख्या: 'He' के साथ 'does not + base verb' (waste) आता है: He + does not + waste his study time.",
            "acceptedAnswers": [
                "He does not waste his study time.",
                "He doesn't waste his study time.",
                "He does not waste his study time"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मुझे कोई सिंटेक्स एरर नहीं मिला।",
            "expected": "I did not find any syntax errors.",
            "pattern": "Subject + did not + base verb + object.",
            "explanation": "सरल व्याख्या: भूतकाल के नकारात्मक वाक्य में 'did not + base verb' (find) आता है।",
            "acceptedAnswers": [
                "I did not find any syntax errors.",
                "I didn't find any syntax errors.",
                "I did not find any syntax errors"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you stay disciplined when solving tough coding problems?",
        "questionHindi": "कठिन कोडिंग प्रश्न हल करते समय आप अनुशासन कैसे बनाए रखते हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I do not panic during practice. I break the problem into smaller parts. I review my notes before coding.",
        "sampleAnswerHindi": "सरल व्याख्या: नकारात्मक वाक्य (do not panic) और सकारात्मक क्रियाओं से अनुशासन दर्शाया गया है।",
        "customizationTip": "'break into smaller parts' जैसे स्पष्ट चरणों का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I do not\" (don't) = मैं नहीं करता | \"He does not\" (doesn't) = वह नहीं करता",
        "whenToUse": "जब आपको किसी बात का खंडन करना हो, नकारात्मक तथ्य बताना हो, या किसी गलत आदत से बचना बताना हो।",
        "whereToUse": "तकनीकी सीमाओं, बेस्ट प्रैक्टिसेज, और क्या नहीं करना चाहिए समझाते समय।",
        "howToUse": "Subject + do / does not + base verb (V1)",
        "examples": [
            {
                "english": "I do not mutate state directly in React.",
                "hindi": "मैं React में स्टेट को सीधे म्यूटेट नहीं करता।"
            },
            {
                "english": "This query does not block the database.",
                "hindi": "यह क्वेरी डेटाबेस को ब्लॉक नहीं करती है।"
            }
        ],
        "commonMistake": {
            "incorrect": "He does not knows the answer.",
            "correct": "He does not know the answer.",
            "explanationHindi": "'does not' के बाद आने वाली मुख्य क्रिया में 's' या 'es' नहीं जुड़ता (हमेशा base form 'know')।"
        }
    }
},
  18: {
    "day": 18,
    "topic": "Future Commitments",
    "patternFocus": "I will / I am going to (मैं करूँगा / करने जा रहा हूँ)",
    "sentences": [
        {
            "english": "I will optimize this solution now.",
            "hindi": "मैं अब इस समाधान को ऑप्टिमाइज़ करूँगा।",
            "pattern": "Subject + will + base verb + object + adverb.",
            "example": "I will test this with an example. (मैं इसे एक उदाहरण के साथ टेस्ट करूँगा।)"
        },
        {
            "english": "I am going to build a new portfolio project.",
            "hindi": "मैं एक नया पोर्टफोलियो प्रोजेक्ट बनाने जा रहा हूँ।",
            "pattern": "Subject + am going to + base verb + object.",
            "example": "I am going to learn Next.js this month. (मैं इस महीने नेक्स्ट.जेएस सीखने जा रहा हूँ।)"
        },
        {
            "english": "I will explain my code line by line.",
            "hindi": "मैं अपने कोड को एक-एक लाइन समझाऊँगा।",
            "pattern": "Subject + will + base verb + object + adverb phrase.",
            "example": "I will write the test cases first. (मैं पहले टेस्ट केसेस लिखूँगा।)"
        },
        {
            "english": "Consistent effort will lead to success.",
            "hindi": "लगातार प्रयास से सफलता अवश्य मिलेगी।",
            "pattern": "Noun phrase + will + base verb + prepositional phrase.",
            "example": "Hard work will pay off. (कड़ी मेहनत का फल ज़रूर मिलेगा।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैं अब इस समाधान को ऑप्टिमाइज़ करूँगा।",
            "expected": "I will optimize this solution now.",
            "pattern": "Subject + will + base verb + object + adverb.",
            "explanation": "सरल व्याख्या: भविष्य के निर्णय के लिए 'will + base verb' का प्रयोग करें: I + will + optimize this solution now.",
            "acceptedAnswers": [
                "I will optimize this solution now.",
                "I'll optimize this solution now.",
                "I will optimize this solution now"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं एक नया पोर्टफोलियो प्रोजेक्ट बनाने जा रहा हूँ।",
            "expected": "I am going to build a new portfolio project.",
            "pattern": "Subject + am going to + base verb + object.",
            "explanation": "सरल व्याख्या: योजनाबद्ध भविष्य के लिए 'am going to + base verb' (build) आता है।",
            "acceptedAnswers": [
                "I am going to build a new portfolio project.",
                "I'm going to build a new portfolio project.",
                "I am going to build a new portfolio project"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं अपने कोड को एक-एक लाइन समझाऊँगा।",
            "expected": "I will explain my code line by line.",
            "pattern": "Subject + will + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: 'एक-एक लाइन' के लिए 'line by line' आता है: I + will + explain my code line by line.",
            "acceptedAnswers": [
                "I will explain my code line by line.",
                "I'll explain my code line by line.",
                "I will explain my code line by line"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What are your study commitments for the upcoming weeks?",
        "questionHindi": "आने वाले हफ्तों के लिए आपकी पढ़ाई के क्या संकल्प हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I will optimize my problem-solving speed. I am going to build a new portfolio project. Consistent effort will lead to success.",
        "sampleAnswerHindi": "सरल व्याख्या: भविष्य की योजनाओं के लिए 'will' और 'going to' का प्रयोग किया गया है।",
        "customizationTip": "अपने आगामी प्रोजेक्ट का नाम यहाँ जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"I will\" = मैं करूँगा (दृढ़ निश्चय) | \"I am going to\" = मैं करने जा रहा हूँ (नियोजित योजना)",
        "whenToUse": "जब आपको आगामी योजनाएं, सीखने के संकल्प, या प्रोजेक्ट डिलीवरी की समय सीमा बतानी हो।",
        "whereToUse": "इंटरव्यू के समापन, करियर गोल्स, और प्रोजेक्ट रोडमैप चर्चा में।",
        "howToUse": "Subject + will + base verb | Subject + am/is/are + going to + base verb",
        "examples": [
            {
                "english": "I will test this implementation thoroughly.",
                "hindi": "मैं इस कार्यान्वयन का गहन परीक्षण करूँगा।"
            },
            {
                "english": "I am going to learn system design next.",
                "hindi": "मैं आगे सिस्टम डिज़ाइन सीखने जा रहा हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will going to deploy the app.",
            "correct": "I am going to deploy the app.",
            "explanationHindi": "'will' और 'going to' को एक साथ नहीं जोड़ा जाता; किसी एक का प्रयोग करें।"
        }
    }
},
  19: {
    "day": 19,
    "topic": "Experience Gained (Present Perfect)",
    "patternFocus": "I have learned / I have worked (मैंने सीखा है / काम किया है)",
    "sentences": [
        {
            "english": "I have learned the core concepts of OOP.",
            "hindi": "मैंने OOP के मूल सिद्धांत सीख लिए हैं।",
            "pattern": "Subject + have + past participle (V3) + object.",
            "example": "I have learned how to use pointers in C++. (मैंने C++ में पॉइंटर्स का उपयोग करना सीखा है।)"
        },
        {
            "english": "I have solved over 200 coding problems.",
            "hindi": "मैंने 200 से अधिक कोडिंग प्रश्न हल किए हैं।",
            "pattern": "Subject + have + past participle (V3) + object.",
            "example": "I have completed five modules of DSA. (मैंने डीएसए के पांच मॉड्यूल पूरे कर लिए हैं।)"
        },
        {
            "english": "I have worked with relational databases.",
            "hindi": "मैंने रिलेशनल डेटाबेस पर काम किया है।",
            "pattern": "Subject + have + past participle (V3) + prepositional phrase.",
            "example": "I have built REST APIs before. (मैंने पहले भी REST API बनाई हैं।)"
        },
        {
            "english": "She has improved her communication skills.",
            "hindi": "उसने अपने संवाद कौशल में काफी सुधार किया है।",
            "pattern": "Subject + has + past participle (V3) + object.",
            "example": "He has finished the mock test. (उसने मॉक टेस्ट पूरा कर लिया है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने OOP के मूल सिद्धांत सीख लिए हैं।",
            "expected": "I have learned the core concepts of OOP.",
            "pattern": "Subject + have + past participle (V3) + object.",
            "explanation": "सरल व्याख्या: अनुभव दर्शाने के लिए 'have + V3' (learned) आता है: I + have + learned the core concepts of OOP.",
            "acceptedAnswers": [
                "I have learned the core concepts of OOP.",
                "I have learnt the core concepts of OOP.",
                "I have learned the core concepts of OOP"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने 200 से अधिक कोडिंग प्रश्न हल किए हैं।",
            "expected": "I have solved over 200 coding problems.",
            "pattern": "Subject + have + past participle (V3) + object.",
            "explanation": "सरल व्याख्या: '200 से अधिक' के लिए 'over 200' का प्रयोग करें: I + have + solved over 200 coding problems.",
            "acceptedAnswers": [
                "I have solved over 200 coding problems.",
                "I have solved more than 200 coding problems.",
                "I have solved over 200 coding problems"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैंने रिलेशनल डेटाबेस पर काम किया है।",
            "expected": "I have worked with relational databases.",
            "pattern": "Subject + have + past participle (V3) + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'काम किया है' के लिए 'have worked with' का प्रयोग करें।",
            "acceptedAnswers": [
                "I have worked with relational databases.",
                "I have worked with relational databases"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What core concepts have you learned recently in your preparation?",
        "questionHindi": "अपनी तैयारी में आपने हाल ही में कौन से मुख्य कॉन्सेप्ट सीखे हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I have learned the core concepts of OOP. I have solved over 200 coding problems. I have worked with relational databases.",
        "sampleAnswerHindi": "सरल व्याख्या: 'have + V3' (learned, solved, worked) का उपयोग करके अपनी उपलब्धियां साझा की गई हैं।",
        "customizationTip": "प्रश्नों की वास्तविक संख्या (जैसे 'over 150 problems') लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I have learned\" = मैंने सीखा है | \"I have worked\" = मैंने काम किया है (अनुभव)",
        "whenToUse": "जब आपको अपने अर्जित कौशल, पूर्व अनुभव या रेज़्युमे पर मौजूद सर्टिफिकेशन्स का प्रभाव वर्तमान में जोड़कर बताना हो।",
        "whereToUse": "इंटरव्यू के दौरान अपनी बैकग्राउंड और हैंड्स-ऑन अनुभव बताते समय।",
        "howToUse": "Subject + have / has + Past Participle (V3) + Object",
        "examples": [
            {
                "english": "I have solved over 200 coding problems.",
                "hindi": "मैंने 200 से अधिक कोडिंग समस्याएं हल की हैं।"
            },
            {
                "english": "I have worked with Git and GitHub.",
                "hindi": "मैंने गिट और गिटहब के साथ काम किया है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have learn data structures.",
            "correct": "I have learned data structures.",
            "explanationHindi": "'have' या 'has' के बाद हमेशा क्रिया का तीसरा रूप (V3 - learned) आता है।"
        }
    }
},
  20: {
    "day": 20,
    "topic": "Polite Opinions & Disclaimers",
    "patternFocus": "I think that / In my opinion (मेरे विचार में)",
    "sentences": [
        {
            "english": "I think that this approach is more efficient.",
            "hindi": "मुझे लगता है कि यह दृष्टिकोण अधिक कुशल है।",
            "pattern": "Subject + think that + clause.",
            "example": "I think that a hash map is ideal here. (मुझे लगता है कि यहाँ हैश मैप सबसे उपयुक्त है।)"
        },
        {
            "english": "In my opinion, readable code is very important.",
            "hindi": "मेरी राय में, पठनीय (साफ) कोड बहुत महत्वपूर्ण है।",
            "pattern": "Prepositional phrase + clause.",
            "example": "In my opinion, testing prevents bugs. (मेरी राय में, टेस्टिंग से गलतियाँ बचती हैं।)"
        },
        {
            "english": "I believe we should handle null values first.",
            "hindi": "मेरा मानना है कि हमें पहले नल (null) वैल्यूज को संभालना चाहिए।",
            "pattern": "Subject + believe + clause.",
            "example": "I believe this covers all constraints. (मेरा मानना है कि यह सभी शर्तों को पूरा करता है।)"
        },
        {
            "english": "From my understanding, the input size is small.",
            "hindi": "मेरी समझ के अनुसार, इनपुट का आकार छोटा है।",
            "pattern": "Prepositional phrase + clause.",
            "example": "As far as I know, this is the optimal solution. (जहाँ तक मुझे पता है, यह सबसे इष्टतम समाधान है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मुझे लगता है कि यह दृष्टिकोण अधिक कुशल है।",
            "expected": "I think that this approach is more efficient.",
            "pattern": "Subject + think that + clause.",
            "explanation": "सरल व्याख्या: विनम्र राय के लिए 'I think that' का प्रयोग करें: I think that this approach is more efficient.",
            "acceptedAnswers": [
                "I think that this approach is more efficient.",
                "I think this approach is more efficient.",
                "I think that this approach is more efficient"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मेरी राय में, साफ कोड बहुत महत्वपूर्ण है।",
            "expected": "In my opinion, readable code is very important.",
            "pattern": "Prepositional phrase + clause.",
            "explanation": "सरल व्याख्या: पेशेवर बातचीत में 'In my opinion' से वाक्य शुरू करें।",
            "acceptedAnswers": [
                "In my opinion, readable code is very important.",
                "In my opinion, clean code is very important.",
                "In my opinion, readable code is very important"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मेरा मानना है कि हमें पहले नल वैल्यूज को संभालना चाहिए।",
            "expected": "I believe we should handle null values first.",
            "pattern": "Subject + believe + clause.",
            "explanation": "सरल व्याख्या: सुझाव देने के लिए 'I believe we should handle' का उपयोग करें।",
            "acceptedAnswers": [
                "I believe we should handle null values first.",
                "I believe that we should handle null values first.",
                "I believe we should handle null values first"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is your philosophy on writing maintainable software?",
        "questionHindi": "पठनीय और मेंटेन करने योग्य सॉफ्टवेयर लिखने पर आपका क्या विचार है?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "In my opinion, readable code is very important. I think that clean logic prevents bugs. I believe we should test edge cases first.",
        "sampleAnswerHindi": "सरल व्याख्या: 'In my opinion' और 'I believe' से पेशेवर विचार व्यक्त किए गए हैं।",
        "customizationTip": "कोड की पठनीयता पर अपना संक्षिप्त दृष्टिकोण जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I think that\" = मुझे लगता है कि | \"In my opinion\" = मेरे विचार में | \"I believe\" = मेरा मानना है",
        "whenToUse": "जब आपको किसी तकनीकी डिबेट, कोड आर्किटेक्चर या दृष्टिकोण पर अपना पेशेवर विचार विनम्रता से व्यक्त करना हो।",
        "whereToUse": "ग्रुप डिस्कशन (GD), कोड रिव्यू, और सिस्टम डिज़ाइन इंटरव्यू में।",
        "howToUse": "In my opinion, [Sentence] | I believe that [Sentence]",
        "examples": [
            {
                "english": "In my opinion, readable code is very important.",
                "hindi": "मेरे विचार में, पठनीय कोड बहुत महत्वपूर्ण है।"
            },
            {
                "english": "I believe we should test edge cases first.",
                "hindi": "मेरा मानना है कि हमें पहले एज केसेस की जांच करनी चाहिए।"
            }
        ],
        "commonMistake": {
            "incorrect": "According to me, clean code is best.",
            "correct": "In my opinion, clean code is best.",
            "explanationHindi": "अंग्रेज़ी में अपने निजी विचार के लिए 'According to me' की जगह 'In my opinion' बोलना अधिक स्वाभाविक और सही है।"
        }
    }
},
  21: {
    "day": 21,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What does your typical daily placement preparation routine look like?",
        "questionHindi": "आपकी रोज़ाना प्लेसमेंट तैयारी की दिनचर्या कैसी दिखती है?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I wake up early. I practice coding for two hours. I complete my daily tasks consistently.",
        "sampleAnswerHindi": "सरल व्याख्या: दैनिक रूटीन के लिए सिंपल प्रेजेंट का उपयोग करके अपनी निरंतरता दिखाई गई है।",
        "customizationTip": "आप रोज़ कितने घंटे कोडिंग करते हैं, वह समय जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I declare a map to store frequencies.",
                "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।"
            },
            {
                "english": "Finally, I return the maximum count.",
                "hindi": "अंत में, मैं अधिकतम गिनती वापस लौटाता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  22: {
    "day": 22,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you stay disciplined when solving tough coding problems?",
        "questionHindi": "कठिन कोडिंग प्रश्न हल करते समय आप अनुशासन कैसे बनाए रखते हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I do not panic during practice. I break the problem into smaller parts. I review my notes before coding.",
        "sampleAnswerHindi": "सरल व्याख्या: नकारात्मक वाक्य (do not panic) और सकारात्मक क्रियाओं से अनुशासन दर्शाया गया है।",
        "customizationTip": "'break into smaller parts' जैसे स्पष्ट चरणों का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The time complexity of this solution is O(N).",
                "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।"
            },
            {
                "english": "The auxiliary space complexity is O(1).",
                "hindi": "इसकी अतिरिक्त स्पेस कॉम्प्लेक्सिटी O(1) है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  23: {
    "day": 23,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What are your study commitments for the upcoming weeks?",
        "questionHindi": "आने वाले हफ्तों के लिए आपकी पढ़ाई के क्या संकल्प हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I will optimize my problem-solving speed. I am going to build a new portfolio project. Consistent effort will lead to success.",
        "sampleAnswerHindi": "सरल व्याख्या: भविष्य की योजनाओं के लिए 'will' और 'going to' का प्रयोग किया गया है।",
        "customizationTip": "अपने आगामी प्रोजेक्ट का नाम यहाँ जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "Could you clarify if the array can contain negative numbers?",
                "hindi": "क्या आप स्पष्ट कर सकते हैं कि क्या एरे में ऋणात्मक संख्याएं हो सकती हैं?"
            },
            {
                "english": "Let me confirm the expected output format.",
                "hindi": "मुझे अपेक्षित आउटपुट फॉर्मेट की पुष्टि करने दीजिए।"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  24: {
    "day": 24,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What core concepts have you learned recently in your preparation?",
        "questionHindi": "अपनी तैयारी में आपने हाल ही में कौन से मुख्य कॉन्सेप्ट सीखे हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I have learned the core concepts of OOP. I have solved over 200 coding problems. I have worked with relational databases.",
        "sampleAnswerHindi": "सरल व्याख्या: 'have + V3' (learned, solved, worked) का उपयोग करके अपनी उपलब्धियां साझा की गई हैं।",
        "customizationTip": "प्रश्नों की वास्तविक संख्या (जैसे 'over 150 problems') लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "My project solves the challenge of placement preparation tracking.",
                "hindi": "मेरा प्रोजेक्ट प्लेसमेंट की तैयारी को ट्रैक करने की चुनौती को हल करता है।"
            },
            {
                "english": "The tech stack includes Next.js, Node.js, and MongoDB.",
                "hindi": "टेक स्टैक में Next.js, Node.js और MongoDB शामिल हैं।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  25: {
    "day": 25,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is your philosophy on writing maintainable software?",
        "questionHindi": "पठनीय और मेंटेन करने योग्य सॉफ्टवेयर लिखने पर आपका क्या विचार है?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "In my opinion, readable code is very important. I think that clean logic prevents bugs. I believe we should test edge cases first.",
        "sampleAnswerHindi": "सरल व्याख्या: 'In my opinion' और 'I believe' से पेशेवर विचार व्यक्त किए गए हैं।",
        "customizationTip": "कोड की पठनीयता पर अपना संक्षिप्त दृष्टिकोण जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "Let's collaborate on the API contract.",
                "hindi": "आइए एपीआई अनुबंध पर मिलकर काम करें।"
            },
            {
                "english": "We can divide the work into frontend and backend tasks.",
                "hindi": "हम काम को फ्रंटएंड और बैकएंड कार्यों में विभाजित कर सकते हैं।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  26: {
    "day": 26,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What does your typical daily placement preparation routine look like?",
        "questionHindi": "आपकी रोज़ाना प्लेसमेंट तैयारी की दिनचर्या कैसी दिखती है?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I wake up early. I practice coding for two hours. I complete my daily tasks consistently.",
        "sampleAnswerHindi": "सरल व्याख्या: दैनिक रूटीन के लिए सिंपल प्रेजेंट का उपयोग करके अपनी निरंतरता दिखाई गई है।",
        "customizationTip": "आप रोज़ कितने घंटे कोडिंग करते हैं, वह समय जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I encountered an unexpected edge case with empty inputs.",
                "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।"
            },
            {
                "english": "The fix was adding a boundary check before accessing the index.",
                "hindi": "समाधान था इंडेक्स एक्सेस करने से पहले बाउंड्री चेक जोड़ना।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  27: {
    "day": 27,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you stay disciplined when solving tough coding problems?",
        "questionHindi": "कठिन कोडिंग प्रश्न हल करते समय आप अनुशासन कैसे बनाए रखते हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I do not panic during practice. I break the problem into smaller parts. I review my notes before coding.",
        "sampleAnswerHindi": "सरल व्याख्या: नकारात्मक वाक्य (do not panic) और सकारात्मक क्रियाओं से अनुशासन दर्शाया गया है।",
        "customizationTip": "'break into smaller parts' जैसे स्पष्ट चरणों का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "My greatest strength is my consistency and discipline.",
                "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।"
            },
            {
                "english": "One area I am actively improving is public speaking.",
                "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह है सार्वजनिक रूप से बोलना।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  28: {
    "day": 28,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What are your study commitments for the upcoming weeks?",
        "questionHindi": "आने वाले हफ्तों के लिए आपकी पढ़ाई के क्या संकल्प हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I will optimize my problem-solving speed. I am going to build a new portfolio project. Consistent effort will lead to success.",
        "sampleAnswerHindi": "सरल व्याख्या: भविष्य की योजनाओं के लिए 'will' और 'going to' का प्रयोग किया गया है।",
        "customizationTip": "अपने आगामी प्रोजेक्ट का नाम यहाँ जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I initialize two pointers at the boundaries.",
                "hindi": "सबसे पहले, मैं दोनों छोरों पर दो पॉइंटर्स सेट करता हूँ।"
            },
            {
                "english": "Next, I shrink the window until the condition holds.",
                "hindi": "इसके बाद, मैं विंडो को तब तक छोटा करता हूँ जब तक शर्त पूरी न हो।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  29: {
    "day": 29,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What core concepts have you learned recently in your preparation?",
        "questionHindi": "अपनी तैयारी में आपने हाल ही में कौन से मुख्य कॉन्सेप्ट सीखे हैं?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "I have learned the core concepts of OOP. I have solved over 200 coding problems. I have worked with relational databases.",
        "sampleAnswerHindi": "सरल व्याख्या: 'have + V3' (learned, solved, worked) का उपयोग करके अपनी उपलब्धियां साझा की गई हैं।",
        "customizationTip": "प्रश्नों की वास्तविक संख्या (जैसे 'over 150 problems') लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The time complexity is O(N log N) due to sorting.",
                "hindi": "सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।"
            },
            {
                "english": "The space complexity is O(log N) for recursion stack.",
                "hindi": "रिकर्शन स्टैक के लिए स्पेस कॉम्प्लेक्सिटी O(log N) है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  30: {
    "day": 30,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is your philosophy on writing maintainable software?",
        "questionHindi": "पठनीय और मेंटेन करने योग्य सॉफ्टवेयर लिखने पर आपका क्या विचार है?",
        "patternsUsed": "Daily Routine Habits (Simple Present & Future Commitments)",
        "sampleAnswer": "In my opinion, readable code is very important. I think that clean logic prevents bugs. I believe we should test edge cases first.",
        "sampleAnswerHindi": "सरल व्याख्या: 'In my opinion' और 'I believe' से पेशेवर विचार व्यक्त किए गए हैं।",
        "customizationTip": "कोड की पठनीयता पर अपना संक्षिप्त दृष्टिकोण जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "Should I consider an empty string as a valid input?",
                "hindi": "क्या मुझे खाली स्ट्रिंग को एक मान्य इनपुट मानना चाहिए?"
            },
            {
                "english": "Could you clarify if the input array is already sorted?",
                "hindi": "क्या आप स्पष्ट कर सकते हैं कि क्या इनपुट एरे पहले से सॉर्टेड है?"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  31: {
    "day": 31,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Which computer science subjects do you enjoy the most?",
        "questionHindi": "आपको कंप्यूटर साइंस के कौन से विषय सबसे ज्यादा पसंद हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I like Data Structures and Algorithms. I enjoy learning database concepts. I find operating systems very interesting.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I like' और 'I enjoy' का उपयोग करके अपने पसंदीदा विषयों को बताया गया है।",
        "customizationTip": "अपने सबसे पसंदीदा विषयों (जैसे DBMS, Computer Networks) के नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "I was responsible for designing the database schema.",
                "hindi": "मैं डेटाबेस स्कीमा डिज़ाइन करने के लिए ज़िम्मेदार था।"
            },
            {
                "english": "My module handles real-time voice speech analysis.",
                "hindi": "मेरा मॉड्यूल रियल-टाइम वॉयस स्पीच एनालिसिस को संभालता है।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  32: {
    "day": 32,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How did you develop an interest in software programming?",
        "questionHindi": "प्रोग्रामिंग में आपकी रुचि कैसे विकसित हुई?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I started coding in college. I like to solve logical puzzles. Building useful applications gives me satisfaction.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I started' और 'I like to solve' से अपनी रुचि की शुरुआत समझाई गई है।",
        "customizationTip": "जब आपने पहली बार कोडिंग की थी, उस वर्ष या घटना का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "I agree with your point about code readability.",
                "hindi": "कोड की पठनीयता को लेकर मैं आपके बिंदु से सहमत हूँ।"
            },
            {
                "english": "Let's sync up before merging the pull request.",
                "hindi": "पुल रिक्वेस्ट को मर्ज करने से पहले आइए आपस में सिंक कर लें।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  33: {
    "day": 33,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What data structures do you use most frequently?",
        "questionHindi": "आप सबसे अधिक किन डेटा स्ट्रक्चर्स का उपयोग करते हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I frequently use arrays, hash maps, and stacks. I can solve problems using two pointers. I like clean data structures.",
        "sampleAnswerHindi": "सरल व्याख्या: अक्सर उपयोग किए जाने वाले डेटा स्ट्रक्चर्स का सीधा उल्लेख किया गया है।",
        "customizationTip": "वे डेटा स्ट्रक्चर लिखें जिन पर आपकी अच्छी पकड़ है।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I diagnosed the issue by tracing variable values in the debugger.",
                "hindi": "मैंने डिबगर में वेरिएबल मानों को ट्रेस करके समस्या की पहचान की।"
            },
            {
                "english": "The bug was caused by an off-by-one loop condition.",
                "hindi": "बग एक ऑफ-बाय-वन लूप कंडीशन के कारण हुआ था।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  34: {
    "day": 34,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What technical blogs or documentation do you read regularly?",
        "questionHindi": "आप नियमित रूप से कौन से तकनीकी ब्लॉग या डॉक्यूमेंटेशन पढ़ते हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I regularly read official documentation. I follow tech articles on web development. I like learning modern engineering practices.",
        "sampleAnswerHindi": "सरल व्याख्या: निरंतर सीखने की आदत दर्शाने के लिए 'I regularly read' का प्रयोग किया गया है।",
        "customizationTip": "आप जहाँ से पढ़ते हैं (जैसे MDN, GeeksforGeeks, Dev.to) उसका नाम जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "I am motivated by solving complex real-world challenges.",
                "hindi": "मैं वास्तविक दुनिया की जटिल चुनौतियों को हल करने से प्रेरित होता हूँ।"
            },
            {
                "english": "I learn new programming frameworks very quickly.",
                "hindi": "मैं नए प्रोग्रामिंग फ्रेमवर्क बहुत तेज़ी से सीखता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  35: {
    "day": 35,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Why is continuous learning important in the tech industry?",
        "questionHindi": "टेक इंडस्ट्री में निरंतर सीखना क्यों महत्वपूर्ण है?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "Technology evolves rapidly. I need to practice every day. I want to adapt quickly to modern frameworks.",
        "sampleAnswerHindi": "सरल व्याख्या: इंडस्ट्री की गति और अपनी सीखने की उत्सुकता को 'need to' और 'want to' से जोड़ा गया है।",
        "customizationTip": "तकनीक में बदलाव को लेकर अपना संक्षिप्त विचार जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I check the base condition of recursion.",
                "hindi": "सबसे पहले, मैं रिकर्शन की बेस कंडीशन जांचता हूँ।"
            },
            {
                "english": "Finally, I return the combined subtree result.",
                "hindi": "अंत में, मैं दोनों सब-ट्री का संयुक्त परिणाम लौटाता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  36: {
    "day": 36,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Which computer science subjects do you enjoy the most?",
        "questionHindi": "आपको कंप्यूटर साइंस के कौन से विषय सबसे ज्यादा पसंद हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I like Data Structures and Algorithms. I enjoy learning database concepts. I find operating systems very interesting.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I like' और 'I enjoy' का उपयोग करके अपने पसंदीदा विषयों को बताया गया है।",
        "customizationTip": "अपने सबसे पसंदीदा विषयों (जैसे DBMS, Computer Networks) के नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The time complexity is O(V + E) for graph traversal.",
                "hindi": "ग्राफ ट्रैवर्सल के लिए टाइम कॉम्प्लेक्सिटी O(V + E) है।"
            },
            {
                "english": "The space complexity is O(V) to store the visited set.",
                "hindi": "विज़िटेड सेट को स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(V) है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  37: {
    "day": 37,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How did you develop an interest in software programming?",
        "questionHindi": "प्रोग्रामिंग में आपकी रुचि कैसे विकसित हुई?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I started coding in college. I like to solve logical puzzles. Building useful applications gives me satisfaction.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I started' और 'I like to solve' से अपनी रुचि की शुरुआत समझाई गई है।",
        "customizationTip": "जब आपने पहली बार कोडिंग की थी, उस वर्ष या घटना का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "Should I handle cyclic dependencies in the graph?",
                "hindi": "क्या मुझे ग्राफ में साइक्लिक डिपेंडेंसीज़ को संभालना चाहिए?"
            },
            {
                "english": "Let me confirm if duplicate elements are allowed.",
                "hindi": "मुझे पुष्टि करने दीजिए कि क्या डुप्लिकेट तत्वों की अनुमति है।"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  38: {
    "day": 38,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What data structures do you use most frequently?",
        "questionHindi": "आप सबसे अधिक किन डेटा स्ट्रक्चर्स का उपयोग करते हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I frequently use arrays, hash maps, and stacks. I can solve problems using two pointers. I like clean data structures.",
        "sampleAnswerHindi": "सरल व्याख्या: अक्सर उपयोग किए जाने वाले डेटा स्ट्रक्चर्स का सीधा उल्लेख किया गया है।",
        "customizationTip": "वे डेटा स्ट्रक्चर लिखें जिन पर आपकी अच्छी पकड़ है।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "My project solves real-time collaboration with WebSockets.",
                "hindi": "मेरा प्रोजेक्ट WebSockets के साथ रियल-टाइम सहयोग को सक्षम करता है।"
            },
            {
                "english": "I implemented secure JWT authentication.",
                "hindi": "मैंने सुरक्षित JWT प्रमाणीकरण लागू किया।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  39: {
    "day": 39,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What technical blogs or documentation do you read regularly?",
        "questionHindi": "आप नियमित रूप से कौन से तकनीकी ब्लॉग या डॉक्यूमेंटेशन पढ़ते हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I regularly read official documentation. I follow tech articles on web development. I like learning modern engineering practices.",
        "sampleAnswerHindi": "सरल व्याख्या: निरंतर सीखने की आदत दर्शाने के लिए 'I regularly read' का प्रयोग किया गया है।",
        "customizationTip": "आप जहाँ से पढ़ते हैं (जैसे MDN, GeeksforGeeks, Dev.to) उसका नाम जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "We can divide the testing effort across team members.",
                "hindi": "हम टेस्टिंग के काम को टीम के सदस्यों में बांट सकते हैं।"
            },
            {
                "english": "I appreciate constructive feedback on my code.",
                "hindi": "मैं अपने कोड पर रचनात्मक फीडबैक का स्वागत करता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  40: {
    "day": 40,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Why is continuous learning important in the tech industry?",
        "questionHindi": "टेक इंडस्ट्री में निरंतर सीखना क्यों महत्वपूर्ण है?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "Technology evolves rapidly. I need to practice every day. I want to adapt quickly to modern frameworks.",
        "sampleAnswerHindi": "सरल व्याख्या: इंडस्ट्री की गति और अपनी सीखने की उत्सुकता को 'need to' और 'want to' से जोड़ा गया है।",
        "customizationTip": "तकनीक में बदलाव को लेकर अपना संक्षिप्त विचार जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I encountered a race condition during concurrent API calls.",
                "hindi": "समवर्ती एपीआई कॉल्स के दौरान मुझे रेस कंडीशन का सामना करना पड़ा।"
            },
            {
                "english": "The fix was implementing an async mutex lock.",
                "hindi": "समाधान एक एसिंक म्यूटेक्स लॉक लागू करना था।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  41: {
    "day": 41,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Which computer science subjects do you enjoy the most?",
        "questionHindi": "आपको कंप्यूटर साइंस के कौन से विषय सबसे ज्यादा पसंद हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I like Data Structures and Algorithms. I enjoy learning database concepts. I find operating systems very interesting.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I like' और 'I enjoy' का उपयोग करके अपने पसंदीदा विषयों को बताया गया है।",
        "customizationTip": "अपने सबसे पसंदीदा विषयों (जैसे DBMS, Computer Networks) के नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "My greatest strength is attention to clean code details.",
                "hindi": "मेरी सबसे बड़ी ताकत साफ-सुथरे कोड विवरणों पर ध्यान देना है।"
            },
            {
                "english": "I stay focused under deadline pressure.",
                "hindi": "मैं समय सीमा के दबाव में भी एकाग्र रहता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  42: {
    "day": 42,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How did you develop an interest in software programming?",
        "questionHindi": "प्रोग्रामिंग में आपकी रुचि कैसे विकसित हुई?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I started coding in college. I like to solve logical puzzles. Building useful applications gives me satisfaction.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I started' और 'I like to solve' से अपनी रुचि की शुरुआत समझाई गई है।",
        "customizationTip": "जब आपने पहली बार कोडिंग की थी, उस वर्ष या घटना का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I sort the array to enable binary search.",
                "hindi": "सबसे पहले, मैं बाइनरी सर्च के लिए एरे को सॉर्ट करता हूँ।"
            },
            {
                "english": "Finally, I return the target element index.",
                "hindi": "अंत में, मैं लक्षित तत्व का इंडेक्स लौटाता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  43: {
    "day": 43,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What data structures do you use most frequently?",
        "questionHindi": "आप सबसे अधिक किन डेटा स्ट्रक्चर्स का उपयोग करते हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I frequently use arrays, hash maps, and stacks. I can solve problems using two pointers. I like clean data structures.",
        "sampleAnswerHindi": "सरल व्याख्या: अक्सर उपयोग किए जाने वाले डेटा स्ट्रक्चर्स का सीधा उल्लेख किया गया है।",
        "customizationTip": "वे डेटा स्ट्रक्चर लिखें जिन पर आपकी अच्छी पकड़ है।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The time complexity is O(log N) for binary search.",
                "hindi": "बाइनरी सर्च के लिए टाइम कॉम्प्लेक्सिटी O(log N) है।"
            },
            {
                "english": "The auxiliary space is O(1) iterative.",
                "hindi": "इटरेटिव विधि में अतिरिक्त स्पेस O(1) है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  44: {
    "day": 44,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What technical blogs or documentation do you read regularly?",
        "questionHindi": "आप नियमित रूप से कौन से तकनीकी ब्लॉग या डॉक्यूमेंटेशन पढ़ते हैं?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "I regularly read official documentation. I follow tech articles on web development. I like learning modern engineering practices.",
        "sampleAnswerHindi": "सरल व्याख्या: निरंतर सीखने की आदत दर्शाने के लिए 'I regularly read' का प्रयोग किया गया है।",
        "customizationTip": "आप जहाँ से पढ़ते हैं (जैसे MDN, GeeksforGeeks, Dev.to) उसका नाम जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "Could you clarify the maximum value of N?",
                "hindi": "क्या आप N के अधिकतम मान को स्पष्ट कर सकते हैं?"
            },
            {
                "english": "Should I optimize primarily for time or memory?",
                "hindi": "क्या मुझे मुख्य रूप से समय या मेमोरी के लिए ऑप्टिमाइज़ करना चाहिए?"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  45: {
    "day": 45,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Why is continuous learning important in the tech industry?",
        "questionHindi": "टेक इंडस्ट्री में निरंतर सीखना क्यों महत्वपूर्ण है?",
        "patternsUsed": "Education & Technical Interests (I like / I enjoy / I frequently use)",
        "sampleAnswer": "Technology evolves rapidly. I need to practice every day. I want to adapt quickly to modern frameworks.",
        "sampleAnswerHindi": "सरल व्याख्या: इंडस्ट्री की गति और अपनी सीखने की उत्सुकता को 'need to' और 'want to' से जोड़ा गया है।",
        "customizationTip": "तकनीक में बदलाव को लेकर अपना संक्षिप्त विचार जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "The tech stack includes React, Tailwind CSS, and Express.",
                "hindi": "टेक स्टैक में React, Tailwind CSS और Express शामिल हैं।"
            },
            {
                "english": "I optimized API queries to reduce loading time by 30%.",
                "hindi": "मैंने लोडिंग समय 30% कम करने के लिए एपीआई क्वेरीज़ को अनुकूलित किया।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  46: {
    "day": 46,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about a technical project you completed last semester.",
        "questionHindi": "पिछले सेमेस्टर में पूरे किए गए किसी तकनीकी प्रोजेक्ट के बारे में बताइए।",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "I built a responsive web application for student tracking. We worked on a team project. I designed the database schema.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I built' (V2) और 'We worked' से पूरे किए गए प्रोजेक्ट का विवरण दिया गया है।",
        "customizationTip": "'student tracking' की जगह अपने असली प्रोजेक्ट का नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "Let's discuss this technical trade-off in our standup.",
                "hindi": "आइए स्टैंडअप में इस तकनीकी समझौते (trade-off) पर चर्चा करें।"
            },
            {
                "english": "We can pair program to unblock this module faster.",
                "hindi": "इस मॉड्यूल को तेज़ी से अनब्लॉक करने के लिए हम पेयर प्रोग्रामिंग कर सकते हैं।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  47: {
    "day": 47,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Have you ever encountered a difficult bug in your code?",
        "questionHindi": "क्या आपको कभी अपने कोड में किसी कठिन बग का सामना करना पड़ा है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "Yes. I encountered an unexpected edge case with empty inputs. I diagnosed the issue by tracing variable values. The fix was adding a proper boundary check.",
        "sampleAnswerHindi": "सरल व्याख्या: समस्या (encountered), जांच (diagnosed), और समाधान (fix was) को क्रम से समझाया गया है।",
        "customizationTip": "अपने किसी वास्तविक बग (जैसे null pointer, off-by-one) का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I diagnosed the performance drop using browser profiling tools.",
                "hindi": "मैंने ब्राउज़र प्रोफाइलिंग टूल्स से परफ़ॉर्मेंस गिरावट की पहचान की।"
            },
            {
                "english": "The fix was replacing repeated database queries with caching.",
                "hindi": "समाधान था बार-बार होने वाली डेटाबेस क्वेरीज़ को कैशिंग से बदलना।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  48: {
    "day": 48,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about an error that took time to resolve.",
        "questionHindi": "किसी ऐसी एरर के बारे में बताइए जिसे सुलझाने में समय लगा।",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "The program crashed on negative numbers. I used print statements to pinpoint the error. I solved it by updating the pointer logic.",
        "sampleAnswerHindi": "सरल व्याख्या: पास्ट टेंस (crashed, used, solved) में समस्या का समाधान बताया गया है।",
        "customizationTip": "एरर को सुलझाने में आपने क्या टूल या तरीका इस्तेमाल किया, वह लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "One area I am improving is system architecture design.",
                "hindi": "एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ वह है सिस्टम आर्किटेक्चर डिज़ाइन।"
            },
            {
                "english": "I am motivated by building software that helps people.",
                "hindi": "मैं ऐसा सॉफ्टवेयर बनाने से प्रेरित होता हूँ जो लोगों की मदद करे।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  49: {
    "day": 49,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What experience do you have with teamwork and collaboration?",
        "questionHindi": "टीम वर्क और साथियों के साथ काम करने का आपका क्या अनुभव है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "We worked in a three-member team. We divided the tasks to finish faster. Pair programming helped us catch bugs early.",
        "sampleAnswerHindi": "सरल व्याख्या: 'We divided' और 'helped us' से टीम में समन्वय का प्रदर्शन किया गया है।",
        "customizationTip": "अपनी टीम के सदस्यों की वास्तविक संख्या लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I push incoming elements onto the stack.",
                "hindi": "सबसे पहले, मैं आने वाले तत्वों को स्टैक पर पुश करता हूँ।"
            },
            {
                "english": "Next, I pop elements when the top condition is met.",
                "hindi": "इसके बाद, शर्त पूरी होने पर मैं तत्वों को पॉप करता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  50: {
    "day": 50,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What have you learned from your past coding mistakes?",
        "questionHindi": "अपनी पिछली कोडिंग गलतियों से आपने क्या सीखा है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "Debugging taught me the value of patience. Writing unit tests prevents regressions. I always test edge cases now.",
        "sampleAnswerHindi": "सरल व्याख्या: गलतियों से मिली सीख को सकारात्मक रूप में प्रस्तुत किया गया है।",
        "customizationTip": "धैर्य और टेस्टिंग पर अपना अनुभव साझा करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The time complexity is O(N * M) for dynamic programming.",
                "hindi": "डायनामिक प्रोग्रामिंग के लिए टाइम कॉम्प्लेक्सिटी O(N * M) है।"
            },
            {
                "english": "We can optimize space from O(N * M) to O(M).",
                "hindi": "हम स्पेस को O(N * M) से घटाकर O(M) कर सकते हैं।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  51: {
    "day": 51,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about a technical project you completed last semester.",
        "questionHindi": "पिछले सेमेस्टर में पूरे किए गए किसी तकनीकी प्रोजेक्ट के बारे में बताइए।",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "I built a responsive web application for student tracking. We worked on a team project. I designed the database schema.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I built' (V2) और 'We worked' से पूरे किए गए प्रोजेक्ट का विवरण दिया गया है।",
        "customizationTip": "'student tracking' की जगह अपने असली प्रोजेक्ट का नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "May I assume the input fits into system memory?",
                "hindi": "क्या मैं मान सकता हूँ कि इनपुट सिस्टम मेमोरी में समा जाता है?"
            },
            {
                "english": "Let me confirm whether concurrent requests can occur.",
                "hindi": "क्या समवर्ती (concurrent) अनुरोध आ सकते हैं, मैं यह स्पष्ट कर लूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  52: {
    "day": 52,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Have you ever encountered a difficult bug in your code?",
        "questionHindi": "क्या आपको कभी अपने कोड में किसी कठिन बग का सामना करना पड़ा है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "Yes. I encountered an unexpected edge case with empty inputs. I diagnosed the issue by tracing variable values. The fix was adding a proper boundary check.",
        "sampleAnswerHindi": "सरल व्याख्या: समस्या (encountered), जांच (diagnosed), और समाधान (fix was) को क्रम से समझाया गया है।",
        "customizationTip": "अपने किसी वास्तविक बग (जैसे null pointer, off-by-one) का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "My project solves automated test grading for students.",
                "hindi": "मेरा प्रोजेक्ट छात्रों के लिए स्वचालित टेस्ट ग्रेडिंग को हल करता है।"
            },
            {
                "english": "I was responsible for building the code execution sandbox.",
                "hindi": "मैं कोड निष्पादन सैंडबॉक्स बनाने के लिए ज़िम्मेदार था।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  53: {
    "day": 53,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about an error that took time to resolve.",
        "questionHindi": "किसी ऐसी एरर के बारे में बताइए जिसे सुलझाने में समय लगा।",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "The program crashed on negative numbers. I used print statements to pinpoint the error. I solved it by updating the pointer logic.",
        "sampleAnswerHindi": "सरल व्याख्या: पास्ट टेंस (crashed, used, solved) में समस्या का समाधान बताया गया है।",
        "customizationTip": "एरर को सुलझाने में आपने क्या टूल या तरीका इस्तेमाल किया, वह लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "I agree that we should add automated integration tests.",
                "hindi": "मैं सहमत हूँ कि हमें स्वचालित इंटीग्रेशन टेस्ट जोड़ने चाहिए।"
            },
            {
                "english": "Let's collaborate to resolve the merge conflict.",
                "hindi": "आइए मर्ज कॉन्फ्लिक्ट को सुलझाने के लिए मिलकर काम करें।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  54: {
    "day": 54,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What experience do you have with teamwork and collaboration?",
        "questionHindi": "टीम वर्क और साथियों के साथ काम करने का आपका क्या अनुभव है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "We worked in a three-member team. We divided the tasks to finish faster. Pair programming helped us catch bugs early.",
        "sampleAnswerHindi": "सरल व्याख्या: 'We divided' और 'helped us' से टीम में समन्वय का प्रदर्शन किया गया है।",
        "customizationTip": "अपनी टीम के सदस्यों की वास्तविक संख्या लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I encountered a memory leak with unclosed audio streams.",
                "hindi": "अनक्लोज्ड ऑडियो स्ट्रीम्स के साथ मुझे मेमोरी लीक का सामना करना पड़ा।"
            },
            {
                "english": "The fix was releasing media tracks in the cleanup hook.",
                "hindi": "समाधान था क्लीनअप हुक में मीडिया ट्रैक्स को रिलीज़ करना।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  55: {
    "day": 55,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What have you learned from your past coding mistakes?",
        "questionHindi": "अपनी पिछली कोडिंग गलतियों से आपने क्या सीखा है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "Debugging taught me the value of patience. Writing unit tests prevents regressions. I always test edge cases now.",
        "sampleAnswerHindi": "सरल व्याख्या: गलतियों से मिली सीख को सकारात्मक रूप में प्रस्तुत किया गया है।",
        "customizationTip": "धैर्य और टेस्टिंग पर अपना अनुभव साझा करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "My greatest strength is persistent problem-solving.",
                "hindi": "मेरी सबसे बड़ी ताकत निरंतर समस्या-समाधान है।"
            },
            {
                "english": "I actively seek constructive feedback to improve my code.",
                "hindi": "मैं अपने कोड को बेहतर बनाने के लिए रचनात्मक फीडबैक मांगता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  56: {
    "day": 56,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about a technical project you completed last semester.",
        "questionHindi": "पिछले सेमेस्टर में पूरे किए गए किसी तकनीकी प्रोजेक्ट के बारे में बताइए।",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "I built a responsive web application for student tracking. We worked on a team project. I designed the database schema.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I built' (V2) और 'We worked' से पूरे किए गए प्रोजेक्ट का विवरण दिया गया है।",
        "customizationTip": "'student tracking' की जगह अपने असली प्रोजेक्ट का नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I build an adjacency list for the graph.",
                "hindi": "सबसे पहले, मैं ग्राफ के लिए एक एडजसेंसी लिस्ट तैयार करता हूँ।"
            },
            {
                "english": "Next, I run a BFS traversal using a queue.",
                "hindi": "इसके बाद, मैं क्यू (queue) की मदद से BFS ट्रैवर्सल चलाता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  57: {
    "day": 57,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Have you ever encountered a difficult bug in your code?",
        "questionHindi": "क्या आपको कभी अपने कोड में किसी कठिन बग का सामना करना पड़ा है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "Yes. I encountered an unexpected edge case with empty inputs. I diagnosed the issue by tracing variable values. The fix was adding a proper boundary check.",
        "sampleAnswerHindi": "सरल व्याख्या: समस्या (encountered), जांच (diagnosed), और समाधान (fix was) को क्रम से समझाया गया है।",
        "customizationTip": "अपने किसी वास्तविक बग (जैसे null pointer, off-by-one) का उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The time complexity is O(N) using a monotonic stack.",
                "hindi": "मोनोटोनिक स्टैक का उपयोग करके टाइम कॉम्प्लेक्सिटी O(N) है।"
            },
            {
                "english": "The space complexity is O(N) in the worst case.",
                "hindi": "सबसे खराब स्थिति में स्पेस कॉम्प्लेक्सिटी O(N) है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  58: {
    "day": 58,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Tell me about an error that took time to resolve.",
        "questionHindi": "किसी ऐसी एरर के बारे में बताइए जिसे सुलझाने में समय लगा।",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "The program crashed on negative numbers. I used print statements to pinpoint the error. I solved it by updating the pointer logic.",
        "sampleAnswerHindi": "सरल व्याख्या: पास्ट टेंस (crashed, used, solved) में समस्या का समाधान बताया गया है।",
        "customizationTip": "एरर को सुलझाने में आपने क्या टूल या तरीका इस्तेमाल किया, वह लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "Should I return a boolean or the matching node?",
                "hindi": "क्या मुझे बूलियन लौटाना चाहिए या मिलान वाला नोड?"
            },
            {
                "english": "Could you clarify how null nodes should be handled?",
                "hindi": "क्या आप स्पष्ट कर सकते हैं कि नल (null) नोड्स को कैसे संभाला जाए?"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  59: {
    "day": 59,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What experience do you have with teamwork and collaboration?",
        "questionHindi": "टीम वर्क और साथियों के साथ काम करने का आपका क्या अनुभव है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "We worked in a three-member team. We divided the tasks to finish faster. Pair programming helped us catch bugs early.",
        "sampleAnswerHindi": "सरल व्याख्या: 'We divided' और 'helped us' से टीम में समन्वय का प्रदर्शन किया गया है।",
        "customizationTip": "अपनी टीम के सदस्यों की वास्तविक संख्या लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "I designed a scalable microservice for notification delivery.",
                "hindi": "मैंने नोटिफिकेशन डिलीवरी के लिए एक स्केलेबल माइक्रोसर्विस डिज़ाइन की।"
            },
            {
                "english": "The project processes over 1,000 events per minute.",
                "hindi": "यह प्रोजेक्ट प्रति मिनट 1,000 से अधिक इवेंट्स को प्रोसेस करता है।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  60: {
    "day": 60,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What have you learned from your past coding mistakes?",
        "questionHindi": "अपनी पिछली कोडिंग गलतियों से आपने क्या सीखा है?",
        "patternsUsed": "Past Experiences & Challenges (Simple Past V2: I built, I encountered, I solved)",
        "sampleAnswer": "Debugging taught me the value of patience. Writing unit tests prevents regressions. I always test edge cases now.",
        "sampleAnswerHindi": "सरल व्याख्या: गलतियों से मिली सीख को सकारात्मक रूप में प्रस्तुत किया गया है।",
        "customizationTip": "धैर्य और टेस्टिंग पर अपना अनुभव साझा करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "We divided the features into two-week sprints.",
                "hindi": "हमने फ़ीचर्स को दो-सप्ताह के स्प्रिंट में विभाजित किया।"
            },
            {
                "english": "Regular communication helped us deliver the release on time.",
                "hindi": "नियमित संवाद ने हमें समय पर रिलीज़ देने में मदद की।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  61: {
    "day": 61,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What problem does your primary capstone project solve?",
        "questionHindi": "आपका मुख्य प्रोजेक्ट उपयोगकर्ताओं के लिए किस समस्या का समाधान करता है?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "My project helps students track placement consistency. The platform serves active users. It automates daily practice reminders.",
        "sampleAnswerHindi": "सरल व्याख्या: प्रोजेक्ट के उद्देश्य (helps track) और प्रभाव (automates) को समझाया गया है।",
        "customizationTip": "अपने प्रोजेक्ट का मुख्य उद्देश्य 1–2 वाक्यों में लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I diagnosed the network failure by inspecting HTTP status codes.",
                "hindi": "मैंने HTTP स्टेटस कोड्स देखकर नेटवर्क विफलता का विश्लेषण किया।"
            },
            {
                "english": "The fix was adding exponential backoff retries.",
                "hindi": "समाधान था एक्सपोनेन्शियल बैकऑफ रीट्रीज़ जोड़ना।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  62: {
    "day": 62,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What was your specific role in your major project?",
        "questionHindi": "आपके मुख्य प्रोजेक्ट में आपकी विशिष्ट भूमिका और ज़िम्मेदारी क्या थी?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "I was responsible for developing the backend REST APIs. I designed the database schema. I tested all endpoints for edge cases.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I was responsible for' का उपयोग करके अपनी व्यक्तिगत जिम्मेदारी स्पष्ट की गई है।",
        "customizationTip": "'backend REST APIs' की जगह अपना वास्तविक काम (Frontend UI / Database / Logic) लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "I am motivated by working alongside curious teammates.",
                "hindi": "मैं जिज्ञासु साथियों के साथ काम करने से प्रेरित होता हूँ।"
            },
            {
                "english": "My strength is breaking large problems into simple steps.",
                "hindi": "मेरी ताकत बड़ी समस्याओं को सरल चरणों में तोड़ना है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  63: {
    "day": 63,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Why did you choose your specific technology stack?",
        "questionHindi": "आपने अपने प्रोजेक्ट के लिए यह विशेष टेक्नोलॉजी स्टैक क्यों चुना?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "The technology stack includes React, Node.js, and MongoDB. We chose it because it supports rapid prototyping and clean scalability.",
        "sampleAnswerHindi": "सरल व्याख्या: टेक्नोलॉजी स्टैक का नाम और चुनने का मुख्य कारण (scalability) बताया गया है।",
        "customizationTip": "अपने प्रोजेक्ट में उपयोग की गई वास्तविक लाइब्रेरी और डेटाबेस के नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I define the state array dp[i].",
                "hindi": "सबसे पहले, मैं स्टेट एरे dp[i] को परिभाषित करता हूँ।"
            },
            {
                "english": "Finally, I return dp[n] as the optimal answer.",
                "hindi": "अंत में, मैं dp[n] को सर्वोत्तम उत्तर के रूप में लौटाता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  64: {
    "day": 64,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How did you optimize performance in your project?",
        "questionHindi": "आपने अपने प्रोजेक्ट में परफॉरमेंस को कैसे ऑप्टिमाइज़ किया?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "I optimized database query response times. The time complexity of our core algorithm is O(N). This approach avoids nested loops.",
        "sampleAnswerHindi": "सरल व्याख्या: कॉम्प्लेक्सिटी (O(N)) और क्वेरी ऑप्टिमाइज़ेशन का उल्लेख किया गया है।",
        "customizationTip": "आपने कैसे स्पीड सुधारी (जैसे indexing, caching) वह जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The lookup time is O(1) on average using hashing.",
                "hindi": "हैशिंग के साथ औसत लुकअप समय O(1) है।"
            },
            {
                "english": "The memory overhead is O(K) for hash buckets.",
                "hindi": "हैश बकेट्स के लिए मेमोरी ओवरहेड O(K) है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  65: {
    "day": 65,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you test your application before deployment?",
        "questionHindi": "डिप्लॉयमेंट से पहले आप अपने एप्लिकेशन का परीक्षण कैसे करते हैं?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "We test both functions independently. We test with edge cases and null inputs. We successfully deployed the application online.",
        "sampleAnswerHindi": "सरल व्याख्या: टेस्टिंग और डिप्लॉयमेंट की प्रक्रिया को सरल शब्दों में बताया गया है।",
        "customizationTip": "जहाँ आपने डिप्लॉय किया (जैसे Vercel, Netlify, Render) उसका नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "May I clarify whether the user is already authenticated?",
                "hindi": "क्या मैं स्पष्ट कर सकता हूँ कि क्या उपयोगकर्ता पहले से प्रमाणित है?"
            },
            {
                "english": "Should we return an HTTP 404 or an empty array?",
                "hindi": "क्या हमें HTTP 404 लौटाना चाहिए या एक खाली एरे?"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  66: {
    "day": 66,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What problem does your primary capstone project solve?",
        "questionHindi": "आपका मुख्य प्रोजेक्ट उपयोगकर्ताओं के लिए किस समस्या का समाधान करता है?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "My project helps students track placement consistency. The platform serves active users. It automates daily practice reminders.",
        "sampleAnswerHindi": "सरल व्याख्या: प्रोजेक्ट के उद्देश्य (helps track) और प्रभाव (automates) को समझाया गया है।",
        "customizationTip": "अपने प्रोजेक्ट का मुख्य उद्देश्य 1–2 वाक्यों में लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "My project provides an accessible dashboard for campus placements.",
                "hindi": "मेरा प्रोजेक्ट कैंपस प्लेसमेंट के लिए एक सुलभ डैशबोर्ड प्रदान करता है।"
            },
            {
                "english": "I integrated offline data synchronization with IndexedDB.",
                "hindi": "मैंने IndexedDB के साथ ऑफ़लाइन डेटा सिंक्रनाइज़ेशन को एकीकृत किया।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  67: {
    "day": 67,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What was your specific role in your major project?",
        "questionHindi": "आपके मुख्य प्रोजेक्ट में आपकी विशिष्ट भूमिका और ज़िम्मेदारी क्या थी?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "I was responsible for developing the backend REST APIs. I designed the database schema. I tested all endpoints for edge cases.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I was responsible for' का उपयोग करके अपनी व्यक्तिगत जिम्मेदारी स्पष्ट की गई है।",
        "customizationTip": "'backend REST APIs' की जगह अपना वास्तविक काम (Frontend UI / Database / Logic) लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "I agree with standardizing our coding conventions.",
                "hindi": "मैं अपने कोडिंग मानकों को मानकीकृत करने से सहमत हूँ।"
            },
            {
                "english": "Let's document our API endpoints for other teams.",
                "hindi": "आइए दूसरी टीमों के लिए अपने एपीआई एंडपॉइंट्स को डॉक्यूमेंट करें।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  68: {
    "day": 68,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Why did you choose your specific technology stack?",
        "questionHindi": "आपने अपने प्रोजेक्ट के लिए यह विशेष टेक्नोलॉजी स्टैक क्यों चुना?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "The technology stack includes React, Node.js, and MongoDB. We chose it because it supports rapid prototyping and clean scalability.",
        "sampleAnswerHindi": "सरल व्याख्या: टेक्नोलॉजी स्टैक का नाम और चुनने का मुख्य कारण (scalability) बताया गया है।",
        "customizationTip": "अपने प्रोजेक्ट में उपयोग की गई वास्तविक लाइब्रेरी और डेटाबेस के नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I encountered a schema mismatch after updating database models.",
                "hindi": "डेटाबेस मॉडल्स अपडेट करने के बाद मुझे स्कीमा मिसमैच का सामना करना पड़ा।"
            },
            {
                "english": "The fix was writing a data migration script.",
                "hindi": "समाधान था डेटा माइग्रेशन स्क्रिप्ट लिखना।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  69: {
    "day": 69,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How did you optimize performance in your project?",
        "questionHindi": "आपने अपने प्रोजेक्ट में परफॉरमेंस को कैसे ऑप्टिमाइज़ किया?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "I optimized database query response times. The time complexity of our core algorithm is O(N). This approach avoids nested loops.",
        "sampleAnswerHindi": "सरल व्याख्या: कॉम्प्लेक्सिटी (O(N)) और क्वेरी ऑप्टिमाइज़ेशन का उल्लेख किया गया है।",
        "customizationTip": "आपने कैसे स्पीड सुधारी (जैसे indexing, caching) वह जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "One area I am improving is time management during sprints.",
                "hindi": "एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ वह है स्प्रिंट के दौरान समय प्रबंधन।"
            },
            {
                "english": "I adapt quickly to changing technical requirements.",
                "hindi": "मैं बदलती तकनीकी आवश्यकताओं के अनुसार तेज़ी से ढल जाता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  70: {
    "day": 70,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you test your application before deployment?",
        "questionHindi": "डिप्लॉयमेंट से पहले आप अपने एप्लिकेशन का परीक्षण कैसे करते हैं?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "We test both functions independently. We test with edge cases and null inputs. We successfully deployed the application online.",
        "sampleAnswerHindi": "सरल व्याख्या: टेस्टिंग और डिप्लॉयमेंट की प्रक्रिया को सरल शब्दों में बताया गया है।",
        "customizationTip": "जहाँ आपने डिप्लॉय किया (जैसे Vercel, Netlify, Render) उसका नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I validate incoming API payload parameters.",
                "hindi": "सबसे पहले, मैं आने वाले एपीआई पेलोड पैरामीटर्स को मान्य करता हूँ।"
            },
            {
                "english": "Finally, I commit the database transaction.",
                "hindi": "अंत में, मैं डेटाबेस ट्रांजैक्शन को सुरक्षित रूप से कमिट करता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  71: {
    "day": 71,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What problem does your primary capstone project solve?",
        "questionHindi": "आपका मुख्य प्रोजेक्ट उपयोगकर्ताओं के लिए किस समस्या का समाधान करता है?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "My project helps students track placement consistency. The platform serves active users. It automates daily practice reminders.",
        "sampleAnswerHindi": "सरल व्याख्या: प्रोजेक्ट के उद्देश्य (helps track) और प्रभाव (automates) को समझाया गया है।",
        "customizationTip": "अपने प्रोजेक्ट का मुख्य उद्देश्य 1–2 वाक्यों में लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The API response time is under 50ms due to indexing.",
                "hindi": "इंडेक्सिंग के कारण एपीआई रिस्पांस टाइम 50ms से कम है।"
            },
            {
                "english": "The database memory footprint is optimized.",
                "hindi": "डेटाबेस की मेमोरी खपत को अनुकूलित किया गया है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  72: {
    "day": 72,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What was your specific role in your major project?",
        "questionHindi": "आपके मुख्य प्रोजेक्ट में आपकी विशिष्ट भूमिका और ज़िम्मेदारी क्या थी?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "I was responsible for developing the backend REST APIs. I designed the database schema. I tested all endpoints for edge cases.",
        "sampleAnswerHindi": "सरल व्याख्या: 'I was responsible for' का उपयोग करके अपनी व्यक्तिगत जिम्मेदारी स्पष्ट की गई है।",
        "customizationTip": "'backend REST APIs' की जगह अपना वास्तविक काम (Frontend UI / Database / Logic) लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "Could you clarify the expected read-to-write ratio?",
                "hindi": "क्या आप अपेक्षित रीड-टू-राइट अनुपात स्पष्ट कर सकते हैं?"
            },
            {
                "english": "Let me confirm the target latency threshold.",
                "hindi": "मुझे लक्षित लेटेंसी सीमा की पुष्टि करने दीजिए।"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  73: {
    "day": 73,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Why did you choose your specific technology stack?",
        "questionHindi": "आपने अपने प्रोजेक्ट के लिए यह विशेष टेक्नोलॉजी स्टैक क्यों चुना?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "The technology stack includes React, Node.js, and MongoDB. We chose it because it supports rapid prototyping and clean scalability.",
        "sampleAnswerHindi": "सरल व्याख्या: टेक्नोलॉजी स्टैक का नाम और चुनने का मुख्य कारण (scalability) बताया गया है।",
        "customizationTip": "अपने प्रोजेक्ट में उपयोग की गई वास्तविक लाइब्रेरी और डेटाबेस के नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "I was responsible for containerizing the application with Docker.",
                "hindi": "मैं Docker के साथ एप्लिकेशन को कंटेनराइज़ करने के लिए ज़िम्मेदार था।"
            },
            {
                "english": "The architecture follows clean separation of concerns.",
                "hindi": "आर्किटेक्चर में सरोकारों के स्पष्ट पृथक्करण (separation of concerns) का पालन किया गया है।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  74: {
    "day": 74,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How did you optimize performance in your project?",
        "questionHindi": "आपने अपने प्रोजेक्ट में परफॉरमेंस को कैसे ऑप्टिमाइज़ किया?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "I optimized database query response times. The time complexity of our core algorithm is O(N). This approach avoids nested loops.",
        "sampleAnswerHindi": "सरल व्याख्या: कॉम्प्लेक्सिटी (O(N)) और क्वेरी ऑप्टिमाइज़ेशन का उल्लेख किया गया है।",
        "customizationTip": "आपने कैसे स्पीड सुधारी (जैसे indexing, caching) वह जोड़ सकते हैं।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "We collaborated closely with UI designers on responsiveness.",
                "hindi": "हमने रिस्पॉन्सिवनेस पर यूआई डिज़ाइनरों के साथ मिलकर काम किया।"
            },
            {
                "english": "Pair debugging helped us find the edge case quickly.",
                "hindi": "पेयर डिबगिंग ने हमें एज केस को जल्दी खोजने में मदद की।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  75: {
    "day": 75,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you test your application before deployment?",
        "questionHindi": "डिप्लॉयमेंट से पहले आप अपने एप्लिकेशन का परीक्षण कैसे करते हैं?",
        "patternsUsed": "Project Architecture & Explanations (I was responsible for / The tech stack includes)",
        "sampleAnswer": "We test both functions independently. We test with edge cases and null inputs. We successfully deployed the application online.",
        "sampleAnswerHindi": "सरल व्याख्या: टेस्टिंग और डिप्लॉयमेंट की प्रक्रिया को सरल शब्दों में बताया गया है।",
        "customizationTip": "जहाँ आपने डिप्लॉय किया (जैसे Vercel, Netlify, Render) उसका नाम लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I diagnosed the stack overflow by examining recursive depth.",
                "hindi": "मैंने रिकर्सिव गहराई की जांच करके स्टैक ओवरफ्लो की पहचान की।"
            },
            {
                "english": "The fix was converting the recursion to an iterative approach.",
                "hindi": "समाधान रिकर्शन को इटरेटिव दृष्टिकोण में बदलना था।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  76: {
    "day": 76,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is your greatest strength as an aspiring engineer?",
        "questionHindi": "एक उभरते इंजीनियर के रूप में आपकी सबसे बड़ी ताकत क्या है?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "My greatest strength is my consistency and discipline. I learn new technologies very quickly. I stay focused under deadline pressure.",
        "sampleAnswerHindi": "सरल व्याख्या: अपनी मुख्य शक्ति (consistency, quick learning) को आत्मविश्वास से बताया गया है।",
        "customizationTip": "अपनी वास्तविक ताकत (जैसे 'attention to detail' या 'problem-solving') लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "My greatest strength is my passion for continuous learning.",
                "hindi": "मेरी सबसे बड़ी ताकत निरंतर सीखने का मेरा जुनून है।"
            },
            {
                "english": "I practice speaking English daily to build interview confidence.",
                "hindi": "इंटरव्यू में आत्मविश्वास के लिए मैं रोज़ाना अंग्रेज़ी बोलने का अभ्यास करता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  77: {
    "day": 77,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is one area you are actively working to improve?",
        "questionHindi": "एक ऐसा क्षेत्र कौन सा है जिसमें आप सक्रिय रूप से सुधार कर रहे हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "One area I am actively improving is public speaking. I practice spoken English every day to build confidence. I welcome constructive feedback.",
        "sampleAnswerHindi": "सरल व्याख्या: कमजोरी को सकारात्मक रूप में प्रस्तुत करके सुधार का प्रयास दिखाया गया है।",
        "customizationTip": "आप जिस कौशल पर मेहनत कर रहे हैं, उसका उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I check the Redis cache for existing keys.",
                "hindi": "सबसे पहले, मैं रेडिस कैश में मौजूदा कीज़ की जांच करता हूँ।"
            },
            {
                "english": "Finally, I return the cached response.",
                "hindi": "अंत में, मैं कैश की गई प्रतिक्रिया लौटाता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  78: {
    "day": 78,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you handle deadline pressure when multiple tasks are pending?",
        "questionHindi": "जब कई कार्य लंबित हों तो आप डेडलाइन के दबाव को कैसे संभालते हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "I handle deadline pressure by prioritizing tasks calmly. I break complex requirements into smaller milestones. I communicate clearly with my team.",
        "sampleAnswerHindi": "सरल व्याख्या: दबाव में शांत रहकर प्राथमिकताओं को तय करने की कार्यशैली बताई गई है।",
        "customizationTip": "'prioritizing tasks' के साथ अपने समय प्रबंधन का तरीका जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The network latency is minimized with pagination.",
                "hindi": "पेजिनेशन के माध्यम से नेटवर्क लेटेंसी को न्यूनतम किया गया है।"
            },
            {
                "english": "The throughput scales horizontally under load.",
                "hindi": "लोड बढ़ने पर थ्रूपुट क्षैतिज रूप से स्केल होता है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  79: {
    "day": 79,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Where do you see yourself in three to five years?",
        "questionHindi": "आप तीन से पांच वर्षों में खुद को कहाँ देखते हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "In three years, I want to become a proficient full-stack engineer. I hope to mentor junior developers and lead technical modules.",
        "sampleAnswerHindi": "सरल व्याख्या: 'want to' और 'hope to' का उपयोग करके अपने करियर विकास का खाका प्रस्तुत किया गया है।",
        "customizationTip": "अपनी पसंदीदा तकनीकी दिशा (AI, Cloud, Full-stack) लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "Should I assume strong consistency or eventual consistency?",
                "hindi": "क्या मुझे स्ट्रॉन्ग कंसिस्टेंसी माननी चाहिए या इवेंचुअल कंसिस्टेंसी?"
            },
            {
                "english": "Let me confirm the failover recovery strategy.",
                "hindi": "मुझे फ़ेलओवर रिकवरी रणनीति की पुष्टि करने दीजिए।"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  80: {
    "day": 80,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Do you have any questions for me as the interviewer?",
        "questionHindi": "क्या आपके पास मेरे (इंटरव्यूअर) लिए कोई प्रश्न हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "May I ask about the team structure? What technologies does the team plan to adopt next? Thank you for your valuable time today.",
        "sampleAnswerHindi": "सरल व्याख्या: अंत में विनम्रता से कंपनी और टीम के बारे में सवाल पूछने का तरीका दिखाया गया है।",
        "customizationTip": "टीम या प्रोजेक्ट के बारे में एक वास्तविक प्रश्न पूछें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "My project solves high memory footprint by streaming audio chunks.",
                "hindi": "मेरा प्रोजेक्ट ऑडियो चंक्स स्ट्रीम करके मेमोरी खपत को न्यूनतम रखता है।"
            },
            {
                "english": "I implemented end-to-end unit and integration tests.",
                "hindi": "मैंने एंड-टू-एंड यूनिट और इंटीग्रेशन टेस्ट्स लिखे।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  81: {
    "day": 81,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is your greatest strength as an aspiring engineer?",
        "questionHindi": "एक उभरते इंजीनियर के रूप में आपकी सबसे बड़ी ताकत क्या है?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "My greatest strength is my consistency and discipline. I learn new technologies very quickly. I stay focused under deadline pressure.",
        "sampleAnswerHindi": "सरल व्याख्या: अपनी मुख्य शक्ति (consistency, quick learning) को आत्मविश्वास से बताया गया है।",
        "customizationTip": "अपनी वास्तविक ताकत (जैसे 'attention to detail' या 'problem-solving') लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "I welcome suggestions to improve code efficiency.",
                "hindi": "कोड दक्षता सुधारने के सुझावों का मैं स्वागत करता हूँ।"
            },
            {
                "english": "Let's conduct a post-mortem to prevent recurring issues.",
                "hindi": "आइए बार-बार आने वाली समस्याओं को रोकने के लिए समीक्षा बैठक करें।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  82: {
    "day": 82,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is one area you are actively working to improve?",
        "questionHindi": "एक ऐसा क्षेत्र कौन सा है जिसमें आप सक्रिय रूप से सुधार कर रहे हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "One area I am actively improving is public speaking. I practice spoken English every day to build confidence. I welcome constructive feedback.",
        "sampleAnswerHindi": "सरल व्याख्या: कमजोरी को सकारात्मक रूप में प्रस्तुत करके सुधार का प्रयास दिखाया गया है।",
        "customizationTip": "आप जिस कौशल पर मेहनत कर रहे हैं, उसका उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I encountered a CORS error during cross-origin requests.",
                "hindi": "क्रॉस-ओरिजिन रिक्वेस्ट्स के दौरान मुझे CORS एरर का सामना करना पड़ा।"
            },
            {
                "english": "The fix was configuring proper headers on the backend server.",
                "hindi": "समाधान बैकएंड सर्वर पर उचित हेडर कॉन्फ़िगर करना था।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  83: {
    "day": 83,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you handle deadline pressure when multiple tasks are pending?",
        "questionHindi": "जब कई कार्य लंबित हों तो आप डेडलाइन के दबाव को कैसे संभालते हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "I handle deadline pressure by prioritizing tasks calmly. I break complex requirements into smaller milestones. I communicate clearly with my team.",
        "sampleAnswerHindi": "सरल व्याख्या: दबाव में शांत रहकर प्राथमिकताओं को तय करने की कार्यशैली बताई गई है।",
        "customizationTip": "'prioritizing tasks' के साथ अपने समय प्रबंधन का तरीका जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "I am motivated by seeing my code deployed into production.",
                "hindi": "अपने कोड को प्रोडक्शन में डिप्लॉय होते देखकर मुझे प्रेरणा मिलती है।"
            },
            {
                "english": "My strength is maintaining composure during difficult bugs.",
                "hindi": "कठिन बग्स के दौरान संयम बनाए रखना मेरी ताकत है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
},
  84: {
    "day": 84,
    "topic": "Step-by-Step Problem Solving",
    "patternFocus": "First, I declare / Next, I iterate / Finally, I return",
    "sentences": [
        {
            "english": "First, I declare a map to store the frequencies.",
            "hindi": "सबसे पहले, मैं फ़्रीक्वेंसी स्टोर करने के लिए एक मैप बनाता हूँ।",
            "pattern": "Adverb + subject + verb + object + infinitive.",
            "example": "First, I check the base case. (सबसे पहले, मैं बेस केस की जांच करता हूँ।)"
        },
        {
            "english": "Next, I loop through each element in the array.",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "example": "Next, we calculate the cumulative sum. (इसके बाद, हम संचयी योग की गणना करते हैं।)"
        },
        {
            "english": "Finally, I return the maximum value found.",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "pattern": "Adverb + subject + verb + object.",
            "example": "Finally, we return true if a pair exists. (अंत में, यदि कोई जोड़ी मौजूद है तो हम true रिटर्न करते हैं।)"
        },
        {
            "english": "This condition prevents an out-of-bounds error.",
            "hindi": "यह शर्त आउट-ऑफ-बाउंड्स एरर को रोकती है।",
            "pattern": "Subject + verb + object.",
            "example": "This check avoids division by zero. (यह जांच शून्य से विभाजन से बचाती है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "सबसे पहले, मैं बेस केस की जांच करता हूँ।",
            "expected": "First, I check the base case.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: कोडिंग फ्लो समझाने के लिए 'First, I check' का प्रयोग करें।",
            "acceptedAnswers": [
                "First, I check the base case.",
                "First, I check the base case"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "इसके बाद, मैं एरे के प्रत्येक एलिमेंट पर लूप चलाता हूँ।",
            "expected": "Next, I loop through each element in the array.",
            "pattern": "Adverb + subject + verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: अगला कदम बताने के लिए 'Next, I loop through' का प्रयोग करें।",
            "acceptedAnswers": [
                "Next, I loop through each element in the array.",
                "Next, I loop through each element in the array"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "अंत में, मैं मिले हुए अधिकतम मान को रिटर्न करता हूँ।",
            "expected": "Finally, I return the maximum value found.",
            "pattern": "Adverb + subject + verb + object.",
            "explanation": "सरल व्याख्या: परिणाम रिटर्न करने के लिए 'Finally, I return' का प्रयोग करें।",
            "acceptedAnswers": [
                "Finally, I return the maximum value found.",
                "Finally, I return the maximum value found"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Where do you see yourself in three to five years?",
        "questionHindi": "आप तीन से पांच वर्षों में खुद को कहाँ देखते हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "In three years, I want to become a proficient full-stack engineer. I hope to mentor junior developers and lead technical modules.",
        "sampleAnswerHindi": "सरल व्याख्या: 'want to' और 'hope to' का उपयोग करके अपने करियर विकास का खाका प्रस्तुत किया गया है।",
        "customizationTip": "अपनी पसंदीदा तकनीकी दिशा (AI, Cloud, Full-stack) लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"First, I declare\" = सबसे पहले मैं बनाता हूँ | \"Next, I iterate\" = इसके बाद मैं लूप चलाता हूँ | \"Finally, I return\" = अंत में मैं परिणाम देता हूँ",
        "whenToUse": "जब कोडिंग इंटरव्यू में कोड लिखने से पहले या ड्राय-रन करते समय अपने लॉजिक को क्रमबद्ध तरीके से इंटरव्यूअर को बोलकर समझाना हो।",
        "whereToUse": "DSA टेक्निकल इंटरव्यू, लाइव कोडिंग राउंड, और वाइटबोर्ड प्रोग्रामिंग में।",
        "howToUse": "First, I [initialize/declare] ➔ Next / Then, I [iterate/process] ➔ Finally, I [return/output]",
        "examples": [
            {
                "english": "First, I outline the high-level system modules.",
                "hindi": "सबसे पहले, मैं उच्च-स्तरीय सिस्टम मॉड्यूल्स की रूपरेखा प्रस्तुत करता हूँ।"
            },
            {
                "english": "Finally, I address latency and single points of failure.",
                "hindi": "अंत में, मैं लेटेंसी और सिस्टम की विफलताओं का समाधान करता हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "Directly I write loop and return answer.",
            "correct": "First, I initialize the pointers, then I iterate through the array.",
            "explanationHindi": "इंटरव्यूअर आपकी तार्किक सोच की स्पष्टता देखना चाहता है; इसलिए First, Then, Finally जैसे कनेक्टर्स का प्रयोग करें।"
        }
    }
},
  85: {
    "day": 85,
    "topic": "Complexity & Optimization Walkthrough",
    "patternFocus": "The time complexity is / The space complexity is",
    "sentences": [
        {
            "english": "The time complexity of this solution is O(N).",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "pattern": "Subject + is + notation.",
            "example": "The time complexity is O(N log N) due to sorting. (सॉर्टिंग के कारण टाइम कॉम्प्लेक्सिटी O(N log N) है।)"
        },
        {
            "english": "The auxiliary space complexity is constant O(1).",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "pattern": "Subject + is + adjective + notation.",
            "example": "The space complexity is O(N) for storing elements. (एलिमेंट्स स्टोर करने के लिए स्पेस कॉम्प्लेक्सिटी O(N) है।)"
        },
        {
            "english": "This approach avoids nested loops.",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "pattern": "Subject + verb + object.",
            "example": "This saves significant execution time. (इससे निष्पादन समय में काफी बचत होती है।)"
        },
        {
            "english": "It performs well on large datasets.",
            "hindi": "यह बड़े डेटासेट पर बहुत अच्छा प्रदर्शन करता है।",
            "pattern": "Subject + verb + adverb + prepositional phrase.",
            "example": "It scales cleanly with increasing input size. (यह इनपुट बढ़ने पर भी सुचारू रूप से चलता है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "इस समाधान की टाइम कॉम्प्लेक्सिटी O(N) है।",
            "expected": "The time complexity of this solution is O(N).",
            "pattern": "Subject + is + notation.",
            "explanation": "सरल व्याख्या: कॉम्प्लेक्सिटी बताते समय 'The time complexity of this solution is' का उपयोग करें।",
            "acceptedAnswers": [
                "The time complexity of this solution is O(N).",
                "The time complexity is O(N).",
                "The time complexity of this solution is O(N)"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "अतिरिक्त स्पेस कॉम्प्लेक्सिटी स्थिर O(1) है।",
            "expected": "The auxiliary space complexity is constant O(1).",
            "pattern": "Subject + is + adjective + notation.",
            "explanation": "सरल व्याख्या: अतिरिक्त मेमोरी के लिए 'auxiliary space complexity is constant O(1)' का प्रयोग करें।",
            "acceptedAnswers": [
                "The auxiliary space complexity is constant O(1).",
                "The space complexity is constant O(1).",
                "The auxiliary space complexity is constant O(1)"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "यह दृष्टिकोण नेस्टेड लूप्स से बचाता है।",
            "expected": "This approach avoids nested loops.",
            "pattern": "Subject + verb + object.",
            "explanation": "सरल व्याख्या: 'नेस्टेड लूप्स से बचाता है' के लिए 'avoids nested loops' का प्रयोग करें।",
            "acceptedAnswers": [
                "This approach avoids nested loops.",
                "This approach avoids nested loops"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Do you have any questions for me as the interviewer?",
        "questionHindi": "क्या आपके पास मेरे (इंटरव्यूअर) लिए कोई प्रश्न हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "May I ask about the team structure? What technologies does the team plan to adopt next? Thank you for your valuable time today.",
        "sampleAnswerHindi": "सरल व्याख्या: अंत में विनम्रता से कंपनी और टीम के बारे में सवाल पूछने का तरीका दिखाया गया है।",
        "customizationTip": "टीम या प्रोजेक्ट के बारे में एक वास्तविक प्रश्न पूछें।"
    },
    "usageGuide": {
        "meaningHindi": "\"The time complexity is\" = टाइम कॉम्प्लेक्सिटी है (गति) | \"The space complexity is\" = स्पेस कॉम्प्लेक्सिटी है (मेमोरी)",
        "whenToUse": "जब कोड लिखने के बाद समाधान के निष्पादन समय और अतिरिक्त मेमोरी खपत का विश्लेषण इंटरव्यूअर को स्पष्ट करना हो।",
        "whereToUse": "प्रत्येक DSA कोडिंग प्रश्न के समापन पर (FAANG और प्रोडक्ट कंपनियों में अनिवार्य)।",
        "howToUse": "The time complexity is O(...) because [reason] | The space complexity is O(...) [auxiliary/total]",
        "examples": [
            {
                "english": "The amortized time complexity is O(1).",
                "hindi": "अमॉर्टाइज़्ड टाइम कॉम्प्लेक्सिटी O(1) है।"
            },
            {
                "english": "The worst-case space complexity remains bounded.",
                "hindi": "सबसे खराब स्थिति में स्पेस कॉम्प्लेक्सिटी सीमित रहती है।"
            }
        ],
        "commonMistake": {
            "incorrect": "My code runs in O(N) space because of a for loop.",
            "correct": "The time complexity is O(N), and the space complexity is O(1) since no extra memory is allocated.",
            "explanationHindi": "लूप टाइम कॉम्प्लेक्सिटी बढ़ाता है, स्पेस नहीं; समय और मेमोरी को अलग-अलग स्पष्ट शब्दों में बताएं।"
        }
    }
},
  86: {
    "day": 86,
    "topic": "Effective Interview Questions",
    "patternFocus": "Could you clarify / Should I consider / Let me confirm",
    "sentences": [
        {
            "english": "Should I consider negative numbers in the input?",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "example": "Can the array contain duplicate elements? (क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?)"
        },
        {
            "english": "Let me confirm if I understood the problem correctly.",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "pattern": "Imperative + clause.",
            "example": "Let me restate the goal in my own words. (मैं अपने शब्दों में लक्ष्य को दोहराता हूँ।)"
        },
        {
            "english": "Is memory efficiency more important than speed here?",
            "hindi": "क्या यहाँ गति से अधिक मेमोरी दक्षता महत्वपूर्ण है?",
            "pattern": "Is + subject + comparative adjective + than + noun + adverb?",
            "example": "Are we optimizing for time or space? (क्या हम समय या स्थान के लिए अनुकूलन कर रहे हैं?)"
        },
        {
            "english": "Thank you for explaining that constraint.",
            "hindi": "उस शर्त को समझाने के लिए धन्यवाद।",
            "pattern": "Expression + preposition + gerund phrase.",
            "example": "Thank you for the helpful hint. (मददगार संकेत के लिए धन्यवाद।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "क्या एरे में डुप्लिकेट एलिमेंट्स हो सकते हैं?",
            "expected": "Can the array contain duplicate elements?",
            "pattern": "Can + subject + base verb + object?",
            "explanation": "सरल व्याख्या: संभावना पूछने के लिए 'Can the array contain' का उपयोग करें।",
            "acceptedAnswers": [
                "Can the array contain duplicate elements?",
                "Can the array contain duplicate elements"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "क्या मुझे इनपुट में ऋणात्मक संख्याओं पर भी विचार करना चाहिए?",
            "expected": "Should I consider negative numbers in the input?",
            "pattern": "Should + subject + base verb + object + prepositional phrase?",
            "explanation": "सरल व्याख्या: शर्त स्पष्ट करने के लिए 'Should I consider negative numbers' का प्रयोग करें।",
            "acceptedAnswers": [
                "Should I consider negative numbers in the input?",
                "Should I consider negative numbers in the input"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं पुष्टि कर लूँ कि क्या मैंने समस्या को सही तरीके से समझा है।",
            "expected": "Let me confirm if I understood the problem correctly.",
            "pattern": "Imperative + clause.",
            "explanation": "सरल व्याख्या: स्पष्टता के लिए 'Let me confirm if I understood...' का प्रयोग करें।",
            "acceptedAnswers": [
                "Let me confirm if I understood the problem correctly.",
                "Let me confirm if I understood the problem correctly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is your greatest strength as an aspiring engineer?",
        "questionHindi": "एक उभरते इंजीनियर के रूप में आपकी सबसे बड़ी ताकत क्या है?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "My greatest strength is my consistency and discipline. I learn new technologies very quickly. I stay focused under deadline pressure.",
        "sampleAnswerHindi": "सरल व्याख्या: अपनी मुख्य शक्ति (consistency, quick learning) को आत्मविश्वास से बताया गया है।",
        "customizationTip": "अपनी वास्तविक ताकत (जैसे 'attention to detail' या 'problem-solving') लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"Could you clarify\" = क्या आप स्पष्ट कर सकते हैं | \"Should I consider\" = क्या मुझे ध्यान में रखना चाहिए | \"Let me confirm\" = मैं पुष्टि कर लूँ",
        "whenToUse": "कोडिंग शुरू करने से पहले इनपुट सीमाओं, कॉर्नर केसेस (null/empty), नेगेटिव मान या डुप्लिकेट्स पर स्पष्टता लेने के लिए।",
        "whereToUse": "टेक्निकल इंटरव्यू का पहला चरण (Problem Understanding phase) और प्रोजेक्ट डिस्कवरी में।",
        "howToUse": "Could you clarify if [condition]? | Should I consider [edge case]? | Let me confirm [requirement].",
        "examples": [
            {
                "english": "May I ask what engineering practices the team follows?",
                "hindi": "क्या मैं पूछ सकता हूँ कि टीम कौन सी इंजीनियरिंग प्रथाओं का पालन करती है?"
            },
            {
                "english": "Could you clarify the onboarding expectations?",
                "hindi": "क्या आप ऑनबोर्डिंग से जुड़ी अपेक्षाओं को स्पष्ट कर सकते हैं?"
            }
        ],
        "commonMistake": {
            "incorrect": "Negative numbers are there or not?",
            "correct": "Could you clarify whether negative numbers can be present in the input?",
            "explanationHindi": "कच्चे या सीधे शब्दों की जगह 'Could you clarify whether...' जैसी औपचारिक भाषा का प्रयोग करें।"
        }
    }
},
  87: {
    "day": 87,
    "topic": "Project Architecture & Impact",
    "patternFocus": "My project solves / I was responsible for / The tech stack includes",
    "sentences": [
        {
            "english": "My project helps students track placement consistency.",
            "hindi": "मेरा प्रोजेक्ट छात्रों को प्लेसमेंट की निरंतरता ट्रैक करने में मदद करता है।",
            "pattern": "Subject + verb + object + base verb + object.",
            "example": "This tool automates daily practice reminders. (यह टूल रोज़ाना अभ्यास के रिमाइंडर ऑटोमेट करता है।)"
        },
        {
            "english": "I was responsible for developing the backend REST APIs.",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "example": "I designed the database schema. (मैंने डेटाबेस स्कीमा तैयार किया।)"
        },
        {
            "english": "The technology stack includes Next.js, React, and MongoDB.",
            "hindi": "टेक्नोलॉजी स्टैक में Next.js, React और MongoDB शामिल हैं।",
            "pattern": "Subject + verb + list of technologies.",
            "example": "We used Tailwind CSS for modern styling. (हमने आधुनिक स्टाइलिंग के लिए टेलविंड सीएसएस का उपयोग किया।)"
        },
        {
            "english": "We successfully deployed the application online.",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "example": "The platform has served over 500 active users. (प्लेटफ़ॉर्म ने 500 से अधिक सक्रिय उपयोगकर्ताओं की सेवा की है।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मैंने डेटाबेस स्कीमा तैयार किया।",
            "expected": "I designed the database schema.",
            "pattern": "Subject + past verb (V2) + object.",
            "explanation": "सरल व्याख्या: अपने कार्य का उल्लेख करने के लिए: I + designed the database schema.",
            "acceptedAnswers": [
                "I designed the database schema.",
                "I designed the database schema"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं बैकएंड REST API विकसित करने के लिए ज़िम्मेदार था।",
            "expected": "I was responsible for developing the backend REST APIs.",
            "pattern": "Subject + was responsible for + verb-ing + object.",
            "explanation": "सरल व्याख्या: ज़िम्मेदारी बताने के लिए 'was responsible for + verb-ing' का उपयोग करें।",
            "acceptedAnswers": [
                "I was responsible for developing the backend REST APIs.",
                "I was responsible for developing the backend REST APIs"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "हमने सफलतापूर्वक एप्लिकेशन को ऑनलाइन डिप्लॉय किया।",
            "expected": "We successfully deployed the application online.",
            "pattern": "Subject + adverb + past verb (V2) + object + adverb.",
            "explanation": "सरल व्याख्या: सफलता बताने के लिए 'We successfully deployed' का उपयोग करें।",
            "acceptedAnswers": [
                "We successfully deployed the application online.",
                "We successfully deployed the app online.",
                "We successfully deployed the application online"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "What is one area you are actively working to improve?",
        "questionHindi": "एक ऐसा क्षेत्र कौन सा है जिसमें आप सक्रिय रूप से सुधार कर रहे हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "One area I am actively improving is public speaking. I practice spoken English every day to build confidence. I welcome constructive feedback.",
        "sampleAnswerHindi": "सरल व्याख्या: कमजोरी को सकारात्मक रूप में प्रस्तुत करके सुधार का प्रयास दिखाया गया है।",
        "customizationTip": "आप जिस कौशल पर मेहनत कर रहे हैं, उसका उल्लेख करें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My project solves\" = मेरा प्रोजेक्ट हल करता है | \"I was responsible for\" = मेरी ज़िम्मेदारी थी | \"The tech stack includes\" = टेक स्टैक में शामिल है",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about your project\" या \"What was your contribution to this software?\"",
        "whereToUse": "रेज़्युमे प्रोजेक्ट राउंड, सिस्टम डिज़ाइन राउंड, और कॉलेज प्रोजेक्ट प्रेजेंटेशन में।",
        "howToUse": "My project solves [problem] | I was responsible for [module/feature] using [tech stack].",
        "examples": [
            {
                "english": "My project demonstrates full-stack software engineering principles.",
                "hindi": "मेरा प्रोजेक्ट फुल-स्टैक सॉफ्टवेयर इंजीनियरिंग सिद्धांतों को प्रदर्शित करता है।"
            },
            {
                "english": "I was responsible for end-to-end architecture and deployment.",
                "hindi": "मैं एंड-टू-एंड आर्किटेक्चर और डिप्लॉयमेंट के लिए ज़िम्मेदार था।"
            }
        ],
        "commonMistake": {
            "incorrect": "We made a project in React and it is very nice.",
            "correct": "My project solves student tracking, and I was responsible for the database schema and API integration.",
            "explanationHindi": "सिर्फ तकनीक का नाम न लें; प्रोजेक्ट किस समस्या को हल करता है और आपकी व्यक्तिगत भूमिका क्या थी, यह बताएं।"
        }
    }
},
  88: {
    "day": 88,
    "topic": "Workplace Teamwork & Communication",
    "patternFocus": "I agree with / Let's collaborate / We can divide",
    "sentences": [
        {
            "english": "I agree with your suggestion to optimize the query.",
            "hindi": "मैं क्वेरी को ऑप्टिमाइज़ करने के आपके सुझाव से सहमत हूँ।",
            "pattern": "Subject + agree with + possessive + noun + to-infinitive.",
            "example": "That sounds like a great approach. (यह एक बहुत अच्छा दृष्टिकोण लगता है।)"
        },
        {
            "english": "We can divide the tasks to finish faster.",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "example": "Let's test both functions independently. (आइए दोनों फ़ंक्शंस का स्वतंत्र रूप से परीक्षण करें।)"
        },
        {
            "english": "I enjoy learning from my team members.",
            "hindi": "मुझे अपने टीम के सदस्यों से सीखने में आनंद आता है।",
            "pattern": "Subject + enjoy + verb-ing + prepositional phrase.",
            "example": "Pair programming helped us catch bugs early. (पेयर प्रोग्रामिंग से हमें गलतियों को जल्दी पकड़ने में मदद मिली।)"
        },
        {
            "english": "Constructive feedback helps me grow as an engineer.",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "example": "I welcome your suggestions. (मैं आपके सुझावों का स्वागत करता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "यह एक बहुत अच्छा दृष्टिकोण लगता है।",
            "expected": "That sounds like a great approach.",
            "pattern": "Subject + verb + preposition + noun phrase.",
            "explanation": "सरल व्याख्या: सहमति के लिए 'That sounds like a great approach' कहें।",
            "acceptedAnswers": [
                "That sounds like a great approach.",
                "That sounds like a great approach"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "हम काम जल्दी पूरा करने के लिए कार्यों को आपस में बाँट सकते हैं।",
            "expected": "We can divide the tasks to finish faster.",
            "pattern": "Subject + can + base verb + object + infinitive.",
            "explanation": "सरल व्याख्या: टीम में काम बाँटने के लिए: We + can + divide the tasks to finish faster.",
            "acceptedAnswers": [
                "We can divide the tasks to finish faster.",
                "We can divide the tasks to finish faster"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "सकारात्मक प्रतिक्रिया मुझे एक इंजीनियर के रूप में आगे बढ़ने में मदद करती है।",
            "expected": "Constructive feedback helps me grow as an engineer.",
            "pattern": "Subject + verb + object + base verb + prepositional phrase.",
            "explanation": "सरल व्याख्या: 'Constructive feedback helps me grow' का प्रयोग करें।",
            "acceptedAnswers": [
                "Constructive feedback helps me grow as an engineer.",
                "Constructive feedback helps me grow as an engineer"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "How do you handle deadline pressure when multiple tasks are pending?",
        "questionHindi": "जब कई कार्य लंबित हों तो आप डेडलाइन के दबाव को कैसे संभालते हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "I handle deadline pressure by prioritizing tasks calmly. I break complex requirements into smaller milestones. I communicate clearly with my team.",
        "sampleAnswerHindi": "सरल व्याख्या: दबाव में शांत रहकर प्राथमिकताओं को तय करने की कार्यशैली बताई गई है।",
        "customizationTip": "'prioritizing tasks' के साथ अपने समय प्रबंधन का तरीका जोड़ें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I agree with\" = मैं सहमत हूँ | \"Let's collaborate\" = आइए मिलकर काम करें | \"We can divide\" = हम आपस में बांट सकते हैं",
        "whenToUse": "जब टीम मीटिंग्स, स्प्रिंट प्लानिंग, कोड रिव्यू या बिहेवियरल राउंड में सहयोगात्मक रवैया दिखाना हो।",
        "whereToUse": "HR बिहेवियरल राउंड (\"Tell me about a time you worked in a team\"), स्टैंडअप मीटिंग्स में।",
        "howToUse": "I agree with [point/idea] | Let's collaborate on [module] | We can divide [tasks/milestones].",
        "examples": [
            {
                "english": "We achieved our goal through continuous teamwork.",
                "hindi": "हमने निरंतर टीम वर्क के माध्यम से अपना लक्ष्य हासिल किया।"
            },
            {
                "english": "Active listening makes technical collaboration effective.",
                "hindi": "सक्रियता से सुनना तकनीकी सहयोग को प्रभावी बनाता है।"
            }
        ],
        "commonMistake": {
            "incorrect": "I will do my work, others can do whatever they want.",
            "correct": "We can divide the tasks and sync daily to ensure smooth integration.",
            "explanationHindi": "कंपनियां टीम प्लेयर्स को चुनती हैं; 'I' के स्थान पर 'We' और सहयोग की भाषा का प्रयोग करें।"
        }
    }
},
  89: {
    "day": 89,
    "topic": "Overcoming Technical Challenges",
    "patternFocus": "I encountered a bug / I diagnosed it by / The fix was",
    "sentences": [
        {
            "english": "I encountered an unexpected edge case with empty inputs.",
            "hindi": "खाली इनपुट के साथ मुझे एक अप्रत्याशित एज केस का सामना करना पड़ा।",
            "pattern": "Subject + past verb (V2) + object + prepositional phrase.",
            "example": "The program crashed on negative numbers. (ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।)"
        },
        {
            "english": "I diagnosed the issue by tracing variable values.",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "example": "I used console logs to pinpoint the error. (मैंने एरर का पता लगाने के लिए कंसोल लॉग का इस्तेमाल किया।)"
        },
        {
            "english": "The fix was adding a proper boundary condition.",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "pattern": "Subject + was + verb-ing + object.",
            "example": "I solved it by updating the pointer logic. (मैंने पॉइंटर लॉजिक को अपडेट करके इसे हल किया।)"
        },
        {
            "english": "Debugging taught me the value of patience.",
            "hindi": "डीबगिंग ने मुझे धैर्य का महत्व सिखाया।",
            "pattern": "Subject + past verb + indirect object + direct object.",
            "example": "Writing tests prevents regressions. (टेस्ट लिखने से पुरानी गलतियाँ दोबारा नहीं होतीं।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "ऋणात्मक संख्याओं पर प्रोग्राम क्रैश हो गया।",
            "expected": "The program crashed on negative numbers.",
            "pattern": "Subject + past verb (V2) + prepositional phrase.",
            "explanation": "सरल व्याख्या: बग का वर्णन करने के लिए: The program crashed on negative numbers.",
            "acceptedAnswers": [
                "The program crashed on negative numbers.",
                "The program crashed on negative numbers"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैंने वेरिएबल के मानों को ट्रेस करके समस्या की पहचान की।",
            "expected": "I diagnosed the issue by tracing variable values.",
            "pattern": "Subject + past verb + object + by + verb-ing + noun phrase.",
            "explanation": "सरल व्याख्या: डीबगिंग का तरीका बताने के लिए: I diagnosed the issue by tracing variable values.",
            "acceptedAnswers": [
                "I diagnosed the issue by tracing variable values.",
                "I diagnosed the issue by tracing variable values"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "इसका समाधान एक सही बाउंड्री शर्त जोड़ना था।",
            "expected": "The fix was adding a proper boundary condition.",
            "pattern": "Subject + was + verb-ing + object.",
            "explanation": "सरल व्याख्या: समाधान बताने के लिए: The fix was adding a proper boundary condition.",
            "acceptedAnswers": [
                "The fix was adding a proper boundary condition.",
                "The fix was adding a proper boundary condition"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Where do you see yourself in three to five years?",
        "questionHindi": "आप तीन से पांच वर्षों में खुद को कहाँ देखते हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "In three years, I want to become a proficient full-stack engineer. I hope to mentor junior developers and lead technical modules.",
        "sampleAnswerHindi": "सरल व्याख्या: 'want to' और 'hope to' का उपयोग करके अपने करियर विकास का खाका प्रस्तुत किया गया है।",
        "customizationTip": "अपनी पसंदीदा तकनीकी दिशा (AI, Cloud, Full-stack) लिखें।"
    },
    "usageGuide": {
        "meaningHindi": "\"I encountered a bug\" = मुझे एक बग मिला | \"I diagnosed it by\" = मैंने इसका विश्लेषण किया | \"The fix was\" = इसका समाधान था",
        "whenToUse": "जब इंटरव्यूअर पूछे: \"Tell me about a difficult bug you solved\" या \"How do you troubleshoot production issues?\" (STAR पद्धति)।",
        "whereToUse": "टेक्निकल इंटरव्यू, पोस्ट-मॉर्टम समीक्षा, और बग रिपोर्टिंग में।",
        "howToUse": "I encountered [problem] ➔ I diagnosed it by [debugging action] ➔ The fix was [solution].",
        "examples": [
            {
                "english": "I diagnosed an unhandled promise rejection in production.",
                "hindi": "मैंने प्रोडक्शन में अनहैंडल्ड प्रॉमिस रिजेक्शन का विश्लेषण किया।"
            },
            {
                "english": "The fix was wrapping the async handler in a try-catch block.",
                "hindi": "समाधान था एसिंक हैंडलर को try-catch ब्लॉक में लपेटना।"
            }
        ],
        "commonMistake": {
            "incorrect": "Code was not working so I searched on Google and pasted code.",
            "correct": "I diagnosed the issue by tracing execution in the debugger and added a defensive boundary check.",
            "explanationHindi": "इंटरव्यूअर यह देखना चाहता है कि आपने समस्या की जड़ (root cause) कैसे खोजी और उसे तार्किक ढंग से कैसे सुलझाया।"
        }
    }
},
  90: {
    "day": 90,
    "topic": "Professional Strengths & Motivation",
    "patternFocus": "My greatest strength is / One area I am improving / I am motivated by",
    "sentences": [
        {
            "english": "My greatest strength is my consistency and discipline.",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "pattern": "Subject + is + possessive + noun phrase.",
            "example": "I learn new technologies very quickly. (मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।)"
        },
        {
            "english": "One area I am actively improving is public speaking.",
            "hindi": "एक क्षेत्र जिसमें मैं सक्रिय रूप से सुधार कर रहा हूँ वह सार्वजनिक भाषण (बोलना) है।",
            "pattern": "Noun phrase + is + gerund phrase.",
            "example": "I practice spoken English every day to build confidence. (आत्मविश्वास बढ़ाने के लिए मैं रोज़ अंग्रेज़ी बोलने का अभ्यास करता हूँ।)"
        },
        {
            "english": "I am motivated by solving real-world customer problems.",
            "hindi": "मैं वास्तविक दुनिया की उपभोक्ता समस्याओं को हल करने से प्रेरित होता हूँ।",
            "pattern": "Subject + am motivated by + verb-ing + noun phrase.",
            "example": "Building impactful software inspires me. (प्रभावशाली सॉफ्टवेयर बनाना मुझे प्रेरित करता है।)"
        },
        {
            "english": "I handle deadline pressure by prioritizing tasks calmly.",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "example": "I stay calm and focused under pressure. (मैं दबाव में भी शांत और केंद्रित रहता हूँ।)"
        }
    ],
    "practice": [
        {
            "id": 1,
            "difficulty": "Easy",
            "hindi": "मेरी सबसे बड़ी ताकत मेरी निरंतरता और अनुशासन है।",
            "expected": "My greatest strength is my consistency and discipline.",
            "pattern": "Subject + is + possessive + noun phrase.",
            "explanation": "सरल व्याख्या: अपनी खूबी बताने के लिए: My greatest strength is my consistency and discipline.",
            "acceptedAnswers": [
                "My greatest strength is my consistency and discipline.",
                "My greatest strength is my consistency and discipline"
            ]
        },
        {
            "id": 2,
            "difficulty": "Medium",
            "hindi": "मैं नई तकनीकों को बहुत तेज़ी से सीखता हूँ।",
            "expected": "I learn new technologies very quickly.",
            "pattern": "Subject + base verb + object + adverb phrase.",
            "explanation": "सरल व्याख्या: सीखने की क्षमता दर्शाने के लिए: I learn new technologies very quickly.",
            "acceptedAnswers": [
                "I learn new technologies very quickly.",
                "I learn new technologies very quickly"
            ]
        },
        {
            "id": 3,
            "difficulty": "Challenging",
            "hindi": "मैं शांत रहकर कार्यों को प्राथमिकता देकर डेडलाइन का दबाव संभालता हूँ।",
            "expected": "I handle deadline pressure by prioritizing tasks calmly.",
            "pattern": "Subject + verb + object + by + verb-ing + noun phrase + adverb.",
            "explanation": "सरल व्याख्या: दबाव संभालने के लिए: I handle deadline pressure by prioritizing tasks calmly.",
            "acceptedAnswers": [
                "I handle deadline pressure by prioritizing tasks calmly.",
                "I handle deadline pressure by prioritizing tasks calmly"
            ]
        }
    ],
    "interviewQuestion": {
        "question": "Do you have any questions for me as the interviewer?",
        "questionHindi": "क्या आपके पास मेरे (इंटरव्यूअर) लिए कोई प्रश्न हैं?",
        "patternsUsed": "HR & Placement Scenarios (Strengths, Weaknesses, Career Goals)",
        "sampleAnswer": "May I ask about the team structure? What technologies does the team plan to adopt next? Thank you for your valuable time today.",
        "sampleAnswerHindi": "सरल व्याख्या: अंत में विनम्रता से कंपनी और टीम के बारे में सवाल पूछने का तरीका दिखाया गया है।",
        "customizationTip": "टीम या प्रोजेक्ट के बारे में एक वास्तविक प्रश्न पूछें।"
    },
    "usageGuide": {
        "meaningHindi": "\"My greatest strength is\" = मेरी सबसे बड़ी ताकत है | \"One area I am improving\" = एक क्षेत्र जिसमें मैं सुधार कर रहा हूँ | \"I am motivated by\" = मैं प्रेरित होता हूँ",
        "whenToUse": "जब HR या हायरिंग मैनेजर आपकी व्यक्तिगत खूबियां, कमजोरियों पर काम करने का तरीका, और करियर प्रेरणा पूछे।",
        "whereToUse": "HR इंटरव्यू राउंड, कल्चर फिट राउंड, और बिहेवियरल असेसमेंट में।",
        "howToUse": "My greatest strength is [quality] because [evidence] | One area I am improving is [skill].",
        "examples": [
            {
                "english": "My greatest strength is dedication to engineering excellence.",
                "hindi": "मेरी सबसे बड़ी ताकत इंजीनियरिंग उत्कृष्टता के प्रति मेरा समर्पण है।"
            },
            {
                "english": "I am ready to contribute effectively as a software engineer.",
                "hindi": "मैं एक सॉफ्टवेयर इंजीनियर के रूप में प्रभावी योगदान देने के लिए तैयार हूँ।"
            }
        ],
        "commonMistake": {
            "incorrect": "I have no weaknesses and I know everything.",
            "correct": "One area I am actively improving is public speaking, and I practice spoken English every day to build confidence.",
            "explanationHindi": "कमजोरी को नकारने के बजाय बताएं कि आप उस पर लगातार मेहनत करके खुद को कैसे बेहतर बना रहे हैं।"
        }
    }
}
};

/**
 * Normalizes input string for forgiving, learner-friendly answer checking.
 */
function normalizeText(str) {
  if (!str) return "";
  return str
    .trim()
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[“”"]/g, '"')
    .replace(/[.?!,;:]+$/, "") // strip trailing punctuation
    .replace(/\s+/g, " ");
}

/**
 * Expands common English contractions for flexible matching.
 */
function expandContractions(str) {
  return str
    .replace(/\bi'm\b/g, "i am")
    .replace(/\byou're\b/g, "you are")
    .replace(/\bwe're\b/g, "we are")
    .replace(/\bthey're\b/g, "they are")
    .replace(/\bhe's\b/g, "he is")
    .replace(/\bshe's\b/g, "she is")
    .replace(/\bit's\b/g, "it is")
    .replace(/\bdon't\b/g, "do not")
    .replace(/\bdoesn't\b/g, "does not")
    .replace(/\bdidn't\b/g, "did not")
    .replace(/\bcan't\b/g, "cannot")
    .replace(/\bwon't\b/g, "will not")
    .replace(/\bthat's\b/g, "that is");
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
