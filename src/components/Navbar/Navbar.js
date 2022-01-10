import React, { useState } from "react";
import { AiOutlineInstagram, AiFillFacebook, AiFillGithub, AiFillYoutube,} from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar(){

    const [click, setClick] = useState(false);
    
    const handleClick = () => setClick(!click);

    return(
            <div className='menubar'>
                <div className='menu'>
                    <h1>Portfolio</h1>
                    <ul className={click ? "mobile-menu" : "mobile-menu-active" }> 
                        <li>
                            <a href="https://zignalssss.github.io/ReactPortfolio/" className="cool-link">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="cool-link">About</a>
                        </li>
                        <li>
                            <a href="#skills" className="cool-link">Skills</a>
                        </li>
                        <li>
                            <a href="#projects" className="cool-link">Projects</a>
                        </li>
                        <li>
                            <a href="#certificate" className="cool-link">Certificates</a>
                        </li>
                    </ul>
                </div>
                <div className='Social'> 
                    <ul className={click ? "mobile-menu" : "mobile-menu-active" }>
                        <li>
                            <a href='https://www.instagram.com/shogun.thapkhan/' target='_blank'>
                                <AiOutlineInstagram className='instagram' />
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/shogun.tubkun' target='_blank'>
                                <AiFillFacebook className='facebook'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/zignalssss' target='_blank'>
                                <AiFillGithub className='github'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.youtube.com/channel/UC3mkb_cgdRRZF6oTmWiMSRw' target='_blank'>
                                <AiFillYoutube className='youtube'/>
                            </a>
                        </li>
                    </ul>
                </div>
               <button className="mobile-menu-icon" onClick={handleClick}>
                   <GiHamburgerMenu/>
                </button>
            </div>

    );
}

export default Navbar;