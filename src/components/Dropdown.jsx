import { useState } from "react";
import "../styles/dropdown.scss";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect } from "react";
import { useRef } from "react";

export const Dropdown = ({ list, label, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={`dropdown_container ${isOpen ? 'background_gray' : ''}`}>
      <div className="dropdown_header" onClick={() => setIsOpen(!isOpen)}>
        <p className="dropdown_title">{label}</p>
        <IoIosArrowUp className={`dropdown_arrow ${isOpen ? "rotate" : ""}`} />
      </div>
      <div className="dropdown_list" style={{ maxHeight }} ref={contentRef}>
        <div className="dropdown_content">
          {list ? (
            list.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
