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

function App() {

  return (
    <>
      <ClassComponent/>
      {/* <FunctionComponent/> */}
      {/* <Mounting/> */}
      {/* <Updating/> */}
      {/* <Removing/> */}
      {/* <UseStateHook/>
      <UseEffectComp/>
      <UseEffectCounter/>
      <UseEffectApi/> */}
      <ParentComp/>
    </>
  )
}

export default App
