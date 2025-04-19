const express = require('express');
const app = express();
const dbconnection = require('./config/db');

const userModel = require('./models/user');



const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');




app.get('/', (req, res) => {
    res.render('index');
}
);

app.post('/get-form-data', (req, res) => {
    res.send("data recieved")
}
);



app.get('/register', (req, res) => {
    res.render('register');
}
);
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await userModel.create({
        name: name,
        email: email,
        password: password
    });
    res.send(newUser)
}
);

app.get('/update', async (req, res) => {

    const Updated = await userModel.findOneAndUpdate({ name: 'cd' }, {
        email: "gmakhhcd@gmail.com"
    })

    res.send("user Updated")
    console.log(Updated)
})

app.get('/get-users', async (req, res) => {

    const userupdated = await userModel.find({ name: "cd" })
    res.send(userupdated)
    console.log(userupdated)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);
