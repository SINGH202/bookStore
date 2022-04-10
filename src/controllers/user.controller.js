const router = require("express").Router();
const User = require("../models/user.model")

router.post("/user", async (req, res) =>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser);
    } catch (error) {
        req.status(500).json(error.message)
    }
})

router.get("/users", async (req, res) =>{
    try {
        const users = await User.find().lean().exec();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error.message)
    }
})



router.patch(
    "/users/:id",
    async (req,res) => {
        try {
           const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
               new: true,
             })
             .lean()
             .exec();
             
           return res.status(201).send(updatedUser);
        } catch (err) {
            return res.status(500).send("Error:",err.message);
        }
       }

)

router.delete(
    "/users/:id",
    async (req,res) => {
        try {
           const deletedUser = await User.findByIdAndDelete(req.params.id).lean().exec();
       
           return res.status(201).send(deletedUser);
        } catch (err) {
            return res.status(500).send("Error:",err.message);
        }
       });

module.exports = router;