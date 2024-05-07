// importamos el modelo
import { where } from 'sequelize';
import Citas from '../models/Citas.js'


//Metodos CRUD
// crear una funcion para agregar citas

export const agregarCitas = async (req, res) =>{

    try {
        await Citas.create(req.body)
        res.json({msg: "cita creada exitosamente"});

    } catch (error) {
        res.json({msg: error.message});
        
    }
}
// funcion para mostrar todas las citas

export const getAllcitas = async (req,res) => {
    try {

        const citas  = await Citas.findAll();
        res.json(citas);
        
    } catch (error) {
        res.json({msg: error.message})

        
    }
}
 
// funcion o metodo mostrar una cita

export const getCita = async (req, res) =>{
    try {
        const cita = await Citas.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0]);

    } catch (error) {
        res.json({msg: error.messaage})        
    }
}

// funcion modificar cita

export const modificarCita = async (req,res) =>{
    try {

        await Citas.update(req.body, {
            where:{id:req.params.id} 
        })
        res.json({ msg: 'Se modifico una cita'})

    }catch (error) {
        res.json({msg: error.messaage})        
    }
}

// funcion eliminar cita

export const eliminarCita = async (req,res) =>{
    try {
       const citas  = await Citas.findAll({where:{id: req.params.id}});
        if(!citas[0]){
            res.json({ msg: 'no se encontro cita'});
        }
        await citas[0].destroy();
        res.json({ msg: 'Se elimino la cita'});
    }catch (error) {
        res.json({msg: error.messaage})        
    }
}