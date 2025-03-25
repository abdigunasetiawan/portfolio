import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const hamburgerRef = useRef(null);
  const navigationLinks = useRef(null);
  const animatedLayer = useRef(null);

  const handleToggle = () => {
    setIsActive(!isActive);

    setTimeout(() => {
      if (navigationLinks.current.classList.contains("open")) {
        navigationLinks.current.classList.add("close");
        navigationLinks.current.classList.remove("open");
      } else {
        navigationLinks.current.classList.remove("close");
        navigationLinks.current.classList.add("open");
      }
    }, 200);
    animatedLayer.current.classList.toggle("active");
  };

  return (
    <header className="fixed left-0 top-0 w-full border bg-white/50 backdrop-blur-md">
      <div className="container-center-padding relative flex h-16 items-center justify-between">
        <a className="relative z-10 text-2xl font-bold" href="">
          abdi.dev
        </a>
        <div className="" ref={animatedLayer} id="animatedLayer"></div>
        <ul id="navigationLinks" ref={navigationLinks} className="absolute left-0 top-0 h-screen w-full flex-col items-center justify-center gap-y-12 p-4 lg:gap-x-6">
          <li>
            <a className="link-item text-2xl font-medium text-blax-900 lg:text-base" href="">
              about
            </a>
          </li>

          <li>
            <a className="link-item text-2xl font-medium text-blax-900 lg:text-base" href="">
              projects
            </a>
          </li>
          <li>
            <a className="link-item text-2xl font-medium text-blax-900 lg:text-base" href="">
              contact
            </a>
          </li>
        </ul>

        <div className="lg:hidden" ref={hamburgerRef} onClick={handleToggle}>
          <button className="relative z-10 rounded-md border-2 border-blax-800 p-1">
            {!isActive && (
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-4">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 6h10" />
                <path d="M4 12h16" />
                <path d="M7 12h13" />
                <path d="M7 18h10" />
              </svg>
            )}
            {isActive && (
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
