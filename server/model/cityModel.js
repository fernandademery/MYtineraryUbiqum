const mongoose = require("mongoose");

const uniqueValidator = require("mongoose-unique-validator");
const citySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  country: {
    type: String,
    required: true
  },
  img: {
    type: Buffer
  }
});

citySchema.plugin(uniqueValidator);

//name of module is the singular version (city) of the database name (cities)
module.exports = mongoose.model("city", citySchema);
