import React from "react";

const handledownload = (url) => {
  const filename = url.split("/").pop();
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="mt-28 text-white md:px-16 px-4 gap-10 w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-bold">
        About <span className="text-[#ed072a]">Me</span>
      </h1>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 space-x-4 gap-16">
        {/* div left side */}
        <div className="flex flex-col gap-10">
          <h1 className="text-xl font-semibold"> Passionnate Web Developer</h1>
          <p className="text-sm">
            With over 3 yeras of experience in Web development, I specialize in
            creating responsive, accessible, and performant web applications. I
            am committed to delivering high-quality, user-friendly experiences
            that meet the needs of my users.
          </p>
          <p className="text-sm">
            I’m driven by the challenge of designing elegant and efficient
            solutions to complex problems. I continuously explore new
            technologies and best practices to stay ahead in the fast-paced,
            ever-evolving world of web development.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#contact"
              className="bg-[#542d3371] rounded-lg flex items-center 
              text-xl p-2 justify-center hover:scale-95 
              transition-all duration-300 cursor-pointer"
            >
              Let's Talk
            </a>
            <button
              className="bg-[#9b061c] rounded-lg flex items-center text-xl 
              p-2 justify-center hover:scale-105 
              transition-all duration-300 hover:bg-[#573838] cursor-pointer"
              onClick={() => {
                handledownload("/Cv_campus.pdf");
              }}
            >
              Donwload Cv
            </button>
          </div>
        </div>
        {/* div right side */}
        <div className="flex flex-col space-y-3">
          <div className="w-full flex gap-2 p-2 items-center  rounded-sm bg-[#542d3371] ">
            <div className="bg-[#133b6771] -mt-12 rounded-lg flex items-center text-xl p-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevrons-left-right-icon lucide-chevrons-left-right"
              >
                <path d="m9 7-5 5 5 5" />
                <path d="m15 7 5 5-5 5" />
              </svg>
            </div>
            <div className="flex flex-col space-y-3 ">
              <h1 className="font-bold text-xl">Web Developer</h1>
              <p>
                Creating responsive, accessible, and performant web applications
                with modern frameworks
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2 p-2 items-center  rounded-sm bg-[#542d3371] ">
            <div className="bg-[#133b6771] -mt-12 rounded-lg flex items-center text-xl p-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-folder-kanban-icon lucide-folder-kanban"
              >
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                <path d="M8 10v4" />
                <path d="M12 10v2" />
                <path d="M16 10v6" />
              </svg>
            </div>
            <div className="flex flex-col space-y-3 ">
              <h1 className="font-bold text-xl">Front-End Developer</h1>
              <p>
                Building user-focused, scalable web interfaces using clean code
                and modern technologies like React and Next.js.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-2 p-2 items-center  rounded-sm bg-[#542d3371] ">
            <div className="bg-[#133b6771] -mt-12 rounded-lg flex items-center text-xl p-2 justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-brain-icon lucide-brain"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
                <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
                <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
                <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
                <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
                <path d="M6 18a4 4 0 0 1-1.967-.516" />
                <path d="M19.967 17.484A4 4 0 0 1 18 18" />
              </svg>
            </div>
            <div className="flex flex-col space-y-3 ">
              <h1 className="font-bold text-xl">Project Management</h1>
              <p>
                Leading projects from conception to completion, ensuring
                successful delivery of high-quality software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
