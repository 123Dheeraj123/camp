const express=require('express');
const router= express.Router({mergeParams:true});
const catchAsync = require('../utils/catchAsync');
const {validateReview,isLoggedIn,isReviewAuthor} = require('../middleware');
const reviews=require('../controllers/reviews.js')

router.post('/',isLoggedIn,validateReview, catchAsync(reviews.new))
router.get('/:reviewId',isLoggedIn,isReviewAuthor,catchAsync(reviews.delete))

    module.exports=router;