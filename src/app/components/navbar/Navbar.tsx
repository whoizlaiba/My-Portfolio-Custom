"use client";
import Link from "next/link";

import { useState } from "react";
import style from "./page.module.css"




export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.nameContainer}>
                    <h1 className="caveat-uniquifier">Laiba Parvez</h1>
                </div>

                <ul className={style.navigations}>
                    <li className="caveat-uniquifier">
                        <Link href="/" className={style.hovr}>
                            Home
                        </Link>
                    </li>
                    <li className="caveat-uniquifier">
                        <Link href="#about" className={style.hovr}>
                            About
                        </Link>
                    </li>
                    <li className="caveat-uniquifier">
                        <Link href="#skills" className={style.hovr}>
                            Skills
                        </Link>
                    </li>
                    <li className="caveat-uniquifier">
                        <Link href="#contact" className={style.hovr}>
                            Contact
                        </Link>
                    </li>
                    <li className="caveat-uniquifier">
                        <Link href="#projects" className={style.hovr}>
                            Projects
                        </Link>
                    </li>
                </ul>

                <div className={style.hamContainer}>
                    <button onClick={toggleMenu} className={style.toggleBtn}>
                        ☰
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className={style.menu}>
                    <ul className={style.menuNavigations}>
                        <li className="caveat-uniquifier">
                            <Link href="#home" className={style.hovr}>
                                Home
                            </Link>
                        </li>
                        <li className="caveat-uniquifier">
                            <Link href="#about" className={style.hovr}>
                                About
                            </Link>
                        </li>
                        <li className="caveat-uniquifier">
                            <Link href="#skills" className={style.hovr}>
                                Skills
                            </Link>
                        </li>
                        <li className="caveat-uniquifier">
                            <Link href="#contact" className={style.hovr}>
                                Contact
                            </Link>
                        </li>
                        <li className="caveat-uniquifier">
                            <Link href="#projects" className={style.hovr}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}
