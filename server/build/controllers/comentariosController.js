"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ComentariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reports = yield database_1.default.query('SELECT * FROM comentarios-comercios');
            res.json(reports);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const reports = yield database_1.default.query('SELECT * FROM comentarios-comercios WHERE id = ?', [id]);
            console.log(reports.length);
            if (reports.length > 0) {
                return res.json(reports[0]);
            }
            res.status(404).json({ text: "The report doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO comentarios-comercios set ?', [req.body]);
            res.json({ message: 'Report Saved' });
        });
    }
}
const comentariosController = new ComentariosController();
exports.default = comentariosController;
