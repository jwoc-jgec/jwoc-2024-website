import React from "react";

function ContactUs() {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <h2 className="text-center font-bold text-5xl p-10 text-white">
        Contact Us
      </h2>

      <div className="flex w-4/5 xl:w-3/5 flex-col justify-center items-start md:flex-row">
        <div className=" text-white flex mt-10">
          <div className="md:mx-24 flex flex-col gap-y-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 mr-4"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <div>
                <p className="text-xl">Email</p>
                <p>contact.jwoc@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 mr-4"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              <div>
                <p className="text-xl">Location</p>
                <p>Jalpaiguri, West Bengal 735102, India</p>
              </div>
            </div>
          </div>
        </div>
        {/* form start */}
        <div className="w-full xl:w-1/2 py-10 flex flex-col justify-center items-center text-white">
          <form className="flex flex-col gap-y-4 w-full ">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-lg font-medium "
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-3  bg-white/20 backdrop-blur-xl text-white bg-opacity-10 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor="small-input"
                  className="block mb-2 text-lg font-medium "
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="small-input"
                  className="block w-full p-3  bg-white/20 backdrop-blur-xl text-white bg-opacity-10 rounded-md"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="small-input"
                className="block mb-2 text-lg font-medium "
              >
                Email
              </label>
              <input
                type="text"
                id="small-input"
                className="block w-full p-3  bg-white/20 backdrop-blur-xl text-white bg-opacity-10 rounded-md"
              />
            </div>

            <label htmlFor="message" className="block text-lg font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm bg-white/20 backdrop-blur-xl text-white bg-opacity-10 rounded-md"
              placeholder="Write your thoughts here..."
            ></textarea>
          </form>
          <button
            type="submit"
            className="text-white mt-4 bg-slate-700 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Send
          </button>
        </div>
        {/* form end */}
      </div>
    </div>
  );
}

export default ContactUs;
