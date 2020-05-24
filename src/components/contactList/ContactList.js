import React from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import PropTypes from 'prop-types'
import Contact from '../contact/Contact'
import slideTransition from '../../transition/slide.module.css'
import styles from './contactlist.module.css'

// const ContactFilter = (contacts, filter) => {this.props.contacts.filter(contact=>contact.name.toLowerCase().includes(this.props.filter.toLowerCase()))}

const ContactList = ({items, onDeleteContact}) => (
    <TransitionGroup component="ul" unmountonexit="true" className={styles.phoneBookList}>
        {items.map(item =>(
            <CSSTransition key={item.id} timeout={250} classNames={slideTransition}>
                <li className={styles.contact} key={item.id}>
                    <Contact {...item}
                    onDeleteContact= {()=>onDeleteContact(item.id)}
                    />
                </li>
            </CSSTransition>
        ))}
        
    </TransitionGroup>
);

const mapStateToProps = (state) => ({
     items:state.contacts.filter(contact=>contact.name.toLowerCase().includes(state.filter.toLowerCase()))
})

const mapDispatchToProps = {
    onDeleteContact: actions.deleteContact
}

ContactList.propTypes = {
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired}).isRequired),
    onDeleteContact:PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);