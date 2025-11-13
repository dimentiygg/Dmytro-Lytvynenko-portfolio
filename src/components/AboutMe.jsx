import React from "react";

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-12 items-center mb-64">
      <div className="">
        <h2 className="uppercase text-center text-3xl mb-8">tech skills</h2>
        <ul className="skills-menu flex flex-row flex-wrap justify-center gap-3 mb-12">
          <li>
            <img src="/public/images/html.png" alt="" />
          </li>
          <li>
            <img src="/public/images/css.png" alt="" />
          </li>
          <li>
            <img src="/public/images/sass.png" alt="" />
          </li>
          <li>
            <img src="/public/images/js.png" alt="" />
          </li>
          <li>
            <img src="/public/images/ts.png" alt="" />
          </li>
          <li>
            <img src="/public/images/react.png" alt="" />
          </li>
          <li>
            <img src="/public/images/nextjs.png" alt="" />
          </li>
          <li>
            <img src="/public/images/nodejs.png" alt="" />
          </li>
          <li>
            <img src="/public/images/mongodb.png" alt="" />
          </li>
        </ul>
      </div>
      <div className="">
        {" "}
        <h2 className="text-center text-3xl mb-4">About me</h2>
        <p className="text-center px-36 max-w-3xl">
          I’m a Frontend Engineer focused on creating beautiful and engaging
          digital experiences. I enjoy working on products that combine the
          balance between clean design and smooth functionality. I’m especially
          interested in companies that value quality, innovation, and building
          products that make everyday life easier or more enjoyable. Let’s bring
          ideas to life and create digital solutions that make a real impact!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
