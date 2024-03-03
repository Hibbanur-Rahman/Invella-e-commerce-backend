const path= require('path');
const httpStatusCode = require('../constant/httpStatusCode');
const ViewImages= (req,res)=>{
    const imageName= req.params.imageName;
    const imageUrl= path.join(__dirname,"uploads",imageName);
    console.log(imageUrl)
    return res.status(httpStatusCode.OK).sendFile(imageUrl);
}

module.exports={
    ViewImages
}