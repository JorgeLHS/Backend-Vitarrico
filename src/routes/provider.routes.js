import { Router } from "express";
import {
    allSuppliers,
    createSupplier,
    updateSupplier,
    deleteSupplier
} from '../controller/provider.controller';

const router = Router();

router.get('/supplier', allSuppliers);

router.post('/supplier', createSupplier);

router.put('/supplier', updateSupplier);

router.delete('/supplier', deleteSupplier);

export default router;
