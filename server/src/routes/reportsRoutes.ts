import { Router } from 'express';
import  reportsController  from '../controllers/reportsController';

class ReportsRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', reportsController.list);
        this.router.get('/:id', reportsController.getOne);
        this.router.post('/', reportsController.create);
        this.router.delete('/:id', reportsController.delete);
        this.router.put('/:id', reportsController.update)
    }
}

const reportsRoutes = new ReportsRoutes();
export default reportsRoutes.router;