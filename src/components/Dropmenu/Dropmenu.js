import {useRef, useEffect} from 'react';
import { useGlobalContext } from "../../context"


const Dropmenu = () => {
    const {loadDropmenu, location, page} = useGlobalContext();
    const dropmenuRef = useRef(null);

    useEffect(() => {
      const {center, bottom}  = location;

      dropmenuRef.current.style.left = `${center}px`;
      dropmenuRef.current.style.top =`${bottom}px`;
    }, [location])
    
    return (
        <div className={loadDropmenu?'drop-menu show' : 'drop-menu' } ref={dropmenuRef}>
            <div className='squa-rot'></div>
            <div className={page.length === 4? 'menu-container single-row':'menu-container'}>
                {
                    page.map((val, index) => {
                        const {title, desc, icon} = val;
                        return (
                            <div className='menu-item' key={index}>
                                <img src={icon} alt='title'/>
                                <div>
                                  <h5>{title}</h5>
                                  <p>{desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}
  
export default Dropmenu
  