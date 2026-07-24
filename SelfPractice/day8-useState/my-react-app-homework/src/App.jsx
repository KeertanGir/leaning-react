import './App.css'
import Cart from './Components/Cart'
import LikeButton from './Components/LikeButton'
import ProfileForm from './Components/ProfileForm'
import StudentRegistrationForm from './Components/StudentRegistrationFrom'
import ToggleCard from './Components/ToggleCard'

function App() {

  return (
    <>   
      <h2>Wellcome Keertan</h2>
      <LikeButton></LikeButton>
      <p>_________________________</p>
      <ProfileForm></ProfileForm>
      <p>_________________________</p>
      <Cart></Cart>
      <p>_________________________</p>
      <ToggleCard></ToggleCard>
      <p>_________________________</p>
      <StudentRegistrationForm></StudentRegistrationForm>
    
    </>
  )
}

export default App
