const express = require('express');
const UserService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');

const { updateUserSchema, createUserSchema, getUserSchema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();


router.get('/',
    async (req, res, next) => {
        try {
            const users = await service.find();
            res.json(users);
        } catch (error) {
            next(error);
        }
    });

router.get('/login/:email/:password', async (req, res, next) => {
    try {
        const user = await service.findByEmailAndPassword(req.params.email, req.params.password);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

router.get('/:u_id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { u_id } = req.params;
            const category = await service.findOne(u_id);
            res.json(category);
        }
        catch (error) {
            next(error);
        }
    });


router.post('/',
    validatorHandler(createUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newCategory = await service.create(body);
            res.status(201).json(newCategory);
        }
        catch (error) {
            next(error);
        }
    }
);

router.patch('/:u_id',
    validatorHandler(getUserSchema, 'params'),
    validatorHandler(updateUserSchema, 'body'),
    async (req, res, next) => {
        try {
            const { u_id } = req.params;
            const body = req.body;
            const category = await service.update(u_id, body);
            res.json(category);
        }
        catch (error) {
            next(error);
        }
    }
);

router.delete('/:u_id',
    validatorHandler(getUserSchema, 'params'),
    async (req, res, next) => {
        try {
            const { u_id } = req.params;
            const rta = await service.delete(u_id);
            res.json(rta);
        }
        catch (error) {
            next(error);
        }
    }
);




module.exports = router;

