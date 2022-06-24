export default async (models) => {
  const poiList = [
    {
      name: 'Duomo',
      description: "l'èbellalamadunnina",
      gps: "2131' 14315'' ",
      site: 'https://www.duomomilano.it/it/',
      img: 'https://duomo.shbcdn.com/blobs/variants/f/8/7/f/f87f8370-813f-459b-a887-fc05029349f0_xl.jpg',
    },
    {
      name: 'Castello Sforzesco',
      description:
        'Il Castello Sforzesco è un grande complesso fortificato situato a ' +
        'Milano poco fuori dal centro storico della città. Fu eretto nel XV secolo da Francesco Sforza, ' +
        'divenuto da poco Duca di Milano, sui resti di una precedente fortificazione medievale del XIV secolo nota come' +
        ' Castello di Porta Giovia. ',
      gps: "2131' 14315'' ",
      site: 'https://www.milanocastello.it/',
      img: 'https://www.milanocastello.it/sites/all/themes/sforzesco/images/sforzesco_edificio.jpg',
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
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/Torre-Branca-A4-345x230.jpg',
    },
  ]
  const duomoPoi = await models.PointOfInterest.create(poiList[0])
  const torrePoi = await models.PointOfInterest.create(poiList[1])


  const eventList = [
    {
      name: 'Miami',
      start_date: '2022-05-26',
      end_date: '2022-05-29',
      description: 'bello',
      site: 'Magnolia',
      img: 'https://fs.i3lab.group/hypermedia/cats/siberian.jpg',
      pointOfInterestId: duomoPoi.id,
    },
    {
      name: 'Notte in Branca',
      start_date: '2022-08-22',
      end_date: '2022-08-22',
      description: '“Divenuta inagibile, la Torre andò “fuori servizio” nel 1972.',
      site: 'https://museobranca.it/torre-branca-2/',
      img: 'https://museobranca.it/wp-content/uploads/2014/01/TorreBranca-Notturna-345x230.jpg',
      pointOfInterestId: torrePoi.id,
    },
  ]

  const itList = [
    {
      name: 'Tour Arte',
      description: 'fa caldo',
      img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Interior_of_Il_Duomo%2C_Milan.jpg',
      duration: '1 Pomeriggio',
    },
  ]
  const arteIt = await models.Itinerary.create(itList[0])

  const serviceList = [
    {
      name: 'Farmacia Loreto',
      description: 'curiamo le coltellate di piazzale Loreto',
      gps: "246' 2414'' ",
      site: 'lame.net',
      img: 'https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg',
    },
  ]

  const joinList = [
    {
      itineraryId: arteIt.id,
      pointOfInterestId: torrePoi.id,
    },
  ]
  await models.Event.bulkCreate(eventList)
  await models.PointOfInterest.bulkCreate(poiList)
  await models.Itinerary.bulkCreate(itList)
  await models.Service.bulkCreate(serviceList)
  await models.JoinPoints.bulkCreate(joinList)

}
