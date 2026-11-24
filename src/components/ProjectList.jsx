import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
function ProjectList({ data }) {
    return (
        <>
            <h2 className='headingTwo'>Projects</h2>
            <div className='container'>
                <div className="row">
                    {
                        data.map((pro, i) => {
                            return (
                                <div className="col" key={i}>
                                    <section className="card" style={{ width: "20rem", height: "30rem", marginBottom: "1rem" }}>
                                        <img src={pro.image} className="card-img-top " alt={pro.title} style={{height:"10rem"}}/>
                                        <div className="card-body">
                                            <h4 className="card-title ">{pro.title}</h4>
                                            <p className="card-text">{pro.shortDescription}</p>
                                            <div className="d-flex flex-wrap gap-2">
                                                {
                                                    pro.technologies.map((t, i) => (
                                                        <span key={i} className="badge bg-light text-dark border">
                                                            {t}
                                                        </span>
                                                    ))
                                                }

                                            </div>
                                            <a href={pro.githubLink} className="btn-solid theme-primary customIcon" target="_blank" title="go to github link">
                                                <FaGithubSquare />
                                            </a>
                                            <a href={pro.liveLink} className="btn-solid theme-primary customIcon" target="_blank" title="go to live link">
                                                <FaLocationArrow />
                                            </a>
                                        </div>
                                    </section>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
export default ProjectList