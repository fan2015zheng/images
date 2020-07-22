const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('public/language'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
