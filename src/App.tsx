
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeadSection from './components/HeadSection';
import Courses from './components/Courses';
import WeBestSec from "./components/WeBestSec";
import InstructorSec from "./components/InstructorSec";
import RegisCountdownSec from"./components/RegisCountdownSec";
import ReviewSec from "./components/ReviewSec";
import NewsSec from "./components/NewsSec";
import Footer from "./components/Footer"

function App() {

  return (
    <>
    <HeadSection />
    <Courses/>
    <WeBestSec/>
    <InstructorSec/>
    <RegisCountdownSec/>
    <ReviewSec/>
    <NewsSec/>
    <Footer/>
    </>
  )
}

export default App