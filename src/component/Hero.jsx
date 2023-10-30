import React from "react";
import kem from "../assets/images/dd.png";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTelegram } from "react-icons/bs";

const Hero = () => {
  const socialMediaLinks = {
    linkedin: "https://www.linkedin.com/in/kemal-siraj/",
    instagram: "https://www.instagram.com/invites/contact/?i=cndpl8vk7fmt&utm_content=pl38otv",
    facebook: "https://www.facebook.com/kemale.sirage/",
    telegram: "https://t.me/konjoyeww",
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={kem} alt="" className="md:w-3/5 sm:w-2/5 w-2/5" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Kemal Siraj</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front end Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {Object.entries(socialMediaLinks).map(([media, link]) => (
              <a
                key={media}
                href={link}
                target="_blank"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                {media === "linkedin" ? (
                  <AiFillLinkedin />
                ) : media === "instagram" ? (
                  <AiFillInstagram />
                ) : media === "facebook" ? (
                  <BsFacebook />
                ) : (
                  <BsTelegram />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
