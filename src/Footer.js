import React from "react";
import {FaTwitterSquare} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaGithubSquare} from "react-icons/fa"

export default function Footer(){
    return(
        <div className="footer">
            <a href="twitter.com"><FaTwitterSquare className="bottom-icons" /></a>
            <a href="facebook.com"><FaFacebookSquare className="bottom-icons"/></a>
            <a href="instagram.com"><FaInstagramSquare className="bottom-icons"/></a>
            <a href="github.com"><FaGithubSquare className="bottom-icons"/></a>


        </div>
    )
}