function makeTransaction(quantity, pricePerDroid) {
    return ("You ordered ${quantity} droids worth ${quantity * pricePerDroid}");
}

console.log(makeTransaction(5,3500))