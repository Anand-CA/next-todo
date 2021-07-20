import { connectToDatabase } from "../../../util/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const data = await db.collection("todos").insertOne(req.body);
  res.send(data.ops[0]);
}
