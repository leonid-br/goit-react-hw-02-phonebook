import PropTypes from 'prop-types';
import style from './Heading.module.css';

const Heading = ({ title }) => (
    <h2 className={style.title}>{title}</h2>
);

Heading.propTypes = { title: PropTypes.string.isRequired };

export default Heading;
