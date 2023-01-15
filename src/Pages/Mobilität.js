import React from 'react';


const Mobilität = () => {
  
    return (
       <>
      
            <div>
            <div className="bg-white">
  <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Variable Mobiliät in Hamburg</h2>
      <p className="mt-4 text-gray-500">Kennst Du schon die App: HVV Switch ? Wie findest Du den schnellsten Weg durch Hamburg mit dem Fahrrad? Wo kannst Du Dein E-Auto laden?<br></br> Nützliche Links für Deinen nachhaltigen Weg durch die Stadt.</p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">Fahradrouten durch Hamburg</dt>
          <dd className="mt-2 text-sm text-gray-500 hover:text-gray-700 visited:text-gray-300"><a href ='https://www.hamburg.de/fahrradfahren-in-hamburg/16219442/radnetze/'target='_blank' rel="noreferrer">Velorouten und andere Radwege durch Hamburg </a></dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">HVV Switch</dt>
          <dd className="mt-2 text-sm text-gray-500 hover:text-gray-700"><a href='https://www.hvv-switch.de' target='_blank' rel="noreferrer"
> HVV Switch</a></dd>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <dt className="font-medium text-gray-900">...oder doch das Auto? E-charging points in Hamburg</dt>
          <dd className="mt-2 text-sm text-gray-500 hover:text-gray-700"target='_blank' rel="noreferrer"><a href='https://www.e-charging-hamburg.de'>e-charging points in Hamburg</a></dd>
        </div>
        
        <div className="border-t border-gray-200 pt-4">
            <dt className="font-medium text-gray-900">Überschrift 4</dt>
            <dd className="mt-2 text-sm text-gray-500 hover:text-gray-700"target='_blank' rel="noreferrer">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</dd>
          </div>
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img src="https://www.hamburg.de/contentblob/3836714/f56aa5a66397664af04c179789a15d64/data/veloroutennetz-hamburg.jpg" alt="Velorouten Hamburg." className="rounded-lg bg-gray-100 hover:scale-300"/>
      <img src="https://www.hvv-switch.de/site/assets/files/2707/google_maps_inner.jpg" alt="HVV switch" className="rounded-lg bg-gray-100"/>
      <img src="https://www.net4energy.com/hubfs/elektroauto/blog/kostenlose-ladesaeule-elektroauto-header-net4energy.jpg" alt="e-charging hamburg." className="rounded-lg bg-gray-100"></img>
      <img src="https://unsplash.com/de/fotos/elbKS4DY21g" alt="Lorem ipsum dolor sit amet, consetetur sadipscing elitr." className="rounded-lg bg-gray-100"/>
    </div>
  </div>
</div>
           
            </div>
            
        </>
            
       
    )
};
export default Mobilität;
