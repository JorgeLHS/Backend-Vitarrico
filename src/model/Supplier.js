import {Schema, model, Types} from 'mongoose';

const Supplier = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    categoria: {
        type: String,
        required: true,
        trim: true
    },
    productos: {
        type: Array,
        required: true
    },
    direccion: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model('supplier', Supplier);
