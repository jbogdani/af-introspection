const applications = [
    {
        "year": 2006,
        "authors": "Alessandro Bezzi, Luca Bezzi, Denis Francisci, Rupert Gietl, Fabrizio Furnari",
        "name": "ArcheOS",
        "use": "Sistema operativo basato su LINUX sviluppato appositamente per archeologi, nuova release 1.1.6 Akhenaton. Diversi software implementati",
        "notes": "https://www.archeos.eu/category/archeos/: portale del sistema operativo. Utilizzo scarso, citato solo in pochi forum. Repository: https://github.com/archeos ultima modifica febbraio 2016. Poi documentazione spostata qui http://vai.uibk.ac.at/dadp/doku.php.  Attualmente SO non più sviluppato (ultima versione: 4)",
        "license": false,
        "maintained": false,
        "source_available": "https://github.com/archeos/ArcheOS",
        "last_commit": 2016,
        "commits": 203
    },
    {
        "year": 2006,
        "authors": "Franco Niccolucci, Andrea D’Andrea, Sorin Hermon, Tommaso Zoppi, Achille Felicetti",
        "name": "MAD (Managing Archaeological Data)",
        "use": "Tool per la gestione dei dati archeologici costruito su un database XML (eXist)",
        "notes": "Citato in diverse pubblicazioni fino al 2019. https://www.diva-portal.org/smash/get/diva2:1355080/FULLTEXT01.pdf. Nei risultati di ricerca si trovano solo articoli. Niente repository",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2006,
        "authors": "Markus Neteler, Alessandro Bezzi, Luca Bezzi, Rupert Gietl, Denis Francisci, Michael Barton",
        "name": "GRASS",
        "use": "Utilizzo in ambito archeologico",
        "notes": "Ancora in vita e largamente utilizzato. Ultima versione 7.8.3 del 2020. Pagina del progetto https://grass.osgeo.org/. Repository git https://github.com/OSGeo/grass/",
        "license": "GNU GPLv2",
        "maintained": true,
        "source_available": 'https://github.com/OSGeo/grass',
        "last_commit": 2020,
        "commits": 20832
    },
    {
        "year": 2006,
        "authors": "Francesca Cuniolo",
        "name": "ARIS (Archaeological Resource Information System)",
        "use": "Sistema multiutente per la gestione globale del dato archeologico. Possibilità di gestire foto e video",
        "notes": "Ne parlano solo alcuni articoli. Il più riportato https://www.academia.edu/37341338/",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2007,
        "authors": "Luigi Calori, Carlo Camporesi, Augusto Palombini, Sofia Pescarin",
        "name": "Osg4Web",
        "use": "Strumento open source che consente la navigazione e l’interazione di paesaggi archeologici, implementando una visualizzazione 3D. Possibilità di integrazione in un webGIS (il pacchetto VTP sviluppato per l'occasione contiene applicativi per la gestione, il trattamento e la visualizzazione interattiva di dati GIS)",
        "notes": "Solo articoli https://www.jstor.org/stable/j.ctv3s8th9.7, https://www.academia.edu/4980620/ e portale web dell'applicazione http://147.162.44.42/public/osg4web/osg4web.htm. Tutti precedenti il convegno ArcheoFOSS. Probabilmente progetto morto",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2007,
        "authors": "Damiano Lotto, Francesco Biscani, Alessandro Facchin, Sebastiano Tibolla",
        "name": "Knossos",
        "use": "Gestore di database open source per l'archeologia",
        "notes": "@Mancano spiegazioni dettagliate. Nessuna traccia di utilizzo dell'applicativo dopo il convegno",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2007,
        "authors": "Fabrizio Giudici, Alick Macdonnel McLean, Augusto Palombini",
        "name": "VRC (Visual Resource Collaborative)",
        "use": "Database relazionale studiato per la catalogazione e la fruizione on-line del patrimonio culturale. La sua realizzazione si basa sull’idea di una condivisione di codici, dati e metadati secondo la quale, a valle della realizzazione del software open source, ciascuna istituzione può fruire liberamente di esso, mettendo a propria volta a disposizione i propri dati e divenendo un nodo del sistema",
        "notes": "Non entrano troppo nei dettagli, poche pagine. Nessun risultato dalla ricerca, non riesco a rintracciare il progetto",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2008,
        "authors": "Julian Bogdani, Erika Vecchietti",
        "name": "BraDypUS",
        "use": "Software di gestione banche dati relazionali online",
        "notes": "Progetto ancora vivo. Portale https://bradypus.net/. Repository https://github.com/bdus-db/BraDypUS",
        "license": "MIT",
        "maintained": true,
        "source_available": "https://github.com/bdus-db/BraDypUS",
        "last_commit": 2020,
        "commits": 704
    },
    {
        "year": 2009,
        "authors": "Stefano Costa, Giovanni Luca Pesce, Luca Bianconi",
        "name": "IOSA/Total Open Station",
        "use": "A program for downloading and processing survey data from total station devices",
        "license": "GNU GPLv3",
        "maintained": true,
        "source_available": "https://github.com/totalopenstation/totalopenstation",
        "last_commit": 2020,
        "commits": 649
    },
    {
        "year": 2009,
        "authors": "Stefano Costa, Giovanni Luca Pesce, Luca Bianconi",
        "name": "IOSA/GnuCal then IOSACal",
        "use": "An open source radiocarbon (14C) calibration software. Written in Python http://c14.iosa.it/",
        "license": "GNU GPLv3",
        "maintained": true,
        "source_available": "https://codeberg.org/steko/iosacal",
        "last_commit": 2020,
        "commits": 242
    },
    {
        "year": 2009,
        "authors": "Stefano Costa, Giovanni Luca Pesce, Luca Bianconi",
        "name": "IOSA/Harris Matrix Data Package",
        "use": "A Data Package specification for archaeological stratigraphy data following the Harris Matrix convention",
        "license": "GNU GPLv3",
        "maintained": true,
        "source_available": "https://codeberg.org/steko/harris-matrix-data-package",
        "last_commit": 2020,
        "commits": 23
    },
    {
        "year": 2009,
        "authors": "Corrado Pedelì",
        "name": "ArcheoTRAC",
        "use": "Sistema informativo per il tracciamento del ciclo di vita del patrimonio archeologico e documentale correlato (web application)",
        "notes": "Nessun'altra citazione dell'applicativo. Ne parla solo quell'intervento",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2009,
        "authors": "Mauro Felicori, Marco Gaiani, Antonella Guidazzoli, Maria Chiara Liguori",
        "name": "Visman",
        "use": "Framework basato sulle librerie OpenSceneGraph e wxWidgets, scritto interamente in C++ e disponibile sia su piattaforme Windows che Linux. Scopo è la fruizione di ambienti 3D sia su desktop che in ambienti immersivi, ambienti direttamente collegabili nelle loro geometrie a schede provenienti da database relazionali, a pagine HTML o ad altri elementi esterni. Le geometrie stesse, con un sistema di shader, forniscono informazioni immediatamente percepibili a seconda della presenza o meno di collegamento a dati. È stata implementata una versione di Visman anche per la fruizione via Web dei modelli.",
        "notes": "Interessanti anche il progetto  ARCUS e il MUVI nello stesso contributo",
        "maintained": "Articolo che spiega nel dettaglio il progetto https://www.academia.edu/2297244. Non ne parlano in altre pubblicazioni",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2009,
        "authors": "Luca Mandolesi, Enzo Cocca",
        "name": "pyArchInit",
        "use": "sfruttabile sia come applicazione standalone per l’inserimento delle schede di Unità Stratigrafica, sia come plug-in per QGIS",
        "notes": "Progetto ancora in vita, in continuo sviluppo. Docs: https://pyarchinit.github.io/, portale https://sites.google.com/site/pyarchinit/. Repository: https://github.com/pyarchinit/pyarchinit",
        "license": "GNU GPLv2",
        "maintained": true,
        "source_available": "https://github.com/pyarchinit/pyarchinit",
        "last_commit": 2020,
        "commits": 1183
    },
    {
        "year": 2009,
        "authors": "Sabatino Laurenza, Simona Mancuso, Andrea Costantino",
        "name": "V.I.R.A. (Visualizzatore Interattivo delle Rotte Antiche)",
        "use": "Calcolo e visualizzazione delle rotte navali nel Mediterraneo antico",
        "notes": "Nessuna notizia dell'evoluzione del progetto",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2009,
        "authors": "Denis Pitzalis, Ruven Pillay",
        "name": "IIPImage",
        "use": "Sistema client-server progettato per la visualizzazione remota di immagini ad altissima risoluzione attraverso Internet",
        "notes": "",
        "maintained": "appplicativo ancora in sviluppo. Ultima modifica della repository giugno 2020 https://github.com/ruven/iipsrv Portale del progetto https://iipimage.sourceforge.io/ ultima versione (1.1) a giugno 2019 https://iipimage.sourceforge.io/2019/06/iipsrv-1-1-released",
        "license": "GNU GPLv3",
        "maintained": true,
        "source_available": "https://github.com/ruven/iipsrv/",
        "last_commit": 2020,
        "commits": 473
    },
    {
        "year": 2009,
        "authors": "Giuliano De Felice, Giuseppina Sibilano, Giuliano Volpe, Eugenio Di Sciascio, Roberto Mirizzi, Giacomo Piscitelli, Eufemia Tinelli, Michelantonio Trizio",
        "name": "IReMaS",
        "use": "sistema web-based per la gestione, la classificazione ed il recupero efficiente della documentazione di scavo",
        "notes": "Utilizzo all'interno del progetto Itinera in Puglia http://www.archeologiadigitale.it/progetti/digitaldocumentation/digitaldoc.html per progetto di catalogazione digitale dei reperti lapidei https://www.torrossa.com/it/resources/an/2409576. Nessuna repository trovata",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2009,
        "authors": "Andrea Pozzi, Paolo Salonia",
        "name": "Cloud Manager",
        "use": "Applicazione open source per la gestione delle nuvole di punti",
        "notes": "Nessun articolo che ne parla, nessuna repository trovata",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2010,
        "authors": "Diego Gnesi Bartolani, Savino Petruzzelli",
        "name": "ICCD (Extended ICCD)",
        "use": "Sotfware per la gestione delle schede di catalogo",
        "notes": "È la base del framework del SICAM (Sistema informativo del Catalogo Archeologico delle Marche)",
        "maintained": "Non viene citato in altri articoli. Repository non trovata",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2011,
        "authors": "Pier Moulon, Alessandro Bezzi",
        "name": "Python Photogrametry Toolbox",
        "use": "Software open per la ricostruzione di un modello tridimensionale a partire da una serie di fotografie",
        "notes": "Repository trovata https://github.com/steve-vincent/photogrammetry upload fermi a 5 anni fa. Probabilmente non più implementato",
        "license": "GNU GPLv3",
        "maintained": false,
        "source_available": "https://github.com/steve-vincent/photogrammetry",
        "last_commit": 2016,
        "commits": 4
    },
    {
        "year": 2011,
        "authors": "Augusto Palombini",
        "name": "r.finder",
        "use": "Script per GRASS-GIS finalizzato alla ricognizione intelligente. Utile a localizzare sul territorio le aree che sono maggiormente simili a quelle su cui insistono determinate presenze note",
        "notes": "Script ancora scaricabile qui http://www.palombini.net/sw/finder. Manuale http://www.palombini.net/sw/finder/rfindermanual.html",
        "license": "GNU GPLv3",
        "maintained": false,
        "source_available": "http://www.palombini.net/sw/finder/",
        "last_commit": false,
        "commits": 1
    },
    {
        "year": 2011,
        "authors": "Dario Berardi, Andrea Ciapetti, Maria De Vizia Guerriero, Alessandra Donnini, Matteo Lorenzini, Maria Emilia Masci, Fabio Piro, Oreste Signore",
        "name": "baseculturale.it",
        "use": "Sviluppo di un portalesemantico per i beni culturali",
        "notes": "Sviluppo del modulo SKOSware; libreria che consente consultazione e manipolazione dei vocabolari e thesauri definiti durante le fasi di mapping della scheda BDI che hanno caratterizzato lo sviluppo del progetto. Il portale non è più online http://baseculturale.it il tool SKOSware non semba essere rintracciabile (probabilmente mai completato il suo sviluppo)",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2012,
        "authors": "Denis Francisci",
        "name": "ArchaeoSection",
        "use": "Applicativo per automatizzare il rilievo delle sezioni archeologiche, passando con pochi click dalle coordinate registrate per mezzo della stazione totale ai punti caricati in ambiente GIS e disponibili per il tracciamento dei profili di strato",
        "notes": "Articolo della stessa autrice ne parla https://www.academia.edu/1227237 portale non più online http://www.uselessarchaeology.com/",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2013,
        "authors": "Diego Gnesi Bartolani, Umberto Moscatelli",
        "name": "Datando",
        "use": "Libreria python da implementare nei DBMS per la gestione e la conversione delle date",
        "notes": "Libreria non più esistente. Ultima release giugno 2013 https://pypi.org/project/datando/",
        "license": false,
        "maintained": false,
        "source_available": "https://pypi.org/project/datando/",
        "last_commit": 2013,
        "commits": 5
    },
    {
        "year": 2013,
        "authors": "Mariapaola Monti, Giusy Arvizzigno, Donatella Lombardo, Giuseppe Maino",
        "name": "AKVIS Retoucher",
        "use": "Software per il restauro virtuale di fotografie",
        "notes": "Portale ancora online, software perfettamente scaricabile con istruzioni e storia delle versioni https://akvis.com/it/retoucher. Software con licenza",
        "license": "Commercial",
        "maintained": true,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2014,
        "authors": "Giacomo Di Giacomo",
        "name": "GIS cloud",
        "use": "Sperimentazione di un sistema GIS cloud su una piattaforma cloud auto-costruita che integra, accanto ai servizi tipici del cloud (gestione documentale, gestione del workflow, etc.), funzioni tipiche di qualunque sistema informativo territoriale",
        "notes": "I link reperibili online rimandano solo al presente intervento",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2014,
        "authors": "Matteo Frassine, Giuseppe Naponiello, Stefania De Francesco, Alessandro Asta",
        "name": "Raptor",
        "use": "Geodatabase per l'archeologia preventiva. È stato creato un software che, seppur basato su un geodatabase decisamente articolato (PostgreSQL e PostGIS), permette all’utente un’interazione semplice grazie ad un’interfaccia web user friendly",
        "notes": "Progetto ancora in vita, portale online all'indirizzo https://www.raptor.beniculturali.it. Sorgente chiusa",
        "license": "Commercial",
        "maintained": true,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2015,
        "authors": "Jerzy Sikora, Jacek Sroka, Jerzy Tyszkiewicz",
        "name": "Strati5",
        "use": "App mobile per la creazione e gestione di Matrix di Harris",
        "notes": "Non si trovano articoli né pagine online che ne parlano",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    },
    {
        "year": 2018,
        "authors": "Stefano Costa",
        "name": "Harris Matrix Data Package",
        "use": "Modalità semplice che garantisce la portabilità per i dati stratigrafici. Insieme di tabelle CSV e di un file json",
        "notes": "Codice ancora rintracciabile https://codeberg.org/steko/harris-matrix-data-package",
        "license": "GNU GPLv3",
        "maintained": true,
        "source_available": "https://codeberg.org/steko/harris-matrix-data-package",
        "last_commit": 2020,
        "commits": 23
    },
    {
        "year": 2018,
        "authors": "Alessandro Vecchione, Aurelia Lureau, Marco Callieri",
        "name": "3DHOP",
        "use": "Visualizzatore 3D ma anche utile strumento di ricerca che permette di progettare sistemi interattivi personalizzati per dataset  di archeologia digitale",
        "notes": "Impatto grafico molto buono. Portale ancora online http://3dhop.net presente anche la documentazione repository https://github.com/cnr-isti-vclab/3DHOP",
        "license": "GNU GPLv3",
        "maintained": true,
        "source_available": "https://github.com/cnr-isti-vclab/3DHOP",
        "last_commit": 2020,
        "commits": 194
    },
    {
        "year": 2018,
        "authors": "Daniele Bursich",
        "name": "iGIS (Immersive GIS System)",
        "use": "Piattaforma per la creazione di un ambiente 3D immersivo, scalabile e completamente personalizzabile, connesso al database MySQL, che incorpora dati 2D e 3D in una Realtà Virtuale (VR) navigabile anche con visori (per es. Oculus)",
        "notes": "Non si trovano altri articoli o pagine online che ne parlano",
        "license": false,
        "maintained": false,
        "source_available": false,
        "last_commit": false,
        "commits": 0
    }
];

