import {useEffect, useRef} from 'react';
import { useGlobalContext } from "../../context";
import { GoChevronDown } from "react-icons/go";
import logo from '../../images/Logo.svg'
import { BiMenu } from "react-icons/bi";


const Navbar = () => {
  const {loadSidebar, toggleSide, sideDrop, toggleSideDrop, dropData, openDropmenu, closeDropmenu} = useGlobalContext()
  const linksRef = useRef(null);
  const linksContainerRef = useRef(null);

  const displayDrop = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.right+tempBtn.left)/2
    const bottom = tempBtn.bottom + 12

    openDropmenu(page, {center, bottom})
  }

  const hideDropbar = (e) => {
    if(!e.target.classList.contains('menu-links')){
      closeDropmenu()
    }
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if(loadSidebar) {
      linksContainerRef.current.style.height = `${linksHeight}px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
 
  }, [loadSidebar, sideDrop]);
  
  return (
    <nav className={loadSidebar? 'nav-active': null} onMouseOver={hideDropbar}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='carbon' />
          <ul className='header-item'>
            <li>
              <a href='/' style={{color: '#000000', fontWeight:'bold'}}>personal</a>
            </li>
            <li>
              <a href='/'>Business</a>
            </li>
          </ul>
          <button className={loadSidebar?'nav-toggle nav-toggle-active' :'nav-toggle' } onClick={toggleSide} >
            <BiMenu />
          </button>
        </div>
        <div className='links-container' >
          <ul >
            <li>
              <a href='/'  className='menu-links'  onMouseOver={displayDrop}>features</a>
            </li>
            <li>
              <a href='/'  className='menu-links' onMouseOver={displayDrop}>company</a>
            </li>
            <li>
              <a href='/' className='menu-links'  onMouseOver={displayDrop}>help</a>
            </li>
            <button>Sign in</button>
          </ul>
        </div>
        <div className='mobile-links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            <li>
                <a href='/'  style={{color: '#000000', fontWeight:'bold'}}>personal</a>
            </li>
            <li>
                <a href='/'>business</a>
            </li>
            {
              dropData.map((val,index)=>{ 
                const {service,items} = val;
                return (
                  <li key={index}>
                      <div>
                        <a href='/'>{service}</a>
                        <GoChevronDown  onClick={toggleSideDrop}/>
                      </div>
                      <ul className={sideDrop? 'sublist':'sublist hide' }>
                        {
                          items.map((item,index)=>{
                            const {title, desc, icon} = item
                            return (
                              <li key={index}>
                                  <img src={icon} alt={title}/>
                                  <div>
                                    <h5>{title}</h5>
                                    <p>{desc}</p>
                                  </div>
                              </li>
                            )
                          })
                        }
                      </ul>
                  </li>
                )
              })
            }
            <li>
                <a href='/'>sign in</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar