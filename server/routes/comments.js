const express = require("express");
const router = express.Router();
const passport = require("passport");

const commentModel = require("../model/commentModel");
const userModel = require("../model/userModel");

// To post comments

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

//Get existing comments from mongodb to display in frontend

router.post("/getcomments", (req, res) => {
    commentModel.find({
            "postId": req.body.postId
        })
        .populate("writer")
        .exec((err, comments) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({
                success: true,
                comments
            })
        })
})




module.exports = router;