import React from 'react'

const ReviewCard = (props) => {
    return (
        <div
            className="p-mb-2 p-pb-4"
            style={{ borderBottom: "black solid 2px" }}
        >
            <div
                className="p-row p-d-flex p-flex-row p-ai-center p-mb-1"
                style={{ textAlign: "left" }}
            >
                <div className="p-mr-2">
                    <i
                        className="pi pi-user p-mr-2"
                        style={{ fontSize: "2em" }}
                    ></i>
                </div>
                <div className="">
                    <p style={{ marginBottom: "0px" }}>{props.name || "Anonymous"}</p>
                    <small>{props.UserRelation}</small>
                    <h6>{props.creactedAt}</h6>
                </div>
            </div>
            <h6>{props.title}</h6>
            <small>
                {props.content}
            </small>
        </div>
    )
}

export default ReviewCard
