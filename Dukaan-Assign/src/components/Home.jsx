import React from 'react';
import { AiOutlineSound } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdOutlineQuestionMark } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaRupeeSign } from 'react-icons/fa';
import { LuArrowDownUp } from 'react-icons/lu';
import { PiDownloadSimpleBold } from 'react-icons/pi';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

const Home = () => {
  return (
    <div class="p-4 sm:ml-64 bg-[#f0f0f2]">
      <div className="w-full px-4">
        <div className="flex justify-between items-center bg-white p-2 w-full">
          <div className="flex items-center">
            <h1>Payments</h1>
            <div className="ml-3 flex items-center justify-center">
              <p className="w-5 h-5 text-xs border border-gray-400 rounded-full flex justify-center items-center">
                <MdOutlineQuestionMark />
              </p>
              <p className="ml-1">How it works</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search features, tutorials, etc."
                className="bg-gray-200 border  border-gray-300 rounded-lg py-1.5 pl-10 pr-12 "
              />
              <div className="absolute inset-y-0 left-2 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6M3 9a6 6 0 1112 0 6 6 0 01-12 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center text-xl">
              <AiOutlineSound />
            </p>
            <p className="w-8 h-8 rounded-full bg-gray-300 flex justify-center items-center text-xl ml-3">
              <IoMdArrowDropdown />
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center my-4">
          <p className="text-xl font-bold">Overview</p>
          <div className="flex items-center p-1 border rounded-md bg-white text-sm border-gray-300">
            <p>Last Month</p>
            <span className="text-xl">
              <MdKeyboardArrowDown />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 py-4">
          <div className="px-4 py-2 shadow-lg rounded-lg bg-white text-blueGray-700">
            <p className="text-base font-normal">Online orders</p>
            <p className="mt-4 font-bold">231</p>
          </div>
          <div className="shadow-lg rounded-lg bg-white text-blueGray-700 px-4 py-2">
            <p className="text-base font-normal">Amount received</p>
            <p className="flex items-center mt-4">
              <FaRupeeSign />
              <span className="font-bold">23,92,312.19</span>
            </p>
          </div>
        </div>
        <h2 className="text-xl font-bold">Transations | This Month</h2>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-4">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700 p-2">
            <div class="px-2 py-4 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  {/* <h3 class="font-bold text-lg text-blueGray-700">
                    Page visits
                  </h3> */}
                  <div className="flex justify-between items-center">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search by order ID.."
                        className="border border-gray-300 rounded-lg py-2 pl-10 w-full"
                      />
                      <div className="absolute inset-y-0 left-2 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6M3 9a6 6 0 1112 0 6 6 0 01-12 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex items-center mr-4">
                      <div className="flex items-center border border-gray-400 py-0.5 px-1 rounded-md">
                        <p>Sort</p>
                        <LuArrowDownUp className="ml-2" />
                      </div>
                      <div className="border border-gray-400 py-1 px-1 rounded ml-2 text-xl">
                        <PiDownloadSimpleBold />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <table class="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr className="bg-gray-300">
                    <th class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                      Order ID
                    </th>
                    <th class="pl-36 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                      <p className="flex items-center">
                        <span>Order date</span>
                        <IoMdArrowDropdown className="text-xl" />
                      </p>
                    </th>
                    <th class="pl-40 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                      Order amount
                    </th>
                    <th class="pl-32 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-bold text-left bg-blueGray-100 text-blueGray-500 border-blueGray-200">
                      <p className="flex items-center">
                        <span>Transations fees</span>
                        <span className="w-3.5 h-3.5 rounded-full border border-black flex justify-center items-center ml-1">
                          !
                        </span>
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-emerald-500"></i>
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-down mr-2 text-orange-500"></i>
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-down mr-2 text-orange-500"></i>
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-emerald-500"></i>
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="font-bold NaN text-blue-500">#281209</span>
                      </div>
                    </td>
                    <td class="border-t-0 pl-36 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">7 July, 2023</div>
                    </td>
                    <td class="border-t-0 pl-48 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <FaRupeeSign /> 1,278.23
                      </div>
                    </td>
                    <td class="border-t-0 pl-52 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <i class="fas fa-arrow-up mr-2 text-red-500"></i>{' '}
                        <FaRupeeSign /> 22
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <div class="flex justify-center">
            <nav class="flex space-x-2" aria-label="Pagination">
              <ul>
                <li className="relative inline-flex items-center px-4 py-2 text-sm  border border-fuchsia-100 hover:border-violet-100 text-black font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                  <IoIosArrowBack /> Previous
                </li>
              </ul>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                1
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                ...
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700  bg-blue-400  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                10
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                11
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                12
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                13
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                14
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                15
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                16
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                17
              </li>
              <li class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white  hover:bg-blue-400 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                18
              </li>

              <li className="relative inline-flex items-center px-4 py-2 text-sm  border border-fuchsia-100 hover:border-violet-100 text-black font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10">
                Next <IoIosArrowForward />
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
