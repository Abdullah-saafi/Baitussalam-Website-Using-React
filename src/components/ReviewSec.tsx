function ReviewSec(){
  return(
    <>
      <section className="reviews py-10  flex flex-col items-center p  text-center mt-30  ">
  <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-green">
    -OUR REVIEWS-
  </h1>
  <p className="mb-6  font-extrabold text-2xl sm:text-4xl  text-black ">
    CHECK OUR STUDENTS REVIEWS
  </p>
  <div className="reviewes flex lg:px-9 flex-wrap md:flex-nowrap justify-center items-center    ">
    <div className="rev-01  lg:max-w-1/2 bg-h-white p-2  sm:p-5 rounded-2xl shadow-lg sm:m-2">
      <div className="flex ">
        <div className="user-img w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden  mb-2 mr-2 sm:mr-6">
          <img src="/images/user-1.jpg" alt="" />
        </div>
        <div className="user ">
          <div className="user-info flex flex-col items-start justify-center">
            <h1 className="text-green text-left font-extrabold text-xl sm:text-2xl">
              Abdullah Saafi
            </h1>
            <p className="text-orange  font-bold"> Student</p>
          </div>
          <div className="user-rating flex justify-between items-center text-orange ">
            <div className="stars flex items-center text-orange size-20">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <div className="rating w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white  ">
              <p>4.7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-cmnt text-xl  mt-2 text-left">
        The Baitussalam University website is modern, beautifully designed, and
        easy to navigate. It reflects Islamic values while offering a smooth and
        engaging user experience.
      </div>
    </div>
    <div className="rev-02  lg:max-w-1/2 bg-h-white p-2  mt-10  sm:p-5 rounded-2xl shadow-lg sm:m-2">
      <div className="flex ">
        <div className="user-img w-20 h-20 sm:w-32 sm:h-32 rounded-full overflow-hidden  mb-2 mr-2 sm:mr-6">
          <img src="/images/user-2.jpg" alt="" />
        </div>
        <div className="user ">
          <div className="user-info flex flex-col items-start justify-center">
            <h1 className="text-green text-left font-extrabold text-xl sm:text-2xl">
              Abdul Aziz Usto
            </h1>
            <p className="text-orange  font-bold"> Engineer</p>
          </div>
          <div className="user-rating flex justify-between items-center text-orange ">
            <div className="stars flex items-center text-orange size-20">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <div className="rating w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white  ">
              <p>4.7</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user-cmnt text-xl  mt-2 text-left">
        Baitussalam University's website combines elegance with functionality,
        making information easily accessible. Its professional design truly
        represents the institution's excellence.
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default ReviewSec