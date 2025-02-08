// @copyright 2024 dev darshan
// @license Apache-2

import PropTypes from 'prop-types';

const ButtonPrimary = ({ href, target = '_self', icon, classes, label }) => {
  if (href) {
    return (
      <a href={href} target={target} className={` btn ${classes}`}>
        {label}
        {icon ? icon : undefined}
      </a>
    );
  } else {
    return (
      <button className={` btn  ${classes}`}>
        {label}
        {icon ? <span className='material-symbols-outlined'
        aria-hidden='true'>
            {icon}
        </span>: undefined
        }
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.element,
  classes: PropTypes.string,
  label: PropTypes.string,
};

export default ButtonPrimary;
