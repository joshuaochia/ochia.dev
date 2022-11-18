import React, { useState } from 'react';





const ContactForm = ({url}) => {
    const formURL = 'https://formspree.io/f/xrgdjwdr'

    const [formState, setFormState] = useState({
        fullName: '',
        email:'',
        message:''
    })

    const [inputStatus, setInputStatus] = useState({
        fullName: true,
        email: true,
        message: true
    })

    const [sentStatus, setSentStatus] = useState(false) 

   const inputOnChange = (e) => {
    e.persist();
    setFormState(prevData => ({...prevData, [e.target?.name] : e.target?.value }))

   }

   const  onSubmit =  async (e) => {
    e.preventDefault();

    if(!formState.email){
        setInputStatus(prevData => ({...prevData, email: false}))
        
    }

    if(!formState.fullName){
        setInputStatus(prevData => ({...prevData, fullName: false}))
   
    }

    if(!formState.message){
        setInputStatus(prevData => ({...prevData, message: false}))
        return;
    }

    const res = await fetch(formURL, {
        method: 'POST',
        body: JSON.stringify(formState),
        headers: {
            'Accept': 'application/json'
        }
   }
    )

    if(res.ok){
        setSentStatus(true)
    } else{
        const data = await res.json()
    }

    setFormState({
        fullName: '',
        email:'',
        message:''
    })

    setTimeout(() => {
        setSentStatus(false)
    },3000)

}

    return ( 
        <form  onSubmit={onSubmit}>
            <div className={`form-group`}>
                <input 
                    type="text"
                    name="fullName"
                    id="name"
                    onChange={inputOnChange}
                    value={formState.fullName}
              
                />
                <label htmlFor="name">Full Name</label>
            {!inputStatus.fullName && <span className="error">Fill this up</span>}
            </div>

            <div className={`form-group `}>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    onChange={inputOnChange}
                    value={formState.email}
       
                />
                <label htmlFor="email">Enter Your Email</label>
                {!inputStatus.email && <span className="error">Fill this up</span>}
            </div>
            <div className={`form-group `}>
                <textarea
                    name="message"
                    id="message"
                    onChange={inputOnChange}
                    value={formState.message}
                   
                >
                </textarea>
                <label htmlFor="message">Write your message here.</label> 
                {!inputStatus.message && <span className="error">Fill this up</span>}
            </div>

            <div className="form-submit">
                <button className="rn-button" type="submit" >
                    <span>Send Message</span>
                </button>
                {sentStatus && (
                    <p className={`form-output ${!sentStatus ? "errorMsg" : "success"}`}>
                        Sent successfully - I will get back to you shortly!
                    </p>
                )}
            </div>
        </form> 
    )
}

export default ContactForm;
