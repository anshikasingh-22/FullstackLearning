function placeOrder(callback){
    setTimeout(()=>{
        console.log("1. Order is placed")
        return callback()
    }, 1000)
}

function makePayment(callback){
    setTimeout(()=>{
        console.log("2. Payment is done")
        return callback()
    }, 1000)
}

function orderConfirmed(callback){
    setTimeout(()=>{
        console.log("3. Order is confirmed")
        return callback()
    }, 1000)
}

function assignDeliveryPartner(){
    setTimeout(()=>{
        console.log("4. Delivery partner assigned")
    }, 1000)
}

placeOrder(function(){
    makePayment(function(){
        orderConfirmed(function(){
            assignDeliveryPartner(
                console.log("5. Order is delivered")
            )
        })
    })
})
