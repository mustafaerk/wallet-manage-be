const { Router } = require('express');
const moneyController = require('../controllers/moneyController');

const router = Router();

router.post('/createNewTransaction', moneyController.createNewTransaction_post);
router.delete('/deleteTransaction', moneyController.deleteTransaction_delete);
router.post('/updateTransaction', moneyController.updateTransaction_post);
router.get('/getAllIncomes', moneyController.getAllIncomes_get);
router.get('/getAllOutgoing', moneyController.getAllOutgoing_get);
router.get('/getAllTransaction', moneyController.getAllTransaction_get);

module.exports = router;