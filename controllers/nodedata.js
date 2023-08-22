// Import our keyCode schema
const sampleSchema = require("../models/sample.js");

module.exports = {
  //call back function to create our new key code
  createNewNodeData: function (data1, active, data2) {
    const newNodeData = new sampleSchema({
      data1: data1,
      active: active,
      data2: data2,
    });
    newNodeData.save()
    .then( () => console.log(newNodeData) )
    .catch( (err) => { console.error(err) } )
    ;
  },

//   // Get specific Key Code record
//   getKeyCode: function (keyCode, callback) {
//     // More code to follow here
//   },

  // Get all key codes records
//   getAllKeyCodes: function (callback) {
    // More code to follow here
//   },

//   //Update key code record
//   updateKeyCodeRecord: function (keyCode, active, description, callback) {
//     // More code to follow here
//   },

//   //Delete key code record
//   deleteKeyCodeRecord: function (keyCode, callback) {
//     // More code to follow here
//   },
};