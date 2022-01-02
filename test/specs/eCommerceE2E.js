
const expectChai = require('chai').expect
describe("Ecommerce Application", () => {
    it("End to End Test", () => {

        var products = ["Blackberry", "Nokia Edge"]
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        $("input[name='username']").setValue("rahulshettyacademy")
        $("#password").setValue("learning")
        $("#signInBtn").click()
        const checkoutLink = $("*=Checkout")
        checkoutLink.waitForExist()

        cards = $$("div[class='card h-100']")
        cards.filter(card => products.includes(card.$("div h4 a").getText()))
            .map(productCard => productCard.$(".card-footer button").click())
        checkoutLink.click()

        productPrices = $$("//tr/td[4]/strong")
        const sumOfProducts = productPrices.map(prodPrice => parseInt(prodPrice.getText().split(".")[1].trim()))
            .reduce((acc, price) => acc + price, 0)
        console.log(sumOfProducts)

        const totalValue = $("h3 strong").getText()
        const totalIntVal = parseInt(totalValue.split(".")[1].trim())

        expectChai(sumOfProducts).to.equal(totalIntVal)
        $(".btn-success").click()
        $("#country").setValue("Ind")
        $(".lds-ellipsis").waitForExist({ reverse: true })
        $("=India").click()
        $("[type='submit']").click()
        expect($(".alert-success")).toHaveTextContaining("Success")
    })
})