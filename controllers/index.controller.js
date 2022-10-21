exports.home = function(req, res, next) {
    res.render(
        'index', 
        { 
            title: 'Home' , 
            name: 'Julio'
        });
}

exports.projects = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'Projects',
        name: 'Julio' 
      });
}

exports.services = function(req, res, next) {
    res.render(
      'projectservices', 
      { 
        title: 'Services',
      }
    );
}

exports.about = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'About Me',
        name: 'Julio' 
      });
}

exports.contact = function(req, res, next) {
    res.render(
      'index', 
      { 
        title: 'Contact',
        name: 'Julio' 
      });
}