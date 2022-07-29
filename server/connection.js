const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  `mongodb+srv://${process.env.db_user}:${process.env.db_pw}@cluster0.s11qz.mongodb.net/soChat?retryWrites=true&w=majority`,
  () => {
    console.log('connected to mongodb');
  }
);
