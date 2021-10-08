const getForm = (req, res)=>{
    var smth = "All good!";
    if(Math.floor(Math.random() * 10)%2 == 0){
        smth = "Things are not going good!";
    }

    return res.status(200).json({response: smth});
}
module.exports = {
    getForm,
}