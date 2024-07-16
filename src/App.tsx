import './App.css'
import IonIcon from "@reacticons/ionicons";
import Navbar from "./components/navbar/Navbar";
import StackLoop from "./components/stack-loop/StackLoop.tsx";
import {useEffect, useState} from "react";
import DevPlatforms from "./components/dev-platforms/DevPlatforms.tsx";
import SkillsAndProjects from "./components/skills-projects/SkillsAndProjects.tsx";

function App() {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.scrollY);


        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (

        <main>

            <Navbar active={offset > 100}/>
            <section className="section section--hello">
                <div className="wrapper wrapper--hello">
                    <div className="header">
                        <img src="/images/Logo.svg" alt="Logo" className="logo"/>
                        <button className="btn btn--contact">
                            Contact
                            <IonIcon name={"send"}/>
                        </button>
                    </div>


                    <ul className={`links links--social`}>
                        {/*<li className="links__item">*/}
                        {/*    <a className="links__link" href="#">*/}
                        {/*        <IonIcon name={"logo-linkedin"}/>*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li className="links__item">
                            <a className="links__link" href="#">
                                <IonIcon name={"logo-github"}/>
                            </a>
                        </li>
                        <li className="links__item">
                            <a className="links__link" href="#">
                                <IonIcon name={"logo-vk"}/>
                            </a>
                        </li>
                        <li className="links__item">
                            <a className="links__link" href="#">
                                <img src="/images/telegram.svg" alt="telegram"/>
                            </a>
                        </li>
                    </ul>
                    <StackLoop/>
                    {/*<div className="h-[50%] top-0 bottom-0 my-auto mx-[19px] absolute w-[2px] bg-gray-200 "/>*/}


                    <article className="hello">
                        <div className="hello__img">
                            <img src="/images/my-avatar.jpeg" alt="Mikhail Ivanov"/>
                            <div className="hello__stack"/>
                        </div>


                        <h1 className="hello__title title" title="Mikhail Ivanov"><span className="title--thin">Hello! I'm</span>
                            <br/> Mikhail Ivanov</h1>
                    </article>


                    <DevPlatforms/>
                </div>
            </section>

            <section className="section section--about">
                <div className="wrapper">
                    <h2 className="headline headline--white">About Me</h2>
                    <div className="section__content">
                        <p className="text text--about">
                            I'm a Mobile Developer from Kaliningrad, Russia, specializing in creating seamless and
                            engaging
                            mobile applications. My expertise lies in transforming intricate requirements into
                            user-friendly
                            and visually appealing mobile experiences.
                            <br/>
                            <br/>

                            My goal is to develop mobile applications that are not only functional and efficient but
                            also
                            captivating and intuitive. I ensure that each app is tailored to your specific needs,
                            providing
                            a unique touch that sets it apart. My approach is to convey your brand's message and
                            identity in
                            the most innovative and effective way.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="wrapper">
                    <h2 className="headline">What I'm Doing</h2>

                    <div className="platforms">
                        <article className="platforms__item">


                            <IonIcon name={"phone-portrait"} className="skills__icon"/>

                            <h3>Mobile</h3>
                            <p>Develop intuitive and responsive mobile applications for iOS and Android using Swift,
                                Kotlin, Compose Multiplatform (KMM).</p>
                        </article>
                        <article className="platforms__item">
                            <IonIcon name={"desktop"} className="skills__icon"/>
                            <h3>Desktop</h3>
                            <p className="">Create robust and scalable desktop applications for Windows, macOS, and
                                Linux using Kotlin Multiplatform</p>
                        </article>
                        <article className="platforms__item">
                            <IonIcon name={"server"} className="skills__icon"/>

                            <h3>Server</h3>
                            <p className="">Build powerful and secure server-side applications using Kotlin, Python.
                                Expertise in creating scalable APIs, managing databases.</p>
                        </article>

                    </div>

                </div>
            </section>


            <section className="section">
                <div className="wrapper">
                    <SkillsAndProjects/>

                </div>
            </section>
        </main>
    )
}

export default App
