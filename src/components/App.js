import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import Filter from './Filter';

class App extends Component {
    state = {
        contacts: [
            {
                id: 'id-1',
                name: 'Rosie Simpson',
                number: '459-12-56',
            },
            {
                id: 'id-2',
                name: 'Hermione Kline',
                number: '443-89-12',
            },
            {
                id: 'id-3',
                name: 'Eden Clements',
                number: '645-17-79',
            },
            {
                id: 'id-4',
                name: 'Annie Copeland',
                number: '227-91-26',
            },
        ],

        filter: '',
    };

    addContact = obj => {
        const contact = {
            id: shortid.generate(),
            name: obj.name,
            number: obj.number,
        };
        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
        }));
    };

    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    render() {
        const normalizeFilter = this.state.filter.toLowerCase();
        const findContact = this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter),
        );

        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    onChange={this.changeFilter}
                />

                <ul>
                    {findContact.map(el => (
                        <li key={el.id}>
                            <span>{el.name}</span>:
                            <span> {el.number}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
