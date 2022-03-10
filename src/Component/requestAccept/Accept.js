/* eslint-disable react/jsx-pascal-case */
import React from "react";
// import Button from "./Components/Button";
import Nav_side from "../Nav_side";
import "./accept.css"
function RequestAccept() {
    return (
        <>
            <Nav_side />
            <div className="formContainer col-9">
                <h3 className="heading">Interview Request</h3>
                <div className="form">
                    <div className="inputControl">
                        <label>Name</label>
                        <input className="inputField" type="text" placeholder="Interviewer" />
                    </div>
                    <div className="inputControl">
                        <label>Email</label>
                        <input className="inputField" type="text" placeholder="example@domain.xyz"
                        />
                    </div>
                    <div className="inputControl">
                        <label>Meeting Link</label>
                        <input className="inputField" type="text" placeholder="https://example.com"
                        />
                    </div>
                    <div className="inputControl">
                        <label>Company</label>
                        <input className="inputField" type="text" placeholder="Ex. Wipre, TCS"
                        />
                    </div>
                    <div className="inputControl">
                        <label>Date</label>
                        <input className="inputField" type="date" />
                    </div>
                    <div className="inputControl">
                        <label>Time</label>
                        <input className="inputField" type="time" />
                    </div>
                    <div className="inputControl">
                        <input className="inputField" type="text" placeholder="Invited Student"
                        />
                    </div>
                    <div className="inputControl">
                        <label>Short Message</label>
                        <textarea className="textarea" placeholder="Short Message" />
                    </div>
                </div>
                <div class="d-flex justify-content-evenly">
                    <button class="btn btn-outline-success mt-4 mb-5" id="left">Accept</button>
                    <button class="btn btn-outline-warning mt-4 mb-5" id="right">Decline</button>
                </div>
            </div>
        </>
    );
}

export default RequestAccept;
