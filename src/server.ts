import express from 'express'
import { routes } from './routes'
const PORT = 3000

const app = express()

app.use(express.json())
app.use(routes)

app.listen( PORT || 3000, () => console.log(`app listening on port 3000`))