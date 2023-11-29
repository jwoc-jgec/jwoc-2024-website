import React from "react";

function page() {
  return (
    <section>
      <div className=" text-white py-8">
        <div className="container mx-auto flex flex-col items-start md:flex-row my-6">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-0 sm:px-8">
            <p className=" text-yellow-300 pb-2 xl:text-xl uppercase tracking-loose">
              Working Process
            </p>
            <p className="text-3xl xl:text-5xl font-black  mb-4">
              JWOC 2024 Timeline
            </p>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              Here’s your guide to the JWOC process. Go through all the steps to
              know the exact process of JWOC.
            </p>
            <a
              href="#timeline"
              className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky" id="timeline">
            <div className=" mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden px-0 py-10 sm:p-10 h-full">
                <div
                  className="border-2-2 border-yellow-555 sm:right-[50%] absolute h-full border"
                  style={{
                    position: "absolute",
                    // right: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div
                  className="border-2-2 border-yellow-555 sm:left-[50%] absolute h-full border"
                  style={{
                    position: "absolute",
                    // left: "50%",
                    border: "2px solid #FFC100",
                    borderRadius: "1%",
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row ml-5 sm:flex-row-reverse items-center left-timeline">
                  <div className="order-2 sm:order-1 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4 text-left sm:text-right">
                    <p className="mb-3 text-base text-yellow-300">
                      20 Dec - 14 Jan
                    </p>
                    <div className="mb-3 font-bold text-2xl md:text-2xl">
                      Mentee Registration
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The period when aspiring individuals sign up to
                      participate as mentees in the program.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse sm:flex-row ml-5 sm:ml-0 items-center w-full right-timeline">
                  <div className="order-1 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-yellow-300">
                      20 Dec - 7 Jan
                    </p>
                    <div className="mb-3 font-bold text-2xl md:text-2xl">
                      Mentor Registration
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The timeframe dedicated to mentors signing up to offer
                      guidance and support to mentees. Mentors often provide
                      details about their expertise, availability, and the areas
                      in which they can offer guidance.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row sm:flex-row-reverse ml-5 sm:ml-0  items-center w-full left-timeline">
                  <div className="sm:order-1 order-2 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4  text-left sm:text-right">
                    <p className="mb-3 text-base text-yellow-300"> 10 Jan</p>
                    <div className="mb-3 font-bold text-2xl md:text-2xl">
                      Project Announced
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The official announcement of the projects or initiatives
                      available for mentees to work on. This phase includes
                      providing details about the projects, objectives, and the
                      technologies or skills required.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center flex-row-reverse sm:flex-row ml-5 sm:ml-0 w-full right-timeline">
                  <div className="order-1 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">
                      10 Dec - 14 Jan
                    </p>
                    <div className="mb-3 font-bold  text-2xl md:text-2xl text-left">
                      Community Bonding
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      A period before the active project work begins, where
                      participants, including mentors and mentees, get to know
                      each other, establish rapport, and potentially discuss
                      project ideas or objectives informally.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row sm:flex-row-reverse ml-5 sm:ml-0  items-center w-full left-timeline">
                  <div className="sm:order-1 order-2 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4  text-left sm:text-right">
                    <p className="mb-3 text-base text-yellow-300">25 Jan</p>
                    <div className="mb-3 font-bold text-2xl md:text-2xl">
                      Coding Phase 1 starts
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The commencement of the initial coding phase where mentees
                      begin working on their projects.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center flex-row-reverse sm:flex-row ml-5 sm:ml-0 w-full right-timeline">
                  <div className="order-1 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">15 Feb</p>
                    <div className="mb-3 font-bold  text-2xl md:text-2xl text-left">
                      Coding Phase 2 starts
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The subsequent phase following the initial phase, where
                      more intensive coding and development take place. Mentees
                      usually focus on implementing functionalities, refining
                      features, and addressing any challenges encountered.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row sm:flex-row-reverse ml-5 sm:ml-0  items-center w-full left-timeline">
                  <div className="sm:order-1 order-2 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4  text-left sm:text-right">
                    <p className="mb-3 text-base text-yellow-300">25 Feb</p>
                    <div className="mb-3 font-bold text-2xl md:text-2xl">
                      Coding Ends
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The conclusion of the coding period, indicating that
                      mentees must finalize their projects and prepare for
                      submission. This phase often involves testing, bug fixing,
                      documentation, and ensuring that the project meets the
                      required criteria.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center flex-row-reverse sm:flex-row ml-5 sm:ml-0 w-full right-timeline">
                  <div className="order-1 w-1/12 sm:w-5/12"></div>
                  <div className="order-1 w-full sm:w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-yellow-300">28 Feb</p>
                    <div className="mb-3 font-bold  text-2xl md:text-2xl text-left">
                      Results
                    </div>
                    <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                      The announcement of the outcomes or results of the
                      projects. This phase involves evaluation, judging, and
                      declaring the successful completion of the projects,
                      potentially leading to awards, certifications, or further
                      opportunities based on the performance.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
