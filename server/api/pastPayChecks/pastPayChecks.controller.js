/**
 * Created by Danny on 12/18/15.
 */
var pastPayCheck = require('./pastPayChecks.model');


exports.newPayCheck = function(req, res) {
  var newPayCheck = new pastPayCheck({
    dateSold : req.body.dateSold,
    activeSalesRepId : req.body.repId,
    pay : req.body.pay,
    panels : req.body.panels
  });

  newPayCheck.save(function(err) {
    if(err) return res.status(500).json(err);
    else return res.status(200).json(newPayCheck);
  })
}
