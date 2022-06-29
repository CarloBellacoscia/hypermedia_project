export default async (models) => {
  const poiList = [
    {
      name: 'Circolo Magnolia',
      description: "Il Magnolia è un'associazione ARCI no profit che ha creato per il propri associati e " +
        "tesserati ARCI un locale situato all’interno del parco dell’Idroscalo che, dalla sua nascita nel " +
        "2005, si è sempre distinto per la programmazione musicale, inclusiva e costante lungo tutta la stagione " +
        "annuale, proponendo di volta in volta concerti e serate per i propri soci, richiamando sul proprio palco artisti" +
        " di fama nazionale ed internazionale. Prendete in mano la programmazione invernale o estiva del circolo e mettetela " +
        "di fianco ai più blasonati club di Berlino," +
        " Londra, Amsterdam, Barcellona. Scoprirete con sommo stupore che si assomigliano terribilmente. ",
      gps: "2131' 14315'' ",
      neigh: "Idroscalo",
      site: 'http://www.circolomagnolia.it/',
      img: 'https://zero-media.s3.amazonaws.com/uploads/2015/05/575491c9-d065-42e2-b1e0-14fcd873a41d.jpg',
      alt_img: "people hanging out outside under lamp",

    },
    {
      name: 'Duomo',
      description: "l'èbellalamadunnina",
      gps: "2131' 14315'' ",
      neigh: "Piazza Duomo",
      site: 'https://www.duomomilano.it/it/',
      img: 'https://duomo.shbcdn.com/blobs/variants/f/8/7/f/f87f8370-813f-459b-a887-fc05029349f0_xl.jpg',
      alt_img: "duomo di milano at day",

    },
    {
      name: 'Castello Sforzesco',
      description:
        'Il Castello Sforzesco è un grande complesso fortificato situato a ' +
        'Milano poco fuori dal centro storico della città. Fu eretto nel XV secolo da Francesco Sforza, ' +
        'divenuto da poco Duca di Milano, sui resti di una precedente fortificazione medievale del XIV secolo nota come' +
        ' Castello di Porta Giovia. ',
      gps: "2131' 14315'' ",
      neigh: "Castello",
      site: 'https://www.milanocastello.it/',
      img: 'https://www.milanocastello.it/sites/all/themes/sforzesco/images/sforzesco_edificio.jpg',
      alt_img: "drone photo of castello sforzesco",

    },
    {
      name: 'Torre Branca',
      description:
        'Negli anni ‘30 la città che sale costruisce il suo totem nella radura del Parco Sempione ' +
        'Disegnata da Gio Ponti, la torre è considerata una vera opera d’arte, “in cui l’architettura moderna e ' +
        'la tecnica nuova trovano un punto di contatto' +
        ' Esile e trasparente, vera “sfida” architettonica, viene eretta a tempo di record, in soli due mesi e mezzo nel 1933,' +
        ' in occasione della V mostra Triennale, insieme a sei grandi “archi isolati”, temporanei, progettati da Sironi. Milano acquista così l’esclusiva europea di una “esposizione internazionale triennale delle arti decorative e industriali moderne e della architettura moderna”. ',
      gps: "2131' 14315'' ",
      neigh: "Sempione",
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/Torre-Branca-A4-345x230.jpg',
      alt_img: "torre branca light up at night",

    },
  ]
  const magnoliaPoi = await models.PointOfInterest.create(poiList[0])
  const duomoPoi = await models.PointOfInterest.create(poiList[1])
  const torrePoi = await models.PointOfInterest.create(poiList[2])


  const eventList = [
    {
      name: 'Miami Primavera',
      start_date: '2022-05-26',
      end_date: '2022-05-29',
      description: 'bello',
      site: 'https://www.miamifestival.it/2022/index.php',
      img: 'https://imbruttito.com/images/miamifestival2018-600x340.jpg?p=16x9&s=a9dc40eeab659d4e4ea9c7089fc2c16d',
      alt_img: "crowd at a live event",
      pointOfInterestId: magnoliaPoi.id,
    },
    {
      name: 'Notte in Branca Autunno',
      start_date: '2022-09-22',
      end_date: '2022-09-22',
      description: '“Divenuta inagibile, la Torre andò “fuori servizio” nel 1972.',
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/TorreBranca-Notturna-345x230.jpg',
      alt_img: "torre branca with night sky",
      pointOfInterestId: torrePoi.id,
    },
    {
      name: 'Natale In Duomo Inverno',
      start_date: '2022-12-24',
      end_date: '2022-12-25',
      description: '“Divenuta inagibile, la Torre andò “fuori servizio” nel 1972.',
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/TorreBranca-Notturna-345x230.jpg',
      alt_img: "torre branca with night sky",
      pointOfInterestId: torrePoi.id,
    },
    {
      name: 'inverno 2023',
      start_date: '2023-01-22',
      end_date: '2023-01-22',
      description: '“Divenuta inagibile, la Torre andò “fuori servizio” nel 1972.',
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/TorreBranca-Notturna-345x230.jpg',
      alt_img: "torre branca with night sky",
      pointOfInterestId: torrePoi.id,
    },
    {
      name: 'estate 2022',
      start_date: '2022-08-22',
      end_date: '2022-08-22',
      description: '“Divenuta inagibile, la Torre andò “fuori servizio” nel 1972.',
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/TorreBranca-Notturna-345x230.jpg',
      alt_img: "torre branca with night sky",
      pointOfInterestId: torrePoi.id,
    },
    {
      name: 'Oggi',
      start_date: '2022-06-29',
      end_date: '2022-06-29',
      description: '“Divenuta inagibile, la Torre andò “fuori servizio” nel 1972.',
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/TorreBranca-Notturna-345x230.jpg',
      alt_img: "torre branca with night sky",
      pointOfInterestId: torrePoi.id,
    },
    {
      name: 'DOMANI',
      start_date: '2022-06-30',
      end_date: '2022-06-30',
      description: '“Divenuta inagibile, la Torre andò “fuori servizio” nel 1972.',
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/TorreBranca-Notturna-345x230.jpg',
      alt_img: "torre branca with night sky",
      pointOfInterestId: torrePoi.id,
    },

  ]

  const itList = [
    {
      name: 'Tour Arte',
      description: 'fa caldo',
      img: 'https://libreriamo.it/wp-content/uploads/2018/12/galleria-vittorio-emanuele-1-1.jpg',
      alt_img: "vittorio emanuele gallery",
      duration: '1 Pomeriggio',
    },
  ]
  const arteIt = await models.Itinerary.create(itList[0])

  const serviceList = [
    {
      name: 'Farmacia Cavallo',
      description: 'curiamo le coltellate di piazzale Loreto',
      gps: "246' 2414'' ",
      neigh: "Loreto",
      site: 'lame.net',
      img: 'https://besport.org/sportmedicina/wp-content/uploads/2010/09/1440267109puertas-de-farmacia.jpg',
      alt_img: 'farmacy seen from outside'
    },
  ]

  const joinList = [
    {
      itineraryId: arteIt.id,
      pointOfInterestId: torrePoi.id,
    },
    {
      itineraryId: arteIt.id,
      pointOfInterestId: duomoPoi.id,
    },
    {
      itineraryId: arteIt.id,
      pointOfInterestId: magnoliaPoi.id,
    },
  ]
  await models.Event.bulkCreate(eventList)
  await models.PointOfInterest.bulkCreate(poiList)
  // await models.Itinerary.bulkCreate(itList)
  await models.Service.bulkCreate(serviceList)
  await models.JoinPoints.bulkCreate(joinList)

}
