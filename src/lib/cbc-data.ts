export type Subject = {
  name: string;
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
          { name: 'Language Activities' },
          { name: 'Mathematical Activities' },
          { name: 'Creative Arts' },
          { name: 'Music Activities' },
        ],
      },
      {
        name: 'Pre-Primary 2',
        summary: 'Pre-Primary 2 builds on PP1, with a continued focus on play-based learning but with slightly more structured activities to prepare for Grade 1. Learners begin to form simple words and do basic addition.',
        subjects: [
          { name: 'Language Activities' },
          { name: 'Mathematical Activities' },
          { name: 'Environmental Activities' },
          { name: 'Creative Arts' },
        ],
      },
      {
        name: 'Grade 1',
        summary: 'Grade 1 builds upon the pre-primary foundation by introducing more structured learning in core subjects. The curriculum focuses on developing early literacy and numeracy skills, as well as an awareness of the immediate environment.',
        subjects: [
          { name: 'English Language' },
          { name: 'Kiswahili Language' },
          { name: 'Mathematics' },
          { name: 'Environmental Activities' },
        ],
      },
      {
        name: 'Grade 2',
        summary: 'In Grade 2, learners continue to build on foundational skills. Reading becomes more fluent, writing more structured, and mathematical concepts expand to include subtraction and simple measurement.',
        subjects: [
          { name: 'English Language' },
          { name: 'Kiswahili Language' },
          { name: 'Mathematics' },
          { name: 'Hygiene and Nutrition' },
        ],
      },
      {
        name: 'Grade 3',
        summary: 'Grade 3 marks the final year of Early Years Education, with a focus on consolidating literacy and numeracy skills. Learners begin to work more independently and engage in simple project-based activities.',
        subjects: [
          { name: 'English Language' },
          { name: 'Kiswahili Language' },
          { name: 'Mathematics' },
          { name: 'Christian Religious Education' },
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
          { name: 'Science and Technology' },
          { name: 'Social Studies' },
          { name: 'Agriculture' },
          { name: 'Physical and Health Education' },
        ],
      },
      {
        name: 'Grade 5',
        summary: 'In Grade 5, learners delve deeper into scientific inquiry and social studies, while also being introduced to creative arts as a core subject. The curriculum encourages critical thinking and collaboration.',
        subjects: [
          { name: 'Science and Technology' },
          { name: 'Social Studies' },
          { name: 'Creative Arts' },
          { name: 'Home Science' },
        ],
      },
      {
        name: 'Grade 6',
        summary: 'Grade 6 is the capstone year of primary education, preparing learners for the transition to Junior School. The curriculum includes a national assessment and focuses on the application of knowledge and skills.',
        subjects: [
          { name: 'Mathematics' },
          { name: 'English Language' },
          { name: 'Kiswahili Language' },
          { name: 'Kenya Primary School Education Assessment (KPSEA)' },
        ],
      },
      {
        name: 'Grade 7 (Junior School)',
        summary: 'Junior School provides learners with a deeper dive into integrated sciences and pre-technical skills. This stage emphasizes critical thinking, problem-solving, and the development of essential life skills for personal and social growth.',
        subjects: [
          { name: 'Integrated Science' },
          { name: 'Pre-Technical Studies' },
          { name: 'Life Skills Education' },
          { name: 'Religious Education' },
        ],
      },
      {
        name: 'Grade 8',
        summary: 'In Grade 8, learners begin to explore optional subjects based on their interests, while continuing with a broad-based curriculum. The focus is on developing specific talents and deeper conceptual understanding.',
        subjects: [
          { name: 'Integrated Science' },
          { name: 'Social Studies' },
          { name: 'Performing Arts' },
          { name: 'Visual Arts' },
        ],
      },
      {
        name: 'Grade 9',
        summary: 'Grade 9 is the final year of Junior School. Learners undertake a major project in their area of interest and sit for the Junior School Assessment to determine their pathway in Senior School.',
        subjects: [
          { name: 'Health Education' },
          { name: 'ICT' },
          { name: 'Business Studies' },
          { name: 'Junior School Assessment' },
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
          { name: 'STEM Pathway' },
          { name: 'Arts and Sports Science Pathway' },
          { name: 'Social Sciences Pathway' },
          { name: 'ICT and Digital Literacy' },
        ],
      },
    ],
  },
];
