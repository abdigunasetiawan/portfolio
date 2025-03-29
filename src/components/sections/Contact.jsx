import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Lootie from "lottie-react";

import paperPlaneLight from "../../assets/svg/paper-plane-light.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSended, setIsSended] = useState(null);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEmail = (e) => {
    e.preventDefault();

    const sendMail = async () => {
      setIsSending(true);
      const email = await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      if (email.status == 200) {
        setIsSending(false);
        setIsSended(true);
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setIsSended(false);
        }, 2000);
      }
    };
    sendMail();
  };

  return (
    <section
      id="contact"
      className="container-center-padding py-16"
    >
      <h2 className="text-center text-4xl font-extrabold">Contact</h2>
      <form
        ref={formRef}
        className="mx-auto mt-8 flex max-w-3xl flex-col gap-y-4"
        action=""
        onSubmit={(e) => {
          handleEmail(e);
        }}
      >
        <div className="flex flex-col gap-y-2">
          <label
            className="font-semibold"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="form-input rounded-md border px-4 py-2.5"
            name="name"
            type="text"
            placeholder="Your username"
            required
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            className="font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form-input rounded-md border px-4 py-2.5"
            name="email"
            type="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-input h-20 rounded-md border px-4 py-2.5"
            name="message"
            id=""
            placeholder="Your message"
            required
            value={formData.message}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <button
          className="mt-2 flex items-center justify-center gap-x-3 rounded-lg bg-blax-950 px-4 py-4 text-blax-50"
          type="submit"
          disabled={isSending}
        >
          {!isSending && !isSended && (
            <>
              <span>Send Message</span>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-send"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </>
          )}
          {isSending && !isSended && (
            <>
              <span>Sending Your Message</span>
              <Lootie
                animationData={paperPlaneLight}
                loop={true}
                style={{ width: "24px", height: "24px" }}
              ></Lootie>
            </>
          )}
          {isSended && (
            <>
              <span>Message Sended</span>
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-send"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                  fill="none"
                />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
