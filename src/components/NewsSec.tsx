function NewsSec(){
  return (
    <>
      <section className="news  flex flex-col items-center p  text-center mt-30 p-10  ">
  <h1 className="text-3xl font-bold mb-2 text-green">-OUR NEWS-</h1>
  <p className="mb-6  font-extrabold text-4xl  text-black ">OUR LATEST NEWS</p>
  <div className="new-update">
    <div className="news-1 md:flex  flex-wrap items-center justify-between border-1 border-gray-300 p-10 rounded-2xl shadow-lg ">
      <div className="img h-35 md:w-60 w rounded-2xl  overflow-hidden">
        <img src="/images/new-1.jpg" alt="" />
      </div>
      <div className="data md:w-1/3 text-left mt-5 md:ml-10 ">
        <p className="text-orange text-1xl font-medium"> June 21,2025</p>
        <h1 className="my-2 text-3xl font-bold">Creative Graphic Design</h1>
        <h6 className="  font-medium ">
          Learn to create stunning visuals using Photoshop, Illustrator, and
          Canva. Master design principles for logos, posters, and digital
          content.
        </h6>
      </div>
      <div className="btn md:w-1/3">
        <button
          type="button"
          className="bg-green text-white py-3 px-6 sm:px-10 rounded-3xl mt-10 text-sm sm:text-xl font-bold hover:bg-orange duration-700"
        >
          Read More
        </button>
      </div>
    </div>
    <div className="news-2 md:flex  flex-wrap items-center justify-between border-1 border-gray-300 p-10 rounded-2xl shadow-lg mt-10 ">
      <div className="img h-35 md:w-60  rounded-2xl  overflow-hidden">
        <img src="/images/new-2.jpg" alt="" />
      </div>
      <div className="data md:w-1/3 text-left mt-5 md:ml-10 ">
        <p className="text-orange text-1xl font-medium"> June 21,2025</p>
        <h1 className="my-2 text-3xl font-bold">CCTV Technician </h1>
        <h6 className="  font-medium ">
          Learn installation, configuration, and troubleshooting of CCTV
          systems. Gain hands-on skills for real-world security solutions.
        </h6>
      </div>
      <div className="btn md:w-1/3">
        <button
          type="button"
          className="bg-green text-white py-3 px-6 sm:px-10 rounded-3xl mt-10 text-sm sm:text-xl font-bold hover:bg-orange duration-700"
        >
          Read More
        </button>
      </div>
    </div>
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
};

export default NewsSec