
const express = require("express")
const router = express.Router()
const nodeDataController = require("../../controllers/nodedata.js");

// /* Router functions here */
router.get('/api', (req, res) => {
    res.send('hello REST API')
})

// //Get specific Key Code record in the database
// router.get('/api/keycodes/:keycode',(req, res) => {

// })

//Get all key codes records in the database
// router.get('/api/nodedata',(req, res) => {

// })

//New Key Code Route
router.post('/api/nodedata/newNodeData',(req, res) => {
    if (!req.body.temp || !req.body.humidity || !req.body.co) {
        console.log(req.body.temp,"hi");
        // res.json({ error: true });
      } else {
        nodeDataController.createNewNodeData(
          req.body.temp,
          req.body.humidity,
          req.body.co,
          req.body.triggers,
          // function (result) {
          //   res.json(result);
          // }
        ).then( () => res.json(result) );
      }
})

// //Update key code record
// router.put('/api/keycodes/:keycode',(req, res) => {

// })

// //Delete specific key code record
// router.delete('/api/keycodes/:keycode',(req, res) => {

// })

module.exports = router