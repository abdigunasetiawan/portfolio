import { useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      name: "Forum Programmer Kaputama",
      description: "Forum Programmer Kaputama is a landing page created for a campus organization, designed to showcase its vision, activities, and community initiatives. This project enhances front-end development skills by transforming complex UI/UX designs into a fully functional website using Tailwind CSS.",
      stacks: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
      image: "../images/projects/forum-programmer-kaputama.png",
      link: {
        github: "https://github.com/abdigunasetiawan/fpk",
        demo: "https://forumprogrammerkaputama.vercel.app/",
      },
    },
    {
      name: "Dressly",
      // description: "Dressly is a web project designed to sharpen front-end development skills, particularly in transforming UI/UX designs into fully functional websites. This project focuses on mastering Tailwind CSS for efficient styling and handling complex layouts to create a seamless user experience.",
      description: "Dressly is a web project designed to enhance front-end development skills by transforming UI/UX designs into fully functional and interactive websites. This project focuses on mastering Tailwind CSS for efficient styling and responsive layouts while integrating smooth animations to create a dynamic and engaging user experience.",
      stacks: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
      image: "../images/projects/dressly.png",
      link: {
        github: "https://github.com/abdigunasetiawan/dressly",
        demo: "https://abdigunasetiawan.github.io/dressly/",
      },
    },
    {
      name: "Storx",
      description: "Storx is a web application created to improve my JavaScript skills, specifically in fetching data and implementing Single Page Applications (SPAs) using standard JavaScript. The project implements a modular approach, which makes the code more structured and easy to maintain.",
      stacks: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
      image: "../images/projects/storx.png",
      link: {
        github: "https://github.com/abdigunasetiawan/storx",
        demo: "https://storx-abdi.vercel.app/",
      },
    },
    {
      name: "Storx React",
      description: "Storx React is an enhanced version of Storx, built using React.js to deliver a more dynamic and efficient user experience. This project implements proper SPA (Single Page Application) architecture with React Router, ensuring seamless navigation between pages without reloading.",
      stacks: ["HTML", "CSS", "Javascript", "Tailwind CSS", "React"],
      image: "../images/projects/storx-react.png",
      link: {
        github: "https://github.com/abdigunasetiawan/storx-react",
        // demo: "https://dressly.vercel.app/",
      },
    },
    {
      name: "Skilline",
      description: "Skilline is a practice project focused on converting a design into a fully functional webpage using Tailwind CSS. This project enhances skills in UI development, responsive design, and layout structuring. By leveraging Tailwind CSS, it ensures clean, maintainable, and efficient styling while achieving pixel-perfect design accuracy.",
      stacks: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
      image: "../images/projects/skilline.png",
      link: {
        github: "https://github.com/abdigunasetiawan/online-learning-landing-page",
        demo: "https://online-learning-landing-page-abdi.vercel.app/",
      },
    },
    {
      name: "Design Agency",
      description: "Design Agency is a practice project focused on converting a design into a sleek and professional landing page using pure CSS. This project enhances skills in UI structuring, layout techniques, and responsive design, ensuring a smooth and visually appealing user experience.",
      stacks: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
      image: "../images/projects/design-agency.png",
      link: {
        github: "https://github.com/abdigunasetiawan/design-agency-landing-page",
        demo: "https://design-agency-landing-page.vercel.app/",
      },
    },
    {
      name: "Jadoo",
      description: "Jadoo is a practice project focused on transforming a design into a fully responsive landing page using pure CSS. This project improves skills in layout structuring, typography, and responsive design, ensuring a seamless and visually engaging user experience.",
      stacks: ["HTML", "CSS", "Javascript", "Tailwind CSS"],
      image: "../images/projects/jadoo.png",
      link: {
        github: "https://github.com/abdigunasetiawan/jadoo-travel-agency",
        demo: "https://jadoo-travel-agency-abdi.vercel.app/",
      },
    },
  ];

  const handleCardDescriptionHeight = () => {
    const cardDescriptions = [...document.querySelectorAll(".card-description")];
    const cardStacks = [...document.querySelectorAll(".card-stacks")];

    // reset description height on resized window
    if (window.innerWidth < 768) {
      cardDescriptions.forEach((card) => {
        card.style.height = `auto`;
      });
      return;
    }

    // reset description height
    cardDescriptions.forEach((card) => {
      card.style.height = `auto`;
    });

    // reset stack height
    cardStacks.forEach((stack) => {
      stack.style.height = `auto`;
    });

    // get description and stack height
    const descriptionHeight = cardDescriptions.map((card) => card.clientHeight);
    const stacksHeight = cardStacks.map((stack) => stack.clientHeight);

    // get highest height
    const descriptionHighest = Math.max(...descriptionHeight);
    const stackHighest = Math.max(...stacksHeight);

    // set description and stack height to highest
    cardDescriptions.forEach((card) => {
      card.style.height = `${descriptionHighest}px`;
    });
    cardStacks.forEach((stack) => {
      stack.style.height = `${stackHighest}px`;
    });
  };

  useEffect(() => {
    handleCardDescriptionHeight();
    window.addEventListener("load", handleCardDescriptionHeight);
    window.addEventListener("resize", handleCardDescriptionHeight);

    return () => {
      window.removeEventListener("load", handleCardDescriptionHeight);
      window.removeEventListener("resize", handleCardDescriptionHeight);
    };
  }, []);

  return (
    <section id="projects" className="container-center-padding py-16">
      <h2 className="text-center text-4xl font-extrabold">Projects</h2>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="card flex flex-col overflow-hidden rounded-lg border">
            <a href={project.link.demo || "#"} target="_blank" className="image block aspect-video flex-1">
              <img className="h-full w-full object-cover" src={project.image} alt="" />
            </a>
            <div className="flex-2 flex flex-col gap-y-3 p-4">
              <div className="body">
                <h3 className="text-lg font-bold text-blax-950">{project.name}</h3>
                <p className="card-description text-blax-700">{project.description}</p>
              </div>
              <div className="mt-auto">
                <div className="card-stacks flex flex-wrap items-end gap-2 md:h-16">
                  {project.stacks.map((stack) => (
                    <span key={stack} className="rounded-md bg-blax-100 p-1 text-sm text-blax-950">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="action mt-4 flex items-center gap-x-3">
                  <a className="flex items-center gap-x-1" href={project.link.github || "https://github.com/abdigunasetiawan"} target="_blank">
                    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="github">
                        <g id="github_2">
                          <path id="Vector" d="M50 1.00049C22.3892 1.00049 -0.000244141 23.386 -0.000244141 51.0007C-0.000244141 73.0924 14.3263 91.8345 34.1931 98.4461C36.6918 98.9088 37.6094 97.3614 37.6094 96.0406C37.6094 94.8485 37.5627 90.9095 37.5416 86.7316C23.6311 89.7562 20.6959 80.8322 20.6959 80.8322C18.4215 75.0528 15.1443 73.5163 15.1443 73.5163C10.608 70.4129 15.4863 70.4765 15.4863 70.4765C20.5073 70.8294 23.1511 75.6292 23.1511 75.6292C27.6105 83.2733 34.8479 81.0631 37.7012 79.7859C38.1498 76.5539 39.4458 74.3485 40.8756 73.0999C29.7701 71.8352 18.0952 67.5479 18.0952 48.3894C18.0952 42.9308 20.0485 38.4701 23.2472 34.9687C22.728 33.7091 21.0167 28.6238 23.7315 21.7366C23.7315 21.7366 27.9301 20.3927 37.4851 26.8619C41.4732 25.7537 45.7507 25.1985 50 25.1796C54.2492 25.1985 58.5298 25.7537 62.5258 26.8619C72.0694 20.3927 76.2622 21.7366 76.2622 21.7366C78.9836 28.6238 77.2715 33.7091 76.7523 34.9687C79.9581 38.4701 81.898 42.9304 81.898 48.3894C81.898 67.5934 70.2012 71.8223 59.0675 73.0599C60.8607 74.6116 62.4587 77.6546 62.4587 82.3192C62.4587 89.0091 62.4007 94.3936 62.4007 96.0406C62.4007 97.3712 63.3007 98.9304 65.8355 98.4394C85.6912 91.8204 99.9998 73.085 99.9998 51.0007C99.9998 23.386 77.6135 1.00049 50 1.00049Z" fill="#161614" />
                          <path id="Vector_2" d="M18.7264 72.227C18.6166 72.4752 18.2252 72.5498 17.8696 72.3796C17.5068 72.2164 17.3029 71.8776 17.4206 71.6282C17.5284 71.3725 17.9198 71.3012 18.2817 71.4729C18.6452 71.6357 18.8523 71.9776 18.7264 72.227ZM21.1859 74.4215C20.9475 74.6426 20.4812 74.5399 20.1648 74.1905C19.8377 73.8419 19.7766 73.376 20.0185 73.1513C20.2644 72.9305 20.7165 73.0337 21.0444 73.3827C21.3714 73.7352 21.4349 74.1983 21.1855 74.4218L21.1859 74.4215ZM22.8733 77.2292C22.5667 77.4421 22.0655 77.2425 21.7561 76.7978C21.4498 76.3535 21.4498 75.8202 21.7628 75.6065C22.0733 75.3928 22.5667 75.5849 22.8804 76.0261C23.1862 76.4782 23.1862 77.0116 22.8729 77.2296L22.8733 77.2292ZM25.7266 80.4812C25.4524 80.7832 24.8689 80.7024 24.4415 80.2899C24.0047 79.8868 23.8827 79.3146 24.1576 79.0123C24.4348 78.7095 25.0219 78.7946 25.4524 79.2036C25.8865 79.606 26.0191 80.1824 25.7269 80.4812H25.7266ZM29.4143 81.5792C29.2939 81.9706 28.7316 82.1486 28.1653 81.9824C27.5998 81.811 27.2296 81.3522 27.3438 80.9565C27.4614 80.5624 28.0261 80.3769 28.5967 80.555C29.1613 80.7255 29.5323 81.1808 29.4147 81.5792H29.4143ZM33.6118 82.0447C33.6259 82.4573 33.1455 82.7992 32.551 82.8067C31.953 82.8196 31.4695 82.4859 31.4632 82.0804C31.4632 81.6639 31.9326 81.3251 32.5302 81.3153C33.1247 81.3036 33.6118 81.6349 33.6118 82.0447ZM37.7348 81.8867C37.8061 82.289 37.3928 82.7023 36.8027 82.8121C36.2223 82.918 35.685 82.6698 35.6109 82.271C35.5388 81.8584 35.9599 81.4455 36.5391 81.3385C37.1305 81.2357 37.6595 81.4777 37.7348 81.8867Z" fill="#161614" />
                        </g>
                      </g>
                    </svg>

                    <span className="text-sm">View On Github</span>
                  </a>
                  <a className="flex items-center gap-x-1" href={project.link.demo || "#"} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                      <path d="M11 13l9 -9" />
                      <path d="M15 4h5v5" />
                    </svg>
                    <span className="text-sm">View Live</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
