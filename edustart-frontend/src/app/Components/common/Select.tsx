import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid"; // Import your dropdown icon

const Select: React.FC<{
  options: Array<string>;
  onSelect: (option: string) => void;
  customButton: React.ReactNode;
}> = ({ options, customButton = null, onSelect = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const selectButton = (
    <div className="h-full" onClick={() => setIsOpen(!isOpen)}>
      {customButton}
    </div>
  );

  return (
    <div className="relative inline-block text-left">
      <div className="h-full">
        {customButton ? (
          selectButton
        ) : (
          <span
            className="rounded-md shadow-sm cursor-pointer inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption || "Select an option"}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </span>
        )}
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
