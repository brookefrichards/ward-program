'use strict';

const getData = function (req, res) {
    res.json({
        name: 'Brooke Frandsen',
        "presenting": "test",
        "conducting": "",
        "chorister": "",
        "organist": "",
        "openingHymn": "",
        "invocation": "",
        "sacramentHymn": "",
        "closingHymn": "",
        "benediction": "",
    })
}

module.exports = getData;