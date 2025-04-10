const Hero = () => {
  <div class="relative h-full w-full bg-white"></div>;
  return (
    <section
      id="hero"
      className="container-center-padding relative mt-16 flex items-center justify-center py-16 md:gap-x-8 lg:gap-x-16 xl:gap-x-32"
    >
      {/* <div className="blob-1 aspect-1/1 absolute left-1/2 top-1/2 -z-10 w-64 -translate-x-1/2 -translate-y-1/2">
        <div className="blob-container">
          <div className="blob-shape aspect-square w-64 rounded-[30%_70%_37%_63%/18%_31%_69%_82%] bg-red-500 bg-gradient-to-b from-violet-500 to-fuchsia-500 blur-2xl filter"></div>
        </div>
      </div> */}

      <div className="">
        <h1 className="text-5xl font-extrabold md:text-6xl">
          Hello 👋 <span className="block text-6xl md:text-7xl">I'm Abdi</span>
        </h1>
        <p className="mt-2 text-blax-900 md:max-w-sm lg:max-w-lg lg:text-balance dark:text-blax-200">A Front-End Developer who loves crafting stunning, user-friendly websites that bring ideas to life.</p>
        <div className="mt-4 flex gap-x-3">
          <button
            className="flex shrink-0 items-center gap-x-3 rounded-lg bg-blax-950 px-6 py-4 font-medium text-blax-200 transition-transform duration-100 active:scale-95 active:transition-transform active:duration-100"
            onClick={() => (window.location.href = "#contact")}
          >
            <span className="">Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-mail"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
            </svg>
          </button>
          <button className="cta--resume flex shrink-0 items-center gap-x-3 rounded-lg border-2 border-blax-950 px-6 py-3 font-medium hover:bg-blax-950 hover:text-blax-200 active:scale-95">
            <span className="">
              <span className="hidden md:inline">Download</span> Resume
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-file-cv"
            >
              <path
                stroke="none"
                d="M0 0h24v24H0z"
                fill="none"
              />
              <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2.5 8a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m6.743 .03a1 1 0 0 0 -1.213 .727l-.53 2.119l-.53 -2.119a1 1 0 1 0 -1.94 .486l1.5 6c.252 1.01 1.688 1.01 1.94 0l1.5 -6a1 1 0 0 0 -.727 -1.213m-1.244 -7.031l4.001 4.001h-4z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hidden w-56 md:block lg:w-80">
        <img
          className="h-full w-full"
          src="images/hero.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
