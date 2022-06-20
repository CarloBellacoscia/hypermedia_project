export default async (models) => {
  const eventList = [
    {
      name: "Miami",
      start_date: "2022-05-26",
      end_date: "2022-05-29",
      description: "bello",
      site: "Magnolia",
      img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg"
    }
  ]


  const poiList = [
    {
      name: "Duomo",
      description: "l'èbellalamadunnina",
      gps: "2131' 14315'' ",
      site: "duomo.net",
      img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg"
    }
  ]

  const itiList = [
    {
      name: "Cammino de satiago",
      description: "fa caldo",
      img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
      duration: "12 anni"
    }
  ]

  const serviceList = [
    {
      name: "Farmacia Loreto",
      description: "curiamo le coltellate di piazzale Loreto",
      gps: "246' 2414'' ",
      site: "coltelli.com",
      img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg"
    }
  ]

  await models.Event.bulkCreate(eventList)
  await models.PointOfInterest.bulkCreate(poiList)
  await models.Itinerary.bulkCreate(itiList)
  await models.Service.bulkCreate(serviceList)
}
