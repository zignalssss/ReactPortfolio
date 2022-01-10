import React from 'react';
import obj from'./../../img/proj1.png'
import Game from './../../img/proj2.png'
import discord from './../../img/proj3.png'
import fingerprint from './../../img/proj4.png'
import temp from './../../img/proj5.png'
import car from './../../img/proj6.png'

function Project() {
    return(
        <div className="Projects" id="projects">
             <h1>Projects</h1>
                <div className="project">
                    <article className="Card-listing">
                        <a href="https://dgame-ede91.web.app/" className="Card-title" target="_blank">2D GAME</a>
                        <div className="Card-image">
                            <img className="Card-img" src={Game} alt="" />
                        </div>
                    </article>
                    <article className="Card-listing">
                        <a href="https://github.com/zignalssss/objdetec" className="Card-title" target="_blank">OBJECT DETECTION</a>
                        <div className="Card-image">
                            <img className="Card-img" src={obj} alt="" />
                        </div>
                    </article>
                    <article className="Card-listing">
                        <a href="https://github.com/zignalssss/Discord-bot" className="Card-title" target="_blank">DISCORD BOT</a>
                        <div className="Card-image">
                            <img className="Card-img" src={discord} alt="" />
                        </div>
                    </article>
                    <article className="Card-listing">
                        <a href="https://github.com/zignalssss/fingerprint_locker" className="Card-title" target="_blank">FINGERPRINT-SCANER</a>
                        <div className="Card-image">
                            <img className="Card-img" src={fingerprint} alt="" />
                        </div>
                    </article>
                    <article className="Card-listing">
                        <a href="https://github.com/zignalssss/auto-temp-control" className="Card-title" target="_blank">AUTO-TEMP-CONTROL</a>
                        <div className="Card-image">
                            <img className="Card-img" src={temp} alt="" />
                        </div>
                    </article>
                    <article className="Card-listing">
                        <a href="https://drive.google.com/drive/folders/1W5yUnTSlRJKuhrH4KWDfPHW28cNBwJqt?usp=sharing" className="Card-title" target="_blank">ARDUINO-CAR-PROJECT</a>
                        <div className="Card-image">
                            <img className="Card-img" src={car} alt="" />
                        </div>
                    </article>
                </div>
        </div>
    );
}

export default Project;