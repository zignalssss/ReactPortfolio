import React from 'react';
import arduino from'./../../img/arduino.png'
import c from'./../../img/C.png'
import cpp from './../../img/Cpp.png'
import cs from'./../../img/CS.png'
import html from'./../../img/html.png'
import css from'./../../img/CSS3.png'
import js from'./../../img/JS.png'
import react from'./../../img/react.png'
import py from'./../../img/PY.png'

function Skillicon() {
    return(
        <div className="Skills" id="skills">
             <h1>Skills</h1>
                <div className="list-skillsicon">
                    <div className='icon'>
                    <div className='text-icon'>
                            <a href='https://en.wikipedia.org/wiki/C_(programming_language)' target="_blank" ><img src={c}/></a>
                                <h6>C</h6>
                            </div>
                    <div className='text-icon'>
                            <a href='https://www.w3schools.com/CPP/default.asp' target="_blank"><img src={cpp} /></a>
                                <h6>C++</h6>
                            </div>
                    <div className='text-icon'>
                            <a href='https://www.w3schools.com/cs/index.php' target="_blank"><img src={cs} /></a>
                                <h6>C#</h6>
                            </div>
                    <div className='text-icon'>
                            <a href='https://www.w3schools.com/html/default.asp' target="_blank"><img src={html}/></a>
                                <h6>HTML</h6>
                            </div>
                    <div className='text-icon'>
                            <a href='https://www.w3schools.com/css/default.asp' target="_blank"><img src={css} /></a>   
                                <h6>CSS</h6>
                            </div>  
                    <div className='text-icon'>
                            <a href='https://www.w3schools.com/js/default.asp' target="_blank"><img src={js} /></a> 
                                <h6>JavaScript</h6>
                            </div>  
                    <div className='text-icon'>
                            <a href='https://www.arduino.cc/' target="_blank"><img src={arduino} /></a>  
                                <h6>Arduino</h6>
                            </div>
                    <div className='text-icon'>
                            <a href='https://reactjs.org/' target="_blank"><img src={react} /></a> 
                                <h6>React</h6>
                            </div>
                    <div className='text-icon'>
                            <a href='https://www.python.org/' target="_blank"><img src={py} /></a>  
                                <h6>Python</h6>
                            </div>       
                     </div> 
                </div>
        </div>
    );
}

export default Skillicon;