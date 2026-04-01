export const projectsData = [
  {
    id: "techvista",
    title: "TechVista Web App",
    description:
      "A responsive single-page application built to showcase tech innovations with a modern UI, dynamic dashboard, and smooth navigation using React and Material UI.",
    techStack: ["React.js", "Material UI", "JavaScript", "HTML", "CSS"],
    features: [
      "Responsive UI built with Material UI components",
      "Dynamic dashboard layout with reusable components",
      "Smooth navigation using React Router",
      "Optimized performance with component-based architecture",
      "Clean and scalable folder structure",
    ],
    screenshots: [
      "/images/techvista-3.png",
      "/images/techvista-2.png",
      "/images/techvista-1.png",
    ],
  },
  {
    id: "taskmaster",
    title: "TaskMaster API",
    description:
      "A robust RESTful API designed for task and productivity management, allowing users to organize, track, and manage their daily tasks efficiently. The system supports secure authentication, task categorization and status tracking, built with a scalable backend architecture using ASP.NET Core and Entity Framework",
    techStack: ["ASP.NET Core", "C#", "JWT", "Entity Framework Core", "SQL Server"],
    features: [
      "Secure user authentication and authorization using JWT",
      "Full CRUD operations for tasks",
      "Task status management (e.g., pending, in-progress, completed)",
      "Task prioritization and categorization",
      "User-specific task management (each user manages their own tasks)",
      "Clean relational database design",
      "Modular architecture with DTOs for data handling",
      "Input validation and structured error handling",
      "Optimized queries using LINQ and EF Core"
    ],
    screenshots: [
      "/images/taskmaster-1.png",
      "/images/taskmaster-2.png",
    ],
  },
  {
    id: "blogplatform",
    title: "Blog Platform API",
    description: "A scalable RESTful API built for a blog platform that enables users to create, manage, and interact with blog posts. The system supports authentication, post management, and user-generated comments, designed with clean architecture and optimized database relationships using Entity Framework Core.",
    techStack: ["ASP.NET Core Web API", "C#", "JWT", "Entity Framework Core", "SQL Server","LINQ"],
    features: [ 
        "User authentication and authorization using JWT",
        "CRUD operations for blog posts",
        "Commenting system on posts",
        "Relational database design (Users, Posts, Comments)",
        "Secure endpoints with role-based access control",
        "Clean and modular architecture using DTOs",
        "Optimized queries using LINQ and EF Core",
        "Error handling and validation for API requests"
    ],
    screenshots: [
        "/images/blogplatform-1.png",
        "/images/blogplatform-2.png"
    ]
  }
];