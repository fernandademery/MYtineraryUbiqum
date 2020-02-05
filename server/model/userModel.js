const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirmation: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    favourites: {
        type: String
    }
});

userSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        username: this.username,
        id: this._id,
        avatarPicture: this.picture,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, key.secretOrKey, (err, token) => {
        if (err) {
            res.json({
                success: false,
                token: "There was an error"
            });
        } else {
            res.json({
                success: true,
                token: token
            });
        }
    });
}

userSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT(),
    };
};



//name of module is the singular version (city) of the database name (cities)
module.exports = mongoose.model("user", userSchema);