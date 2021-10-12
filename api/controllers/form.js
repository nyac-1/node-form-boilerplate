const getForm = (req, res)=>{
    var smth = "All good!";
    if(Math.floor(Math.random() * 10)%2 == 0){
        smth = "Not so good!";
    }

    return res.status(200).json({response: smth});
}

const postForm = (req, res)=>{
    console.log(req.body);
    return res.status(200).json({response: "kudos!"});
}

module.exports = {
    getForm,
    postForm
}