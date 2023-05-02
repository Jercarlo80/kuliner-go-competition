import React, { useState } from "react";
// import { AiOutlineSearch } from 'react-icons/ai'
// import { AiOutlineClose } from 'react-icons/ai'
// import '../css/style.css'


const Search = ({ placeholder, data }) => {
//   const [filteredData, setFilteredData] = useState([]);
//   const [wordEntered, setWordEntered] = useState("");

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     setWordEntered(searchWord);
//     const newFilter = data.filter((value) => {
//       return value.name.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   const clearInput = () => {
//     setFilteredData([]);
//     setWordEntered("");
//   };
  return (
    <div class="relative bottom-[420px] left-[40px] flex min-h-screen flex-col justify-center overflow-hidden p-6 sm:py-12">
        <div class="relative px-6 pb-8 pt-10    sm:mx-auto sm:max-w-[320px] sm:px-10">
            <div class="">
            <form action="" class="relative">
                <input type="search" class="peer relative z-10 h-12 w-12 cursor-pointer rounded-full border-white bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[#0190ff] focus:pl-16 focus:pr-4" />
                <svg class="absolute inset-y-0 my-auto h-8 w-12 stroke-black px-3.5 peer-focus:border-[#0190ff] peer-focus:stroke-[#0190ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </form>
            </div>
        </div>
    </div>
  );
}

export default Search
