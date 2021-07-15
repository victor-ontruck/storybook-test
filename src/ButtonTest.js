import React from "react";
import PropTypes from "prop-types";

const ButtonTest = ({ className, children, text, ...props }) => {
  return (
    <div className={className} data-testid="button-test">
      <div className="button-test" {...props}>
        <button type="button">
          {text && <span>{text}</span>}
          {children}
        </button>
      </div>
    </div>
  );
};

ButtonTest.defaultProps = {
  text: "",
  className: "",
};

ButtonTest.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};
export default ButtonTest;
