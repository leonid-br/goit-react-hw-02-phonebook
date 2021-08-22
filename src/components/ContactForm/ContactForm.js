import { Component } from 'react';
import style from './ContactForm.module.css';
// import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = { name: '', number: '' };

    handelChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value,
        });
    };

    handelSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form
                onSubmit={this.handelSubmit}
                className={style.form}
            >
                <label className={style.lable}>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handelChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        className={style.input}
                    />
                </label>

                <label className={style.lable}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange={this.handelChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        className={style.input}
                    />
                </label>

                <button type="submit" className={style.button}>
                    Add contact
                </button>
            </form>
        );
    }
}

export default ContactForm;
