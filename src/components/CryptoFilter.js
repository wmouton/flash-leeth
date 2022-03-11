import React, { useState } from "react";
import "../css/CryptoFilter.css";

function CryptoFilter(props) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="cryptofilter crypto-filter"
      onClick={() => setShowMenu((prevState) => !prevState)}
    >
      <div
        className={`crypto-filter-label${
          showMenu ? " crypto-filter-label--showMenu" : ""
        }`}
      >
        <div>
          <span>
            <img
              src={props?.selectedImg}
              alt="list-item"
              className="crypto-filter-img"
            />
          </span>
          <span className="crypto-filter-label-txt">
            {" "}
            {props?.selectedItem}
          </span>
        </div>
        <i className="fa fa-chevron-down"></i>
      </div>
      {showMenu &&
        props?.optionsList?.map((item, index) =>
          item.text !== props?.selectedItem ? (
            <div
              key={`item-${index}`}
              className="crypto-filter-listItem"
              onClick={() => props?.handleOptionChange(item)}
            >
              <span>
                <img
                  src={item?.img}
                  alt="list-item"
                  className="crypto-filter-img"
                />
              </span>{" "}
              <span className="crypto-filter-listItem-text">{item?.text}</span>
            </div>
          ) : null
        )}
    </div>
  );
}

export default CryptoFilter;
