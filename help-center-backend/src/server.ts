import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main(){
    try {
        await mongoose.connect(config.database_url as string);
        app.listen(process.env.PORT, () => {
            console.log(`server running on port ${process.env.PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

main();