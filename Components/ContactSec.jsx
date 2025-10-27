import React from "react";
import FoundMe from "./FoundMe";
// import emailjs from '@emailjs/browser';

const ContactSec = () => {
  //  const [name, setName] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [message, setMessage] = useState("");

  //  const handleSubmit=(e)=>{
  //   e.preventDefault();

  //   const serviceId='service_kk8oaup';
  //   const templateId='template_gl1ty45';
  //   const publicKey='_rNn5IEkWwKYVICfA';

  //  const templateParams={
  //   from_name:name,
  //   from_email:email,
  //   to_name:'Portfolio',
  //   from_message:message
  //  };

  //  emailjs.send(serviceId,templateId,templateParams,publicKey)
  //  .then((reponse)=>{
  //   console.log('Email sent successfully',reponse);
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  //  }).catch((erro)=>{
  //   console.log('Error sending email',erro);
  //  });

  //  };

  return (
    <section
      id="contact"
      className="mt-28 text-white md:px-16 cursor-pointer px-4 gap-10 w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-2xl font-bold text-center">
        Contact <span className="text-[#ed072a]">Me</span>
      </h1>
      <p className="text-gray-300 lg:text-center">
        Here a few ways to get in touch with me: I'm always open to discussions
        and collaborations, <br /> so feel free to reach out to me on any of the
        following platforms.
      </p>
      <div className="w-full md:flex items-center justify-center gap-10 relative">
        {/* leftform */}
        <div className="lg:w-1/3 lg:mb-0 mb-3 flex flex-col space-y-5">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Email</h1>
              <a href="mailto:Bouba.Sisu@proton.me" className="text-xs">
                Bouba.Sisu@proton.me
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
            </span>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Phone</h1>
              <a href="http://Wa.me/+212695632657" className="text-xs">+212 695 632 657 </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 bg-[#9b061c] hover:scale-125 transition-all duration-300 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </span>
            <div className="flex flex-col justify-center">
              <h1 className="font-semibold">Location</h1>
              <p className="text-xs">1465 Tilila, Agadir, Maroc</p>
            </div>
          </div>
          <div className="flex flex-col ml-7 mt-8">
            <h2>Connect With Me</h2>
            <div className="flex items-center mt-2 gap-2">
              <a href="https://www.linkedin.com/in/boubacar-bah-a5b849278/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin-icon lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bouba_bah224/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100004883298025">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* rightform */}
        <div className="flex flex-col space-y-3 justify-center md:w-1/3 items-center rounded-lg shadow-xl bg-[#542d3371] p-4 ">
          <h1 className="text-xl font-semibold">Send a Message</h1>
          <form
            className="flex flex-col space-y-2"
            action="https://formspree.io/f/mrbkljrn"
            method="POST"
          >
            <div className="flex flex-col space-y-2  p-2 text-white">
              <label className="text-sm text-center">Your Name</label>
              <input
                type="text"
                placeholder="Bah Boubacar"
                name="name"
                className="w-full p-2 bg-[#0f141a5e] rounded-lg outline-none "
              />
            </div>
            <div className="flex flex-col space-y-2  p-2 text-white">
              <label className="text-sm text-center">Your Email</label>
              <input
                type="text"
                placeholder="Email@example.com"
                name="email"
                className="w-full p-2 bg-[#0f141a5e] rounded-lg outline-none "
              />
            </div>
            <div className="flex flex-col space-y-2  p-2 text-white">
              <label className="text-sm text-center">Your Message</label>
              <textarea
                placeholder="Message"
                name="message"
                className="w-full rounded-lg bg-[#0f141a5e] p-2 text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#9b061c] rounded-lg flex items-center hover:scale-110 transition-all duration-300 text-xl p-2 justify-center"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <FoundMe />
    </section>
  );
};

export default ContactSec;
