import './App.css'
import FunctionComponent from './FunctionComponent'
import userContext from './useContext/userContext'
import UserContextComp from './useContext/UserContextComp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LinkComp from './reactRoute/LinkComp'
import DynamicRoute from './reactRoute/DynamicRoute'
import NestedRoute from './reactRoute/NestedRoute'
import Navbar from './reactRoute/Navbar'

import ReactForms from './ReactForms'
import UseRef from './UseRef'
import UseReducer from './UseReducer'
import Counter from './customHook/Counter'

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
          <Route path="/dynamic/:id" element={<DynamicRoute/>}/>

          <Rout path='/form' element={<ReactForms/>}/>

          <Route path='useref' element={<UseRef/>}/>
          <Route path='/usereducer' element={<UseReducer/>}/>
          <Route path='/custom' element={<Counter/>}/>

          <Route path='/nested' element={<NestedRoute/>}>
          <Route path="funComp" element={<FunctionComponent/>}/>
          <Route path="UserContext" element={<UserContextComp/>}/>

          </Route>
          
          <Route path='/nav' element={<Navbar/>}>
          <Route path='user-context' element={<UserContextComp/>}/>
          <Route path="fun-comp" element={<FunctionComponent/>}/>

          </Route>

          
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
