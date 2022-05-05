const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const router = Router();

router.get('/getCategories', categoryController.getCategories_get);
router.post('/createCategory', categoryController.createCategory_post);
router.post('/updateCategory', categoryController.updateCategory_post);
router.delete('/deleteCategory', categoryController.deleteCategory_delete);

module.exports = router;