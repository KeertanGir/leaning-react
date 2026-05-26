import StudentCard from "./StudentCard";
import NewStudentCard from "./Day7-StudentCard";

function App() {
    // const name = "Keertan";
    // const age = 23;
    // const city = "Karachi";

    
      const Students = [
        { name: "Keertan", age: 23, marks: 95, city: "Karachi", isPassed: true  },
        { name: "Esha", age: 22, marks: 95, city: "Karachi", isPassed: true },
        { name: "Chander", age: 24, marks: 49, city: "Karachi" , isPassed: false },
        { name: "Sham", age: 23, marks: 81, city: "Karachi", isPassed: true  }
      ]

    return(
      // <div>
      //   <h1>Hello {name}!</h1>
      //   <h1>Age : {age}</h1>
      //   <h1>City : {city}</h1>
      //   <h1>Next Year : {age + 1}</h1>
      // </div>
      <div>
        <h1>My React app</h1>
        <p>************************** Old ************************</p>
        <StudentCard />
        <p>************************** New ************************</p>
        {/* <NewStudentCard Name={"Keertan"} Age={23} Marks={95} City={"Karachi"} isPassed={true} />
        <NewStudentCard Name={"Esha"} Age={22} Marks={95} City={"Karachi"} isPassed={true} />     
        <NewStudentCard Name={"Chander"} Age={24} Marks={49} City={"Karachi"} isPassed={false} />
        <NewStudentCard Name={"Sham"} Age={23} Marks={81} City={"Karachi"} isPassed={true} />      */}
        <h2>Student List</h2>
        {
          Students.map(std => (
            <NewStudentCard 
              Name={std.name}
              Age={std.age}
              Marks={std.marks}
              City={std.city}
              isPassed={std.isPassed}
              />
          ))
        }
      </div>

    )
}

export default App;