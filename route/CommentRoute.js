const router = require('express').Router();
const CommentController = require('../controller/CommentController');
const { authenticate } = require('../controller/authController');
const { upload } = require('../middleware/upload');

router.get('/', authenticate, CommentController.getAllComment);
router.post('/create', authenticate, CommentController.createComment);
router.delete('/delete', authenticate, CommentController.deleteComment);

module.exports = router;
