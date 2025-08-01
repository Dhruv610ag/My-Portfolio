export const navItems = [
  { name: "About", link: "#about", animate: true },
  { name: "Projects", link: "#projects", animate: true },
  // { name: "Testimonials", link: "#testimonials", animate: false },
  { name: "Contact", link: "#contact", animate: true },
  { name: "Resume", link: "/resume.pdf", animate: false },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Animating intelligence with deep learning.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "RefiNet",
    des: "This project aims to compress a powerful image enhancement model (MSAFN) into a lightweight student model (LightMSAFN) using knowledge distillation.",
    img: "/RefiNet.png",
    iconLists: [
      "/python-icon.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
    ],
    link: "https://github.com/AyushS1304/RefiNet",
  },
  {
    id: 2,
    title: "ShadowCAM - Video Conferencing App",
    des: "A real-time video streaming and background manipulation app powered by FastAPI, OpenCV, YOLOv8, and pyvirtualcam.",
    img: "/shadowcam.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/Dhruv610ag/ShadowCAM.git", // Replace with actual link if deployed
  },
  {
    id: 3,
    title: "Leaf-Detect - Plant Disease Detection",
    des: "This project focuses on detecting plant diseases using deep learning. A Convolutional Neural Network (CNN) model is trained to classify plant leaves into diseased or healthy categories based on image data.",
    img: "/leaf-detect.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/Dhruv610ag/LeafDetect.git", // Replace with Streamlit/Gradio app if available
  },
  {
    id: 4,
    title: "Youtube Note Submarizer",
    des: "YouTube Transcript to Notes is a Streamlit-based application that takes a YouTube video link, extracts the transcript, and generates detailed notes or a summary from the transcript. It uses natural language processing (NLP) and generative AI models to provide summarized content from YouTube videos.",
    img: "/youtube-icon.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/Dhruv610ag/Youtube-Note-Summarizer.git", // Or a deployed Streamlit app
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Machine Learning Trainee - Dell",
    desc:  [
        "Gained hands-on experience in Python for data preprocessing, model development, and evaluation using various Machine Learning and Deep Learning techniques.",
        "Built an American Sign Language Predictor as a key project, achieving notable accuracy through model tuning and real-time prediction.",
        "Applied core ML/DL concepts in a guided industry training setup, focusing on practical application to real-world datasets and structured project workflows."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Intern - Unified Mentor",
    desc: [
      "Developed and deployed multiple end-to-end Machine Learning models including classification, regression, and ensemble methods on real-world datasets.",
      "Worked on impactful projects such as Animal Classification, Liver Cirrhosis Detection, and Forest Cover Prediction, demonstrating practical ML pipeline implementation.",
      "Applied data preprocessing, feature selection, model evaluation, and visualization techniques to optimize performance metrics like accuracy and F1-score.",
      "Collaborated remotely with mentors and team members, received structured training in ML and DL, and adapted quickly to feedback in a professional project-based environment."
    ],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },  
  {
    id: 3,
    title: "Deep Learning Intern - Intel",
    desc: [
      "Designed and implemented ReFineNet, a knowledge distillation-based image enhancement system using deep CNNs, trained on the Vimeo-90K dataset.",
      "Built a Multi-Scale Attentive Fusion Network (MSAFN) as the teacher and a lightweight LightMSAFN student model to achieve real-time inference with high SSIM/PSNR.",
      "Applied advanced training strategies including distillation loss, data augmentation, and multi-metric evaluation (SSIM, PSNR, MOS) for optimal performance.",
      "Completed under Intel Unnati Industrial Training Program, collaborating in a 3-member team with structured research, experimentation, and results-driven development."
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Dhruv610ag",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/610dhruv/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "http://www.linkedin.com/in/dhruv-agarwal-773b32287",
  },
];
