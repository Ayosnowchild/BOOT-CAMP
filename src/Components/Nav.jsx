import React from "react";

function Nav() {
  return (
    <>
      <div className=" flex flex-col gap-32 bg-megaStackBlue px-32 text-white pb-20 pt-14">
        <div className="  flex flex-row justify-between items-center">
          <h4 className=" font-bold">BoyePanthera</h4>
          <button className=" border border-solid border-white rounded-t-lg rounded-b-lg w-24 h-12 p-3 font-medium text-base">
            Register
          </button>
        </div>
        <div className=" flex flex-col gap-6 max-w-xl">
          <h2 className=" font-light text-5xl">
            Coding Bootcamp<span className=" font-bold ">5.0</span>
          </h2>
          <h1 className=" font-bold text-5xl leading-15">
            Go from a total beginner to expert in 4 months
          </h1>
          <p className=" text-2xl leading-7 font-light">
            Learn coding and become proficient with a real life
            <br /> project to show in your portfolio.
          </p>
        </div>
        <div className=" flex gap-8">
          <div className=" flex flex-col gap-4 max-w-sm">
            <h3 className=" text-xl font-semibold">Life-time mentorship</h3>
            <p className=" text-base font-light">
              Get a lifetime mentorship program with the founder of this
              bootcamp. You can reach out for help when you are stuck.
            </p>
          </div>
          <div className=" flex flex-col gap-4 max-w-sm">
            <h3 className=" text-xl font-semibold">Code Review</h3>
            <p className=" text-base font-light">
              Get the opportunity of getting your code reviewed by top American
              Developers and Quality Assurance Engineer
            </p>
          </div>
          <div className=" flex flex-col gap-4 max-w-sm">
            <h3 className=" text-xl font-semibold">Developer Community</h3>
            <p className=" text-base font-light">
              Be part of the community of developers to collaborate, share
              knowledge, ideas, tips and tricks through peer learning community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
