

function Courses() {
  return(
    <>
      <section className="courses-section flex flex-col items-center flex-wrap  text-center px-3 py-10 my-30">
  <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-green">
    -Top Courses-
  </h1>
  <p className="mb-6  font-extrabold text-3xl sm:text-4xl  text-black ">
    DISCOVER OUR COURSES
  </p>
  <div className="courses-card flex flex-wrap w-full gap-2 sm:justify-center md:flex-nowrap ">
    <div className="course-1 relative bg-[url('/images/web-course.jpg')] flex items-end justify-center pb-9 text-white   w-full bg-no-repeat bg-cover sm:min-w-1/3 h-96  rounded-2xl overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-bold">PSDC</h1>
        <p className="text-1xl">Duration: 1 year</p>
      </div>
    </div>
    <div className="course-2 relative bg-[url('/images/mbl-course.jpg')] flex items-end justify-center pb-9 text-white   w-full bg-no-repeat bg-cover sm:min-w-1/3 h-96  rounded-2xl overflow-hidden cursor-pointer  transition-transform duration-500 hover:scale-105 ">
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Mobile app programming{" "}
        </h1>
        <p className="text-1xl">Duration: 1 year</p>
      </div>
    </div>
    <div className="course-3 relative bg-[url('/images/amzone-course.jpg')]  flex items-end justify-center pb-9 text-white   w-full bg-no-repeat bg-cover sm:min-w-1/3 h-96  rounded-2xl overflow-hidden cursor-pointer  transition-transform duration-500 hover:scale-105 ">
      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl font-bold">Amazon Course</h1>
        <p className="text-1xl">Duration: 6 Months</p>
      </div>
    </div>
  </div>
  <div className="btn">
    <button
      type="button"
      className="bg-orange text-white py-3 px-10 rounded-xl mt-10 text-1xl font-bold hover:bg-green duration-700"
    >
      View all
    </button>
  </div>
</section>

    </>
  )
}

export default Courses