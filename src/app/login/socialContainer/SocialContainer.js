import './SocialContainer.css'
import React, { useEffect, useState} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {auth,ga,fa,ta} from "./Firebase"
import {signInWithPopup} from "firebase/auth";




   export function SocialContainer() {
    const [isActive, setIsActive] = useState(false);
    const[value,setValue]=useState('')
  
  
  
  
  
  //googleauth
    
    const googleClick =()=>{
  
      signInWithPopup(auth,ga).then((data)=>{
         setValue(data.user.email)
         localStorage.setItem('email',data.user.email)
      })
     }
     useEffect(()=>{
         setValue(localStorage.getItem('email'))
     })
  
  
  
  
  
  
     //facebookauth
     const facebookClick =()=>{
   
       signInWithPopup(auth,fa).then((data)=>{
          setValue(data.user.email)
          localStorage.setItem('email', data.user.email)
       })
      }
      useEffect(()=>{
          setValue(localStorage.getItem('email'))
      })
  
  
  
  
  
  
      //twitterauth
      const twitterClick =()=>{
   
        signInWithPopup(auth,ta).then((data)=>{
           setValue(data.user.email)
           localStorage.setItem('email',data.user.email)
        })
       }
       useEffect(()=>{
           setValue(localStorage.getItem('email'))
       })
  
    return (
        <div className="social-container">
            <button onClick={facebookClick} className="social">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
            </button>

            <button onClick={googleClick} className="social google">
                <svg strokeWidth=".5" className="w-5 h-5" viewBox="0 0 15.68 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                </svg>
            </button>

            <button onClick={facebookClick} className="social">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
            </button>
        </div>
    );
}





