import React from "react";
const About = () => {
  const info = [
    { text: "Years experience", count: "02" },
    { text: "Completed Projects", count: "7" },
    { text: "Companies Work", count: "1" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I'm Kemal, currently enrolled in the Coding Academy at African
                to Silicon Valley (A2SV), renowned for its 70% acceptance rate
                at Google for Software Engineer positions in 2022. My journey at
                A2SV has significantly honed my problem-solving and algorithmic
                skills through the successful completion of over 600 problems on
                platforms like LeetCode, Codeforces, and HackerRank. In
                addition, I'm pursuing a Bachelor of Science at Addis Ababa
                Science and Technology University, where I'm building a strong
                foundation in engineering. I'm enthusiastic about contributing
                to the tech industry, especially in the field of machine
                learning. I'm actively seeking job and internship opportunities
                to apply and further develop my skills.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href="Kemal_Siraj_Resume.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
  
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
