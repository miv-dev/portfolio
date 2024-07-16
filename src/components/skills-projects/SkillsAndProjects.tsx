import {useState} from "react";
import './style.css'

// type Project = {
//     name: string,
//     description: string,
//     tags: string[]
// }


const SkillsAndProjects = () => {
    const skills = [
        'Android SDK',
        'Kotlin', "Compose Multiplatform", 'Ktor',
        'Decompose', 'Jetpack Compose', 'DI', 'Django',
    ]
    const [showProjects, setShowProjects] = useState(false)

    return (
        <div className="flex">
            <article className={`projects ${showProjects ? 'projects--expand' : ''}`}>
                <h2 className="headline">Projects</h2>
                {showProjects &&
                    <button className="btn absolute right-0 top-0 "
                            onClick={() => setShowProjects(prevState => !prevState)}>
                        Close
                    </button>

                }
                <div className='projects__content'>
                    {skills.map((value, index) => (


                        <article className={`projects__card card ${!showProjects && index > 2 ? 'hidden' : 'flex'}`}
                                 style={{
                                     paddingLeft: `calc(${showProjects ? 0 : index} * 15px)`,
                                     paddingTop: `calc(${showProjects ? 0 : index} * 15px)`,
                                     zIndex: -index,
                                 }}>
                            <div className={`card__body`}>
                                {showProjects || index == 0 ?
                                    <>
                                        <div className="card__tag">{value}</div>
                                        <h3 className="card__title">Project</h3>
                                        <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Animi architecto
                                            aspernatur commodi illum inventore ipsam laboriosam placeat qui vero,
                                            voluptatum? Aliquam consectetur deleniti, excepturi fugiat laudantium nihil
                                            possimus quisquam temporibus.</p>
                                        <button className="btn btn--more"
                                                onClick={() => setShowProjects(prevState => !prevState)}>Show
                                            more
                                        </button>
                                    </> : ""
                                }


                            </div>
                        </article>
                    ))}

                </div>
            </article>
            <article className={`skills ${showProjects ? "skills--hidden": "" }`}>
                <h2 className="headline">Skills</h2>
                <div className="flex">
                    <div className="chips chips--h-flow">

                        {skills.map(skill => (
                            <article className="chips__item chips__item--skill">
                                {skill}
                            </article>
                        ))}

                    </div>

                </div>
            </article>
        </div>
    )
}
export default SkillsAndProjects