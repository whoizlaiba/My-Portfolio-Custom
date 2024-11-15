import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaLinkedin, FaGithub, FaNpm } from "react-icons/fa";
import style from './page.module.css'



const Contact = () => {
    return (
        <section id="contact" className={style.contactSec}>
            <div className={style.container}>
                <h2
                    className={`caveat-uniquifier ${style.heading}`}
                >
                    Contact Me <PiContactlessPaymentFill className={style.inline} />
                </h2>
                <p className={`caveat-uniquifier ${style.contactPara}`}>
                    Feel free to reach out if you had like to collaborate or just want to
                    chat!
                </p>
                <a
                    href="mailto:pervezlaib20@gmail.com"
                    className={`caveat-uniquifier ${style.email}`}
                >
                    Send an Email
                </a>

                <div className={style.links}>
                    <a
                        href="https://www.linkedin.com/in/laiba-parvez-9b205b2b4/"
                        target="_blank"
                        className={style.linkedin}
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://github.com/whoizlaiba"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.git}
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.npmjs.com/~laibaparvez?activeTab=orgs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={style.npm}
                    >
                        <FaNpm />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;