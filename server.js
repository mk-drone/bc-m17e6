let express = require('express');

let app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/auth/google', function (req, res) {
    res.render('login');
});

//https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
//od 4.16 najwyraźniej nie potrzeba instalować osobno body-parser
app.use(express.urlencoded({extended:true}))

app.post('/auth/logged', function (req, res) {
    const creds = {
        login: req.body.login,
        pass: req.body.pass
    }
    res.render('google', {creds});
});

app.listen(3000);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});