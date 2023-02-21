import React from 'react';


const Content = [
  {
    id: 1,
    href: "https://hamburg.adfc.de/fileadmin/Gliederungen/Pedale/hamburg/_processed_/d/1/csm_20111022ud_IMG_4121_Fahrradstr_Brookkehre_3cc1ad5bb8.jpg",
    alt: "Fahrradfahren in Hamburg.",
    title: "Fahrradfahren in Hamburg",
    text: "Mit dem Fahrrad durch Hamburg voranzukommen wird immer einfacher. Dieses Verkehrsmittel ist deshalb optimal, weil es umweltfreundlich, emssionsfrei, lärm-und platzsparend ist, und zusätzlich auch die Gesundheit fördert. Wer nicht mit purer Muskelkraft voran kommen möchte, kann inzwischen auch mit elektrischer Unterstützung ein wenig müheloser durch die schönste Stadt der Welt radeln. Die Stadt Hamburg fördert diese Mobilitätsart durch den Ausbau von Fahrradstraßen und Velorouten.",
  },
  {
    id: 2,
    href: "https://www.moia.io/stadt/hamburg_cadmus/slider/5763/image-thumb__5763__image-text-teaser-thumbnail/MOIA-in-hamburg_02_896x500.webp",
    alt: "Öffentlicher Personennahverkehr.",
    title: "Öffentlicher Personennahverkehr",
    text: "Hamburgs Stadtteile sind mit einem dichten Netz von U- und S-Bahnen verbunden, auch Busse sind in den Straßen Hamburgs unterwegs. Ergänzt wird dieses Angebot von Moia - einem Elektrosammeltaxi -, einem breiten Angebot von E-Rollern sowie Sharing E-Autos. Alle diese Angebote sind bequem über die neue App HVV Switch buchbar.",
  },
  {
    id: 3,
    href: "https://media.istockphoto.com/id/1293234345/de/foto/%C3%B6ffentliche-ladestationen-auf-einer-stra%C3%9Fe.jpg?s=612x612&w=0&k=20&c=mY_LN93vMmxqSw6htrVBjn6yh-cf_zrGk5vL6gvh0YM=",
    alt: "Wenn es doch das eigene E-Mobil sein soll.",
    title: "Elektromobilität",
    text: "Kannst Du nicht auf ein eigenes Auto verzichten. Dann ist die nachhaltige Variante ein Elektroauto. Für das eigene E-Auto finden sich in allen Stadtteilen Hamburgs eine wachsende Anzahl von Ladestationen.",

  },
  {
    id: 4,
    href: "https://wohnungswirtschaft-heute.de/wp-content/uploads/2021/10/bk-ag-73-BVE-Heidrehmen-Mobilitaetshub_0367-scaled.jpg",
    alt: "Privates Sharing von fahrbaren Untersätzen.",
    title: "Privates Sharing",
    text: "Private Ridesharing Gruppen oder gemeinsame Nutzung von Lastenrädern, E-Autos in der Nachbarschaft oder im Freundeskreis ermöglichen es auch den Menschen, die sich diese Mobilitätsformen nicht selber anschaffen wollen, Zugang zu den alternativen Mobilitätsformen zu haben. Menschen, die ihren eigenen fahrbaren Untersatz nicht täglich nutzen, sollten sich vernetzen und diese für ihren Freundeskreis nutzbar machen. Neben privaten Sharing Initiativen gibt es modellhafte Mobilitätskonzepte in neuentstandenen Vierteln, wie z.B. dem Pergolenviertel in Barmbek oder in Iserbrook, die diese Idee bereits umsetzen.",

  },

]


const Mobilität = () => {

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="mx-auto grid grid-cols-1 items-center gap-y-16 gap-x-8 px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 lg:grid-cols-1">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Die aktuellen Herausforderungen</h2>
              <p className="mt-4 text-gray-500">Wachsende Städte wie Hamburg müssen Mobiliät neu denken. Abgesehen von neuen Antrieben der Autos und Busse auf Hamburgs Straßen, brauchen wir auch andere Mobilitätskonzepte, denn der Raum den Individualverkehr mit PkWs einnimmt, reduziert mögliche Freiräume für die Bürger der Stadt.</p>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {Content.map((item) => (
                  <div className="border-t border-gray-200 pt-4 flex flex-col justify-between">
                    <div><dt className="font-medium text-gray-900">{item.title}</dt></div>
                    <div><dd className="mt-2 text-sm text-gray-500">{item.text}</dd></div>
                    {item.listItem?.map((element) => (
                      <div>
                        <p className='mt-5'>{element}</p>
                      </div>
                    ))}
                    <div><img src={item.href} alt={item.alt} className="rounded-lg bg-gray-100 w-full h-80 object-cover mt-16" /></div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nützliche Links für den Einstieg in nachhaltige Mobilität</h2>
              <p className="mt-4 text-gray-500">Kennst Du schon die App: HVV Switch ? Wie findest Du den schnellsten Weg durch Hamburg mit dem Fahrrad? Wo kannst Du Dein E-Auto laden?<br></br> Nützliche Links für Deinen nachhaltigen Weg durch die Stadt.</p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Fahradrouten durch Hamburg</dt>
                  <dd className="mt-2 text-sm text-gray-500 hover:text-teal-400 visited:text-gray-300"><a href='https://www.hamburg.de/fahrradfahren-in-hamburg/16219442/radnetze/' target='_blank' rel="noreferrer">Velorouten und andere Radwege durch Hamburg </a></dd>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">HVV Switch</dt>
                  <dd className="mt-2 text-sm text-gray-500 hover:text-teal-400"><a href='https://www.hvv-switch.de' target='_blank' rel="noreferrer"
                  > HVV Switch</a></dd>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">...oder doch das Auto? E-charging points in Hamburg</dt>
                  <dd className="mt-2 text-sm text-gray-500 hover:text-teal-400"><a href='https://www.e-charging-hamburg.de' target='_blank' rel="noreferrer">e-charging points in Hamburg</a></dd>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">Lastenräder ausleihen - Modellquartier Pergolenviertel</dt>
                  <dd className="mt-2 text-sm text-gray-500 hover:text-teal-400"><a href='https://klara.bike/' target='_blank' rel="noreferrer">Klara Lastenräder</a></dd>
                  <dd className="mt-2 text-sm text-gray-500 hover:text-teal-400"><a href='https://pergolenviertel.hamburg/mobilport/' target='_blank' rel="noreferrer"> Mobilport im Pergolenviertel</a></dd>
                </div>
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img src="https://www.hamburg.de/contentblob/3836714/f56aa5a66397664af04c179789a15d64/data/veloroutennetz-hamburg.jpg" alt="Velorouten Hamburg." className="rounded-lg bg-gray-100 hover:scale-300" />
              <img src="https://www.hvv-switch.de/site/assets/files/2707/google_maps_inner.jpg" alt="HVV switch" className="rounded-lg bg-gray-100" />
              <img src="https://www.net4energy.com/hubfs/elektroauto/blog/kostenlose-ladesaeule-elektroauto-header-net4energy.jpg" alt="e-charging hamburg." className="rounded-lg bg-gray-100"></img>
              <img src="https://www.hamburg.de/image/4618830/4x3/240/180/e08af06c7c7b9d64fd8dd9907b8adf50/rU/kostenloses-lastenrad-klara--4-.jpg" alt="Klara Lastenräder." className="rounded-lg bg-gray-100" />
            </div>
          </div>
        </div>

      </div>

    </>


  )
};
export default Mobilität;
