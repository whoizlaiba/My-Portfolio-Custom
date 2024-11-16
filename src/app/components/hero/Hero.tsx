import Image from "next/image";
import { FC } from "react";

import style from "./page.module.css";

const Hero: FC = () => {
  return (
    <section className={style.heroSec}>
      <div className={style.imgContainer}>
        <Image
          src={"/canva.jpg"}
          alt="Profile Picture"
          width={400}
          height={400}
          className={style.img}
        />
      </div>

      <div className={style.textContainer}>
        <h1 className={`caveat-uniquifier ${style.name}`}>
          Hello, <br /> I am Laiba Parvez
        </h1>

        <span className={`caveat-uniquifier ${style.span}`}>
          <h2>A Passionate</h2>
          <h2>Frontend Developer</h2>
        </span>
        <div className={style.paraContainer}>
          <p className={`caveat-uniquifier ${style.paragraph}`}>
            Welcome to my portfolio! I specialize in building dynamic,
            responsive websites using modern <br />
            web technologies like Next.js, HTML, CSS, Tailwind CSS, and
            TypeScript. With a focus on clean <br />
            code and seamless user experiences, I create websites that are not
            only visually appealing but <br />
            also highly functional. Explore my work to see how I combine
            creativity and technical expertise <br />
            to bring ideas to life online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
