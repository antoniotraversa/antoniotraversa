import proj_systemdashboard_mainImg from '../assets/images/proj_systemdashboard/icon.png';
import feat_1761663235217_featImg0 from '../assets/images/proj_systemdashboard/1.png';
import feat_1761663255542_featImg1 from '../assets/images/proj_systemdashboard/2.png';
import proj_travyplay_mainImg from '../assets/images/proj_travyplay/icon.png';
import feat_1761663690623_featImg0 from '../assets/images/proj_travyplay/1.png';
import feat_1761663718417_featImg1 from '../assets/images/proj_travyplay/2.png';
import feat_1761663749339_featImg2 from '../assets/images/proj_travyplay/3.png';
import feat_1761663805892_featImg3 from '../assets/images/proj_travyplay/4.gif';
import proj_trmanager_mainImg from '../assets/images/proj_trmanager/icon.png';
import feat_1761667825524_featImg0 from '../assets/images/proj_trmanager/1.png';
import feat_1761667923878_featImg1 from '../assets/images/proj_trmanager/3.png';
import feat_1761667996664_featImg2 from '../assets/images/proj_trmanager/6.png';
import feat_1761668212044_featImg3 from '../assets/images/proj_trmanager/7.png';
import feat_1761668275721_featImg4 from '../assets/images/proj_trmanager/8.png';
import feat_1761668317660_featImg5 from '../assets/images/proj_trmanager/10.png';
import feat_1761668359517_featImg6 from '../assets/images/proj_trmanager/13.png';
import feat_1761668466104_featImg7 from '../assets/images/proj_trmanager/12.png';
import feat_1761668558189_featImg8 from '../assets/images/proj_trmanager/11.png';
import feat_1761668623609_featImg9 from '../assets/images/proj_trmanager/14.png';

export default [
  {
    "id": "proj_systemdashboard",
    "title": "SystemDashboard",
    "description": "Applicazione desktop per Windows che mostra una dashboard a schermo intero in tempo reale con le statistiche del sistema: utilizzo di CPU, RAM, GPU (solo NVIDIA), rete e attività del disco. È progettata per essere visualizzata su un monitor secondario, rimanendo sempre in primo piano.",
    "image": proj_systemdashboard_mainImg,
    "tags": [
      "Python",
      "Windows"
    ],
    "features": [
      {
        "title": "Sempre in primo piano",
        "description": "La finestra rimane visibile sopra tutte le altre.\nSi posiziona automaticamente sull'ultimo monitor disponibile",
        "imageUrl": feat_1761663235217_featImg0
      },
      {
        "title": "Personalizzabile",
        "description": "Le impostazioni come i colori possono essere modificate tramite il file `config.",
        "imageUrl": feat_1761663255542_featImg1
      }
    ],
    "repository": ""
  },
  {
    "id": "proj_travyplay",
    "title": "TravyPlay",
    "description": "TravyPlay è un media player open-source costruito in Flutter, progettato per unificare la tua libreria multimediale locale (musica, film, serie TV), le tue liste IPTV e, con le ultime novità, anche i tuoi audiolibri e libri in un'unica interfaccia elegante e facile da usare.",
    "image": proj_travyplay_mainImg,
    "tags": [
      "Dart",
      "Flutter",
      "Android",
      "IOS"
    ],
    "features": [
      {
        "title": "Gestione Musica",
        "description": "Scansiona automaticamente i file musicali presenti sul dispositivo.\nOrganizza la libreria per genere, artista e album.\nCrea e gestisci le tue playlist personalizzate.",
        "imageUrl": feat_1761663690623_featImg0
      },
      {
        "title": "Libreria Video",
        "description": "Raggruppa film e serie TV in raccolte intelligenti.\nNaviga facilmente tra i tuoi contenuti video.",
        "imageUrl": feat_1761663718417_featImg1
      },
      {
        "title": "Supporto IPTV",
        "description": "Aggiungi sorgenti M3U personalizzate tramite link o file locali.\nSfoglia i canali per nazione o categoria.\nGoditi la TV in streaming direttamente nell'app.",
        "imageUrl": feat_1761663749339_featImg2
      },
      {
        "title": "Integrazione OpenLibrary & Internet Archive",
        "description": "Leggi milioni di libri disponibili sulle piattaforme di Open Library e Internet Archive.\nRicerca ibrida su entrambe le piattaforme con dettagli su lingua, disponibilità, filtro per autore ed opera.\nAccedi al portale OpenLibrary per noleggiare libri gratuitamente se disponibile accedi alla versione libera di Internet Archive.",
        "imageUrl": feat_1761663805892_featImg3
      }
    ],
    "repository": "https://github.com/antoniotraversa/TravyPlay"
  },
  {
    "id": "proj_trmanager",
    "title": "TRManager",
    "description": "Applicazione completa per la gestione di sale, tavoli e prenotazioni, composta da un client Flutter e un server Node.js/Electron.\n\nhttps://github.com/antoniotraversa/TRManager\nhttps://github.com/antoniotraversa/TRManagerServer",
    "image": proj_trmanager_mainImg,
    "tags": [
      "Dart",
      "Flutter",
      "JavaScript",
      "CSS",
      "Windows",
      "IOS",
      "Android"
    ],
    "features": [
      {
        "title": "Controllo Server",
        "description": "Avvio e spegnimento del server locale con feedback visivo (Online/Offline).\nMonitoraggio dello stato del server, IP, porta e tempo di attività.\nApertura e chiusura dei turni (es. \"Pranzo\", \"Cena\") con selezione della data.\nVisualizzazione dello stato del turno e durata in tempo reale.\n",
        "imageUrl": feat_1761667825524_featImg0
      },
      {
        "title": "Gestione Database",
        "description": "Controllo completo su utenti, sale, tavoli, categorie e relativi articoli. Modifiche notificate in tempo reale a tutti i client connessi.",
        "imageUrl": feat_1761667923878_featImg1
      },
      {
        "title": "Gestione Dipendenti",
        "description": "Tieni traccia dei dati dei tuoi dipendenti e organizza i turni settimanali di lavoro",
        "imageUrl": feat_1761667996664_featImg2
      },
      {
        "title": "Gestione Fiscale",
        "description": "Monitora e gestisci tutti gli aspetti fiscali della tua attività: controlla i pagamenti a dipendenti e fornitori, conserva e organizza le fatture emesse, pagate o da saldare. Gestisci chiusure fiscali, registri dei corrispettivi e tutte le pratiche contabili in modo semplice e sicuro.",
        "imageUrl": feat_1761668212044_featImg3
      },
      {
        "title": "Backup e Ripristino",
        "description": "Importa/Esporta i dati del tuo database in maniera granulare o per intero.",
        "imageUrl": feat_1761668275721_featImg4
      },
      {
        "title": "Login multiutente",
        "description": "Ruoli Super User e Utente Standard",
        "imageUrl": feat_1761668317660_featImg5
      },
      {
        "title": "Visualizzazione Sale e Tavoli",
        "description": "Interfaccia chiara per layout e disponibilità",
        "imageUrl": feat_1761668359517_featImg6
      },
      {
        "title": "Ordinazioni",
        "description": "Apri un tavolo e inserisci gli ordini organizzati per turno. I turni vengono inviati singolarmente e per ogni turno in attesa viene generato un promemoria dedicato al reparto.",
        "imageUrl": feat_1761668466104_featImg7
      },
      {
        "title": "Ricerca veloce",
        "description": "Inserisci gli articoli rapidamente utilizzando i filtri per categoria o la barra di ricerca con suggerimenti automatici.",
        "imageUrl": feat_1761668558189_featImg8
      },
      {
        "title": "Cassa",
        "description": "La versione Windows del client offre l’interfaccia e tutte le funzionalità tipiche di un sistema di cassa.",
        "imageUrl": feat_1761668623609_featImg9
      }
    ],
    "repository": "https://github.com/antoniotraversa/TRManager"
  }
];
