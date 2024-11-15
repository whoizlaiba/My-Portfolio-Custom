
import style from './page.module.css'


const About = () => {
  return (
    <section id="about" className={style.aboutSec}>
      <div className={style.container}>
        <h2
          className={`caveat-uniquifier ${style.heading}`}
        >
          About Me
        </h2>
        <p
          className={`caveat-uniquifier ${style.aboutPara}`}
        >
          Hello! I am a beginner front-end developer passionate about crafting
          clean, user-friendly web interfaces. I am currently diving into the
          basics of web design with technologies like HTML, CSS, TypeScript,
          Next.js, Tailwind Css and React. I am focused on building visually
          appealing and responsive websites, constantly exploring new tools and
          techniques to improve my skills. Excited to continue learning and
          growing in the world of front-end development!
        </p>
      </div>
    </section>
  );
};

export default About; 