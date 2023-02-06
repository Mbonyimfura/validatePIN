function validatePin(pin){
    let checkLength=pin.length==4 || pin.length==6;
    let numbers=/^[0-9]/g
    if(checkLength&&pin.match(numbers)) {return true
    }else return false
}

console.log(validatePin('1235642'))