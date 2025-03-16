const Contact = () => {
  return (
    <section className="container-center-padding py-16">
      <h2 className="text-center text-4xl font-extrabold">Contact</h2>
      <form className="mx-auto mt-8 flex max-w-3xl flex-col gap-y-4" action="">
        <div className="flex flex-col gap-y-2">
          <label className="font-semibold" htmlFor="name">
            Name
          </label>
          <input className="rounded-md border px-4 py-2.5" type="text" placeholder="Your username" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input className="rounded-md border px-4 py-2.5" type="email" placeholder="Your email" />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="message">Message</label>
          <textarea className="h-20 border px-4 py-2.5" name="message" id="" placeholder="Your message"></textarea>
        </div>
        <button className="flex items-center justify-center gap-x-3 rounded-lg bg-blax-950 px-4 py-4 text-blax-50" type="submit">
          <span>Send Message</span>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-send">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 14l11 -11" />
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
          </svg>
        </button>
      </form>
    </section>
  );
};

export default Contact;
