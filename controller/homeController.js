const ProjectList=require('../models/projectModel');
// controller for main page or home page
module.exports.home= async function(req,res){
    try{
        let projectDet = await ProjectList.find({});
        return res.render('home',{
            project:projectDet,
            title:'home page'
        });
    }
    catch(err){
        console.log('error in Home',err);
        return;
    }
}