import express from 'express'
import { createServer as createViteServer } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const root = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.argv.includes('--production') || process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT || 5173)

if (isProduction) {
  app.use(express.static(path.join(root, 'dist')))
  app.use((req, res) => res.sendFile(path.join(root, 'dist', 'index.html')))
} else {
  const vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' })
  app.use(vite.middlewares)
}

app.listen(port, '0.0.0.0', () => console.log(`Cedar Grove Academy is ready at http://localhost:${port}`))
