require('dotenv').config()
const bodyParser = require('body-parser')
const expressSession = require('express-session')
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080

// Load middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSession({
  secret: 'vueclidemo2',
  resave: true,
  saveUninitialized: true
}))

// Create an HTTPS server
if (process.env.USE_SSL === 'true') {
  const https = require('https')
  const fs = require('fs')
  const privateKey  = fs.readFileSync('./dev/cert/cert.key', 'utf8')
  const certificate = fs.readFileSync('./dev/cert/cert.crt', 'utf8')
  const credentials = { key: privateKey, cert: certificate }  

  const httpsServer = https.createServer(credentials, app)
  httpsServer.listen(8043)  
}

// Enable Express app to serve vuejs-built SPA
app.use(express.static(path.join(__dirname, '..','dist')))

// Enable Express app to receive Get requests
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..','dist', 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`))