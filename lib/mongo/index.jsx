import { MongoClient } from "mongodb";

const URI = process.env.DATABASE_URL;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

if (!URI) throw new Error("Please add your Mongo URI to .env");

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV !== "production") {
	if (!global._mongoClientPromise) {
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	clientPromise = client.connect();
}

export default clientPromise;
