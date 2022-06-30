const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const initialize = require('./initialize').default
app.use(express.json())

// Development
const database = new Sequelize(
  'postgres://postgres:postgres@localhost:5432/mi_guardi',
  { logging: false }
)

// Production (use this code when deploying to production in Heroku)
/* const pg = require('pg')
pg.defaults.ssl = true
const database = new Sequelize(process.env.DATABASE_URL, {
  ssl: true,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
}) */

// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const Event = database.define(
    'event',
    {
      name: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      description: DataTypes.STRING,
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
      description: DataTypes.STRING(1024),
      gps: DataTypes.STRING,
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
    description: DataTypes.STRING,
    gps: DataTypes.STRING,
    neigh: DataTypes.STRING,
    site: DataTypes.STRING,
    img: DataTypes.STRING,
    alt_img: DataTypes.STRING,
  })

  const JoinPoints = database.define('join_points', {}, { timestamps: false })


  const Itinerary = database.define('itinerary', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
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

const pageContentObject = {
  index: {
    title: 'Homepage',
    image: 'https://fs.i3lab.group/hypermedia/images/index.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
  },
  about: {
    title: 'About',
    image: 'https://fs.i3lab.group/hypermedia/images/about.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
  },
  contact: {
    title: 'Contact',
    image: 'https://fs.i3lab.group/hypermedia/images/about.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
  },
  faq: {
    title: 'FAQ',
    image: 'https://fs.i3lab.group/hypermedia/images/about.jpeg',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
  },
}

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
        gps: element.gps,
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
        gps: element.gps,
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
      include: [{ model: models.Itinerary }]
    })

    const filtered = []

    for (const element of result.itineraries) {
      filtered.push({
        name: element.name,
        img: element.img,
        alt_img: element.alt_img,
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
        id: element.id,
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
