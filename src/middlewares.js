export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Honey";
  res.locals.loggedIn = req.session.loggedIn;
  res.locals.user = req.session.user;
  next();
};
