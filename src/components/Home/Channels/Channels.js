import Logo1 from '../../../images/Group-9862.svg'
import Logo2 from '../../../images/Group-9862.svg'
import Logo3 from '../../../images/ussd3x.png'
import Logo4 from '../../../images/web3x.png'

const Channels = () => {
    return (
        <div className='channels'>
            <h2>A digital bank made just for you</h2>
            <p>Open a new Carbon bank account from your phone or computer and 
                follow the simple on-screen steps to register for an account
                 in minutes
            </p>
            <div className='channel-list'>
                <img src={Logo1} alt='logo1'/>
                <img src={Logo2} alt='logo1'/>
                <img src={Logo3} alt='logo1'/>
                <img src={Logo4} alt='logo1'/>
            </div>
        </div>

    )
}

export default Channels