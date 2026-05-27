// import { useState } from "react";
import './App.css'
import Counter from './Counter'
import Profile from './Profile'
import StudentInfo from './StudentInfo'



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

    </>
  )
}

export default App
