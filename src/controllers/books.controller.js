const router = require("express").Router();
const Book = require("../models/books.model");

router.post("/addBook", async (req, res) =>{
    const newBook = new Book({
        title:req.body.title,
        price:req.body.price,
        desc:req.body.desc,
        img:req.body.img
    })

    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.get("/books", async (req, res) =>{
    try {
        const books = await Book.find().lean().exec();
        res.status(200).send(books)
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.patch(
    "/book/:id",
    async (req,res) => {
        try {
           const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
               new: true,
             })
             .lean()
             .exec();
       
           return res.status(201).send(updatedBook);
        } catch (err) {
            return res.status(500).send("Error:",err.message);
        }
       }

)

router.delete(
    "/book/:id",
    async (req,res) => {
        try {
           const deletedBook = await Book.findByIdAndDelete(req.params.id).lean().exec();
       
           return res.status(201).send(deletedBook);
        } catch (err) {
            return res.status(500).send("Error:",err.message);
        }
       });

module.exports = router;