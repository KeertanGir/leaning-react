// import { useState } from "react";
import './App.css'
import Counter from './Components/Counter'
import Profile from './Components/Profile'
import StudentInfo from './Components/StudentInfo'
import InputShowName from './Components/InputShowName'
import CircketProductToggle from './Components/CircketProductToggle'
import StudentForm from './Components/StudentForm'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
            <h1>Count : { count }</h1>
            <button onClick={ () => setCount( count + 1 )} >+1</button>
            <button onClick={() => setCount( count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>reset</button>
      </div> */}

      <Counter />
      <p>_____________________________</p>
      <Profile Name={"Keertan"} Age={23} Online={true} />
      <p>_____________________________</p>
      <StudentInfo Name={"Keertan"} Marks={85} Passed={true}></StudentInfo>
      <p>_____________________________</p>
      <InputShowName ></InputShowName>
      <p>_____________________________</p>
      <CircketProductToggle></CircketProductToggle>

      <p>_____________ *********** FORM ************ ________________</p>
      <StudentForm />



    </>
  )
}

export default App
