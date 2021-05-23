import express from 'express';

import{ getPosts, CreatePost } from '../controllers/posts.js';

const router = express.Router();

//http://localhost:5000/posts



router.get('/', getPosts);
router.post('/', CreatePost);

export default router;