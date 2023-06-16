"use client"

import { useRef } from "react";
import Image from "next/image";
import useEventListener from "@/hooks/useEventListener";
import SearchManufacture from "./search-manufacture";

function SearchButton({ otherClass }: { otherClass: string }) {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
      <Image 
        src={'/magnifying-glass.svg'}
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyboard = (event: KeyboardEvent) => {
    if (inputRef.current) {
      if (event.key === 'k' || event.key === 'K' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        inputRef.current.focus();
      }
    }
  };

  useEventListener('keydown', handleKeyboard)
  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchManufacture />
      </div>
      <div className="searchbar__item">
        <Image
          src='/model-icon.png'
          alt="model-icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />

        <input 
          ref={inputRef}
          type="text"
          name="model"
          placeholder="Tiguan..."
          className="searchbar__input"
        />

        <SearchButton otherClass="sm:hidden" />
      </div>
      <SearchButton otherClass="max-sm:hidden" />
    </form>
  )
}

export default SearchBar