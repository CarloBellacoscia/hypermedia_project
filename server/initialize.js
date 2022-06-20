//import {DataTypes} from "sequelize/types";


export default async (models) => {
    /*const locationList = [
        {
            name: "Cat Paradise",
            city: "Milan"
        },
        {
            name: "Cat City",
            city: "Rome"
        }
    ]
    const location0 = await models.Location.create(locationList[0])
    const location1 = await models.Location.create(locationList[1])
    const catList = [
        {
            name: "Cat 1",
            breed: "Siberian",
            description: "Details about cat 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 2",
            breed: "Birman",
            description: "Details about cat 2",
            img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 3",
            breed: "Bombay",
            description: "Details about cat 3",
            img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
            locationId: location0.id
        },
        {
            name: "Cat 4",
            breed: "Calico",
            description: "Details about cat 4",
            img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
            locationId: location1.id
        },
        {
            name: "Cat 5",
            breed: "Maine Coon",
            description: "Details about cat 5",
            img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
            locationId: location1.id
        },
    ]
    await models.Cat.bulkCreate(catList)*/

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
