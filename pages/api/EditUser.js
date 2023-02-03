import dbConnect from "../../lib/dbConnect";
import User from "../../lib/User";

export default async function handler(req, res) {
  await dbConnect();
  const {id,email,password,userName,role} =  req.body
  try{
    const user = await User.findById(id);
    if (user) {
        user.userName = userName;
        user.email = email;
        user.password = password
        user.role = role;
            await user.save()
        res.send({message: "success"})
    }else{
        res.send({error:"user Not exist"})
    }
    }catch(err){
        console.log(err)
    }
  
    

}


