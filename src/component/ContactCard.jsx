import React from 'react'

let ContactCard = (props) => {
  let { selectedContact } = props
  return (
    <div>
      {
        Object.keys(selectedContact).length > 0 &&
        <div className="card shadow-lg sticky-top text-center">
          <img src={selectedContact.picture} alt={selectedContact.picture} className='img-fluid' />
          <div className="card-body">
            <ul className='list-group'>
              <li className='list-group-item'>
                {selectedContact.first_name} {selectedContact.last_name}
              </li>
              <li className='list-group-item'>{selectedContact.email}</li>
              <li className='list-group-item'>{selectedContact.location}</li>

            </ul>

          </div>
        </div>
      }
    </div>
  )
}

export default ContactCard