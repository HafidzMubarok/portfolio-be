const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Model = require('../models/User');

exports.user_post = asyncHandler(async (req, res, next) => {
    const data = new Model({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    }); 

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }catch (error) {
        res.status(400).json({message: error.message})
    }
});

exports.user_signup = asyncHandler(async (req, res, next) => {
    const {
        username,
        email,
        password
      } = req.body;
    
      const newUser = Model({
        username,
        email,
        password,
      });
    
      try {
        await newUser.save();
      } catch {
        const error = new Error("Error! Something went wrong.");
        return next(error);
      }
      
      let token;
      try {
        token = jwt.sign(
          {
            userId: newUser._id,
            email: newUser.email
          },
          "secretkeyappearshere",
          { expiresIn: "1h" }
        );
      } catch (err) {
        const error = new Error("Error! Something went wrong.");
        return next(error);
      }
      res.status(201).json({
        success: true,
        data: {
          userId: newUser._id,
          email: newUser.email,
          token: token
        },
    });
});

exports.user_login = asyncHandler(async (req, res, next) => {
    let { email, password } = req.body;

    let existingUser;
    try {
      existingUser = await Model.findOne({ email: email });
    } catch {
        const error =
          new Error(
              "Error! Something went wrong."
          );
        return next(error);
    }
    if (!existingUser || existingUser.password != password) {
      const error =
        Error(
            "Wrong details please check at once"
        );
      return next(error);
    }
    let token;
    try {
      //Creating jwt token
      token = jwt.sign(
        {
            userId: existingUser._id,
            email: existingUser.email
        },
        "secretkeyappearshere",
        { expiresIn: "1h" }
      );
    } catch (err) {
      console.log(err);
      const error = new Error("Error! Something went wrong.");
      return next(error);
    }
  
    res.status(200).json({
      success: true,
      data: {
        userId: existingUser._id,
        email: existingUser.email,
        token: token,
      },
    });
});

exports.access_resource = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    //Authorization: 'Bearer TOKEN'
    if (!token) {
      res.status(200).json(
        {
          success: false,
          message: "Error!Token was not provided."
        }
      );
    }
    //Decoding the token
    const decodedToken = jwt.verify(token, "secretkeyappearshere");
    res.status(200).json(
      {
        success: true,
        data: {
          userId: decodedToken.userId,
          email: decodedToken.email
        }
      }
    );
});

exports.user_get_all = asyncHandler(async (req, res, next) => {
    try{
        const data = await Model.find();
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.message})
    }
});

exports.user_get_by_id = asyncHandler(async (req, res, next) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
});

exports.user_update = asyncHandler(async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };
    
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
    
        res.send(result)
    }catch (error) {
        res.status(400).json({ message: error.message })
    }
});

exports.user_delete = asyncHandler(async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document ${data.name} has been deleted..`)
    }catch (error) {
        res.status(400).json({ message: error.message })
    }
});