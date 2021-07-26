import Fade from 'react-reveal/Fade';
import { MdKeyboardArrowRight } from "react-icons/md";
import PicOne from '../../../images/image-one.png'
import GoogleImg from '../../../images/Google_Play_Store_badge_EN.svg'
import AppleImg from '../../../images/APPLE-STORE.svg'
import NDIC from '../../../images/NDIC.svg'
import CBN from '../../../images/CBN.svg'


const HeroheadOne  = () => {
    return (
        <div className='herohead-one'>
            <Fade bottom>
                <div className='herohead-one-left'>
                    <div className='herohead-one-left-top'>
                        <div className='herohead-one-left-top-info'>
                            <h5 className='info-pink'>New</h5>
                        </div>
                        <h5 className='info-pink'>Buy gadgets now, pay later at 0% interest.</h5>
                        <MdKeyboardArrowRight size='32px'/>
                    </div>
                    <div className='herohead-one-left-middle'>
                        <h1>Digital Banking for all lifestyles.</h1>
                        <h4>Unlock the power of money with a free Carbon bank
                             account. Pay bills, transfer money, get instant 
                             loans and enjoy high-interest savings, all in one place
                        </h4>
                        <div>
                            <img src={GoogleImg} alt='icon'/>
                            <img src={AppleImg} alt='icon'/>
                        </div>
                    </div>
                    <div className='herohead-one-left-bottom'>
                        <div>
                            <img src={NDIC} alt='icon'/>
                            <p>NDIC Insured</p>
                        </div>
                        <div>
                            <img src={CBN} alt='icon'/>
                            <p>Licensed by the Central Bank</p>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <div className='herohead-one-right'>
                    <img  src={PicOne} alt='heroheadOne'/>
                </div>
            </Fade>
        </div>
            
    )
}

export default HeroheadOne;