function Skills({ skills }) {
    return (
        <>
            <h2 className="headingTwo">Skills</h2>

            <div className="container mb-5">
                <div className="row">
                    {
                        skills.map((skill, i) => (
                            <div className="col" key={i}>
                                <div className="card">
                                    <div className="card-header">
                                        {skill.category}
                                    </div>

                                    <div className="card-body">
                                        <div className="d-flex flex-wrap gap-2">
                                            {
                                                skill.skills.map((t, i) => (
                                                    <span key={i} className="badge bg-light text-dark border">
                                                        {t}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default Skills;