import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Combobox = ({ options, onSelect, placeholder, propRef, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  const remainingOptions = options.filter(
    (option) => !filteredOptions.includes(option)
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsOptionSelected(false);
    setIsOpen(true);
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setIsOptionSelected(true);
    setIsOpen(false);
    onSelect(option);
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };
  const closeOptions = () => {
    setTimeout(() => {
      if (!isOptionSelected && !options.includes(inputValue)) {
        setInputValue("");
      }
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      <div className={`combobox-container ${isOpen ? "open" : ""}`}>
        <input
          type={"text"}
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          onClick={toggleOptions}
          onBlur={closeOptions}
          ref={propRef}
        />
        <FaAngleDown
          className={`arrow-icon ${isOpen ? "open" : ""}`}
          onClick={toggleOptions}
        />
        {isOpen && (
          <ul className="options-list">
            {filteredOptions.length > 0 &&
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="option"
                  onMouseDown={() => handleOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
            {remainingOptions.length > 0 &&
              remainingOptions.map((option, index) => (
                <li
                  key={index}
                  className={`option ${
                    inputValue === option ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </li>
              ))}
          </ul>
        )}
      </div>
      <style jsx>{`
        .combobox-container {
          position: relative;
          width: 100%;
          border: 1px solid lightgray;
          border-radius: 2rem;
          padding: 0 1rem;
          min-width: 8rem;
          flex: 1 1;
        }
        input {
          padding: 0.6rem 0rem;
          border: none;
          outline: none;
          width: 100%;
          font-weight: bold;
        }
        input:focus::placeholder {
          color: #650e3d;
        }
        input::placeholder {
          color: #650e3d60;
        }
        .arrow-icon {
          position: absolute;
          top: 50%;
          ${currentLanguage === "ar" ? "left:1rem;" : "right: 1rem;"}
          transform: translateY(-50%);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .arrow-icon.open {
          transform: translateY(-50%) rotate(180deg);
        }
        .options-list {
          position: absolute;
          width: 100%;
          background-color: white;
          border: 1px solid lightgray;
          border-top: none;
          max-height: 150px;
          overflow-y: auto;
          list-style: none;
          padding: 0;
          margin: 0;
          z-index: 10;
        }
        .options-divider {
          padding: 0.5rem 1rem;
          color: gray;
        }
        .option {
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-bottom: 1px solid lightgray;
        }
        .option:last-child {
          border-bottom: none;
        }
        .option.selected {
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  );
};

export default Combobox;
