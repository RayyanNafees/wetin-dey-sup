import express from 'express';

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Wetin dey sup? Wahala be for thos niggas who no sabi deploying to heroku')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
