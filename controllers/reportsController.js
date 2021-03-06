const db = require('../models')

const getOneById = (req, res) => {
    console.log(`Querying ${req.params.id}`)
    db.Report.findById(req.params.id, (err, foundReport) => {
        if (err) throw err
        console.log(foundReport)
        res.json(foundReport)
    })
}

const getByCall = (req, res) => {
    console.log(`Querying ${req.params.call}`)
    const query = db.Report.find({callLetters: req.params.call}).sort('-ts').limit(1)
    query.exec((err, foundReport) => {
        if (err) throw err
        console.log(foundReport)
        res.json(foundReport)
    })
}

const createReport = (req, res) => {
    console.log(`Creating ${req.body}`)
    db.Report.create(req.body, (err, newReport) => {
        if (err) throw err
        console.log(newReport)
        res.json(newReport)
    })
}

const editReport = (req, res) => {
    console.log(`Updating ${req.params.id}`)
    db.Report.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedReport) => {
        if (err) throw err
        console.log(updatedReport)
        res.json(updatedReport)
    })
}

const deleteReport = (req, res) => {
    console.log(`Deleting ${req.params.id}`)
    db.Report.findByIdAndDelete(req.params.id, (err, deletedReport) => {
        if (err) throw err
        console.log(deletedReport)
        res.send(`Report ${req.params.id} Deleted`)
    })
}

// const getStations = (req, res) => {
//     console.log(`Querying Stations...`)
//     db.Report.find({}, 'callLetters').exec((err, foundStations) => {
//         if (err) return console.log(err)
//         console.log(foundStations)
//         res.json(foundStations)
//     })
// }

module.exports = {
    getOneById,
    getByCall,
    createReport,
    editReport,
    deleteReport
}