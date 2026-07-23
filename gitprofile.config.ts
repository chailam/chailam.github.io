// gitprofile.config.ts

const CONFIG = {
  github: {
    //ADD HERE!!!
    username: 'chailam', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'My Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'chailam/Algorithm-Data-Structure',
          'chailam/Machine-Learning-AI',
          'chailam/Containerized-Image-Object-Detection-Web-Service',
          'chailam/Modern-Image-Storage-on-Cloud',
          'chailam/VicEnergy',
          'chailam/SafeHeart',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Chai Lam',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'chailamloi',
    website: 'https://chailam.github.io/',
    email: 'cailan0301@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/13K_OjXDrFs0b0-9xli_QzpGY-gkv18xp/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  about: {
    description: `
      Backend Software Engineer specializing in C#/.NET, Azure, and AI-driven platform engineering. Founding engineer on a cross-team AI pioneer initiative building organization-wide code intelligence tooling through RAG and MCP (Model Context Protocol) systems. Combines strong backend delivery, production reliability, and disciplined AI-assisted development practices to accelerate engineering outcomes.
      `,
  },
  skills: [
    'C#',
    '.NET',
    'Python',
    'RAG',
    'MCP',
    'Azure AI Search',
    'JavaScript',
    'SQL',
    'Docker',
    'Kubernetes',
    'Azure',
    'CI/CD',
    'Git',
    'Sitecore',
  ],
  experiences: [
    {
      company: 'Sitecore',
      position: 'Software Engineer',
      from: '1 October 2024',
      to: 'Present',
      companyLink: 'https://sitecore.com',
      description: `
      <u><b>Responsibilities:</u></b>
      <br/>
      <ul>
        <li><b>Cross-team AI Pioneer Initiative — Founding Engineer</b> <i>The organization's first internal effort to research, build, and operationalize AI-driven engineering tooling, staffed by one selected engineer per team.</i>
          <ul>
            <li><b>Built and operationalized an organization-wide Retrieval-Augmented Generation (RAG) system on Azure AI Search</b> with <b>tree-sitter-based code indexing</b> across <b>200+ repositories</b> (each covering multiple product versions), designing indexed field coverage, chunk retrieval strategy, and freshness mechanisms (PR-change detection, file deletion tracking, metadata-change indexing) to deliver high-quality, source-code-grounded context for AI-assisted engineering workflows.</li>
            <li><b>Assisted end-to-end delivery of an MCP (Model Context Protocol) server enabling engineers to query the codebase directly from their IDEs</b>, and <b>led the multi-version product support implementation</b> — driven through architecture ADRs, POCs, and FastMCP-based delivery — championing adoption across <b>4 engineering teams</b> through evaluation frameworks, user surveys, and security hardening of the MCP and ingestion pipelines.</li>
          </ul>
        </li>
        <li><b>Led end-to-end delivery of a behavior tracking component</b> integrated with Gainsight (PX/CS SDK), instrumenting 50+ product components in C#/.NET to <b>enable product usage telemetry</b> for previously untracked areas — in collaboration with Product and Architecture — empowering Product Managers with data-driven insights to guide product decisions and roadmap prioritization.</li>
        <li><b>Utilized AI development tools (Cursor, GitHub Copilot, Claude Code) with disciplined workflows</b> — leveraging <b>plan mode</b>, custom <b>agents</b>, <b>MCP servers</b>, and project-level guardrails via <b>AGENTS.md / CLAUDE.md</b>, copilot-instructions.md, and reusable <b>skills</b> — to enforce scope boundaries, maintain code quality, and ensure AI-generated output remained aligned with architectural intent.</li>
        <li><b>Built and maintained CI/CD pipelines</b> using <b>GitHub Actions</b> and <b>TeamCity</b> across multiple projects, including greenfield setups from scratch, and leveraged <b>Docker</b> for containerized builds, testing, and deployments — improving delivery velocity, build reliability, and reproducibility across environments.</li>
        <li><b>Owned production security, hotfix delivery, and release stabilization</b> across multiple product versions — resolving high and critical severity vulnerabilities, <b>conducting targeted code audits on legacy endpoints to proactively remediate risks</b>, delivering time-sensitive customer hotfixes, and providing rapid unblockers for pre-release CI regressions to safeguard customer environments and ensure on-time release delivery.</li>
        <li><b>Resolved critical 51Degrees production issue during a major release</b> by proposing a low-risk architectural workaround — avoiding extensive multi-version code changes and hotfix rework while preserving release timelines and customer stability.</li>
    </ul>
      `,
      logo: '/sitecore_logo1.png',
    },
    {
      company: 'Sitecore',
      position: 'Software Support Engineer',
      from: '30 April 2022',
      to: '30 September 2024',
      companyLink: 'https://sitecore.com',
      description: `
      <u><b>Responsibilities:</u></b>
      <br/>
      <ul>
        <li><b>Delivered L2/L3 technical support</b> to 50+ enterprise customers across EMEA and APAC, troubleshooting complex performance, functional, and integration issues in production Sitecore deployments running on <b>on-premises, Azure, Docker, and Kubernetes.</b></li>
        <li><b>Performed root cause analysis (RCA) and reverse engineering</b> on partner customizations built in <b>C#/.NET</b>, resolving escalated issues beyond front-line developer capability.</li>
        <li><b>Owned SLA compliance and case management</b> across 24x7 support rotations, maintaining <b>0 overdue case data violations</b> and <b>&lt;1% SLA violations.</b></li>
        <li><b>Led customer-facing troubleshooting calls</b> for P1/P2 incidents and Escalation Level 2 cases to accelerate resolution and improve customer satisfaction.</li>
        </ul>
      <br/>
      <u><b>Key Achievements:</u></b>
      <br/>
      <ul>
        <li><b>Recognized as a top contributor within the APAC support department</b>, closing the highest volume of cases in the quarter while consistently maintaining SLA and quality standards.</li>  <li><b>Leveraged deep production-troubleshooting experience</b> and hands-on knowledge of Sitecore internals to <b>transition into a Developer role</b> on the same product line, applying customer-facing insights to strengthen product quality from the engineering side.</li>
      </ul>
    `,
      logo: '/sitecore_logo1.png',
    },
    {
      company: 'Sitecore',
      position: 'Software Engineer Intern',
      from: '1 November 2021',
      to: '30 April 2022',
      companyLink: 'https://sitecore.com',
      description: `
      <b><u>Responsibilities:</u></b>
      <br/>
      <ul>
        <li><b>Built foundational knowledge of Sitecore XM/XP products</b>, including architecture, core modules, and implementation best practices, to support customer troubleshooting workflows.</li>
        <li><b>Shadowed and assisted senior support engineers</b> in troubleshooting and debugging Sitecore customer implementations, contributing to the resolution of performance and functional issues.</li>
        <li><b>Strengthened proficiency in C# and ASP.NET</b> through hands-on investigation of real customer cases and internal training exercises.</li>
      </ul>
      <br/>
      <u><b>Key Achievements:</u></b>
      <br/>
      <ul>
        <li><b>Completed the internship program 2 months ahead of schedule</b> and was converted into a full-time Engineer role on the product line.</li>
      </ul>`,
      logo: '/sitecore_logo1.png',
    },
    {
      company: 'Monash University Malaysia',
      position: 'Software Engineer Intern',
      from: 'July 2018',
      to: 'December 2018',
      companyLink: 'https://www.monash.edu.my/',
      description: `
      <b><u>Responsibilities:</u></b>
      <br/>
      <ul>
        <li><b>Developed and maintained 3 websites and a SharePoint-based student intranet</b> for university Clubs, Societies, and Student Associations, streamlining and automating administrative request workflows.</li>
        <li><b>Collaborated with cross-functional university departments</b> to gather requirements, deliver technical solutions, and conduct testing to ensure website performance and security.</li>
      </ul>`,
      logo: '/monash_university_logo1.png',
    },
  ],
  certifications: [
    {
      name: 'Sitecore 10 .NET Developer Certification',
      body: 'This certification specifically focuses on Sitecore version 10 and is designed for developers who work with .NET technologies to build and maintain websites and applications on the Sitecore platform.',
      year: 'April 2024',
      logo: '/sitecore_logo2.png',
    },
    {
      name: 'Sitecore Personalize Certification',
      body: 'The earner of this badge understands the fundamental processes and recommended practices for real-time behavioral data ingestion, interactive APIs, batch data ingestion, and real-time audiences and segments for Sitecore Personalize.',
      year: 'April 2024',
      link: 'https://www.credly.com/badges/da4a86c6-578b-411e-b152-65eb2fb161ea/linked_in_profile',
      logo: '/sitecore_logo2.png',
    },
    {
      name: 'Sitecore CDP Certification',
      body: 'The earner of this badge understands the fundamental processes and recommended practices for real-time behavioral data ingestion, experiences, experiments, and decisioning for Sitecore CDP.',
      year: 'April 2024',
      link: 'https://www.credly.com/badges/da4a86c6-578b-411e-b152-65eb2fb161ea/linked_in_profile',
      logo: '/sitecore_logo2.png',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
      year: 'September 2022',
      link: 'https://www.credly.com/badges/0b2b0be6-1240-4784-89c9-70c61d6288a9/linked_in_profile',
      logo: '/microsoft_logo1.png',
    },
    {
      name: 'Certified Software Tester (CSTE)',
      body: 'A certification provided by the Quality Assurance Institute (QAI) focusing on comprehensive quality assurance principles and practices in IT. In contrast, the ISTQB® (International Software Testing Qualifications Board) offers a widely recognized, structured certification path specifically for software testing, including Foundation, Advanced, and Expert levels, along with specialized areas like Agile and Mobile Testing. Choosing between CSTE and ISTQB® depends on career goals and specific industry requirements.',
      year: 'November 2017',
      logo: '/istqb_logo1.png',
    },
  ],
  educations: [
    {
      institution: 'Monash University Australia',
      logo: '/monash_university_logo1.png',
      degree: 'Master of Cybersecurity',
      from: '2020',
      to: '2021',
      body: `
      <ul>
        <li>QS World University Ranking: 37th</li>
        <li>GPA: 3.75/4</li>
      </ul>
      <br/>
      <b><u>Activities & Awards</u></b>
      <p><i>Club Achievements</i></p>
        <ul>
          <li>Participated in Melbourne University Inter-University Kendo Competition secured 2nd Place in Team category, achieved 2nd Place in Individual Kyu category and awarded Best Fighting Spirit</li>
          <li>Participated in Ballarat Taikai Kendo Competition</li>
          </ul>
        <br/>
      <p><i>Treasurer, Monash University Kendo Club (2019 - 2021)</i></p>
      <ul>
        <li>Elected committee member for two consecutive terms, responsible for planning, assisting, and organizing events and activities for club members.</li>
        <li>Prepared and formulated financial budgets, ensuring accurate allocation of resources.</li>
        <li>Developed and enforced policies to ensure all treasury activities complied with established guidelines.</li>
        <li>Oversaw budgeting and cost management to maintain financial stability and accountability.</li>
      </ul>
`,
    },
    {
      institution: 'Monash University Australia',
      logo: '/monash_university_logo1.png',
      degree:
        'Bachelor of Software Engineering (Honours) minor in Computer Networks and Security',
      from: '2016',
      to: '2020',
      body: `
        <ul>
          <li>QS World University Ranking: 37th</li>
          <li> Grade: GPA: 3.72/4.0 (First Class Honours) </li>
          <li>CGPA = 3.89/4.0 </li>
        </ul>
        <br/>
        <b><u>Activities & Awards</u></b>
        <p><i>Awards</i></p>
        <ul>
          <li>Received Monash High Achiever Award (HAA) (2016 - 2020) 6 times every consecutive semester with excellent academic result.</li>
          <li>First Class Honours, Minor in Computer Networks and Security</li>
          <li>Team was awarded the 1st Runner up at 3D Conquest Coding Track Hackathon - Country Final. </li>
        </ul>
        <br/>
        <p><i>Club Achievements</i></p>
        <ul>
          <li>Represented Monash University in the Kendo category at Unigames Australia and won Team match 5th Places.</li>
          <li>Achieved the rank of 5th Kyu in Kendo.</li>
          <li>Awarded Fighting Spirit at the Melbourne University Kendo Club (MUKEN) annual competition.</li>
          <li>Actively participated in Kendo competitions across Victoria, Melbourne.</li>
        </ul>
        <br/>
        <p><i>Monash Android Development Workshop</i></p>
        <ul>
          <li>Organized and conducted an Android development workshop aimed at teaching coding skills to non-IT students.</li>
        </ul>
         <br/>
        <p><i>Research</i></p>
        <ul>
          <li>Knowledge Graph for Android Mobile:  Smart Search, Mining and Recommendation</li>
          <li>The research project is to create a Knowledge Graph for Android Mobile applications to help users and researchers to search for their desire apps without pre-downloading all the apps. It also provides some useful information of the application, included API used, permission gained, size, reviews & ratings from Google Play Store, as well as some recommendations of similar apps.</li>
          <li>Tool: React.js, Java, Python, Neo4J</li>
          <li><u><a href="https://drive.google.com/file/d/1Fg2yAl5ivwD8GkQIMs0WYa-cCK4OS5Gb/view" target="_blank">View Research</a></u></li>
        </ul>

      `,
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#a991f7',
      secondary: '#a991f7',
      accent: '#a991f7',
      neutral: '#a991f7',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Special <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >Credits</a> v1.1.2`,

  enablePWA: false,
};

export default CONFIG;
