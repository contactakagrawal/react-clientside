const jwtMiddleware = () => (req, res, next) => {
  next();
};

export default jwtMiddleware;
