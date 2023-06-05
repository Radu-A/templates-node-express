const express = require('express')

const app = express()
const port = 3000

// Template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

//Public folder
app.use(express.static('public'))


const info = {
    address: 'The Bridge, Madrid',
    phone: '111222333',
    email: 'thebridge@thebridge.es'
}


app.get('/', (req, res) => {
    res.render('home');
})
app.get('/who', (req, res) => {
    res.render('who');
})
app.get('/where', (req, res) => {
    res.render('where', { info });
})
app.get('/what', (req, res) => {
    res.render('what');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})


app.listen(port, () => {
    console.log(`Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`)
})

