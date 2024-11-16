
const express=require('express');
const { getAllServices, addServices, updateServices, deleteServices } = require('../controllers/healthCareControllers');

const router=express.Router();

router.get('/',getAllServices);
router.post('/',addServices);
router.put('/:id',updateServices);
router.delete('/:id',deleteServices);

module.exports=router