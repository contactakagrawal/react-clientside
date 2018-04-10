const jwtMiddleware = () => (req, res, next) => {
  console.log('jwt-middleware invoked...');
  const validToken = true;
  const url = req.url;
  console.log(`url : ${url}`);
  if(url === '/reset-password'){

  }
  next();
  
};

export default jwtMiddleware;
