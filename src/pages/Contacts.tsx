import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setStatus("Sending...");

    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("user_name")?.toString().trim();
    const email = formData.get("user_email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    const validEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    if (!name) {
      setError("Name field cannot be empty.");
      setStatus(null);
      return;
    }

    if (!email) {
      setError("Email field cannot be empty.");
      setStatus(null);
      return;
    }

    if (!message) {
      setError("Message field cannot be empty.");
      setStatus(null);
      return;
    }

    if (!validEmail(email)) {
      setError("Please enter a valid email address.");
      setStatus(null);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        form.current?.reset();
        setStatus("Sent Success!");
        setTimeout(() => setStatus(null), 5000);
      },
      (error) => {
        console.error("FAILED...", error.text);
        setError("Something went wrong. Please try again.");
        setStatus(null);
      }
    );
  };

  const handleInputChange = () => {
    setError(null);
  };

  const renderMessage = () => {
    if (status === "Sending...") {
      return <p className="text-xs text-center text-white">{status}</p>;
    }
    if (status === "Sent Success!") {
      return <p className="text-xs text-center text-green-500">{status}</p>;
    }
    if (error) {
      return <p className="text-xs text-center text-red-500">{error}</p>;
    }
    return null;
  };

  return (
    <>
      <div className="w-1/2 pt-24" id="contacts">
        <Fade direction="down" triggerOnce={true}>
          <div className="flex-col flex items-center">
            <h1 className="text-4xl font-bold pb-4">Contact</h1>
          </div>
        </Fade>
      </div>
      <div className="pt-4 pb-8 w-1/2">
        <Fade direction="up" triggerOnce={true}>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col p-6 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto"
            >
              <label className="text-sm font-medium text-gray-100 pb-1">
                Name *
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
                placeholder="Enter your name"
                onChange={handleInputChange}
              />

              <label className="text-sm font-medium text-gray-100 pb-1 pt-3">
                Email *
              </label>
              <input
                type="text"
                name="user_email"
                id="user_email"
                className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
                placeholder="Enter your email"
                onChange={handleInputChange}
              />

              <label className="text-sm font-medium text-gray-100 pb-1 pt-3">
                Message *
              </label>
              <textarea
                name="message"
                id="message"
                className="p-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
                placeholder="Write your message here"
                onChange={handleInputChange}
              />

              <div className="pt-2 min-h-10">{renderMessage()}</div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Send"
                  className="py-2 px-4 bg-gray-900 text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                />
              </div>
            </form>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contact;
