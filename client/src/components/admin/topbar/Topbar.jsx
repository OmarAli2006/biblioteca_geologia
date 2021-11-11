/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./topbar.css"
import image from "./imagen.svg"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <img src={image} className="imgLogo" />
                    <span className="logo">Biblioteca Virtual Ingenieria Geologica</span>
                </div>
            </div>
        </div>
    )
}
