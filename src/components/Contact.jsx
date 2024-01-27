import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
const Contact = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k8ui0mq",
        "template_x9h9tvn",
        form.current,
        "vYZIllxcy1vcRfN08"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message sent successfully!");
          setErrorMessage(null);
          setTimeout(() => {
            setSuccessMessage(null); // Clear success message after 5 seconds
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage(null); // Clear any previous success messages
          setErrorMessage("Error sending message. Please try again.");
          setTimeout(() => {
            setErrorMessage(null); // Clear error message after 5 seconds
          }, 5000);
        }
      );
    e.target.reset();
  };

  return (
    <section className="py-16 lg:section bg-slate-800" id="contact">
        <h1 className=" text-center font-bold text-slate-100 mb-10 text-xl ">Contact Me</h1>
      <div className="container mx-auto w-4/6">
        <div className="flex flex-col lg:flex-row">
          {/* form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white text-white focus:border-accent transition-all"
              type="text"
              name="user_name"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white text-white focus:border-accent transition-all"
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button type="submit" className="btn btn-lg bg-slate-600 text-slate-100 h-10 w-40 rounded-sm hover:scale-105 transition-all hover:border border-slate-100">
              Send
            </button>
            {successMessage && (
            <div className="bg-green-500 text-white p-4 rounded-md mt-4">
              {successMessage}
            </div>
          )}
           {errorMessage && (
            <div className="bg-red-500 text-white p-4 rounded-md mt-4">
              {errorMessage}
            </div>
          )}
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
