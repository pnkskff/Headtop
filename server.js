// const variables

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
// const cors = require(cors)
const PORT = 2121
require('dotenv').config()

// MongoDB settings

let db
    dbConnectionStr = process.env.DB_STRING
    dbName = 'top-list'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connection Live via ${dbName} database`)
        db = client.db(dbName)
    })

// functionalities to use

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cors())

// API Data - Separate from top-list (Headtop)

const rappers = {
  'Drake': {
    'realName' : 'Aubrey Drake Graham',
    'bestAlbum' : 'Take Care',
    'worstAlbum' : 'Honestly, Nevermind',
    'discography' : 'https://en.wikipedia.org/wiki/Drake_(musician)#Discography'
  },
  'Eminem': {
    'realName' : 'Marshall Bruce Mathers III',
    'bestAlbum' : 'The Marshall Mathers LP',
    'worstAlbum' : 'Revival',
    'discography' : 'https://en.wikipedia.org/wiki/Eminem#Discography'
  },
  'Kanye West': {
    'realName' : 'Kanye Omari West',
    'bestAlbum' : 'My Beautiful Dark Twisted Fantasy',
    'worstAlbum' : 'Jesus is King',
    'discography' : 'https://en.wikipedia.org/wiki/Kanye_West#Discography'
  },
  'Lil Wayne': {
    'realName' : 'Dwayne Michael Carter Jr.',
    'bestAlbum' : 'Tha Carter III',
    'worstAlbum' : 'I Am Not a Human Being',
    'discography' : 'https://en.wikipedia.org/wiki/Lil_Wayne#Discography'
  },
  'Outkast': {
    'realName' : 'Antwan Andre Patton and Andre Lauren Benjamin',
    'bestAlbum' : 'Aquemini',
    'worstAlbum' : 'Idlewild',
    'discography' : 'https://en.wikipedia.org/wiki/Outkast#Discography'
  }
}

const anonRapper = {
  'No Name Rapper': {
    'realName' : 'Name not found',
    'bestAlbum' : 'On YouTube',
    'worstAlbum' : 'On Instagram Story',
    'discography' : 'On Twitter TL'
  }
}


// CRUD code for top-list and Rappers API

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`Server online via port ${PORT}`)
})

app.get('/',(request, response)=>{
    db.collection('top-list').find().sort({likes: -1}).toArray()
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
    console.log('Game On, User')
})

app.get('/api/:rapperName',(request, response)=>{
    const rapName = request.params.rapperName.toLowerCase()
    if(rappers[rapName]){
        response.json(rappers[rapName])
        console.log('User know what\'s up!')
    } else {
      response.json(anonRapper['No Name Rapper'])
      console.log('User is streets behind!')
    }
})

app.post('/top', (request, response) => {
    db.collection('top-list').insertOne({category: request.body.category,
    item: request.body.item, answer: request.body.answer, likes: 0, dislikes: 0})
    .then(result => {
        console.log('User has created a Top... List!')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})

app.put('/addOneLike', (request, response) => {
    db.collection('top-list').updateOne({category: request.body.category, item: request.body.item, answer: request.body.answer, likes: request.body.likes, dislikes: request.body.dislikes},{
        $set: {
            likes:request.body.likes + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Plus Like')
        response.json('Plus Like')
    })
    .catch(error => console.error(error))
})

app.put('/minusOneLike', (request, response) => {
    db.collection('top-list').updateOne({category: request.body.category, item: request.body.item, answer: request.body.answer, likes: request.body.likes, dislikes: request.body.dislikes},{
        $set: {
            dislikes:request.body.dislikes + 1
          }
    },{
//        sort: {_id: -1},
//        upsert: true
    })
    .then(result => {
        console.log('Dislike')
        response.json('Dislike')
    })
    .catch(error => console.error(error))
})

app.delete('/deleteItem', (request, response) => {
    db.collection('top-list').deleteOne({category: request.body.category})
    .then(result => {
        console.log('Item Deleted')
        response.json('Item Deleted')
    })
    .catch(error => console.error(error))
})
