
import { useState } from 'react'
import SignIn from '../Components/Form/Login/SignIn'
import SignUp from '../Components/Form/Login/SignUp'


function App() {

  const [isSignIn, setCurrentForm] = useState(true);
  
  function handleCurrentForm(setFormDisplay : boolean) : void{
    setCurrentForm(setFormDisplay);
  }

  return (
    <>
      {isSignIn ? <SignIn handleCurrentForm={handleCurrentForm}/> : 
                  <SignUp handleCurrentForm={handleCurrentForm}/>}
    </>
  )
}

export default App
