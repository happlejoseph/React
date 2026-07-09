import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ClassComponent from './ClassComponent'
import FunctionComponent from './FunctionComponent'
import Mounting from './Mounting'
import Removing from './Removing'
import Updating from './Updating'
import UseStateHook from './UseStateHook'
import UseEffectComp from './useEffect/UseEffectComp'
import UseEffectCounter from './useEffect/UseEffectCounter'
import UseEffectApi from './useEffect/UseEffectApi'
import ParentComp from './useEffect/ParentComp'
import userContext from './useContext/userContext'
import UserContextComp from './useContext/UserContextComp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LinkComp from './LinkComp'

function App() {

  const user = {
    name: "anu",
    age: "20",
    email: "anu@gmail.com"
  }
  return (
    <>
      <userContext.Provider value={user}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<FunctionComponent/>}/>
          <Route path="/user-context" element={<UserContextComp/>}/>
          <Route path="/link" element={<LinkComp/>}/>

          
      {/* <ClassComponent/> */}
      {/*  */}
      {/* <Mounting/> */}
      {/* <Updating/> */}
      {/* <Removing/> */}
      {/* <UseStateHook/>
      <UseEffectComp/>
      <UseEffectCounter/>
      <UseEffectApi/> */}
      {/* <ParentComp/> */}
      {/* <UserContextComp/> */}
      </Routes>
      </BrowserRouter>
      </userContext.Provider>
    </>
  )
}

export default App
