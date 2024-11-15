
import style from './page.module.css'





const Skills = () => {
  return (
    <section
      id="skills"
      className={style.skillsSec}
    >
      <div className={style.container}>
        <h2
          className={`caveat-uniquifier ${style.skillsHeading}`}
        >
          Skills
        </h2>
        <div className={style.main}>
          <div className={style.box}>
            <h3 className={`  caveat-uniquifier text-xl font-semibold`}>
              Next.js
            </h3>
          </div>
          <div className={style.box}>
            <h3 className={`caveat-uniquifier ${style.boxText} ${style.inline}`}>
              Tailwind Css 
            </h3>
          </div>
          <div className={style.box}>
            <h3 className={`  caveat-uniquifier ${style.boxText}`}>
              TypeScript 
            </h3>
          </div>
          <div className={style.box}>
            <h3 className={`  caveat-uniquifier ${style.boxText}`}>
              Html 
            </h3>
          </div>
          <div className={style.lastBox}>
            <div className={style.box}>
              <h3 className={`  caveat-uniquifier ${style.boxText} `}>
                Css 
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


