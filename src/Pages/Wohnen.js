import React from 'react';
import {Container} from '../components/Container'

const texte =[
  {id:'1',
title:'blabla',
text:'siebenacht' },

{id:'2',
title:'bhuhu',
text:'neunzehn' }
]

const Wohnen = () => {
    return (
        <>
          <h1> Wohnen page</h1>
      {texte.map((content,index)=>(
        <Container
        key={content.id}
        title={content.title}
        text={content.text}

        />
      ))};
      

            </>
        
        
    )
};
export default Wohnen;