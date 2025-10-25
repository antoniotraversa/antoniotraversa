import travyplayImg from "../assets/images/travyplay/travyplaylogo.png";
import travyplayImg2 from "../assets/images/travyplay/2.png";
import travyplayImg3 from "../assets/images/travyplay/3.png";
import travyplayImg4 from "../assets/images/travyplay/4.png";
import travyplayImg10gif from "../assets/images/travyplay/10_gif.gif";




export default [
  {
    id: "Travyplay",
    title: "TravyPlay",
    description: "Media center in Flutter per gestire musica, video, IPTV e libri.",
    image: travyplayImg,
    tags: ["Dart", "Flutter", "IOS", "Android"],
    repository: "https://github.com/antoniotraversa/TravyPlay",
  features: [
    {
      title: "Gestione Musica",
      description: "Organizza e riproduci la tua musica, Crea playlist o filtra per generi, artisti o album",
      imageUrl: travyplayImg2
    },

    {
      title: "Film & Serie TV",
      description: "Godi i tuoi contenuti video etichettabili e filtrabili per tipo, genere o raccolta",
      imageUrl: travyplayImg3 
    },

     {
      title: "Liste IPTV",
      description: "Guarda canali da tutto il mondo in chiaro, filtrati per nazione o categoria",
      imageUrl: travyplayImg4
    },
    
    {
      title: "Libreria Intelligente",
      description: "Importa i tuoi eBook e documenti oppure noleggia gratuitamente da OpenLibrary & InternetArchive dalla la sezione dedicata.",
      imageUrl: travyplayImg10gif 
    },
    
  ]
  },

];
