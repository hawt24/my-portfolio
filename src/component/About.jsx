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
Hello, I'm Kemal Siraj, an electromechanical engineering student at Addis Ababa Science and Technology University (AASTU)
. Additionally, I am an active member of a2sv, an organization that has successfully placed over 50 students in full-time and
 internship roles at renowned tech companies, such as Google, Amazon, LinkedIn, Palantir, Databricks, Bloomberg, and more.
 My journey into programming started in my third year of electromechanical engineering when I began studying Python. 
This early exposure marked my shift towards software engineering. As part of a2sv, I've solved over 600 data structure and algorithm 
questions using Python on platforms like LeetCode and Codeforces, gaining valuable experience. Beyond coding,
 I cherish family time, indulge in football as a Liverpool fan, and immerse myself in reading books.
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
              <a href="Kemal-Siraj-CV (1).pdf" download>
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
