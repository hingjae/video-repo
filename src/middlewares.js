export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.siteName = "free-board";
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
