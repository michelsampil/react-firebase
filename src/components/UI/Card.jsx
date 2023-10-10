import classes from "./Card.module.css";
import PropTypes from "prop-types";

const Card = ({ className, children }) => {
  return (
    <section className={`${classes.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};

export default Card;
