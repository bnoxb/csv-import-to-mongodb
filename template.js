const json2csv = require('json2csv').parse;

exports.get = function(req, res) {
    const fields = [
        'the_geom',
        'geonum',
        'pop'
    ];


    //dynamic method as follows, gets tricky if you are trying to exclude certain fields
    // const fields = Object.keys(Authors.schema.obj);

    const csv = json2csv({
        data: '',
        fields: fields
    });

    res.set("Content-Disposition", "attachment;filename=districts.csv");
    res.set("Content-Type", "application/octet-stream");

    res.send(csv);
};