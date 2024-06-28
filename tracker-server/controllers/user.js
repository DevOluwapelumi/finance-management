const registerSchema = require ('../models/User');

module.exports.register = async (req, res) => {
    console.log(req.body)

    const { 
        firstName,
        lastName,
        email,
        password, } = req.body;
    // console.log(`Register request received: FirstName: ${firstName}, LastName: ${lastName}, Email: ${email}, Password: ${password}`);
    try {
      let user = await registerSchema.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
     const saveUser = new registerSchema({ 
        firstName,
        lastName,
        email,
        password, });
        await saveUser.save();
        console.log(saveUser)   
      res.status(201).json({ msg: 'User registered successfully', user });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
}