const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/myapp'

// Modèle MongoDB : une visite = un document
const Visit = mongoose.model('Visit', new mongoose.Schema({
  date: { type: Date, default: Date.now }
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/visits', async (req, res) => {
  await Visit.create({})
  const total = await Visit.countDocuments()
  res.json({ visits: total })
})

// Démarrage du serveur après la connexion à MongoDB
mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connecté à MongoDB')
    app.listen(port, () => console.log(`Example app listening on port ${port}`))
  })
  .catch(err => {
    console.error('Erreur de connexion MongoDB :', err.message)
    process.exit(1)
  })
