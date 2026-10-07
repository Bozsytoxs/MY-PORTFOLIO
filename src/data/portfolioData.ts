export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Education' | 'Cybersecurity' | 'Infrastructure' | 'STEM';
  description: string;
  detailedDescription: string;
  role: string;
  technologies: string[];
  highlights: string[];
  linkPlaceholder: string;
  status: 'Active Founder Initiative' | 'In Development' | 'Active Practice' | 'Educational Outreach';
}

export interface SkillItem {
  name: string;
  proficiency: 'Intermediate' | 'Working Knowledge' | 'Developing' | 'Familiar';
  description?: string;
}

export interface SkillCategory {
  category: 'Networking' | 'Cybersecurity' | 'Development' | 'Technology';
  summary: string;
  skills: SkillItem[];
}

export interface WritingItem {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  date: string;
  summary: string;
  coreArguments: string[];
  excerpt: string;
  fullAnalysis: string[];
  topics: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  organizationOrContext: string;
  type: 'Education' | 'Membership' | 'Teaching' | 'Technical Training' | 'Outreach';
  description: string;
  details: string[];
  credentialNote?: string;
}

export const PERSONAL_INFO = {
  name: "Joseph Seyilnen Tapkum",
  shortName: "Joseph Tapkum",
  title: "Computer & Communications Engineer | Network Engineer | Educator | Technology Builder",
  supportingStatement: "Building at the intersection of technology, education and human development — with interests and practical experience in networking, cybersecurity, web development, IT infrastructure and emerging technologies.",
  location: "Jos, Plateau State, Nigeria",
  email: "josephseyilnen2020@gmail.com",
  phone: "+2348058241524",
  phoneDisplay: "+234 805 824 1524",
  photoUrl: "IMG_4421-Edit-2.jpg",
  cvPlaceholder: "[CV PDF]",
  profiles: {
    linkedin: "https://www.linkedin.com/in/joseph-seyilnen-tapkum-b00402128/",
    github: "https://github.com/Bozsytoxs",
    whatsapp: "https://wa.me/2348058241524",
    facebook: "[Facebook URL]",
    x: "[X/Twitter URL]",
    email: "josephseyilnen2020@gmail.com",
  },
  bioSummary: "Joseph Seyilnen Tapkum is a Nigerian Computer and Communications Engineer, network practitioner, and educator dedicated to practical technology solutions and education reform across Africa.",
  bioFull: [
    "Joseph began his professional trajectory as a secondary-level Chemistry teacher. In the classroom, he discovered not only the joy of teaching complex principles to inquisitive minds, but also the pressing need for systemic education reform and practical hands-on learning.",
    "Driven by a fascination with systems architecture, communications protocols, and digital connectivity, he transitioned into Computer and Communications Engineering, developing grounded competencies in network engineering, cybersecurity awareness, IT infrastructure, and web solutions.",
    "Today, he bridges the worlds of engineering and pedagogy through the Next Generation Tech Institute (NGTI), an initiative he is building to empower Nigerian youth with practical technological capabilities, critical thinking, and leadership."
  ],
  interests: [
    "Computer networking",
    "Cybersecurity",
    "Web development",
    "IT infrastructure",
    "Artificial intelligence",
    "Technology education",
    "Youth development",
    "Education reform",
    "Entrepreneurship and innovation"
  ]
};

export const WHAT_I_DO = [
  {
    id: "network-engineering",
    title: "Network Engineering",
    description: "Designing, configuring, and maintaining robust communication backbones tailored for operational resilience and efficiency.",
    items: [
      "Network design & topology planning",
      "Routing and switching implementation",
      "VLANs & network segmentation",
      "Systematic network troubleshooting",
      "Wireless and fibre networking deployment"
    ],
    iconName: "Network"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Promoting digital hygiene, network defence mechanisms, and grassroots security awareness against evolving cyber threats.",
    items: [
      "Cybersecurity awareness & training",
      "Network security configuration",
      "Security fundamentals & access control",
      "Phishing and scam threat recognition",
      "Protective digital hygiene best practices"
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "web-digital",
    title: "Web & Digital Solutions",
    description: "Crafting accessible, lightweight web platforms and digital tools that address tangible workflow and informational challenges.",
    items: [
      "Website development & responsive design",
      "Digital platforms & community hubs",
      "Web-based tools & utilities",
      "Practical technology solutions for institutions",
      "Search-friendly, accessible architectures"
    ],
    iconName: "Globe"
  },
  {
    id: "tech-education",
    title: "Technology Education",
    description: "Bridging the gap between theoretical schooling and industry readiness through hands-on, student-centred instruction.",
    items: [
      "Hands-on technology training workshops",
      "STEM education and mentoring",
      "Youth development & capacity building",
      "Foundational digital skills literacy",
      "Project-driven learning curricula"
    ],
    iconName: "GraduationCap"
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure",
    description: "Executing methodical physical and logical setup of IT assets for schools, organizations, and growing enterprises.",
    items: [
      "Infrastructure planning & equipment selection",
      "Technical hardware & rack installations",
      "Systems setup, OS & peripherals deployment",
      "Proactive IT support and diagnostics",
      "Structured cabling and workstation setups"
    ],
    iconName: "Server"
  },
  {
    id: "innovation-emerging",
    title: "Innovation & Emerging Technology",
    description: "Exploring practical applications of modern computation, automation, and smart systems to solve everyday African challenges.",
    items: [
      "Applied artificial intelligence explorations",
      "Workflow & process automation",
      "Internet of Things (IoT) fundamentals",
      "Technology-enabled problem solving",
      "Sustainable digital adaptation for local needs"
    ],
    iconName: "Cpu"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ngti",
    title: "Next Generation Tech Institute (NGTI)",
    subtitle: "Education-Focused Technology & Youth Empowerment Initiative",
    category: "Education",
    status: "Active Founder Initiative",
    description: "An education-focused initiative being built around technology, practical learning, youth empowerment and education reform.",
    detailedDescription: "Next Generation Tech Institute (NGTI) was conceived by Joseph to address the stark disparity between abstract curriculum theory and real-world technical skills in Nigerian secondary and tertiary education. NGTI focuses on experiential learning: teaching students how networks actually communicate, how computers execute logic, and how young people can become active builders rather than passive consumers.",
    role: "Founder & Lead Educator",
    technologies: [
      "Curriculum Design",
      "Network Labs",
      "STEM Pedagogy",
      "Youth Mentorship",
      "Digital Literacy"
    ],
    highlights: [
      "Hands-on curriculum emphasizing practical troubleshooting over rote memorization",
      "Designed specifically around local infrastructural constraints (intermittent power, low bandwidth)",
      "Focus on critical thinking, problem formulation, and ethical leadership",
      "Pathways connecting secondary school learners directly to foundational IT & networking concepts"
    ],
    linkPlaceholder: "[NGTI Platform / Repository]"
  },
  {
    id: "phishguard-ng",
    title: "PhishGuard NG",
    subtitle: "Grassroots Digital Threat & Scam Awareness Initiative",
    category: "Cybersecurity",
    status: "In Development",
    description: "A cybersecurity awareness project designed to help ordinary Nigerians identify phishing, scams, suspicious links and other common digital threats before they cause harm.",
    detailedDescription: "As digital payments, mobile banking, and instant messaging expand rapidly across Nigeria, so do phishing schemes, social engineering frauds, and SMS-based deceptive links. PhishGuard NG translates cybersecurity principles into accessible, everyday knowledge tailored to the Nigerian context, breaking down deceptive tactics and providing easy verification habits.",
    role: "Project Lead & Security Researcher",
    technologies: [
      "Cybersecurity Education",
      "Threat Pattern Analysis",
      "Web Verification Tools",
      "Public Safety Checklists",
      "Digital Awareness"
    ],
    highlights: [
      "Cataloguing common Nigerian-targeted SMS, WhatsApp, and banking scam mechanisms",
      "Simple visual heuristics for inspecting URLs and suspicious requests",
      "Educational modules prepared for students, market traders, and senior citizens",
      "Community reporting and preventive awareness guides"
    ],
    linkPlaceholder: "[PhishGuard NG Repository]"
  },
  {
    id: "dynamis-technologies",
    title: "Dynamis Technologies",
    subtitle: "Practical Technology Services & Infrastructure Solutions",
    category: "Infrastructure",
    status: "Active Practice",
    description: "A technology initiative focused on practical solutions across networking, IT infrastructure, web and digital solutions, cybersecurity, AI and automation, IoT, technical installations and related technology services.",
    detailedDescription: "Dynamis Technologies serves as the operational umbrella for Joseph's technical engineering services. It delivers grounded technology interventions for institutions, small businesses, and learning facilities—ranging from structured network cabling and router configuration to web setups, equipment maintenance, and emerging tech exploratory prototypes.",
    role: "Technical Lead & Systems Engineer",
    technologies: [
      "Routing & Switching",
      "Network Infrastructure",
      "Web Platforms",
      "Hardware Installation",
      "IoT Explorations"
    ],
    highlights: [
      "End-to-end small office and educational lab network deployments",
      "Pragmatic cost-efficient hardware sourcing and setup",
      "Preventive maintenance and network segmentation for office security",
      "Structured documentation for local operators and support staff"
    ],
    linkPlaceholder: "[Dynamis Tech Profile]"
  },
  {
    id: "techedguard",
    title: "TechEdGuard",
    subtitle: "STEM, Robotics & Secondary School Mentorship",
    category: "STEM",
    status: "Educational Outreach",
    description: "A STEM/robotics and mentorship initiative focused on secondary-school students, practical technology education and youth development.",
    detailedDescription: "TechEdGuard targets teenagers during their formative senior secondary school years. Leveraging Joseph's background in science education, the initiative introduces high school students to computational thinking, sensor mechanics, basic logic, and ethical technology usage, while providing positive peer mentorship to guide their career choices.",
    role: "Initiator & Lead Mentor",
    technologies: [
      "STEM Mentorship",
      "Introductory Robotics",
      "Electronics Basics",
      "Logic Building",
      "Career Guidance"
    ],
    highlights: [
      "Engaging classroom demonstrations linking chemistry/physics with electronics",
      "Demystifying engineering for students in underserved secondary schools",
      "Fostering collaboration and problem-solving through interactive challenges",
      "Cultivating disciplined study habits and long-term ambition"
    ],
    linkPlaceholder: "[TechEdGuard Initiative]"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Networking",
    summary: "Solid foundation in core networking models, routing protocols, subnets, and physical/wireless layer setups.",
    skills: [
      { name: "TCP/IP Suite", proficiency: "Intermediate", description: "Addressing, OSI reference model, packet structure and analysis" },
      { name: "Routing & Switching", proficiency: "Intermediate", description: "Static routing, basic inter-VLAN routing, switch port security" },
      { name: "VLANs & Segmentation", proficiency: "Intermediate", description: "Traffic isolation, trunking (802.1Q), subnet planning" },
      { name: "OSPF", proficiency: "Working Knowledge", description: "Single-area Open Shortest Path First protocol principles & setup" },
      { name: "DHCP / DNS Services", proficiency: "Working Knowledge", description: "Scope reservation, pool configuration, DNS resolution setup" },
      { name: "Wireless Networking", proficiency: "Working Knowledge", description: "WLAN deployment, SSID configuration, access point coverage" },
      { name: "Fibre Networking", proficiency: "Working Knowledge", description: "Fibre optic fundamentals, media conversion, termination basics" },
      { name: "Network Troubleshooting", proficiency: "Intermediate", description: "Ping, traceroute, ARP tables, link testing, diagnostic methodology" }
    ]
  },
  {
    category: "Cybersecurity",
    summary: "Dedicated focus on threat identification, baseline defense configurations, and grassroots awareness.",
    skills: [
      { name: "Cybersecurity Fundamentals", proficiency: "Intermediate", description: "CIA triad, defense-in-depth, access control mechanisms" },
      { name: "Network Security", proficiency: "Working Knowledge", description: "Port security, basic firewall ACLs, segment protection" },
      { name: "Phishing & Scam Awareness", proficiency: "Intermediate", description: "Social engineering vectors, domain spoofing analysis, training" },
      { name: "Security Assessment Fundamentals", proficiency: "Developing", description: "Vulnerability concepts, baseline audits, reconnaissance ethics" },
      { name: "Cybersecurity Education", proficiency: "Intermediate", description: "Curriculum delivery for non-technical users and students" }
    ]
  },
  {
    category: "Development",
    summary: "Pragmatic full-stack and scripting capabilities oriented towards functional tools and web portals.",
    skills: [
      { name: "HTML & CSS", proficiency: "Intermediate", description: "Semantic markup, responsive layouts, accessibility standards" },
      { name: "JavaScript", proficiency: "Working Knowledge", description: "DOM manipulation, asynchronous fetching, modern ES6+ syntax" },
      { name: "Python", proficiency: "Working Knowledge", description: "Scripting, algorithmic basics, data handling, automation logic" },
      { name: "Web Development", proficiency: "Working Knowledge", description: "Building responsive, modern, maintainable client websites" },
      { name: "Git & GitHub", proficiency: "Working Knowledge", description: "Version control, branching, repository management, collaboration" }
    ]
  },
  {
    category: "Technology",
    summary: "Operating systems, network simulation environments, and emerging computation stacks.",
    skills: [
      { name: "Linux Administration", proficiency: "Working Knowledge", description: "Command-line operations, file system navigation, permissions" },
      { name: "Cisco Networking", proficiency: "Intermediate", description: "Cisco IOS commands, router/switch configuration, show diagnostics" },
      { name: "Cisco Packet Tracer", proficiency: "Intermediate", description: "Topology simulation, lab verification, protocol packet tracing" },
      { name: "AI & Automation", proficiency: "Developing", description: "Integrating intelligent APIs, workflow scripts, productivity engines" },
      { name: "Internet of Things (IoT)", proficiency: "Developing", description: "Sensor fundamentals, microcontrollers, embedded data logic" },
      { name: "IT Infrastructure Management", proficiency: "Intermediate", description: "Hardware deployments, workstation provisioning, peripherals" }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    period: "Ongoing",
    title: "Founder & Lead Educator",
    organizationOrContext: "Next Generation Tech Institute (NGTI)",
    type: "Education",
    description: "Establishing an educational platform centered on hands-on technology education, networking skills, and youth leadership in Nigeria.",
    details: [
      "Formulating practical curricula bridging science, computing, and real-world networking",
      "Designing lab sessions focused on solving infrastructural and community challenges",
      "Mentoring secondary and early-tertiary students in digital literacy and critical thinking"
    ]
  },
  {
    period: "Professional Member",
    title: "Member (IAENG)",
    organizationOrContext: "International Association of Engineers",
    type: "Membership",
    description: "Registered professional member of the International Association of Engineers, participating in global professional engineering discourse and ethical technical standards.",
    details: [
      "Affiliation with international engineering community and scholarly proceedings",
      "Commitment to ethical engineering practices and continuous professional development",
      "Focus on telecommunications, computer networks, and engineering education"
    ],
    credentialNote: "Membership ID: [IAENG Member ID] · IAENG Society of Computer Science & Telecommunications"
  },
  {
    period: "Engineering Formation",
    title: "Computer & Communications Engineering",
    organizationOrContext: "University Degree Program",
    type: "Education",
    description: "Comprehensive engineering curriculum covering communications theory, telecommunications, digital electronics, network protocols, signals and systems, and computing architecture.",
    details: [
      "Rigorous grounding in communication systems, transmission lines, and digital processing",
      "Laboratory coursework in electronic circuits, microprocessor systems, and signal routing",
      "Engineering project work focused on practical communication infrastructure"
    ]
  },
  {
    period: "Foundational Experience",
    title: "Secondary School Chemistry Teacher & STEM Educator",
    organizationOrContext: "Secondary Education",
    type: "Teaching",
    description: "Commenced professional journey teaching Chemistry, instilling scientific discipline, laboratory safety, and analytical reasoning in secondary school students.",
    details: [
      "Translated complex chemical equations and bonding theories into clear, accessible concepts",
      "Recognized how pedagogical methods determine students' appetite for STEM careers",
      "Ignited lifelong dedication to education reform and human capacity development"
    ]
  },
  {
    period: "Practical Formation",
    title: "Technical Internships & Infrastructure Engagements",
    organizationOrContext: "Network & Systems Engineering Practice",
    type: "Technical Training",
    description: "Field engagements focused on physical network cabling, router and switch configuration, operating systems installation, and enterprise IT troubleshooting.",
    details: [
      "Structured cabling installations (CAT6, patch panels, termination testing)",
      "Configuration of routing and switching devices in testing and production environments",
      "On-site diagnostic response for connectivity downtime and workstation faults"
    ]
  },
  {
    period: "Community Outreach",
    title: "TechEdGuard & Youth STEM Mentorship",
    organizationOrContext: "Community Initiative",
    type: "Outreach",
    description: "Spearheading mentorship sessions and introductory technology demonstrations for secondary school students in Jos and surrounding communities.",
    details: [
      "Organizing volunteer workshops on computer fundamentals and safe internet usage",
      "Advising young students on STEM subject combinations and prospective engineering pathways"
    ]
  }
];

export const WRITINGS: WritingItem[] = [
  {
    id: "price-of-power",
    title: "The Price of Power",
    subtitle: "How Nigeria’s Political Spending Overshadows True Leadership",
    theme: "Governance, Leadership & National Development",
    date: "Public Commentary & Analysis",
    summary: "An incisive examination of the stark divergence between political resource allocation in Nigeria and the genuine developmental priorities required to uplift society—such as education, research infrastructure, and healthcare.",
    topics: ["Political Economy", "Public Accountability", "Education Funding", "Youth Opportunity", "Moral Leadership"],
    excerpt: "True leadership cannot be measured by the scale of a motorcade or the grandeur of political office budgets. When political recurrent expenditure consistently outpaces investments in technical laboratories, schools, and essential infrastructure, a nation inadvertently taxes its own future to fund the vanity of the present.",
    coreArguments: [
      "The asymmetry between bloated bureaucratic maintenance and impoverished public educational institutions.",
      "How capital allocation reflects a nation's true hierarchy of values, rather than campaign speeches.",
      "The urgent necessity for youth and intellectual communities to demand institutional accountability.",
      "A proposed reorientation: viewing leadership as sacrificial stewardship rather than an avenue for personal enrichment."
    ],
    fullAnalysis: [
      "In this essay, Joseph investigates how governance spending patterns in Nigeria perpetuate systemic underdevelopment. While universities and technical colleges struggle with obsolete equipment, intermittent electricity, and underfunded staff, official public budgets often allocate exorbitant sums for political allowances, luxury convoys, and ceremonial functions.",
      "Joseph argues that genuine nation-building requires treating educational and technical infrastructure as national security priorities. He highlights that in the 21st century, the true power of a sovereign nation lies in its cognitive capital—its engineers, technicians, teachers, and innovators—not in the opulence of its political class.",
      "He concludes with a constructive blueprint for civic awareness, urging young engineers and thinkers to participate actively in democratic conversations with evidence-based policy critiques."
    ]
  },
  {
    id: "echoes-of-faith",
    title: "Echoes of Faith, Shadows of Discord",
    subtitle: "Religion, Division and the Search for Peace in Nigeria",
    theme: "Social Cohesion, Faith & Community Reconciliation",
    date: "Societal Inquiry & Reflection",
    summary: "A reflective inquiry into how religious expression—intended as a fountain of moral virtue and brotherhood—has frequently been manipulated to construct sectarian fault lines in Nigeria, and how genuine mutual understanding can restore communal harmony.",
    topics: ["Social Cohesion", "Interfaith Dialogue", "Plateau State Context", "Peacebuilding", "Human Dignity"],
    excerpt: "Faith is meant to elevate the human spirit toward love, justice, and service to our neighbour. Yet, when dogma is weaponized by political convenience or fear of the other, religion casts long shadows of suspicion across communities that once shared food, laughter, and brotherhood.",
    coreArguments: [
      "Distinguishing between genuine religious devotion and the political instrumentalization of religious identity.",
      "The lived experience of Plateau State and the vital imperative of cross-community dialogue and healing.",
      "The role of education and critical thinking in immunizing young citizens against sectarian incitement.",
      "Constructing a shared civic ethos where human dignity precedes creed, tribe, or faction."
    ],
    fullAnalysis: [
      "Drawing from observations in Plateau State and across northern and central Nigeria, this piece explores the delicate interplay between faith traditions and communal coexistence. Joseph notes that the vast majority of ordinary citizens share common vulnerabilities: poverty, insecurity, lack of electricity, and broken schools.",
      "Rather than allowing divisive rhetoric to splinter communities into defensive silos, he calls for intellectual honesty, empathy, and grassroots collaborations that bring youth from diverse backgrounds together around shared constructive projects—such as community technology centres and literacy programs.",
      "Joseph emphasizes that true peace is not merely the absence of violent conflict; it is the presence of mutual justice, empathetic listening, and shared purpose."
    ]
  }
];

export const LEADERSHIP_PILLARS = [
  {
    title: "Practical Education",
    desc: "Rejecting rote memorization in favour of hands-on physical labs where students build, test, disassemble, and understand real mechanisms."
  },
  {
    title: "STEM Foundation",
    desc: "Demystifying physics, chemistry, mathematics, and computing for young Africans early enough to foster genuine lifelong confidence."
  },
  {
    title: "Digital Literacy",
    desc: "Equipping learners not just to consume mobile apps, but to understand underlying protocols, data flows, and computer logic."
  },
  {
    title: "Critical Thinking",
    desc: "Cultivating rigorous inquiry: questioning assumptions, analysing evidence, and solving problems systematically without fear of failure."
  },
  {
    title: "Youth Leadership",
    desc: "Instilling ethical responsibility, self-discipline, and community-mindedness so technical skills serve common societal good."
  },
  {
    title: "Entrepreneurship & Innovation",
    desc: "Encouraging young builders to identify tangible local friction points and construct viable, sustainable technological solutions."
  },
  {
    title: "Technology Access",
    desc: "Advocating for resilient, low-cost infrastructure adaptations so rural and suburban schools are not left behind in the digital age."
  },
  {
    title: "Education Reform",
    desc: "Championing policy and institutional transformation that aligns school curricula with the urgent industrial needs of the 21st century."
  }
];
