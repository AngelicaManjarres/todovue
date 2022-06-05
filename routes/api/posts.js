const mongodb = require('mongodb')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    let posts = await bringPosts()
    res.send(await posts.find({}).toArray())
})

router.post('/', async(req, res) => {
    let posts = await bringPosts()
    await posts.insertOne({text: req.body.text, date: new Date()})
    
    res.status(201).send()

})

router.put('/:id', async (req, res) => {
    let posts = await bringPosts()
    await posts.findOneAndUpdate({_id: new mongodb.ObjectId(req.params.id)}, {$set:{text: req.body.text, date: new Date()}})
    res.status(202).send()
})

router.delete('/:id', async (req, res) => {
    let posts = await bringPosts()
    await posts.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.status(200).send()
})




async function bringPosts() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://mainadmin:expense-tracker23@mevn.zgdlwfv.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true})

    return client.db('todo').collection('posts')
}


module.exports = router