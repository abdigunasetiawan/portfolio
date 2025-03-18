import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const hamburgerRef = useRef(null);
  const navigationLinks = useRef(null);

  console.log(navigationLinks);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="fixed left-0 top-0 w-full border bg-white/50 backdrop-blur-md">
      <div className="container-center-padding relative flex h-16 items-center justify-between">
        <a className="relative z-10 text-2xl font-bold" href="">
          abdi.dev
        </a>
        <ul id="navigationLinks" ref={navigationLinks} className="xg absolute left-0 top-0 hidden h-screen w-full flex-col items-center justify-center gap-y-12 bg-white p-4 lg:gap-x-3">
          <li>
            <a className="text-2xl font-medium text-blax-900" href="">
              about
            </a>
          </li>
          <li>
            <a className="text-2xl font-medium text-blax-900" href="">
              projects
            </a>
          </li>
          <li>
            <a className="text-2xl font-medium text-blax-900" href="">
              contact
            </a>
          </li>
        </ul>

        <div ref={hamburgerRef} onClick={handleToggle}>
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
