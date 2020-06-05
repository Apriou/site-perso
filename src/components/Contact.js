import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/PhoneInTalk';

import '../css/Contact.css'

const Contact = (props) => {
    return(
        <div className="tabPanel">
            <p>
                <LocationOnIcon className="contact-icon"/>
                &nbsp;&nbsp;3 rue du croc 37000 TOURS
            </p>
            <p>
                <EmailIcon className="contact-icon"/>
                &nbsp;&nbsp;arnaud37.priou@gmail.com
            </p>
            <p>
                <PhoneIcon className="contact-icon"/>
                &nbsp;&nbsp;(+33)6 88 29 11 68
            </p>
         </div>    
    )
}

export { Contact }