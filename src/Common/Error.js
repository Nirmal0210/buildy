import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.title = "Error"
    }, [])
    return (
        <section className="error__area">
            <div className="container line">
                <span className="line-3"></span>
                <span className="line-4"></span>
                <span className="line-5"> </span>

                <div className="row">
                    <div className="col-xxl-12">
                        <div className="error__content">
                            <img src={require("../Assets/imgs/thumb/404.png")} alt="Page Not Found" />
                            <p>Oops! but nothing matched your search terms. Try again with some different keywords.</p>
                            <Link to="/home" className="wc-btn-primary btn-hover"><span></span> Back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error