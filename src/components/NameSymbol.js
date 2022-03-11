import React from "react";
import "../css/NameSymbol.css";

function NameSymbol(props) {
  const inputComp = (
    <input
      value={props?.inputValue}
      onKeyDown={props?.handleKeyDown ?? null}
      placeholder={props.input}
      onChange={props?.handleInputChange}
      onBlur={props?.handleInputBlur}
      type={props?.isNumber ? "number" : "text"}
    />
  );

  return (
    <div>
      <div className="NameSymbol">
        <label>{props.label}</label>
        {props?.isIncrement ? (
          <div>
            <div className="input-inc">
              {inputComp}
              <div className="input-inc-icon-container">
                <p
                  className="input-inc-icon"
                  onClick={() =>
                    props?.handleIncrementClick(props?.inputValue + 5)
                  }
                >
                  <i className="fa fa-chevron-up"></i>
                </p>
                <p
                  className="input-inc-icon"
                  onClick={() =>
                    props?.handleDecrementClick(props?.inputValue - 5)
                  }
                >
                  <i className="fa fa-chevron-down"></i>
                </p>
              </div>
            </div>
          </div>
        ) : (
          inputComp
        )}
      </div>
      {props?.inputErr && <p className="error-text-mesg">{props?.inputErr}</p>}
    </div>
  );
}

export default NameSymbol;
