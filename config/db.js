import mongoose from "mongoose";

import 'dotenv/config'

const mongoUrl = process.env.mongo_url

export const dbConnection = () => {
    mongoose.connect(mongoUrl).then(() => {
        console.log('database is connected')
    })
};
