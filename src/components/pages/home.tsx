import '../../App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import HeadSection from '../HeadSection';
import Courses from '../Courses';
import WeBestSec from "../WeBestSec";
import InstructorSec from "../InstructorSec";
import RegisCountdownSec from"../RegisCountdownSec";
import ReviewSec from "../ReviewSec";
import NewsSec from "../NewsSec";
import Footer from "../Footer"

function Home() {

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

export default Home