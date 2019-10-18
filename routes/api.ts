var express = require('express');
var router = express.Router();
import controllerApi = require('../controller/api')

router.post('/file_upload', async (req, res, next) => {
  try {
    await controllerApi.upload(req)
    res.send('success')
  } catch (error) {
    res.send(error)
  }
})

module.exports = router