function applyBlackFriday(products, discount){
   
     return new Promise((resolve,reject)=>{
       if(typeof discount === 'number'){
           if(discount>0 && discount<=10){
               for(var i=0;i<products.length;i++){
                     if(typeof products[i].price !== 'number' && typeof products[i].name !== 'string' ){
                       reject(new Error('Invalid array format'))
                      }
                     else {
                       discount = discount/100;
                       products[i].price = products[i].price - products[i].price*discount;
                       console.log(products[i].price)
                     }
                }
           }
           else{
               reject(new Error('Discount not applicable'))
           }
       }
       else{
           reject(new Error('Invalid discount'))
       }
       
         
     })

    
}

const app = {
    applyBlackFriday: applyBlackFriday
};
module.exports = app;