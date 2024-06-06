import { useState } from "react";
import "../styles/dropdown.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Dropdown = ({ list, label, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown_container">
      <div className="dropdown_header" onClick={() => setIsOpen(!isOpen)}>
        <p className="dropdown_title">{label}</p>
        
          {isOpen ? (
            <IoIosArrowDown className="dropdown_arrow" />
          ) : (
            <IoIosArrowUp className="dropdown_arrow" />
          )}
        
      </div>
      {isOpen && (
        <div className="dropdown_list">
          {list ? (
            list.map((item, index) => (
              <div key={index} className="dropdown_item">
                <p>{item}</p>
              </div>
            ))
          ) : (
            <p className="dropdown_description">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}
