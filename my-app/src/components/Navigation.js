import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  

function Navigation() {
    const[showMenu, setShowMenu] = useState(false)

const maskTransitions = useTransition(showMenu, {
    from: { position:'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

const menuTransitions = useTransition(showMenu, {
    from: { opacity: 0, transform: 'translateX(-100%)'},
    enter: { opacity: 1, transform: 'translateX(0%)'  },
    leave: { opacity: 0, transform: 'translateX(-100%)'},
  })
   
 
    return( 
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon icon={faBars}
                onClick={() => setShowMenu(!showMenu)}/>

            </span>
            {
               maskTransitions((styles, item) => 
                    item && <animated.div 
                        style={styles}
                        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                        onClick={() => setShowMenu(false)}
                        >
                    </animated.div>)
            }

            {
                menuTransitions((styles, item) => 
                    item && <animated.div 
                        style={styles}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3">

                    <div className ="font-bold py-3">
                        This is the Menu
                    </div>
                    <ul>
                        <li><Link 
                        to = "/home" 
                        className ="text-blue-500 py-3 border-b border-t block"
                        onClick={() => setShowMenu(false)}
                        >

                            Homepage
                            </Link></li>

                        <li><Link 
                        to = "/about" 
                        className ="text-blue-500 py-3 border-b block"
                        onClick={() => setShowMenu(false)}
                        >
                            
                            About
                        </Link></li>

                        <li><Link 
                        to = "/product" 
                        className ="text-blue-500 py-3 border-b block"
                        onClick={() => setShowMenu(false)}
                        >
                            
                            Product
                        </Link></li>
                    </ul>
                    </animated.div>)
            }
        </nav>
    )
}

export default Navigation