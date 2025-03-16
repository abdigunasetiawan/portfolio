const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 w-full border bg-white/50 backdrop-blur-md">
      <div className="container-center-padding flex h-16 items-center justify-between">
        <a className="text-2xl font-bold" href="">
          abdi.dev
        </a>
        <ul className="flex gap-x-3">
          <li>
            <a className="text-blax-900 font-medium" href="">
              about
            </a>
          </li>
          <li>
            <a className="text-blax-900 font-medium" href="">
              projects
            </a>
          </li>
          <li>
            <a className="text-blax-900 font-medium" href="">
              contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
