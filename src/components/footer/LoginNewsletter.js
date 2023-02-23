import React, { useState } from "react";
import Button from "../Button";
import axios from 'axios';


export default function LoginNewsletter() {

  const [newmail, setNewsletter] = useState('');

  const handleSubmit = (e) => {

    const configuration = {
      method: 'post',
      url: 'http://localhost:3000/newsletter',
      data: {
        newmail,
      },
      onSubmit: setNewsletter(''),
    };

    axios(configuration) // calls API
      .then((result) => {
        setNewsletter(''); // resets input fields to empty string
      })
      .catch((error) => {
        error = new Error();
        console.log('error');
      });

  }


  return (

    <div className="relative flex justify-center items-center">

      <input
        type="email"
        name="Mailadresse"
        placeholder="Mailadresse"
        value={newmail}
        onChange={(e) => setNewsletter(e.target.value)}
        className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
      />


      <Button
        type={'submit'}
        onClick={(e) => handleSubmit()}
        label={'Hier zum Newsletter anmelden'}
      />

    </div>

  )

}