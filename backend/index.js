if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const expess = require('express');
const app = expess();

const mongoose = require('mongoose');

let dbUrl = process.env.ATLASDB_URL;

async function main(){
    await mongoose.connect(dbUrl)
}

main().then(() => console.log('Database Connected!'))
.catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});