import CourseCard from "./CourseCard";
import ProjectCard from "./ProjectCard";

function App() {
  // name, age, uni , semester, city
  const name = "Keertan";
  const age = 23;
  const University = "SMIU";
  const semster = 6;
  const city = "Karachi";

  return (
    <div>
      <h2>Name: {name} </h2>
      <h2>Age: {age}</h2>
      <h2>University: {University} -- Semester {semster}th </h2>
      <h2>City: {city}</h2>
      <h1>------------------------------------------</h1>
      <CourseCard />
      <h1>------------------------------------------</h1>
      <ProjectCard />

    </div>
    )
}

export default App
