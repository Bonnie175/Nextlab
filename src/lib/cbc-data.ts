
export type Subject = {
  name: string;
  curriculumDesign: string;
  pathways?: Subject[];
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
          { name: 'Language Activities', curriculumDesign: 'Develops listening and speaking skills through stories, poems, and songs. Focuses on pre-reading and pre-writing skills by introducing letters and sounds in an interactive way.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Introduces basic mathematical concepts such as sorting, matching, and counting. Learners engage with numbers, shapes, and patterns through playful activities.' },
          { name: 'Creative Arts', curriculumDesign: 'Fosters creativity and self-expression through drawing, painting, and modeling. Learners explore different materials and techniques to express their ideas and feelings.' },
          { name: 'Music Activities', curriculumDesign: 'Develops an appreciation for music through singing, playing simple instruments, and movement. Focuses on rhythm, melody, and listening skills.' },
        ],
      },
      {
        name: 'Pre-Primary 2',
        summary: 'Pre-Primary 2 builds on PP1, with a continued focus on play-based learning but with slightly more structured activities to prepare for Grade 1. Learners begin to form simple words and do basic addition.',
        subjects: [
          { name: 'Language Activities', curriculumDesign: 'Builds on pre-reading and pre-writing skills. Learners begin to read simple words and construct short sentences, enhancing their communication abilities.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Expands on basic concepts to include simple addition and subtraction. Learners continue to explore shapes, measurements, and patterns in their environment.' },
          { name: 'Environmental Activities', curriculumDesign: 'Focuses on the immediate environment. Learners explore natural and man-made features, care for plants and animals, and learn about weather and seasons.' },
          { name: 'Creative Arts', curriculumDesign: 'Encourages further exploration in visual arts. Learners refine their motor skills through more complex drawing, painting, and crafting projects.' },
        ],
      },
      {
        name: 'Grade 1',
        summary: 'Grade 1 builds upon the pre-primary foundation by introducing more structured learning in core subjects. The curriculum focuses on developing early literacy and numeracy skills, as well as an awareness of the immediate environment.',
        subjects: [
          { name: 'English Language', curriculumDesign: 'Develops foundational literacy skills. Learners will be able to read and comprehend simple sentences, write short phrases, and communicate basic needs and ideas orally.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Introduces learners to the basics of Kiswahili. Focuses on oral communication, basic vocabulary, and recognizing sounds and simple written words (maneno).' },
          { name: 'Mathematics', curriculumDesign: 'Focuses on number concepts up to 100, basic addition and subtraction, and recognizing simple shapes and measurements in their daily life.' },
          { name: 'Environmental Activities', curriculumDesign: 'Learners explore their immediate surroundings, including home and school. They learn about safety, community helpers, and caring for their local environment.' },
        ],
      },
      {
        name: 'Grade 2',
        summary: 'In Grade 2, learners continue to build on foundational skills. Reading becomes more fluent, writing more structured, and mathematical concepts expand to include subtraction and simple measurement.',
        subjects: [
          { name: 'English Language', curriculumDesign: 'Builds fluency in reading and writing. Learners will be able to write simple stories, read short passages with understanding, and engage in conversations on familiar topics.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Expands vocabulary and sentence construction in Kiswahili. Learners will be able to hold simple conversations (maongezi) and write short, guided sentences.' },
          { name: 'Mathematics', curriculumDesign: 'Introduces multiplication and division concepts, explores 2D and 3D shapes, and develops skills in measuring length, mass, and time.' },
          { name: 'Hygiene and Nutrition', curriculumDesign: 'Teaches personal hygiene practices, the importance of a balanced diet, and food safety. Learners will identify healthy habits for their well-being.' },
        ],
      },
      {
        name: 'Grade 3',
        summary: 'Grade 3 marks the final year of Early Years Education, with a focus on consolidating literacy and numeracy skills. Learners begin to work more independently and engage in simple project-based activities.',
        subjects: [
          { name: 'English Language', curriculumDesign: 'Consolidates reading and writing skills. Learners will be able to read for pleasure and information, write creatively, and use a wider range of vocabulary.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Focuses on reading comprehension of short stories in Kiswahili (hadithi fupi) and expressing ideas in more complex written sentences.' },
          { name: 'Mathematics', curriculumDesign: 'Deepens understanding of the four basic operations, introduces fractions, and involves practical application of measurement and money concepts.' },
          { name: 'Christian Religious Education', curriculumDesign: 'Learners explore Bible stories and their moral lessons, focusing on values such as love, kindness, and obedience as taught in Christianity.' },
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
          { name: 'Science and Technology', curriculumDesign: 'Introduces scientific inquiry. Learners will conduct simple experiments, learn about living and non-living things, and explore basic technological concepts like simple machines.' },
          { name: 'Social Studies', curriculumDesign: 'Focuses on Kenyan history, geography, and civics. Learners will understand the structure of local government and the importance of national unity.' },
          { name: 'Agriculture', curriculumDesign: 'Provides practical skills in farming. Learners will learn how to grow common crops, care for small domestic animals, and understand the importance of agriculture in Kenya.' },
          { name: 'Physical and Health Education', curriculumDesign: 'Develops physical fitness, coordination, and teamwork through various sports and games. Also covers topics on personal health and safety.' },
        ],
      },
      {
        name: 'Grade 5',
        summary: 'In Grade 5, learners delve deeper into scientific inquiry and social studies, while also being introduced to creative arts as a core subject. The curriculum encourages critical thinking and collaboration.',
        subjects: [
          { name: 'Science and Technology', curriculumDesign: 'Expands on topics like the human body, ecosystems, and properties of matter. Technology component introduces digital literacy skills.' },
          { name: 'Social Studies', curriculumDesign: 'Explores the history of Eastern Africa, the rights and responsibilities of citizens, and the management of resources in the community.' },
          { name: 'Creative Arts', curriculumDesign: 'Integrates visual arts, music, and drama. Learners will create artworks, participate in musical performances, and develop dramatic presentations.' },
          { name: 'Home Science', curriculumDesign: 'Teaches practical skills for daily living, including cooking, sewing, and managing a home. Emphasizes safety and resourcefulness.' },
        ],
      },
      {
        name: 'Grade 6',
        summary: 'Grade 6 is the capstone year of primary education, preparing learners for the transition to Junior School. The curriculum includes a national assessment and focuses on the application of knowledge and skills.',
        subjects: [
          { name: 'Mathematics', curriculumDesign: 'Consolidates all primary math concepts, including algebra basics, geometry, and data handling, in preparation for the national assessment.' },
          { name: 'English Language', curriculumDesign: 'Focuses on advanced comprehension, formal writing, and public speaking skills to ensure readiness for Junior School.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Covers advanced grammar (sarufi), formal writing (insha), and comprehension of complex texts (ufahamu) for the national exam.' },
          { name: 'Kenya Primary School Education Assessment (KPSEA)', curriculumDesign: 'A national summative assessment covering multiple subjects to gauge the attainment of competencies at the end of the primary cycle.' },
        ],
      },
      {
        name: 'Grade 7 (Junior School)',
        summary: 'Junior School provides learners with a deeper dive into integrated sciences and pre-technical skills. This stage emphasizes critical thinking, problem-solving, and the development of essential life skills for personal and social growth.',
        subjects: [
          { name: 'Integrated Science', curriculumDesign: 'Combines biology, chemistry, and physics concepts. Learners will investigate scientific phenomena and their application in real life.' },
          { name: 'Pre-Technical Studies', curriculumDesign: 'Introduces foundational technical skills in areas like woodworking, metalworking, and technical drawing to prepare for vocational pathways.' },
          { name: 'Life Skills Education', curriculumDesign: 'Focuses on developing personal and social skills, including decision-making, communication, and managing emotions for a healthy lifestyle.' },
          { name: 'Religious Education', curriculumDesign: 'Offers a deeper study of religious teachings, ethics, and values, with options for Christian, Islamic, or Hindu studies.' },
        ],
      },
      {
        name: 'Grade 8',
        summary: 'In Grade 8, learners begin to explore optional subjects based on their interests, while continuing with a broad-based curriculum. The focus is on developing specific talents and deeper conceptual understanding.',
        subjects: [
          { name: 'Integrated Science', curriculumDesign: 'Continues to build on scientific principles with a focus on project-based learning and inquiry to solve community problems.' },
          { name: 'Social Studies', curriculumDesign: 'Delves into governance, economic development, and social issues in Africa and the wider world, fostering a global perspective.' },
          { name: 'Performing Arts', curriculumDesign: 'An optional subject for learners to specialize in music, dance, or drama, focusing on performance, creation, and appreciation.' },
          { name: 'Visual Arts', curriculumDesign: 'An optional subject for learners to develop their skills in drawing, painting, sculpture, and other visual media, focusing on creativity and technique.' },
        ],
      },
      {
        name: 'Grade 9',
        summary: 'Grade 9 is the final year of Junior School. Learners undertake a major project in their area of interest and sit for the Junior School Assessment to determine their pathway in Senior School.',
        subjects: [
          { name: 'Health Education', curriculumDesign: 'Covers comprehensive health topics including mental, social, and physical well-being, preparing learners to make informed health choices.' },
          { name: 'ICT', curriculumDesign: 'Develops advanced digital literacy skills, including coding basics, online collaboration tools, and digital content creation.' },
          { name: 'Business Studies', curriculumDesign: 'Introduces fundamental concepts of business, including entrepreneurship, financial literacy, and marketing.' },
          { name: 'Junior School Assessment', curriculumDesign: 'A summative assessment at the end of Junior School to guide learners towards appropriate pathways in Senior School based on their competencies.' },
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
            curriculumDesign: 'Focuses on pure sciences, advanced mathematics, and technology-oriented subjects for careers in science and tech. Learners select a specialization from the tracks below.',
            pathways: [
              { name: 'Pure Sciences', curriculumDesign: 'In-depth study of Physics, Chemistry, and Biology. Focuses on theoretical knowledge, advanced laboratory work, and scientific research methodologies to prepare for university-level science programs.' },
              { name: 'Engineering & Technology', curriculumDesign: 'Covers principles of engineering, technical drawing, and workshop practices. Learners engage in design projects and problem-solving to build a foundation for technical careers and higher education in engineering.' },
              { name: 'Health Sciences', curriculumDesign: 'Provides a focused curriculum on human anatomy, physiology, and public health. Prepares learners for careers in medicine, nursing, and other healthcare professions.' },
              { name: 'Agricultural & Environmental Sciences', curriculumDesign: 'Combines principles of modern agriculture, conservation, and environmental management. Learners gain practical skills in sustainable farming and ecological preservation.' },
            ],
          },
          { name: 'Arts and Sports Science Pathway', curriculumDesign: 'Offers specialization in performing arts, visual arts, or sports science, preparing learners for careers in creative and athletic fields.' },
          { name: 'Social Sciences Pathway', curriculumDesign: 'Provides in-depth study of humanities, languages, and business-related subjects for careers in law, communication, and management.' },
          { name: 'ICT and Digital Literacy', curriculumDesign: 'A core subject across all pathways, ensuring all learners are equipped with essential digital skills for the modern workplace and higher education.' },
        ],
      },
      {
        name: 'Grade 11',
        summary: 'Grade 11 focuses on deepening specialization within the chosen pathway. Learners engage in advanced project work, internships, and community-based learning to apply their skills in real-world contexts.',
        subjects: [
          { name: 'Pathway Specialization', curriculumDesign: 'Learners continue with their chosen pathway (STEM, Arts, or Social Sciences), taking more advanced and specialized courses. The curriculum emphasizes research, critical analysis, and innovation.' },
          { name: 'Community Service and Leadership', curriculumDesign: 'A mandatory component where learners plan and execute a community service project. It aims to develop leadership, collaboration, and a sense of social responsibility.' },
          { name: 'Career Guidance and Mentorship', curriculumDesign: 'Provides structured guidance on university and college applications, career choices, and workplace readiness. Learners are paired with mentors from relevant industries.' },
        ],
      },
      {
        name: 'Grade 12',
        summary: 'The final year of Senior School is dedicated to consolidating knowledge, completing major projects, and preparing for the Kenya Advanced Certificate of Education (KACE) examinations, which determine university entry.',
        subjects: [
          { name: 'Advanced Pathway Project', curriculumDesign: 'Learners undertake a major, year-long capstone project in their area of specialization. This project is a key component of their final assessment and showcases their accumulated skills and knowledge.' },
          { name: 'KACE Preparation', curriculumDesign: 'Intensive preparation for the Kenya Advanced Certificate of Education (KACE) exams. The curriculum focuses on revision, examination techniques, and in-depth review of the syllabus for their specialized subjects.' },
          { name: 'Tertiary Transition Skills', curriculumDesign: 'Equips learners with essential skills for success in university and beyond, including academic writing, critical thinking, financial planning for higher education, and personal well-being.' },
        ],
      },
    ],
  },
];

    