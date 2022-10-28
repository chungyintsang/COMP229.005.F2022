// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

exports.home = function(req, res, next) {
  res.render('index', 
  { 
    title: 'Home',
    //Check if req.user exist. yes: username, no: ''
    userName: req.user ? req.user.username : ''
  });
}

exports.projects = function(req, res, next) {
  res.render(
    'projects', 
    { 
      title: 'Projects',
      userName: req.user ? req.user.username : '' 
    });
}

exports.services = function(req, res, next) {
  res.render(
    'services', 
    { 
      title: 'Services',
      userName: req.user ? req.user.username : ''
    }
  );
}

exports.about = function(req, res, next) {
  res.render(
    'about', 
    { 
      title: 'About Me',
      userName: req.user ? req.user.username : ''
    });
}


exports.contact = function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact',
      userName: req.user ? req.user.username : ''
    });
}



