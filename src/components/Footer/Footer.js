import {useState} from 'react'
import { useGlobalContext } from "../../context";
import Logo from '../../images/logo-small.svg'
import Nigeria from '../../images/nigeria.svg'
import { MdKeyboardArrowDown } from "react-icons/md";
import Facebook from '../../images/facebook.svg'
import Twitter from '../../images/twitter.svg'
import Instagram from '../../images/instagram.svg'
import Youtube from '../../images/youtube.svg'
import Linkedin from '../../images/linkedin.svg'
import Tumblr from '../../images/tumblr.svg'
import Apple from '../../images/Download_on_the_App_Store_Badge_1.svg'
import Google from '../../images/Google_Play_Store_badge_EN_1.svg'



const Footer = () => {
  const {footerData} = useGlobalContext()
  const [countries, setCountries] = useState(false);
  const toggleList = () => {
    setCountries(!countries)
  }


    return (
      <div className='footer'>
         <div className='footer-top'>
           <div>
              <img src={Logo} alt='logo icon'/>
              <div className='country'>
                <img src={Nigeria} alt='Nigeria'/>
                Nigeria
                <div onClick={toggleList}>
                  <MdKeyboardArrowDown/>
                </div>
              </div>
              <div className={countries? 'country-list show-country-list': 'country-list'}>
                <div>Kenya</div>
                <div>Ghana</div>
              </div>
           </div>
           {
             footerData.map(val => {
               const {title,id, content} = val
               return (
                <div key={id} className='sec'>
                  <h4>{title}</h4>
                  {content.map((item, index) =><p key={index}>{item}</p> )}
                </div>
               )
             })
           }
          </div>
          <div className='footer-middle'>
            <div>
              <img src={Apple} className='social-icons-os' alt='icons social'/>
              <img src={Google} className='social-icons-os' alt='icons social'/>
            </div>
            <div>
              <img src={Facebook} className='social-icons' alt='icons social'/>
              <img src={Twitter} className='social-icons' alt='icons social'/>
              <img src={Instagram} className='social-icons' alt='icons social'/>
              <img src={Youtube} className='social-icons' alt='icons social'/>
              <img src={Linkedin} className='social-icons' alt='icons social'/>
              <img src={Tumblr} className='social-icons' alt='icons social'/>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>
              ©2021 Carbon is a financial service provided by Carbon Finance &and;
              Investments Limited (RC 1044655), licensed and regulated by the Central
              Bank of Nigeria (CBN). We empower individuals with credit, simple 
              payments solutions, high-yield investment opportunities, and easy-to-use
              tools for personal financial management. We are a global company of over
              90 employees with a presence in Mauritius, Nigeria, the United Kingdom,
              United States, Canada, South Africa, and Kenya
            </p>

            <p>
              Registered address: Plot 642C Akin Adesola St. Lagos 101233 Nigeria 🇳🇬
            </p>
          </div>
      </div>
    )
  }
  
  export default Footer;