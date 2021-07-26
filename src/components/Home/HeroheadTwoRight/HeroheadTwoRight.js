import Fade from 'react-reveal/Fade'
import { IoIosArrowDropright } from "react-icons/io";

const HeroheadTwoRight = (props) => {
    const {imageOne, imageTwo, imageThree, imageFour, tagName, heading, content} = props;
    
    return (
        <div className='herohead-two-right'>
            <Fade bottom>
                <div className='herohead-two-right-top'>
                    <div>
                        <div>
                            {tagName}
                        </div>
                        <h2>{heading}</h2>
                        <p>{content}</p>
                        <div className='rev'>
                            <h4>Learn more</h4>
                            <IoIosArrowDropright />
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className='herohead-two-right-bottom'>
                    <img src={imageOne} alt='herohead'/>
                    <Fade left>
                        <img src={imageTwo} alt=''/>
                    </Fade>
                    <Fade bottom>
                        <img src={imageThree} alt=''/>
                    </Fade>
                    <Fade left>
                    <   img src={imageFour} alt=''/>                
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}

export default HeroheadTwoRight;