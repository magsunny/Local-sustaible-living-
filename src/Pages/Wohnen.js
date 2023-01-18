import React from 'react';
import {Container} from '../components/Container'

const texte =[
  {id:'1',
title:'Hier Überschrift eins',
text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' },

{id:'2',
title:'und hier die zweite Überschrift',
text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr' }
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