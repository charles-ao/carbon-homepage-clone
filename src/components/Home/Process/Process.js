import React, { useEffect, useState, useRef } from 'react';

const Process = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const download = useRef(null);
    const register = useRef(null)
    const banking = useRef(null)



    useEffect(() => {

        // Function to get scroll position
        const updatePosition = () => {
          setScrollPosition(window.pageYOffset);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();

        if (window.innerWidth <= 1024) {
            if (scrollPosition < 4300) {
                download.current.style.opacity = 1
                register.current.style.opacity = 0
                banking.current.style.opacity = 0
            }
    
            if (scrollPosition >= 4300 && scrollPosition <= 4800) {
                download.current.style.opacity = 0
                register.current.style.opacity = 1
                banking.current.style.opacity = 0
            }
    
            if (scrollPosition > 4800) {
                download.current.style.opacity = 0
                register.current.style.opacity = 0
                banking.current.style.opacity = 1
            }
        } else if (window.innerWidth <= 1200) {
            if (scrollPosition < 4800) {
                download.current.style.opacity = 1
                register.current.style.opacity = 0
                banking.current.style.opacity = 0
            }
    
            if (scrollPosition >= 4800 && scrollPosition <= 5300) {
                download.current.style.opacity = 0
                register.current.style.opacity = 1
                banking.current.style.opacity = 0
            }
    
            if (scrollPosition > 5300) {
                download.current.style.opacity = 0
                register.current.style.opacity = 0
                banking.current.style.opacity = 1
            }
        } else {
            if (scrollPosition < 5100) {
                download.current.style.opacity = 1
                register.current.style.opacity = 0
                banking.current.style.opacity = 0
            }

            if (scrollPosition >= 5100 && scrollPosition <= 5700) {
                download.current.style.opacity = 0
                register.current.style.opacity = 1
                banking.current.style.opacity = 0
            }

            if (scrollPosition > 5700) {
                download.current.style.opacity = 0
                register.current.style.opacity = 0
                banking.current.style.opacity = 1
            }
        }

        return () => window.removeEventListener("scroll", updatePosition);
    }, [scrollPosition]);
    
    

    return (
        <div className='process'>
            <h2>Get Started on Carbon Today!</h2>
            <div className='process-content'>
                <div className='process-steps'>
                    <div className='accordion'>
                        <div className='accordion-head'>
                            <div className='accordion-number' id='one'>01</div>
                            <h2>Download the App</h2>
                        </div>
                        <p>Get the Carbon App on
                            Google Play Store for Android or App Store for iOS
                        </p>
                    </div>
                    <div className='accordion'>
                        <div className='accordion-head'>
                            <div className='accordion-number' id='two'>02</div>
                            <h2>Register within minutes</h2>
                        </div>
                        <p>Tell us a few details about you to help us create your Carbon
                             account quickly.
                        </p>
                    </div>
                    <div className='accordion'>
                        <div className='accordion-head'>
                            <div className='accordion-number' id='three'>03</div>
                            <h2>Start Banking</h2>
                        </div>
                        <p>You’re ready to go. Carry out all your banking transactions 
                             within the app, from investments to loan applications and bill payments.
                        </p>
                    </div>
                </div>
                <div className='process-photo-container' >
                    <div className='process-photo-image-album'>
                        <div className='process-album download' ref={download}></div>
                        <div className='process-album register' ref={register}></div>
                        <div className='process-album banking' ref={banking}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process