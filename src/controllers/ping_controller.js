function pingController(request,response){
   return response.json({
      message:'ok from v1 API'
   });
}

function pingControllerV2(request,response){
   return response.json({
      message:'ok from v2 API'
   });
}

module.exports = {
   pingController,
   pingControllerV2
}