/**
 * Created by Danny on 12/18/15.
 */
var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

var pastPayChecksSchema = new Schema({
  dateSold : Date,
  activeSalesRepId : Number,
  pay : Number,
  panels : Number
})

module.exports = mongoose.model('pastPayCheck', pastPayChecksSchema);
