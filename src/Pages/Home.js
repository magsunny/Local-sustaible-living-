import React from "react";
import { useNavigate } from 'react-router-dom'


const Content = [
  {
    id: 1,
    href: "https://www.momentsfor.me/wp-content/uploads/2018/01/saisonkalender-1600x900.jpg",
    alt: "Ernährung",
    title: "Ernährung",
    text: "Zur nachhaltigen Ernährung gehört nicht nur die Frage was man isst, sondern auch der Umgang mit Lebensmitteln. Lerne auf unserer Seite wie du mit wenigen Schritten einen großen Unterschied machen kannst. Von nachhaltiger Lagerung, bis zu dem Kauf von saisonalen, regionalen und unverpackten Lebensmitteln ist alles mit dabei.",
    navigation: { name: 'Clicke hier um zur Ernährungseite zu wechseln', href: '/ernährung', current: false },
  },
  {
    id: 2,
    href: "https://images.unsplash.com/photo-1603001088226-17762b4ea534?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzdGFpbmFibGUlMjBmYXNoaW9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    alt: "Fashion",
    title: "Fashion",
    text: "Du tust etwas Gutes für die Umwelt. Nachhaltige Kleidung besteht in der Regel aus umweltfreundlichen Materialien. Weitere Argumente sind kürzere Transportwege, geringerer Einsatz von Schadstoffen und eine ressourcenschonende Herstellung. Nicht zuletzt förderst du faire Arbeitsbedingungen. Lerne hier mehr.",
    navigation: { name: 'Clicke hier um zur Fashionseite zu wechseln', href: '/fashion', current: false },
  },
  {
    id: 3,
    href: "https://www.moia.io/stadt/hamburg_cadmus/slider/5763/image-thumb__5763__image-text-teaser-thumbnail/MOIA-in-hamburg_02_896x500.webp",
    alt: "Mobilität",
    title: "Mobilität",
    text: "Wachsende Städte wie Hamburg müssen Mobiliät neu denken. Abgesehen von neuen Antrieben der Autos und Busse auf Hamburgs Straßen, brauchen wir auch andere Mobilitätskonzepte, denn der Raum den Individualverkehr mit PkWs einnimmt, reduziert mögliche Freiräume für die Bürger der Stadt. Wir zeigen dir, welche Möglichkeiten es gibt.",
    navigation: { name: 'Clicke hier um zur Mobilitätsseite zu wechseln', href: '/mobilität', current: false },
  },
  {
    id: 4,
    href: "https://image.brigitte.de/13102236/t/0w/v3/w480/r1.5/-/nachhaltig-im-haushalt.jpg",
    alt: "Wohnen",
    title: "Wohnen",
    text: "Wie können wir Nachhaltigkeit in unserem Alltag einbauen? Insbesondere in unserem Zuhause lässt es sich mit diesen Tipps nachhaltig leben. Der Bereich Wohnen und Haushalt ist deshalb so relevant für den nachhaltigen Konsum, weil er mit 38 Prozent einen maßgeblichen Anteil der CO2-Emissionen des privaten Konsums innehat. Auch wenn Gebäude und Geräte immer energieeffizienter konstruiert werden, sinkt der durchschnittliche Pro-Kopf-CO2-Verbrauch dennoch nur um 0,5 Prozent im Jahr. Somit besteht im Bereich des Wohnens und des Haushalts ein hoher Bedarf an Optimierungsmaßnahmen für einen nachhaltigen Konsum.",
    navigation: { name: 'Clicke hier um zur Wohnenseite zu wechseln', href: '/wohnen', current: false },
  },

]



const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="bg-white">
          <div className="mx-auto grid grid-cols-1 items-center gap-y-16 gap-x-8 px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 lg:grid-cols-1">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dein Einstieg in ein nachhaltigeres Leben!</h2>
              <p className="mt-4 text-gray-500">Wir wissen eines ganz genau: Nachhaltigkeit hat viele Facetten und betrifft uns alle! Jeder kann nachhaltig leben, wenn auch auf unterschiedliche Weise. Daher haben wir es uns zum Ziel gemacht, einen einfacheren Zugang zum Thema Nachhaltigkeit zu schaffen. Wir arbeiten hart daran, Inhalte zu erstellen, die leicht verständlich sind, um eine Offenheit für nachhaltige Alternativen zu erschaffen egal welchen Wissensstand die Person hat und welchen Herausforderungen sie sich stellt. Selbst kleine Veränderungen in unserem täglichen Leben können einen großen Unterschied machen. Wir müssen uns bewusst für eine nachhaltigere Zukunft entscheiden und bereit sein, unsere Gewohnheiten anzupassen.</p>
              <h2>Darüber hinaus bieten wir euch die Möglichkeit für einen lokalen Austausch. Wenn ihr euch registriert bekommt ihr exklusiven Zugang zu DIY, Blogartikeln und Termintipps. Jetzt schnell kostenfrei registrieren!</h2>
              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {Content.map((item) => (
                  <div key={item.id} className="border-t border-gray-200 pt-4 flex flex-col justify-between">
                    <div><dt className="font-medium text-gray-900">{item.title}</dt></div>

                    <p className='mt-5 text-gray-500'>{item.text}</p>

                    <button onClick={() => {
                      console.log('navigate to ', item.navigation.href);
                      navigate(item.navigation.href)
                    }}>
                      <p className='mt-5 text-teal-600 hover:text-teal-400'> {item.navigation.name}</p>
                    </button>


                    <div><img src={item.href} alt={item.alt} className="rounded-lg bg-gray-100 w-full h-80 object-cover mt-16" /></div>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Home;