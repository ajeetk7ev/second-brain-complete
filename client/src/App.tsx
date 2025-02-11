

import { Routes,Route } from "react-router-dom"
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
function App() {


  return (
    <div className=''>
       <Routes>
           <Route path="/" element={<div>Home page</div>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
       </Routes>
    </div>
  )
}

export default App
