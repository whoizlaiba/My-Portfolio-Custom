import Image from "next/image";

import style from './page.module.css'



const Projects = () => {
    return (
        <div id="projects">
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.box}>
                        <Image
                            src={'/project.jpg'}
                            alt="Project 1"
                            width={500}
                            height={500}
                            className={style.img}
                        />
                        <h2
                            className={`caveat-uniquifier  ${style.projectName}  `}
                        >
                            Project 1
                        </h2>

                        <p className={`caveat-uniquifier ${style.para}`}>
                            I created this Static Resume Builder using HTML, CSS, and
                            TypeScript to help users generate a professional-looking resume
                            with ease. This project was designed to be lightweight,
                            interactive, and visually appealing. The goal was to allow users
                            to input their personal and professional information, and
                            dynamically display it in a structured, well-designed format.
                        </p>
                        <a
                            href="https://hackathon-milestone-1-and-2-made-by-laibaparvez.vercel.app/"
                            className={`caveat-uniquifier ${style.link}`}
                        >
                            View Project
                        </a>
                    </div>

                    <div className={style.box}>
                        <Image
                            src={'/project.jpg'}
                            width={500}
                            height={500}
                            alt="Project 2"
                            className={style.img}
                        />
                        <h2
                            className={`caveat-uniquifier ${style.projectName}`}
                        >
                            Project 2
                        </h2>
                        <p className={`caveat-uniquifier ${style.para}`}>
                            I developed this Dynamic Resume Builder using HTML, CSS, and
                            TypeScript to allow users to create personalized, editable
                            resumes. This project empowers users to dynamically generate
                            resumes by filling out various sections and immediately seeing a
                            live preview of their resume with a professional layout.
                        </p>
                        <a
                            href="https://hackathon-milestone-3-4-and-5-by-laibaparvez.vercel.app/"
                            className={`caveat-uniquifier ${style.link}`}
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;