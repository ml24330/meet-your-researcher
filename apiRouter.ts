import express from 'express';
import { Time, Score } from './models';

const router = express.Router();
router.use(express.json());

router.post("/start", async (req, res) => {
    if(!req.body.startTime || !req.body.uuid){
        return res.status(400).json();
    }else{
        try{
            const time = new Time({uuid: req.body.uuid, start: req.body.startTime});
            await time.save();
            await Time.deleteMany({timeTaken: {$exists: true}});
            await Time.deleteMany({start: {$lt: Date.now() - 1000*60*60*24}});
            return res.status(200).json(time);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }
});

router.post("/end", async (req, res) => {
    if(!req.body.endTime || !req.body.uuid){
        return res.status(400).json();
    }else{
        try{    
            const time = await Time.findOne({uuid: req.body.uuid});
            if(!time) throw Error("Record does not exist!");
            const timeTaken = req.body.endTime - time.start;
            await Time.updateOne({uuid: req.body.uuid}, {timeTaken});
            return res.status(200).json({timeTaken: timeTaken});
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }
});

router.post("/publish", async (req, res) => {
    if(!req.body.name || !req.body.uuid){
        return res.status(400).json();
    }else{
        try{
            const time = await Time.findOne({uuid: req.body.uuid});
            if(!time || !time.timeTaken) throw Error("Record does not exist!");
            if(time.timeTaken) await Time.deleteOne({uuid: req.body.uuid});
            const score = new Score({name: req.body.name, time: time.timeTaken});
            await score.save();
            return res.status(200).json(score);
        }catch(e){
            return res.status(400).json({error: e.message});
        }
    }
});

router.get("/scores", async (req, res) => {
    try{
        const scores = await Score.find({});
        scores.sort((a, b) => a.time > b.time ? 1 : -1);
        return res.status(200).json(scores.slice(0,15));
    }catch(e){
        return res.status(400).json({error: e.message});
    }
});

export default router;