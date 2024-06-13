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
    fileUrl: 'https://www.google.com', // Empty fileUrl will hide the `Download Resume` button.
  },
  about: {
    description: `
      A dedicated Software Engineer at Sitecore with a robust background in cybersecurity and software engineering.
      I hold a Master's degree in Cybersecurity and First Class Honours in a Bachelor of Software Engineering with
      a Minor in Computer Networks and Security from Monash University.
      <br/>
      <br/>
      Passionate about software development, I am constantly seeking opportunities to grow and learn in the field.
      Known for being a team player, I thrive in collaborative environments and enjoy working with others to achieve
      common goals.
      `,
  },
  skills: [
    'Sitecore',
    'Python',
    'C#',
    'ASP.NET',
    'JavaScript',
    'SQL',
    'Docker',
    'Kubernetes',
    'Azure',
    'Java',
    'Git',
    'Angular',
  ],
  experiences: [
    {
      company: 'Sitecore',
      position: 'Software Support Engineer',
      from: '30 April 2022',
      to: 'Present',
      companyLink: 'https://sitecore.com',
      description: `
      <u><b>Responsibilities:</u></b>
      <br/>
    <ul>
        <li>- Assisted the Product Support Services Team in providing best practices guidance and troubleshooting complex customizations for Sitecore’s implementation partners and customers.</li>
        <li>- Engaged in reverse engineering tasks to analyze and resolve technical issues within partner implementations, significantly contributing to the team’s development and efficiency.</li>
        <li>- Collaborated with implementation partners to understand customer requirements and map them to best practice implementation approaches, ensuring optimal utilization of Sitecore’s products.</li>
        <li>- Troubleshot and resolved complex performance and functional issues in Sitecore implementations, often addressing problems that developers were unable to solve independently.</li>
        <li>- Documented support cases, solutions, and best practices in the company’s knowledge base to enhance the efficiency and effectiveness of the support team.</li>
        <li>- Participated in team meetings and training sessions to stay updated on product features, support processes, and industry best practices.</li>
    </ul>
    <br/>
    <u><b>Key Achievements:</u></b>
    <br/>
   <ul>
        <li>- Resolved a significant number of support tickets, contributing to the overall efficiency of the team.</li>
        <li>- Assisted in the development of a troubleshooting guide for common issues, helping reduce resolution times.</li>
        <li>- Participated in beta testing new software releases, providing feedback that helped improve product quality.</li>
        <li>- Supported the ramp-up process of the support team, enhancing its capacity and capability.</li>
    </ul>
    `,
      logo: './src/assets/sitecore_logo1.png',
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
        <li>- Learned and understood Sitecore products, including architecture and best practices for implementation.</li>
        <li>- Collaborate with senior engineers in troubleshooting and debugging Sitecore implementations to resolve performance and functional issues.</li>
        <li>- Gained proficiency in ASP.NET and C# through hands-on projects and tasks.</li>
        <li>- Attend training sessions and workshops to stay updated on the latest features and updates in Sitecore products.</li>
    </ul>`,
      logo: './src/assets/sitecore_logo1.png',
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
        <li>- Participated in the software development projects for IT Services, focusing on managing and developing websites and systems for the university.</li>
        <li>- Developed and maintained three websites operated under the subdomain of Monash University Malaysia to provide services for all Clubs and Societies as well as Student Associations.</li>
        <li>- Utilized WordPress CMS, PHP, JavaScript, HTML, and CSS to build and enhance the functionality of the university’s websites.</li>
        <li>- Established a student intranet to streamline and automate administrative requests using the SharePoint platform.</li>
        <li>- Collaborated with various university departments to understand their requirements and implement effective technical solutions.</li>
        <li>- Conducted regular testing and maintenance of the websites to ensure optimal performance and security.</li>
    </ul>
<br/>
    <b><u>Key Achievements:</u></b>
    <br/>
    <ul>
        <li>- Successfully developed and launched three fully functional websites, improving the accessibility and service delivery for student clubs, societies, and associations.</li>
        <li>- Enhanced the efficiency of administrative processes by automating request handling through the newly established student intranet on SharePoint.</li>
        <li>- Contributed to the improvement of the university’s digital presence by integrating modern web technologies and best practices.</li>
    </ul>`,
      logo: './src/assets/monash_university_logo1.png',
    },
  ],
  certifications: [
    {
      name: 'Sitecore 10 .NET Developer Certification',
      body: 'This certification specifically focuses on Sitecore version 10 and is designed for developers who work with .NET technologies to build and maintain websites and applications on the Sitecore platform.',
      year: 'April 2024',
      logo: './src/assets/sitecore_logo2.png',
    },
    {
      name: 'Sitecore Personalize Certification',
      body: 'The earner of this badge understands the fundamental processes and recommended practices for real-time behavioral data ingestion, interactive APIs, batch data ingestion, and real-time audiences and segments for Sitecore Personalize.',
      year: 'April 2024',
      link: 'https://www.credly.com/badges/da4a86c6-578b-411e-b152-65eb2fb161ea/linked_in_profile',
      logo: './src/assets/sitecore_logo2.png',
    },
    {
      name: 'Sitecore CDP Certification',
      body: 'The earner of this badge understands the fundamental processes and recommended practices for real-time behavioral data ingestion, experiences, experiments, and decisioning for Sitecore CDP.',
      year: 'April 2024',
      link: 'https://www.credly.com/badges/da4a86c6-578b-411e-b152-65eb2fb161ea/linked_in_profile',
      logo: './src/assets/sitecore_logo2.png',
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      body: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
      year: 'September 2022',
      link: 'https://www.credly.com/badges/0b2b0be6-1240-4784-89c9-70c61d6288a9/linked_in_profile',
      logo: './src/assets/microsoft_logo1.png',
    },
    {
      name: 'Certified Software Tester (CSTE)',
      body: 'A certification provided by the Quality Assurance Institute (QAI) focusing on comprehensive quality assurance principles and practices in IT. In contrast, the ISTQB® (International Software Testing Qualifications Board) offers a widely recognized, structured certification path specifically for software testing, including Foundation, Advanced, and Expert levels, along with specialized areas like Agile and Mobile Testing. Choosing between CSTE and ISTQB® depends on career goals and specific industry requirements.',
      year: 'November 2017',
      logo: './src/assets/istqb_logo1.png',
    },
  ],
  educations: [
    {
      institution: 'Monash University Australia',
      logo: './src/assets/monash_university_logo1.png',
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
          <li>- Participated in Melbourne University Inter-University Kendo Competition secured 2nd Place in Team category, achieved 2nd Place in Individual Kyu category and awarded Best Fighting Spirit</li>
          <li>- Participated in Ballarat Taikai Kendo Competition</li>
          </ul>
        <br/>
      <p><i>Treasurer, Monash University Kendo Club (2019 - 2021)</i></p>
      <ul>
        <li>- Elected committee member for two consecutive terms, responsible for planning, assisting, and organizing events and activities for club members.</li>
        <li>- Prepared and formulated financial budgets, ensuring accurate allocation of resources.</li>
        <li>- Developed and enforced policies to ensure all treasury activities complied with established guidelines.</li>
        <li>- Oversaw budgeting and cost management to maintain financial stability and accountability.</li>
      </ul>
`,
    },
    {
      institution: 'Monash University Australia',
      logo: './src/assets/monash_university_logo1.png',
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
          <li>- Received Monash High Achiever Award (HAA) (2016 - 2020) 6 times every consecutive semester with excellent academic result.</li>
          <li>- First Class Honours, Minor in Computer Networks and Security</li>
          <li> - Team was awarded the 1st Runner up at 3D Conquest Coding Track Hackathon - Country Final. </li>
        </ul>
        <br/>
        <p><i>Club Achievements</i></p>
        <ul>
          <li>- Represented Monash University in the Kendo category at Unigames Australia and won Team match 5th Places.</li>
          <li>- Achieved the rank of 5th Kyu in Kendo.</li>
          <li>- Awarded Fighting Spirit at the Melbourne University Kendo Club (MUKEN) annual competition.</li>
          <li>- Actively participated in Kendo competitions across Victoria, Melbourne.</li>
        </ul>
        <br/>
        <p><i>Monash Android Development Workshop</i></p>
        <ul>
          <li>- Organized and conducted an Android development workshop aimed at teaching coding skills to non-IT students.</li>
        </ul>
         <br/>
        <p><i>Research</i></p>
        <ul>
          <li>- Knowledge Graph for Android Mobile:  Smart Search, Mining and Recommendation</li>
          <li>- The research project is to create a Knowledge Graph for Android Mobile applications to help users and researchers to search for their desire apps without pre-downloading all the apps. It also provides some useful information of the application, included API used, permission gained, size, reviews & ratings from Google Play Store, as well as some recommendations of similar apps.</li>
          <li>- Tool: React.js, Java, Python, Neo4J</li>
          <li> - <u><a href="https://drive.google.com/file/d/1Fg2yAl5ivwD8GkQIMs0WYa-cCK4OS5Gb/view" target="_blank">View Research</a></u></li>
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
    >Credits</a>`,

  enablePWA: false,
};

export default CONFIG;
