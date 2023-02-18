import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Dynamic = () => {
  return (
    <div className="h-max bg-slate-200 lg:flex lg:items-start">
      <div className="bg-slate-200 pt-20 px-10 lg:mb-8	lg:w-1/2">
        <div className="bg-white p-3 lg:h-3/5 lg:w-full md:w-3/5 lg:p-5">
          <div className="flex gap-x-5 w-full ">
            <div>
              <FaMoneyBillWave />
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-bold ">Billi Design</h2>
              <a
                className="text-slate-400 "
                href="https://bani.africa/billidesign"
              >
                https://bani.africa/billidesign
              </a>
              <h3 className="font-medium	mt-4 mb-2">Payment description</h3>
              <p className="mb-4 text-sm text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit
              </p>
              <hr />
            </div>
          </div>
          <div className="flex md:w-1/4 justify-around">
            <GrFacebook /> <GrTwitter /> <GrInstagram /> <AiOutlineWhatsApp />
          </div>
        </div>
        <div className="bg-white mt-6 h-max p-4 lg:w-full md:w-3/5 ">
          <h2 className="text-lg font-semibold mb-3">Customer's details</h2>
          <form className="w-full max-w-lg ">
            <div className="flex flex-wrap -mx-3 lg:mb-2 md:mb-2 mb-6 lg:items-center">
              <div className="lg:w-full">
                <label
                  class="block uppercase tracking-wide text-gray-700 flex text-xs font-normal mb-2 ml-3"
                  for="grid-first-name"
                >
                  Your Phone Number<p className="text-red-600	">*</p>
                </label>
                <div className="flex items-center ml-3 lg:w-full">
                  <div className="relative mb-2 lg:w-full">
                    <select class="block appearance-none w-full lg:w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div class="w-full lg:w-full md:w-1/2 px-3 md:mb-0 h-2/3">
                    <input
                      type="Number"
                      class="appearance-none block w-full lg:w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      placeholder="Phone-Number"
                    />
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-full md:w-3/5 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 flex text-xs font-normal mb-2"
                  for="grid-last-name"
                >
                  full-name<p className="text-red-600	">*</p>
                </label>
                <input
                  class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="FIRST-NAME"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 lg:w-full md:mb-0 mb-6 md:w-60">
              <div class="w-full px-3 lg:w-full lg:mx-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 flex text-xs font-normal mb-2"
                  for="grid-password"
                >
                  last-NAME <p className="text-red-600 ">*</p>
                </label>
                <input
                  class="appearance-none block lg:w-full w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="LAST-NAME"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2 md:flex-col lg:flex-col">
              <div class="w-full md:w-3/5 px-3 mb-6 md:mb-0 lg:mb-4 lg:w-full">
                <label
                  class="block uppercase flex tracking-wide text-gray-700 text-xs font-normal mb-2"
                  for="grid-city"
                >
                  Email-address <p className="text-red-600	">*</p>
                </label>
                <input
                  class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="EMAIL"
                />
              </div>
              <div class="w-full md:w-2/3 lg:w-full px-3 mb-6 md:mb-0 ">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-normal mb-2"
                  for="grid-zip"
                >
                  message
                </label>
                <textarea
                  class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="WRITE A MESSAGE HERE"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-8 bg-white mx-10 lg:mt-20 lg:mx-0 lg:w-2/5">
        <p className="p-3 font-medium">Payment for product</p>
        <p className="font-thin text-sm pl-3 lg:text-lg lg:font-normal">Total</p>
        <div className="flex h-2/5 justify-between lg:justify-start items-center my-4">
          <input
            class="appearance-none block w-3/12 lg:w-20 bg-gray-200 text-gray-700 text-center border rounded py-2 ml-4 leading-tight focus:outline-none focus:bg-white"
            disabled
            placeholder="NGN"
          />
          <input
            class="shadow appearance-none border lg:w-3/4 rounded mr-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Input Amount"
          />
        </div>
        <button class="bg-blue-500 w-11/12 mx-3 lg:mb-4 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
          Pay
        </button>
      </div>
    </div>
  );
};

export default Dynamic;
