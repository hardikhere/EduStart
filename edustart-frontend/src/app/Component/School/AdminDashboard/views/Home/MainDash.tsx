import React from 'react'

const MainDash = () => {
    return (
        <div className="d-flex">
            <div className="minicard" style={{borderLeft:"solid #81E946"}}>
                <h4>Profile Views</h4>
                <h5>12k+</h5>
            </div>

            <div className="minicard" style={{borderLeft:"solid dodgerblue"}}>
                <h4>Total Inquiries</h4>
                <h5>120+</h5>
            </div>
        </div>
    )
}

export default MainDash
