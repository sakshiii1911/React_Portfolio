import React from 'react'
import { FaGithub } from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs"

function PersonalInfo({data}) {
    return (
        <>
        <div className="container">
            <h2 className="headingTwo">Personal Info</h2>
            <div className="row">
                <div className="col">
                     <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4 p-md-5">

                            <span className="badge bg-primary mb-3">
                                {data.designation}
                            </span>

                            <h2 className="fw-bold mb-3">
                                Hi, I'm {data.name}
                            </h2>
                            <h6>{data.email}</h6>
                            <h6>{data.location}</h6>


                            <p className="text-muted lh-lg">
                                {data.shortDescription}
                            </p>

                            

                            <div className="d-flex flex-wrap gap-3">

                                <a
                                    href={data.socialLinks.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-dark"
                                >
                                    <FaGithub className="me-2" />
                                    GitHub
                                </a>

                                <a
                                    href={data.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary"
                                >
                                    <BsLinkedin className="me-2" />
                                    LinkedIn
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="col">
                    
                    <div className="d-flex flex-wrap gap-2">
                                            {
                                                data.technologies.map((t, i) => (
                                                    <span key={i} className="badge bg-light text-dark border">
                                                        {t}
                                                    </span>
                                                ))
                                            }
                                        </div>
                </div>
            </div>
        </div>
        </>
    )}
    export default PersonalInfo