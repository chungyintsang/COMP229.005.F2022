// Student ID: 301216704
// Name: Chung Yin Tsang
// Date: 21 Oct 2022

exports.home = function(req, res, next) {
  res.render('index', 
  { 
    title: 'Home'
  });
}

exports.projects = function(req, res, next) {
  res.render(
    'projects', 
    { 
      title: 'Projects' 
    });
}

exports.services = function(req, res, next) {
  res.render(
    'services', 
    { 
      title: 'Services'
    }
  );
}

exports.about = function(req, res, next) {
  res.render(
    'about', 
    { 
      title: 'About Me'
    });
}


exports.contact = function(req, res, next) {
  res.render(
    'contact', 
    { 
      title: 'Contact',
    });
}



