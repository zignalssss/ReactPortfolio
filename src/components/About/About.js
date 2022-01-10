import React from 'react';
import me from './../../img/me.jpg'

function About() {
    return(
        <div className="About" id='about'>
            <div className='about-box'>
            <h1>ABOUT ME</h1>
                <div className="About-img">
                    <img src={me}/>
                    </div>
                        <div className="Text-P">
                            <p> Hello, I'm Wiritipon Thapkhan, I'm a Mechatronics student at Thai-Austrian Technical College</p>
                            <p>I'm 17 year olds.</p>
                            <p> I was born on February 21, 2004</p>
                        </div>
                </div>
        </div>
    );
}

export default About;