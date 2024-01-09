import React from 'react';
import { IoBag } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { CiDeliveryTruck } from 'react-icons/ci';
import { LuUsers } from 'react-icons/lu';
import { AiOutlineSound } from 'react-icons/ai';
import { PiNavigationArrowFill } from 'react-icons/pi';
import { CiDiscount1 } from 'react-icons/ci';
import { IoIosColorPalette } from 'react-icons/io';
import { BsBuildings } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar-multi-level-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-blue-400 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li className="flex justify-between items-center">
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
                  <IoBag />
                </div>
                <span class="ms-3">
                  Nishyam <br /> <span className="underline">Visit store</span>
                </span>
              </a>
              <p className="text-3xl">
                <MdKeyboardArrowDown />
              </p>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <GoHome />
                </span>{' '}
                <span class="ms-3">Home</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Orders
                </span>
              </button>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <CiDeliveryTruck />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Delivery</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <AiOutlineSound />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Marketing</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <BsBuildings />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <FaWallet />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Payments</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <PiNavigationArrowFill />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Tools</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <CiDiscount1 />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Discounts</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <LuUsers />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Audience</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="text-2xl">
                  <IoIosColorPalette />
                </span>
                <span class="flex-1 ms-3 whitespace-nowrap">Appearance</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Plugins</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
