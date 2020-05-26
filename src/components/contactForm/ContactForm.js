import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux'
import action from '../../redux/actions'
import styles from './contactForm.module.css'
import slideTransition from '../../transition/slide.module.css'
import Alert from '../alert/Alert'
import Notification from '../alert/Notification'
import actions from '../../redux/actions';

class ContactForm extends Component{
    state = {
        name:'',
        number:'',
        isShow:false,
        isOpen: false
    };


    handleChange = e =>{
        const {name,value}=e.target;
        this.setState({
            [name]:value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const result = this.props.contacts.filter((contact)=>contact.name === this.state.name)
        if(result.length > 0){
            this.NotificationMessage(); 
            return
        }  
        console.log(result);
        (this.state.name !== '' && this.state.number !== '' )?(       
        this.props.onAddContact({...this.state})
        ): this.alertMessage();
        this.setState({
            name:'',
            number:''
        })
    };


    alertMessage = ()=> {
        this.setState (prevState=>({isShow:!prevState.isShow}))
    }


    NotificationMessage = ()=> {
        this.setState (prevState=>({isOpen:!prevState.isOpen}))
    }

    render() {
        const {name, number, isShow, isOpen}=this.state
            return (
                <>
                <CSSTransition
                    in={isOpen}
                    timeout={500}
                    unmountOnExit
                    classNames={slideTransition}
                >
                <Notification name={name} />
                </CSSTransition>

                <CSSTransition
                    in={isShow}
                    timeout={500}
                    unmountOnExit
                    classNames={slideTransition}
                >
                <Alert/>
                </CSSTransition>
                <form className={styles.addContactForm} onSubmit = {this.handleSubmit}>
                    <label className={styles.label}> 
                        Name
                        <input className={styles.input__field} type="text" value = {name} name="name" onChange={this.handleChange} placeholder="Enter your name "/>
                    </label>
                    <label className={styles.label}> 
                        Number
                        <input className={styles.input__field} type="tel" value = {number} name="number" onChange={this.handleChange} placeholder="Enter your phone"/>
                    </label> 
                    <button className={styles.button} type="submit" onClick={this.props.onToggleFilter}>Add contact</button>
                    </form>
                </>
            )
            } 
}

const mapStateToProps = (state)=> ({
    contacts:state.contacts
})

const mapDispatchToProps = {
    onAddContact:actions.addContact
}



ContactForm.propTypes = {
    name:PropTypes.string,
    number:PropTypes.number
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)