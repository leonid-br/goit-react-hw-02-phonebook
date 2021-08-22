import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.css';

const ContactList = ({ contactsArr, deleteContact }) => {
    return (
        <ul className={style.list}>
            {contactsArr.map(el => (
                <ContactItem
                    key={el.id}
                    name={el.name}
                    number={el.number}
                    onDelete={() => deleteContact(el.id)}
                />
            ))}
        </ul>
    );
};

ContactItem.porpTypes = {
    contactsArr: PropTypes.array.isRequired,
};
export default ContactList;
