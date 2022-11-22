exports.home = function(req, res, next) {
  //Backend: no render page
  res.json(
    {
      success: true,
      message: "This is the home endpoint"
    }
  );
};

exports.about = function(req, res, next) {
  res.render('index', { 
      title: 'About',
      userName: req.user ? req.user.username : ''
   });
}

exports.projects = function(req, res, next) {
  res.render('index', { 
    title: 'Projects',
    userName: req.user ? req.user.username : '' 
  });
}