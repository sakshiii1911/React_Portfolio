
// ========================================
// PERSONAL INFORMATION
// ========================================

export const personalInfo = {
    name: "Sakshi Pawar",
    title: "Software Developer",
    designation: "Full Stack Developer",
    experience: "Fresher",
    email: "sakshi@gmail.com",
    phone: "+91 XXXXXXXXXX",
    location: "Maharashtra, India",

    shortDescription:
        "Computer Science and Information Technology graduate with knowledge of Python, Java, SQL, React and ASP.NET Core.",

    about:
        "I am a Computer Science and Information Technology graduate passionate about software development and problem-solving. I have experience working with frontend and backend technologies, REST APIs, databases and web application development. I enjoy learning new technologies and building practical solutions to real-world problems.",

    // profileImage: "/images/profile.png",
    // resume: "/files/resume.pdf",

    socialLinks: {
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        // portfolio: "https://yourportfolio.com"
    },

    technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Python",
        "Java",
        "C#",
        "SQL",
        "ASP.NET Core",
        "MySQL",
        "PostgreSQL",
        "Git",
        "GitHub"
    ]
};


// ========================================
// PROJECTS LIST
// ========================================

export const projectsList = [
    {
        id: 1,
        title: "Chronic Disease Prediction",
        category: "Machine Learning",
        shortDescription:
            "A machine learning application for predicting heart disease using patient health data and classification algorithms.",
        image: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/592/183/datas/original.jpg",
        technologies: ["Python", "Machine Learning", "Scikit-learn", "TensorFlow"],
        liveLink: "",
        githubLink: "",
        featured: true
    },
    {
        id: 2,
        title: "Hiring Search Tool",
        category: "Full Stack Development",
        shortDescription:
            "A web-based hiring search platform that helps users search for recruitment opportunities and save their queries.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUdEI5cZOrqHo5p3CZLao7bTdTiDinKSVQSQzFXiaIkeUJNDEla7IenM&s=10",
        technologies: ["React.js", "Node.js", "Firebase"],
        liveLink: "",
        githubLink: "",
        featured: true
    },
    {
        id: 3,
        title: "Recruitment Management System API",
        category: "Backend Development",
        shortDescription:
            "A RESTful API for managing job postings, candidate applications and recruitment status using ASP.NET Core.",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240308175245/Recruitment-Management-System-copy.webp",
        technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Swagger"],
        liveLink: "",
        githubLink: "",
        featured: true
    },
    {
        id: 4,
        title: "Food Delivery Website",
        category: "Frontend Development",
        shortDescription:
            "A responsive food delivery website featuring burger listings, navigation sections and an interactive user interface.",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240402153713/Food-Delivery-Application-banner-copy.webp",
        technologies: ["React.js", "JavaScript", "CSS", "Bootstrap"],
        liveLink: "",
        githubLink: "",
        featured: false
    },
   
    {
        id: 6,
        title: "Bank Management System",
        category: "Database Management",
        shortDescription:
            "A database-driven bank management system for managing customer information and banking operations.",
        image: "https://image.slidesharecdn.com/bankmanagementsystem-230205085234-1196de84/75/Bank-Management-System-pptx-1-2048.jpg",
        technologies: ["SQL", "MySQL", "Database Management"],
        liveLink: "",
        githubLink: "",
        featured: false
    }
];


// ========================================
// PROJECT DETAILS
// ========================================

export const projectsDetails = [
    {
        projectId: 1,
        title: "Chronic Disease Prediction",
        overview:
            "A machine learning project focused on predicting heart disease based on patient health-related attributes.",

        features: [
            "Heart disease prediction",
            "Patient health data analysis",
            "Data preprocessing",
            "Machine learning model training",
            "Classification algorithms",
            "Prediction based on input features"
        ],

        challenges:
            "Working with healthcare datasets, preprocessing data and improving prediction performance using machine learning techniques.",

        role: "Machine Learning Developer",

        technologies: [
            "Python",
            "Scikit-learn",
            "TensorFlow",
            "Pandas",
            "NumPy",
            "UCI Dataset"
        ],

        githubLink: "",
        liveLink: ""
    },
    {
        projectId: 2,
        title: "Hiring Search Tool",
        overview:
            "A web application developed to simplify hiring searches and help users manage recruitment-related queries.",

        features: [
            "Hiring search functionality",
            "Search query management",
            "Save search queries",
            "Interactive React interface",
            "Firebase integration"
        ],

        challenges:
            "Developing an interactive frontend and integrating backend services for storing and managing search queries.",

        role: "Full Stack Developer",

        technologies: [
            "React.js",
            "Node.js",
            "Firebase",
            "JavaScript",
            "CSS"
        ],

        githubLink: "",
        liveLink: ""
    },
    {
        projectId: 3,
        title: "Recruitment Management System API",
        overview:
            "A RESTful Web API developed using ASP.NET Core to manage job postings, candidate applications and recruitment workflows.",

        features: [
            "Job posting management",
            "Candidate application management",
            "Hiring status tracking",
            "CRUD API endpoints",
            "Entity Framework Core integration",
            "SQL Server database integration",
            "Swagger API documentation"
        ],

        challenges:
            "Designing a layered architecture, implementing CRUD operations and managing database interactions using Entity Framework Core.",

        role: "Backend Developer",

        technologies: [
            "C#",
            "ASP.NET Core",
            "Entity Framework Core",
            "SQL Server",
            "Swagger",
            "REST API"
        ],

        githubLink: "",
        liveLink: ""
    }
];


// ========================================
// TECHNICAL SKILLS
// ========================================

export const skills = [
    {
        id: 1,
        category: "Frontend Development",
        icon: "Monitor",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "Bootstrap"
        ]
    },
    {
        id: 2,
        category: "Backend Development",
        icon: "Server",
        skills: [
            "Python",
            "Java",
            "C#",
            "ASP.NET Core",
            "Node.js",
            "REST APIs"
        ]
    },
    {
        id: 3,
        category: "Database",
        icon: "Database",
        skills: [
            "SQL",
            "MySQL",
            "PostgreSQL",
            "MongoDB",
            "Entity Framework Core"
        ]
    },
    {
        id: 4,
        category: "Tools & Technologies",
        icon: "Wrench",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Visual Studio",
            "Postman",
            "Figma"
        ]
    }
];


// ========================================
// CERTIFICATIONS
// ========================================

export const certificates = [
    {
        id: 1,
        title: "Python Programming Certification",
        organization: "Linkdin Learning",
        issueDate: "",
        credentialId: "",
        certificateImage: "/images/certificates/python.png",
        credentialUrl: ""
    },
    {
        id: 2,
        title: "Web Development Certification",
        organization: "Coursera",
        issueDate: "",
        credentialId: "",
        certificateImage: "/images/certificates/web-development.png",
        credentialUrl: ""
    },
    {
        id: 3,
        title: "SQL/Database  Certification",
        organization: "Udemy",
        issueDate: "",
        credentialId: "",
        certificateImage: "/images/certificates/sql.png",
        credentialUrl: ""
    }
];