import{Request, Response} from 'express';
import pool from '../database';

class ReportsController{
    public async list(req: Request, res: Response): Promise<void> {
        const reports = await pool.query('SELECT * FROM reports');
        res.json(reports);
        
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const reports = await pool.query('SELECT * FROM reports WHERE id = ?', [id]);
        console.log(reports.length);
        if (reports.length > 0) {
            return res.json(reports[0]);
        }
        res.status(404).json({ text: "The report doesn't exits" });
    }

    public async create (req: Request, res: Response): Promise <void>{
        await pool.query('INSERT INTO reports set ?', [req.body]);
        res.json({ message: 'Report Saved' });
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM reports WHERE id = ?', [id]);
        res.json({ message: "The report was deleted" });
    }

    public async update(req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        const oldReport = req.body;
        await pool.query('UPDATE reports set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The report was Updated" });
    }
}
const reportsController = new ReportsController();
export default reportsController;