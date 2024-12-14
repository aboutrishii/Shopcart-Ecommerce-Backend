function createProduct(req,res) {
  try {
     


   return res.json({
      success:true,
      error:{},
      message:'Successfully Created Product',
      data:{
         id: Math.random()*(20),
         title:req.body.title,
         description:req.body.description,
         category:req.body.category,
         price:req.body.price,
         image:req.body.image,
      }
   });
  }
  catch(error){
     console.log("something went wrong:" , error);
  }
}
 

module.exports = {
   createProduct
}