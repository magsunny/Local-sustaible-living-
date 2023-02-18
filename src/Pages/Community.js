import React from 'react';
import {Container} from '../components/Container'

const texte =[
  {id:'1',
title:'Termine Termine Termine',
text:'Welche Veranstaltungen gibt in unserer schönen Stadt, die die Nachhaltigkeit fördern?' ,
listItem: [ 'Veranstaltung a',  'Veranstaltung b',  'Veranstaltung c',]
},

{id:'2',
title:'DIY',
text:'Ideen für das Herstellen von Kosmetik, Aufstrichen, Putzmitteln etc.' },

{id:'3',
title:'Vernetze Dich mit anderen Interessierten',
text:'Für einen Austausch von Dingen, Ideen, mobilen Untersätzen....' },
]

const Community = () => {
    return (
        <>
         <div className="bg-white">
         <div className="mx-auto grid grid-cols-1 items-center gap-y-16 gap-x-4 px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 lg:grid-cols-1">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Community Seite</h2>
                  <p className="mt-4 text-gray-500">Für einen Start in nachhaltiges Leben, ist eine Vernetzung hilfreich. Auf dieser Seite kannst Du Dich mit anderen Interessierten austauschen. Hier wird es zukünftig DIY Tipps und Veranstaltungshinweise geben.</p>
        
      {texte.map((content,index)=>(
        <Container
        key={content.id}
        title={content.title}
        text={content.text}
        // {content.listItem?.map((element) => (
        //   <div>
        //     <p className='mt-5 text-gray-500'>{element}</p>
        //   </div>
        // ))}
        />
      ))}
      
      </div>
      </div>   
            </>
        
        
    )
}
export default Community