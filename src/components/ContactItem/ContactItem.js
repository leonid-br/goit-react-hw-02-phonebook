import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDelete }) => {
    return (
        <li key={id} className={style.item}>
            <span>{name}</span>:
            <span className={style.number}>{number}</span>
            <button
                type="submit"
                onClick={onDelete}
                className={style.button}
            >
                Delete
            </button>
        </li>
    );
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
