import React, { Component } from 'react'
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter'
import { CSSTransition } from 'react-transition-group';
import {FadeInLeft} from './animal/FadeInLeft';
import fadeTransition  from '../transition/fade.module.css'
import Notification from './alert/Notification'
import slideTransition from '../transition/slide.module.css'


class App extends Component {
    state = {
        isShow:false,
        isOpen:false,
    }
    
    toggleFilter = ()=> {
        this.setState (state=>({isOpen:!state.isOpen}))
    }
    
    render(){
        const {isOpen} = this.state
        return (
            <>
            <CSSTransition
                    timeout={500}
                    unmountOnExit
                    classNames={slideTransition}
                >
                 <Notification />
            </CSSTransition>
            <div>
                <FadeInLeft> <h1>Phonebook</h1> </FadeInLeft>
               <ContactForm onToggleFilter={this.toggleFilter}/>
                
                <h2>Contacts</h2>
                 {/* <CSSTransition in={isOpen} timeout={250} unmountOnExit classNames={fadeTransition}> */}
                    <Filter/>
                {/* </CSSTransition>  */}
                <ContactList />
                 </div> 
            </>
        )
   }   
}

export default App