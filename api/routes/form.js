const express = require('express');
const formController = require('../controllers/form.js');

const router = express.Router();

router.post("/postinfoset",formValidation,formController.postForm);
router.get("/", formController.getForm);

module.exports = router;


