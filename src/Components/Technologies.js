import React from 'react'
import '../CSS/Technologies.css'
import js from '../logos/css.png'
import react from '../logos/react.jpeg'
import node from '../logos/node.png'
import github from '../logos/github.png'
import html from '../logos/html.png'
import css from '../logos/css.png'

function Technologies() {
  return (
    <div className = "Technologies">
            <img src = {js} alt = "js" className = "image"></img>
            <img src = {react} alt = "react" className = "image"></img>
            <img src = {node} alt = "node" className = "image"></img>
            <img src = {github} alt = "github" className = "image"></img>
            <img src = {html} alt = "html" className = "image"></img>
            <img src = {css} alt = "css" className = "image"></img>
    </div>
  )
}

export default Technologies