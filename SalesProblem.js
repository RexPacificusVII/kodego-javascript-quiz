// A. Sales Problem (5 Pts)

// For this exercise, you will have to go through a sales profit data of multiple products and return the product with:

//     Highest sales profit

//     Lowest sales profit

//     Profit nearest to 0


// Implement the functions:

//     topProduct() to return the product name having the highest sales profit

//     bottomProduct() to return the product name having the lowest sales profit

//     zeroProfitProduct() to return the product name having a sales profit closest to 0 in a given array of key-value pair productProfitArray

// Input & Conditions:

//     If productProfitArray is empty returnn "No Data"

//     If two products' sales profit are as close to 0, consider the positive profit as the one closest to zero (eg. Product A: -100, Product B: 100, return Product B)



const productProfitArray = [
    { "Product A": -75 },
    { "Product B": -70 },
    { "Product C": 98 },
    { "Product D": 5 },
    { "Product E": 88 },
    { "Product F": 29 }
];

// To return the product with highest sales profit:

function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    productProfitArray.sort((a, b) => {
        const profitA = Object.values(a)[0];
        const profitB = Object.values(b)[0];
        return profitB - profitA;
    });

    return Object.keys(productProfitArray[0]);
}

// To return the product with lowest sales profit:

function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    productProfitArray.sort((a, b) => {
        const profitA = Object.values(a)[0];
        const profitB = Object.values(b)[0];
        return profitA - profitB;
    });

    return Object.keys(productProfitArray[0]);
}

// To return the product with profit nearest to 0:

function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data";
    }

    let closestProduct = null;
    let closestProfit = Infinity;

    for (const product of productProfitArray) {
        const productName = Object.keys(product)[0];
        const profit = Object.values(product)[0];
        const absoluteProfit = Math.abs(profit);

        if (absoluteProfit < closestProfit || (absoluteProfit === closestProfit && profit > 0)) {
            closestProduct = productName;
            closestProfit = absoluteProfit;
        }
    }

    return closestProduct;
}
 
console.log(`Top Product: ${topProduct(productProfitArray)}`);
console.log(`Bottom Product: ${bottomProduct(productProfitArray)}`);
console.log(`Zero Profit Product: ${zeroProfitProduct(productProfitArray)}`);
