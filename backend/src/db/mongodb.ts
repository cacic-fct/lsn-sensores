import { MongoClient } from "mongodb";

const connectionString: string = process.env.MONGO_URL || "";
const client = new MongoClient(connectionString);
let conn;
let db;

async function connectToDatabase() {
  try {
    conn = await client.connect();
    db = conn?.db("sample_training");
  } catch (e) {
    console.error(e);
  }
}

connectToDatabase();

export default db;
