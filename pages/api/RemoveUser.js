import data from "../../lib/data";
import dbConnect from "../../lib/dbConnect";
import User from "../../lib/User";

export default async function handler(req, res) {
  const { id } = req.body;
  await dbConnect();
  try {
    const removeUser = await User.findOneAndDelete({ _id: id });
    res.status(200).send({ message: removeUser });
  } catch (err) {
    console.log(err);
  }
}
