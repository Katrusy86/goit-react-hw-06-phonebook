import React, { Component } from 'react'
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter'
import {FadeInLeft} from './animal/FadeInLeft';



class App extends Component {

    render(){
        return (
            <>
            <div>
                <FadeInLeft> <h1>Phonebook</h1> </FadeInLeft>
                <ContactForm />
                <h2>Contacts</h2>
                <Filter/>
                <ContactList />
                 </div> 
            </>
        )
   }   
}

export default App