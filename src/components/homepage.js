import React, { useState } from "react";
import { LuClipboardCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
function Indexpage() {
  const arr = [];
  // const xyz =

  const [random, setrandom] = useState("Generated Password");
  const [iconclass, seticonclass] = useState("hidden");
  const [iconclass2, seticonclass2] = useState("flex");
  // setrandom(arr.toLocaleString());
  const chars =
    "abcdefghijklmnopqrstuvwxyz123456789QWERTYUIOPASDFGHJKLZXCVBNM0!@#$%^&*()_+=<>?/";
  console.log(chars.length);
  var newpass = "";
  var rand = Math.random() * 82;
  var fl = Math.floor(rand);
  console.log(chars.charAt(fl));
  const generate10 = () => {
    for (var i = 0; i <= 10; i++) {
      var rand = Math.random() * 82;
      var fl = Math.floor(rand);
      var ch = chars.charAt(fl);
      console.log();
      arr.push(ch);
    }
    console.log();
    setrandom(arr.join("").toString());
    seticonclass2("flex");
    seticonclass("hidden");
  };
  const generate16 = () => {
    for (var i = 0; i <= 16; i++) {
      var rand = Math.random() * 82;
      var fl = Math.floor(rand);
      var ch = chars.charAt(fl);
      console.log();
      arr.push(ch);
    }
    console.log();
    setrandom(arr.join("").toString());
    seticonclass2("flex");
    seticonclass("hidden");
  };
  const copy = () => {
    navigator.clipboard.writeText(random);
    seticonclass("flex");
    seticonclass2("hidden");
  };
  const [show, setShow] = useState(false);
  return (
    <div
      className="bg-gray-100 overflow-y-hidden h-screen"
      style={{ minHeight: 700 }}
    >
      {/* Code block starts */}
      <div className="bg-gray-100 h-full mt-16">
        <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
          <div className="w-full sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-4xl sm:text-10xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
              Generate Secure
              <br></br>
              <span className="text-indigo-700">Passwords </span>
              with Ease
            </h1>
            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
              Create Strong, Randomized Passwords for Enhanced Security
            </p>
          </div>
          <div className="grid lg:flex justify-center items-center sm:block">
            <button
              onClick={generate10}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm mt-4"
            >
              Generate 10 Character Password
            </button>
            <button
              onClick={generate16}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm ml-4 mt-4"
            >
              Generate 16 Character Password
            </button>
          </div>
          <div className="flex">
            <h1 className="ml-4 mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
              {random}
            </h1>
            <button
              onClick={copy}
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-3 sm:px-10 border border-indigo-700 py-4 sm:py-4 text-sm ml-4 mt-4"
            >
              <LuClipboardCopy className={iconclass2} />
              <LuCopyCheck className={iconclass} />
            </button>
          </div>
        </div>
      </div>

      {/* Code block ends */}
    </div>
  );
}

export default Indexpage;
