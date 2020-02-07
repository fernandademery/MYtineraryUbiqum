const express = require("express");
const router = express.Router();

const commentModel = require("../model/commentModel");

router.post("/savecomment", (req, res) => {
    const comment = new commentModel(req.body);
    comment.save((err, comment) => {
        if (err) return res.json({
            success: false,
            err
        })
        commentModel.find({
                "_id": comment._id
            })
            .populate("writer")
            .exec((err, result) => {
                if (err) return res.json({
                    success: false,
                    err
                })
                return res.status(200).json({
                    success: true,
                    result
                })
            })
    })
})

module.exports = router;