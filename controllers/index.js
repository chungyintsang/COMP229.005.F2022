exports.home = function(req, res, next) {
  //Backend: no render page
  res.json(
    {
      success: true,
      message: "This is the home endpoint"
    }
  );
};