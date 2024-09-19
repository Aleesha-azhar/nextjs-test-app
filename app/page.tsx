"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles/Home.module.css";
import filter from "./public/images/filter.png";
import search from "./public/images/search.png";
import sort from "./public/images/sorting.png";
import map from "./public/images/map.png";
import location from "./public/images/loc.png";
import blueStar from "./public/images/blueStar.png";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div>
        <header className="bg-blue-500 h-16 w-full flex items-center justify-center">
          <h1 className="text-white text-2xl">My Header</h1>
        </header>

        <main className="p-4"></main>
        <main className="p-4">
          <section className={styles.bg}>
            <div className="w-full max-w-screen-lg flex items-center justify-between">
              <h2 className="text-3xl font-bold">Ferry operators</h2>
              <button
                className="bg-blue-600 hidden md:block text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={toggleFilter}
              >
                Book your Ticket
              </button>
            </div>
            <p className="text-lg text-gray-700">
              Discover the <span className="font-bold">57 ferry operators</span>{" "}
              we work with
            </p>
            <div className="flex justify-between">
              <div>
                <div className="flex space-x-4 mt-4">
                  <button
                    className="flex items-center border-solid border-slate-300 border-2 rounded-md p-2"
                    onClick={toggleFilter}
                  >
                    <Image
                      src={filter}
                      width={16}
                      height={16}
                      alt="filter icon"
                      className="mr-2"
                    />
                    <span>Filters</span>
                  </button>
                  <div className="relative flex items-center border-solid border-slate-300 border-2 rounded-md bg-white">
                    <select className="text-black px-4 py-2 rounded-md bg-white pl-10">
                      <option value="reviews">
                        Sort by: Reviews number (high first)
                      </option>
                      <option value="price">
                        Sort by: Price (low to high)
                      </option>
                      <option value="date">Sort by: Date (newest first)</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Image
                        src={sort}
                        width={16}
                        height={16}
                        alt="sort icon"
                      />
                    </div>
                  </div>
                  <div className="relative md:flex hidden items-center">
                    <input
                      type="text"
                      placeholder="Search"
                      className="text-black px-1 py-2 border-solid border-slate-300 border-2 rounded-md bg-white pl-10 w-24"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 md:flex items-center pointer-events-none">
                      <Image
                        src={search}
                        width={18}
                        height={18}
                        alt="search icon"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="md:flex hidden items-center border-solid border-slate-300 border-2 rounded-md p-2 ml-[310px]">
                      <Image
                        src={map}
                        width={18}
                        height={18}
                        alt="new button icon"
                        className="mr-2"
                      />
                      <span className="text-blue-300">Live Map View</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-6 ">
              <div className="col-span-4  rounded-md border border-gray-300 hidden md:block">
                <div className="p-4 ">
                  <div className="mb-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">Filter</span>
                    <span className="text-lg cursor-pointer">X</span>
                  </div>
                  <p className="font-bold mb-2">Operating in</p>
                  <div className="relative flex items-center border-solid border-slate-300 border-2 rounded-md bg-white">
                    <select className="w-full border border-gray-300 rounded-md py-2 pr-2 pl-8">
                      <option value="option1">Select a country</option>
                      <option value="option2">Greece</option>
                      <option value="option3">Oher</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Image
                        src={location}
                        width={16}
                        height={16}
                        alt="sort icon"
                        className="font-black"
                      />
                    </div>
                  </div>
                </div>
                <hr className="my-4 border-t border-gray-300 w-full" />
                <div className="my-4 p-4">
                  <p className="text-lg font-semibold mb-2">Ferry types</p>

                  <ul className="list-disc  space-y-2">
                    <li className="flex items-center">
                      <input type="checkbox" id="item1" className="mr-2" />
                      <label htmlFor="item1">Normal ferries</label>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" id="item2" className="mr-2" />
                      <label htmlFor="item2">High-speed ferries</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:col-span-8 space-y-4">
                <div className="bg-white p-4 rounded-md border border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center w-full bg-gray-100 p-2 rounded-md">
                      <Image
                        src={blueStar}
                        width={300}
                        height={300}
                        alt="card image"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 ml-[200px]">
                          Blue Star Ferries
                        </h3>
                        <div className="flex items-center bg-gray-100 p-2 rounded-md ml-[86px]">
                          <div className="flex text-yellow-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-600">
                            by 1,342 customers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 p-4 rounded-md">
                      <p className="font-bold">Operates in</p>
                      <p>Greece</p>
                    </div>
                    <div className="col-span-7 p-4 rounded-md">
                      <p>
                        Blue Star Ferries is currently the biggest ferry company
                        in Greece. It is a member of Attica Group, one of the
                        most significant companies in the Greek shipping
                        industry. Its fleet consists of vessels of the latest
                        technology and serves itineraries starting from the port
                        of Piraeus and heading to the islands of Cyclades
                        (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos
                        etc). Blue Star Ferries reaches over 50 destinations in
                        total. Even though Blue Star ...
                      </p>

                      <hr className="mt-2 mb-2" />
                      <button className="text-blue-300 ml-[122px]">
                        More about Blue Star Ferries
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center w-full bg-gray-100 p-2 rounded-md">
                      <Image
                        src={blueStar}
                        width={300}
                        height={300}
                        alt="card image"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 ml-[200px]">
                          Blue Star Ferries
                        </h3>
                        <div className="flex items-center bg-gray-100 p-2 rounded-md ml-[125px]">
                          <div className="flex text-yellow-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-600">
                            by 1,342 customers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 p-4 rounded-md">
                      <p>Content 1</p>
                    </div>
                    <div className="col-span-7 p-4 rounded-md">
                      <p>
                        Blue Star Ferries is currently the biggest ferry company
                        in Greece. It is a member of Attica Group, one of the
                        most significant companies in the Greek shipping
                        industry. Its fleet consists of vessels of the latest
                        technology and serves itineraries starting from the port
                        of Piraeus and heading to the islands of Cyclades
                        (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos
                        etc). Blue Star Ferries reaches over 50 destinations in
                        total. Even though Blue Star ...
                      </p>

                      <hr className="mt-2 mb-2" />
                      <button className="text-blue-300 ml-[122px]">
                        More about Blue Star Ferries
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center w-full bg-gray-100 p-2 rounded-md">
                      <Image
                        src={blueStar}
                        width={300}
                        height={300}
                        alt="card image"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 ml-[200px]">
                          Blue Star Ferries
                        </h3>
                        <div className="flex items-center bg-gray-100 p-2 rounded-md ml-[125px]">
                          <div className="flex text-yellow-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-600">
                            by 1,342 customers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 p-4 rounded-md">
                      <p>Content 1</p>
                    </div>
                    <div className="col-span-7 p-4 rounded-md">
                      <p>
                        Blue Star Ferries is currently the biggest ferry company
                        in Greece. It is a member of Attica Group, one of the
                        most significant companies in the Greek shipping
                        industry. Its fleet consists of vessels of the latest
                        technology and serves itineraries starting from the port
                        of Piraeus and heading to the islands of Cyclades
                        (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos
                        etc). Blue Star Ferries reaches over 50 destinations in
                        total. Even though Blue Star ...
                      </p>

                      <hr className="mt-2 mb-2" />
                      <button className="text-blue-300 ml-[122px]">
                        More about Blue Star Ferries
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
{
  /*"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles/Home.module.css";
import filter from "./public/images/filter.png";
import search from "./public/images/search.png";
import sort from "./public/images/sorting.png";
import map from "./public/images/map.png";
import location from "./public/images/loc.png";
import blueStar from "./public/images/blueStar.png";

export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div>
        <header className="bg-blue-500 h-16 w-full flex items-center justify-center">
          <h1 className="text-white text-2xl">My Header</h1>
        </header>

        <main className="p-4">
          <section className={styles.bg}>
            <div className="w-full max-w-screen-lg flex items-center justify-between">
              <h2 className="text-3xl font-bold">Ferry operators</h2>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={toggleFilter}
              >
                Book your Ticket
              </button>
            </div>
            <p className="text-lg text-gray-700">
              Discover the <span className="font-bold">57 ferry operators</span>{" "}
              we work with
            </p>
            <div className="flex justify-between">
              <div>
                <div className="flex space-x-4 mt-4">
                  <button
                    className="flex items-center border-solid border-slate-300 border-2 rounded-md p-2"
                    onClick={toggleFilter}
                  >
                    <Image
                      src={filter}
                      width={16}
                      height={16}
                      alt="filter icon"
                      className="mr-2"
                    />
                    <span>Filters</span>
                  </button>
                  <div className="relative flex items-center border-solid border-slate-300 border-2 rounded-md bg-white">
                    <select className="text-black px-4 py-2 rounded-md bg-white pl-10">
                      <option value="reviews">
                        Sort by: Reviews number (high first)
                      </option>
                      <option value="price">
                        Sort by: Price (low to high)
                      </option>
                      <option value="date">Sort by: Date (newest first)</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Image
                        src={sort}
                        width={16}
                        height={16}
                        alt="sort icon"
                      />
                    </div>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      placeholder="Search"
                      className="text-black px-1 py-2 border-solid border-slate-300 border-2 rounded-md bg-white pl-10 w-24"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 md:flex items-center pointer-events-none">
                      <Image
                        src={search}
                        width={18}
                        height={18}
                        alt="search icon"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center border-solid border-slate-300 border-2 rounded-md p-2 ml-[310px]">
                      <Image
                        src={map}
                        width={18}
                        height={18}
                        alt="new button icon"
                        className="mr-2"
                      />
                      <span className="text-blue-300">Live Map View</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 mt-6">
              <div className="col-span-4  rounded-md border border-gray-300">
                <div className="p-4">
                  <div className="mb-4 flex justify-between items-center">
                    <span className="text-lg font-semibold">Filter</span>
                    <span className="text-lg cursor-pointer">X</span>
                  </div>
                  <p className="font-bold mb-2">Operating in</p>
                  <div className="relative flex items-center border-solid border-slate-300 border-2 rounded-md bg-white">
                    <select className="w-full border border-gray-300 rounded-md py-2 pr-2 pl-8">
                      <option value="option1">Select a country</option>
                      <option value="option2">Greece</option>
                      <option value="option3">Oher</option>
                    </select>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Image
                        src={location}
                        width={16}
                        height={16}
                        alt="sort icon"
                        className="font-black"
                      />
                    </div>
                  </div>
                </div>
                <hr className="my-4 border-t border-gray-300 w-full" />
                <div className="my-4 p-4">
                  <p className="text-lg font-semibold mb-2">Ferry types</p>

                  <ul className="list-disc  space-y-2">
                    <li className="flex items-center">
                      <input type="checkbox" id="item1" className="mr-2" />
                      <label htmlFor="item1">Normal ferries</label>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" id="item2" className="mr-2" />
                      <label htmlFor="item2">High-speed ferries</label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-8 space-y-4">
                <div className="bg-white p-4 rounded-md border border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center w-full bg-gray-100 p-2 rounded-md">
                      <Image
                        src={blueStar}
                        width={300}
                        height={300}
                        alt="card image"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 ml-[200px]">
                          Blue Star Ferries
                        </h3>
                        <div className="flex items-center bg-gray-100 p-2 rounded-md ml-[86px]">
                          <div className="flex text-yellow-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-600">
                            by 1,342 customers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 p-4 rounded-md">
                    <p className="font-bold">Operates in</p>
                    <p>Greece</p>
                    </div>
                    <div className="col-span-7 p-4 rounded-md">
                      <p>
                        Blue Star Ferries is currently the biggest ferry company
                        in Greece. It is a member of Attica Group, one of the
                        most significant companies in the Greek shipping
                        industry. Its fleet consists of vessels of the latest
                        technology and serves itineraries starting from the port
                        of Piraeus and heading to the islands of Cyclades
                        (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos
                        etc). Blue Star Ferries reaches over 50 destinations in
                        total. Even though Blue Star ...
                      </p>

                      <hr  className="mt-2 mb-2"/>
                      <button className="text-blue-300 ml-[122px]">More about Blue Star Ferries</button>
                    </div>

                  </div>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center w-full bg-gray-100 p-2 rounded-md">
                      <Image
                        src={blueStar}
                        width={300}
                        height={300}
                        alt="card image"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 ml-[200px]">
                          Blue Star Ferries
                        </h3>
                        <div className="flex items-center bg-gray-100 p-2 rounded-md ml-[125px]">
                          <div className="flex text-yellow-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-600">
                            by 1,342 customers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 p-4 rounded-md">
                      <p>Content 1</p>
                    </div>
                    <div className="col-span-7 p-4 rounded-md">
                      <p>
                        Blue Star Ferries is currently the biggest ferry company
                        in Greece. It is a member of Attica Group, one of the
                        most significant companies in the Greek shipping
                        industry. Its fleet consists of vessels of the latest
                        technology and serves itineraries starting from the port
                        of Piraeus and heading to the islands of Cyclades
                        (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos
                        etc). Blue Star Ferries reaches over 50 destinations in
                        total. Even though Blue Star ...
                      </p>

                      <hr  className="mt-2 mb-2"/>
                      <button className="text-blue-300 ml-[122px]">More about Blue Star Ferries</button>
                    </div>

                  </div>
                </div>
                <div className="bg-white p-4 rounded-md border border-gray-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center w-full bg-gray-100 p-2 rounded-md">
                      <Image
                        src={blueStar}
                        width={300}
                        height={300}
                        alt="card image"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1 ml-[200px]">
                          Blue Star Ferries
                        </h3>
                        <div className="flex items-center bg-gray-100 p-2 rounded-md ml-[125px]">
                          <div className="flex text-yellow-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 .25a.75.75 0 0 1 .686.45l1.393 2.818 3.106.451a.75.75 0 0 1 .416 1.278l-2.246 2.188.53 3.093a.75.75 0 0 1-1.089.791L8 9.421l-2.77 1.459a.75.75 0 0 1-1.089-.791l.53-3.093-2.246-2.188a.75.75 0 0 1 .416-1.278l3.106-.451L7.314.7A.75.75 0 0 1 8 .25z" />
                            </svg>
                          </div>
                          <span className="ml-2 text-gray-600">
                            by 1,342 customers
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-5 p-4 rounded-md">
                      <p>Content 1</p>
                    </div>
                    <div className="col-span-7 p-4 rounded-md">
                      <p>
                        Blue Star Ferries is currently the biggest ferry company
                        in Greece. It is a member of Attica Group, one of the
                        most significant companies in the Greek shipping
                        industry. Its fleet consists of vessels of the latest
                        technology and serves itineraries starting from the port
                        of Piraeus and heading to the islands of Cyclades
                        (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos
                        etc). Blue Star Ferries reaches over 50 destinations in
                        total. Even though Blue Star ...
                      </p>

                      <hr  className="mt-2 mb-2"/>
                      <button className="text-blue-300 ml-[122px]">More about Blue Star Ferries</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
*/
}
