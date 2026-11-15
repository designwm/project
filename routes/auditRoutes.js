import express from 'express';

const router = express.Router();

import Audit from './../models/audit.js';


router.post('/', async (req, res) => {
    try{
        const data = req.body;
        const newAudit = new Audit(data);

        const saveAudit = await newAudit.save();

        res.status(201).json({
            message: 'Data succsfully insert',
            data: saveAudit
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Data insert failed',
            error: error.message
        });
    }
    
});

router.get('/', async (req, res) => {
    try{

        const data = await Audit.find();
        console.log("data fatched");
        res.status(201).json(data);

    }catch(error){
        res.status(500).json({error: "failed"});
    }
});

router.get('/:workType', async (req, res) =>{
    try{

        const workType = req.params.workType;

        if(workType == 'chef' || workType == 'waiter' || workType == 'manager'){

            const responce = await Audit.find({work: workType});

            console.log(responce);
            res.status(200).json(responce);

        }else{
            console.log("invalid");
        }

    }catch(error){
        console.log(error);
       res.status(500).json({error: "failed"});
    }

});

router.put('/:id', async (req, res) => {
    try{
        const autitId = req.params.id;
        const updatedautitData = req.body;

        const responce = await Audit.findByIdAndUpdate(autitId, updatedautitData, {
            new: true,
            runValidators: true
        });

        if(!responce){
            res.status(404).json({error: "invalid"});
        }

        console.log(responce);
        res.status(200).json(responce);

    }catch(err){
        console.log(error);
       res.status(500).json({error: "failed"});
    }
});
// comment added
export default router;
