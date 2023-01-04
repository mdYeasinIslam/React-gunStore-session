const fakeDb = (id) => {
   let cart={};
    const storeCart= localStorage.getItem("Cart");
    if(storeCart){
        cart=JSON.parse(storeCart)
    }
   //add quantity in local storage
   const quantity = cart[id];
   if(quantity){
       cart[id]=quantity + 1;
    }
    else{
        cart[id]=1;
    }
    localStorage.setItem("Cart",JSON.stringify(cart))
}

const removeData=(id)=>{
   const getCart=localStorage.getItem("Cart");
   if(getCart){
    const parseCart=JSON.parse(getCart);
    if(id in parseCart){
        const valueMinus=parseCart[id] -1
        parseCart[id] = valueMinus;
        if(valueMinus==0){
            delete parseCart[id]
        }
        localStorage.setItem("Cart",JSON.stringify(parseCart)) 
    }
   }
}
export {fakeDb,removeData}