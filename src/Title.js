import React from "react";
import Profileimg from "./profilepic.png";
import {GrMail } from "react-icons/gr";
import {BsLinkedin} from "react-icons/bs"

export default function Title(){
    return(
        <div className="head">
            <img src={Profileimg} className="profile-img" alt="profile"/>
            <h1 className="profile-name">Akshay TH</h1>
            <h2>Web developer</h2>
            <button >
                    <GrMail />
                    Email
            </button>
            <button className="button2">
                    <BsLinkedin />
                    Linkedin
            </button>
            
        </div>
    )
}