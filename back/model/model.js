import db from '../database/db.js'
import { DataTypes } from 'sequelize'


const userModel = db.define('usuarios',{
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
      },
    nombre: { type: DataTypes.STRING },
    apellidoPat: { type: DataTypes.STRING },
    apellidoMat: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
})

export default userModel