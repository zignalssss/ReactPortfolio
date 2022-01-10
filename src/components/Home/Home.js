import React, { Component, useEffect } from 'react';
import Typical from 'react-typical';
import Typewriter from 'typewriter-effect';
import { AiOutlineInstagram, AiFillFacebook, AiFillGithub, AiFillYoutube} from 'react-icons/ai';

function Home() {
    return(
            <div className="main-home">
                <a name="Home"></a>
                <div className='typical'>
                    <p> Welcome {''}
                        <span>
                            <Typical
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'Visitor',
                                    3000,
                                    'to My Website.',
                                    3000,
                                    ]}
                            />
                        </span>
                    </p>
                </div>
                <div className='typewriter'>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay:200,
                            strings: [
                                "I'm Wiritipon Thapkhan. ",
                                "This is my contacts.  "
                            ],
                        }}
                    />
                </div>
                <div className='contact'>
                    <ul>
                        <li>
                            <a href='https://www.instagram.com/shogun.thapkhan/' target='_blank'>
                                <AiOutlineInstagram className='ins' />
                            </a>
                           
                        </li>
                        <li>
                            <a href='https://www.facebook.com/shogun.tubkun' target='_blank'>
                                <AiFillFacebook className='face'/> 
                            </a>
                            
                        </li>
                        <li>
                            <a href='https://github.com/zignalssss' target='_blank'>
                                <AiFillGithub className='git'/>
                            </a>
                            
                        </li>
                        <li>
                            <a href='https://www.youtube.com/channel/UC3mkb_cgdRRZF6oTmWiMSRw' target='_blank'>
                                <AiFillYoutube className='you'/>
                            </a>
                            
                        </li>
                    </ul>
                </div>
            </div>
    );
}

export default Home;