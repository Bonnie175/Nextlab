
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
          { name: 'Environmental Activities', curriculumDesign: 'Focuses on the immediate environment. Learners explore natural phenomena (weather, plants, animals), learn about community helpers, and practice safety and hygiene. It fosters curiosity and care for their surroundings.' },
          { name: 'Psychomotor and Creative Activities', curriculumDesign: 'Integrates music, art, and physical movement. Fosters creativity, coordination, and self-expression through drawing, painting, singing, playing simple instruments, and engaging in games and physical activities.' },
          { name: 'Religious Education Activities', curriculumDesign: 'Introduces learners to basic moral and spiritual values through stories, songs, and simple teachings from their respective faiths (Christianity, Islam, or Hinduism), fostering respect and good character.' },
        ],
      },
      {
        name: 'Pre-Primary 2',
        summary: 'Pre-Primary 2 (Age 5) builds on PP1 with more structured activities to prepare for primary school. Learners engage in early reading, simple writing, basic arithmetic, and exploration of their immediate environment, enhancing their readiness for Grade 1.',
        subjects: [
          { name: 'Language Activities', curriculumDesign: 'Builds on pre-reading and pre-writing skills. Learners begin to read simple words, CVC (consonant-vowel-consonant) words, and construct short sentences. Activities enhance vocabulary and comprehension abilities in preparation for formal reading.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Expands on basic concepts to include simple addition and subtraction (up to 10), number recognition (up to 50), and exploring concepts of money, time, and measurement through practical, everyday contexts.' },
          { name: 'Environmental Activities', curriculumDesign: 'Focuses on the immediate environment. Learners explore natural phenomena (weather, plants, animals), learn about community helpers, and practice safety and hygiene. It fosters curiosity and care for their surroundings.' },
          { name: 'Psychomotor and Creative Activities', curriculumDesign: 'Further develops artistic and physical skills. Learners refine their motor skills through more complex drawing and crafting projects, participate in musical performances, and engage in more structured physical games.' },
          { name: 'Religious Education Activities', curriculumDesign: 'Continues the development of moral and spiritual values. Learners explore more stories and teachings from their faith, focusing on concepts like kindness, honesty, and sharing.' },
        ],
      },
      {
        name: 'Grade 1',
        summary: 'Grade 1 (Age 6) marks the start of primary school, introducing more structured learning. The curriculum focuses on developing foundational literacy and numeracy, alongside an awareness of the environment, hygiene, and creative expression, fostering a holistic development approach.',
        subjects: [
          { name: 'English Language Activities', curriculumDesign: 'Develops foundational literacy skills. By the end of Grade 1, learners will be able to read and comprehend simple sentences, write short phrases, communicate basic needs and ideas orally, and respond to simple questions about stories.' },
          { name: 'Kiswahili Language Activities', curriculumDesign: 'Introduces learners to the basics of Kiswahili (Kusoma na Kuandika). Focuses on oral communication (maongezi), basic vocabulary, recognizing sounds (sauti), and reading and writing simple words (maneno) and short sentences.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Focuses on number concepts up to 100, basic addition and subtraction within 20, and recognizing simple geometric shapes and measurements. Learners apply these concepts to solve simple problems in their daily life.' },
          { name: 'Environmental Activities', curriculumDesign: 'Learners explore their immediate surroundings, including home, school, and community. They learn about safety, social responsibilities, community helpers, and caring for their local environment through observation and practical activities.' },
          { name: 'Hygiene and Nutrition Activities', curriculumDesign: 'Teaches essential personal hygiene practices, the importance of a balanced diet, and food safety. Learners will identify healthy habits, sources of different foods, and practices for preventing common illnesses.' },
          { name: 'Religious Education Activities', curriculumDesign: 'Learners explore Bible stories, Quranic teachings, or Hindu scriptures and their moral lessons. The curriculum focuses on values such as love, kindness, forgiveness, and obedience as taught in their respective faith.' },
          { name: 'Movement and Creative Activities', curriculumDesign: 'Integrates art, craft, music, and physical education. Learners express themselves through drawing, painting, singing, and various physical games and activities, enhancing creativity and motor skills.' },
        ],
      },
      {
        name: 'Grade 2',
        summary: 'In Grade 2 (Age 7), learners build upon their foundational skills. Reading becomes more fluent, writing more structured, and mathematical concepts expand. The curriculum continues to develop a holistic learner through diverse activities.',
        subjects: [
          { name: 'English Language Activities', curriculumDesign: 'Builds fluency in reading and confidence in writing. Learners will be able to write simple narrative stories, read short passages with good comprehension, and engage in extended conversations on familiar topics.' },
          { name: 'Kiswahili Language Activities', curriculumDesign: 'Expands vocabulary and sentence construction in Kiswahili. Learners will be able to hold simple conversations (maongezi), write guided paragraphs, and read short, illustrated storybooks with understanding.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Introduces multiplication (as repeated addition) and division (as equal sharing), explores 2D and 3D shapes in more detail, and develops skills in measuring length, mass, and capacity using simple units.' },
          { name: 'Environmental Activities', curriculumDesign: 'Expands on the immediate environment to include the wider community. Learners study interdependence, resource management, and social structures in their locality.' },
          { name: 'Hygiene and Nutrition Activities', curriculumDesign: 'Focuses on balanced diets, food groups, and common communicable diseases. Learners practice first aid for minor injuries and promote healthy living in their homes and school.' },
          { name: 'Religious Education Activities', curriculumDesign: 'Deepens understanding of religious teachings, with a focus on applying moral values in daily life. Learners study key figures and events in their faith tradition.' },
          { name: 'Movement and Creative Activities', curriculumDesign: 'Develops skills in specific art forms and sports. Learners create more complex artworks, participate in group music performances, and learn the rules of various organized games.' },
        ],
      },
      {
        name: 'Grade 3',
        summary: 'Grade 3 (Age 8) marks the final year of Early Years Education. It focuses on consolidating literacy and numeracy skills, encouraging independent learning, and introducing simple project-based activities to apply knowledge in practical ways.',
        subjects: [
          { name: 'English Language Activities', curriculumDesign: 'Consolidates reading and writing skills for fluency and comprehension. Learners will be able to read for pleasure and information, write creative stories with basic structure, and use a wider range of vocabulary in both spoken and written forms.' },
          { name: 'Kiswahili Language Activities', curriculumDesign: 'Focuses on reading comprehension of short stories (hadithi fupi) and expressing ideas in more complex written sentences. Learners practice writing different forms of short compositions (insha) and expand their grammatical understanding.' },
          { name: 'Mathematical Activities', curriculumDesign: 'Deepens understanding of the four basic operations, introduces the concept of fractions, and involves practical application of measurement, time, and money concepts in real-life scenarios and problem-solving.' },
          { name: 'Environmental Activities', curriculumDesign: 'Focuses on the physical and social environment of the county. Learners study different communities, economic activities, and the importance of environmental conservation at a local level.' },
          { name: 'Hygiene and Nutrition Activities', curriculumDesign: 'Covers topics on food safety, public health, and simple first aid. Learners engage in projects to promote a clean and healthy environment within the school and community.' },
          { name: 'Religious Education Activities', curriculumDesign: 'Explores the application of faith in community life. Learners study religious festivals, places of worship, and the roles of leaders in their faith communities.' },
          { name: 'Movement and Creative Activities', curriculumDesign: 'Encourages creative expression and talent development in art, music, and sports. Learners work on individual and group projects, preparing them for more specialized learning in Middle School.' },
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
          { name: 'English', curriculumDesign: 'Develops advanced reading comprehension, formal and creative writing skills, and effective oral presentation abilities. Learners analyze texts, write reports, and engage in debates.' },
          { name: 'Kiswahili', curriculumDesign: 'Focuses on advanced grammar (sarufi), comprehension of literary texts (fasihi), and proficiency in formal writing (insha) and oral communication for various contexts.' },
          { name: 'Mathematics', curriculumDesign: 'Covers more complex topics including fractions, decimals, basic algebra, geometry, and data analysis. The curriculum emphasizes problem-solving and application of mathematical concepts in real-world situations.' },
          { name: 'Science and Technology', curriculumDesign: 'Introduces the scientific method through inquiry-based learning. Learners conduct simple experiments, learn about living things and their environment, properties of matter, and explore basic technological concepts like simple machines and digital devices.' },
          { name: 'Social Studies', curriculumDesign: 'Focuses on Kenyan history, geography, and civics. Learners will understand the structure of county and national governments, the importance of national unity, and the physical and human geography of Kenya.' },
          { name: 'Religious Education', curriculumDesign: 'Offers a deeper study of religious teachings, ethics, and values. Learners choose one option: Christian Religious Education (CRE), Islamic Religious Education (IRE), or Hindu Religious Education (HRE).' },
          { name: 'Agriculture', curriculumDesign: 'Provides practical, hands-on skills in farming. Learners will learn how to grow common crops using various methods (e.g., container gardening), care for small domestic animals, and understand the importance of agriculture in Kenya.' },
          { name: 'Home Science', curriculumDesign: 'Teaches practical skills for daily living, including consumer education, basic cooking and nutrition, sewing and fabric care, and managing a home. It emphasizes safety, hygiene, and resourcefulness.' },
          { name: 'Physical and Health Education', curriculumDesign: 'Develops physical fitness, coordination, and teamwork through a variety of sports, games, and athletic activities. The health component covers topics on personal health, safety, and preventing communicable diseases.' },
          { name: 'Creative Arts', curriculumDesign: 'Integrates visual arts, music, and drama. Learners will create artworks using different media, participate in musical performances with instruments, and develop and perform short dramatic presentations.' },
        ],
      },
      {
        name: 'Grade 5',
        summary: 'In Grade 5 (Age 10), learners delve deeper into scientific inquiry, social studies, and creative arts. The curriculum encourages critical thinking, problem-solving, and collaboration through project-based learning and practical application of knowledge.',
        subjects: [
          { name: 'English', curriculumDesign: 'Focuses on analytical reading, persuasive writing, and nuanced oral communication. Learners engage with a variety of literary genres and develop research and referencing skills.' },
          { name: 'Kiswahili', curriculumDesign: 'Develops skills in analyzing Kiswahili literature (fasihi), writing argumentative essays, and using Kiswahili for formal and professional communication.' },
          { name: 'Mathematics', curriculumDesign: 'Introduces more advanced algebraic concepts, geometric theorems, and statistical analysis. Learners apply mathematical modeling to solve complex, multi-step problems.' },
          { name: 'Science and Technology', curriculumDesign: 'Expands on topics like the human body systems, ecosystems, energy, and properties of matter. The technology component introduces digital literacy skills, including safe internet use and basic word processing.' },
          { name: 'Social Studies', curriculumDesign: 'Explores the history of Eastern Africa, the rights and responsibilities of citizens, and the management of resources in the community. It aims to develop an informed and responsible citizenry.' },
          { name: 'Religious Education', curriculumDesign: 'Continues the study of core religious texts, beliefs, and practices, with an emphasis on interfaith dialogue and the role of religion in promoting peace and social justice.' },
          { name: 'Agriculture', curriculumDesign: 'Explores modern farming techniques, agribusiness concepts, and value addition. Learners engage in small-scale agricultural projects and learn about food security.' },
          { name: 'Home Science', curriculumDesign: 'Covers advanced topics in nutrition, home management, and textile science. Learners undertake practical projects such as planning and preparing balanced meals and creating textile products.' },
          { name: 'Physical and Health Education', curriculumDesign: 'Focuses on specialized skills in various sports, leadership in team activities, and understanding the principles of physical fitness and healthy living.' },
          { name: 'Creative Arts', curriculumDesign: 'Allows for deeper exploration in a chosen area of art, music, or drama. Learners work on larger projects, develop a personal style, and learn about the creative industries.' },
        ],
      },
      {
        name: 'Grade 6',
        summary: 'Grade 6 (Age 11) is the capstone year of Middle School education, preparing learners for Junior School. The curriculum includes the Kenya Primary School Education Assessment (KPSEA) and focuses on the application of knowledge and skills across all learning areas.',
        subjects: [
          { name: 'English', curriculumDesign: 'Consolidates advanced language and literacy skills in preparation for the KPSEA. Focuses on critical analysis of complex texts, effective communication, and mastery of writing conventions.' },
          { name: 'Kiswahili', curriculumDesign: 'Finalizes preparation for the KPSEA by focusing on advanced grammatical structures, literary analysis, and the ability to write coherent and well-argued compositions.' },
          { name: 'Mathematics', curriculumDesign: 'Consolidates all primary math concepts, including operations with whole numbers, fractions, and decimals, introduction to algebra, geometry, and data handling, in preparation for the national assessment and readiness for higher-level math.' },
          { name: 'Science and Technology', curriculumDesign: 'A key assessment area in KPSEA. Covers a broad range of topics from life sciences, physical sciences, and technology, with an emphasis on scientific inquiry and practical application.' },
          { name: 'Social Studies', curriculumDesign: 'Assessed in KPSEA, this subject combines history, geography, and civics, focusing on Kenya and the wider world. It evaluates learners\' understanding of social, economic, and political systems.' },
          { name: 'Religious Education', curriculumDesign: 'Also part of the national assessment, this subject tests learners\' knowledge of their chosen faith and their ability to apply moral and ethical principles.' },
          { name: 'Kenya Primary School Education Assessment (KPSEA)', curriculumDesign: 'A national summative assessment covering the six core subjects. It gauges the attainment of competencies at the end of the primary cycle and is used for placement in Junior School.' },
        ],
      },
      {
        name: 'Grade 7 (Junior School)',
        summary: 'Grade 7 (Age 12) begins Junior School, providing learners with a deeper dive into integrated sciences, social sciences, and pre-technical skills. This stage emphasizes critical thinking, problem-solving, and the development of essential life skills.',
        subjects: [
          { name: 'English', curriculumDesign: 'Focuses on literature analysis, functional writing, and public speaking. Learners explore various genres and develop skills in critical interpretation and articulate expression.' },
          { name: 'Kiswahili or KSL', curriculumDesign: 'Continues to build proficiency in Kiswahili grammar and literature, or provides foundational learning in Kenyan Sign Language for learners with hearing impairments.' },
          { name: 'Mathematics', curriculumDesign: 'Introduces more abstract mathematical concepts, including advanced algebra, geometry, and trigonometry, with a strong focus on logical reasoning and problem-solving.' },
          { name: 'Integrated Science', curriculumDesign: 'Combines biology, chemistry, and physics concepts in a holistic approach. Learners will investigate scientific phenomena, their application in real life, and the impact of science on society and the environment through project-based learning.' },
          { name: 'Social Studies', curriculumDesign: 'Delves into governance systems, economic development, and social issues in Africa and the wider world. It aims to foster a global perspective and an understanding of interconnectedness and active citizenship.' },
          { name: 'Religious Education', curriculumDesign: 'Offers a deeper study of religious teachings, ethics, and values, encouraging critical reflection and interfaith understanding.' },
          { name: 'Business Studies', curriculumDesign: 'Introduces fundamental concepts of business and economics. Topics include entrepreneurship, basic accounting, financial literacy, marketing, and the role of business in society, fostering an entrepreneurial mindset.' },
          { name: 'Agriculture', curriculumDesign: 'Explores the science and business of agriculture, including crop science, animal husbandry, and sustainable farming practices.' },
          { name: 'Life Skills Education', curriculumDesign: 'Focuses on developing personal and social skills crucial for adolescence. Topics include decision-making, effective communication, managing emotions, building healthy relationships, and developing resilience for a healthy lifestyle.' },
          { name: 'Pre-Technical Studies', curriculumDesign: 'Introduces foundational technical and vocational skills. It covers areas like technical drawing, material science (wood, metal, plastics), and basic mechanics to prepare learners for vocational pathways and develop practical problem-solving abilities.' },
          { name: 'Visual Arts', curriculumDesign: 'An optional subject for learners to develop their skills in drawing, painting, sculpture, digital art, and other visual media. The curriculum emphasizes creativity, technical proficiency, and personal expression.' },
          { name: 'Performing Arts', curriculumDesign: 'An optional subject where learners can specialize in music, dance, or drama. The curriculum focuses on performance techniques, creation and composition, and critical appreciation of various art forms.' },
          { name: 'Home Science', curriculumDesign: 'Teaches advanced practical skills for daily living, including food and nutrition science, consumer rights, and resource management.' },
          { name: 'Computer Science', curriculumDesign: 'Develops digital literacy skills, including coding basics (e.g., Python, Scratch), online collaboration tools, and understanding of data privacy and cybersecurity.' },
          { name: 'Physical Education and Sports', curriculumDesign: 'Focuses on advanced techniques in various sports, leadership, and the science behind physical fitness and performance.' },
        ],
      },
      {
        name: 'Grade 8',
        summary: 'In Grade 8 (Age 13), learners begin to explore optional subjects based on their interests and talents, while continuing with a broad-based curriculum. The focus is on developing specific competencies and deeper conceptual understanding in chosen areas.',
        subjects: [
          { name: 'English', curriculumDesign: 'Builds on literary analysis and creative writing. Learners engage in research projects and produce sophisticated written and oral presentations.' },
          { name: 'Kiswahili or KSL', curriculumDesign: 'Deepens understanding of Kiswahili literature and formal language use, or enhances fluency and expressive communication in Kenyan Sign Language.' },
          { name: 'Mathematics', curriculumDesign: 'Covers advanced topics in algebra, statistics, and probability. Learners apply mathematical principles to solve real-world problems and projects.' },
          { name: 'Chemistry', curriculumDesign: 'Focuses on core principles of chemistry, including atomic structure, chemical bonding, and reactions. Laboratory work is a key component.' },
          { name: 'Physics', curriculumDesign: 'Explores fundamental concepts of physics such as mechanics, electricity, and magnetism, with a focus on experimental investigation.' },
          { name: 'Biology', curriculumDesign: 'Covers topics like cell biology, genetics, and ecology, emphasizing the study of living organisms and their interaction with the environment.' },
          { name: 'History and Government', curriculumDesign: 'Provides an in-depth study of Kenyan history and the structures of government, fostering an understanding of civic responsibility.' },
          { name: 'Geography', curriculumDesign: 'Focuses on physical and human geography, environmental management, and the use of geographical information systems (GIS).' },
          { name: 'Religious Education', curriculumDesign: 'Encourages critical thinking about religious and ethical issues, promoting personal reflection and moral reasoning.' },
          { name: 'Optional Subjects', curriculumDesign: 'Learners continue with two optional subjects chosen in Grade 7, allowing for deeper specialization in areas like Business Studies, Computer Science, Visual Arts, or a foreign language.' },
        ],
      },
      {
        name: 'Grade 9',
        summary: 'Grade 9 (Age 14) is the final year of Junior School. Learners undertake a major research project in their area of interest and sit for the Junior School Assessment, which determines their pathway in Senior School based on their aptitudes and achievements.',
        subjects: [
          { name: 'Core Subjects', curriculumDesign: 'Learners continue with the core subjects from Grade 8 (English, Kiswahili, Maths, and the Sciences) to consolidate their knowledge for the final assessment.' },
          { name: 'Research Project', curriculumDesign: 'A mandatory, learner-led research project in an area of interest. This project is a key part of the final assessment and demonstrates the learner\'s ability to apply knowledge and skills independently.' },
          { name: 'Career Guidance', curriculumDesign: 'Provides intensive guidance to help learners make informed choices about their Senior School pathway based on their interests, abilities, and career aspirations.' },
          { name: 'Junior School Assessment', curriculumDesign: 'A summative assessment at the end of Junior School. It evaluates learners\' mastery of core competencies and their performance in chosen optional subjects to guide them towards appropriate pathways (STEM, Arts, or Social Sciences) in Senior School.' },
        ],
      },
    ],
  },
  {
    name: 'Senior School',
    description: 'Ages 15-17. This level offers three specialized pathways—STEM, Arts &amp; Sports Science, and Social Sciences—based on student aptitudes and career choices.',
    imageId: 'senior_school',
    grades: [
      {
        name: 'Grade 10',
        summary: 'Grade 10 (Age 15) is the first year of Senior School. Learners choose one of three specialized pathways that align with their career interests. The curriculum is designed to provide in-depth knowledge and skills in their chosen field, preparing them for tertiary education and the world of work.',
        subjects: [
          {
            name: 'STEM Pathway',
            curriculumDesign: 'This pathway is designed for learners with a strong aptitude for science, technology, engineering, and mathematics. It provides a rigorous foundation for university degrees in engineering, medicine, computer science, and pure sciences. Career opportunities include becoming an engineer, doctor, software developer, research scientist, or data analyst. Learners select a combination of subjects from the list below.',
            pathways: [
              { name: 'Mathematics', curriculumDesign: 'Compulsory for this pathway. Covers advanced topics in pure mathematics (algebra, calculus) and applied mathematics (statistics, mechanics).' },
              { name: 'Physics', curriculumDesign: 'In-depth study of core physics principles, including mechanics, thermodynamics, and electromagnetism, with a strong emphasis on experimental skills and application.' },
              { name: 'Chemistry', curriculumDesign: 'Focuses on advanced chemistry, including organic chemistry, physical chemistry, and analytical techniques. Practical lab work is a central component.' },
              { name: 'Biology', curriculumDesign: 'Covers advanced biological concepts from molecular biology and genetics to ecology and human physiology, preparing learners for careers in medicine and life sciences.' },
              { name: 'Agriculture', curriculumDesign: 'Focuses on the science and technology of modern agriculture, including biotechnology, soil science, crop management, and agribusiness.' },
              { name: 'Computer Science', curriculumDesign: 'Introduces advanced programming, data structures, algorithms, and software development principles, preparing students for careers in tech.' },
              { name: 'Woodwork', curriculumDesign: 'Provides skills in designing and creating objects from wood, focusing on joinery, finishing, and the use of hand and power tools.' },
              { name: 'Metalwork', curriculumDesign: 'Covers techniques for shaping and joining metal, including welding, casting, and machining. Prepares learners for careers in manufacturing and fabrication.' },
              { name: 'Electricity', curriculumDesign: 'Focuses on electrical principles, circuit design, installation, and safety. It provides a foundation for careers as electricians or electrical technicians.' },
              { name: 'Power Mechanics', curriculumDesign: 'Teaches the principles of internal combustion engines and vehicle systems, preparing students for careers in automotive technology and mechanics.' },
              { name: 'Drawing & Design', curriculumDesign: 'Develops skills in technical drawing, computer-aided design (CAD), and graphical communication for engineering and architectural fields.' },
              { name: 'Aviation Technology', curriculumDesign: 'An introductory course on the principles of flight, aircraft systems, and air navigation for students interested in careers in aviation.' },
            ],
          },
          {
            name: 'Arts and Sports Science Pathway',
            curriculumDesign: 'This pathway is for learners with talents and interests in creative and athletic fields. It prepares them for careers in the arts, media, entertainment, and sports industries. Potential careers include artist, designer, musician, actor, journalist, or sports scientist. Learners choose at least three subjects from the specializations below.',
            pathways: [
                { name: 'Visual Arts', curriculumDesign: 'Specialized study in areas like painting, sculpture, graphic design, or photography. The curriculum is portfolio-driven, preparing students for art school and careers as creative professionals.' },
                { name: 'Performing Arts', curriculumDesign: 'Advanced training in music, dance, or drama. This subject focuses on performance techniques, composition, choreography, and the theoretical understanding of the art form.' },
                { name: 'Sports Science', curriculumDesign: 'Covers the scientific principles behind human performance, including anatomy, physiology, biomechanics, sports medicine, coaching, and sports management.' },
                { name: 'Music', curriculumDesign: 'Focuses on performance, music theory, composition, and musicology. Students can specialize in an instrument or voice and prepare for careers as performers, composers, or music educators.' },
                { name: 'Art and Design', curriculumDesign: 'A broad subject covering principles of design, art history, and practical skills in various media. It prepares students for careers in graphic design, fashion design, and industrial design.' },
            ],
          },
          {
            name: 'Social Sciences Pathway',
            curriculumDesign: 'This pathway is ideal for learners interested in humanities, business, and professions that involve high levels of human interaction and societal understanding. It prepares students for careers in law, business, journalism, public administration, and education. Learners choose at least three subjects from the list below.',
            pathways: [
                { name: 'Languages & Literature', curriculumDesign: 'Advanced study of English, Kiswahili, or foreign languages (e.g., French, German, Mandarin). The curriculum includes in-depth literature analysis, critical theory, and creative writing.' },
                { name: 'History and Government', curriculumDesign: 'In-depth study of local and world history, political ideologies, constitutional law, and international relations. Prepares students for careers in law, public policy, and diplomacy.' },
                { name: 'Geography', curriculumDesign: 'Focuses on advanced physical and human geography, environmental management, urban planning, and the use of geographical information systems (GIS) for data analysis.' },
                { name: 'Religious Studies', curriculumDesign: 'Advanced comparative study of world religions, philosophy, ethics, and their impact on society. It fosters critical thinking and cross-cultural understanding.' },
                { name: 'Business Studies', curriculumDesign: 'Covers advanced topics in accounting, finance, marketing, economics, and entrepreneurship. It prepares learners for university business programs and entrepreneurial ventures.' },
                { name: 'Home Science', curriculumDesign: 'Provides an advanced, scientific approach to topics like food science and nutrition, textile technology, and family resource management, leading to careers in dietetics, hospitality, and social work.' },
            ],
          },
          { name: 'Community Service Learning', curriculumDesign: 'A mandatory core subject across all pathways. Learners engage in projects that address community needs, developing leadership, collaboration, and a sense of social responsibility.' },
        ],
      },
      {
        name: 'Grade 11',
        summary: 'Grade 11 (Age 16) focuses on deepening specialization within the chosen pathway. Learners engage in advanced project work, industry-based internships, and community-based learning to apply their skills in real-world contexts and build their professional portfolio.',
        subjects: [
          { name: 'Pathway Specialization', curriculumDesign: 'Learners continue with their chosen subjects, delving into more complex topics and undertaking in-depth research and project work. The curriculum emphasizes critical analysis, innovation, and independent study.' },
          { name: 'Research Project', curriculumDesign: 'A major component of Grade 11, where learners conduct an independent research project in one of their specialized subjects, guided by a teacher-mentor. This prepares them for university-level research.' },
          { name: 'Career Guidance and Mentorship', curriculumDesign: 'Provides structured guidance on university and college applications, career choices, and workplace readiness. Learners are paired with mentors from relevant industries and participate in work-based learning experiences.' },
          { name: 'ICT and Digital Literacy', curriculumDesign: 'A mandatory core subject that equips learners with advanced digital skills relevant to their pathway, such as data analysis, specialized software, and digital content creation.' },
        ],
      },
      {
        name: 'Grade 12',
        summary: 'The final year of Senior School, Grade 12 (Age 17), is dedicated to consolidating knowledge, completing major projects, and preparing for the final national examinations, which determine university entry and career readiness.',
        subjects: [
          { name: 'Advanced Pathway Project', curriculumDesign: 'Learners complete their major, year-long capstone research or practical project. This project is a key component of their final assessment and showcases their readiness for higher learning or work.' },
          { name: 'Examination Preparation', curriculumDesign: 'Intensive preparation for the final national Senior School examination. The curriculum focuses on in-depth syllabus revision, advanced problem-solving, and critical thinking skills required for their specialized subjects.' },
          { name: 'Tertiary Transition Skills', curriculumDesign: 'Equips learners with essential skills for success in university and beyond. This includes academic writing and referencing, critical thinking, time management, and financial literacy for higher education.' },
          { name: 'National Senior School Examination', curriculumDesign: 'The final summative assessment at the end of Senior School. Performance in this examination, alongside the results of the capstone project, determines eligibility for university admission and other tertiary options.' },
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
