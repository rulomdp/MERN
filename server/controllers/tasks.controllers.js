import {pool} from '../db.js'

export const getTasks = async (req, res) => {
    try{
        const [resultado] = await pool.query(
        'SELECT * FROM tasks'
        );
        res.json(resultado);
    } catch (error){
        return res.status(500).json({message:error.message});
    }
};

export const getTask = async (req, res) => {
    try{
        const [resultado] = await pool.query(
            "SELECT * FROM tasks WHERE id = ?",[req.params.id]
            );
        
        if (resultado.length === 0)
            return res.status(404).json({message:"Tarea no Encontrada"});
        
        res.json(resultado[0]);

    } catch(error){
        return res.status(500).json({message:error.message});
    }
};

export const createTask = async(req, res) => {
    try{
        const {title,description} = req.body
        const [resultado] = await pool.query(
            "INSERT INTO tasks(title,description) VALUES (?,?)",
            [title, description]
        );
        
        res.json({
            id: resultado.insertId,
            title,
            description,
        });
        
    } catch(error) {
        return res.status(500).json({message:error.message});
    }
};

export const updateTask = async (req, res) => {
    try{
        const resultado = await pool.query(
            "UPDATE tasks SET ? WHERE id = ?",[
            req.body,
            req.params.id,
        ]);
    } catch(error){
        return res.status(500).json({message:error.message});
    }
};

export const deleteTask = async (req, res) => {
    try{
        const [resultado] = await pool.query(
            "DELETE FROM tasks WHERE id = ?",[req.params.id,
            ]);
    } catch(error){
        return res.status(500).json({message:error.message});
    }
};