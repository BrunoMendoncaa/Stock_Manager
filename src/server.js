import app from './app.js'
import 'dotenv/config'

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server online at port ${port}`)
})