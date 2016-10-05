/* GET 'home' page*/
module.exports.home = function(req, res) {
  res.render('templates/index-caroussel', {});
};

/* GET 'sobre' page*/
module.exports.sobre = function(req, res) {
  res.render('sobre', {});
};
