import React from 'react';
import html from './../../img/html.jpg'

function Skills() {
    return(
    <div className="mainskill" id="skills">
        <center><h1 >Skills</h1></center>
            <div className="Skill">
                <div class="card">
                    <h3 class="title">HTML</h3>
                        <div class="bar">
                            <div class="emptybar"></div>
                            <div class="filledbar"></div>
                        </div>
                    <div class="circle">
                        <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                            <circle class="stroke" cx="60" cy="60" r="50" />
                        </svg>
                    </div>
                </div>
                <div class="card">
                    <h3 class="title">CSS</h3>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <img src={html}/>
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>
                <div class="card">
                    <h3 class="title">JavaScript</h3>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                    </div>
                </div>
                <div class="card">
                        <h3 class="title">C Language</h3>
                            <div class="bar">
                                <div class="emptybar"></div>
                                <div class="filledbar"></div>
                            </div>
                        <div class="circle">
                            <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                <circle class="stroke" cx="60" cy="60" r="50" />
                            </svg>
                        </div>
                </div>
                <div class="card">
                    <h3 class="title">Python</h3>
                    <div class="bar">
                    <div class="emptybar"></div>
                    <div class="filledbar"></div>
                    </div>
                    <div class="circle">
                    <svg class="svg" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle class="stroke" cx="60" cy="60" r="50"/>
                    </svg>
                </div>
                </div>
            </div>
    </div> 
    );
}

export default Skills;