import Fade from 'react-reveal/Fade'
import { IoIosArrowDropright } from "react-icons/io";


const HeroheadTwoLeft = (props) => {
    const {imageOne, imageTwo, tagName, heading, content} = props;
    return (
        <div className='herohead-two-left'>
            <Fade bottom>
                <div className='herohead-two-left-top'>
                    <img src={imageOne} alt='herohead'/>
                    <Fade right>
                        <img src={imageTwo} alt=''/>
                    </Fade>
                </div>
            </Fade>
            <Fade bottom>
                <div className='herohead-two-left-bottom'>
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
        </div>
    )
}

export default HeroheadTwoLeft;