import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../util/mongodb";

export default async function (req, res) {
  const { db } = await connectToDatabase();
  const { id, text } = req.query;
  const data = await db.collection("todos").updateOne(
    { _id: ObjectId(id) },
    {
      $set: { text: text },
    }
  );
  res.send({
    id: id,
    text: text,
  });
}
