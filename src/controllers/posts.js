const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');

const postService = require('../services/postService');

router.get('/', async (req, res, next) => {
    try {
        const postList = await postService.find(res.locals.user.email, req.query.matchText);
        res.json(postList);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
});

router.post('/create', [
        body('title').trim().notEmpty(),
        body('description').trim().notEmpty(),
        body('privacy').trim().notEmpty()
    ],
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(422).json({errors: errors.array()});
            }

            console.log(res.locals.user);
            const post = await postService.create({user: res.locals.user.email, ...req.body});
            res.json(post);
        } catch (e) {
            console.error(e);
            res.status(500).send(e.message);
        }
    });


router.get('/:id', async (req, res, next) => {
    try {
        const post = await postService.findById({user: res.locals.user.email, id: req.params.id});
        res.json(post);
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        await postService.delete({user: res.locals.user.email, id: req.params.id});
        res.json({message: 'Post deleted successfully'});
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
});

module.exports = router;
