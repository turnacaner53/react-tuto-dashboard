const mongoose = require('mongoose');
require('dotenv').config()

mongoose.set('strictQuery', false);

mongoose
  .connect(`${process.env.MONGOOSE_DB_KEY}`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));
