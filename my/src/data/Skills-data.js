import uuid from 'react-uuid';
import html from "../assets/html5.svg";
import css from "../assets/css3.svg";
import js from "../assets/javascript.svg";
import Wp from "../assets/wordpress.svg";
import React from "../assets/react.svg";


export const skills =[
    {
      skillImg:html,
      skillName:'HTML5',
      id:uuid(),
    },{
      skillImg:css,
      skillName:'CSS3',
      id:uuid(),
    },{
      skillImg:js,
      skillName:'Javascript',
      id:uuid(),
    },{
      skillImg:Wp,
      skillName:'Wordpress',
      id:uuid(),
    },{
      skillImg:React,
      skillName:'React',
      id:uuid(),
    }
]