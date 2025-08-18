function Footer() {
  return(
    <>
      <footer className="footer relative  mt-20">
  <div className="footer-links relative bg-[url('/images/footer-img\'.jpg')] ">
    <div className="absolute inset-0 bg-black/80 z-0 " />
    <div className="all-links flex flex-wrap md:flex-nowrap  p-5 sm:p-10    text-white   text-sm overflow-hidden bg-cover bg-center">
      <div className="link-1 relative  mt-5 mx-5 md:w-1/4">
        <ul>
          <li className="font-bold text-xl sm:text-2xl">ABOUT Baitussalam</li>
          <li className="w-10 border-b-2  mt-1 mb-5 border-orange" />
          <li>
            Baitussalam is a global welfare and educational movement rooted in
            Islamic values. It empowers communities through free education,
            humanitarian aid, and spiritual growth. Our mission is to serve
            humanity with sincerity, compassion, and excellence.
          </li>
        </ul>
      </div>
      <div className="link-2 relative mt-5 mx-5  md:w-1/4">
        <ul>
          <li className="font-bold text-xl sm:text-2xl">POPULAR COURSES</li>
          <li className="w-10 border-b-2 mt-1 mb-5 border-orange" />
          <li className="mb-3">PSDC</li>
          <li className="mb-3">Creative Graphic Design</li>
          <li className="mb-3">CCTV Technician</li>
          <li className="mb-3">Amazon Course</li>
          <li className="mb-3">Mobile app programming</li>
        </ul>
      </div>
      <div className="link-3 relative  mt-5 mx-5 md:w-1/4">
        <ul>
          <li className="font-bold text-xl sm:text-2xl">SUPPORT</li>
          <li className="w-10 border-b-2   mt-1 mb-5 border-orange" />
          <li className="mb-3">Apply</li>
          <li className="mb-3">Contact us</li>
          <li className="mb-3">Reviews</li>
          <li className="mb-3">Who we are</li>
        </ul>
      </div>
      <div className="link-4 relative   mt-5 mx-5 md:w-1/4     ">
        <ul>
          <li className="font-bold text-xl sm:text-2xl">NEWSLETTER</li>
          <li className="w-10 border-b-2  mt-1 mb-3 border-orange" />
          <li className="mt-10">
            <form action="" className="flex  ">
              <input
                type="email"
                placeholder="Enter your email"
                className="pl-5 p-2 w-full relative rounded-3xl  bg-white  text-black"
              />
              <button
                type="button"
                className="bg-orange absolute cursor-pointer text-white py-2.5 px-5 text-xs right-0 rounded-3xl hover:bg-white duration-700 "
              >
                Subscribe
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
    <div className="final-footer relative text-white  px-5 flex   flex-col sm:flex-row  sm:justify-between sm:items-center">
      <div className="social-icon  mt-5 sm:mt-0 flex">
        <ul className="flex justify-center items-center  ">
          <li className="mx-1 hover:text-orange cursor-pointer transition duration-700">
            <i className="bi bi-facebook" />
          </li>
          <li className="mx-1 hover:text-orange cursor-pointer transition duration-700">
            <i className="bi bi-whatsapp" />
          </li>
          <li className="mx-1 hover:text-orange cursor-pointer transition duration-700">
            <i className="bi bi-twitter-x" />
          </li>
          <li className="mx-1 hover:text-orange cursor-pointer transition duration-700">
            <i className="bi bi-instagram" />
          </li>
        </ul>
      </div>
      <p className="mt-5 sm:mt-0">Terms and Conditions - Privacy Policy</p>
      <h6 className="mt-5 sm:mt-0 text-orange">
        <a href="">Coded by ABDULLAH-SAAFI</a>
      </h6>
    </div>
  </div>
</footer>

    </>
  )
};

export default Footer