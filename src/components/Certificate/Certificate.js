import Codeorg1 from './../../img/Codeorg1.jpg'
import Codeorg2 from './../../img/Codeorg2.jpg'
import cuhtmlcss from './../../img/CUHTMLCSS.png'
import data from './../../img/data.png'
import fskill from './../../img/Fskill1.jpg'
import fskill2 from './../../img/Fskill2.jpg'
import keng from './../../img/Keng.jpg'
import keng2 from './../../img/Keng2.jpg'
import solo1 from './../../img/solo1.jpg'
import solo2 from './../../img/solo2.jpg'
import solo3 from './../../img/solo3.jpg'
import Udemy from './../../img/Udemy.jpg'
// import './Certificatemodule.css'

function Certificate(){
    return(
        <div className="certificate" id='certificate'>
             <h1>Certificates</h1>
                <div className="Ceritem">
                    
                <article className="location-listing">
                    <h2 className="location-title">K-Engineering World 2021 Software Engineering</h2>

                    <div className="location-image">
                        <img className="cer-img" src={keng} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">K-Engineering World 2021 IoT System and Information Engineering</h2>

                    <div className="location-image">
                        <img className="cer-img" src={keng2} alt="" />
                    </div>
                </article>


                <article className="location-listing">
                    <h2 className="location-title">FutureSkill/ BasicReact </h2>

                    <div className="location-image">
                        <img className="cer-img" src={fskill} alt="" />
                    </div>
                </article>


                <article className="location-listing">
                    <h2 className="location-title">FutureSkill HTML5/CSS/Javascript</h2>

                    <div className="location-image">
                        <img className="cer-img" src={fskill2} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">Rhythm of Arts/ DATACAMP</h2>

                    <div className="location-image">
                        <img className="cer-img"src={data} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">ThaiMOOC Chulalongkorn HTML/CSS/Javascript</h2>

                    <div className="location-image">
                    <img className="cer-img" src={cuhtmlcss} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">CODE.ORG/ AI for Oceans</h2>

                    <div className="location-image">
                        <img className="cer-img" src={Codeorg1} alt="" />
                    </div>
                </article>


                <article className="location-listing">
                    <h2 className="location-title">CODE.ORG/ Basic Concepts of Computer Science</h2>

                    <div className="location-image">
                        <img className="cer-img" src={Codeorg2} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">Sololearn/ C++ Language</h2>

                    <div className="location-image">
                        <img className="cer-img" src={solo1} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">Sololearn/ Python for Beginners</h2>

                    <div className="location-image">
                        <img className="cer-img" src={solo2} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">Sololearn/ C Language</h2>

                    <div className="location-image">
                        <img className="cer-img" src={solo3} alt="" />
                    </div>
                </article>

                <article className="location-listing">
                    <h2 className="location-title">Udemy/ Automate The Boring Stuff with Python Programming</h2>

                    <div className="location-image">
                        <img className="cer-img" src={Udemy} alt="" />
                    </div>
                </article>
                </div>

        </div>
    )
}

export default Certificate;