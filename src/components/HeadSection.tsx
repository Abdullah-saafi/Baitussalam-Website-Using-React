import { useEffect, useRef, useState } from "react";

function HeadSection() {
  const navRef = useRef<HTMLElement | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const green = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-green")
      .trim();

    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY > 50) {
          navRef.current.style.backgroundColor = green;
        } else if (!isSidebarOpen) {
          // keep transparent only if sidebar is closed
          navRef.current.style.backgroundColor = "transparent";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSidebarOpen]);

  return (
    <header className="bg-[url('/images/hero-img.jpeg')] h-screen bg-cover bg-no-repeat bg-center overflow-hidden">
      <div className="absolute inset-0 bg-green/70" />

      <nav
        ref={navRef}
        id="nav-bar"
        className="flex fixed top-0 w-full justify-between items-center text-white lg:bg-transparent px-5 z-50 transition-colors duration-300"
      >
        <div className="logo">
          <a href="/html-files/home.html">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-[80px] object-contain"
            />
          </a>
        </div>

        <div className="main-nav hidden lg:block">
          <ul className="items-center space-x-4 flex font-semibold">
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Home
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-orange duration-700">
                Courses
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Requirements
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Blogs
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-orange duration-700">
                News
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Contact
              </a>
            </li>
            <li>
              <i className="bi bi-search cursor-pointer" />
            </li>
          </ul>
        </div>

        <div className="side-nav flex items-center justify-center">
          <ul className="space-x-4 hidden md:flex font-semibold">
            <li>
              <a href="/html-files/login.html">Login</a>
            </li>
            <li>
              <a href="#" className="bg-orange px-3 py-2 rounded-2xl text-white">
                Signup
              </a>
            </li>
            <li>
              <a href="/" className="flex items-center">
                <span>🇺🇸</span> <span> English</span>
                <i className="bi bi-caret-down-fill ml-1" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <i className="bi bi-moon-fill" />
                <span className="ml-1">Dark</span>
              </a>
            </li>
          </ul>
          <div
            id="menu-icon"
            className="lg:hidden sm:ml-6 font-semibold cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            Menu <i className="bi bi-list" />
          </div>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          id="side-bar"
          className="fixed top-16 right-0 w-32 sm:w-60 bg-green px-5 pb-10 z-50"
        >
          <ul className="space-y-4 text-white font-semibold mt-4">
            <li
              id="close-icon"
              className="text-right text-2xl font-extrabold cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            >
              <i className="bi bi-x" />
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Courses
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Blogs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                News
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Events
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-orange duration-700">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="bg-orange px-3 py-2 rounded-2xl text-white">
                Signup
              </a>
            </li>
          </ul>
        </div>
      )}

      <div className="Hero-text relative mt-80 ml-5 text-white md:text-5xl md:ml-20">
        <h1>
          Shape Your Future at{" "}
          <span className="text-orange font-bold text-2xl sm:text-5xl md:text-8xl">
            Baitussalam.
          </span>
          <br />
          Where Knowledge Meets Ambition.
        </h1>
      </div>
    </header>
  );
}

export default HeadSection;
