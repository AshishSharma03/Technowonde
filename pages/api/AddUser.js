import data from "../../lib/data";
import dbConnect from "../../lib/dbConnect";
import User from "../../lib/User";

export default async function handler(req, res) {
  await dbConnect();
  const {email , userName , password , role} =  req.body
  try{
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(422)
        .send({ error: "use already exists with that email" });
    }
      const k = await new User({
          email,
          password,
          userName,
          role,
        }).save()
        res.send({message: "success"})
    }catch(err){
        console.log(err)
    }
  
    

}


