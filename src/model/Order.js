import {Schema, model, Types} from 'mongoose';

const Order = new Schema({
    cliente: {
        type: Types.ObjectId,
        required: true
    },
    productos: {
        type: Array,
        required: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
}
);

export default model('order', Order);
