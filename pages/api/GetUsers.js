import dbConnect from "../../lib/dbConnect";
import User from "../../lib/User";


export default async function handler(req, res) {
  await dbConnect();
  try{

    const user = await User.find({});
    res.send(user) 
  }catch(err){
    res.send(err)
  }

}