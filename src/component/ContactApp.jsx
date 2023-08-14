import React, { useState } from 'react'
import ContactList from './ContactList'
import ContactCard from './ContactCard'


let ContactApp =() => {
    let [state, setState] = useState({
        selectedContact:{}
    });

    const {selectedContact} = state;

    const rceiveContact = (contact) => {
        setState(() => ({
            selectedContact:contact
        }));
    }
  return (
    <React.Fragment>
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <p className="h3 text-success">
                         Contact App
                    </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur itaque, porro, delectus ut culpa ipsum perspiciatis molestias, vero velit explicabo ad nemo. Vero animi nam veniam beatae molestiae numquam odit.</p>
                </div>
            </div>
        </div>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-9">
                    <ContactList sendContact={rceiveContact}/>
                </div>
                <div className="col-md-3">
                    <ContactCard selectedContact={selectedContact} />
                </div>
            </div>

        </div>
    </React.Fragment>
  )
}

export default ContactApp