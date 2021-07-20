import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const { id } = req.query;
  console.log(req.query);
  const data = await db.collection("todos").removeOne({ _id: ObjectId(id) });
  res.send({ id: id });
}
