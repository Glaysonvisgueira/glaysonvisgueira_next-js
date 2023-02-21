import clientPromise from "../../lib/mongo";

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db("projetoreciclagem");

		const posts = await db.collection("depositos").find({}).limit(1).toArray();

		res.json(posts);
	} catch (e) {
		console.error(e);
		throw new Error(e).message;
	}
}
