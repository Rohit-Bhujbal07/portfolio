export const personal = {
  name: "Rohit Bhujbal",
  roles: ["React.js Developer", "Frontend Developer", "UI Engineer", "React Specialist"],
  tagline: "I craft clean, performant interfaces —",
  location: "Pune, India",
  availability: "Open to opportunities",
  email: "rohitbhujbal@email.com",
  phone: "+91 XXXXX XXXXX",
  github: "https://github.com/rohitbhujbal",
  linkedin: "https://linkedin.com/in/rohitbhujbal",
  twitter: "https://twitter.com/rohitbhujbal",
  resume: "/Rohit_Bhujbal_Resume.pdf",
  bio: "I build fast, accessible, and thoughtfully crafted web interfaces. With 2.5+ years of experience in React.js, I specialize in turning complex business requirements into clean, scalable frontend solutions — currently at Logicloom IT Solutions, building ERP systems for manufacturing companies.",
  availableForWork: true,
};

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 88 },
    { name: "HTML5 & CSS3", level: 92 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Framer Motion", level: 72 },
    { name: "Redux / Context API", level: 80 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Vite / Webpack", level: 78 },
    { name: "REST APIs", level: 88 },
    { name: "Postman", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Figma (Basic)", level: 65 },
  ],
  currently: ["TypeScript", "Next.js", "React Query", "Jest / Testing"],
};

export const skillTags = [
  "React.js","JavaScript","HTML5","CSS3","Tailwind CSS",
  "Redux","REST APIs","Git","Vite","Framer Motion",
  "Context API","React Router","Responsive Design","ERP Systems",
];

export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Logicloom IT Solutions Pvt Ltd",
    location: "Pune, India",
    period: "Jan 2023 – Present",
    duration: "2.5+ yrs",
    type: "Full-time",
    description: "Building feature-rich ERP frontend modules for tool and sheet metal manufacturers using React.js.",
    highlights: [
      "Built Job Work Invoice module with dynamic tax mapping, conditional columns, and multi-tenant schema handling",
      "Developed Sale Order management with multi-schedule delivery for blanket/annual contracts",
      "Implemented reusable component patterns using React hooks, Context API, and field config arrays",
      "Integrated REST APIs across 15+ modules using a consistent getRecords/saveRecords service layer",
      "Improved UI consistency using react-select, framer-motion animations, and shared component library",
    ],
    tech: ["React.js","JavaScript","Tailwind CSS","REST APIs","Context API","react-select"],
  },
  {
    id: 2,
    role: "Frontend Developer Intern",
    company: "Logicloom IT Solutions Pvt Ltd",
    location: "Pune, India",
    period: "Jul 2022 – Dec 2022",
    duration: "6 months",
    type: "Internship",
    description: "Started as an intern working on UI components and learning the ERP codebase architecture.",
    highlights: [
      "Learned React.js patterns and component architecture in a production codebase",
      "Contributed to UI improvements across procurement and invoice screens",
      "Collaborated with backend developers for REST API integration",
    ],
    tech: ["React.js","JavaScript","CSS3","HTML5"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Resume Optimizer Tool",
    description: "AI-powered resume optimizer using the Claude API. Upload your resume + job description and get ATS-optimized, tailored suggestions instantly.",
    tech: ["React.js","Claude API","Vite","Tailwind CSS"],
    github: "https://github.com/rohitbhujbal/resume-optimizer",
    live: null,
    featured: true,
    category: "AI Tool",
    status: "Completed",
  },
  {
    id: 2,
    title: "ERP Job Work Invoice Module",
    description: "Complex invoice management for manufacturing ERP — dynamic tax mapping, conditional table columns, grouped headers, multi-tenant schema support.",
    tech: ["React.js","JavaScript","REST APIs","react-select","Context API"],
    github: null,
    live: null,
    featured: true,
    category: "ERP / Web App",
    status: "Production",
  },
  {
    id: 3,
    title: "Multi-Location ERP Login",
    description: "Location-aware login flow with popup, localStorage persistence, header badge, and seamless switching for multi-tenant ERP.",
    tech: ["React.js","localStorage","Context API","Tailwind CSS"],
    github: null,
    live: null,
    featured: false,
    category: "ERP / Web App",
    status: "Production",
  },
  {
    id: 4,
    title: "Sale Order Multi-Schedule Delivery",
    description: "Toggle-based multi-schedule delivery system for sheet metal blanket/annual contracts, extending existing sale order UI non-destructively.",
    tech: ["React.js","JavaScript","REST APIs","Tailwind CSS"],
    github: null,
    live: null,
    featured: false,
    category: "ERP / Web App",
    status: "Production",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Project Manager",
    company: "Logicloom IT Solutions",
    initials: "PS",
    text: "Rohit consistently delivers well-structured React components on time. His ability to understand complex ERP workflows and translate them into intuitive UI is impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Amit Deshmukh",
    role: "Backend Developer",
    company: "Logicloom IT Solutions",
    initials: "AD",
    text: "Working with Rohit is seamless. He always asks the right API questions and handles edge cases in the UI that most developers miss. The invoice module he built is rock-solid.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    role: "UI/UX Designer",
    company: "Logicloom IT Solutions",
    initials: "SK",
    text: "Rohit has a sharp eye for detail when implementing designs. He doesn't just copy pixels — he asks why, and often improves on the original design during implementation.",
    rating: 5,
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "How I Built a Resume Optimizer Using the Claude API",
    excerpt: "A walkthrough of integrating the Anthropic Claude API into a React app — from API calls to structured output parsing and a clean UI for job seekers.",
    date: "May 2025",
    readTime: "6 min read",
    tags: ["React","Claude API","AI"],
    slug: "resume-optimizer-claude-api",
  },
  {
    id: 2,
    title: "Multi-Tenant React: Patterns I Use in a Real ERP System",
    excerpt: "Lessons from 2+ years building a manufacturing ERP frontend — schema-based multi-tenancy, localStorage patterns, and keeping components reusable.",
    date: "Apr 2025",
    readTime: "8 min read",
    tags: ["React","Architecture","ERP"],
    slug: "multi-tenant-react-erp",
  },
  {
    id: 3,
    title: "When useEffect Gets Complicated: Lessons from Production",
    excerpt: "Real patterns for managing useEffect dependencies, avoiding infinite loops, and the search-triggered refetch pattern — with ERP examples.",
    date: "Mar 2025",
    readTime: "5 min read",
    tags: ["React","Hooks","Best Practices"],
    slug: "useeffect-in-production",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
