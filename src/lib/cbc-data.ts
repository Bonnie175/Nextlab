export type Subject = {
  name: string;
  learningOutcomes: string;
};

export type Grade = {
  name: string;
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
        name: 'Grade 1',
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
    ],
  },
  {
    name: 'Middle School',
    description: 'Ages 9-14, this level broadens the curriculum and introduces more specialized subjects.',
    imageId: 'middle_school',
    grades: [
      {
        name: 'Grade 4',
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
        name: 'Grade 7 (Junior School)',
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
    ],
  },
  {
    name: 'Senior School',
    description: 'Ages 15-17, this level offers specialized pathways based on student interests and career choices.',
    imageId: 'senior_school',
    grades: [
      {
        name: 'Grade 10',
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
