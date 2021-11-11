var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var costume_controller = require('../controllers/costume'); 

router.get('/', costume_controller.costume_view_all_Page)

exports.costume_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Costume(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.costume_type = req.body.costume_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
module.exports = router; 