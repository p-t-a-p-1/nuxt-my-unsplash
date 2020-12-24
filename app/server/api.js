const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const app = express()
const models = require('../../models')
const Photo = models.Photos

// req.bodyがundifinedにならないようにbody-parser使う
router.use(bodyParser.urlencoded({ extended: true }))

router.get('/photo/list', (req, res) => {
  Photo.findAll().then(photos => {
    return res.json({
      photos: photos
    })
  })
})

router.post('/photo', (req, res) => {
  const label = req.body.label
  const src = req.body.src
  Photo.create({
    label: label,
    photo_url: src
  }).then(photos => {
    return res.json({
      result: true,
    })
  })
})

router.get('/', (req, res) => {
  res.json({ message: 'hello, api' })
})
// module.exports = {
//   path: '/api',
//   handler: app
// }
module.exports = router
