import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 500
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Siddharth Shanker",
  title: emoji("Hello there, I'm Siddharth"),
  subTitle:"Computer Science Engineering student in Birla Institute of Technology, Mesra, Ranchi. Evolving myself as a full stack developer with keen intrest in multiple frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1K7vEzVf-1YHj7d1Kix6WdMo5doTZ0FXe/view?usp=sharing",
  displayGreeting: true
};


const socialMediaLinks = {
  github: "https://github.com/Siddharthbitm",
  linkedin: "https://www.linkedin.com/in/hiresiddharthshanker",
  gmail: "siddharth8730@gmail.com",
  medium: "https://medium.com/@siddharth8730",
  kaggle: "https://www.kaggle.com/sidonkaggle",
  display: true 
};


const skillsSection = {
  title: "What I love to do",
  subTitle: "Consider me as an enthusiastic web developer who's eager to try out every new techstack",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for web applications"),
    emoji("⚡ Versed with various tools such as NodeJS, ReactJS, Bootstrap and Tailwind "),
    emoji("⚡ Confident with Database Management Systems, Object-Oriented Programming "),
    emoji("⚡ Skilled in various MS Office tools such as Excel, Powerpoint, Word, etc. ")
  ],

//https://fontawesome.com/icons?d=gallery 

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "stackoverflow",
      fontAwesomeClassname: "fab fa-stack-overflow"
    },
    {
      skillName: "connections",
      fontAwesomeClassname: "fab fa-connectdevelop"
    },
    {
      skillName: "kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "overleaf",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "ms office",
      fontAwesomeClassname: "fab fa-microsoft"
    }
  ],
  display: true 
};

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Birla Institute of Technology, Mesra, Ranchi",
      logo: require("./assets/images/bitlogo.png"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "August 2022 - April 2026",
      desc: "completing my ongoing degree along with gaining the exposure and experience.",
      descBullets: [
        "Member of the club IEEE associated with the technicalities and hosting of various events and hackathons.",
        "Holding the position 'Head of Pulpit' in the club UNESQUO to pursue my affection for MUNs/oratory events and quizzes."
      ]
    },
    {
      schoolName: "St Karen's High School, Patna",
      logo: require("./assets/images/karens.png"),
      subHeader: "Intermediate in PCM with IP",
      duration: "April 2020 - May 2022",
      desc: "Topped the Class XII Board exam in the subject of Information Practices (IP).",
      descBullets: ["Scored a final score of 87% in the higher secondary board examination.","Affiliated with CBSE Board, Delhi."]
    },
    {
      schoolName: "Don Bosco Academy, Patna",
      logo: require("./assets/images/donbosco.jpg"),
      subHeader: "Matriculation in Science with Computer",
      duration: "April 2013 - March 2020",
      desc: "I owe my confidence, personality and command of english to my alma mater <3 ",
      descBullets: [
        "Scored a final score of 91% in the secondary Board examination",
        "Affiliated with ICSE (CISCE Board), Delhi"
      ]
    }
  ]
};


const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "WebDevelopment / Frontend", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Data Structures and Algorithm",
      progressPercentage: "75%"
    },
    {
      Stack: "Tools (reactJS,tailwind,GraphQL,etc)",
      progressPercentage: "80%"
    },
    {
      Stack: "Libraries (STL,NumPy,scikit-Learn )",
      progressPercentage: "70%"
    },
    {
      Stack: "Soft Skills (Presentations,teamwork,etc.)",
      progressPercentage: "98%"
    }
  ],
};


const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Software Developer Trainee",
      company: "Kaptue CX",
      companylogo: require("./assets/images/kapturelogo.jpeg"),
      date: "June 2025 – August 2025",
      desc: "Being a Software Developer Trainee, I was tasked with the frontend UI development of the CX platform being provided to respective clients",
      descBullets: [
        "Led the UI/Frontend development of Kapture-EX, an inter-organization platform being developed for Flipkart support team. ",
        "Optimized the routing/mappings of the webpage and integrated the UI with the pre-exsisting workspace database."
      ]
    },
    {
      role: "AI and Machine Learning Intern",
      company: "Wissen Infotech",
      companylogo: require("./assets/images/wissen.jpg"),
      date: "June 2024 – August 2024",
      desc: "As an intern in the AIML team, it was thrilling to work on production level projects and a pleasure to work with such brilliant minds  ",
      descBullets: [
        "Tasked with researching on LLMs and analyzing their workings and traddeoffs. ",
        "Created a pipeline architeture to convert ABAP code to JavaScript Code by integrating various LLMs"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false", //footer contact from github
  display: false
};


const bigProjects = {
  title: "Projects",
  subtitle: "Some of the projects I've created over the course of 4 years of my graduation.",
  projects: [
    {
      image: require("./assets/images/landingwebsitelogo.webp"),
      projectName: "Portfolio/Landing Page",
      projectDesc: "the project is of the portfolio website created using frameworks such reactJS, NodeJS and tailwind ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/siddharthbitm/LandingSite"
        }
      ]
    },
    {
      image: require("./assets/images/Machine.png"),
      projectName: "CustomerConversion Prediction",
      projectDesc: "A Machine Learning project made to predict the domain of customers most likely to get converted using multiple ML models",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/siddharthbitm/CustomerConversion-Prediction"
        }
      ]
    }
  ],
  display: true 
};


const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Co-Chairperson, BITMUN '25",
      subtitle:
        "Chaired the War Cabinet crisis committee in BITMUN'25.",
      image: require("./assets/images/bitmun.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CvVMhGfAGXVBab2EoQ_eOdPlAWnLXYjJ/view?usp=sharing"
        }
      ]
    },
    {
      title: "XISS Panache Quiz 1st Runner-up",
      subtitle:
        "Secured the podium twice by coming 2nd runner-up in XISS Panache '24 and 1st runner-up in XISS Panache '25",
      image: require("./assets/images/xiss.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CvVMhGfAGXVBab2EoQ_eOdPlAWnLXYjJ/view?usp=sharing"
        }
      ]
    },
    {
      title: "NTPC Electron Quiz Finalist",
      subtitle:
        "Qualified till the final round of Electron Quiz by NTPC among 108 teams. ",
      image: require("./assets/images/ntpc.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CvVMhGfAGXVBab2EoQ_eOdPlAWnLXYjJ/view?usp=sharing"
        }
      ]
    },
    {
      title: "ROSTRA '24 Youth Parliament",
      subtitle:
        "Awarded special mention as Leader of Opposition in youth parliament in ROSTA '24 by LITSOC ",
      image: require("./assets/images/rostra.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CvVMhGfAGXVBab2EoQ_eOdPlAWnLXYjJ/view?usp=sharing"
        }
      ]
    },
    {
      title: "PCMUN '19 Honourable mention",
      subtitle:
        "Awarded honourable mention as a reporter of Internation Press in PCMUN'19 ",
      image: require("./assets/images/pcmun.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CvVMhGfAGXVBab2EoQ_eOdPlAWnLXYjJ/view?usp=sharing"
        }
      ]
    },
    {
      title: "Internation English Olympiad State Rank 21",
      subtitle:
        "Recieved the certifcate and medal for being 21st rank in Bihar in SOF's Internation English Olympiad ",
      image: require("./assets/images/ieo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1CvVMhGfAGXVBab2EoQ_eOdPlAWnLXYjJ/view?usp=sharing"
        }
      ]
    }

    
  ],
  display: true 
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and share what's on my mind. My blogs are a chest of personal opinions and in no way directs the workinng of the system. I believe myself to be a very opinionated person and hence I started with the blogs",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "",
      title: "Skill better than skin",
      description:
        "just my opinions on how the focus on diversification might lead to loss of assets "
    },
    {
      url: "",
      title: "curriculum over fest",
      description:
        "Why considering college curriculum before joining is important in today's generation "
    }
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  resume:"https://drive.google.com/file/d/1K7vEzVf-1YHj7d1Kix6WdMo5doTZ0FXe/view?usp=sharing",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss an opportunity or just want to say hi? My Inbox is open for all <3",
  number: "+91-7979758849",
  email_address: "siddharth8730@gmail.com",
  display: true
};

const isHireable = false; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  isHireable,
  resumeSection
};
