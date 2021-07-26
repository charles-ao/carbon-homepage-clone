// import ScrollAnimation from 'react-animate-on-scroll';
import { useGlobalContext } from '../../context';
import Reviews from './Reviews/Reviews';
import Channels from './Channels/Channels';
import HeroheadOne from './Herohead/HeroheadOne'
import HeroheadTwoLeft from './HeroheadTwoLeft/HeroheadTwoLeft';
import HeroheadTwoRight from './HeroheadTwoRight/HeroheadTwoRight';
import Process from './Process/Process'
import Img1 from '../../images/smart.png';
import Img2 from '../../images/Travel2x-min.png'
import Img3 from '../../images/Feature1-min.png'
import Img4 from '../../images/Credit-2x-min.png'
import Img5 from '../../images/Group-99802x-min.png'
import Img6 from '../../images/Group-96222x-min.png'
import Img7 from '../../images/Group-96212x-min.png'
import Img8 from '../../images/Mask-Group-592x.png'
import Img9 from '../../images/get-loan.2x-min.png'
import Img10 from '../../images/loan-amount2x-min.png'



const Home = () => {
  const {closeDropmenu} = useGlobalContext();

  return (
    <div className='home' onMouseOver={closeDropmenu}>
      <HeroheadOne/>
      <HeroheadTwoLeft imageOne={Img3} 
        tagName='Carbon account'
        heading='Bank with peace of mind'
        content='Your Carbon account allows you enjoy cheaper 
        transactions, zero account fees, and an annual interest
         of 2% per annum.'
      />
      <HeroheadTwoRight imageOne={Img9}
        imageFour={Img10}
        tagName='Instant loans'
        heading='We make access to credit simple and easy. 
                No guarantors, collaterals, or long forms.'
        content='Apply 24/7 and receive funds in your Carbon
                 account instantly. Unlock higher loan amounts 
                 and lower interest rates by repaying loans on time.'
      />
      <HeroheadTwoLeft imageOne={Img1} 
        imageTwo={Img2}
        tagName='Smart investments'
        heading='We offer market-leading returns on savings'
        content='Your money is always working harder for you.
        Earn up to 11% interest p.a. when you invest
        with Carbon. '
      />
      <HeroheadTwoRight imageOne={Img5}
        imageTwo={Img6}
        imageThree={Img7}
        tagName='Fast payments'
        heading='Enjoy seamless payments, at little or no cost'
        content='You can send money to anyone, pay all your bills, 
        and recharge airtime, with just a few taps on your 
        smartphone - and always at the lowest possible cost.'
      />
      <HeroheadTwoLeft imageOne={Img4} 
        tagName='Free credit reports'
        heading='Keep track of your credit history across 
                financial institutions'
        content='Be notified of any issues you may ha
                We’ll help you stay on top of things.. and
                 it’s completely free.'
      />
      <HeroheadTwoRight imageOne={Img8}
        tagName='Fast payments'
        heading='Virtual or Physical? Choose one. Or both.'
        content='Our physical debit cards give you access to
                 cash withdrawals anywhere. And with our secure
                 virtual cards, you can pay for products on your
                 favourite online stores, in dollars'
      />
      <Process />
      <Reviews/>
      <Channels />
    </div>
  );
};

export default Home;
