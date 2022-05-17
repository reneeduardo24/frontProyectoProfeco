import{Request, Response} from 'express';
import pool from '../database';

class ComentariosController{
    public async list(req: Request, res: Response): Promise<void> {
        const reports = await pool.query('SELECT * FROM comentarios-comercios');
        res.json(reports);
        
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const reports = await pool.query('SELECT * FROM comentarios-comercios WHERE id = ?', [id]);
        console.log(reports.length);
        if (reports.length > 0) {
            return res.json(reports[0]);
        }
        res.status(404).json({ text: "The report doesn't exits" });
    }

    public async create (req: Request, res: Response): Promise <void>{
        await pool.query('INSERT INTO comentarios-comercios set ?', [req.body]);
        res.json({ message: 'Report Saved' });
    }

    
}
const comentariosController = new ComentariosController();
export default comentariosController;