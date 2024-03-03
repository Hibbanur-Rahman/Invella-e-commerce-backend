const path= require('path');
const ViewImages= (req,res)=>{
    const imageName= req.params.imageName;
    const imageUrl= path.join(__dirname,"uploads",imageName);
    console.log(imageUrl)
    res.sendFile(imageUrl);
}

module.exports={
    ViewImages
}