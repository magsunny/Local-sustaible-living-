import React from 'react';
const Content = [{
    // Blocksatz in den Texten einstellen
    id:1,
    href: "https://www.lena.de/fileadmin/_processed_/c/e/csm_lebensmittel-nachhaltig-lagern-alltag-lena_artikel_bd1460611e.jpg",
    alt: "Nachhaltige Lagerung",
    title: "Nachhaltige Lagerung",
    text: "Wie lagert man seine Lebensmittel richtig? Jährlich finden in Deutschland ca. 12 Millionen noch essbare Lebensmittel den Weg in den Abfalleimer. Auf jede/n Deutsche/n kommen so umgerechnet ca. 1,5 kg Lebensmittelabfälle pro Woche zusammen. Ein sehr hoher Wert, der nicht nur durch Überproduktion entsteht, sondern auch durch unser eigenes Verhalten und unseren Umgang mit Lebensmitteln.  Obst und Gemüse - Gemüsefach Obst- und Gemüse gehören ins Gemüsefach. Doch was genau muss rein? Heimisches Obst wie Kirschen, Pflaumen oder auch Äpfel mögen es eher kühl, exotische Früchte wie Bananen, Mangos und Zitronen eher warm. Letztere müssen daher nicht im Kühlschrank gelagert werden. Bei Gemüse kann fast alles in den Kühlschrank. Ausgenommen sind Kartoffeln, Kürbisse, Tomaten und Auberginen. Wer Tomaten dennoch im Kühlschrank lagern möchte, sollte sie fern vom Salat aufbewahren. Dieser reagiert nicht gut auf das von den Tomaten abgesonderte Ethylen und wird schneller welk. Fisch und Fleisch – unterste Ebene Bei Fisch und Fleisch ist es wichtig, die Kühlkette nicht zu unterbrechen. Daher werden diese Einkäufe bestenfalls in speziellen Kühltaschen nach Hause gebracht. Frischer Fisch sollte dann aus der Einkaufsverpackung genommen und in Glasbehälter umgelagert werden. So bleibt er ca. einen Tag im Kühlschrank haltbar. Fleisch ist unterschiedlich lange haltbar, hier ist ein Blick auf das Mindesthaltbarkeitsdatum wichtig. Bei frischem Hackfleisch empfiehlt es sich allerdings, die Ware noch am selben Tag zu verzehren.",
    // Grafik Lagerung im Kühlschrank https://www.nachhaltiger-warenkorb.de/wp-content/uploads/190926_RNE18001_RNE_NW_Infografiken_Zeichenfl%C3%A4che-1.png
},
{
  id:2,
  href: "https://www.momentsfor.me/wp-content/uploads/2018/01/saisonkalender-1600x900.jpg", 
  alt: "Saisonal, regional und unverpackt.",
  title: "Saisonal, regional und unverpackt.",
  text: "Nutze einen Saisonkalender. Der Saisonkalender zeigt, welche Lebensmittel lokal und saisonal zur Jahreszeit verfügbar sind. Kaufe möglichst unverpackt oder direkt auf dem Markt, da hier in der Regel lokale Anbieter sind und die Lebensmittel keinen lange Transportwege hinter sich hatten.",
},
{
  id:3,
  href: "https://images.wunderweib.de/lebensmittel-einfrieren,id=ea6b1cb7,b=wunderweib,w=1600,rm=sk.jpeg",
  alt: "Lebensmittel verwerten statt wegwerfen",
  title: "Lebensmittel verwerten statt wegwerfen",
  text: "Es gibt viele Möglichkeiten Lebensmittel länger haltbar zu machen, sodass sie länger halten und du dir keine Sorgen machen musst, dass du sie nicht rechtzeitig aufisst. Dazu zählt z.B. Einfrieren. Was lässt sich einfrieren? Zitronensaft, Butter und Kräuter in Eiswürfelform. Auch geschnittenes Brot lässt sich wunderbar einfrieren und bei Bedarf können einzelne Scheiben ganz einfach im Toaster oder Backofen aufgetaut und verzehrt werden. Alte Brötchen wieder knusprig machen. Wenn die Brötchen ein oder zwei Tage alt sind, müssen sie noch nicht weggeworfen werden. Feuchte sie einfach mit ein wenig Wasser an und lege sie für ein paar Minuten auf den Toaster oder stelle alternativ das trockene Brötchen mit einem Glas Wasser für 10-20 Sekunden in die Mikrowelle. So werden sie wieder schön knusprig. Alternativ lassen sich ältere Brötchen auch für Gerichte wie Knödel verwenden. "      
                    

},
{
  id:4,
  href: "https://www.oekotest.de/static_files/images/article/Lebensmittel-landen-viel-zu-schnell-in-der-Tonne-diese-Initiativen-retten-sie-_-Christine-Kuchem-Fotolia-com_600755_1x1.jpg",
  alt: "Foodsharing.",
  title: "Lebensmittel retten",
  text: "Lebensmittel retten, verteilen und verwerten. Du fliegst morgen in Urlaub und der Kühlschrank ist immernoch voll? Bevor du die Lebensmittel wegschmeißt, biete sie doch einfach auf Foodsharing an, sodass diese noch von jemanden anderen verwertet werden können. GLeichzeitig bietet Foodsharing die Möglichkeit Lebensmittel in Betrieben zu retten. Engagier dich ehrenamtlich, rette Lebensmittel und verteile sie, sodass weniger im Müll landet. Kaufe über TooGoodToGO Lebensmittel, um sie vor der Tonne zu bewahren.",
},

]

const Ernährung = () => {
  
  return (
     <>
        <div>
          <div className="bg-white">
            <div className="mx-auto grid grid-cols-1 items-center gap-y-16 gap-x-8 px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 lg:grid-cols-1">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tipps für eine nachhaltige Ernährung</h2>
                <p className="mt-4 text-gray-500">Zur nachhaltigen Ernährung gehört nicht nur die Frage was man isst, sondern auch der Umgang mit Lebensmitteln.</p>
                <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">

                {Content.map((item,id)=>(
                  <div key={id} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{item.title}</dt>
                    <dd className="mt-2 text-sm text-gray-500 h-80 sm:h-96">{item.text}</dd>
                    <img src={item.href} alt={item.alt} className="rounded-lg bg-gray-100 w-full h-80 object-cover mt-16"/>
                  </div>
                ))}

                </div>
              </div>
            </div>
          </div>
        </div> 
      </>  
  )
};
export default Ernährung;