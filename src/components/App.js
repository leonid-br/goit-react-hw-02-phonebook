import { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import Heading from './Heading';

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

    addContact = ({ name, number }) => {
        const { contacts } = this.state;
        const normalizeName = name.toLowerCase();
        const checkedName = contacts.find(
            ({ name }) => normalizeName === name.toLowerCase(),
        );

        const newContact = {
            id: shortid.generate(),
            name,
            number,
        };

        if (checkedName) {
            return alert(
                `This contact "${name.toUpperCase()}" has already been added to your Phonebook`,
            );
        }

        this.setState(prevState => ({
            contacts: [newContact, ...prevState.contacts],
        }));
    };

    changeFilter = e => {
        this.setState({
            filter: e.currentTarget.value,
        });
    };

    findContact = () => {
        const { filter, contacts } = this.state;
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizeFilter),
        );
    };

    onDelete = idContact => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                ({ id }) => id !== idContact,
            ),
        }));
    };

    render() {
        const {
            addContact,
            changeFilter,
            findContact,
            onDelete,
        } = this;
        const { filter } = this.state;

        return (
            <Container>
                <Heading title={'Phonebook'} />
                <ContactForm onSubmit={addContact} />
                <Heading title={'Contacts'} />
                <Filter value={filter} onChange={changeFilter} />
                <ContactList
                    contactsArr={findContact()}
                    deleteContact={onDelete}
                />
            </Container>
        );
    }
}

export default App;
