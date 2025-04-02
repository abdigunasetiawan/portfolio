import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isMenuToggleActive, setisMenuToggleActive] = useState(false);
  const [isAnimatedLayerActive, setIsAnimatedLayerActive] = useState(false);
  const [isDarkMode, setisDarkMode] = useState(localStorage.getItem("theme") ? (localStorage.getItem("theme") == "dark" ? true : false) : true);
  const hamburgerRef = useRef(null);
  const navigationLinks = useRef(null);
  const animatedLayer = useRef(null);

  const links = [
    {
      label: "about",
      href: "#about",
    },
    {
      label: "skills",
      href: "#skills",
    },
    {
      label: "projects",
      href: "#projects",
    },
    {
      label: "contact",
      href: "#contact ",
    },
  ];

  const handleCloseDrawer = () => {
    if (window.innerWidth > 1024) {
      return;
    }
    setisMenuToggleActive(false);
    setIsAnimatedLayerActive(false);
    navigationLinks.current.classList.add("close");
    navigationLinks.current.classList.remove("open");
  };

  // saat hamburger toggle diklik
  const handleMenuToggle = () => {
    setisMenuToggleActive(!isMenuToggleActive);

    setTimeout(() => {
      if (navigationLinks.current.classList.contains("open")) {
        navigationLinks.current.classList.add("close");
        navigationLinks.current.classList.remove("open");
      } else {
        navigationLinks.current.classList.remove("close");
        navigationLinks.current.classList.add("open");
      }
    }, 200);
    setIsAnimatedLayerActive(!isAnimatedLayerActive);
  };

  const handleDarkMode = () => {
    // cek apakah ada key theme dilocalstorage
    if (!localStorage.getItem("theme")) {
      // jika tidak ada,
      // buat key dan set default value menjadi dark,
      // update state isDarkMode
      // kemudian return
      localStorage.setItem("theme", "dark");
      setisDarkMode(true);
      // handleDarkModeClass("dark");
      return;
    }

    // jika ada
    setisDarkMode(!isDarkMode);
  };

  // use effect dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // saat komponen dimount
  useEffect(() => {
    const handleResize = () => {
      // cek lebar, apakah lebih besar dari 1024 (dekstop mode)
      if (window.innerWidth > 1024) {
        // reset state dan class
        setIsAnimatedLayerActive(false);
        setisMenuToggleActive(false);
        navigationLinks.current.classList.remove("open");
        navigationLinks.current.classList.remove("close");
      }

      // update localstorage
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // saat layar berubah

  return (
    <header className="fixed left-0 top-0 w-full border-b bg-white/50 backdrop-blur-md dark:border-b-slate-100/10 dark:bg-[#0C0C0C]/50">
      <div className="container-center-padding relative flex h-16 items-center justify-between">
        {/* 1 Child */}
        <a
          className="relative z-10 text-2xl font-bold dark:text-blax-200"
          href=""
        >
          abdi.dev
        </a>
        {/* Child dissapear */}
        <div
          className={`${isAnimatedLayerActive ? "active" : ""} bg-white dark:bg-blax-950`}
          ref={animatedLayer}
          id="animatedLayer"
        ></div>
        <div className="flex items-center gap-x-4">
          <ul
            id="navigationLinks"
            ref={navigationLinks}
            className="absolute left-0 top-0 h-screen w-full flex-col items-center justify-center gap-y-12 p-4 lg:gap-x-6"
          >
            {links.map((link) => (
              <li key={link.label}>
                <a
                  className="link-item text-2xl font-medium text-blax-900 lg:text-base dark:text-blax-200"
                  href={link.href}
                  onClick={handleCloseDrawer}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <div
            className=""
            onClick={handleDarkMode}
          >
            <button className="relative z-10 rounded-md border-2 border-blax-800 p-1">
              {!isDarkMode && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-moon"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
              )}
              {isDarkMode && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-sun"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                </svg>
              )}
            </button>
          </div>

          <div
            className="lg:hidden"
            ref={hamburgerRef}
            onClick={handleMenuToggle}
          >
            <button className="relative z-10 rounded-md border-2 border-blax-800 p-1">
              {!isMenuToggleActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-4"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path d="M7 6h10" />
                  <path d="M4 12h16" />
                  <path d="M7 12h13" />
                  <path d="M7 18h10" />
                </svg>
              )}
              {isMenuToggleActive && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                >
                  <path
                    stroke="none"
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
