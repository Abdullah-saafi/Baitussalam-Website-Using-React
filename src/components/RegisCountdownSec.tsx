function RegisCountdownSec() {
  return(
    <>
      <section className="RegisCountDown relative bg-[url('/images/registration-bg.jpg')] overflow-hidden bg-cover bg-center my-10 mt-20 pt-20 pb-10 ">
  <div className="absolute inset-0 bg-green/50" />
  <div className="flex flex-col items-center justify-center h-full text-white px-5 relative z-1">
    <h1 className="text-2xl font-bold mb-2">Register Now</h1>
    <h1 className="text-3xl sm:text-5xl font-bold mb-2">
      Get 5+ Courses Free Access on Register
    </h1>
    <p className="text-1xl font-bold mb-4">
      ⏳ Limited Time &amp; Seats Available! Secure Your Spot Today Before It's
      Gone!
    </p>
    <div className="time-count flex    my-10 ">
      <div
        className="time border-2 rounded-full flex flex-col justify-center items-center h-16 w-16 sm:h-20 sm:w-20"
        id="sec"
      >
        <h1 className=" font-bold text-xl" id="hours">
          00
        </h1>
        <p className=" font-bold text-sm ">Hours</p>
      </div>
      <div
        className="mint border-2 rounded-full flex flex-col justify-center items-center h-16 w-16 sm:h-20 sm:w-20  mx-4 "
        id="mint"
      >
        <h1 className=" font-bold text-xl" id="mint">
          00
        </h1>
        <p className=" font-bold text-sm ">Mints</p>
      </div>
      <div
        className="sec border-2 rounded-full flex flex-col justify-center items-center h-16 w-16 sm:h-20 sm:w-20"
        id="hour"
      >
        <h1 className=" font-bold text-xl" id="sec">
          00
        </h1>
        <p className=" font-bold text-sm ">Seconds</p>
      </div>
    </div>
    <div className="btn bg-orange text-white py-3 px-6 rounded-xl text-1xl font-bold hover:bg-green duration-700">
      <a href="/">Conatct Info</a>
    </div>
  </div>
</section>

    </>
  )
  
}

export default RegisCountdownSec