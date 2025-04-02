const Hero = () => {
  return (
    <section className="container-center-padding mt-16 flex items-center justify-between py-16">
      <div className="">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          Hello 👋 <span className="block text-6xl md:text-7xl">I'm Abdi</span>
        </h1>
        <p className="mt-2 text-blax-900 md:max-w-sm lg:max-w-lg lg:text-balance">A Front-End Developer who loves crafting stunning, user-friendly websites that bring ideas to life.</p>
        <div className="mt-4 flex gap-x-3">
          <button className="flex shrink-0 items-center gap-x-3 rounded-lg bg-blax-950 px-6 py-4 font-medium text-blax-100" onClick={() => (window.location.href = "#contact")}>
            <span className="">Contact Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-mail">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
            </svg>
          </button>
          <button className="flex shrink-0 items-center gap-x-3 rounded-lg border-2 border-blax-950 px-6 py-3 font-medium">
            <span className="">
              <span className="hidden md:inline">Download</span> Resume
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-file-cv">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2.5 8a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m6.743 .03a1 1 0 0 0 -1.213 .727l-.53 2.119l-.53 -2.119a1 1 0 1 0 -1.94 .486l1.5 6c.252 1.01 1.688 1.01 1.94 0l1.5 -6a1 1 0 0 0 -.727 -1.213m-1.244 -7.031l4.001 4.001h-4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden w-56 md:block lg:w-80">
        <img className="h-full w-full" src="images/hero.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
