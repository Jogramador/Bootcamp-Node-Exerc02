import {Router} from 'express';

const routes = new Router();

routes.get('/', (req, res)=>{
    return res.json({message:'A meta e dominar o REACT'})
});

export default routes;