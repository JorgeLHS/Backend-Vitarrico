import {Schema, model, Types} from 'mongoose';

const User = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
  /*   document: {
        type: String,
        required: true,
        trim: true
    }, */
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contraseña: {
        type: String,
        required: true
    },
    /* phone: {
        type: String,
        required: true,
        trim: true
    }, */
    /* idRol: {
        type: Number,
        required: true
    } */
},
{
    timestamps: true,
    versionKey: false
}
);

export default model('user', User);
