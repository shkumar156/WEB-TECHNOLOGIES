const  jwt= require ("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "apex");
      req.userId = decodedData?.id;
      //   console.log(req.userId);
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
      //   console.log(req.userId);
    }
  } catch (error) {
    console.log(error);
  }
  next();
}

