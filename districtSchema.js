const mongoose = require('mongoose');

const districtSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    the_geom: String,
    geonum: {type: Number, unique: true},
    pop: Number,
});

const District = mongoose.model('District', districtSchema);

module.exports = District;