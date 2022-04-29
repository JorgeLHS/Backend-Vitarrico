import Supplier from '../model/Supplier';

export const allSuppliers = async (req, res) => {
    try {
        const supplier = await Supplier.find();
        res.status(200).send(supplier);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export const createSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body);
        await supplier.save()
        res.status(201).send(supplier);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.findOneAndUpdate({_id: id}, req.body);
        res.status(201).send(supplier);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const supplier = await Supplier.findOneAndDelete({_id: id});
        res.status(200).send(supplier);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}
