let express = require('express');
const app = express();

app.use('/',  (req, res) => { res.send('OK') })

const port = process.env.PORT || 8888;
const server = app.listen(port, () => {
    console.log('Connected on : ' + port)
})