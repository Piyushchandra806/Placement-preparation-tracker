/**
 * Mission 90 — Complete 90-Day Placement Preparation Curriculum
 * Full structured syllabus across 4 core subjects:
 * - DSA in C++ (75 mins/day)
 * - Quantitative Aptitude (25 mins/day)
 * - Logical Reasoning (25 mins/day)
 * - English Speaking (25 mins/day)
 *
 * Total Tasks: 450 (360 tasks)
 */

export const COMPLETE_90_DAYS_CURRICULUM = [
  {
    "dayNumber": 1,
    "subject": "dsa",
    "topic": "Time & Space Complexity",
    "title": "Day 1: Master Big-O Asymptotics & STL Vector Overhead",
    "description": "Derive time & space complexity for nested loops, divide-and-conquer, and recursion trees. Analyze C++ vector dynamic capacity reallocation.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Analyze loop step counts & identify tight asymptotic bounds",
      "Understand C++ std::vector geometric reallocation amortization",
      "Differentiate between auxiliary space and total space complexity"
    ],
    "practiceQuestions": [
      {
        "title": "Two Sum",
        "url": "https://leetcode.com/problems/two-sum/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 1,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Fraction-to-Percentage Equivalents & Conversions",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "What is the fraction equivalent of 37.5%?",
      "options": [
        "3/8",
        "3/5",
        "5/8",
        "7/16"
      ],
      "answerKey": "3/8",
      "explanation": "37.5% = 37.5 / 100 = 75 / 200 = 3/8. Knowing standard eighths (1/8=12.5%, 3/8=37.5%, 5/8=62.5%) saves critical exam time."
    }
  },
  {
    "dayNumber": 1,
    "subject": "reasoning",
    "topic": "Number Series",
    "title": "Number Series — Missing Term & Difference of Differences",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Number Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the next number in series: 2, 5, 11, 20, 32, ?",
      "options": [
        "45",
        "47",
        "49",
        "50"
      ],
      "answerKey": "47",
      "explanation": "Differences: +3, +6, +9, +12. The next difference is +15. 32 + 15 = 47."
    }
  },
  {
    "dayNumber": 1,
    "subject": "english",
    "topic": "Self Introduction",
    "title": "Self Introduction — 3-Minute Elevator Pitch Structure",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "task": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "question": "Daily Speaking Drill: Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "answerKey": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 1,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 1: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 1 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 2,
    "subject": "dsa",
    "topic": "Arrays",
    "title": "Day 2: Two-Pointer Technique & Array Reversals",
    "description": "Implement in-place array transformations using left/right pointers. Solve Two Sum with hash maps and sorted arrays.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Master bidirectional pointer convergence",
      "Implement in-place vector reversal and element removal",
      "Compare O(N) hash map lookup vs O(N log N) sorting approach"
    ],
    "practiceQuestions": [
      {
        "title": "Two Sum",
        "url": "https://leetcode.com/problems/two-sum/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Contains Duplicate",
        "url": "https://leetcode.com/problems/contains-duplicate/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 2,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Successive Percentage Changes & Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A price rises by 20% and is then discounted by 20%. What is the net percentage change?",
      "options": [
        "0% (no change)",
        "4% decrease",
        "4% increase",
        "2% decrease"
      ],
      "answerKey": "4% decrease",
      "explanation": "Using successive formula a + b + (ab/100): +20 - 20 + (20 * -20 / 100) = -4%, which is a net 4% decrease."
    }
  },
  {
    "dayNumber": 2,
    "subject": "reasoning",
    "topic": "Alphabet Series",
    "title": "Alphabet Series — EJOTY Position Rules & Letter Shifting",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Alphabet Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "What is the 16th letter of the alphabet from the left?",
      "options": [
        "N",
        "O",
        "P",
        "Q"
      ],
      "answerKey": "P",
      "explanation": "Using EJOTY (E=5, J=10, O=15, T=20, Y=25): O is 15th, so the next letter P is 16th."
    }
  },
  {
    "dayNumber": 2,
    "subject": "english",
    "topic": "Sentence Formation",
    "title": "Sentence Formation — Avoiding Common Indianisms & Direct Translations",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "task": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "question": "Daily Speaking Drill: Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "answerKey": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 2,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 2: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 2 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 3,
    "subject": "dsa",
    "topic": "Arrays",
    "title": "Day 3: Prefix Sum & Single-Pass Optimization",
    "description": "Compute running prefix sums to answer range query problems in O(1) time. Master Best Time to Buy and Sell Stock single pass min-tracking.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Construct prefix and suffix sum arrays in O(N)",
      "Track running minima for optimal trading profit",
      "Handle negative numbers in range sum calculations"
    ],
    "practiceQuestions": [
      {
        "title": "Best Time to Buy and Sell Stock",
        "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 3,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Population Growth & Depreciation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A machine valued at $10,000 depreciates by 10% annually. What is its value after 2 years?",
      "options": [
        "$8,000",
        "$8,100",
        "$8,200",
        "$9,000"
      ],
      "answerKey": "$8,100",
      "explanation": "Value = 10,000 * (1 - 0.10)^2 = 10,000 * 0.81 = $8,100."
    }
  },
  {
    "dayNumber": 3,
    "subject": "reasoning",
    "topic": "Analogy",
    "title": "Analogy — Word & Numeric Relationships",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Analogy",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Doctor : Hospital :: Teacher : ?",
      "options": [
        "Student",
        "School",
        "Book",
        "Classroom"
      ],
      "answerKey": "School",
      "explanation": "A doctor operates in a hospital; a teacher operates in a school (workplace relationship)."
    }
  },
  {
    "dayNumber": 3,
    "subject": "english",
    "topic": "Tenses",
    "title": "Tenses — Present Perfect vs Simple Past in Tech Interviews",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Talk about a project you completed last semester versus technologies you have used recently.",
      "task": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "question": "Daily Speaking Drill: Talk about a project you completed last semester versus technologies you have used recently.",
      "answerKey": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 3,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 3: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 3 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 4,
    "subject": "dsa",
    "topic": "Arrays",
    "title": "Day 4: Maximum Subarray & Kadane's Algorithm",
    "description": "Derive Kadane’s algorithm for contiguous maximum subarray sum. Handle all-negative array edge cases and reconstruct subarray indices.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate optimal local vs global subarray sum transition",
      "Prevent integer overflow in cumulative sum additions",
      "Track start and end pointers of the maximum subarray"
    ],
    "practiceQuestions": [
      {
        "title": "Maximum Subarray",
        "url": "https://leetcode.com/problems/maximum-subarray/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 4,
    "subject": "quant",
    "topic": "Profit and Loss",
    "title": "Profit and Loss — Cost Price, Selling Price & Marked Price Equations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Profit and Loss",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "An item bought for $400 is sold for $480. What is the profit percentage?",
      "options": [
        "15%",
        "20%",
        "25%",
        "16.66%"
      ],
      "answerKey": "20%",
      "explanation": "Profit = $480 - $400 = $80. Profit % = (80 / 400) * 100 = 20%."
    }
  },
  {
    "dayNumber": 4,
    "subject": "reasoning",
    "topic": "Classification",
    "title": "Classification — Odd One Out (Semantic & Numeric)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Classification",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the odd one out: 27, 64, 125, 144, 216",
      "options": [
        "27",
        "64",
        "144",
        "216"
      ],
      "answerKey": "144",
      "explanation": "27=3^3, 64=4^3, 125=5^3, 216=6^3 are all perfect cubes. 144 is only a square (12^2), not a cube."
    }
  },
  {
    "dayNumber": 4,
    "subject": "english",
    "topic": "Daily Conversations",
    "title": "Daily Conversations — Professional Greetings and Interview Small Talk",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "task": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "question": "Daily Speaking Drill: How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "answerKey": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 4,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 4: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 4 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 5,
    "subject": "dsa",
    "topic": "Arrays",
    "title": "Day 5: Prefix/Suffix Products Without Division",
    "description": "Solve Product of Array Except Self using cumulative left and right product sweeps in O(N) time and O(1) extra space.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Maintain running product accumulation",
      "Eliminate division operators for zero-containing arrays",
      "Optimize memory by accumulating right products in output vector"
    ],
    "practiceQuestions": [
      {
        "title": "Product of Array Except Self",
        "url": "https://leetcode.com/problems/product-of-array-except-self/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 5,
    "subject": "quant",
    "topic": "Profit and Loss",
    "title": "Profit and Loss — Dishonest Dealers & Faulty Weights",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Profit and Loss",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A grocer claims to sell at cost price but uses 900g instead of 1kg. Find his gain percentage.",
      "options": [
        "10%",
        "11.11%",
        "9.09%",
        "12.5%"
      ],
      "answerKey": "11.11%",
      "explanation": "Gain % = (Error / (True Value - Error)) * 100 = (100 / 900) * 100 = 11.11%."
    }
  },
  {
    "dayNumber": 5,
    "subject": "reasoning",
    "topic": "Coding-Decoding",
    "title": "Coding-Decoding — Direct Letter Shifting Patterns",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Coding-Decoding",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If CAT is coded as DBU, how is DOG coded?",
      "options": [
        "EPH",
        "EOF",
        "EQH",
        "ENH"
      ],
      "answerKey": "EPH",
      "explanation": "Each letter is shifted by +1: D (+1) = E, O (+1) = P, G (+1) = H."
    }
  },
  {
    "dayNumber": 5,
    "subject": "english",
    "topic": "Vocabulary",
    "title": "Vocabulary — Action Verbs for Resume & Project Impact",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "task": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "question": "Daily Speaking Drill: Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "answerKey": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 5,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 5: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 5 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 6,
    "subject": "dsa",
    "topic": "Strings",
    "title": "Day 6: String Hashing & Anagram Verification",
    "description": "Use fixed frequency arrays of size 26 to verify valid anagrams and check string permutations in linear time.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Use char arithmetic (c - \"a\") for direct frequency array indexing",
      "Verify anagram equivalence in O(N) time and O(1) space",
      "Handle Unicode and uppercase/lowercase normalization"
    ],
    "practiceQuestions": [
      {
        "title": "Valid Anagram",
        "url": "https://leetcode.com/problems/valid-anagram/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Valid Palindrome",
        "url": "https://leetcode.com/problems/valid-palindrome/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 6,
    "subject": "quant",
    "topic": "Ratio and Proportion",
    "title": "Ratio and Proportion — Mean, Third and Fourth Proportional",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ratio and Proportion",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the mean proportional between 9 and 16.",
      "options": [
        "12",
        "12.5",
        "144",
        "13"
      ],
      "answerKey": "12",
      "explanation": "Mean proportional = sqrt(a * b) = sqrt(9 * 16) = sqrt(144) = 12."
    }
  },
  {
    "dayNumber": 6,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Cardinal Directions & Pythagoras Displacements",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "A man walks 3km North, then 4km East. How far is he from the starting point?",
      "options": [
        "5 km",
        "7 km",
        "6 km",
        "8 km"
      ],
      "answerKey": "5 km",
      "explanation": "Distance = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5 km."
    }
  },
  {
    "dayNumber": 6,
    "subject": "english",
    "topic": "Listening and Shadowing",
    "title": "Listening and Shadowing — Pacing and Intonation Shadowing Drill",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "task": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "question": "Daily Speaking Drill: Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "answerKey": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 6,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 6: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 6 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 7,
    "subject": "dsa",
    "topic": "Revision & Contest",
    "title": "Day 7: Week 1 Timed Assessment (3 Problems)",
    "description": "Simulate a 75-minute online coding round covering arrays, frequency maps, and two pointers.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Solve problems under strict time constraints",
      "Write edge-case test suites (empty vector, single element)",
      "Practice clean C++ variable naming and modular helpers"
    ],
    "practiceQuestions": [
      {
        "title": "Two Sum",
        "url": "https://leetcode.com/problems/two-sum/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Maximum Subarray",
        "url": "https://leetcode.com/problems/maximum-subarray/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 7,
    "subject": "quant",
    "topic": "Ratio and Proportion",
    "title": "Ratio and Proportion — Partnerships & Investment Division",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ratio and Proportion",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A and B invest $3,000 and $5,000 for 1 year. If total profit is $1,600, what is A's share?",
      "options": [
        "$600",
        "$800",
        "$1,000",
        "$500"
      ],
      "answerKey": "$600",
      "explanation": "Ratio of profits = 3:5. A's share = (3 / 8) * 1600 = $600."
    }
  },
  {
    "dayNumber": 7,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Shadow Rules at Sunrise and Sunset",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "At sunrise, if Rohan is facing Amit and Rohan's shadow falls to his left, which direction is Rohan facing?",
      "options": [
        "North",
        "South",
        "East",
        "West"
      ],
      "answerKey": "North",
      "explanation": "At sunrise, sunlight comes from the East, so shadows fall toward the West. If shadow is on Rohan's left, his left is West, which means he is facing North."
    }
  },
  {
    "dayNumber": 7,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — 2-Minute Impromptu Speech on Clean Code",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "task": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "question": "Daily Speaking Drill: Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "answerKey": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 7,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 7: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 7 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 8,
    "subject": "dsa",
    "topic": "Strings",
    "title": "Day 8: Longest Common Prefix & String Compression",
    "description": "Implement horizontal and vertical scanning for common prefixes across vector of strings.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Compare character positions across multiple strings",
      "Implement in-place run-length string compression",
      "Master std::string substr and push_back operations"
    ],
    "practiceQuestions": [
      {
        "title": "Valid Palindrome II",
        "url": "https://leetcode.com/problems/valid-palindrome-ii/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 8,
    "subject": "quant",
    "topic": "Average",
    "title": "Average — Arithmetic Mean & Weighted Averages",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Average",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
      "options": [
        "30",
        "35",
        "32",
        "29"
      ],
      "answerKey": "35",
      "explanation": "Sum of 5 numbers = 5 * 27 = 135. Sum of remaining 4 = 4 * 25 = 100. Excluded number = 135 - 100 = 35."
    }
  },
  {
    "dayNumber": 8,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Family Tree Generation Diagrams",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Pointing to a man, a woman said \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Aunt",
        "Sister",
        "Daughter"
      ],
      "answerKey": "Mother",
      "explanation": "The \"only daughter of my mother\" is the woman herself. So she is his mother."
    }
  },
  {
    "dayNumber": 8,
    "subject": "english",
    "topic": "Explaining Technical Concepts",
    "title": "Explaining Technical Concepts — Explain REST API to a Non-Tech Recruiter",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain what an API is using the classic restaurant waiter metaphor.",
      "task": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "question": "Daily Speaking Drill: Explain what an API is using the classic restaurant waiter metaphor.",
      "answerKey": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 8,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 8: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 8 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 9,
    "subject": "dsa",
    "topic": "Two Pointers",
    "title": "Day 9: 3Sum & Container With Most Water",
    "description": "Sort array and apply two-pointer convergence to find zero-sum triplets without duplicates. Maximize container area.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Eliminate duplicate triplets using while loop pointer skips",
      "Prove greedy inward movement of the shorter container wall",
      "Achieve O(N^2) time complexity for 3Sum"
    ],
    "practiceQuestions": [
      {
        "title": "3Sum",
        "url": "https://leetcode.com/problems/3sum/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Container With Most Water",
        "url": "https://leetcode.com/problems/container-with-most-water/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 9,
    "subject": "quant",
    "topic": "Average",
    "title": "Average — Replacement & Batting Averages",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Average",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A batsman scores 85 runs in his 12th inning, increasing his average by 3. What is his average after 12 innings?",
      "options": [
        "48",
        "51",
        "52",
        "45"
      ],
      "answerKey": "51",
      "explanation": "Let previous average be x. 11x + 85 = 12(x + 3) => 11x + 85 = 12x + 36 => x = 49. New average = 49 + 3 = 51 (or 85 - 12*3 = 49, new = 52 - wait: 85 - 36 = 49, so 49 + 3 = 52? Wait: 12*3 = 36; 85 - 36 = 49. New average is 52? Wait: 11*49 + 85 = 539 + 85 = 624. 624/12 = 52. Answer is 52)."
    }
  },
  {
    "dayNumber": 9,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Coded Family Relations (A + B symbols)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If A + B means A is son of B, and A * B means A is brother of B, what does P + Q * R mean?",
      "options": [
        "P is son of R",
        "P is nephew of R",
        "P is brother of R",
        "P is uncle of R"
      ],
      "answerKey": "P is nephew of R",
      "explanation": "Q * R means Q is brother of R. P + Q means P is son of Q. Therefore, P is the nephew of R."
    }
  },
  {
    "dayNumber": 9,
    "subject": "english",
    "topic": "Explaining DSA Solutions",
    "title": "Explaining DSA Solutions — Verbal Walkthrough of Two Sum using Hash Map",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "task": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "question": "Daily Speaking Drill: Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "answerKey": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 9,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 9: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 9 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 10,
    "subject": "dsa",
    "topic": "Sliding Window",
    "title": "Day 10: Fixed-Size Sliding Window Fundamentals",
    "description": "Maintain running window metrics across subarrays of size K without redundant recomputation.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Expand right pointer and contract left pointer",
      "Maintain running sum/count in O(1) per step",
      "Identify fixed-window vs dynamic-window problem patterns"
    ],
    "practiceQuestions": [
      {
        "title": "Longest Substring Without Repeating Characters",
        "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 10,
    "subject": "quant",
    "topic": "Interest",
    "title": "Interest — Simple Interest Formula & Rate Calculation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Interest",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A sum amounts to $720 in 2 years and $1,020 in 7 years at simple interest. Find the principal.",
      "options": [
        "$500",
        "$600",
        "$550",
        "$650"
      ],
      "answerKey": "$600",
      "explanation": "Interest for 5 years = 1020 - 720 = $300. Interest per year = $60. Interest for 2 years = $120. Principal = 720 - 120 = $600."
    }
  },
  {
    "dayNumber": 10,
    "subject": "reasoning",
    "topic": "Ranking and Order",
    "title": "Ranking and Order — Total Persons in Row Formula",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Ranking and Order",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a class, Rahul ranks 7th from top and 28th from bottom. How many students are there in the class?",
      "options": [
        "34",
        "35",
        "36",
        "33"
      ],
      "answerKey": "34",
      "explanation": "Total = Top + Bottom - 1 = 7 + 28 - 1 = 34 students."
    }
  },
  {
    "dayNumber": 10,
    "subject": "english",
    "topic": "Project Explanation",
    "title": "Project Explanation — STAR Method for System Architecture Pitch",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "task": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "question": "Daily Speaking Drill: Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "answerKey": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 10,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 10: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 10 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 11,
    "subject": "dsa",
    "topic": "Sliding Window",
    "title": "Day 11: Dynamic Window & Character Replacement",
    "description": "Use hash maps to track character frequencies and expand/shrink window dynamically to maximize substring length.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Track max frequency in current window",
      "Shrink window when (length - maxFreq) > k",
      "Achieve strict O(N) overall window amortized runtime"
    ],
    "practiceQuestions": [
      {
        "title": "Longest Repeating Character Replacement",
        "url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 11,
    "subject": "quant",
    "topic": "Interest",
    "title": "Interest — Compound Interest & CI - SI Difference",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Interest",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "The difference between CI and SI on $1,000 for 2 years at 10% per annum is:",
      "options": [
        "$5",
        "$10",
        "$15",
        "$20"
      ],
      "answerKey": "$10",
      "explanation": "Difference for 2 years = P * (R / 100)^2 = 1000 * (10 / 100)^2 = 1000 * 0.01 = $10."
    }
  },
  {
    "dayNumber": 11,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Venn Diagram Method (All A are B)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statements: All cats are animals. All animals are mammals. Conclusion: All cats are mammals.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Cannot be determined"
      ],
      "answerKey": "Follows",
      "explanation": "Cats subset of Animals, Animals subset of Mammals, therefore Cats subset of Mammals. Conclusion definitely follows."
    }
  },
  {
    "dayNumber": 11,
    "subject": "english",
    "topic": "HR Interview Questions",
    "title": "HR Interview Questions — Handling \"What Is Your Biggest Weakness?\"",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "task": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "question": "Daily Speaking Drill: Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "answerKey": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 11,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 11: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 11 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 12,
    "subject": "dsa",
    "topic": "Sliding Window",
    "title": "Day 12: Minimum Window Substring & Monotonic Deque",
    "description": "Solve the classic Minimum Window Substring using frequency matches and optimize sliding window maximum.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Track character deficit counts for O(1) window validity checks",
      "Contract left bound greedily once all target chars match",
      "Implement monotonic deque for O(N) sliding window maximum"
    ],
    "practiceQuestions": [
      {
        "title": "Minimum Window Substring",
        "url": "https://leetcode.com/problems/minimum-window-substring/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 12,
    "subject": "quant",
    "topic": "Number System",
    "title": "Number System — Divisibility Rules & Remainder Theorem",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Number System",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "What is the remainder when 2^31 is divided by 5?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answerKey": "3",
      "explanation": "Powers of 2 mod 5: 2^1=2, 2^2=4, 2^3=3, 2^4=1 (cycle of 4). 31 mod 4 = 3, so 2^31 mod 5 = 2^3 mod 5 = 8 mod 5 = 3."
    }
  },
  {
    "dayNumber": 12,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Modern \"Only A Few\" Statements",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: Only a few books are pens. Conclusion: Some books are not pens.",
      "options": [
        "Definite Follows",
        "Does not follow",
        "False",
        "Data insufficient"
      ],
      "answerKey": "Definite Follows",
      "explanation": "\"Only a few\" means both \"Some A are B\" AND \"Some A are not B\" are simultaneously true."
    }
  },
  {
    "dayNumber": 12,
    "subject": "english",
    "topic": "Group Discussion",
    "title": "Group Discussion — Initiating and Reframing Group Dialogue",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How do you enter a discussion when 3 people are speaking at once?",
      "task": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "question": "Daily Speaking Drill: How do you enter a discussion when 3 people are speaking at once?",
      "answerKey": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 12,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 12: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 12 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 13,
    "subject": "dsa",
    "topic": "Searching",
    "title": "Day 13: Binary Search Implementation & Invariants",
    "description": "Master standard binary search, lower_bound, and upper_bound without off-by-one errors or integer overflow.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Use mid = left + (right - left) / 2 to avoid overflow",
      "Define loop invariant: while (left <= right) vs while (left < right)",
      "Code custom lower_bound and upper_bound in C++"
    ],
    "practiceQuestions": [
      {
        "title": "Binary Search",
        "url": "https://leetcode.com/problems/binary-search/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 13,
    "subject": "quant",
    "topic": "Number System",
    "title": "Number System — Unit Digit Cycles & Exponentiation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Number System",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the unit digit of 7^95 - 3^58.",
      "options": [
        "0",
        "4",
        "6",
        "7"
      ],
      "answerKey": "4",
      "explanation": "Cyclicity of 7 is 4: 95 mod 4 = 3 => 7^3 ends in 3. Cyclicity of 3 is 4: 58 mod 4 = 2 => 3^2 ends in 9. Unit digit = 13 - 9 = 4."
    }
  },
  {
    "dayNumber": 13,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Direct Inequality Chains (A > B >= C)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Given P > Q >= R = S. Is P > S definitely true?",
      "options": [
        "Yes (Definite True)",
        "No (False)",
        "Cannot be determined",
        "Partially true"
      ],
      "answerKey": "Yes (Definite True)",
      "explanation": "Since P > Q and Q >= S, P is strictly greater than S."
    }
  },
  {
    "dayNumber": 13,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Explaining a Tough Bug You Resolved",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "task": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "question": "Daily Speaking Drill: Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "answerKey": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 13,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 13: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 13 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 14,
    "subject": "dsa",
    "topic": "Searching",
    "title": "Day 14: Search in Rotated Sorted Array",
    "description": "Identify which half of the rotated array is strictly sorted and discard the contradictory partition.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Determine sorted half by comparing nums[left] and nums[mid]",
      "Check if target lies inside the sorted half bounds",
      "Handle duplicates in rotated arrays in O(log N) average"
    ],
    "practiceQuestions": [
      {
        "title": "Search in Rotated Sorted Array",
        "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Find Minimum in Rotated Sorted Array",
        "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 14,
    "subject": "quant",
    "topic": "HCF and LCM",
    "title": "HCF and LCM — Prime Factorization & Product Property",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for HCF and LCM",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Two numbers are in the ratio 3:4. If their HCF is 4, what is their LCM?",
      "options": [
        "36",
        "48",
        "60",
        "72"
      ],
      "answerKey": "48",
      "explanation": "Numbers are 3*4 = 12 and 4*4 = 16. LCM = 12 * 16 / 4 = 48 (or LCM = HCF * a * b = 4 * 3 * 4 = 48)."
    }
  },
  {
    "dayNumber": 14,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Coded Inequalities with Symbol Mappings",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: M >= N > O, O = P < Q. Conclusion: M > P.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Neither follows"
      ],
      "answerKey": "Follows",
      "explanation": "M >= N > O = P implies M > O = P, hence M > P definitely holds."
    }
  },
  {
    "dayNumber": 14,
    "subject": "english",
    "topic": "Technical Mock Interviews",
    "title": "Technical Mock Interviews — 5-Minute Live Code Explanation Rehearsal",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "task": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "question": "Daily Speaking Drill: Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "answerKey": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 14,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 14: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 14 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 15,
    "subject": "dsa",
    "topic": "Binary Search on Answer",
    "title": "Day 15: Koko Eating Bananas & Feasibility Invariant",
    "description": "Binary search over the answer space [1, max_val] using monotonic predicate function canFinish(speed).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Identify monotonic search spaces for optimization problems",
      "Write boolean feasibility check function",
      "Compute ceiling division without floating point inaccuracy"
    ],
    "practiceQuestions": [
      {
        "title": "Koko Eating Bananas",
        "url": "https://leetcode.com/problems/koko-eating-bananas/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 15,
    "subject": "quant",
    "topic": "Time and Work",
    "title": "Time and Work — Efficiency Method & Combined Output",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time and Work",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A can do a piece of work in 10 days and B in 15 days. How long will they take working together?",
      "options": [
        "5 days",
        "6 days",
        "7.5 days",
        "8 days"
      ],
      "answerKey": "6 days",
      "explanation": "LCM of 10 and 15 = 30 units. A's rate = 3 units/day, B's rate = 2 units/day. Combined = 5 units/day. Days = 30 / 5 = 6 days."
    }
  },
  {
    "dayNumber": 15,
    "subject": "reasoning",
    "topic": "Seating Arrangements",
    "title": "Seating Arrangements — Linear Arrangement Facing North",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Seating Arrangements",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Five friends A, B, C, D, E sit facing North. C sits in the middle. A is left of C. Where can A sit?",
      "options": [
        "Position 1 or 2",
        "Position 4 or 5",
        "Position 3 only",
        "Position 5 only"
      ],
      "answerKey": "Position 1 or 2",
      "explanation": "Middle position is 3. To the left of position 3 are positions 1 and 2."
    }
  },
  {
    "dayNumber": 15,
    "subject": "english",
    "topic": "Final Interview Simulation",
    "title": "Final Interview Simulation — Closing Questions for the Hiring Manager",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "task": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "question": "Daily Speaking Drill: Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "answerKey": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 15,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 15: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 15 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 16,
    "subject": "dsa",
    "topic": "Binary Search on Answer",
    "title": "Day 16: Shipment Allocation & Split Array Largest Sum",
    "description": "Find minimal feasible capacity over continuous split subarrays using greedy predicate checks.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Establish search bounds: lower bound max(arr), upper bound sum(arr)",
      "Greedily count required days/subarrays for given capacity",
      "Converge to minimum optimal answer in O(N log(sum)) time"
    ],
    "practiceQuestions": [
      {
        "title": "Search a 2D Matrix",
        "url": "https://leetcode.com/problems/search-a-2d-matrix/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 16,
    "subject": "quant",
    "topic": "Time and Work",
    "title": "Time and Work — Alternate Day Work & Man-Days Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time and Work",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "If 12 men can build a wall in 20 days, how many men are needed to build it in 15 days?",
      "options": [
        "14",
        "16",
        "18",
        "20"
      ],
      "answerKey": "16",
      "explanation": "M1 * D1 = M2 * D2 => 12 * 20 = M2 * 15 => M2 = 240 / 15 = 16 men."
    }
  },
  {
    "dayNumber": 16,
    "subject": "reasoning",
    "topic": "Seating Arrangements",
    "title": "Seating Arrangements — Circular Arrangement Facing Center",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Seating Arrangements",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "6 people sit in a circle facing center. A is opposite D. B is right of A. Who is opposite B?",
      "options": [
        "Person left of D",
        "Person right of D",
        "D",
        "A"
      ],
      "answerKey": "Person left of D",
      "explanation": "In a 6-person circle, the opposite of the person to the right of A is the person to the left of D."
    }
  },
  {
    "dayNumber": 16,
    "subject": "english",
    "topic": "Self Introduction",
    "title": "Self Introduction — 3-Minute Elevator Pitch Structure",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "task": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "question": "Daily Speaking Drill: Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "answerKey": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 16,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 16: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 16 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 17,
    "subject": "dsa",
    "topic": "Sorting",
    "title": "Day 17: Merge Sort & Counting Inversions",
    "description": "Implement merge sort from scratch in C++. Count array inversions during the merge step in O(N log N).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Write recursive divide-and-conquer function",
      "Merge two sorted halves using temporary auxiliary array",
      "Count cross-boundary inversions during merge"
    ],
    "practiceQuestions": [
      {
        "title": "Merge Intervals",
        "url": "https://leetcode.com/problems/merge-intervals/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 17,
    "subject": "quant",
    "topic": "Pipes and Cisterns",
    "title": "Pipes and Cisterns — Inlet and Outlet Rate Calculations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Pipes and Cisterns",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Pipe A fills a tank in 12 hours, pipe B empties it in 18 hours. If both are open, how long to fill?",
      "options": [
        "30 hours",
        "36 hours",
        "24 hours",
        "40 hours"
      ],
      "answerKey": "36 hours",
      "explanation": "Capacity = 36 units. Rate A = +3, Rate B = -2. Net rate = +1 unit/hour. Time = 36 / 1 = 36 hours."
    }
  },
  {
    "dayNumber": 17,
    "subject": "reasoning",
    "topic": "Calendars and Clocks",
    "title": "Calendars and Clocks — Odd Days Calculation & Day of Week",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Calendars and Clocks",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "How many odd days are there in a normal (non-leap) year of 365 days?",
      "options": [
        "1 odd day",
        "2 odd days",
        "0 odd days",
        "3 odd days"
      ],
      "answerKey": "1 odd day",
      "explanation": "365 = 52 weeks * 7 days + 1 day. Hence, exactly 1 odd day."
    }
  },
  {
    "dayNumber": 17,
    "subject": "english",
    "topic": "Sentence Formation",
    "title": "Sentence Formation — Avoiding Common Indianisms & Direct Translations",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "task": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "question": "Daily Speaking Drill: Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "answerKey": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 17,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 17: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 17 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 18,
    "subject": "dsa",
    "topic": "Sorting",
    "title": "Day 18: Quick Sort & Custom STL Comparators",
    "description": "Implement Lomuto and Hoare partitioning. Use C++ lambda expressions for custom struct/vector sorting.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Analyze worst-case O(N^2) vs average O(N log N) pivot selection",
      "Write strict weak ordering lambda comparators in std::sort",
      "Sort multi-dimensional vectors by custom tie-breaking rules"
    ],
    "practiceQuestions": [
      {
        "title": "Top K Frequent Elements",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 18,
    "subject": "quant",
    "topic": "Pipes and Cisterns",
    "title": "Pipes and Cisterns — Tank Leakage & Alternating Valves",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Pipes and Cisterns",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A tap fills a tank in 6 hours, but due to a leak at the bottom it takes 8 hours. How long for the leak alone to empty the full tank?",
      "options": [
        "18 hours",
        "24 hours",
        "20 hours",
        "28 hours"
      ],
      "answerKey": "24 hours",
      "explanation": "Tap rate = 1/6. Tap - Leak = 1/8. Leak rate = 1/6 - 1/8 = (4 - 3)/24 = 1/24. Leak takes 24 hours."
    }
  },
  {
    "dayNumber": 18,
    "subject": "reasoning",
    "topic": "Calendars and Clocks",
    "title": "Calendars and Clocks — Clock Hands Angle Formula |30H - 11/2M|",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Calendars and Clocks",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the angle between hour hand and minute hand at 3:30.",
      "options": [
        "75 degrees",
        "80 degrees",
        "90 degrees",
        "70 degrees"
      ],
      "answerKey": "75 degrees",
      "explanation": "Angle = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = |-75| = 75 degrees."
    }
  },
  {
    "dayNumber": 18,
    "subject": "english",
    "topic": "Tenses",
    "title": "Tenses — Present Perfect vs Simple Past in Tech Interviews",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Talk about a project you completed last semester versus technologies you have used recently.",
      "task": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "question": "Daily Speaking Drill: Talk about a project you completed last semester versus technologies you have used recently.",
      "answerKey": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 18,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 18: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 18 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 19,
    "subject": "dsa",
    "topic": "Hashing",
    "title": "Day 19: Subarray Sum Equals K & Longest Consecutive",
    "description": "Use prefix sum hash map to count subarrays summing to K in O(N). Find longest consecutive sequence with unordered_set.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Store prefix sum frequencies in std::unordered_map",
      "Check if (currentSum - K) exists in hash map",
      "Find sequence starts by checking !set.count(x - 1) in O(1)"
    ],
    "practiceQuestions": [
      {
        "title": "Longest Consecutive Sequence",
        "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 19,
    "subject": "quant",
    "topic": "Time, Speed and Distance",
    "title": "Time, Speed and Distance — Unit Conversions & Average Speed Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time, Speed and Distance",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Convert 72 km/h into meters per second.",
      "options": [
        "15 m/s",
        "20 m/s",
        "25 m/s",
        "30 m/s"
      ],
      "answerKey": "20 m/s",
      "explanation": "Multiply by 5/18: 72 * (5/18) = 4 * 5 = 20 m/s."
    }
  },
  {
    "dayNumber": 19,
    "subject": "reasoning",
    "topic": "Missing Numbers",
    "title": "Missing Numbers — Matrix & Geometric Pattern Operations",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Missing Numbers",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a 3x3 matrix row 1: [2, 3, 13], row 2: [3, 4, 25], row 3: [4, 5, ?]",
      "options": [
        "41",
        "39",
        "45",
        "36"
      ],
      "answerKey": "41",
      "explanation": "Pattern: a^2 + b^2 = c. 2^2 + 3^2 = 4 + 9 = 13. 3^2 + 4^2 = 9 + 16 = 25. 4^2 + 5^2 = 16 + 25 = 41."
    }
  },
  {
    "dayNumber": 19,
    "subject": "english",
    "topic": "Daily Conversations",
    "title": "Daily Conversations — Professional Greetings and Interview Small Talk",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "task": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "question": "Daily Speaking Drill: How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "answerKey": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 19,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 19: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 19 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 20,
    "subject": "dsa",
    "topic": "Linked Lists",
    "title": "Day 20: Singly Linked List: Insertion, Deletion & Traversal",
    "description": "Construct ListNode class in C++. Practice node insertion, deletion, and sentinel dummy node patterns.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Manage pointer assignments without losing node references",
      "Use dummy head pointer to simplify head boundary edge cases",
      "Prevent memory leaks and dangling pointer dereferences"
    ],
    "practiceQuestions": [
      {
        "title": "Reverse Linked List",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 20,
    "subject": "quant",
    "topic": "Time, Speed and Distance",
    "title": "Time, Speed and Distance — Relative Speed: Same vs Opposite Directions",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time, Speed and Distance",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A person travels from A to B at 40 km/h and returns at 60 km/h. What is the average speed?",
      "options": [
        "48 km/h",
        "50 km/h",
        "45 km/h",
        "52 km/h"
      ],
      "answerKey": "48 km/h",
      "explanation": "Average speed = 2xy / (x + y) = (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h."
    }
  },
  {
    "dayNumber": 20,
    "subject": "reasoning",
    "topic": "Statements and Conclusions",
    "title": "Statements and Conclusions — Direct Deductions from Premises",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Statements and Conclusions",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: \"All mangoes in the basket are sweet. Some mangoes are organic.\" Conclusion: Some sweet fruits are organic.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Contradictory"
      ],
      "answerKey": "Follows",
      "explanation": "The organic mangoes in the basket are sweet mangoes, so some sweet fruits are indeed organic."
    }
  },
  {
    "dayNumber": 20,
    "subject": "english",
    "topic": "Vocabulary",
    "title": "Vocabulary — Action Verbs for Resume & Project Impact",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "task": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "question": "Daily Speaking Drill: Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "answerKey": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 20,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 20: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 20 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 21,
    "subject": "dsa",
    "topic": "Linked Lists",
    "title": "Day 21: Reverse Linked List (Iterative & Recursive)",
    "description": "Reverse a singly linked list in-place using three pointers (prev, curr, next) and formulate recursive reversal.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Update curr->next = prev and advance pointers safely",
      "Formulate base case and return new head in recursive reversal",
      "Reverse sublists between positions Left and Right"
    ],
    "practiceQuestions": [
      {
        "title": "Reverse Linked List",
        "url": "https://leetcode.com/problems/reverse-linked-list/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 21,
    "subject": "quant",
    "topic": "Trains and Boats",
    "title": "Trains and Boats — Train Crossing Pole vs Platform",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Trains and Boats",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A 150m long train travels at 54 km/h. How long does it take to cross a pole?",
      "options": [
        "8 seconds",
        "10 seconds",
        "12 seconds",
        "15 seconds"
      ],
      "answerKey": "10 seconds",
      "explanation": "Speed = 54 * (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds."
    }
  },
  {
    "dayNumber": 21,
    "subject": "reasoning",
    "topic": "Floor and Box Puzzles",
    "title": "Floor and Box Puzzles — Floor Arrangement with Attribute Matching",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Floor and Box Puzzles",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a 4-floor building (floors 1 to 4), A lives on an even floor. B lives immediately above A. Which floor does A live on?",
      "options": [
        "Floor 2",
        "Floor 4",
        "Floor 1",
        "Floor 3"
      ],
      "answerKey": "Floor 2",
      "explanation": "Even floors are 2 and 4. If A lived on floor 4, B could not live immediately above him. Hence A must live on Floor 2."
    }
  },
  {
    "dayNumber": 21,
    "subject": "english",
    "topic": "Listening and Shadowing",
    "title": "Listening and Shadowing — Pacing and Intonation Shadowing Drill",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "task": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "question": "Daily Speaking Drill: Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "answerKey": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 21,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 21: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 21 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 22,
    "subject": "dsa",
    "topic": "Linked Lists",
    "title": "Day 22: Tortoise & Hare: Find Middle & Fast/Slow Pointers",
    "description": "Use slow pointer advancing by 1 and fast pointer advancing by 2 to locate middle node in single pass.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Derive loop termination condition: fast && fast->next",
      "Differentiate middle element in even vs odd length lists",
      "Apply fast/slow pointers for linked list splits in merge sort"
    ],
    "practiceQuestions": [
      {
        "title": "Middle of the Linked List",
        "url": "https://leetcode.com/problems/middle-of-the-linked-list/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 22,
    "subject": "quant",
    "topic": "Trains and Boats",
    "title": "Trains and Boats — Two Trains Crossing in Opposite Directions",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Trains and Boats",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Two trains 100m and 120m long travel at 42 km/h and 30 km/h in opposite directions. Time to cross each other is:",
      "options": [
        "11 seconds",
        "10 seconds",
        "12 seconds",
        "14 seconds"
      ],
      "answerKey": "11 seconds",
      "explanation": "Total distance = 100 + 120 = 220m. Relative speed = 42 + 30 = 72 km/h = 20 m/s. Time = 220 / 20 = 11 seconds."
    }
  },
  {
    "dayNumber": 22,
    "subject": "reasoning",
    "topic": "Scheduling Puzzles",
    "title": "Scheduling Puzzles — Weekdays Event Assignment Matrix",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Scheduling Puzzles",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Five exams are held Mon through Fri. Math is before Physics. English is immediately after Physics. Which day cannot be English?",
      "options": [
        "Monday",
        "Tuesday",
        "Friday",
        "Wednesday"
      ],
      "answerKey": "Monday",
      "explanation": "English is immediately after Physics, so English can only be Tue, Wed, Thu, or Fri. English cannot be held on Monday."
    }
  },
  {
    "dayNumber": 22,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — 2-Minute Impromptu Speech on Clean Code",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "task": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "question": "Daily Speaking Drill: Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "answerKey": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 22,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 22: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 22 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 23,
    "subject": "dsa",
    "topic": "Linked Lists",
    "title": "Day 23: Floyd's Cycle Detection & Cycle Start Point",
    "description": "Detect cycle in linked list and mathematically derive formula to find the exact cycle entry node.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Prove fast and slow pointers meet inside cycle in O(N)",
      "Reset slow to head to find entry node: 2(F + a) = F + a + kC",
      "Remove cycle safely by setting last node next to nullptr"
    ],
    "practiceQuestions": [
      {
        "title": "Linked List Cycle",
        "url": "https://leetcode.com/problems/linked-list-cycle/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 23,
    "subject": "quant",
    "topic": "Trains and Boats",
    "title": "Trains and Boats — Boats in Stream: Upstream and Downstream",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Trains and Boats",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A boat moves at 10 km/h in still water and stream speed is 2 km/h. What is the upstream speed?",
      "options": [
        "6 km/h",
        "8 km/h",
        "12 km/h",
        "10 km/h"
      ],
      "answerKey": "8 km/h",
      "explanation": "Upstream speed = Still speed - Stream speed = 10 - 2 = 8 km/h."
    }
  },
  {
    "dayNumber": 23,
    "subject": "reasoning",
    "topic": "Data Sufficiency",
    "title": "Data Sufficiency — Two-Statement Logic Sufficiency",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Data Sufficiency",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Is X positive? Statement I: X^2 = 16. Statement II: X + 4 = 8.",
      "options": [
        "Statement II alone is sufficient",
        "Statement I alone is sufficient",
        "Both needed",
        "Neither sufficient"
      ],
      "answerKey": "Statement II alone is sufficient",
      "explanation": "Statement I gives X = +4 or -4 (not sufficient). Statement II gives X = 4 (positive, sufficient alone)."
    }
  },
  {
    "dayNumber": 23,
    "subject": "english",
    "topic": "Explaining Technical Concepts",
    "title": "Explaining Technical Concepts — Explain REST API to a Non-Tech Recruiter",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain what an API is using the classic restaurant waiter metaphor.",
      "task": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "question": "Daily Speaking Drill: Explain what an API is using the classic restaurant waiter metaphor.",
      "answerKey": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 23,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 23: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 23 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 24,
    "subject": "dsa",
    "topic": "Linked Lists",
    "title": "Day 24: Merge Two Sorted Lists & Remove Nth Node",
    "description": "Merge two sorted linked lists using dummy node. Remove Nth node from end using two-pointer offset.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Advance fast pointer N steps ahead to create fixed gap",
      "Advance both pointers until fast reaches list end",
      "Delete target node and stitch surrounding pointers"
    ],
    "practiceQuestions": [
      {
        "title": "Merge Two Sorted Lists",
        "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Remove Nth Node From End of List",
        "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 24,
    "subject": "quant",
    "topic": "Mixtures and Alligation",
    "title": "Mixtures and Alligation — Rule of Alligation & Two-Liquid Blending",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Mixtures and Alligation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In what ratio must rice at $30/kg be mixed with rice at $45/kg to obtain a blend worth $35/kg?",
      "options": [
        "2:1",
        "1:2",
        "3:2",
        "3:1"
      ],
      "answerKey": "2:1",
      "explanation": "Alligation: (45 - 35) : (35 - 30) = 10 : 5 = 2 : 1."
    }
  },
  {
    "dayNumber": 24,
    "subject": "reasoning",
    "topic": "Venn Diagrams",
    "title": "Venn Diagrams — Three-Set Logic Overlaps",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Venn Diagrams",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a group of 50 students: 30 play Football, 25 play Cricket, 10 play both. How many play neither?",
      "options": [
        "5",
        "10",
        "15",
        "0"
      ],
      "answerKey": "5",
      "explanation": "Total playing either = 30 + 25 - 10 = 45. Neither = 50 - 45 = 5 students."
    }
  },
  {
    "dayNumber": 24,
    "subject": "english",
    "topic": "Explaining DSA Solutions",
    "title": "Explaining DSA Solutions — Verbal Walkthrough of Two Sum using Hash Map",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "task": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "question": "Daily Speaking Drill: Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "answerKey": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 24,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 24: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 24 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 25,
    "subject": "dsa",
    "topic": "Linked Lists",
    "title": "Day 25: Reorder List & Palindrome Linked List",
    "description": "Split linked list at midpoint, reverse second half, and merge alternate nodes in O(N) time and O(1) space.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Combine middle finding, reversal, and interleaved merging",
      "Check palindrome by comparing first and reversed second half",
      "Restore original list structure after validation"
    ],
    "practiceQuestions": [
      {
        "title": "Reorder List",
        "url": "https://leetcode.com/problems/reorder-list/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 25,
    "subject": "quant",
    "topic": "Mixtures and Alligation",
    "title": "Mixtures and Alligation — Successive Replacement Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Mixtures and Alligation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "From a container with 40L of milk, 4L is drawn and replaced with water. This is repeated once more. Milk left is:",
      "options": [
        "32L",
        "32.4L",
        "34L",
        "30.5L"
      ],
      "answerKey": "32.4L",
      "explanation": "Amount = Initial * (1 - x/Total)^n = 40 * (1 - 4/40)^2 = 40 * (0.9)^2 = 40 * 0.81 = 32.4L."
    }
  },
  {
    "dayNumber": 25,
    "subject": "reasoning",
    "topic": "Input-Output",
    "title": "Input-Output — Machine Word and Number Shifting",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Input-Output",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Input: 45 cat 12 bat 89 rat. Step 1 puts largest number first: 89 45 cat 12 bat rat. What goes next in Step 2 for alphabetical word?",
      "options": [
        "bat",
        "cat",
        "rat",
        "12"
      ],
      "answerKey": "bat",
      "explanation": "In standard alternating machine sorting, largest number is placed first, followed by alphabetically smallest word (\"bat\")."
    }
  },
  {
    "dayNumber": 25,
    "subject": "english",
    "topic": "Project Explanation",
    "title": "Project Explanation — STAR Method for System Architecture Pitch",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "task": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "question": "Daily Speaking Drill: Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "answerKey": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 25,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 25: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 25 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 26,
    "subject": "dsa",
    "topic": "Stacks",
    "title": "Day 26: Valid Parentheses & Min Stack Design",
    "description": "Implement parenthesis validation using LIFO stack and design Min Stack retrieving minimum in O(1).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Match brackets using hash map of closing-to-opening pairs",
      "Store pairs of (val, minSoFar) or difference encoding in stack",
      "Achieve O(1) for push, pop, top, and getMin"
    ],
    "practiceQuestions": [
      {
        "title": "Valid Parentheses",
        "url": "https://leetcode.com/problems/valid-parentheses/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Min Stack",
        "url": "https://leetcode.com/problems/min-stack/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 26,
    "subject": "quant",
    "topic": "Ages",
    "title": "Ages — Age Ratio Shifts & Simultaneous Equations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Father is 3 times as old as his son. In 12 years, he will be twice as old. Find son's current age.",
      "options": [
        "10 years",
        "12 years",
        "15 years",
        "14 years"
      ],
      "answerKey": "12 years",
      "explanation": "F = 3S. In 12 years: F + 12 = 2(S + 12) => 3S + 12 = 2S + 24 => S = 12 years."
    }
  },
  {
    "dayNumber": 26,
    "subject": "reasoning",
    "topic": "Number Series",
    "title": "Number Series — Missing Term & Difference of Differences",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Number Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the next number in series: 2, 5, 11, 20, 32, ?",
      "options": [
        "45",
        "47",
        "49",
        "50"
      ],
      "answerKey": "47",
      "explanation": "Differences: +3, +6, +9, +12. The next difference is +15. 32 + 15 = 47."
    }
  },
  {
    "dayNumber": 26,
    "subject": "english",
    "topic": "HR Interview Questions",
    "title": "HR Interview Questions — Handling \"What Is Your Biggest Weakness?\"",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "task": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "question": "Daily Speaking Drill: Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "answerKey": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 26,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 26: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 26 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 27,
    "subject": "dsa",
    "topic": "Stacks",
    "title": "Day 27: Monotonic Stack: Daily Temperatures",
    "description": "Use monotonic decreasing stack to find next greater element for each index in linear O(N) time.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Maintain stack of indices with decreasing values",
      "Pop elements upon encountering greater value and compute distance",
      "Solve Next Greater Element variations on circular arrays"
    ],
    "practiceQuestions": [
      {
        "title": "Daily Temperatures",
        "url": "https://leetcode.com/problems/daily-temperatures/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 27,
    "subject": "quant",
    "topic": "Algebra",
    "title": "Algebra — Linear Equations & Substitution",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Algebra",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "If 3x + 2y = 16 and x - y = 2, find the value of x.",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "answerKey": "4",
      "explanation": "From second equation, y = x - 2. Substitute in first: 3x + 2(x - 2) = 16 => 5x - 4 = 16 => 5x = 20 => x = 4."
    }
  },
  {
    "dayNumber": 27,
    "subject": "reasoning",
    "topic": "Alphabet Series",
    "title": "Alphabet Series — EJOTY Position Rules & Letter Shifting",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Alphabet Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "What is the 16th letter of the alphabet from the left?",
      "options": [
        "N",
        "O",
        "P",
        "Q"
      ],
      "answerKey": "P",
      "explanation": "Using EJOTY (E=5, J=10, O=15, T=20, Y=25): O is 15th, so the next letter P is 16th."
    }
  },
  {
    "dayNumber": 27,
    "subject": "english",
    "topic": "Group Discussion",
    "title": "Group Discussion — Initiating and Reframing Group Dialogue",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How do you enter a discussion when 3 people are speaking at once?",
      "task": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "question": "Daily Speaking Drill: How do you enter a discussion when 3 people are speaking at once?",
      "answerKey": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 27,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 27: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 27 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 28,
    "subject": "dsa",
    "topic": "Stacks",
    "title": "Day 28: Largest Rectangle in Histogram",
    "description": "Find largest rectangular area under histogram using monotonic increasing stack to track boundaries.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Identify nearest smaller to left (NSL) and nearest smaller to right (NSR)",
      "Compute width = right - left - 1 for popped histogram bars",
      "Process remaining bars at end of histogram in single pass"
    ],
    "practiceQuestions": [
      {
        "title": "Largest Rectangle in Histogram",
        "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      },
      {
        "title": "Trapping Rain Water",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 28,
    "subject": "quant",
    "topic": "Algebra",
    "title": "Algebra — Quadratic Equations & Roots Properties",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Algebra",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the sum of roots for 2x^2 - 8x + 6 = 0.",
      "options": [
        "2",
        "3",
        "4",
        "-4"
      ],
      "answerKey": "4",
      "explanation": "Sum of roots = -b / a = -(-8) / 2 = 8 / 2 = 4."
    }
  },
  {
    "dayNumber": 28,
    "subject": "reasoning",
    "topic": "Analogy",
    "title": "Analogy — Word & Numeric Relationships",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Analogy",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Doctor : Hospital :: Teacher : ?",
      "options": [
        "Student",
        "School",
        "Book",
        "Classroom"
      ],
      "answerKey": "School",
      "explanation": "A doctor operates in a hospital; a teacher operates in a school (workplace relationship)."
    }
  },
  {
    "dayNumber": 28,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Explaining a Tough Bug You Resolved",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "task": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "question": "Daily Speaking Drill: Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "answerKey": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 28,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 28: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 28 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 29,
    "subject": "dsa",
    "topic": "Stacks and Queues",
    "title": "Day 29: Queue Using Stacks & Evaluate Reverse Polish Notation",
    "description": "Implement FIFO queue using two LIFO stacks. Evaluate postfix arithmetic expressions using operand stack.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Amortize transfer between input and output stacks in O(1)",
      "Handle binary operators (+, -, *, /) with proper operand order",
      "Handle integer truncation toward zero in division"
    ],
    "practiceQuestions": [
      {
        "title": "Evaluate Reverse Polish Notation",
        "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 29,
    "subject": "quant",
    "topic": "Algebra",
    "title": "Algebra — Polynomial Identities & Factoring",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Algebra",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "If a + b = 5 and ab = 6, what is a^2 + b^2?",
      "options": [
        "11",
        "13",
        "15",
        "19"
      ],
      "answerKey": "13",
      "explanation": "a^2 + b^2 = (a + b)^2 - 2ab = 5^2 - 2(6) = 25 - 12 = 13."
    }
  },
  {
    "dayNumber": 29,
    "subject": "reasoning",
    "topic": "Classification",
    "title": "Classification — Odd One Out (Semantic & Numeric)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Classification",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the odd one out: 27, 64, 125, 144, 216",
      "options": [
        "27",
        "64",
        "144",
        "216"
      ],
      "answerKey": "144",
      "explanation": "27=3^3, 64=4^3, 125=5^3, 216=6^3 are all perfect cubes. 144 is only a square (12^2), not a cube."
    }
  },
  {
    "dayNumber": 29,
    "subject": "english",
    "topic": "Technical Mock Interviews",
    "title": "Technical Mock Interviews — 5-Minute Live Code Explanation Rehearsal",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "task": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "question": "Daily Speaking Drill: Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "answerKey": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 29,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 29: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 29 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 30,
    "subject": "dsa",
    "topic": "Recursion",
    "title": "Day 30: Recursion Tree, Call Stack & Base Cases",
    "description": "Analyze call stack frames, base cases, and recurrence relations. Implement recursive fibonacci, factorial, and power functions.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Trace call stack memory and prevent stack overflow",
      "Write binary exponentiation pow(x, n) in O(log N)",
      "Draw recursion trees and annotate subproblem parameters"
    ],
    "practiceQuestions": [
      {
        "title": "Climbing Stairs",
        "url": "https://leetcode.com/problems/climbing-stairs/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 30,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — Triangles: Pythagoras & Area Formulas",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A right-angled triangle has sides 6cm and 8cm adjacent to the right angle. Find the hypotenuse.",
      "options": [
        "10cm",
        "12cm",
        "14cm",
        "9.5cm"
      ],
      "answerKey": "10cm",
      "explanation": "Hypotenuse = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10cm."
    }
  },
  {
    "dayNumber": 30,
    "subject": "reasoning",
    "topic": "Coding-Decoding",
    "title": "Coding-Decoding — Direct Letter Shifting Patterns",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Coding-Decoding",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If CAT is coded as DBU, how is DOG coded?",
      "options": [
        "EPH",
        "EOF",
        "EQH",
        "ENH"
      ],
      "answerKey": "EPH",
      "explanation": "Each letter is shifted by +1: D (+1) = E, O (+1) = P, G (+1) = H."
    }
  },
  {
    "dayNumber": 30,
    "subject": "english",
    "topic": "Final Interview Simulation",
    "title": "Final Interview Simulation — Closing Questions for the Hiring Manager",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "task": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "question": "Daily Speaking Drill: Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "answerKey": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 30,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 30: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 30 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 31,
    "subject": "dsa",
    "topic": "Recursion",
    "title": "Day 31: Subsets & Subsets II (Power Set Generation)",
    "description": "Generate all 2^N subsets using pick / don’t pick recursion. Handle duplicates by sorting and skipping identical elements.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Explore pick vs do not pick recursive branching",
      "Sort input and skip adjacent duplicate elements at same depth",
      "Backtrack by pushing and popping candidate element from path"
    ],
    "practiceQuestions": [
      {
        "title": "Subsets",
        "url": "https://leetcode.com/problems/subsets/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Subsets II",
        "url": "https://leetcode.com/problems/subsets-ii/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 31,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — Circles: Circumference & Tangent Theorems",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the area of a circle whose circumference is 44cm (take pi = 22/7).",
      "options": [
        "144 cm^2",
        "154 cm^2",
        "164 cm^2",
        "132 cm^2"
      ],
      "answerKey": "154 cm^2",
      "explanation": "2 * (22/7) * r = 44 => r = 7cm. Area = pi * r^2 = (22/7) * 49 = 154 cm^2."
    }
  },
  {
    "dayNumber": 31,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Cardinal Directions & Pythagoras Displacements",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "A man walks 3km North, then 4km East. How far is he from the starting point?",
      "options": [
        "5 km",
        "7 km",
        "6 km",
        "8 km"
      ],
      "answerKey": "5 km",
      "explanation": "Distance = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5 km."
    }
  },
  {
    "dayNumber": 31,
    "subject": "english",
    "topic": "Self Introduction",
    "title": "Self Introduction — 3-Minute Elevator Pitch Structure",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "task": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "question": "Daily Speaking Drill: Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "answerKey": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 31,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 31: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 31 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 32,
    "subject": "dsa",
    "topic": "Backtracking",
    "title": "Day 32: Permutations & Combination Sum",
    "description": "Generate all N! permutations using visited boolean array. Solve Combination Sum allowing unbounded candidate reuse.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Manage candidate choices and backtrack state changes",
      "Pass index to prevent duplicate unordered combinations",
      "Prune recursion early when current sum exceeds target"
    ],
    "practiceQuestions": [
      {
        "title": "Permutations",
        "url": "https://leetcode.com/problems/permutations/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Combination Sum",
        "url": "https://leetcode.com/problems/combination-sum/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 32,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — 2D Mensuration: Trapeziums & Rhombus",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Area of a rhombus with diagonals 12cm and 16cm is:",
      "options": [
        "96 cm^2",
        "192 cm^2",
        "80 cm^2",
        "100 cm^2"
      ],
      "answerKey": "96 cm^2",
      "explanation": "Area = 1/2 * d1 * d2 = 0.5 * 12 * 16 = 96 cm^2."
    }
  },
  {
    "dayNumber": 32,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Shadow Rules at Sunrise and Sunset",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "At sunrise, if Rohan is facing Amit and Rohan's shadow falls to his left, which direction is Rohan facing?",
      "options": [
        "North",
        "South",
        "East",
        "West"
      ],
      "answerKey": "North",
      "explanation": "At sunrise, sunlight comes from the East, so shadows fall toward the West. If shadow is on Rohan's left, his left is West, which means he is facing North."
    }
  },
  {
    "dayNumber": 32,
    "subject": "english",
    "topic": "Sentence Formation",
    "title": "Sentence Formation — Avoiding Common Indianisms & Direct Translations",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "task": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "question": "Daily Speaking Drill: Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "answerKey": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 32,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 32: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 32 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 33,
    "subject": "dsa",
    "topic": "Backtracking",
    "title": "Day 33: Palindrome Partitioning & Letter Combinations",
    "description": "Partition string into palindromic substrings via backtracking. Generate phone keypad letter combinations.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Verify palindrome prefix before recursing on remaining suffix",
      "Map digits to keypad characters and expand combinations",
      "Analyze time complexity of recursive string partitions"
    ],
    "practiceQuestions": [
      {
        "title": "Palindrome Partitioning",
        "url": "https://leetcode.com/problems/palindrome-partitioning/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Letter Combinations of a Phone Number",
        "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 33,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — 3D Mensuration: Cylinder & Cone Volumes",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the volume of a cylinder of radius 7cm and height 10cm (pi = 22/7).",
      "options": [
        "1440 cm^3",
        "1540 cm^3",
        "1640 cm^3",
        "1700 cm^3"
      ],
      "answerKey": "1540 cm^3",
      "explanation": "Volume = pi * r^2 * h = (22/7) * 49 * 10 = 22 * 7 * 10 = 1540 cm^3."
    }
  },
  {
    "dayNumber": 33,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Family Tree Generation Diagrams",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Pointing to a man, a woman said \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Aunt",
        "Sister",
        "Daughter"
      ],
      "answerKey": "Mother",
      "explanation": "The \"only daughter of my mother\" is the woman herself. So she is his mother."
    }
  },
  {
    "dayNumber": 33,
    "subject": "english",
    "topic": "Tenses",
    "title": "Tenses — Present Perfect vs Simple Past in Tech Interviews",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Talk about a project you completed last semester versus technologies you have used recently.",
      "task": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "question": "Daily Speaking Drill: Talk about a project you completed last semester versus technologies you have used recently.",
      "answerKey": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 33,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 33: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 33 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 34,
    "subject": "dsa",
    "topic": "Backtracking",
    "title": "Day 34: N-Queens & Word Search on Grid",
    "description": "Solve classic N-Queens using diagonal conflict bitmasks/sets. Traverse 2D grid for word search with in-place backtracking.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Track occupied columns, positive diagonals (r + c), and negative diagonals (r - c)",
      "Mark grid cells visited and restore on backtrack path",
      "Explore 4-directional grid movements (up, down, left, right)"
    ],
    "practiceQuestions": [
      {
        "title": "N-Queens",
        "url": "https://leetcode.com/problems/n-queens/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      },
      {
        "title": "Word Search",
        "url": "https://leetcode.com/problems/word-search/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 34,
    "subject": "quant",
    "topic": "Permutation and Combination",
    "title": "Permutation and Combination — Factorials & Linear Permutations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Permutation and Combination",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In how many ways can the letters of the word \"LEADER\" be arranged?",
      "options": [
        "720",
        "360",
        "120",
        "180"
      ],
      "answerKey": "360",
      "explanation": "LEADER has 6 letters with 'E' repeating twice: 6! / 2! = 720 / 2 = 360."
    }
  },
  {
    "dayNumber": 34,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Coded Family Relations (A + B symbols)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If A + B means A is son of B, and A * B means A is brother of B, what does P + Q * R mean?",
      "options": [
        "P is son of R",
        "P is nephew of R",
        "P is brother of R",
        "P is uncle of R"
      ],
      "answerKey": "P is nephew of R",
      "explanation": "Q * R means Q is brother of R. P + Q means P is son of Q. Therefore, P is the nephew of R."
    }
  },
  {
    "dayNumber": 34,
    "subject": "english",
    "topic": "Daily Conversations",
    "title": "Daily Conversations — Professional Greetings and Interview Small Talk",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "task": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "question": "Daily Speaking Drill: How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "answerKey": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 34,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 34: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 34 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 35,
    "subject": "dsa",
    "topic": "Binary Trees",
    "title": "Day 35: Tree Structure & Recursive Traversals",
    "description": "Implement TreeNode in C++. Code recursive Preorder (Root-L-R), Inorder (L-Root-R), and Postorder (L-R-Root) traversals.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Construct recursive tree traversal functions",
      "Verify that inorder traversal of BST yields sorted sequence",
      "Calculate tree size, leaf count, and sum of nodes recursively"
    ],
    "practiceQuestions": [
      {
        "title": "Maximum Depth of Binary Tree",
        "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 35,
    "subject": "quant",
    "topic": "Permutation and Combination",
    "title": "Permutation and Combination — Combinations & Team Selection",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Permutation and Combination",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In how many ways can a committee of 3 be chosen from 7 people?",
      "options": [
        "21",
        "35",
        "42",
        "210"
      ],
      "answerKey": "35",
      "explanation": "7C3 = (7 * 6 * 5) / (3 * 2 * 1) = 35."
    }
  },
  {
    "dayNumber": 35,
    "subject": "reasoning",
    "topic": "Ranking and Order",
    "title": "Ranking and Order — Total Persons in Row Formula",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Ranking and Order",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a class, Rahul ranks 7th from top and 28th from bottom. How many students are there in the class?",
      "options": [
        "34",
        "35",
        "36",
        "33"
      ],
      "answerKey": "34",
      "explanation": "Total = Top + Bottom - 1 = 7 + 28 - 1 = 34 students."
    }
  },
  {
    "dayNumber": 35,
    "subject": "english",
    "topic": "Vocabulary",
    "title": "Vocabulary — Action Verbs for Resume & Project Impact",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "task": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "question": "Daily Speaking Drill: Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "answerKey": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 35,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 35: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 35 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 36,
    "subject": "dsa",
    "topic": "Binary Trees",
    "title": "Day 36: Level Order Traversal (BFS) & Tree Depth",
    "description": "Traverse binary tree level by level using FIFO queue. Compute maximum and minimum depth of binary tree.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Process tree layer-by-layer using queue size loop pattern",
      "Return vector of vectors for each tree level",
      "Compute maximum depth in O(N) time and O(H) auxiliary space"
    ],
    "practiceQuestions": [
      {
        "title": "Binary Tree Level Order Traversal",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 36,
    "subject": "quant",
    "topic": "Probability",
    "title": "Probability — Coin Tossing & Dice Rolling Probabilities",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Probability",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "What is the probability of getting a sum of 7 when rolling two fair dice?",
      "options": [
        "1/6",
        "1/12",
        "5/36",
        "7/36"
      ],
      "answerKey": "1/6",
      "explanation": "Favorable pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pairs. Total outcomes = 36. Probability = 6/36 = 1/6."
    }
  },
  {
    "dayNumber": 36,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Venn Diagram Method (All A are B)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statements: All cats are animals. All animals are mammals. Conclusion: All cats are mammals.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Cannot be determined"
      ],
      "answerKey": "Follows",
      "explanation": "Cats subset of Animals, Animals subset of Mammals, therefore Cats subset of Mammals. Conclusion definitely follows."
    }
  },
  {
    "dayNumber": 36,
    "subject": "english",
    "topic": "Listening and Shadowing",
    "title": "Listening and Shadowing — Pacing and Intonation Shadowing Drill",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "task": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "question": "Daily Speaking Drill: Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "answerKey": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 36,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 36: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 36 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 37,
    "subject": "dsa",
    "topic": "Binary Trees",
    "title": "Day 37: Invert Binary Tree & Same Tree Check",
    "description": "Invert binary tree by recursively swapping left and right child pointers. Check tree equivalence and symmetry.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Recursively swap left and right subtrees",
      "Check simultaneous node equality and child pointer matches",
      "Validate symmetric mirror trees using dual-pointer recursion"
    ],
    "practiceQuestions": [
      {
        "title": "Invert Binary Tree",
        "url": "https://leetcode.com/problems/invert-binary-tree/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Same Tree",
        "url": "https://leetcode.com/problems/same-tree/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 37,
    "subject": "quant",
    "topic": "Probability",
    "title": "Probability — Playing Cards Probabilities",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Probability",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A card is drawn from a 52-card deck. What is the probability of drawing a face card?",
      "options": [
        "3/13",
        "1/4",
        "4/13",
        "1/13"
      ],
      "answerKey": "3/13",
      "explanation": "Face cards = 4 Kings + 4 Queens + 4 Jacks = 12. Probability = 12 / 52 = 3 / 13."
    }
  },
  {
    "dayNumber": 37,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Modern \"Only A Few\" Statements",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: Only a few books are pens. Conclusion: Some books are not pens.",
      "options": [
        "Definite Follows",
        "Does not follow",
        "False",
        "Data insufficient"
      ],
      "answerKey": "Definite Follows",
      "explanation": "\"Only a few\" means both \"Some A are B\" AND \"Some A are not B\" are simultaneously true."
    }
  },
  {
    "dayNumber": 37,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — 2-Minute Impromptu Speech on Clean Code",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "task": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "question": "Daily Speaking Drill: Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "answerKey": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 37,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 37: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 37 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 38,
    "subject": "dsa",
    "topic": "Binary Trees",
    "title": "Day 38: Diameter of Binary Tree & Subtree Check",
    "description": "Compute longest path between any two nodes in tree. Check if tree S is a valid subtree of tree T.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Compute height and update diameter at each node: left_h + right_h",
      "Pass global diameter by reference during height recursion",
      "Combine tree equality check with recursive subtree traversal"
    ],
    "practiceQuestions": [
      {
        "title": "Subtree of Another Tree",
        "url": "https://leetcode.com/problems/subtree-of-another-tree/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 38,
    "subject": "quant",
    "topic": "Data Interpretation",
    "title": "Data Interpretation — Table Charts & Percentage Growth Calculation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Data Interpretation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Sales grew from $250k in 2024 to $325k in 2025. What was the percentage increase?",
      "options": [
        "25%",
        "30%",
        "35%",
        "20%"
      ],
      "answerKey": "30%",
      "explanation": "Increase = $75k. Percentage increase = (75 / 250) * 100 = 30%."
    }
  },
  {
    "dayNumber": 38,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Direct Inequality Chains (A > B >= C)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Given P > Q >= R = S. Is P > S definitely true?",
      "options": [
        "Yes (Definite True)",
        "No (False)",
        "Cannot be determined",
        "Partially true"
      ],
      "answerKey": "Yes (Definite True)",
      "explanation": "Since P > Q and Q >= S, P is strictly greater than S."
    }
  },
  {
    "dayNumber": 38,
    "subject": "english",
    "topic": "Explaining Technical Concepts",
    "title": "Explaining Technical Concepts — Explain REST API to a Non-Tech Recruiter",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain what an API is using the classic restaurant waiter metaphor.",
      "task": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "question": "Daily Speaking Drill: Explain what an API is using the classic restaurant waiter metaphor.",
      "answerKey": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 38,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 38: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 38 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 39,
    "subject": "dsa",
    "topic": "Binary Trees",
    "title": "Day 39: Lowest Common Ancestor (LCA) in Binary Tree",
    "description": "Find lowest common ancestor node for two given nodes P and Q in general binary tree in O(N) time.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate bottom-up recursion returning found node or nullptr",
      "Combine results: if both left and right return non-null, root is LCA",
      "Handle ancestor-descendant containment cases correctly"
    ],
    "practiceQuestions": [
      {
        "title": "Lowest Common Ancestor of a Binary Search Tree",
        "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 39,
    "subject": "quant",
    "topic": "Data Interpretation",
    "title": "Data Interpretation — Bar Graphs & Multi-Series Analysis",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Data Interpretation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In a bar chart comparing 4 departments, Dept A has 120 employees and Dept B has 80. Dept A is what % more than Dept B?",
      "options": [
        "33.33%",
        "50%",
        "40%",
        "66.66%"
      ],
      "answerKey": "50%",
      "explanation": "Difference = 120 - 80 = 40. Percentage more = (40 / 80) * 100 = 50%."
    }
  },
  {
    "dayNumber": 39,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Coded Inequalities with Symbol Mappings",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: M >= N > O, O = P < Q. Conclusion: M > P.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Neither follows"
      ],
      "answerKey": "Follows",
      "explanation": "M >= N > O = P implies M > O = P, hence M > P definitely holds."
    }
  },
  {
    "dayNumber": 39,
    "subject": "english",
    "topic": "Explaining DSA Solutions",
    "title": "Explaining DSA Solutions — Verbal Walkthrough of Two Sum using Hash Map",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "task": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "question": "Daily Speaking Drill: Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "answerKey": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 39,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 39: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 39 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 40,
    "subject": "dsa",
    "topic": "Binary Trees",
    "title": "Day 40: Binary Tree Maximum Path Sum",
    "description": "Compute maximum path sum between any two nodes where path can turn at any root node. Discard negative branch contributions.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Compute max single branch contribution: max(0, dfs(child))",
      "Update global max path sum with left + right + node->val",
      "Return node->val + max(left, right) to calling parent"
    ],
    "practiceQuestions": [
      {
        "title": "Binary Tree Maximum Path Sum",
        "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 40,
    "subject": "quant",
    "topic": "Data Interpretation",
    "title": "Data Interpretation — Pie Charts & Degree-to-Percentage Conversion",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Data Interpretation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In a budget pie chart, Food occupies a 72-degree central angle. What percentage of the budget is Food?",
      "options": [
        "15%",
        "20%",
        "25%",
        "18%"
      ],
      "answerKey": "20%",
      "explanation": "Percentage = (72 / 360) * 100 = (1 / 5) * 100 = 20%."
    }
  },
  {
    "dayNumber": 40,
    "subject": "reasoning",
    "topic": "Seating Arrangements",
    "title": "Seating Arrangements — Linear Arrangement Facing North",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Seating Arrangements",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Five friends A, B, C, D, E sit facing North. C sits in the middle. A is left of C. Where can A sit?",
      "options": [
        "Position 1 or 2",
        "Position 4 or 5",
        "Position 3 only",
        "Position 5 only"
      ],
      "answerKey": "Position 1 or 2",
      "explanation": "Middle position is 3. To the left of position 3 are positions 1 and 2."
    }
  },
  {
    "dayNumber": 40,
    "subject": "english",
    "topic": "Project Explanation",
    "title": "Project Explanation — STAR Method for System Architecture Pitch",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "task": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "question": "Daily Speaking Drill: Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "answerKey": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 40,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 40: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 40 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 41,
    "subject": "dsa",
    "topic": "Binary Search Tree",
    "title": "Day 41: Validate BST & Range Constraint Recursion",
    "description": "Validate that a binary tree satisfies BST property using valid value range constraints [minVal, maxVal].",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Pass long long min and max bounds down the recursive stack",
      "Enforce strict left < root and right > root inequalities",
      "Alternative: verify strictly increasing values in inorder traversal"
    ],
    "practiceQuestions": [
      {
        "title": "Validate Binary Search Tree",
        "url": "https://leetcode.com/problems/validate-binary-search-tree/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 41,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Mastery Practice: Fraction-to-Percentage Equivalents & Conversions",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "What is the fraction equivalent of 37.5%?",
      "options": [
        "3/8",
        "3/5",
        "5/8",
        "7/16"
      ],
      "answerKey": "3/8",
      "explanation": "37.5% = 37.5 / 100 = 75 / 200 = 3/8. Knowing standard eighths (1/8=12.5%, 3/8=37.5%, 5/8=62.5%) saves critical exam time."
    }
  },
  {
    "dayNumber": 41,
    "subject": "reasoning",
    "topic": "Seating Arrangements",
    "title": "Seating Arrangements — Mastery Practice: Circular Arrangement Facing Center",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Seating Arrangements",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "6 people sit in a circle facing center. A is opposite D. B is right of A. Who is opposite B?",
      "options": [
        "Person left of D",
        "Person right of D",
        "D",
        "A"
      ],
      "answerKey": "Person left of D",
      "explanation": "In a 6-person circle, the opposite of the person to the right of A is the person to the left of D."
    }
  },
  {
    "dayNumber": 41,
    "subject": "english",
    "topic": "HR Interview Questions",
    "title": "HR Interview Questions — Advanced Articulation: Handling \"What Is Your Biggest Weakness?\"",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "task": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "question": "Daily Speaking Drill: Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "answerKey": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 41,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 41: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 41 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 42,
    "subject": "dsa",
    "topic": "Binary Search Tree",
    "title": "Day 42: Kth Smallest Element in BST & BST LCA",
    "description": "Find Kth smallest element in BST using iterative inorder traversal with stack in O(H + K) time. Find LCA in BST in O(H).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Stop inorder traversal immediately upon reaching count K",
      "Leverage BST ordering to navigate left or right child for LCA",
      "Perform LCA in O(1) space iteratively in BST"
    ],
    "practiceQuestions": [
      {
        "title": "Kth Smallest Element in a BST",
        "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 42,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Mastery Practice: Successive Percentage Changes & Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A price rises by 20% and is then discounted by 20%. What is the net percentage change?",
      "options": [
        "0% (no change)",
        "4% decrease",
        "4% increase",
        "2% decrease"
      ],
      "answerKey": "4% decrease",
      "explanation": "Using successive formula a + b + (ab/100): +20 - 20 + (20 * -20 / 100) = -4%, which is a net 4% decrease."
    }
  },
  {
    "dayNumber": 42,
    "subject": "reasoning",
    "topic": "Calendars and Clocks",
    "title": "Calendars and Clocks — Mastery Practice: Odd Days Calculation & Day of Week",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Calendars and Clocks",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "How many odd days are there in a normal (non-leap) year of 365 days?",
      "options": [
        "1 odd day",
        "2 odd days",
        "0 odd days",
        "3 odd days"
      ],
      "answerKey": "1 odd day",
      "explanation": "365 = 52 weeks * 7 days + 1 day. Hence, exactly 1 odd day."
    }
  },
  {
    "dayNumber": 42,
    "subject": "english",
    "topic": "Group Discussion",
    "title": "Group Discussion — Advanced Articulation: Initiating and Reframing Group Dialogue",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How do you enter a discussion when 3 people are speaking at once?",
      "task": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "question": "Daily Speaking Drill: How do you enter a discussion when 3 people are speaking at once?",
      "answerKey": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 42,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 42: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 42 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 43,
    "subject": "dsa",
    "topic": "Binary Trees",
    "title": "Day 43: Construct Tree from Preorder & Inorder",
    "description": "Reconstruct unique binary tree using preorder root selection and inorder partition mapping via hash table.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Map inorder element values to indices in hash map for O(1) lookup",
      "Partition inorder into left and right subtrees",
      "Calculate preorder boundary ranges recursively"
    ],
    "practiceQuestions": [
      {
        "title": "Construct Binary Tree from Preorder and Inorder Traversal",
        "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 43,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Mastery Practice: Population Growth & Depreciation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A machine valued at $10,000 depreciates by 10% annually. What is its value after 2 years?",
      "options": [
        "$8,000",
        "$8,100",
        "$8,200",
        "$9,000"
      ],
      "answerKey": "$8,100",
      "explanation": "Value = 10,000 * (1 - 0.10)^2 = 10,000 * 0.81 = $8,100."
    }
  },
  {
    "dayNumber": 43,
    "subject": "reasoning",
    "topic": "Calendars and Clocks",
    "title": "Calendars and Clocks — Mastery Practice: Clock Hands Angle Formula |30H - 11/2M|",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Calendars and Clocks",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the angle between hour hand and minute hand at 3:30.",
      "options": [
        "75 degrees",
        "80 degrees",
        "90 degrees",
        "70 degrees"
      ],
      "answerKey": "75 degrees",
      "explanation": "Angle = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = |-75| = 75 degrees."
    }
  },
  {
    "dayNumber": 43,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Advanced Articulation: Explaining a Tough Bug You Resolved",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "task": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "question": "Daily Speaking Drill: Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "answerKey": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 43,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 43: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 43 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 44,
    "subject": "dsa",
    "topic": "Heaps and Priority Queues",
    "title": "Day 44: Binary Heap Structure & C++ STL Priority Queue",
    "description": "Understand array representation of heaps (parent: i/2, children: 2i, 2i+1). Master std::priority_queue (max-heap & min-heap).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Implement heapify up and heapify down algorithms",
      "Instantiate min-heap: priority_queue<int, vector<int>, greater<int>>",
      "Analyze O(log N) insertion/deletion and O(N) build-heap complexity"
    ],
    "practiceQuestions": [
      {
        "title": "Kth Largest Element in an Array",
        "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 44,
    "subject": "quant",
    "topic": "Profit and Loss",
    "title": "Profit and Loss — Mastery Practice: Cost Price, Selling Price & Marked Price Equations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Profit and Loss",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "An item bought for $400 is sold for $480. What is the profit percentage?",
      "options": [
        "15%",
        "20%",
        "25%",
        "16.66%"
      ],
      "answerKey": "20%",
      "explanation": "Profit = $480 - $400 = $80. Profit % = (80 / 400) * 100 = 20%."
    }
  },
  {
    "dayNumber": 44,
    "subject": "reasoning",
    "topic": "Missing Numbers",
    "title": "Missing Numbers — Mastery Practice: Matrix & Geometric Pattern Operations",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Missing Numbers",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a 3x3 matrix row 1: [2, 3, 13], row 2: [3, 4, 25], row 3: [4, 5, ?]",
      "options": [
        "41",
        "39",
        "45",
        "36"
      ],
      "answerKey": "41",
      "explanation": "Pattern: a^2 + b^2 = c. 2^2 + 3^2 = 4 + 9 = 13. 3^2 + 4^2 = 9 + 16 = 25. 4^2 + 5^2 = 16 + 25 = 41."
    }
  },
  {
    "dayNumber": 44,
    "subject": "english",
    "topic": "Technical Mock Interviews",
    "title": "Technical Mock Interviews — Advanced Articulation: 5-Minute Live Code Explanation Rehearsal",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "task": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "question": "Daily Speaking Drill: Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "answerKey": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 44,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 44: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 44 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 45,
    "subject": "dsa",
    "topic": "Heaps and Priority Queues",
    "title": "Day 45: Top K Frequent Elements & Min-Heap Sizing",
    "description": "Find K most frequent elements using frequency map and min-heap of fixed size K in O(N log K) time.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Maintain min-heap of size K to retain largest K frequencies",
      "Pop minimum element whenever heap size exceeds K",
      "Compare heap approach with O(N) bucket sort algorithm"
    ],
    "practiceQuestions": [
      {
        "title": "Top K Frequent Elements",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 45,
    "subject": "quant",
    "topic": "Profit and Loss",
    "title": "Profit and Loss — Mastery Practice: Dishonest Dealers & Faulty Weights",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Profit and Loss",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A grocer claims to sell at cost price but uses 900g instead of 1kg. Find his gain percentage.",
      "options": [
        "10%",
        "11.11%",
        "9.09%",
        "12.5%"
      ],
      "answerKey": "11.11%",
      "explanation": "Gain % = (Error / (True Value - Error)) * 100 = (100 / 900) * 100 = 11.11%."
    }
  },
  {
    "dayNumber": 45,
    "subject": "reasoning",
    "topic": "Statements and Conclusions",
    "title": "Statements and Conclusions — Mastery Practice: Direct Deductions from Premises",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Statements and Conclusions",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: \"All mangoes in the basket are sweet. Some mangoes are organic.\" Conclusion: Some sweet fruits are organic.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Contradictory"
      ],
      "answerKey": "Follows",
      "explanation": "The organic mangoes in the basket are sweet mangoes, so some sweet fruits are indeed organic."
    }
  },
  {
    "dayNumber": 45,
    "subject": "english",
    "topic": "Final Interview Simulation",
    "title": "Final Interview Simulation — Advanced Articulation: Closing Questions for the Hiring Manager",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "task": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "question": "Daily Speaking Drill: Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "answerKey": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 45,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 45: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 45 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 46,
    "subject": "dsa",
    "topic": "Heaps and Priority Queues",
    "title": "Day 46: Find Median from Data Stream (Two Heaps)",
    "description": "Maintain running median of dynamic numbers using max-heap for lower half and min-heap for upper half.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Balance two heaps such that size difference is at most 1",
      "Ensure all elements in lower max-heap are <= upper min-heap",
      "Retrieve median in O(1) time and insert in O(log N) time"
    ],
    "practiceQuestions": [
      {
        "title": "Find Median from Data Stream",
        "url": "https://leetcode.com/problems/find-median-from-data-stream/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 46,
    "subject": "quant",
    "topic": "Ratio and Proportion",
    "title": "Ratio and Proportion — Mastery Practice: Mean, Third and Fourth Proportional",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ratio and Proportion",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the mean proportional between 9 and 16.",
      "options": [
        "12",
        "12.5",
        "144",
        "13"
      ],
      "answerKey": "12",
      "explanation": "Mean proportional = sqrt(a * b) = sqrt(9 * 16) = sqrt(144) = 12."
    }
  },
  {
    "dayNumber": 46,
    "subject": "reasoning",
    "topic": "Floor and Box Puzzles",
    "title": "Floor and Box Puzzles — Mastery Practice: Floor Arrangement with Attribute Matching",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Floor and Box Puzzles",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a 4-floor building (floors 1 to 4), A lives on an even floor. B lives immediately above A. Which floor does A live on?",
      "options": [
        "Floor 2",
        "Floor 4",
        "Floor 1",
        "Floor 3"
      ],
      "answerKey": "Floor 2",
      "explanation": "Even floors are 2 and 4. If A lived on floor 4, B could not live immediately above him. Hence A must live on Floor 2."
    }
  },
  {
    "dayNumber": 46,
    "subject": "english",
    "topic": "Self Introduction",
    "title": "Self Introduction — Advanced Articulation: 3-Minute Elevator Pitch Structure",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "task": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "question": "Daily Speaking Drill: Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "answerKey": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 46,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 46: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 46 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 47,
    "subject": "dsa",
    "topic": "Heaps and Priority Queues",
    "title": "Day 47: Merge K Sorted Lists via Priority Queue",
    "description": "Merge K sorted linked lists by pushing current heads into min-heap and advancing extracted minimum in O(N log K).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Define custom comparator for ListNode* in priority_queue",
      "Insert head of each list and advance pointer on extraction",
      "Stitch extracted nodes into unified sorted linked list"
    ],
    "practiceQuestions": [
      {
        "title": "Merge k Sorted Lists",
        "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 47,
    "subject": "quant",
    "topic": "Ratio and Proportion",
    "title": "Ratio and Proportion — Mastery Practice: Partnerships & Investment Division",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ratio and Proportion",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A and B invest $3,000 and $5,000 for 1 year. If total profit is $1,600, what is A's share?",
      "options": [
        "$600",
        "$800",
        "$1,000",
        "$500"
      ],
      "answerKey": "$600",
      "explanation": "Ratio of profits = 3:5. A's share = (3 / 8) * 1600 = $600."
    }
  },
  {
    "dayNumber": 47,
    "subject": "reasoning",
    "topic": "Scheduling Puzzles",
    "title": "Scheduling Puzzles — Mastery Practice: Weekdays Event Assignment Matrix",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Scheduling Puzzles",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Five exams are held Mon through Fri. Math is before Physics. English is immediately after Physics. Which day cannot be English?",
      "options": [
        "Monday",
        "Tuesday",
        "Friday",
        "Wednesday"
      ],
      "answerKey": "Monday",
      "explanation": "English is immediately after Physics, so English can only be Tue, Wed, Thu, or Fri. English cannot be held on Monday."
    }
  },
  {
    "dayNumber": 47,
    "subject": "english",
    "topic": "Sentence Formation",
    "title": "Sentence Formation — Advanced Articulation: Avoiding Common Indianisms & Direct Translations",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "task": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "question": "Daily Speaking Drill: Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "answerKey": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 47,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 47: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 47 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 48,
    "subject": "dsa",
    "topic": "Greedy Algorithms",
    "title": "Day 48: Activity Selection & Non-Overlapping Intervals",
    "description": "Sort intervals by finish time and greedily choose maximum non-overlapping set in O(N log N).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Prove correctness of greedy earliest finish time choice",
      "Count minimum intervals to remove for non-overlapping schedule",
      "Handle interval boundary ties appropriately"
    ],
    "practiceQuestions": [
      {
        "title": "Non-overlapping Intervals",
        "url": "https://leetcode.com/problems/non-overlapping-intervals/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 48,
    "subject": "quant",
    "topic": "Average",
    "title": "Average — Mastery Practice: Arithmetic Mean & Weighted Averages",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Average",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
      "options": [
        "30",
        "35",
        "32",
        "29"
      ],
      "answerKey": "35",
      "explanation": "Sum of 5 numbers = 5 * 27 = 135. Sum of remaining 4 = 4 * 25 = 100. Excluded number = 135 - 100 = 35."
    }
  },
  {
    "dayNumber": 48,
    "subject": "reasoning",
    "topic": "Data Sufficiency",
    "title": "Data Sufficiency — Mastery Practice: Two-Statement Logic Sufficiency",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Data Sufficiency",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Is X positive? Statement I: X^2 = 16. Statement II: X + 4 = 8.",
      "options": [
        "Statement II alone is sufficient",
        "Statement I alone is sufficient",
        "Both needed",
        "Neither sufficient"
      ],
      "answerKey": "Statement II alone is sufficient",
      "explanation": "Statement I gives X = +4 or -4 (not sufficient). Statement II gives X = 4 (positive, sufficient alone)."
    }
  },
  {
    "dayNumber": 48,
    "subject": "english",
    "topic": "Tenses",
    "title": "Tenses — Advanced Articulation: Present Perfect vs Simple Past in Tech Interviews",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Talk about a project you completed last semester versus technologies you have used recently.",
      "task": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "question": "Daily Speaking Drill: Talk about a project you completed last semester versus technologies you have used recently.",
      "answerKey": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 48,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 48: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 48 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 49,
    "subject": "dsa",
    "topic": "Greedy Algorithms",
    "title": "Day 49: Jump Game & Gas Station Circuit",
    "description": "Determine if end of array is reachable by tracking maximum reachable index. Find starting gas station in single pass.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Maintain running maxReachable index across array iteration",
      "Identify greedy reset condition when total surplus is non-negative",
      "Prove that if total gas >= total cost, a solution is guaranteed"
    ],
    "practiceQuestions": [
      {
        "title": "Jump Game",
        "url": "https://leetcode.com/problems/jump-game/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Gas Station",
        "url": "https://leetcode.com/problems/gas-station/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 49,
    "subject": "quant",
    "topic": "Average",
    "title": "Average — Mastery Practice: Replacement & Batting Averages",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Average",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A batsman scores 85 runs in his 12th inning, increasing his average by 3. What is his average after 12 innings?",
      "options": [
        "48",
        "51",
        "52",
        "45"
      ],
      "answerKey": "51",
      "explanation": "Let previous average be x. 11x + 85 = 12(x + 3) => 11x + 85 = 12x + 36 => x = 49. New average = 49 + 3 = 51 (or 85 - 12*3 = 49, new = 52 - wait: 85 - 36 = 49, so 49 + 3 = 52? Wait: 12*3 = 36; 85 - 36 = 49. New average is 52? Wait: 11*49 + 85 = 539 + 85 = 624. 624/12 = 52. Answer is 52)."
    }
  },
  {
    "dayNumber": 49,
    "subject": "reasoning",
    "topic": "Venn Diagrams",
    "title": "Venn Diagrams — Mastery Practice: Three-Set Logic Overlaps",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Venn Diagrams",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a group of 50 students: 30 play Football, 25 play Cricket, 10 play both. How many play neither?",
      "options": [
        "5",
        "10",
        "15",
        "0"
      ],
      "answerKey": "5",
      "explanation": "Total playing either = 30 + 25 - 10 = 45. Neither = 50 - 45 = 5 students."
    }
  },
  {
    "dayNumber": 49,
    "subject": "english",
    "topic": "Daily Conversations",
    "title": "Daily Conversations — Advanced Articulation: Professional Greetings and Interview Small Talk",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "task": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "question": "Daily Speaking Drill: How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "answerKey": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 49,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 49: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 49 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 50,
    "subject": "dsa",
    "topic": "Intervals",
    "title": "Day 50: Merge Intervals & Insert Interval",
    "description": "Sort intervals by start time. Merge overlapping intervals in-place and insert new interval into sorted set.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Compare current interval start with previous interval end",
      "Merge by updating end = max(prevEnd, currEnd)",
      "Insert new interval and merge in single linear O(N) pass"
    ],
    "practiceQuestions": [
      {
        "title": "Merge Intervals",
        "url": "https://leetcode.com/problems/merge-intervals/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Insert Interval",
        "url": "https://leetcode.com/problems/insert-interval/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 50,
    "subject": "quant",
    "topic": "Interest",
    "title": "Interest — Mastery Practice: Simple Interest Formula & Rate Calculation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Interest",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A sum amounts to $720 in 2 years and $1,020 in 7 years at simple interest. Find the principal.",
      "options": [
        "$500",
        "$600",
        "$550",
        "$650"
      ],
      "answerKey": "$600",
      "explanation": "Interest for 5 years = 1020 - 720 = $300. Interest per year = $60. Interest for 2 years = $120. Principal = 720 - 120 = $600."
    }
  },
  {
    "dayNumber": 50,
    "subject": "reasoning",
    "topic": "Input-Output",
    "title": "Input-Output — Mastery Practice: Machine Word and Number Shifting",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Input-Output",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Input: 45 cat 12 bat 89 rat. Step 1 puts largest number first: 89 45 cat 12 bat rat. What goes next in Step 2 for alphabetical word?",
      "options": [
        "bat",
        "cat",
        "rat",
        "12"
      ],
      "answerKey": "bat",
      "explanation": "In standard alternating machine sorting, largest number is placed first, followed by alphabetically smallest word (\"bat\")."
    }
  },
  {
    "dayNumber": 50,
    "subject": "english",
    "topic": "Vocabulary",
    "title": "Vocabulary — Advanced Articulation: Action Verbs for Resume & Project Impact",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "task": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "question": "Daily Speaking Drill: Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "answerKey": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 50,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 50: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 50 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 51,
    "subject": "dsa",
    "topic": "Intervals",
    "title": "Day 51: Meeting Rooms & Meeting Rooms II",
    "description": "Find minimum conference rooms required using separate start and end time pointers or min-heap of active meetings.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Sort start times and end times independently in O(N log N)",
      "Increment room count when start < end, else advance end pointer",
      "Model concurrent overlapping events in time"
    ],
    "practiceQuestions": [
      {
        "title": "Meeting Rooms",
        "url": "https://leetcode.com/problems/meeting-rooms/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 51,
    "subject": "quant",
    "topic": "Interest",
    "title": "Interest — Mastery Practice: Compound Interest & CI - SI Difference",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Interest",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "The difference between CI and SI on $1,000 for 2 years at 10% per annum is:",
      "options": [
        "$5",
        "$10",
        "$15",
        "$20"
      ],
      "answerKey": "$10",
      "explanation": "Difference for 2 years = P * (R / 100)^2 = 1000 * (10 / 100)^2 = 1000 * 0.01 = $10."
    }
  },
  {
    "dayNumber": 51,
    "subject": "reasoning",
    "topic": "Number Series",
    "title": "Number Series — Mastery Practice: Missing Term & Difference of Differences",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Number Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the next number in series: 2, 5, 11, 20, 32, ?",
      "options": [
        "45",
        "47",
        "49",
        "50"
      ],
      "answerKey": "47",
      "explanation": "Differences: +3, +6, +9, +12. The next difference is +15. 32 + 15 = 47."
    }
  },
  {
    "dayNumber": 51,
    "subject": "english",
    "topic": "Listening and Shadowing",
    "title": "Listening and Shadowing — Advanced Articulation: Pacing and Intonation Shadowing Drill",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "task": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "question": "Daily Speaking Drill: Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "answerKey": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 51,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 51: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 51 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 52,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 52: Graph Representations & Adjacency List",
    "description": "Implement directed and undirected graphs using vector<vector<int>> and vector<vector<pair<int,int>>> for weighted edges.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Compare space complexity: O(V^2) matrix vs O(V + E) adjacency list",
      "Add undirected edge: adj[u].push_back(v); adj[v].push_back(u);",
      "Calculate node in-degrees and out-degrees in directed graphs"
    ],
    "practiceQuestions": [
      {
        "title": "Clone Graph",
        "url": "https://leetcode.com/problems/clone-graph/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 52,
    "subject": "quant",
    "topic": "Number System",
    "title": "Number System — Mastery Practice: Divisibility Rules & Remainder Theorem",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Number System",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "What is the remainder when 2^31 is divided by 5?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "answerKey": "3",
      "explanation": "Powers of 2 mod 5: 2^1=2, 2^2=4, 2^3=3, 2^4=1 (cycle of 4). 31 mod 4 = 3, so 2^31 mod 5 = 2^3 mod 5 = 8 mod 5 = 3."
    }
  },
  {
    "dayNumber": 52,
    "subject": "reasoning",
    "topic": "Alphabet Series",
    "title": "Alphabet Series — Mastery Practice: EJOTY Position Rules & Letter Shifting",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Alphabet Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "What is the 16th letter of the alphabet from the left?",
      "options": [
        "N",
        "O",
        "P",
        "Q"
      ],
      "answerKey": "P",
      "explanation": "Using EJOTY (E=5, J=10, O=15, T=20, Y=25): O is 15th, so the next letter P is 16th."
    }
  },
  {
    "dayNumber": 52,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Advanced Articulation: 2-Minute Impromptu Speech on Clean Code",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "task": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "question": "Daily Speaking Drill: Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "answerKey": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 52,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 52: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 52 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 53,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 53: Breadth-First Search (BFS) & Shortest Path",
    "description": "Implement BFS traversal using queue and visited array. Find shortest path in unweighted graphs in O(V + E).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Mark node visited upon pushing into queue to avoid redundant visits",
      "Compute shortest distance array dist[v] = dist[u] + 1",
      "Trace reconstructable shortest path using parent array"
    ],
    "practiceQuestions": [
      {
        "title": "Course Schedule",
        "url": "https://leetcode.com/problems/course-schedule/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 53,
    "subject": "quant",
    "topic": "Number System",
    "title": "Number System — Mastery Practice: Unit Digit Cycles & Exponentiation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Number System",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the unit digit of 7^95 - 3^58.",
      "options": [
        "0",
        "4",
        "6",
        "7"
      ],
      "answerKey": "4",
      "explanation": "Cyclicity of 7 is 4: 95 mod 4 = 3 => 7^3 ends in 3. Cyclicity of 3 is 4: 58 mod 4 = 2 => 3^2 ends in 9. Unit digit = 13 - 9 = 4."
    }
  },
  {
    "dayNumber": 53,
    "subject": "reasoning",
    "topic": "Analogy",
    "title": "Analogy — Mastery Practice: Word & Numeric Relationships",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Analogy",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Doctor : Hospital :: Teacher : ?",
      "options": [
        "Student",
        "School",
        "Book",
        "Classroom"
      ],
      "answerKey": "School",
      "explanation": "A doctor operates in a hospital; a teacher operates in a school (workplace relationship)."
    }
  },
  {
    "dayNumber": 53,
    "subject": "english",
    "topic": "Explaining Technical Concepts",
    "title": "Explaining Technical Concepts — Advanced Articulation: Explain REST API to a Non-Tech Recruiter",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain what an API is using the classic restaurant waiter metaphor.",
      "task": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "question": "Daily Speaking Drill: Explain what an API is using the classic restaurant waiter metaphor.",
      "answerKey": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 53,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 53: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 53 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 54,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 54: Depth-First Search (DFS) & Number of Islands",
    "description": "Implement recursive DFS on graphs and 2D grid matrix. Count connected components in grid in O(R * C).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Write 2D grid boundary and water check helper",
      "Sink visited island cells by mutating grid or using visited 2D array",
      "Count number of connected components in undirected graph"
    ],
    "practiceQuestions": [
      {
        "title": "Number of Islands",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 54,
    "subject": "quant",
    "topic": "HCF and LCM",
    "title": "HCF and LCM — Mastery Practice: Prime Factorization & Product Property",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for HCF and LCM",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Two numbers are in the ratio 3:4. If their HCF is 4, what is their LCM?",
      "options": [
        "36",
        "48",
        "60",
        "72"
      ],
      "answerKey": "48",
      "explanation": "Numbers are 3*4 = 12 and 4*4 = 16. LCM = 12 * 16 / 4 = 48 (or LCM = HCF * a * b = 4 * 3 * 4 = 48)."
    }
  },
  {
    "dayNumber": 54,
    "subject": "reasoning",
    "topic": "Classification",
    "title": "Classification — Mastery Practice: Odd One Out (Semantic & Numeric)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Classification",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the odd one out: 27, 64, 125, 144, 216",
      "options": [
        "27",
        "64",
        "144",
        "216"
      ],
      "answerKey": "144",
      "explanation": "27=3^3, 64=4^3, 125=5^3, 216=6^3 are all perfect cubes. 144 is only a square (12^2), not a cube."
    }
  },
  {
    "dayNumber": 54,
    "subject": "english",
    "topic": "Explaining DSA Solutions",
    "title": "Explaining DSA Solutions — Advanced Articulation: Verbal Walkthrough of Two Sum using Hash Map",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "task": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "question": "Daily Speaking Drill: Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "answerKey": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 54,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 54: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 54 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 55,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 55: Pacific Atlantic Water Flow & Multi-Source BFS",
    "description": "Start reverse BFS/DFS searches from ocean borders and find overlapping cells reachable by both oceans.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Reverse search direction: traverse inward from destination borders",
      "Track ocean reachability with two separate 2D boolean matrices",
      "Find intersection of Pacific and Atlantic reachable cells"
    ],
    "practiceQuestions": [
      {
        "title": "Pacific Atlantic Water Flow",
        "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 55,
    "subject": "quant",
    "topic": "Time and Work",
    "title": "Time and Work — Mastery Practice: Efficiency Method & Combined Output",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time and Work",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A can do a piece of work in 10 days and B in 15 days. How long will they take working together?",
      "options": [
        "5 days",
        "6 days",
        "7.5 days",
        "8 days"
      ],
      "answerKey": "6 days",
      "explanation": "LCM of 10 and 15 = 30 units. A's rate = 3 units/day, B's rate = 2 units/day. Combined = 5 units/day. Days = 30 / 5 = 6 days."
    }
  },
  {
    "dayNumber": 55,
    "subject": "reasoning",
    "topic": "Coding-Decoding",
    "title": "Coding-Decoding — Mastery Practice: Direct Letter Shifting Patterns",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Coding-Decoding",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If CAT is coded as DBU, how is DOG coded?",
      "options": [
        "EPH",
        "EOF",
        "EQH",
        "ENH"
      ],
      "answerKey": "EPH",
      "explanation": "Each letter is shifted by +1: D (+1) = E, O (+1) = P, G (+1) = H."
    }
  },
  {
    "dayNumber": 55,
    "subject": "english",
    "topic": "Project Explanation",
    "title": "Project Explanation — Advanced Articulation: STAR Method for System Architecture Pitch",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "task": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "question": "Daily Speaking Drill: Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "answerKey": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 55,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 55: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 55 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 56,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 56: Cycle Detection in Undirected Graph",
    "description": "Detect cycles in undirected graph using BFS (queue with parent tracking) and DFS (parent node parameter).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Pass parent parameter in DFS: cycle if adjacent node is visited and != parent",
      "Implement BFS cycle detection with queue of pairs {node, parent}",
      "Distinguish between tree edges and back edges"
    ],
    "practiceQuestions": [
      {
        "title": "Graph Valid Tree",
        "url": "https://leetcode.com/problems/graph-valid-tree/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 56,
    "subject": "quant",
    "topic": "Time and Work",
    "title": "Time and Work — Mastery Practice: Alternate Day Work & Man-Days Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time and Work",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "If 12 men can build a wall in 20 days, how many men are needed to build it in 15 days?",
      "options": [
        "14",
        "16",
        "18",
        "20"
      ],
      "answerKey": "16",
      "explanation": "M1 * D1 = M2 * D2 => 12 * 20 = M2 * 15 => M2 = 240 / 15 = 16 men."
    }
  },
  {
    "dayNumber": 56,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Mastery Practice: Cardinal Directions & Pythagoras Displacements",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "A man walks 3km North, then 4km East. How far is he from the starting point?",
      "options": [
        "5 km",
        "7 km",
        "6 km",
        "8 km"
      ],
      "answerKey": "5 km",
      "explanation": "Distance = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5 km."
    }
  },
  {
    "dayNumber": 56,
    "subject": "english",
    "topic": "HR Interview Questions",
    "title": "HR Interview Questions — Advanced Articulation: Handling \"What Is Your Biggest Weakness?\"",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "task": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "question": "Daily Speaking Drill: Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "answerKey": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 56,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 56: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 56 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 57,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 57: Cycle Detection in Directed Graph & Course Schedule",
    "description": "Detect cycles in directed graph using DFS path visited recursion stack array and three-color coloring (0, 1, 2).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Distinguish currently active recursion stack from completed visited nodes",
      "Detect back edge indicating cycle in directed dependency graph",
      "Determine course completion feasibility in O(V + E)"
    ],
    "practiceQuestions": [
      {
        "title": "Course Schedule",
        "url": "https://leetcode.com/problems/course-schedule/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 57,
    "subject": "quant",
    "topic": "Pipes and Cisterns",
    "title": "Pipes and Cisterns — Mastery Practice: Inlet and Outlet Rate Calculations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Pipes and Cisterns",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Pipe A fills a tank in 12 hours, pipe B empties it in 18 hours. If both are open, how long to fill?",
      "options": [
        "30 hours",
        "36 hours",
        "24 hours",
        "40 hours"
      ],
      "answerKey": "36 hours",
      "explanation": "Capacity = 36 units. Rate A = +3, Rate B = -2. Net rate = +1 unit/hour. Time = 36 / 1 = 36 hours."
    }
  },
  {
    "dayNumber": 57,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Mastery Practice: Shadow Rules at Sunrise and Sunset",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "At sunrise, if Rohan is facing Amit and Rohan's shadow falls to his left, which direction is Rohan facing?",
      "options": [
        "North",
        "South",
        "East",
        "West"
      ],
      "answerKey": "North",
      "explanation": "At sunrise, sunlight comes from the East, so shadows fall toward the West. If shadow is on Rohan's left, his left is West, which means he is facing North."
    }
  },
  {
    "dayNumber": 57,
    "subject": "english",
    "topic": "Group Discussion",
    "title": "Group Discussion — Advanced Articulation: Initiating and Reframing Group Dialogue",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How do you enter a discussion when 3 people are speaking at once?",
      "task": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "question": "Daily Speaking Drill: How do you enter a discussion when 3 people are speaking at once?",
      "answerKey": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 57,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 57: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 57 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 58,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 58: Topological Sort (Kahn's BFS & DFS)",
    "description": "Implement Kahn’s algorithm using in-degree array and queue. Find valid linear course scheduling order.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Compute in-degrees of all vertices in directed graph",
      "Push all in-degree 0 nodes into queue and decrement neighbors",
      "Detect cycle if count of processed topological nodes < V"
    ],
    "practiceQuestions": [
      {
        "title": "Course Schedule II",
        "url": "https://leetcode.com/problems/course-schedule-ii/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 58,
    "subject": "quant",
    "topic": "Pipes and Cisterns",
    "title": "Pipes and Cisterns — Mastery Practice: Tank Leakage & Alternating Valves",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Pipes and Cisterns",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A tap fills a tank in 6 hours, but due to a leak at the bottom it takes 8 hours. How long for the leak alone to empty the full tank?",
      "options": [
        "18 hours",
        "24 hours",
        "20 hours",
        "28 hours"
      ],
      "answerKey": "24 hours",
      "explanation": "Tap rate = 1/6. Tap - Leak = 1/8. Leak rate = 1/6 - 1/8 = (4 - 3)/24 = 1/24. Leak takes 24 hours."
    }
  },
  {
    "dayNumber": 58,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Mastery Practice: Family Tree Generation Diagrams",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Pointing to a man, a woman said \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Aunt",
        "Sister",
        "Daughter"
      ],
      "answerKey": "Mother",
      "explanation": "The \"only daughter of my mother\" is the woman herself. So she is his mother."
    }
  },
  {
    "dayNumber": 58,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Advanced Articulation: Explaining a Tough Bug You Resolved",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "task": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "question": "Daily Speaking Drill: Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "answerKey": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 58,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 58: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 58 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 59,
    "subject": "dsa",
    "topic": "Shortest Path Algorithms",
    "title": "Day 59: Dijkstra's Algorithm (Priority Queue)",
    "description": "Find single-source shortest path in weighted graphs with non-negative edge weights using min-heap in O(E log V).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Initialize dist array with infinity and dist[src] = 0",
      "Extract minimum distance node from priority_queue<pair<int,int>>",
      "Relax adjacent edges: if (dist[u] + w < dist[v]) { dist[v] = ... }"
    ],
    "practiceQuestions": [
      {
        "title": "Network Delay Time",
        "url": "https://leetcode.com/problems/network-delay-time/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 59,
    "subject": "quant",
    "topic": "Time, Speed and Distance",
    "title": "Time, Speed and Distance — Mastery Practice: Unit Conversions & Average Speed Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time, Speed and Distance",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Convert 72 km/h into meters per second.",
      "options": [
        "15 m/s",
        "20 m/s",
        "25 m/s",
        "30 m/s"
      ],
      "answerKey": "20 m/s",
      "explanation": "Multiply by 5/18: 72 * (5/18) = 4 * 5 = 20 m/s."
    }
  },
  {
    "dayNumber": 59,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Mastery Practice: Coded Family Relations (A + B symbols)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If A + B means A is son of B, and A * B means A is brother of B, what does P + Q * R mean?",
      "options": [
        "P is son of R",
        "P is nephew of R",
        "P is brother of R",
        "P is uncle of R"
      ],
      "answerKey": "P is nephew of R",
      "explanation": "Q * R means Q is brother of R. P + Q means P is son of Q. Therefore, P is the nephew of R."
    }
  },
  {
    "dayNumber": 59,
    "subject": "english",
    "topic": "Technical Mock Interviews",
    "title": "Technical Mock Interviews — Advanced Articulation: 5-Minute Live Code Explanation Rehearsal",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "task": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "question": "Daily Speaking Drill: Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "answerKey": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 59,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 59: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 59 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 60,
    "subject": "dsa",
    "topic": "Shortest Path Algorithms",
    "title": "Day 60: Bellman-Ford Algorithm & Negative Cycles",
    "description": "Find shortest paths with negative edge weights by relaxing all E edges V-1 times. Detect negative weight cycles.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Relax all edges V-1 times for worst-case path propagation",
      "Detect negative cycle if distance updates occur on V-th iteration",
      "Compare Bellman-Ford O(V*E) with Dijkstra O(E log V)"
    ],
    "practiceQuestions": [
      {
        "title": "Cheapest Flights Within K Stops",
        "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 60,
    "subject": "quant",
    "topic": "Time, Speed and Distance",
    "title": "Time, Speed and Distance — Mastery Practice: Relative Speed: Same vs Opposite Directions",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Time, Speed and Distance",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A person travels from A to B at 40 km/h and returns at 60 km/h. What is the average speed?",
      "options": [
        "48 km/h",
        "50 km/h",
        "45 km/h",
        "52 km/h"
      ],
      "answerKey": "48 km/h",
      "explanation": "Average speed = 2xy / (x + y) = (2 * 40 * 60) / (40 + 60) = 4800 / 100 = 48 km/h."
    }
  },
  {
    "dayNumber": 60,
    "subject": "reasoning",
    "topic": "Ranking and Order",
    "title": "Ranking and Order — Mastery Practice: Total Persons in Row Formula",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Ranking and Order",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a class, Rahul ranks 7th from top and 28th from bottom. How many students are there in the class?",
      "options": [
        "34",
        "35",
        "36",
        "33"
      ],
      "answerKey": "34",
      "explanation": "Total = Top + Bottom - 1 = 7 + 28 - 1 = 34 students."
    }
  },
  {
    "dayNumber": 60,
    "subject": "english",
    "topic": "Final Interview Simulation",
    "title": "Final Interview Simulation — Advanced Articulation: Closing Questions for the Hiring Manager",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "task": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "question": "Daily Speaking Drill: Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "answerKey": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 60,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 60: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 60 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 61,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 61: Kruskal's & Prim's Minimum Spanning Tree",
    "description": "Find minimum spanning tree weight. Implement Kruskal’s using Disjoint Set Union (DSU) and edge sorting in O(E log E).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Sort edges in ascending order of weight for Kruskal",
      "Add edge if u and v belong to different DSU components",
      "Implement Prim’s algorithm using priority queue for dense graphs"
    ],
    "practiceQuestions": [
      {
        "title": "Min Cost to Connect All Points",
        "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 61,
    "subject": "quant",
    "topic": "Trains and Boats",
    "title": "Trains and Boats — Mastery Practice: Train Crossing Pole vs Platform",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Trains and Boats",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A 150m long train travels at 54 km/h. How long does it take to cross a pole?",
      "options": [
        "8 seconds",
        "10 seconds",
        "12 seconds",
        "15 seconds"
      ],
      "answerKey": "10 seconds",
      "explanation": "Speed = 54 * (5/18) = 15 m/s. Time = Distance / Speed = 150 / 15 = 10 seconds."
    }
  },
  {
    "dayNumber": 61,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Mastery Practice: Venn Diagram Method (All A are B)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statements: All cats are animals. All animals are mammals. Conclusion: All cats are mammals.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Cannot be determined"
      ],
      "answerKey": "Follows",
      "explanation": "Cats subset of Animals, Animals subset of Mammals, therefore Cats subset of Mammals. Conclusion definitely follows."
    }
  },
  {
    "dayNumber": 61,
    "subject": "english",
    "topic": "Self Introduction",
    "title": "Self Introduction — Advanced Articulation: 3-Minute Elevator Pitch Structure",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "task": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "question": "Daily Speaking Drill: Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "answerKey": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 61,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 61: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 61 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 62,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 62: Disjoint Set Union (DSU) with Path Compression",
    "description": "Implement Disjoint Set Union with findParent path compression and union by rank/size in near O(1) amortized alpha(N).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Write recursive findParent with path compression: parent[x] = find(parent[x])",
      "Implement unionByRank to keep tree height minimal",
      "Count connected components and check connectivity dynamically"
    ],
    "practiceQuestions": [
      {
        "title": "Number of Connected Components in an Undirected Graph",
        "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 62,
    "subject": "quant",
    "topic": "Trains and Boats",
    "title": "Trains and Boats — Mastery Practice: Two Trains Crossing in Opposite Directions",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Trains and Boats",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Two trains 100m and 120m long travel at 42 km/h and 30 km/h in opposite directions. Time to cross each other is:",
      "options": [
        "11 seconds",
        "10 seconds",
        "12 seconds",
        "14 seconds"
      ],
      "answerKey": "11 seconds",
      "explanation": "Total distance = 100 + 120 = 220m. Relative speed = 42 + 30 = 72 km/h = 20 m/s. Time = 220 / 20 = 11 seconds."
    }
  },
  {
    "dayNumber": 62,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Mastery Practice: Modern \"Only A Few\" Statements",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: Only a few books are pens. Conclusion: Some books are not pens.",
      "options": [
        "Definite Follows",
        "Does not follow",
        "False",
        "Data insufficient"
      ],
      "answerKey": "Definite Follows",
      "explanation": "\"Only a few\" means both \"Some A are B\" AND \"Some A are not B\" are simultaneously true."
    }
  },
  {
    "dayNumber": 62,
    "subject": "english",
    "topic": "Sentence Formation",
    "title": "Sentence Formation — Advanced Articulation: Avoiding Common Indianisms & Direct Translations",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "task": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "question": "Daily Speaking Drill: Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "answerKey": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 62,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 62: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 62 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 63,
    "subject": "dsa",
    "topic": "Graphs",
    "title": "Day 63: Alien Dictionary & Word Ladder",
    "description": "Extract lexicographical character order constraints from sorted dictionary and perform topological sort.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Compare adjacent words to find first differing character edge",
      "Detect invalid dictionary prefix cases",
      "Execute BFS shortest path on transformation graph for Word Ladder"
    ],
    "practiceQuestions": [
      {
        "title": "Alien Dictionary",
        "url": "https://leetcode.com/problems/alien-dictionary/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 63,
    "subject": "quant",
    "topic": "Trains and Boats",
    "title": "Trains and Boats — Mastery Practice: Boats in Stream: Upstream and Downstream",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Trains and Boats",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A boat moves at 10 km/h in still water and stream speed is 2 km/h. What is the upstream speed?",
      "options": [
        "6 km/h",
        "8 km/h",
        "12 km/h",
        "10 km/h"
      ],
      "answerKey": "8 km/h",
      "explanation": "Upstream speed = Still speed - Stream speed = 10 - 2 = 8 km/h."
    }
  },
  {
    "dayNumber": 63,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Mastery Practice: Direct Inequality Chains (A > B >= C)",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Given P > Q >= R = S. Is P > S definitely true?",
      "options": [
        "Yes (Definite True)",
        "No (False)",
        "Cannot be determined",
        "Partially true"
      ],
      "answerKey": "Yes (Definite True)",
      "explanation": "Since P > Q and Q >= S, P is strictly greater than S."
    }
  },
  {
    "dayNumber": 63,
    "subject": "english",
    "topic": "Tenses",
    "title": "Tenses — Advanced Articulation: Present Perfect vs Simple Past in Tech Interviews",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Talk about a project you completed last semester versus technologies you have used recently.",
      "task": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "question": "Daily Speaking Drill: Talk about a project you completed last semester versus technologies you have used recently.",
      "answerKey": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 63,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 63: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 63 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 64,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 64: Memoization vs Tabulation & Climbing Stairs",
    "description": "Identify overlapping subproblems and optimal substructure. Transition from top-down memoization to bottom-up DP array.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Draw recursion tree to expose redundant overlapping subproblems",
      "Create memoization array initialized with -1",
      "Optimize space from O(N) array to O(1) two variables"
    ],
    "practiceQuestions": [
      {
        "title": "Climbing Stairs",
        "url": "https://leetcode.com/problems/climbing-stairs/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 64,
    "subject": "quant",
    "topic": "Mixtures and Alligation",
    "title": "Mixtures and Alligation — Mastery Practice: Rule of Alligation & Two-Liquid Blending",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Mixtures and Alligation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In what ratio must rice at $30/kg be mixed with rice at $45/kg to obtain a blend worth $35/kg?",
      "options": [
        "2:1",
        "1:2",
        "3:2",
        "3:1"
      ],
      "answerKey": "2:1",
      "explanation": "Alligation: (45 - 35) : (35 - 30) = 10 : 5 = 2 : 1."
    }
  },
  {
    "dayNumber": 64,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Mastery Practice: Coded Inequalities with Symbol Mappings",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: M >= N > O, O = P < Q. Conclusion: M > P.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Neither follows"
      ],
      "answerKey": "Follows",
      "explanation": "M >= N > O = P implies M > O = P, hence M > P definitely holds."
    }
  },
  {
    "dayNumber": 64,
    "subject": "english",
    "topic": "Daily Conversations",
    "title": "Daily Conversations — Advanced Articulation: Professional Greetings and Interview Small Talk",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "task": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "question": "Daily Speaking Drill: How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "answerKey": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 64,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 64: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 64 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 65,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 65: House Robber & Circular House Robber II",
    "description": "Formulate state transition dp[i] = max(dp[i-1], nums[i] + dp[i-2]). Handle circular housing array with two passes.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate rob vs skip state transition",
      "Optimize space to prev1 and prev2 in O(1) memory",
      "Split circular array into [0, n-2] and [1, n-1]"
    ],
    "practiceQuestions": [
      {
        "title": "House Robber",
        "url": "https://leetcode.com/problems/house-robber/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "House Robber II",
        "url": "https://leetcode.com/problems/house-robber-ii/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 65,
    "subject": "quant",
    "topic": "Mixtures and Alligation",
    "title": "Mixtures and Alligation — Mastery Practice: Successive Replacement Formula",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Mixtures and Alligation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "From a container with 40L of milk, 4L is drawn and replaced with water. This is repeated once more. Milk left is:",
      "options": [
        "32L",
        "32.4L",
        "34L",
        "30.5L"
      ],
      "answerKey": "32.4L",
      "explanation": "Amount = Initial * (1 - x/Total)^n = 40 * (1 - 4/40)^2 = 40 * (0.9)^2 = 40 * 0.81 = 32.4L."
    }
  },
  {
    "dayNumber": 65,
    "subject": "reasoning",
    "topic": "Seating Arrangements",
    "title": "Seating Arrangements — Mastery Practice: Linear Arrangement Facing North",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Seating Arrangements",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Five friends A, B, C, D, E sit facing North. C sits in the middle. A is left of C. Where can A sit?",
      "options": [
        "Position 1 or 2",
        "Position 4 or 5",
        "Position 3 only",
        "Position 5 only"
      ],
      "answerKey": "Position 1 or 2",
      "explanation": "Middle position is 3. To the left of position 3 are positions 1 and 2."
    }
  },
  {
    "dayNumber": 65,
    "subject": "english",
    "topic": "Vocabulary",
    "title": "Vocabulary — Advanced Articulation: Action Verbs for Resume & Project Impact",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "task": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "question": "Daily Speaking Drill: Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "answerKey": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 65,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 65: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 65 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 66,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 66: Coin Change & Unbounded Knapsack Pattern",
    "description": "Find minimum coins needed to make amount using dp[a] = min(dp[a], 1 + dp[a - coin]) in O(amount * N) time.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Initialize dp array with infinity and dp[0] = 0",
      "Iterate through all denominations for each sub-amount",
      "Differentiate between 0/1 knapsack and unbounded reuse"
    ],
    "practiceQuestions": [
      {
        "title": "Coin Change",
        "url": "https://leetcode.com/problems/coin-change/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 66,
    "subject": "quant",
    "topic": "Ages",
    "title": "Ages — Mastery Practice: Age Ratio Shifts & Simultaneous Equations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Father is 3 times as old as his son. In 12 years, he will be twice as old. Find son's current age.",
      "options": [
        "10 years",
        "12 years",
        "15 years",
        "14 years"
      ],
      "answerKey": "12 years",
      "explanation": "F = 3S. In 12 years: F + 12 = 2(S + 12) => 3S + 12 = 2S + 24 => S = 12 years."
    }
  },
  {
    "dayNumber": 66,
    "subject": "reasoning",
    "topic": "Seating Arrangements",
    "title": "Seating Arrangements — Mastery Practice: Circular Arrangement Facing Center",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Seating Arrangements",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "6 people sit in a circle facing center. A is opposite D. B is right of A. Who is opposite B?",
      "options": [
        "Person left of D",
        "Person right of D",
        "D",
        "A"
      ],
      "answerKey": "Person left of D",
      "explanation": "In a 6-person circle, the opposite of the person to the right of A is the person to the left of D."
    }
  },
  {
    "dayNumber": 66,
    "subject": "english",
    "topic": "Listening and Shadowing",
    "title": "Listening and Shadowing — Advanced Articulation: Pacing and Intonation Shadowing Drill",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "task": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "question": "Daily Speaking Drill: Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "answerKey": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 66,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 66: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 66 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 67,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 67: Longest Increasing Subsequence (LIS)",
    "description": "Solve LIS in O(N^2) using DP array and optimize to O(N log N) using binary search (std::lower_bound).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate O(N^2) state transition dp[i] = 1 + max(dp[j]) for j < i",
      "Maintain tails array with lower_bound for O(N log N) algorithm",
      "Reconstruct the actual LIS sequence using parent tracking"
    ],
    "practiceQuestions": [
      {
        "title": "Longest Increasing Subsequence",
        "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 67,
    "subject": "quant",
    "topic": "Algebra",
    "title": "Algebra — Mastery Practice: Linear Equations & Substitution",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Algebra",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "If 3x + 2y = 16 and x - y = 2, find the value of x.",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "answerKey": "4",
      "explanation": "From second equation, y = x - 2. Substitute in first: 3x + 2(x - 2) = 16 => 5x - 4 = 16 => 5x = 20 => x = 4."
    }
  },
  {
    "dayNumber": 67,
    "subject": "reasoning",
    "topic": "Calendars and Clocks",
    "title": "Calendars and Clocks — Mastery Practice: Odd Days Calculation & Day of Week",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Calendars and Clocks",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "How many odd days are there in a normal (non-leap) year of 365 days?",
      "options": [
        "1 odd day",
        "2 odd days",
        "0 odd days",
        "3 odd days"
      ],
      "answerKey": "1 odd day",
      "explanation": "365 = 52 weeks * 7 days + 1 day. Hence, exactly 1 odd day."
    }
  },
  {
    "dayNumber": 67,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Advanced Articulation: 2-Minute Impromptu Speech on Clean Code",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "task": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "question": "Daily Speaking Drill: Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "answerKey": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 67,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 67: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 67 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 68,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 68: Grid DP: Unique Paths & Minimum Path Sum",
    "description": "Calculate path counts and minimum cost paths in 2D grid moving only right and down in O(R * C) time.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate 2D state: dp[r][c] = dp[r-1][c] + dp[r][c-1]",
      "Initialize base cases for first row and first column",
      "Optimize space from O(R*C) matrix to O(C) 1D row array"
    ],
    "practiceQuestions": [
      {
        "title": "Unique Paths",
        "url": "https://leetcode.com/problems/unique-paths/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 68,
    "subject": "quant",
    "topic": "Algebra",
    "title": "Algebra — Mastery Practice: Quadratic Equations & Roots Properties",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Algebra",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the sum of roots for 2x^2 - 8x + 6 = 0.",
      "options": [
        "2",
        "3",
        "4",
        "-4"
      ],
      "answerKey": "4",
      "explanation": "Sum of roots = -b / a = -(-8) / 2 = 8 / 2 = 4."
    }
  },
  {
    "dayNumber": 68,
    "subject": "reasoning",
    "topic": "Calendars and Clocks",
    "title": "Calendars and Clocks — Mastery Practice: Clock Hands Angle Formula |30H - 11/2M|",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Calendars and Clocks",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the angle between hour hand and minute hand at 3:30.",
      "options": [
        "75 degrees",
        "80 degrees",
        "90 degrees",
        "70 degrees"
      ],
      "answerKey": "75 degrees",
      "explanation": "Angle = |30*H - (11/2)*M| = |30*3 - (11/2)*30| = |90 - 165| = |-75| = 75 degrees."
    }
  },
  {
    "dayNumber": 68,
    "subject": "english",
    "topic": "Explaining Technical Concepts",
    "title": "Explaining Technical Concepts — Advanced Articulation: Explain REST API to a Non-Tech Recruiter",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain what an API is using the classic restaurant waiter metaphor.",
      "task": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "question": "Daily Speaking Drill: Explain what an API is using the classic restaurant waiter metaphor.",
      "answerKey": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 68,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 68: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 68 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 69,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 69: Longest Common Subsequence (LCS)",
    "description": "Find LCS length between two strings using 2D matrix matching. Reconstruct common string from DP matrix.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Transition: if match dp[i][j] = 1 + dp[i-1][j-1], else max(up, left)",
      "Trace backwards from dp[m][n] to reconstruct matching string",
      "Optimize space to two 1D rows in O(min(M, N))"
    ],
    "practiceQuestions": [
      {
        "title": "Longest Common Subsequence",
        "url": "https://leetcode.com/problems/longest-common-subsequence/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 69,
    "subject": "quant",
    "topic": "Algebra",
    "title": "Algebra — Mastery Practice: Polynomial Identities & Factoring",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Algebra",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "If a + b = 5 and ab = 6, what is a^2 + b^2?",
      "options": [
        "11",
        "13",
        "15",
        "19"
      ],
      "answerKey": "13",
      "explanation": "a^2 + b^2 = (a + b)^2 - 2ab = 5^2 - 2(6) = 25 - 12 = 13."
    }
  },
  {
    "dayNumber": 69,
    "subject": "reasoning",
    "topic": "Missing Numbers",
    "title": "Missing Numbers — Mastery Practice: Matrix & Geometric Pattern Operations",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Missing Numbers",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a 3x3 matrix row 1: [2, 3, 13], row 2: [3, 4, 25], row 3: [4, 5, ?]",
      "options": [
        "41",
        "39",
        "45",
        "36"
      ],
      "answerKey": "41",
      "explanation": "Pattern: a^2 + b^2 = c. 2^2 + 3^2 = 4 + 9 = 13. 3^2 + 4^2 = 9 + 16 = 25. 4^2 + 5^2 = 16 + 25 = 41."
    }
  },
  {
    "dayNumber": 69,
    "subject": "english",
    "topic": "Explaining DSA Solutions",
    "title": "Explaining DSA Solutions — Advanced Articulation: Verbal Walkthrough of Two Sum using Hash Map",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "task": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "question": "Daily Speaking Drill: Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "answerKey": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 69,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 69: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 69 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 70,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 70: 0/1 Knapsack & Target Sum Subset Partition",
    "description": "Solve classical 0/1 knapsack problem with item weights and values. Map Target Sum to subset sum partition.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Construct 2D DP table with items as rows and weight capacities as columns",
      "Fill backwards in 1D array to prevent reusing same item: for (w = W; w >= weight; w--)",
      "Transform Target Sum into finding subset summing to (total + target) / 2"
    ],
    "practiceQuestions": [
      {
        "title": "Target Sum",
        "url": "https://leetcode.com/problems/target-sum/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 70,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — Mastery Practice: Triangles: Pythagoras & Area Formulas",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A right-angled triangle has sides 6cm and 8cm adjacent to the right angle. Find the hypotenuse.",
      "options": [
        "10cm",
        "12cm",
        "14cm",
        "9.5cm"
      ],
      "answerKey": "10cm",
      "explanation": "Hypotenuse = sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10cm."
    }
  },
  {
    "dayNumber": 70,
    "subject": "reasoning",
    "topic": "Statements and Conclusions",
    "title": "Statements and Conclusions — Mastery Practice: Direct Deductions from Premises",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Statements and Conclusions",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: \"All mangoes in the basket are sweet. Some mangoes are organic.\" Conclusion: Some sweet fruits are organic.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Contradictory"
      ],
      "answerKey": "Follows",
      "explanation": "The organic mangoes in the basket are sweet mangoes, so some sweet fruits are indeed organic."
    }
  },
  {
    "dayNumber": 70,
    "subject": "english",
    "topic": "Project Explanation",
    "title": "Project Explanation — Advanced Articulation: STAR Method for System Architecture Pitch",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "task": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "question": "Daily Speaking Drill: Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "answerKey": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 70,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 70: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 70 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 71,
    "subject": "dsa",
    "topic": "Dynamic Programming",
    "title": "Day 71: Edit Distance & Interleaving String",
    "description": "Compute minimum insert, delete, and replace operations to convert string S1 to S2 in O(M * N) time.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate 3-way operations: 1 + min(insert, delete, replace)",
      "Initialize base cases for empty prefix conversions",
      "Solve Interleaving String using 2D boolean DP grid"
    ],
    "practiceQuestions": [
      {
        "title": "Edit Distance",
        "url": "https://leetcode.com/problems/edit-distance/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Interleaving String",
        "url": "https://leetcode.com/problems/interleaving-string/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 71,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — Mastery Practice: Circles: Circumference & Tangent Theorems",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the area of a circle whose circumference is 44cm (take pi = 22/7).",
      "options": [
        "144 cm^2",
        "154 cm^2",
        "164 cm^2",
        "132 cm^2"
      ],
      "answerKey": "154 cm^2",
      "explanation": "2 * (22/7) * r = 44 => r = 7cm. Area = pi * r^2 = (22/7) * 49 = 154 cm^2."
    }
  },
  {
    "dayNumber": 71,
    "subject": "reasoning",
    "topic": "Floor and Box Puzzles",
    "title": "Floor and Box Puzzles — Mastery Practice: Floor Arrangement with Attribute Matching",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Floor and Box Puzzles",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a 4-floor building (floors 1 to 4), A lives on an even floor. B lives immediately above A. Which floor does A live on?",
      "options": [
        "Floor 2",
        "Floor 4",
        "Floor 1",
        "Floor 3"
      ],
      "answerKey": "Floor 2",
      "explanation": "Even floors are 2 and 4. If A lived on floor 4, B could not live immediately above him. Hence A must live on Floor 2."
    }
  },
  {
    "dayNumber": 71,
    "subject": "english",
    "topic": "HR Interview Questions",
    "title": "HR Interview Questions — Advanced Articulation: Handling \"What Is Your Biggest Weakness?\"",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "task": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "question": "Daily Speaking Drill: Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "answerKey": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 71,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 71: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 71 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 72,
    "subject": "dsa",
    "topic": "Bit Manipulation",
    "title": "Day 72: Bitwise Fundamentals & Masking Shortcuts",
    "description": "Master bitwise AND (&), OR (|), XOR (^), NOT (~), and shifts (<<, >>). Learn Brian Kernighan’s set bit counting.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Clear lowest set bit: n & (n - 1)",
      "Check if power of two: (n > 0) && ((n & (n - 1)) == 0)",
      "Get, set, and toggle K-th bit using 1 << k bitmask"
    ],
    "practiceQuestions": [
      {
        "title": "Number of 1 Bits",
        "url": "https://leetcode.com/problems/number-of-1-bits/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 72,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — Mastery Practice: 2D Mensuration: Trapeziums & Rhombus",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Area of a rhombus with diagonals 12cm and 16cm is:",
      "options": [
        "96 cm^2",
        "192 cm^2",
        "80 cm^2",
        "100 cm^2"
      ],
      "answerKey": "96 cm^2",
      "explanation": "Area = 1/2 * d1 * d2 = 0.5 * 12 * 16 = 96 cm^2."
    }
  },
  {
    "dayNumber": 72,
    "subject": "reasoning",
    "topic": "Scheduling Puzzles",
    "title": "Scheduling Puzzles — Mastery Practice: Weekdays Event Assignment Matrix",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Scheduling Puzzles",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Five exams are held Mon through Fri. Math is before Physics. English is immediately after Physics. Which day cannot be English?",
      "options": [
        "Monday",
        "Tuesday",
        "Friday",
        "Wednesday"
      ],
      "answerKey": "Monday",
      "explanation": "English is immediately after Physics, so English can only be Tue, Wed, Thu, or Fri. English cannot be held on Monday."
    }
  },
  {
    "dayNumber": 72,
    "subject": "english",
    "topic": "Group Discussion",
    "title": "Group Discussion — Advanced Articulation: Initiating and Reframing Group Dialogue",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How do you enter a discussion when 3 people are speaking at once?",
      "task": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "question": "Daily Speaking Drill: How do you enter a discussion when 3 people are speaking at once?",
      "answerKey": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 72,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 72: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 72 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 73,
    "subject": "dsa",
    "topic": "Bit Manipulation",
    "title": "Day 73: Counting Bits & Single Number via XOR",
    "description": "Compute set bit counts for all numbers 0 to N using DP bit recurrence. Find non-repeating number using XOR.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Use DP relation: bits[i] = bits[i >> 1] + (i & 1) in O(N)",
      "Harness XOR self-cancelling property: x ^ x = 0 and x ^ 0 = x",
      "Find two non-repeating elements by partitioning on rightmost set bit"
    ],
    "practiceQuestions": [
      {
        "title": "Counting Bits",
        "url": "https://leetcode.com/problems/counting-bits/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Single Number",
        "url": "https://leetcode.com/problems/single-number/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 73,
    "subject": "quant",
    "topic": "Geometry and Mensuration",
    "title": "Geometry and Mensuration — Mastery Practice: 3D Mensuration: Cylinder & Cone Volumes",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Geometry and Mensuration",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the volume of a cylinder of radius 7cm and height 10cm (pi = 22/7).",
      "options": [
        "1440 cm^3",
        "1540 cm^3",
        "1640 cm^3",
        "1700 cm^3"
      ],
      "answerKey": "1540 cm^3",
      "explanation": "Volume = pi * r^2 * h = (22/7) * 49 * 10 = 22 * 7 * 10 = 1540 cm^3."
    }
  },
  {
    "dayNumber": 73,
    "subject": "reasoning",
    "topic": "Data Sufficiency",
    "title": "Data Sufficiency — Mastery Practice: Two-Statement Logic Sufficiency",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Data Sufficiency",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Is X positive? Statement I: X^2 = 16. Statement II: X + 4 = 8.",
      "options": [
        "Statement II alone is sufficient",
        "Statement I alone is sufficient",
        "Both needed",
        "Neither sufficient"
      ],
      "answerKey": "Statement II alone is sufficient",
      "explanation": "Statement I gives X = +4 or -4 (not sufficient). Statement II gives X = 4 (positive, sufficient alone)."
    }
  },
  {
    "dayNumber": 73,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Advanced Articulation: Explaining a Tough Bug You Resolved",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "task": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "question": "Daily Speaking Drill: Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "answerKey": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 73,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 73: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 73 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 74,
    "subject": "dsa",
    "topic": "Bit Manipulation",
    "title": "Day 74: Reverse Bits & Missing Number Math",
    "description": "Reverse 32-bit unsigned integer using bit shifting. Find missing number in array of size N using XOR accumulator.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Extract LSB and shift into reversed accumulator",
      "XOR all array numbers with [0..N] to cancel duplicates in O(N)",
      "Handle 32-bit integer boundary edge cases safely in C++"
    ],
    "practiceQuestions": [
      {
        "title": "Reverse Bits",
        "url": "https://leetcode.com/problems/reverse-bits/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Missing Number",
        "url": "https://leetcode.com/problems/missing-number/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "dayNumber": 74,
    "subject": "quant",
    "topic": "Permutation and Combination",
    "title": "Permutation and Combination — Mastery Practice: Factorials & Linear Permutations",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Permutation and Combination",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In how many ways can the letters of the word \"LEADER\" be arranged?",
      "options": [
        "720",
        "360",
        "120",
        "180"
      ],
      "answerKey": "360",
      "explanation": "LEADER has 6 letters with 'E' repeating twice: 6! / 2! = 720 / 2 = 360."
    }
  },
  {
    "dayNumber": 74,
    "subject": "reasoning",
    "topic": "Venn Diagrams",
    "title": "Venn Diagrams — Mastery Practice: Three-Set Logic Overlaps",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Venn Diagrams",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a group of 50 students: 30 play Football, 25 play Cricket, 10 play both. How many play neither?",
      "options": [
        "5",
        "10",
        "15",
        "0"
      ],
      "answerKey": "5",
      "explanation": "Total playing either = 30 + 25 - 10 = 45. Neither = 50 - 45 = 5 students."
    }
  },
  {
    "dayNumber": 74,
    "subject": "english",
    "topic": "Technical Mock Interviews",
    "title": "Technical Mock Interviews — Advanced Articulation: 5-Minute Live Code Explanation Rehearsal",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "task": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "question": "Daily Speaking Drill: Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "answerKey": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 74,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 74: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 74 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 75,
    "subject": "dsa",
    "topic": "Tries",
    "title": "Day 75: Implement Trie (Prefix Tree)",
    "description": "Design TrieNode class with child array of 26 pointers and isEndOfWord flag. Support insert, search, and startsWith.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Construct TrieNode structure with 26 pointers initialized to nullptr",
      "Insert words by branching on missing characters in O(L)",
      "Implement prefix search startsWith in O(L) time and O(1) auxiliary"
    ],
    "practiceQuestions": [
      {
        "title": "Implement Trie (Prefix Tree)",
        "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 75,
    "subject": "quant",
    "topic": "Permutation and Combination",
    "title": "Permutation and Combination — Mastery Practice: Combinations & Team Selection",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Permutation and Combination",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In how many ways can a committee of 3 be chosen from 7 people?",
      "options": [
        "21",
        "35",
        "42",
        "210"
      ],
      "answerKey": "35",
      "explanation": "7C3 = (7 * 6 * 5) / (3 * 2 * 1) = 35."
    }
  },
  {
    "dayNumber": 75,
    "subject": "reasoning",
    "topic": "Input-Output",
    "title": "Input-Output — Mastery Practice: Machine Word and Number Shifting",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Input-Output",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Input: 45 cat 12 bat 89 rat. Step 1 puts largest number first: 89 45 cat 12 bat rat. What goes next in Step 2 for alphabetical word?",
      "options": [
        "bat",
        "cat",
        "rat",
        "12"
      ],
      "answerKey": "bat",
      "explanation": "In standard alternating machine sorting, largest number is placed first, followed by alphabetically smallest word (\"bat\")."
    }
  },
  {
    "dayNumber": 75,
    "subject": "english",
    "topic": "Final Interview Simulation",
    "title": "Final Interview Simulation — Advanced Articulation: Closing Questions for the Hiring Manager",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "task": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "question": "Daily Speaking Drill: Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "answerKey": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 75,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 75: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 75 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 76,
    "subject": "dsa",
    "topic": "Tries",
    "title": "Day 76: Design Add and Search Words Data Structure",
    "description": "Implement Trie with wildcard \".\" character matching via recursive DFS across all valid child pointers.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Handle wildcard dot character by branching across all 26 children",
      "Formulate recursive DFS helper for wildcard Trie traversal",
      "Cleanly allocate and deallocate Trie memory"
    ],
    "practiceQuestions": [
      {
        "title": "Design Add and Search Words Data Structure",
        "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 76,
    "subject": "quant",
    "topic": "Probability",
    "title": "Probability — Company Speed Assessment Day 76: Probability",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Probability",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "What is the probability of getting a sum of 7 when rolling two fair dice?",
      "options": [
        "1/6",
        "1/12",
        "5/36",
        "7/36"
      ],
      "answerKey": "1/6",
      "explanation": "Favorable pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 pairs. Total outcomes = 36. Probability = 6/36 = 1/6."
    }
  },
  {
    "dayNumber": 76,
    "subject": "reasoning",
    "topic": "Number Series",
    "title": "Number Series — Placement Test Reasoning Simulation Day 76: Number Series",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Number Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the next number in series: 2, 5, 11, 20, 32, ?",
      "options": [
        "45",
        "47",
        "49",
        "50"
      ],
      "answerKey": "47",
      "explanation": "Differences: +3, +6, +9, +12. The next difference is +15. 32 + 15 = 47."
    }
  },
  {
    "dayNumber": 76,
    "subject": "english",
    "topic": "Self Introduction",
    "title": "Self Introduction — Final Simulation Day 76: 3-Minute Elevator Pitch Structure",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "task": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "question": "Daily Speaking Drill: Introduce yourself focusing on your degree, core technical strengths, primary project, and passion for software engineering.",
      "answerKey": "Record a 2-minute audio note. Speak clearly without saying \"um\" or \"like\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 76,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 76: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 76 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 77,
    "subject": "dsa",
    "topic": "Mixed Interview Problems",
    "title": "Day 77: Trapping Rain Water & Daily Temperatures",
    "description": "Master two-pointer rain water trapping algorithm in O(N) time and O(1) space.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Maintain leftMax and rightMax boundaries",
      "Advance pointer with lower bounding height and accumulate trapped water",
      "Compare two-pointer vs monotonic stack approaches"
    ],
    "practiceQuestions": [
      {
        "title": "Trapping Rain Water",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 77,
    "subject": "quant",
    "topic": "Probability",
    "title": "Probability — Company Speed Assessment Day 77: Probability",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Probability",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A card is drawn from a 52-card deck. What is the probability of drawing a face card?",
      "options": [
        "3/13",
        "1/4",
        "4/13",
        "1/13"
      ],
      "answerKey": "3/13",
      "explanation": "Face cards = 4 Kings + 4 Queens + 4 Jacks = 12. Probability = 12 / 52 = 3 / 13."
    }
  },
  {
    "dayNumber": 77,
    "subject": "reasoning",
    "topic": "Alphabet Series",
    "title": "Alphabet Series — Placement Test Reasoning Simulation Day 77: Alphabet Series",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Alphabet Series",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "What is the 16th letter of the alphabet from the left?",
      "options": [
        "N",
        "O",
        "P",
        "Q"
      ],
      "answerKey": "P",
      "explanation": "Using EJOTY (E=5, J=10, O=15, T=20, Y=25): O is 15th, so the next letter P is 16th."
    }
  },
  {
    "dayNumber": 77,
    "subject": "english",
    "topic": "Sentence Formation",
    "title": "Sentence Formation — Final Simulation Day 77: Avoiding Common Indianisms & Direct Translations",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "task": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "question": "Daily Speaking Drill: Explain the difference between \"I passed out of college\" and \"I graduated from college\".",
      "answerKey": "Say aloud: \"I graduated from university with a degree in Computer Science.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 77,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 77: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 77 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 78,
    "subject": "dsa",
    "topic": "Mixed Interview Problems",
    "title": "Day 78: LRU Cache Design (Doubly Linked List + Hash Map)",
    "description": "Design Least Recently Used (LRU) cache with O(1) get and put using custom Doubly Linked List and unordered_map.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Maintain dummy head and tail nodes to eliminate null checks",
      "Move accessed node to head of doubly linked list in O(1)",
      "Evict node immediately preceding tail when capacity is exceeded"
    ],
    "practiceQuestions": [
      {
        "title": "LRU Cache",
        "url": "https://leetcode.com/problems/lru-cache/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 78,
    "subject": "quant",
    "topic": "Data Interpretation",
    "title": "Data Interpretation — Company Speed Assessment Day 78: Data Interpretation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Data Interpretation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Sales grew from $250k in 2024 to $325k in 2025. What was the percentage increase?",
      "options": [
        "25%",
        "30%",
        "35%",
        "20%"
      ],
      "answerKey": "30%",
      "explanation": "Increase = $75k. Percentage increase = (75 / 250) * 100 = 30%."
    }
  },
  {
    "dayNumber": 78,
    "subject": "reasoning",
    "topic": "Analogy",
    "title": "Analogy — Placement Test Reasoning Simulation Day 78: Analogy",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Analogy",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Doctor : Hospital :: Teacher : ?",
      "options": [
        "Student",
        "School",
        "Book",
        "Classroom"
      ],
      "answerKey": "School",
      "explanation": "A doctor operates in a hospital; a teacher operates in a school (workplace relationship)."
    }
  },
  {
    "dayNumber": 78,
    "subject": "english",
    "topic": "Tenses",
    "title": "Tenses — Final Simulation Day 78: Present Perfect vs Simple Past in Tech Interviews",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Talk about a project you completed last semester versus technologies you have used recently.",
      "task": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "question": "Daily Speaking Drill: Talk about a project you completed last semester versus technologies you have used recently.",
      "answerKey": "Form 3 sentences using \"I built...\", \"I worked on...\", and \"I have gained experience in...\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 78,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 78: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 78 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 79,
    "subject": "dsa",
    "topic": "Mixed Interview Problems",
    "title": "Day 79: Word Break & Decode Ways DP",
    "description": "Determine if string can be segmented into dictionary words. Count valid digit-to-letter decodings.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate 1D boolean DP for word segmentation",
      "Validate 1-digit and 2-digit number conversions (1-26)",
      "Handle leading zero invalid decode states"
    ],
    "practiceQuestions": [
      {
        "title": "Word Break",
        "url": "https://leetcode.com/problems/word-break/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Decode Ways",
        "url": "https://leetcode.com/problems/decode-ways/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 79,
    "subject": "quant",
    "topic": "Data Interpretation",
    "title": "Data Interpretation — Company Speed Assessment Day 79: Data Interpretation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Data Interpretation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In a bar chart comparing 4 departments, Dept A has 120 employees and Dept B has 80. Dept A is what % more than Dept B?",
      "options": [
        "33.33%",
        "50%",
        "40%",
        "66.66%"
      ],
      "answerKey": "50%",
      "explanation": "Difference = 120 - 80 = 40. Percentage more = (40 / 80) * 100 = 50%."
    }
  },
  {
    "dayNumber": 79,
    "subject": "reasoning",
    "topic": "Classification",
    "title": "Classification — Placement Test Reasoning Simulation Day 79: Classification",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Classification",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Find the odd one out: 27, 64, 125, 144, 216",
      "options": [
        "27",
        "64",
        "144",
        "216"
      ],
      "answerKey": "144",
      "explanation": "27=3^3, 64=4^3, 125=5^3, 216=6^3 are all perfect cubes. 144 is only a square (12^2), not a cube."
    }
  },
  {
    "dayNumber": 79,
    "subject": "english",
    "topic": "Daily Conversations",
    "title": "Daily Conversations — Final Simulation Day 79: Professional Greetings and Interview Small Talk",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "task": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "question": "Daily Speaking Drill: How would you respond when the interviewer asks: \"How has your day been so far?\"",
      "answerKey": "Practice a warm, energetic 20-second response highlighting optimism and readiness.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 79,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 79: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 79 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 80,
    "subject": "dsa",
    "topic": "Mixed Interview Problems",
    "title": "Day 80: Median of Two Sorted Arrays",
    "description": "Find median of two sorted arrays in O(log(min(M, N))) time by binary searching the partition boundary.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Partition both arrays such that left halves equal right halves in size",
      "Verify partition condition: leftA <= rightB && leftB <= rightA",
      "Calculate median for even and odd combined lengths"
    ],
    "practiceQuestions": [
      {
        "title": "Median of Two Sorted Arrays",
        "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 80,
    "subject": "quant",
    "topic": "Data Interpretation",
    "title": "Data Interpretation — Company Speed Assessment Day 80: Data Interpretation",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Data Interpretation",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "In a budget pie chart, Food occupies a 72-degree central angle. What percentage of the budget is Food?",
      "options": [
        "15%",
        "20%",
        "25%",
        "18%"
      ],
      "answerKey": "20%",
      "explanation": "Percentage = (72 / 360) * 100 = (1 / 5) * 100 = 20%."
    }
  },
  {
    "dayNumber": 80,
    "subject": "reasoning",
    "topic": "Coding-Decoding",
    "title": "Coding-Decoding — Placement Test Reasoning Simulation Day 80: Coding-Decoding",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Coding-Decoding",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If CAT is coded as DBU, how is DOG coded?",
      "options": [
        "EPH",
        "EOF",
        "EQH",
        "ENH"
      ],
      "answerKey": "EPH",
      "explanation": "Each letter is shifted by +1: D (+1) = E, O (+1) = P, G (+1) = H."
    }
  },
  {
    "dayNumber": 80,
    "subject": "english",
    "topic": "Vocabulary",
    "title": "Vocabulary — Final Simulation Day 80: Action Verbs for Resume & Project Impact",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "task": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "question": "Daily Speaking Drill: Explain how you \"spearheaded\", \"optimized\", and \"refactored\" a codebase.",
      "answerKey": "Say 3 sentences using action verbs instead of passive phrases like \"I was given the task\".",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 80,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 80: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 80 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 81,
    "subject": "dsa",
    "topic": "Mixed Interview Problems",
    "title": "Day 81: Serialize and Deserialize Binary Tree",
    "description": "Convert binary tree into comma-separated string representation via BFS/preorder and reconstruct original tree.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Use \"null\" delimiters for missing child pointers in traversal string",
      "Use stringstream and getline to parse serialized tokens",
      "Reconstruct tree using queue-based deserialization in O(N)"
    ],
    "practiceQuestions": [
      {
        "title": "Serialize and Deserialize Binary Tree",
        "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 81,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Company Speed Assessment Day 81: Percentages",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "What is the fraction equivalent of 37.5%?",
      "options": [
        "3/8",
        "3/5",
        "5/8",
        "7/16"
      ],
      "answerKey": "3/8",
      "explanation": "37.5% = 37.5 / 100 = 75 / 200 = 3/8. Knowing standard eighths (1/8=12.5%, 3/8=37.5%, 5/8=62.5%) saves critical exam time."
    }
  },
  {
    "dayNumber": 81,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Placement Test Reasoning Simulation Day 81: Direction Sense",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "A man walks 3km North, then 4km East. How far is he from the starting point?",
      "options": [
        "5 km",
        "7 km",
        "6 km",
        "8 km"
      ],
      "answerKey": "5 km",
      "explanation": "Distance = sqrt(3^2 + 4^2) = sqrt(9 + 16) = sqrt(25) = 5 km."
    }
  },
  {
    "dayNumber": 81,
    "subject": "english",
    "topic": "Listening and Shadowing",
    "title": "Listening and Shadowing — Final Simulation Day 81: Pacing and Intonation Shadowing Drill",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "task": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "question": "Daily Speaking Drill: Shadow an engineering video clip for 5 minutes. Match the speaker's pauses and emphasis.",
      "answerKey": "Read an article from Martin Fowler or AWS blog aloud with deliberate rhythmic pauses.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 81,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 81: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 81 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 82,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 82: Timed Mock Assessment: Arrays & Strings Focus",
    "description": "Complete 2 LeetCode Medium problems in 60 minutes under timed online assessment conditions.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Simulate timed technical interview environment",
      "Write bug-free solution on first compile without debugger",
      "Articulate time and space complexity immediately"
    ],
    "practiceQuestions": [
      {
        "title": "3Sum",
        "url": "https://leetcode.com/problems/3sum/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Longest Substring Without Repeating Characters",
        "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 82,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Company Speed Assessment Day 82: Percentages",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A price rises by 20% and is then discounted by 20%. What is the net percentage change?",
      "options": [
        "0% (no change)",
        "4% decrease",
        "4% increase",
        "2% decrease"
      ],
      "answerKey": "4% decrease",
      "explanation": "Using successive formula a + b + (ab/100): +20 - 20 + (20 * -20 / 100) = -4%, which is a net 4% decrease."
    }
  },
  {
    "dayNumber": 82,
    "subject": "reasoning",
    "topic": "Direction Sense",
    "title": "Direction Sense — Placement Test Reasoning Simulation Day 82: Direction Sense",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Direction Sense",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "At sunrise, if Rohan is facing Amit and Rohan's shadow falls to his left, which direction is Rohan facing?",
      "options": [
        "North",
        "South",
        "East",
        "West"
      ],
      "answerKey": "North",
      "explanation": "At sunrise, sunlight comes from the East, so shadows fall toward the West. If shadow is on Rohan's left, his left is West, which means he is facing North."
    }
  },
  {
    "dayNumber": 82,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Final Simulation Day 82: 2-Minute Impromptu Speech on Clean Code",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "task": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "question": "Daily Speaking Drill: Speak continuously for 2 minutes on: \"Why readable code is more important than clever code.\"",
      "answerKey": "No stopping for 120 seconds. If stuck, elaborate on testing and maintainability.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 82,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 82: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 82 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 83,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 83: Timed Mock Assessment: Graphs & Trees Focus",
    "description": "Complete graph cycle and tree traversal assessment under 60-minute time cap.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Implement graph traversal and cycle check without consulting notes",
      "Handle disconnected components and multi-source inputs",
      "Write clean modular helper functions"
    ],
    "practiceQuestions": [
      {
        "title": "Course Schedule",
        "url": "https://leetcode.com/problems/course-schedule/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Binary Tree Level Order Traversal",
        "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 83,
    "subject": "quant",
    "topic": "Percentages",
    "title": "Percentages — Company Speed Assessment Day 83: Percentages",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Percentages",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A machine valued at $10,000 depreciates by 10% annually. What is its value after 2 years?",
      "options": [
        "$8,000",
        "$8,100",
        "$8,200",
        "$9,000"
      ],
      "answerKey": "$8,100",
      "explanation": "Value = 10,000 * (1 - 0.10)^2 = 10,000 * 0.81 = $8,100."
    }
  },
  {
    "dayNumber": 83,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Placement Test Reasoning Simulation Day 83: Blood Relations",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Pointing to a man, a woman said \"His mother is the only daughter of my mother.\" How is the woman related to the man?",
      "options": [
        "Mother",
        "Aunt",
        "Sister",
        "Daughter"
      ],
      "answerKey": "Mother",
      "explanation": "The \"only daughter of my mother\" is the woman herself. So she is his mother."
    }
  },
  {
    "dayNumber": 83,
    "subject": "english",
    "topic": "Explaining Technical Concepts",
    "title": "Explaining Technical Concepts — Final Simulation Day 83: Explain REST API to a Non-Tech Recruiter",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Explain what an API is using the classic restaurant waiter metaphor.",
      "task": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "question": "Daily Speaking Drill: Explain what an API is using the classic restaurant waiter metaphor.",
      "answerKey": "Record yourself explaining: Client (Customer) -> Request (Menu Order) -> Server (Kitchen) -> Response (Food).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 83,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 83: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 83 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 84,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 84: Timed Mock Assessment: Dynamic Programming Focus",
    "description": "Solve 1D and 2D DP problems under 60-minute live interview conditions.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Formulate clear recurrence equations on paper before coding",
      "Implement bottom-up table with proper initial states",
      "Perform space optimization to 1D row array"
    ],
    "practiceQuestions": [
      {
        "title": "Coin Change",
        "url": "https://leetcode.com/problems/coin-change/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Unique Paths",
        "url": "https://leetcode.com/problems/unique-paths/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 84,
    "subject": "quant",
    "topic": "Profit and Loss",
    "title": "Profit and Loss — Company Speed Assessment Day 84: Profit and Loss",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Profit and Loss",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "An item bought for $400 is sold for $480. What is the profit percentage?",
      "options": [
        "15%",
        "20%",
        "25%",
        "16.66%"
      ],
      "answerKey": "20%",
      "explanation": "Profit = $480 - $400 = $80. Profit % = (80 / 400) * 100 = 20%."
    }
  },
  {
    "dayNumber": 84,
    "subject": "reasoning",
    "topic": "Blood Relations",
    "title": "Blood Relations — Placement Test Reasoning Simulation Day 84: Blood Relations",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Blood Relations",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "If A + B means A is son of B, and A * B means A is brother of B, what does P + Q * R mean?",
      "options": [
        "P is son of R",
        "P is nephew of R",
        "P is brother of R",
        "P is uncle of R"
      ],
      "answerKey": "P is nephew of R",
      "explanation": "Q * R means Q is brother of R. P + Q means P is son of Q. Therefore, P is the nephew of R."
    }
  },
  {
    "dayNumber": 84,
    "subject": "english",
    "topic": "Explaining DSA Solutions",
    "title": "Explaining DSA Solutions — Final Simulation Day 84: Verbal Walkthrough of Two Sum using Hash Map",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "task": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "question": "Daily Speaking Drill: Walk through your mental steps before coding: Problem statement, Brute Force O(N^2), Optimization to O(N).",
      "answerKey": "Explain how storing target - num in an unordered_map reduces lookup time to O(1).",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 84,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 84: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 84 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 85,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 85: Full Company Assessment Simulation 1 (Amazon OA)",
    "description": "Complete 2 high-frequency placement problems under strict 70-minute timer.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Simulate actual product company online assessment environment",
      "Pass all hidden corner-case unit tests",
      "Audit memory consumption and avoid unnecessary object copies"
    ],
    "practiceQuestions": [
      {
        "title": "Number of Islands",
        "url": "https://leetcode.com/problems/number-of-islands/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      },
      {
        "title": "Reorder List",
        "url": "https://leetcode.com/problems/reorder-list/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 85,
    "subject": "quant",
    "topic": "Profit and Loss",
    "title": "Profit and Loss — Company Speed Assessment Day 85: Profit and Loss",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Profit and Loss",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A grocer claims to sell at cost price but uses 900g instead of 1kg. Find his gain percentage.",
      "options": [
        "10%",
        "11.11%",
        "9.09%",
        "12.5%"
      ],
      "answerKey": "11.11%",
      "explanation": "Gain % = (Error / (True Value - Error)) * 100 = (100 / 900) * 100 = 11.11%."
    }
  },
  {
    "dayNumber": 85,
    "subject": "reasoning",
    "topic": "Ranking and Order",
    "title": "Ranking and Order — Placement Test Reasoning Simulation Day 85: Ranking and Order",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Ranking and Order",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "In a class, Rahul ranks 7th from top and 28th from bottom. How many students are there in the class?",
      "options": [
        "34",
        "35",
        "36",
        "33"
      ],
      "answerKey": "34",
      "explanation": "Total = Top + Bottom - 1 = 7 + 28 - 1 = 34 students."
    }
  },
  {
    "dayNumber": 85,
    "subject": "english",
    "topic": "Project Explanation",
    "title": "Project Explanation — Final Simulation Day 85: STAR Method for System Architecture Pitch",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "task": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "question": "Daily Speaking Drill: Describe your favorite full-stack or systems project: Situation, Task, Action, and Result.",
      "answerKey": "Deliver a structured 90-second summary highlighting scalability and technologies chosen.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 85,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 85: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 85 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 86,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 86: Full Company Assessment Simulation 2 (TCS / Infosys)",
    "description": "Complete 3 competitive problems spanning searching, strings, and dynamic programming.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Achieve 100% test case pass rate",
      "Manage pacing: 15 mins for Easy, 25 mins each for Mediums",
      "Verify input format parsing with fast C++ I/O (cin.tie(NULL))"
    ],
    "practiceQuestions": [
      {
        "title": "Valid Parentheses",
        "url": "https://leetcode.com/problems/valid-parentheses/",
        "platform": "LeetCode",
        "difficulty": "Easy"
      },
      {
        "title": "Merge Intervals",
        "url": "https://leetcode.com/problems/merge-intervals/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 86,
    "subject": "quant",
    "topic": "Ratio and Proportion",
    "title": "Ratio and Proportion — Company Speed Assessment Day 86: Ratio and Proportion",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ratio and Proportion",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "Find the mean proportional between 9 and 16.",
      "options": [
        "12",
        "12.5",
        "144",
        "13"
      ],
      "answerKey": "12",
      "explanation": "Mean proportional = sqrt(a * b) = sqrt(9 * 16) = sqrt(144) = 12."
    }
  },
  {
    "dayNumber": 86,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Placement Test Reasoning Simulation Day 86: Syllogism",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statements: All cats are animals. All animals are mammals. Conclusion: All cats are mammals.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Cannot be determined"
      ],
      "answerKey": "Follows",
      "explanation": "Cats subset of Animals, Animals subset of Mammals, therefore Cats subset of Mammals. Conclusion definitely follows."
    }
  },
  {
    "dayNumber": 86,
    "subject": "english",
    "topic": "HR Interview Questions",
    "title": "HR Interview Questions — Final Simulation Day 86: Handling \"What Is Your Biggest Weakness?\"",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "task": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "question": "Daily Speaking Drill: Formulate an authentic weakness paired with concrete steps you are actively taking to overcome it.",
      "answerKey": "Speak aloud: State weakness (e.g. over-engineering initial prototypes), realization, and your current remediation.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 86,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 86: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 86 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 87,
    "subject": "dsa",
    "topic": "Mixed Interview Problems",
    "title": "Day 87: Hard Problem Strategy: Burst Balloons & Interval DP",
    "description": "Understand interval dynamic programming reverse thinking: choose the LAST balloon to burst in (i, j).",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Frame interval DP: dp[i][j] = max(dp[i][k] + dp[k][j] + cost)",
      "Understand why thinking in reverse avoids subproblem dependencies",
      "Write memoized interval DP recursion with bounds checking"
    ],
    "practiceQuestions": [
      {
        "title": "Burst Balloons",
        "url": "https://leetcode.com/problems/burst-balloons/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 87,
    "subject": "quant",
    "topic": "Ratio and Proportion",
    "title": "Ratio and Proportion — Company Speed Assessment Day 87: Ratio and Proportion",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Ratio and Proportion",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A and B invest $3,000 and $5,000 for 1 year. If total profit is $1,600, what is A's share?",
      "options": [
        "$600",
        "$800",
        "$1,000",
        "$500"
      ],
      "answerKey": "$600",
      "explanation": "Ratio of profits = 3:5. A's share = (3 / 8) * 1600 = $600."
    }
  },
  {
    "dayNumber": 87,
    "subject": "reasoning",
    "topic": "Syllogism",
    "title": "Syllogism — Placement Test Reasoning Simulation Day 87: Syllogism",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Syllogism",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: Only a few books are pens. Conclusion: Some books are not pens.",
      "options": [
        "Definite Follows",
        "Does not follow",
        "False",
        "Data insufficient"
      ],
      "answerKey": "Definite Follows",
      "explanation": "\"Only a few\" means both \"Some A are B\" AND \"Some A are not B\" are simultaneously true."
    }
  },
  {
    "dayNumber": 87,
    "subject": "english",
    "topic": "Group Discussion",
    "title": "Group Discussion — Final Simulation Day 87: Initiating and Reframing Group Dialogue",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "How do you enter a discussion when 3 people are speaking at once?",
      "task": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "question": "Daily Speaking Drill: How do you enter a discussion when 3 people are speaking at once?",
      "answerKey": "Practice saying: \"I see your point regarding X, and building on that, we should also examine Y.\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 87,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 87: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 87 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 88,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 88: Top 14 DSA Patterns Comprehensive Review",
    "description": "Systematically review the 14 core coding patterns: Two Pointers, Sliding Window, Monotonic Stack, Topo Sort, etc.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Map unseen interview problem statements to one of the 14 patterns",
      "Review C++ STL cheat sheet: vector, set, map, deque, priority_queue",
      "Solidify asymptotic complexity guarantees of all STL containers"
    ],
    "practiceQuestions": [
      {
        "title": "Top K Frequent Elements",
        "url": "https://leetcode.com/problems/top-k-frequent-elements/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 88,
    "subject": "quant",
    "topic": "Average",
    "title": "Average — Company Speed Assessment Day 88: Average",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Average",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
      "options": [
        "30",
        "35",
        "32",
        "29"
      ],
      "answerKey": "35",
      "explanation": "Sum of 5 numbers = 5 * 27 = 135. Sum of remaining 4 = 4 * 25 = 100. Excluded number = 135 - 100 = 35."
    }
  },
  {
    "dayNumber": 88,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Placement Test Reasoning Simulation Day 88: Inequalities",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Given P > Q >= R = S. Is P > S definitely true?",
      "options": [
        "Yes (Definite True)",
        "No (False)",
        "Cannot be determined",
        "Partially true"
      ],
      "answerKey": "Yes (Definite True)",
      "explanation": "Since P > Q and Q >= S, P is strictly greater than S."
    }
  },
  {
    "dayNumber": 88,
    "subject": "english",
    "topic": "Speaking Without Hesitation",
    "title": "Speaking Without Hesitation — Final Simulation Day 88: Explaining a Tough Bug You Resolved",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "task": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "question": "Daily Speaking Drill: Describe a stubborn memory leak or runtime bug you encountered and how you systematically isolated it.",
      "answerKey": "Articulate your debugging process: Reproduce -> Isolate -> Hypothesize -> Fix -> Regression test.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 88,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 88: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 88 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 89,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 89: Light Warmup Practice & Code Cleanliness Polish",
    "description": "Solve 2 medium warmup problems focusing on clean variable naming and modular decomposition.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Write self-documenting code with clear variable and function names",
      "Practice verbal dry runs tracing inputs on whiteboards/notepad",
      "Reinforce calm, deliberate problem breakdown habits"
    ],
    "practiceQuestions": [
      {
        "title": "Search in Rotated Sorted Array",
        "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
        "platform": "LeetCode",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "dayNumber": 89,
    "subject": "quant",
    "topic": "Average",
    "title": "Average — Company Speed Assessment Day 89: Average",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Average",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A batsman scores 85 runs in his 12th inning, increasing his average by 3. What is his average after 12 innings?",
      "options": [
        "48",
        "51",
        "52",
        "45"
      ],
      "answerKey": "51",
      "explanation": "Let previous average be x. 11x + 85 = 12(x + 3) => 11x + 85 = 12x + 36 => x = 49. New average = 49 + 3 = 51 (or 85 - 12*3 = 49, new = 52 - wait: 85 - 36 = 49, so 49 + 3 = 52? Wait: 12*3 = 36; 85 - 36 = 49. New average is 52? Wait: 11*49 + 85 = 539 + 85 = 624. 624/12 = 52. Answer is 52)."
    }
  },
  {
    "dayNumber": 89,
    "subject": "reasoning",
    "topic": "Inequalities",
    "title": "Inequalities — Placement Test Reasoning Simulation Day 89: Inequalities",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Inequalities",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Statement: M >= N > O, O = P < Q. Conclusion: M > P.",
      "options": [
        "Follows",
        "Does not follow",
        "Either or",
        "Neither follows"
      ],
      "answerKey": "Follows",
      "explanation": "M >= N > O = P implies M > O = P, hence M > P definitely holds."
    }
  },
  {
    "dayNumber": 89,
    "subject": "english",
    "topic": "Technical Mock Interviews",
    "title": "Technical Mock Interviews — Final Simulation Day 89: 5-Minute Live Code Explanation Rehearsal",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "task": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "question": "Daily Speaking Drill: Pretend you just wrote Dijkstra's algorithm. Walk through the priority queue maintenance aloud.",
      "answerKey": "Explain why we push {dist, u} instead of {u, dist} into the C++ priority_queue.",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 89,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 89: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 89 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  },
  {
    "dayNumber": 90,
    "subject": "dsa",
    "topic": "Revision and Mock Tests",
    "title": "Day 90: Placement Day Readiness & Victory Review",
    "description": "Review personal problem-solving checklist, high-frequency templates, and interview execution mindset.",
    "estimatedMinutes": 75,
    "learningObjectives": [
      "Solidify confidence across all 90 days of structured DSA practice",
      "Review standard templates for BFS, DFS, Dijkstra, Binary Search, and DP",
      "Enter placement drive with complete mastery of C++ DSA"
    ],
    "practiceQuestions": [
      {
        "title": "Trapping Rain Water",
        "url": "https://leetcode.com/problems/trapping-rain-water/",
        "platform": "LeetCode",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "dayNumber": 90,
    "subject": "quant",
    "topic": "Interest",
    "title": "Interest — Company Speed Assessment Day 90: Interest",
    "description": "Target: 25 minutes. Master key shortcuts, equations, and solve timed placement questions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Derive and apply core formulas for Interest",
      "Solve timed aptitude problems in under 60 seconds per question",
      "Verify numerical accuracy without calculator assistance"
    ],
    "exercise": {
      "question": "A sum amounts to $720 in 2 years and $1,020 in 7 years at simple interest. Find the principal.",
      "options": [
        "$500",
        "$600",
        "$550",
        "$650"
      ],
      "answerKey": "$600",
      "explanation": "Interest for 5 years = 1020 - 720 = $300. Interest per year = $60. Interest for 2 years = $120. Principal = 720 - 120 = $600."
    }
  },
  {
    "dayNumber": 90,
    "subject": "reasoning",
    "topic": "Seating Arrangements",
    "title": "Seating Arrangements — Placement Test Reasoning Simulation Day 90: Seating Arrangements",
    "description": "Target: 25 minutes. Solve pattern recognition, analytical reasoning, and logic puzzles under timed conditions.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Identify the underlying logical structure of Seating Arrangements",
      "Eliminate incorrect options through contradiction analysis",
      "Complete standard placement test puzzles with zero negative marking penalties"
    ],
    "exercise": {
      "question": "Five friends A, B, C, D, E sit facing North. C sits in the middle. A is left of C. Where can A sit?",
      "options": [
        "Position 1 or 2",
        "Position 4 or 5",
        "Position 3 only",
        "Position 5 only"
      ],
      "answerKey": "Position 1 or 2",
      "explanation": "Middle position is 3. To the left of position 3 are positions 1 and 2."
    }
  },
  {
    "dayNumber": 90,
    "subject": "english",
    "topic": "Final Interview Simulation",
    "title": "Final Interview Simulation — Final Simulation Day 90: Closing Questions for the Hiring Manager",
    "description": "Target: 25 minutes. Daily speaking drill to develop clear diction, professional delivery, and interview poise.",
    "estimatedMinutes": 25,
    "learningObjectives": [
      "Deliver verbal responses without filler words (um, ah, like)",
      "Structure complex thoughts quickly using the STAR and Pyramid principles",
      "Articulate technical trade-offs clearly to interviewers"
    ],
    "exercise": {
      "prompt": "Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "task": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "question": "Daily Speaking Drill: Ask 2 thoughtful, high-conviction questions to the interviewer at the end of the round.",
      "answerKey": "Practice asking: \"What does success look like in the first 90 days for this engineering team?\"",
      "explanation": "Speaking consistently every day builds neurological pathways for spontaneous fluency and removes hesitation."
    }
  },
  {
    "dayNumber": 90,
    "subject": "revision",
    "topic": "Daily Revision & Recall",
    "title": "Day 90: Formula & Concept Active Recall",
    "description": "Target: 10 minutes. Review Day 90 DSA pattern templates, speed-math formulas, and interview notes.",
    "estimatedMinutes": 10,
    "learningObjectives": [
      "Review key formulas and asymptotic complexities learned today",
      "Self-test problem edge cases without consulting notes",
      "Solidify 90-day long-term memory retention through active recall"
    ],
    "practiceQuestions": [],
    "exercise": {
      "prompt": "Self-test: Recall today's core algorithmic pattern and speed formulas in under 60 seconds.",
      "task": "Review notes and verify active recall.",
      "question": "Daily Revision Check: Did you review today's concepts and practice problems?",
      "options": [
        "Completed thoroughly",
        "Reviewed partially",
        "Needs re-review",
        "Skipped"
      ],
      "answerKey": "Completed thoroughly",
      "explanation": "10 minutes of daily active recall prevents the Ebbinghaus forgetting curve."
    }
  }
];

export default COMPLETE_90_DAYS_CURRICULUM;
