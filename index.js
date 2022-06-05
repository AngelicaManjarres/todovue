const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const routerPosts = require('./routes/api/posts')

app.use(express.json())
app.use(cors())

app.use('/api/posts', routerPosts)


app.listen(PORT, () => console.log(`Server up and running on port: ${PORT}`))