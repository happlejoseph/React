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
import CounterData from './redux/Counter'
import CounterRTK from './redux/CounterRTK'
import MessageApp from './redux/MessageApp'
import GetData from './GetData'
import UserList from './redux/UserList'

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
          <Route path='/redux' element={<CounterData />}/>
          <Route path='/redux-rtk' element={<CounterRTK/>}/>
          <Route path='/message' element={<MessageApp/>}/>
          <Route path='/axiosGet' element={<GetData/>}/>
          <Route path='/userlist' element={<UserList/>}/>

          <Route path='/form' element={<ReactForms/>}/>

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
