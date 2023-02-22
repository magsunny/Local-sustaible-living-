import React, { useState } from "react";
import Button from "../Button";
import axios from 'axios';


const LoginNewsletter = (props) => {


  // use state for input field content
  const [newmail, setNewsletter] = useState('');
  //const [isRegister, setRegister] = useState(false);


  // sends information to server on clicking submit button or enter
  const handleSubmit = (e) => {
    //e.preventDefault(); // prevents refreshing whole page
    const configuration = { //data contains request body for backend
      method: 'post',
      url: 'http://localhost:3000/newsletter', // endpoint 
      data: {
        newmail,
      },
    }
    axios(configuration) // calls API
      .then((result) => {
        setNewsletter(''); // resets input fields to empty string
     
//  setRegister(true);
//})
//.catch((error) => {
//  error = new Error();
//  console.log(error);
})
}



  return (

    <div className="relative flex justify-center items-center">

      <input
        type="email"
        Name="Mailadresse"
        placeholder="Mailadresse"
        value={newmail}
        onChange={(e) => setNewsletter(e.target.value)}
        className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
      />


      <Button
        type={'submit'}
        onClick={(e) => handleSubmit()}

      //    {isRegister ? (
      //      <p>Anmeldung erfolgreich</p>
      //      ) : (
      //      <p>Noch nicht angemeldet</p>
      //    )}


        label={'Hier zum Newsletter anmelden'}
      />

    </div>

  )
}
export default LoginNewsletter