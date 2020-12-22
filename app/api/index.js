const express = require('express')
const app = express()
const models = require('../../models')
const Photo = models.Photos

app.get('/photo/list', (req, res) => {
  Photo.findAll().then(photos => {
    return res.json({
      photos: photos
    })
  })
})

app.post('/photo', (req, res) => {
  console.log(req.body)
  const label = req.body.photoForm.label
  const src = req.body.photoForm.src
  console.log(label)
  console.log(src)
  Photo.create({
    label: label,
    src: src
  }).then(photos => {
    return res.json({
      result: true,
    })
  })
})

app.get('/', (req, res) => {
  res.json({ message: 'hello, api' })
})
module.exports = {
  path: '/api',
  handler: app
}
