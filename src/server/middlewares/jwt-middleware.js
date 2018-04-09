const jwtMiddleware = () => (req, res, next) => {
  // Handle jwt here
  next()
};

export default jwtMiddleware;
