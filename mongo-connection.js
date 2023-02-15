const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/kurs', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('errror', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We are connected to mongoDB')
})