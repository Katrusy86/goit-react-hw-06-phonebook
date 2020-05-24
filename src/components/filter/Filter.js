import React from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import styles from './filter.module.css'

const Filter = ({value, onFilterContact}) => (
    <input className={styles.addContactForm} type="text" value={value} onChange={e=>onFilterContact(e.target.value)} placeholder="Find contacts by name"/>
);

const mapStateToProps = state =>({
    value:state.filter
})

const mapDispatchToProps = {
    onFilterContact:actions.filterContact
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);