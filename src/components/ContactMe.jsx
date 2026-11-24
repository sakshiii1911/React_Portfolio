function ContactMe() {
    return (
        <>
            <div className="container mb-5">
                <h2 className="headingTwo text-center">Contact Me</h2>

                <div className="d-flex justify-content-center">
                    <div className="card w-100" style={{ maxWidth: '550px' }}>
                        <div className="card-body p-4">

                            <h4 className="card-title fw-bold text-center mb-4">
                                Contact Form
                            </h4>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input className="form-control" type="text" id="name" placeholder="Name" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input className="form-control" type="text" id="phone" placeholder="Phone" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input className="form-control" type="email" id="email" placeholder="Email" />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe;