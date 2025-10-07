export type Subject = {
  name: string;
  learningOutcomes: string;
};

export type Grade = {
  name: string;
  summary: string;
  subjects: Subject[];
};

export type Level = {
  name: string;
  description: string;
  imageId: string;
  grades: Grade[];
};

export const cbcData: Level[] = [
  {
    name: 'Early Years Education',
    description: 'Foundation level for ages 4-8, focusing on play-based learning and basic literacy.',
    imageId: 'early_years',
    grades: [
      {
        name: 'Pre-Primary 1',
        summary: 'In Pre-Primary 1, learners are introduced to foundational concepts through play. Activities focus on developing basic communication skills, recognizing numbers and shapes, and fostering creativity through art and music.',
        subjects: [
          {
            name: 'Language Activities',
            learningOutcomes: 'Learners should be able to listen and respond to simple instructions, express their needs and feelings, and recognize letters of the alphabet.',
          },
          {
            name: 'Mathematical Activities',
            learningOutcomes: 'Learners should be able to count numbers 1-20, sort objects based on color and size, and identify basic shapes.',
          },
          {
            name: 'Creative Arts',
            learningOutcomes: 'Learners should be able to express themselves through drawing, painting, and modeling with clay.',
          },
          {
            name: 'Music Activities',
            learningOutcomes: 'Learners will engage in singing games, explore different sounds, and perform simple rhythmic patterns.',
          },
        ],
      },
      {
        name: 'Pre-Primary 2',
        summary: 'Pre-Primary 2 builds on PP1, with a continued focus on play-based learning but with slightly more structured activities to prepare for Grade 1. Learners begin to form simple words and do basic addition.',
        subjects: [
          {
            name: 'Language Activities',
            learningOutcomes: 'Learners should be able to recognize and write their own name, understand simple stories, and begin to blend letter sounds to form words.',
          },
          {
            name: 'Mathematical Activities',
            learningOutcomes: 'Learners should be able to count up to 50, perform simple addition with objects, and recognize patterns.',
          },
          {
            name: 'Environmental Activities',
            learningOutcomes: 'Learners will explore their immediate environment, learn about plants and animals, and practice basic hygiene.',
          },
          {
            name: 'Creative Arts',
            learningOutcomes: 'Learners will continue to explore art materials and techniques, creating more detailed drawings and crafts.',
          },
        ],
      },
      {
        name: 'Grade 1',
        summary: 'Grade 1 builds upon the pre-primary foundation by introducing more structured learning in core subjects. The curriculum focuses on developing early literacy and numeracy skills, as well as an awareness of the immediate environment.',
        subjects: [
          {
            name: 'English Language',
            learningOutcomes: 'Develop listening and speaking skills for communication, read and comprehend short texts, and write simple sentences.',
          },
          {
            name: 'Kiswahili Language',
            learningOutcomes: 'Kukuza uwezo wa kusikiliza na kuzungumza, kusoma na kuelewa hadithi fupi, na kuandika sentensi rahisi.',
          },
          {
            name: 'Mathematics',
            learningOutcomes: 'Work with numbers up to 100, perform basic addition and subtraction, and measure length using non-standard units.',
          },
          {
            name: 'Environmental Activities',
            learningOutcomes: 'Identify features in the local environment, practice good hygiene, and understand basic safety at home and school.',
          },
        ],
      },
      {
        name: 'Grade 2',
        summary: 'In Grade 2, learners continue to build on foundational skills. Reading becomes more fluent, writing more structured, and mathematical concepts expand to include subtraction and simple measurement.',
        subjects: [
          {
            name: 'English Language',
            learningOutcomes: 'Read age-appropriate stories with fluency, write short paragraphs, and use a wider vocabulary to express ideas.',
          },
          {
            name: 'Kiswahili Language',
            learningOutcomes: 'Kusoma hadithi kwa ufasaha, kuandika aya fupi, na kutumia msamiati mpana kujieleza.',
          },
          {
            name: 'Mathematics',
            learningOutcomes: 'Perform addition and subtraction with two-digit numbers, understand the concept of multiplication, and measure time in hours.',
          },
          {
            name: 'Hygiene and Nutrition',
            learningOutcomes: 'Understand the importance of a balanced diet, practice personal hygiene, and identify common illnesses and their prevention.',
          },
        ],
      },
      {
        name: 'Grade 3',
        summary: 'Grade 3 marks the final year of Early Years Education, with a focus on consolidating literacy and numeracy skills. Learners begin to work more independently and engage in simple project-based activities.',
        subjects: [
          {
            name: 'English Language',
            learningOutcomes: 'Read with comprehension, write organized paragraphs, and participate in class discussions with confidence.',
          },
          {
            name: 'Kiswahili Language',
            learningOutcomes: 'Kuelewa na kujibu maswali kuhusu hadithi, kuandika insha fupi, na kushiriki katika majadiliano darasani.',
          },
          {
            name: 'Mathematics',
            learningOutcomes: 'Work with multiplication and division, understand fractions, and solve simple word problems.',
          },
          {
            name: 'Christian Religious Education',
            learningOutcomes: 'Learn about key biblical stories, understand Christian values, and show respect for others.',
          },
        ],
      },
    ],
  },
  {
    name: 'Middle School',
    description: 'Ages 9-14, this level broadens the curriculum and introduces more specialized subjects.',
    imageId: 'middle_school',
    grades: [
      {
        name: 'Grade 4',
        summary: 'Grade 4 marks a transition to a broader curriculum, where learners explore more specialized subjects. The focus is on applying foundational skills to understand scientific concepts, social structures, and practical life skills like agriculture.',
        subjects: [
          {
            name: 'Science and Technology',
            learningOutcomes: 'Learners will explore properties of matter, understand the human body systems, and apply basic technological principles.',
          },
          {
            name: 'Social Studies',
            learningOutcomes: 'Learners will study the history of their county, understand different cultures in Kenya, and learn about governance.',
          },
          {
            name: 'Agriculture',
            learningOutcomes: 'Learners will practice basic farming techniques, understand soil conservation, and learn about common crops and livestock.',
          },
          {
            name: 'Physical and Health Education',
            learningOutcomes: 'Develop skills in various sports, understand the importance of nutrition, and learn about personal hygiene.',
          },
        ],
      },
      {
        name: 'Grade 5',
        summary: 'In Grade 5, learners delve deeper into scientific inquiry and social studies, while also being introduced to creative arts as a core subject. The curriculum encourages critical thinking and collaboration.',
        subjects: [
          {
            name: 'Science and Technology',
            learningOutcomes: 'Investigate simple machines, explore the solar system, and understand the life cycles of plants and animals.',
          },
          {
            name: 'Social Studies',
            learningOutcomes: 'Learn about the physical geography of Kenya, the history of migration and settlement, and the structure of the national government.',
          },
          {
            name: 'Creative Arts',
            learningOutcomes: 'Explore elements of art and principles of design, practice drawing and painting techniques, and learn about Kenyan art.',
          },
          {
            name: 'Home Science',
            learningOutcomes: 'Learn basic cooking skills, laundry management, and how to maintain a clean home environment.',
          },
        ],
      },
      {
        name: 'Grade 6',
        summary: 'Grade 6 is the capstone year of primary education, preparing learners for the transition to Junior School. The curriculum includes a national assessment and focuses on the application of knowledge and skills.',
        subjects: [
          {
            name: 'Mathematics',
            learningOutcomes: 'Solve complex word problems involving multiple steps, work with decimals and percentages, and interpret data from graphs and charts.',
          },
          {
            name: 'English Language',
            learningOutcomes: 'Analyze texts for meaning and author’s intent, write formal letters and reports, and deliver oral presentations.',
          },
          {
            name: 'Kiswahili Language',
            learningOutcomes: 'Kuchambua matini, kuandika barua rasmi na ripoti, na kuwasilisha mada mbele ya hadhira.',
          },
          {
            name: 'Kenya Primary School Education Assessment (KPSEA)',
            learningOutcomes: 'Demonstrate mastery of knowledge and skills acquired across all subjects in the primary cycle through a national examination.',
          },
        ],
      },
      {
        name: 'Grade 7 (Junior School)',
        summary: 'Junior School provides learners with a deeper dive into integrated sciences and pre-technical skills. This stage emphasizes critical thinking, problem-solving, and the development of essential life skills for personal and social growth.',
        subjects: [
          {
            name: 'Integrated Science',
            learningOutcomes: 'Conduct scientific investigations, analyze data, and understand concepts in Biology, Chemistry, and Physics.',
          },
          {
            name: 'Pre-Technical Studies',
            learningOutcomes: 'Develop foundational skills in technical drawing, woodwork, and metalwork, fostering innovation and problem-solving.',
          },
          {
            name: 'Life Skills Education',
            learningOutcomes: 'Develop self-awareness, communication skills, and responsible decision-making to navigate personal and social challenges.',
          },
          {
            name: 'Religious Education',
            learningOutcomes: 'Understand moral values, respect for diversity, and the teachings of different religions.',
          },
        ],
      },
      {
        name: 'Grade 8',
        summary: 'In Grade 8, learners begin to explore optional subjects based on their interests, while continuing with a broad-based curriculum. The focus is on developing specific talents and deeper conceptual understanding.',
        subjects: [
          {
            name: 'Integrated Science',
            learningOutcomes: 'Explore concepts of electricity and magnetism, chemical reactions, and human anatomy in more detail.',
          },
          {
            name: 'Social Studies',
            learningOutcomes: 'Study the history of East Africa, the functions of the East African Community, and concepts of citizenship.',
          },
          {
            name: 'Performing Arts',
            learningOutcomes: 'Engage in drama, music, and dance, developing skills in performance, composition, and appreciation.',
          },
          {
            name: 'Visual Arts',
            learningOutcomes: 'Develop skills in drawing, painting, sculpture, and graphic design, and learn about art history and criticism.',
          },
        ],
      },
      {
        name: 'Grade 9',
        summary: 'Grade 9 is the final year of Junior School. Learners undertake a major project in their area of interest and sit for the Junior School Assessment to determine their pathway in Senior School.',
        subjects: [
          {
            name: 'Health Education',
            learningOutcomes: 'Understand issues related to adolescent health, substance abuse, and mental well-being.',
          },
          {
            name: 'ICT',
            learningOutcomes: 'Learn basics of programming, use productivity software effectively, and understand principles of online safety and digital citizenship.',
          },
          {
            name: 'Business Studies',
            learningOutcomes: 'Understand basic concepts of trade, finance, and entrepreneurship, and develop a simple business plan.',
          },
          {
            name: 'Junior School Assessment',
            learningOutcomes: 'Demonstrate readiness for a specific Senior School pathway through a comprehensive assessment of skills and knowledge.',
          },
        ],
      },
    ],
  },
  {
    name: 'Senior School',
    description: 'Ages 15-17, this level offers specialized pathways based on student interests and career choices.',
    imageId: 'senior_school',
    grades: [
      {
        name: 'Grade 10',
        summary: 'In Senior School, learners choose specialized pathways that align with their career interests. The curriculum is designed to provide in-depth knowledge and skills in STEM, Arts, or Social Sciences, while ensuring all students develop core ICT and digital literacy competencies.',
        subjects: [
          {
            name: 'STEM Pathway',
            learningOutcomes: 'Focuses on advanced concepts in Physics, Chemistry, Biology, and Mathematics to prepare for careers in science and engineering.',
          },
          {
            name: 'Arts and Sports Science Pathway',
            learningOutcomes: 'Develops talents in visual arts, performing arts, or sports through specialized training and theoretical studies.',
          },
          {
            name: 'Social Sciences Pathway',
            learningOutcomes: 'Explores subjects like History, Geography, and Government in-depth, preparing learners for careers in humanities and public service.',
          },
          {
            name: 'ICT and Digital Literacy',
            learningOutcomes: 'A core competency for all pathways. Students will learn programming, data analysis, and responsible use of digital tools.',
          },
        ],
      },
    ],
  },
];
