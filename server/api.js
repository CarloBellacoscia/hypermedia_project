import contentJson from './json/content.json'

const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

/*
// Development
 const database = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/mi_guardi',
  { logging: false }
) */

// Production (use this code when deploying to production in Heroku)
// eslint-disable-next-line import/order
const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
})

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const Event = database.define(
    'event',
    {
      name: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      description: DataTypes.STRING(2048),
      site: DataTypes.STRING,
      img: DataTypes.STRING,
      alt_img: DataTypes.STRING,
    },
    { timestamps: false }
  )

  const PointOfInterest = database.define(
    'point_of_interest',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING(2048),
      place_id: DataTypes.STRING,
      neigh: DataTypes.STRING,
      site: DataTypes.STRING,
      img: DataTypes.STRING,
      alt_img: DataTypes.STRING,
    },
    { timestamps: false }
  )
  PointOfInterest.hasMany(Event)
  Event.belongsTo(PointOfInterest)

  const Service = database.define('service', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING(2048),
    place_id: DataTypes.STRING,
    neigh: DataTypes.STRING,
    site: DataTypes.STRING,
    img: DataTypes.STRING,
    alt_img: DataTypes.STRING,
  })

  const JoinPoints = database.define('join_points', {}, { timestamps: false })


  const Itinerary = database.define('itinerary', {
    name: DataTypes.STRING,
    description: DataTypes.STRING(2048),
    duration: DataTypes.STRING,
    img: DataTypes.STRING,
    alt_img: DataTypes.STRING,
  }  // DO NOT REMOVE TIMESTAMP, used in the homepage
  )
  Itinerary.belongsToMany(PointOfInterest, { through: JoinPoints })
  PointOfInterest.belongsToMany(Itinerary, { through: JoinPoints })

  await database.sync({ force: true })
  return {
    Event,
    PointOfInterest,
    Service,
    JoinPoints,
    Itinerary,
  }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = contentJson

async function runMainApi() {
  const models = await initializeDatabaseConnection()
  await initialize(models)

  app.get('/page-info/:topic', (req, res) => {
    const { topic } = req.params
    const result = pageContentObject[topic]
    return res.json(result)
  })

  // HTTP GET api that returns all the events in our actual database
  app.get('/events', async (req, res) => {
    const result = await models.Event.findAll({
      include: [{ model: models.PointOfInterest }],
      order: [['start_date', 'ASC']],
    })
    const filtered = []
    // console.log(JSON.stringify(result, null, 2))
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        alt_img: element.alt_img,
        start_date: element.start_date,
        end_date: element.end_date,
        id: element.id,
        position: element.point_of_interest.name,
      })
    }
    return res.json(filtered)
  })

  app.get('/events_details/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Event.findOne({
      where: { id },
      include: [{ model: models.PointOfInterest }],
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the services in our actual database
  app.get('/services', async (req, res) => {
    const result = await models.Service.findAll({ order: [['name', 'ASC']] })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        description: element.description,
        category: element.category,
        place_id: element.place_id,
        neigh: element.neigh,
        site: element.site,
        img: element.img,
        alt_img: element.alt_img,
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  app.get('/services_details/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Service.findOne({ where: { id } })
    return res.json(result)
  })

  // HTTP GET api that returns all the points of interest in our actual database
  app.get('/poi', async (req, res) => {
    const result = await models.PointOfInterest.findAll({
      order: [['name', 'ASC']],
    })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        description: element.description,
        place_id: element.place_id,
        site: element.site,
        img: element.img,
        alt_img: element.alt_img,
        neigh: element.neigh,
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  // fetch a single poi randomly from the DB
  app.get('/rnd_poi', async (req, res) => {
    const result = await models.PointOfInterest.findOne({
      order: Sequelize.literal('random()'),
    })
    return res.json(result)
  })

  app.get('/poi_details/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.PointOfInterest.findOne({ where: { id },
      include: [{ model: models.Itinerary }, {model: models.Event}]
    })

    const filtered = []

    for (const element of result.itineraries) {
      filtered.push({
        name: element.name,
        img: element.img,
        alt_img: element.alt_img,
        duration: element.duration,
        id: element.id,
      })
    }

    const filteredEvents = []

    for (const element of result.events) {
      filteredEvents.push({
        name: element.name,
        img: element.img,
        alt_img: element.alt_img,
        start_date: element.start_date,
        end_date: element.end_date,
        id: element.id,
      })
    }

    const temp = {
      id: result.id,
      name: result.name,
      description: result.description,
      site: result.site,
      img: result.img,
      alt_img: result.alt_img,
      neigh: result.neigh,
      itineraries: filtered,
      events: filteredEvents,
      place_id: result.place_id,
    }
    // console.log(JSON.stringify(temp, null, 2))

    return res.json(temp)  })

  // HTTP GET api that returns all the itineraries in our actual database
  app.get('/itineraries', async (req, res) => {
    const result = await models.Itinerary.findAll({ order: [['createdAt', 'DESC']] })
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        description: element.description,
        img: element.img,
        alt_img: element.alt_img,
        duration: element.duration,
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  app.get('/itineraries_details/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.Itinerary.findOne({
      where: { id },
      include: [{ model: models.PointOfInterest }],
    })
    const filtered = []

    for (const element of result.point_of_interests) {
      filtered.push({
        name: element.name,
        img: element.img,
        alt_img: element.alt_img,
        position: element.position,
        id: element.id,
        place_id: element.place_id,
      })
    }

    const temp = {
      id: result.id,
      name: result.name,
      description: result.description,
      img: result.img,
      alt_img: result.alt_img,
      duration: result.duration,
      point_of_interests: filtered,
    }
    // console.log(JSON.stringify(temp, null, 2))

    return res.json(temp)
  })

  // HTTP POST api, that will push (and therefore create) a new element in
  // our actual database
  app.post('/cats', async (req, res) => {
    const { body } = req
    await models.Cat.create(body)
    return res.sendStatus(200)
  })
}

runMainApi()

export default app
