class ReviewPage
{
    get ProductPrices()
    {
        return $$("//tr/td[4]/strong")
    }

    get TotalPrice()
    {
        return $("h3 strong")
    }

     SumOfProducts()
    {
        const sumOfProducts=this.ProductPrices.map(prodPrice => parseInt(prodPrice.getText().split(".")[1].trim()))
        .reduce((acc, price) => acc + price, 0)
        return sumOfProducts
    }

    TotalFormattedPrice()
    {
        return parseInt(this.TotalPrice.getText().split(".")[1].trim())
        
    } 
}

module.exports = new ReviewPage()