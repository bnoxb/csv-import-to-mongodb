const csv = require('fast-csv');
const mongoose = require('mongoose');
const District = require('./districtSchema');

exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
    const csvFile = req.files.file;

    const districts = [];

    csv
        .fromString(csvFile.data.toString(), {
            headers: true,
            ignoreEmpty: true
        })
        .on('data', function(data){
            data["_id"] = new mongoose.Types.ObjectId();

            districts.push(data);
        })
        .on('end', function(){
            District.create(districts, function(err, documents){
                if (err) throw err;
            });

            res.send(districts.length + ' districts have been successfully uploaded.');
        });
};