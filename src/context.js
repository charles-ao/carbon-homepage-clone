import React, { useState, useContext, useEffect } from 'react';
import {persons, dropLinks, footer} from './data';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loadDropmenu, setLoadDropmenu] = useState(false)
  const [loadSidebar, setLoadSidebar] = useState(false)
  const [dropData, setDropData] = useState([])
  const [personData, setPersonData] = useState([])
  const [footerData, setFooterData] = useState([])
  const [sideDrop, setSideDrop] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState([])

  useEffect(() => {
    setDropData(dropLinks)
    setPersonData(persons)
    setFooterData(footer)
  }, [])
  
  const  openDropmenu = (text, coordinates) => {
      const tempData = dropData.filter(val => val.service === text)
      setPage(tempData[0].items)
      setLocation(coordinates)
      setLoadDropmenu(true)
  }

  const  closeDropmenu = () => {
      setLoadDropmenu(false)
  }

  const  toggleSide = () => {
    setLoadSidebar(!loadSidebar)
  }

  const toggleSideDrop = () => {
    setSideDrop(!sideDrop)
  }



  return (
    <AppContext.Provider
      value={{
        loadDropmenu,
        dropData,
        personData,
        loadSidebar,
        sideDrop,
        footerData,
        toggleSideDrop, 
        toggleSide,
        openDropmenu,
        closeDropmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
