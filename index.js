const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// ระบุ path ที่เก็บ static files เช่น CSS
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
