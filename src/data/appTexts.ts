import { TextsType } from "../types/languageTypes";
import {
  catProject7,
  engProject1,
  engProject2,
  engProject3,
  engProject4,
  engProject5,
  engProject6,
  engProject7,
  espProject7,
} from "./projectsData";
import {
  espProject1,
  espProject2,
  espProject3,
  espProject4,
  espProject5,
  espProject6,
} from "./projectsData";
import {
  catProject1,
  catProject2,
  catProject3,
  catProject4,
  catProject5,
  catProject6,
} from "./projectsData";
import {
  engTestimonial1,
  engTestimonial2,
  engTestimonial3,
} from "./testimonialsData";
import {
  espTestimonial1,
  espTestimonial2,
  espTestimonial3,
} from "./testimonialsData";
import {
  catTestimonial1,
  catTestimonial2,
  catTestimonial3,
} from "./testimonialsData";

export const engTexts: TextsType = {
  navbarMenu: {
    home: "Home",
    skills: "Skills",
    projects: "Projects",
    testimonials: "Testimonials",
    contact: "Contact",
    login: "Login",
    // logout: "Logout",
  },
  user: {
    name: "Name",
    firstName: "First Name",
    email: "Email",
    password: "Password",
  },
  formErrors: {
    requiredField: "This field is required",
  },
  landing: {
    welcome:
      "Welcome to my project portfolio! Explore my front-end and full-stack projects. Each piece showcases my creative design and technical skills. From captivating user interfaces to robust back-end systems, my work reflects a passion for innovation. Click on any project to learn more about the technologies and challenges involved.",
    heading:
      "Behind every project lies a story of challenges overcome and new technologies mastered. Click on any project to dive deeper, discover the technologies used, and the creative problem-solving that went into it.",
    connectText: "Let's connect and discuss how we can collaborate!",
    contactBtn: "Let's talk",
  },
  mySkills: {
    titlePart1: "sk",
    titlePart2: "ills",
    heading:
      "I have developed a proficiency in web development, particularly in React-based full-stack applications. My experience includes creating interactive and efficient web solutions, demonstrating my versatility in both front-end and server-side technologies.",
    skill1Title: "FullStack Development",
    skill1Desc:
      "I possess a strong grasp of both front-end and back-end web technologies. On the front-end, I am proficient in HTML, CSS, and JavaScript, with experience in modern libraries and frameworks like React and Nex.js. On the back-end, I excel in technologies such as Node.js, Express.js, or similar server-side languages and frameworks. My ability to work across the entire web development stack enables me to build complete and functional web applications.",
    skill2Title: "Database Management",
    skill2Desc:
      "I have solid skills in database management, including both SQL and NoSQL databases. I can design efficient database structures, optimize queries, and ensure data security. My expertise in handling data allows applications to store, retrieve, and manipulate information effectively, contributing to the overall performance and reliability of web projects.",
    skill3Title: "Version Control and Collaboration",
    skill3Desc:
      "Collaboration and teamwork are crucial aspects of my work. I am well-versed in version control systems like Git and platforms like GitHub, which enable seamless collaboration with team members. These tools help me track changes, resolve conflicts, and maintain code quality. My proficiency in version control fosters effective communication and efficient project workflows, making me a valuable contributor to collaborative development efforts.",
  },
  projects: {
    titlePart1: "PRO",
    titlePart2: "JECTS",
    heading:
      "Below, you'll find a curated selection of projects that highlight my skills, experience, and passion for solving real-world problems with technology. Each project is briefly described and includes links to code repositories and live demos. Feel free to explore and see how I approach different challenges.",
    projectsArr: [
      engProject1,
      engProject2,
      engProject3,
      engProject4,
      engProject5,
      engProject6,
      engProject7,
    ],
  },
  testimonials: {
    titlePart1: "TEST",
    titlePart2: "IMONIALS",
    heading:
      "Colleague Testimonials: What Those Who've Worked with Me Have to Say. Explore the feedback and insights shared by individuals who've collaborated with me. Their testimonials reflect our teamwork, the impact of our contributions and commitment to excellence in every collaboration.",
    testimonialArr: [engTestimonial1, engTestimonial2, engTestimonial3],
  },
  contact: {
    titlePart1: "LET'S",
    titlePart2: "BEGIN",
    formPlaceholderName: "Your name",
    formPlaceholderEmail: "Your email",
    formPlaceholderMsg: "Message to send",
    semdMsgBtn: "Send message",
  },
  footer: {
    madeWithText: "Made with",
    inText: "in",
    cityText: "Barcelona",
  },
};

export const espTexts: TextsType = {
  navbarMenu: {
    home: "Inicio",
    skills: "Habilidades",
    projects: "Proyectos",
    testimonials: "Testimonios",
    contact: "Contacto",
    login: "Iniciar sesión",
    // logout: "Finalizar sesión",
  },
  user: {
    name: "Nombre",
    firstName: "Primer Apellido",
    email: "Email",
    password: "Contraseña",
  },
  formErrors: {
    requiredField: "Este campo es requerido",
  },
  landing: {
    welcome:
      "¡Bienvenido/a a mi portafolio de proyectos! Explora mis proyectos de front-end y full-stack. Cada pieza muestra mi habilidad creativa en diseño y mis habilidades técnicas. Desde interfaces de usuario cautivadoras hasta sistemas sólidos en el back-end, mi trabajo refleja una pasión por la innovación. Haz clic en cualquier proyecto para conocer más sobre las tecnologías y desafíos involucrados.",
    heading:
      "Detrás de cada proyecto se encuentra una historia de desafíos superados y nuevas tecnologías dominadas. Haz clic en cualquier proyecto para adentrarte más, descubrir las tecnologías utilizadas y la resolución creativa de problemas que lo acompañó.",
    connectText: "¡Conectemos y hablemos sobre cómo podemos colaborar!",
    contactBtn: "Hablemos",
  },
  mySkills: {
    titlePart1: "habil",
    titlePart2: "idades",
    heading:
      "He desarrollado habilidades sólidas en desarrollo web, especialmente en aplicaciones full-stack basadas en React. Mi experiencia incluye la creación de soluciones web interactivas y eficientes, lo que demuestra mi versatilidad en tecnologías tanto de front-end como de servidor.",
    skill1Title: "Desarrollo FullStack",
    skill1Desc:
      "Poseo un sólido dominio de las tecnologías web tanto en el front-end como en el back-end. En el front-end, tengo habilidades en HTML, CSS y JavaScript, con experiencia en librerías y frameworks modernos como React y Next.js. En el back-end, sobresalgo en tecnologías como Node.js, Express.js o lenguajes y frameworks de servidor similares. Mi capacidad para trabajar en todo el stack de desarrollo web me permite construir aplicaciones web completas y funcionales.",
    skill2Title: "Gestion Bases de Datos",
    skill2Desc:
      "Tengo sólidas habilidades en la gestión de bases de datos, incluyendo bases de datos SQL y NoSQL. Puedo diseñar estructuras de bases de datos eficientes, optimizar consultas y garantizar la seguridad de los datos. Mi experiencia en el manejo de datos permite que las aplicaciones almacenen, recuperen y manipulen información de manera efectiva, contribuyendo al rendimiento y la confiabilidad general de proyectos web.",
    skill3Title: "Control de Versiones y Colaboración",
    skill3Desc:
      "La colaboración y el trabajo en equipo son aspectos cruciales de mi trabajo. Estoy familiarizado con sistemas de control de versiones como Git y plataformas como GitHub, que permiten una colaboración sin problemas con otros miembros del equipo. Estas herramientas me ayudan a hacer seguimiento de cambios, resolver conflictos y mantener la calidad del código. Mi competencia en el control de versiones fomenta la comunicación efectiva y flujos de trabajo eficientes en proyectos de desarrollo colaborativo, convirtiéndome en un valioso colaborador en desarrollos en equipo.",
  },
  projects: {
    titlePart1: "PRO",
    titlePart2: "YECTOS",
    heading:
      "A continuación, encontrarás una selección cuidadosamente escogida de proyectos que resaltan mis habilidades, experiencia y pasión por resolver problemas del mundo real con tecnología. Cada proyecto se describe brevemente e incluye enlaces a repositorios de código y demostraciones en vivo. Siéntete libre de explorar y ver cómo abordo diferentes desafíos.",
    projectsArr: [
      espProject1,
      espProject2,
      espProject3,
      espProject4,
      espProject5,
      espProject6,
      espProject7,
    ],
  },
  testimonials: {
    titlePart1: "TEST",
    titlePart2: "IMONIOS",
    heading:
      "Testimonios de Colegas: Lo Que Dicen Aquellos que Han Trabajado Conmigo. Explora los comentarios e ideas compartidos por personas que han colaborado conmigo. Sus testimonios reflejan nuestro trabajo en equipo, el impacto de nuestras contribuciones y el compromiso con la excelencia en cada colaboración.",
    testimonialArr: [espTestimonial1, espTestimonial2, espTestimonial3],
  },
  contact: {
    titlePart1: "COM",
    titlePart2: "ENCEMOS",
    formPlaceholderName: "Tu nombre",
    formPlaceholderEmail: "Tu email",
    formPlaceholderMsg: "Mensaje a enviar",
    semdMsgBtn: "Enviar mensaje",
  },
  footer: {
    madeWithText: "Hecho con",
    inText: "en",
    cityText: "Barcelona",
  },
};

export const catTexts: TextsType = {
  navbarMenu: {
    home: "Inici",
    skills: "Habilitats",
    projects: "Projectes",
    testimonials: "Testimonis",
    contact: "Contacte",
    login: "Iniciar sessió",
    // logout: "Finalizar sessió",
  },
  user: {
    name: "Nom",
    firstName: "Primer Cognom",
    email: "Correu electrònic",
    password: "Contrasenya",
  },
  formErrors: {
    requiredField: "Aquest camp és obligatori",
  },
  landing: {
    welcome:
      "Benvingut/da al meu portfoli de projectes! Explora els meus projectes de front-end i full-stack. Cada peça mostra la meva habilitat creativa en disseny i les meves habilitats tècniques. Des d'interfícies d'usuari captivadores fins a sistemes sòlids a la part del servidor, el meu treball reflecteix una passió per la innovació. Fes clic en qualsevol projecte per conèixer més sobre les tecnologies i els reptes involucrats.",
    heading:
      "Darrere de cada projecte es troba una història de reptes superats i noves tecnologies dominades. Fes clic en qualsevol projecte per endinsar-te més, descobrir les tecnologies utilitzades i la resolució creativa de problemes que l'ha acompanyat.",
    connectText: "Connectem i parlem de com podem col·laborar!",
    contactBtn: "Parlem",
  },
  mySkills: {
    titlePart1: "habil",
    titlePart2: "itats",
    heading:
      "He desenvolupat habilitats sòlides en desenvolupament web, especialment en aplicacions full-stack basades en React. La meva experiència inclou la creació de solucions web interactives i eficients, demostrant la meva versatilitat en tecnologies tant de front-end com de servidor.",
    skill1Title: "Desenvolupament FullStack",
    skill1Desc:
      "Posseeixo un sòlid domini de les tecnologies web tant en el front-end com a la part del servidor. Al front-end, tinc habilitats en HTML, CSS i JavaScript, amb experiència en llibreries i frameworks moderns com React i Next.js. A la part del servidor, sobresurto en tecnologies com Node.js, Express.js o llenguatges i frameworks similars. La meva capacitat per treballar en tot el stack de desenvolupament web em permet construir aplicacions web completes i funcionals.",
    skill2Title: "Gestió de Bases de Dades",
    skill2Desc:
      "Tinc habilitats sòlides en la gestió de bases de dades, incloent bases de dades SQL i NoSQL. Puc dissenyar estructures de bases de dades eficients, optimitzar consultes i garantir la seguretat de les dades. La meva experiència en el tractament de dades permet que les aplicacions emmagatzemin, recuperin i manipulin la informació de manera efectiva, contribuint al rendiment i la fiabilitat general dels projectes web.",
    skill3Title: "Control de Versions i Col·laboració",
    skill3Desc:
      "La col·laboració i el treball en equip són aspectes crucials del meu treball. Estic familiaritzat/ada amb sistemes de control de versions com Git i plataformes com GitHub, que permeten una col·laboració sense problemes amb altres membres de l'equip. Aquestes eines em ajuden a fer seguiment de canvis, resoldre conflictes i mantenir la qualitat del codi. La meva competència en el control de versions fomenta la comunicació efectiva i fluxos de treball eficients en projectes de desenvolupament col·laboratiu, convertint-me en un valuós col·laborador en desenvolupaments en equip.",
  },
  projects: {
    titlePart1: "PRO",
    titlePart2: "JECTES",
    heading:
      "A continuació, trobaràs una selecció cuidadosament escollida de projectes que destaquen les meves habilitats, experiència i passió per resoldre problemes del món real amb tecnologia. Cada projecte es descriu breument i inclou enllaços a repositoris de codi i demostracions en directe. Si et sents amb ganes, explora i mira com abordo diferents reptes.",
    projectsArr: [
      catProject1,
      catProject2,
      catProject3,
      catProject4,
      catProject5,
      catProject6,
      catProject7,
    ],
  },
  testimonials: {
    titlePart1: "TEST",
    titlePart2: "IMONIS",
    heading:
      "Testimonis de Col·legues: Què Duen Aquells que Han Treballat Amb Mi. Explora els comentaris i idees compartits per persones que han col·laborat amb mi. Els seus testimonis reflecteixen la nostra feina en equip, l'impacte de les nostres contribucions i el compromís amb l'excel·lència en cada col·laboració.",
    testimonialArr: [catTestimonial1, catTestimonial2, catTestimonial3],
  },
  contact: {
    titlePart1: "CONTAC",
    titlePart2: "TEMOS",
    formPlaceholderName: "El teu nom",
    formPlaceholderEmail: "El teu correu electrònic",
    formPlaceholderMsg: "Missatge a enviar",
    semdMsgBtn: "Envia el missatge",
  },
  footer: {
    madeWithText: "Fet amb",
    inText: "a",
    cityText: "Barcelona",
  },
};
