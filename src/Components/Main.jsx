import React from "react";
import DevTrack from "./DevTrack";
// import { useState } from "react";

function Main() {
  // const [readMore, setReadMore] = useState(false);
  return (
    <>
      <div className=" flex flex-col gap-6 px-32 mt-16">
        <div className=" flex flex-col gap-4 max-w-xl">
          <h1 className=" text-megaStackBlue font-bold text-3xl">
            One Bootcamp, 2 Tracks
          </h1>
          <p className=" text-base font-normal">
            The bootcamp is divided into two tracks for you to chose your fight
            better. You will learn the following topics.
          </p>
        </div>
        <div className=" flex justify-between max-w-6xl">
          <div>
            <p>Front-End Developer Track</p>
            <div className=" flex justify-between">
              <div>
                <DevTrack text={"HTML4"} />
                <DevTrack text={"CSS3"} />
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>JavaScript & DOM</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>Bootstrap/Tailwind CSS</span>
                </div>
              </div>
              <div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>ES6/ESNext</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>React</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>Context API</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>Redux</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="track-para">Back-End Developer Track</p>
            <div className=" flex justify-between">
              <div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>HTML4</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>CSS3</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>JavaScript & DOM</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>ES6</span>
                </div>
              </div>
              <div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>Node JS</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>Express JS</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>MongoDB/Mongoose</span>
                </div>
                <div>
                  <img src="./Files/blue-tick.png" alt="" class="tick" />
                  <span>Sequelize (MySQL)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4>Prerequisite to join the bootcamp</h4>
          <p>
            To take this class you don't need to know anything about coding. You
            just need to come with open mind. While we teach you all you need to
            know as a developer.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h3>Where and when?</h3>
          <p>
            Get to know when we are starting the bootcamp and where the boot
            camp physical class will hold
          </p>
        </div>
        <div className=" bg-blue-700">
          <div>
            <img src="./Files/physical.png" alt="" />
            <div>
              <p>Physical Class:</p>
              <p>N200,000.00</p>
            </div>
            <div>
              <p>Virtual Class:</p>
              <p>N150,000.00</p>
            </div>
          </div>
          <div>
            <img src="./Files/calendar.png" alt="" />
            <p>Class Starts on 6th June 2022</p>
            <p>Early bird discount ends on 31 May 2022</p>
          </div>
          <div>
            <img src="./Files/location.png" alt="" />
            <p>
              13, Alabi Street, Gbagada Phase 1, Pedro, Lagos, Lagos State,
              Nigeria
            </p>
          </div>
        </div>
        <div>
          <p>
            We are giving a 15% discount for early birds registered on or before
            31st May 2022
          </p>
        </div>
        <div>
          <h3>Let’s meet the Facilitator</h3>
          <div>
            <div>
              <img src="./Files/pfp.png" alt="" />
            </div>
            <div>
              <h4>Olanrewaju Olaboye</h4>
              <p>Full stack JavaScript Engineer, Founder @Megastack</p>
              <p>
                Hello awesome! I am Olanrewaju a Full stack software Engineer
                (NodeJs, Express, React, MongoDB, MySQL and Typescript) with 5
                years programming experience spanning over fintech, foodtech,
                edtech and legal tech. I have experience leading the team that
                developed legalbox.ng and also led Godark.ai team in building
                their cloud kitchen software.
              </p>
              <div>
                <div>
                  <img src="./Files/codementor.png" alt="" />
                </div>
                <div>
                  <img src="./Files/stack.png" alt="" />
                  <img src="./Files/git.png" alt="" />
                  <img src="./Files/linked.png" alt="" />
                  <img src="./Files/twitter.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Still, in doubt?</h2>
          <p>
            We have currated some questions you might need answers to, here are
            some of them to get you informed about the boot camp.
          </p>
          <img src="./Files/ss-arrbck.png" alt="" />
          <img src="./Files/ss-arrfor.png" alt="" />
        </div>
        <div>
          <div>
            <p>
              Helped me with my request, gave me advice through a new person's
              perspective regarding my coding style and was very helpful!
            </p>
            <img src="./Files/joey.png" alt="" />
            <p>Joey Leonardi</p>
          </div>
          <div>
            <p>
              AMAZING. Communication was 10/10 and Olanrewaju is an expert in
              his field. He should be your go-to. This is my first time using
              codementor and the experience was amazing!
            </p>
            <img src="./Files/filler.png" alt="" />
            <p>Najib Zreikat</p>
          </div>
          <div>
            <p>
              Boye continues to be excellent - besides resolving my problem he
              even identified some issues with my code that I hadn't realised
              were there. Also suggested ways to improve the code I had written.
            </p>
            <img src="./Files/richard.png" alt="" />
            <p>Richard Ross</p>
          </div>
          <div>
            <p>
              Olanrewaju has been keen and patient with helping me understand
              Typescript. He has helped explain concepts of Typescript. Highly
              recommend.
            </p>
            <img src="./Files/filler.png" alt="" />
            <p>Mimi N</p>
          </div>
          <div>
            <p>
              Olanrewaju is extremely knowledgeable, efficient, patient, and
              kind. He is an expert developer. He was able to understand my
              issue very quickly even though it was a very large app. We were
              able to solve the problem within an hour. I highly recommend
              Olanrewaju!
            </p>
            <img src="./Files/joey.png" alt="" />
            <p>Eric Gautreaux</p>
          </div>
          <div>
            <p>
              Olanrewaju helped me solved a tough problem with Cloudinary,
              Multer, JS and helped me deploy to Heroku. Multiple people had
              tried to solve it but failed. Hat off to Olanrewaju's coding
              skills and dedication to problem-solving!
            </p>
            <img src="./Files/filler.png" alt="" />
            <p>Ha Pham</p>
          </div>
          <div>
            <p>
              Olanrewaju helped me find the root cause of my issue with ordering
              resources with my rest API correctly. He also was very helpful in
              clarifying fundamental concepts in routing for my API using
              sequalize, expressjs, and nodejs.
            </p>
            <img src="./Files/richard.png" alt="" />
            <p>Sharif Tarver</p>
          </div>
          <div>
            <p>
              Really great mentor . Very quick to understand ideas and help you
              breakdown your thoughts.
            </p>
            <img src="./Files/filler.png" alt="" />
            <p>Billie Hussein</p>
          </div>
          <div>
            <p>
              Knowledgeable and willing to help. Explains what he's doing along
              the way. Olanrewaju has my recommendation.
            </p>
            <img src="./Files/joey.png" alt="" />
            <p>Kushtar Tynarbek</p>
          </div>
          <div>
            <p>
              Olanrewaju is very knowledgeable about Node.js, Postgres, and
              validation best practices. He was very helpful in debugging some
              issues I was experiencing while deploying a full-stack
              application. He is a diligent mentor, and I highly recommend his
              services!
            </p>
            <img src="./Files/filler.png" alt="" />
            <p>Kevin Johnson</p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h4>Have question for us?</h4>
          <p>
            We have currated some questions you might need answers to, here are
            some of them to get you informed about the boot camp.
          </p>
        </div>
        {/* <div>
            <div>
              {readMore ? (
                <div>
                  <p>How do I register?</p>{" "}
                  <p>
                    Click on register button below and follow the instructions
                    by supplying some info about you and selecting your medium
                    of choice( Physical or virtual) and also your track choice
                    (Frontend or Backend). Finally making payment via the
                    Paystack popup confirms your eligibility to the bootcamp.
                  </p>
                </div>
              ) : (
                <p>How do I register?</p>
              )}{" "}
              <button onClick={() => setReadMore(!readMore)}>
                {" "}
                {readMore ? (
                  <img src="./Files/plus.png" alt="" />
                ) : (
                  <img src="./Files/minus.png" alt="" />
                )}
              </button>
            </div>
            <div>
              {readMore ? (
                <div>
                  <p>How do I register?</p>{" "}
                  <p>
                    Click on register button below and follow the instructions
                    by supplying some info about you and selecting your medium
                    of choice( Physical or virtual) and also your track choice
                    (Frontend or Backend). Finally making payment via the
                    Paystack popup confirms your eligibility to the bootcamp.
                  </p>
                </div>
              ) : (
                <p>How do I register?</p>
              )}{" "}
              <button onClick={() => setReadMore(!readMore)}>
                {" "}
                {readMore ? (
                  <img src="./Files/plus.png" alt="" />
                ) : (
                  <img src="./Files/minus.png" alt="" />
                )}
              </button>
            </div>
          </div> */}
      </div>
      <div>
        <p>
          Now that you have seen what you stand to benefit for participating in
          this bootcamp
        </p>
        <p>What are you still waiting for?</p>
        <button type="">Register</button>
      </div>
    </>
  );
}

export default Main;
