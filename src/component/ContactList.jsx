import React, { useState } from 'react'

import '../App'

import ProductServices from '../component/services/ProductServices'

let ContactList = (props) => {
  let [state, setState] = useState({
    contacts: ProductServices.getAllProducts()
  });

  const {contacts} = state;

  const clickConnect = (contact) => {
    props.sendContact(contact);

  }
  return (
    <React.Fragment>
      <table className='table table-striped text-center table-hover'>
        <thead className='bg-dark text-white'>
          <tr>
            <th>SNO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.length > 0 && contacts.map(contact => {
              return(
                <tr key={contact.id} onClick={() =>clickConnect(contact)}>
                  <td>{contact.id}</td>
                  <td>{contact.first_name + " " + contact.last_name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.cell}</td>
                  <td>{contact.location}</td>

                </tr>
              )

            })
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default ContactList