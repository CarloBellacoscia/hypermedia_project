import eventJson from './json/events.json'
import poiJson from './json/poi.json'
import itJson from './json/itineraries.json'
import servicesJson from './json/services.json'
import joinJson from './json/joinlist.json'


export default async (models) => {

  const poiList = poiJson
  const eventList = eventJson
  const itList = itJson
  const serviceList = servicesJson
  const joinList = joinJson

  await models.Service.bulkCreate(serviceList)
  await models.PointOfInterest.bulkCreate(poiList)
  await models.Event.bulkCreate(eventList)
  await models.Itinerary.bulkCreate(itList)
  await models.JoinPoints.bulkCreate(joinList)
}
