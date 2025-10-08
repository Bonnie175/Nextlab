
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
    description: 'Ages 4-8. This foundational level nurtures potential through play-based learning, focusing on core competencies and basic literacy.',
    imageId: 'early_years',
    grades: [
      {
        name: 'Pre-Primary 1',
        summary: 'In Pre-Primary 1 (Age 4), learners are introduced to foundational concepts through structured play. Activities focus on developing communication skills, social collaboration, creativity, and digital literacy in a fun, interactive environment.',
        subjects: [
          { name: 'Language Activities', curriculumDesign: 'Develops listening and speaking skills through stories, poems, and songs. Focuses on pre-reading and pre-writing by introducing letters, sounds, and phonological awareness in an interactive and playful manner. Learners begin to associate sounds with symbols.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Introduces basic mathematical concepts like sorting, classifying, matching, and counting up to 20. Learners engage with numbers, shapes, and patterns through playful, hands-on activities, laying the groundwork for logical thinking.' },
          { name: 'Creative Arts', curriculumDesign: 'Fosters creativity and self-expression through drawing, painting, modeling, and crafting. Learners explore different materials and techniques to express their ideas and feelings, developing fine motor skills and aesthetic awareness.' },
          { name: 'Music Activities', curriculumDesign: 'Develops an appreciation for music through singing, playing simple percussion instruments, and guided movement. Focuses on rhythm, melody, and active listening skills, encouraging creative expression and coordination.' },
        ],
      },
      {
        name: 'Pre-Primary 2',
        summary: 'Pre-Primary 2 (Age 5) builds on PP1 with more structured activities to prepare for primary school. Learners engage in early reading, simple writing, basic arithmetic, and exploration of their immediate environment, enhancing their readiness for Grade 1.',
        subjects: [
          { name: 'Language Activities', curriculumDesign: 'Builds on pre-reading and pre-writing skills. Learners begin to read simple words, CVC (consonant-vowel-consonant) words, and construct short sentences. Activities enhance vocabulary and comprehension abilities in preparation for formal reading.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Expands on basic concepts to include simple addition and subtraction (up to 10), number recognition (up to 50), and exploring concepts of money, time, and measurement through practical, everyday contexts.' },
          { name: 'Environmental Activities', curriculumDesign: 'Focuses on the immediate environment. Learners explore natural phenomena (weather, plants, animals), learn about community helpers, and practice safety and hygiene. It fosters curiosity and care for their surroundings.' },
          { name: 'Creative Arts', curriculumDesign: 'Encourages further exploration in visual arts. Learners refine their motor skills through more complex drawing, painting, and crafting projects, and begin to describe their own and others\' artwork, fostering critical thinking.' },
        ],
      },
      {
        name: 'Grade 1',
        summary: 'Grade 1 (Age 6) marks the start of primary school, introducing more structured learning. The curriculum focuses on developing foundational literacy and numeracy, alongside an awareness of the environment, hygiene, and creative expression, fostering a holistic development approach.',
        subjects: [
          { name: 'English Language', curriculumDesign: 'Develops foundational literacy skills. By the end of Grade 1, learners will be able to read and comprehend simple sentences, write short phrases, communicate basic needs and ideas orally, and respond to simple questions about stories.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Introduces learners to the basics of Kiswahili (Kusoma na Kuandika). Focuses on oral communication (maongezi), basic vocabulary, recognizing sounds (sauti), and reading and writing simple words (maneno) and short sentences.' },
          { name: 'Mathematics', curriculumDesign: 'Focuses on number concepts up to 100, basic addition and subtraction within 20, and recognizing simple geometric shapes and measurements. Learners apply these concepts to solve simple problems in their daily life.' },
          { name: 'Environmental Activities', curriculumDesign: 'Learners explore their immediate surroundings, including home, school, and community. They learn about safety, social responsibilities, community helpers, and caring for their local environment through observation and practical activities.' },
        ],
      },
      {
        name: 'Grade 2',
        summary: 'In Grade 2 (Age 7), learners build upon their foundational skills. Reading becomes more fluent, writing more structured, and mathematical concepts expand. The curriculum introduces new subjects like Hygiene and Nutrition to promote healthy living.',
        subjects: [
          { name: 'English Language', curriculumDesign: 'Builds fluency in reading and confidence in writing. Learners will be able to write simple narrative stories, read short passages with good comprehension, and engage in extended conversations on familiar topics.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Expands vocabulary and sentence construction in Kiswahili. Learners will be able to hold simple conversations (maongezi), write guided paragraphs, and read short, illustrated storybooks with understanding.' },
          { name: 'Mathematics', curriculumDesign: 'Introduces multiplication (as repeated addition) and division (as equal sharing), explores 2D and 3D shapes in more detail, and develops skills in measuring length, mass, and capacity using simple units.' },
          { name: 'Hygiene and Nutrition', curriculumDesign: 'Teaches essential personal hygiene practices, the importance of a balanced diet, and food safety. Learners will identify healthy habits, sources of different foods, and practices for preventing common illnesses.' },
        ],
      },
      {
        name: 'Grade 3',
        summary: 'Grade 3 (Age 8) marks the final year of Early Years Education. It focuses on consolidating literacy and numeracy skills, encouraging independent learning, and introducing simple project-based activities to apply knowledge in practical ways.',
        subjects: [
          { name: 'English Language', curriculumDesign: 'Consolidates reading and writing skills for fluency and comprehension. Learners will be able to read for pleasure and information, write creative stories with basic structure, and use a wider range of vocabulary in both spoken and written forms.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Focuses on reading comprehension of short stories (hadithi fupi) and expressing ideas in more complex written sentences. Learners practice writing different forms of short compositions (insha) and expand their grammatical understanding.' },
          { name: 'Mathematics', curriculumDesign: 'Deepens understanding of the four basic operations, introduces the concept of fractions, and involves practical application of measurement, time, and money concepts in real-life scenarios and problem-solving.' },
          { name: 'Christian Religious Education', curriculumDesign: 'Learners explore Bible stories from both the Old and New Testaments and their moral lessons. The curriculum focuses on values such as love, kindness, forgiveness, and obedience as taught in Christianity.' },
        ],
      },
    ],
  },
  {
    name: 'Middle School',
    description: 'Ages 9-14. This level broadens the curriculum, introducing more specialized subjects and fostering critical thinking, creativity, and problem-solving skills.',
    imageId: 'middle_school',
    grades: [
      {
        name: 'Grade 4',
        summary: 'Grade 4 (Age 9) is a transition year where learners explore more specialized subjects. The focus is on applying foundational skills to understand scientific concepts, social structures, and practical life skills like agriculture, fostering a spirit of inquiry.',
        subjects: [
          { name: 'Science and Technology', curriculumDesign: 'Introduces the scientific method through inquiry-based learning. Learners conduct simple experiments, learn about living things and their environment, properties of matter, and explore basic technological concepts like simple machines and digital devices.' },
          { name: 'Social Studies', curriculumDesign: 'Focuses on Kenyan history, geography, and civics. Learners will understand the structure of county and national governments, the importance of national unity, and the physical and human geography of Kenya.' },
          { name: 'Agriculture', curriculumDesign: 'Provides practical, hands-on skills in farming. Learners will learn how to grow common crops using various methods (e.g., container gardening), care for small domestic animals, and understand the importance of agriculture in Kenya.' },
          { name: 'Physical and Health Education', curriculumDesign: 'Develops physical fitness, coordination, and teamwork through a variety of sports, games, and athletic activities. The health component covers topics on personal health, safety, and preventing communicable diseases.' },
        ],
      },
      {
        name: 'Grade 5',
        summary: 'In Grade 5 (Age 10), learners delve deeper into scientific inquiry, social studies, and creative arts. The curriculum encourages critical thinking, problem-solving, and collaboration through project-based learning and practical application of knowledge.',
        subjects: [
          { name: 'Science and Technology', curriculumDesign: 'Expands on topics like the human body systems, ecosystems, energy, and properties of matter. The technology component introduces digital literacy skills, including safe internet use and basic word processing.' },
          { name: 'Social Studies', curriculumDesign: 'Explores the history of Eastern Africa, the rights and responsibilities of citizens, and the management of resources in the community. It aims to develop an informed and responsible citizenry.' },
          { name: 'Creative Arts', curriculumDesign: 'Integrates visual arts, music, and drama. Learners will create artworks using different media, participate in musical performances with instruments, and develop and perform short dramatic presentations.' },
          { name: 'Home Science', curriculumDesign: 'Teaches practical skills for daily living, including consumer education, basic cooking and nutrition, sewing and fabric care, and managing a home. It emphasizes safety, hygiene, and resourcefulness.' },
        ],
      },
      {
        name: 'Grade 6',
        summary: 'Grade 6 (Age 11) is the capstone year of primary education, preparing learners for Junior School. The curriculum includes the Kenya Primary School Education Assessment (KPSEA) and focuses on the application of knowledge and skills across all learning areas.',
        subjects: [
          { name: 'Mathematics', curriculumDesign: 'Consolidates all primary math concepts, including operations with whole numbers, fractions, and decimals, introduction to algebra, geometry, and data handling, in preparation for the national assessment and readiness for higher-level math.' },
          { name: 'English Language', curriculumDesign: 'Focuses on advanced comprehension of a variety of texts, formal and creative writing, and public speaking skills. Aims to ensure learners are confident and competent communicators, ready for Junior School.' },
          { name: 'Kiswahili Language', curriculumDesign: 'Covers advanced grammar (sarufi), formal writing (insha), and comprehension of complex texts (ufahamu). Learners prepare for the national exam and develop proficiency in both spoken and written Kiswahili.' },
          { name: 'Kenya Primary School Education Assessment (KPSEA)', curriculumDesign: 'A national summative assessment covering multiple subjects (Math, English, Kiswahili, Integrated Science, Social Studies). It gauges the attainment of competencies at the end of the primary cycle and is used for placement in Junior School.' },
        ],
      },
      {
        name: 'Grade 7 (Junior School)',
        summary: 'Grade 7 (Age 12) begins Junior School, providing learners with a deeper dive into integrated sciences, social sciences, and pre-technical skills. This stage emphasizes critical thinking, problem-solving, and the development of essential life skills.',
        subjects: [
          { name: 'Integrated Science', curriculumDesign: 'Combines biology, chemistry, and physics concepts in a holistic approach. Learners will investigate scientific phenomena, their application in real life, and the impact of science on society and the environment through project-based learning.' },
          { name: 'Pre-Technical Studies', curriculumDesign: 'Introduces foundational technical and vocational skills. It covers areas like technical drawing, material science (wood, metal, plastics), and basic mechanics to prepare learners for vocational pathways and develop practical problem-solving abilities.' },
          { name: 'Life Skills Education', curriculumDesign: 'Focuses on developing personal and social skills crucial for adolescence. Topics include decision-making, effective communication, managing emotions, building healthy relationships, and developing resilience for a healthy lifestyle.' },
          { name: 'Religious Education', curriculumDesign: 'Offers a deeper study of religious teachings, ethics, and values. Learners choose one option: Christian Religious Education (CRE), Islamic Religious Education (IRE), or Hindu Religious Education (HRE), exploring their chosen faith in greater depth.' },
        ],
      },
      {
        name: 'Grade 8',
        summary: 'In Grade 8 (Age 13), learners begin to explore optional subjects based on their interests and talents, while continuing with a broad-based curriculum. The focus is on developing specific competencies and deeper conceptual understanding in chosen areas.',
        subjects: [
          { name: 'Integrated Science', curriculumDesign: 'Continues to build on scientific principles with a focus on inquiry-based projects that address community problems. Topics include environmental conservation, health and disease, and sustainable energy sources.' },
          { name: 'Social Studies', curriculumDesign: 'Delves into governance systems, economic development, and social issues in Africa and the wider world. It aims to foster a global perspective and an understanding of interconnectedness and active citizenship.' },
          { name: 'Performing Arts', curriculumDesign: 'An optional subject where learners can specialize in music, dance, or drama. The curriculum focuses on performance techniques, creation and composition, and critical appreciation of various art forms.' },
          { name: 'Visual Arts', curriculumDesign: 'An optional subject for learners to develop their skills in drawing, painting, sculpture, digital art, and other visual media. The curriculum emphasizes creativity, technical proficiency, and personal expression.' },
        ],
      },
      {
        name: 'Grade 9',
        summary: 'Grade 9 (Age 14) is the final year of Junior School. Learners undertake a major research project in their area of interest and sit for the Junior School Assessment, which determines their pathway in Senior School based on their aptitudes and achievements.',
        subjects: [
          { name: 'Health Education', curriculumDesign: 'Covers comprehensive health topics including mental and emotional health, substance abuse prevention, sexual and reproductive health, and nutrition. It prepares learners to make informed and responsible health choices.' },
          { name: 'ICT', curriculumDesign: 'Develops advanced digital literacy skills, including coding basics (e.g., Python, Scratch), online collaboration tools, digital content creation (video, web), and understanding of data privacy and cybersecurity.' },
          { name: 'Business Studies', curriculumDesign: 'Introduces fundamental concepts of business and economics. Topics include entrepreneurship, basic accounting, financial literacy, marketing, and the role of business in society, fostering an entrepreneurial mindset.' },
          { name: 'Junior School Assessment', curriculumDesign: 'A summative assessment at the end of Junior School. It evaluates learners\' mastery of core competencies and their performance in chosen optional subjects to guide them towards appropriate pathways (STEM, Arts, or Social Sciences) in Senior School.' },
        ],
      },
    ],
  },
  {
    name: 'Senior School',
    description: 'Ages 15-17. This level offers three specialized pathways—STEM, Arts & Sports Science, and Social Sciences—based on student aptitudes and career choices.',
    imageId: 'senior_school',
    grades: [
      {
        name: 'Grade 10',
        summary: 'Grade 10 (Age 15) is the first year of Senior School. Learners choose one of three specialized pathways that align with their career interests. The curriculum is designed to provide in-depth knowledge and skills in their chosen field, preparing them for tertiary education and the world of work.',
        subjects: [
          {
            name: 'STEM Pathway',
            curriculumDesign: 'For learners with a strong aptitude for science, technology, engineering, and mathematics. It focuses on pure sciences, advanced mathematics, and technology-oriented subjects. Learners select a specialization from the tracks below.',
            pathways: [
              { name: 'Pure Sciences', curriculumDesign: 'In-depth study of Physics, Chemistry, and Biology. Focuses on advanced theoretical knowledge, complex laboratory work, and scientific research methodologies to prepare for university-level science programs and research careers.' },
              { name: 'Engineering & Technology', curriculumDesign: 'Covers principles of engineering, advanced technical drawing, and workshop practices (e.g., electronics, mechanics). Learners engage in design-and-build projects and problem-solving to build a foundation for technical careers and higher education in engineering.' },
              { name: 'Health Sciences', curriculumDesign: 'Provides a focused curriculum on human anatomy, physiology, microbiology, and public health. This track prepares learners for careers in medicine, nursing, pharmacy, and other healthcare professions through rigorous academic study and practical simulations.' },
              { name: 'Agricultural & Environmental Sciences', curriculumDesign: 'Combines principles of modern agriculture (e.g., biotechnology, agribusiness) with conservation and environmental management. Learners gain practical skills in sustainable farming, ecological preservation, and climate change adaptation.' },
            ],
          },
          { name: 'Arts and Sports Science Pathway', curriculumDesign: 'For learners with talents in creative and athletic fields. It offers specialization in performing arts (music, dance, drama), visual arts (e.g., design, fine art), or sports science (e.g., coaching, sports medicine, management).' },
          { name: 'Social Sciences Pathway', curriculumDesign: 'For learners interested in humanities and professions that involve human interaction and society. It provides in-depth study of subjects like history, geography, languages, literature, psychology, and business-related fields for careers in law, communication, and management.' },
          { name: 'ICT and Digital Literacy', curriculumDesign: 'A mandatory core subject across all pathways. It ensures all learners are equipped with essential 21st-century digital skills, including data analysis, digital communication, programming, and ethical use of technology for the modern workplace and higher education.' },
        ],
      },
      {
        name: 'Grade 11',
        summary: 'Grade 11 (Age 16) focuses on deepening specialization within the chosen pathway. Learners engage in advanced project work, industry-based internships, and community-based learning to apply their skills in real-world contexts and build their professional portfolio.',
        subjects: [
          { name: 'Pathway Specialization', curriculumDesign: 'Learners continue with their chosen pathway (STEM, Arts, or Social Sciences), taking more advanced and specialized courses. The curriculum emphasizes research methodologies, critical analysis, innovation, and independent study to prepare for tertiary education.' },
          { name: 'Community Service and Leadership', curriculumDesign: 'A mandatory component where learners identify a community need, then plan and execute a sustainable service project. It aims to develop leadership, collaboration, project management skills, and a strong sense of social responsibility.' },
          { name: 'Career Guidance and Mentorship', curriculumDesign: 'Provides structured guidance on university and college applications, career choices, and workplace readiness. Learners are paired with mentors from relevant industries, attend career fairs, and develop their resumes and interview skills.' },
        ],
      },
      {
        name: 'Grade 12',
        summary: 'The final year of Senior School, Grade 12 (Age 17), is dedicated to consolidating knowledge, completing major projects, and preparing for the Kenya Advanced Certificate of Education (KACE) examinations, which determine university entry and career readiness.',
        subjects: [
          { name: 'Advanced Pathway Project', curriculumDesign: 'Learners undertake a major, year-long capstone research or practical project in their area of specialization. This project is a key component of their final assessment and showcases their accumulated skills, knowledge, and readiness for higher learning or work.' },
          { name: 'KACE Preparation', curriculumDesign: 'Intensive preparation for the Kenya Advanced Certificate of Education (KACE) exams. The curriculum focuses on in-depth syllabus revision, advanced problem-solving, critical thinking, and examination techniques for their three or four specialized subjects.' },
          { name: 'Tertiary Transition Skills', curriculumDesign: 'Equips learners with essential skills for success in university and beyond. This includes academic writing and referencing, critical thinking, time management, financial planning for higher education, and personal well-being strategies.' },
        ],
      },
    ],
  },
  {
    name: 'Tertiary Education',
    description: 'Ages 18+. Post-secondary education includes diploma, degree, and postgraduate programs at TVET institutions, colleges, and universities, offering specialized knowledge and skills.',
    imageId: 'tertiary_education',
    grades: [
      {
        name: 'College (TVET)',
        summary: 'Technical and Vocational Education and Training (TVET) institutions offer certificate, diploma, and higher diploma courses focused on practical, hands-on skills for specific trades and professions. This pathway prepares learners for direct entry into the workforce and entrepreneurship.',
        subjects: [
          { name: 'Hospitality Management', curriculumDesign: 'Provides practical training in hotel and restaurant operations, culinary arts, food and beverage service, and customer relations. Prepares students for careers in the dynamic tourism and hospitality industry.' },
          { name: 'Information Communication Technology', curriculumDesign: 'Focuses on applied technology skills, including network administration, software development, web design, and cybersecurity. Equips learners with job-ready skills for the fast-growing IT sector.' },
          { name: 'Building and Construction', curriculumDesign: 'Covers practical skills in masonry, carpentry, plumbing, and electrical installation. Prepares learners for technical roles in the construction industry and provides a foundation for becoming a certified artisan or technician.' },
          { name: 'Fashion and Design', curriculumDesign: 'Develops technical skills in garment making, pattern drafting, textile design, and fashion business. Fosters creativity and provides the entrepreneurial skills needed to launch a brand in the fashion world.' },
        ],
      },
      {
        name: 'University',
        summary: 'Universities offer undergraduate (Bachelor\'s) and postgraduate (Master\'s, PhD) degree programs, focusing on theoretical knowledge, research, and professional development. This pathway is for learners seeking advanced academic qualifications and specialized professions.',
        subjects: [
          { name: 'Bachelor of Science in Computer Science', curriculumDesign: 'Provides an in-depth study of algorithms, data structures, software engineering, artificial intelligence, and machine learning. Prepares students for careers in software development, data science, and academic research.' },
          { name: 'Bachelor of Medicine and Surgery', curriculumDesign: 'A comprehensive and rigorous program covering medical sciences, clinical skills, and patient care. It prepares graduates for a career as medical doctors, requiring several years of study followed by internship and residency.' },
          { name: 'Bachelor of Laws (LLB)', curriculumDesign: 'Covers core legal principles, jurisprudence, constitutional law, and various legal practice areas. The program prepares students for admission to the bar and a career in law, government, or corporate sectors.' },
          { name: 'Bachelor of Commerce (BCom)', curriculumDesign: 'Focuses on key business disciplines such as accounting, finance, marketing, and human resource management. It equips graduates with the analytical and leadership skills required for management and business leadership roles.' },
        ],
      },
    ],
  },
];
