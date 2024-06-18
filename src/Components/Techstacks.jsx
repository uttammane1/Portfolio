import React from 'react'
import "../Styles/techstack.css";
import typescript from "../Images/typescript-logo-svgrepo-com.svg"
import Nodejs from "../Images/icons8-node-js.svg";
import Expressjs from "../Images/icons8-express-js.svg";
import github from "../Images/icons8-github (1).svg";
import vercel from "../Images/vercel-seeklogo.com.svg";
import netlify from "../Images/netlify.png";
import vscode from "../Images/icons8-visual-studio-code-2019.svg";
import Mongo from "../Images/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png";
// import angular from "../Images/Angular.svg";
// import python from "../Images/python.svg";
// import mysql from "../Images/MySQL.svg";
import { Tooltip } from '@chakra-ui/react'

const Techstacks = () => {



  return (
    <div className='Tech-Stacks' id="skills">

      <div className='heading-div'>
        <button className='heading-textbtn'>
          <h1 className='heading'>Technical <span style={{ color: "#0e4166" }}>Skills</span></h1>
        </button>

      </div>

      <div className='logosofstacks'>
      <Tooltip hasArrow label="React"  className="tooltip-font " bg={"#61dafb"} color={"white"}>
          {/* <div className='skills-card'> */}
          <div className="coin react_logo">
            <div className="side heads skills-card">

              <svg xmlns="http://www.w3.org/2000/svg"
                aria-label="React" role="img"
                viewBox="0 0 512 512"><rect
                  width="512" height="512"
                  rx="15%"
                  fill="#ffffff" /><circle cx="256" cy="256" r="36" fill="#61dafb" /><path stroke="#61dafb" strokeWidth="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z" /></svg>
            </div>
            <div className="side tails">
              <svg xmlns="http://www.w3.org/2000/svg"
                aria-label="React" role="img"
                viewBox="0 0 512 512"><rect
                  width="512" height="512"
                  rx="15%"
                  fill="#ffffff" /><circle cx="256" cy="256" r="36" fill="#61dafb" /><path stroke="#61dafb" strokeWidth="18" fill="none" d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z" /></svg>
            </div>
          </div>
          {/* <p class="skills-card-name">React</p> */}
          {/* </div> */}
        </Tooltip>

        <Tooltip hasArrow label="Redux"  className="tooltip-font " bg={"#7e57c2"} color={"white"}>
{/* <div className='skills-card'> */}
          <div className="coin redux_logo">
            <div className="side heads skills-card">
              <svg className='css-logo-width skills-card' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="4.3rem" height="4.3rem"><path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z" /><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z" /><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z" /></svg>

            </div>
            <div className="side tails">
              <svg className='css-logo-width' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="4.3rem" height="4.3rem"><path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z" /><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z" /><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z" /></svg>
            </div>
          </div>
          {/* <p class="skills-card-name">Redux</p> */}
          {/* </div> */}
        </Tooltip>

        
        <Tooltip hasArrow label="JavaScript"  className="tooltip-font skills-card-name" bg={"#f7df1e"} color={"black"}>
          {/* <div className='skills-card'> */}
          <div className="coin jslogo">
            <div className="side heads skills-card">

              <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" viewBox="0 0 512 512" id="javascript"><rect width="512" height="512" fill="#f7df1e" rx="15%"></rect><path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"></path></svg>
            </div>
            <div className="side tails">
              <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" viewBox="0 0 512 512" id="javascript"><rect width="512" height="512" fill="#f7df1e" rx="15%"></rect><path d="m324,370c10,17 24,29 47,29 20,0 33,-10 33,-24 0,-16 -13,-22 -35,-32l-12,-5c-35,-15 -58,-33 -58,-72 0,-36 27,-64 70,-64 31,0 53,11 68,39l-37,24c-8,-15 -17,-21 -31,-21 -14,0 -23,9 -23,21 0,14 9,20 30,29l12,5c41,18 64,35 64,76 0,43 -34,67 -80,67 -45,0 -74,-21 -88,-49zm-170,4c8,13 14,25 31,25 16,0 26,-6 26,-30V203h48v164c0,50 -29,72 -72,72 -39,0 -61,-20 -72,-44z"></path></svg></div>
          </div>
          {/* <p class="skills-card-name">Javascript</p> */}
          {/* </div> */}
        </Tooltip>


        <Tooltip hasArrow label="HTML"  className="tooltip-font" bg={"#FC573B"} color={"white"} >
          <div className="coin  html_logo " >
            <div className="side heads skills-card">

              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" id="html"><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FC573B" d="M21.592,22.136L22.834,8H9.167H9.166l1.242,14.136L15.982,24L21.592,22.136z M12.468,19.632l-0.213-2.707h1.698l0.125,1.361l1.904,0.518l1.911-0.518l0.213-2.222h-5.94l-0.456-5.2h8.581l-0.156,1.704h-6.541l0.146,1.765h6.249l-0.484,5.3l-3.484,0.965v0.011h-0.039L12.468,19.632z"></path></svg>
            </div>
            <div className="side tails">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 32 32" viewBox="0 0 32 32" id="html"><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FFE6E2" d="M26,32H6c-3.314,0-6-2.686-6-6V6c0-3.314,2.686-6,6-6h20c3.314,0,6,2.686,6,6v20C32,29.314,29.314,32,26,32z"></path><path fill="#FC573B" d="M21.592,22.136L22.834,8H9.167H9.166l1.242,14.136L15.982,24L21.592,22.136z M12.468,19.632l-0.213-2.707h1.698l0.125,1.361l1.904,0.518l1.911-0.518l0.213-2.222h-5.94l-0.456-5.2h8.581l-0.156,1.704h-6.541l0.146,1.765h6.249l-0.484,5.3l-3.484,0.965v0.011h-0.039L12.468,19.632z"></path></svg>
            </div>
          </div>
        </Tooltip>


        <Tooltip hasArrow label="CSS"  className="tooltip-font " bg={"#1572B6"} color={"white"}>
          <div className="coin Css_logo">
            <div className="side heads skills-card">

              <svg className='css-logo-width skills-card' xmlns="http://www.w3.org/2000/svg" width={"4.3rem"} viewBox="0 0 128 128" id="css3"><path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path></svg>
            </div>
            <div className="side tails">
              <svg className='css-logo-width' xmlns="http://www.w3.org/2000/svg" width={"4.3rem"} viewBox="0 0 128 128" id="css3"><path fill="#131313" d="M89.234 5.856h-7.384l7.679 8.333v3.967h-15.816v-4.645h7.678l-7.678-8.333v-3.971h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967h-15.817v-4.645h7.679l-7.679-8.333v-3.971h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839h-13.632v-16.949h13.632v4.839z"></path><path fill="#1572B6" d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"></path><path fill="#33A9DC" d="M64.001 119.072l29.439-8.162 6.926-77.591h-36.365v85.753z"></path><path fill="#fff" d="M64 66.22h14.738l1.019-11.405h-15.757v-11.138h27.929000000000002l-.267 2.988-2.737 30.692h-24.925v-11.137z"></path><path fill="#EBEBEB" d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883h-11.178999999999998l1.561 17.488 22.814 6.333.052-.015v-11.587z"></path><path fill="#fff" d="M77.792 76.886l-1.342 14.916-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647h-11.175z"></path><path fill="#EBEBEB" d="M64.039 43.677v11.136999999999999h-26.903000000000002l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138h-12.247l-.223-2.503-.508-5.647-.267-2.988h13.245z"></path></svg>
            </div>
          </div>
          {/* <p class="skills-card-name">CSS</p> */}
        </Tooltip>

      
        {/* <Tooltip hasArrow label="Angular"  className="tooltip-font " bg={"#E23237"} color={"white"}>
          
          <div className="coin Mongo_logo">
            <div className="side heads">

              <img className='css-logo-width logo_spin skills-card-img'  src={angular} alt="" />
            </div>
            <div className="side tails">
              <img className='css-logo-width logo_spin'  src={angular} alt="" />

            </div>
          </div>
          
        </Tooltip> */}

        {/* <Tooltip hasArrow label="TypeScript"  className="tooltip-font " bg={"#007acc"} color={"white"}>
          
          <div className="coin Typesscript_logo">
            <div className="side heads">

              <img className='css-logo-width typescript skills-card-img' src={typescript} alt="typescript" />
            </div>
            <div className="side tails">
              <img className='css-logo-width typescript' src={typescript} alt="typescript" />

            </div>
          </div>
        </Tooltip> */}

        {/* <Tooltip hasArrow label="Python"  className="tooltip-font " bg={"#35668F"} color={"white"}>
         
          <div className="coin Mongo_logo">
            <div className="side heads">

              <img className='css-logo-width skills-card-img logo_spin'  src={python} alt="" />
            </div>
            <div className="side tails">
              <img className='css-logo-width logo_spin'  src={python} alt="" />

            </div>
          </div>
        </Tooltip> */}

        
        <Tooltip hasArrow label="NodeJs"  className="tooltip-font " bg={"#21A366"} color={"white"}>
    {/* <div className='skills-card'> */}
          <div className="coin Nodejs_logo">
            <div className="side heads skills-card">

              <img src={Nodejs} className='skills-card' alt="" />
            </div>
            <div className="side tails">
              <img src={Nodejs} alt="" />

            </div>
          </div>
          {/* <p class="skills-card-name">Nodejs</p> */}
          {/* </div> */}
        </Tooltip>

        <Tooltip hasArrow label="Express Js"  className="tooltip-font " bg={"#212121"} color={"white"}>
{/* <div className='skills-card'> */}
          <div className="coin Expressjs_logo">
            <div className="side heads skills-card">

              <img src={Expressjs} className='skills-card' alt="" />
            </div>
            <div className="side tails">
              <img src={Expressjs} alt="" />

            </div>
          </div>
          {/* <p class="skills-card-name">Express Js</p> */}
          {/* </div> */}
        </Tooltip>

        <Tooltip hasArrow label="MongoDB"  className="tooltip-font " bg={"#21A366"} color={"white"}>
          {/* <div className='skills-card'> */}
          <div className="coin Mongo_logo">
            <div className="side heads skills-card">

              <img className='css-logo-width skills-card' src={Mongo} alt="" />
            </div>
            <div className="side tails">
              <img className='css-logo-width' src={Mongo} alt="" />

            </div>
          </div>
          {/* <p class="skills-card-name">Mongo</p> */}
          {/* </div> */}
        </Tooltip>

        

        {/* <Tooltip hasArrow label="MySQL"  className="tooltip-font " bg={"#DE8A03"} color={"white"}>
          <div className="coin Mongo_logo">
            <div className="side heads">

              <img className='css-logo-width skills-card-img logo_spin' src={mysql} alt="" />
            </div>
            <div className="side tails">
              <img className='css-logo-width logo_spin'  src={mysql} alt="" />

            </div>
          </div>
        </Tooltip> */}

       

        <Tooltip hasArrow label="Chakra UI"  className="tooltip-font " bg={"#4db6ac"} color={"white"}>
        {/* <div className='skills-card'> */}
          <div className="coin  Chakra_logo">
            <div className="side heads skills-card" >
              <svg className='chakra-logo-width' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="6rem" height="6rem"><circle cx="24" cy="24" r="20" fill="#4db6ac" /><path fill="#fff" d="M33.357,21.5h-8.882c-0.187,0-0.308-0.198-0.222-0.365l5.03-9.745	c0.13-0.253-0.195-0.492-0.398-0.293l-14.2,13.974c-0.159,0.157-0.048,0.428,0.175,0.428H24.2c0.202,0,0.32,0.227,0.205,0.393	l-7.126,10.265c-0.17,0.245,0.154,0.528,0.374,0.327l15.873-14.55C33.694,21.78,33.585,21.5,33.357,21.5z" /></svg>

            </div>
            <div className="side tails">
              <svg className='chakra-logo-width' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="6rem" height="6rem"><circle cx="24" cy="24" r="20" fill="#4db6ac" /><path fill="#fff" d="M33.357,21.5h-8.882c-0.187,0-0.308-0.198-0.222-0.365l5.03-9.745	c0.13-0.253-0.195-0.492-0.398-0.293l-14.2,13.974c-0.159,0.157-0.048,0.428,0.175,0.428H24.2c0.202,0,0.32,0.227,0.205,0.393	l-7.126,10.265c-0.17,0.245,0.154,0.528,0.374,0.327l15.873-14.55C33.694,21.78,33.585,21.5,33.357,21.5z" /></svg>
            </div>
          </div>
          {/* <p class="skills-card-name">Chakra Ui</p> */}
          {/* </div> */}
        </Tooltip>

        <Tooltip hasArrow label="GitHub"  className="tooltip-font " bg={"#212121"} color={"white"}>
          {/* <div className='skills-card'> */}
          <div className="coin github_logo">
            <div className="side heads skills-card">

              <img className='css-logo-width skills-card' src={github} alt="" />
            </div>
            <div className="side tails">
              <img className='css-logo-width' src={github} alt="" />

            </div>
          </div>
          {/* <p class="skills-card-name">Github</p> */}
          {/* </div> */}
        </Tooltip>

        <Tooltip hasArrow label="VS Code"  className="tooltip-font" bg={"#29b6f6"} color={"white"}>
{/* <div className='skills-card'> */}
          <div className="coin vscode_logo">
            <div className="side heads skills-card">

              <img className='css-logo-width skills-card' src={vscode} alt="" />
            </div>
            <div className="side tails">
              <img className='css-logo-width' src={vscode} alt="" />

            </div>
          </div>
          {/* <p class="skills-card-name">Vs VCode</p> */}
          {/* </div> */}
        </Tooltip>

        <Tooltip hasArrow label="Vercel"  className="tooltip-font " bg={"#212121"} color={"white"}>
    {/* <div className='skills-card'> */}
          <div className="coin vscode_logo">
            <div className="side heads skills-card">

              <img src={vercel} className='skills-card' alt="" />
            </div>
            <div className="side tails">
              <img src={vercel} alt="" />

            </div>
          </div>
          {/* <p class="skills-card-name">Vercel</p> */}
          {/* </div> */}
        </Tooltip>

        <Tooltip hasArrow label="Netlify"  className="tooltip-font " bg={"#3BC0B7"} color={"white"}>
          {/* <div className='skills-card'> */}
          <div className="coin vscode_logo">
            <div className="side heads skills-card">

              <img className='css-logo-width skills-card' src={netlify} alt="" />
            </div>
            <div className="side tails">
              <img className='css-logo-width' src={netlify} alt="" />

            </div>
          </div>
          {/* <p class="skills-card-name">Netlify</p> */}
          {/* </div> */}

        </Tooltip>






      </div>
    </div>
  )
}

export default Techstacks;