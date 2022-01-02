const LoginPage = require('../pageObjects/LoginPage')
const ShopPage = require('../pageObjects/shopPage')
const ReviewPage = require('../pageObjects/reviewPage')
const expectChai = require('chai').expect
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/LoginTest.json'))
let e2eCredentials = JSON.parse(fs.readFileSync('test/testData/e2eTest.json'))
describe("Ecommerce Application", () => {
    credentials.forEach(({ username, password }) => {

        xit("Login Fail page title Smoke", () => {
            //wdiocode
            browser.url("/loginpagePractise/#")
            console.log(browser.getTitle())
            expect(browser).toHaveTitleContaining("LoginPage Practise")

            LoginPage.Login(username, password)

            console.log(LoginPage.alert.getText() + ": Error Message")

            browser.waitUntil(() => LoginPage.signIn.getAttribute('value') === 'Sign In',
                { timeout: 4000, timeoutMsg: 'Err msg did not appear' })
            console.log(LoginPage.alert.getText() + ": Error Message")

            console.log(LoginPage.textInfo.getText() + "Txt msg")
            expect(LoginPage.textInfo).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
        })
    })

    e2eCredentials.forEach(({ products }) => {
        it("End to End Test", () => {

           // var products = ["Blackberry", "Nokia Edge"]
            browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
            LoginPage.Login("rahulshettyacademy", "learning")

            ShopPage.checkout.waitForExist()
            ShopPage.addProductToCart(products)
            ShopPage.checkout.click()
            const sumOfProducts = ReviewPage.SumOfProducts()
            console.log(sumOfProducts)
            const totalIntVal = ReviewPage.TotalFormattedPrice()
            expectChai(sumOfProducts).to.equal(totalIntVal)
            $(".btn-success").click()
            $("#country").setValue("Ind")
            $(".lds-ellipsis").waitForExist({ reverse: true })
            $("=India").click()
            $("[type='submit']").click()
            expect($(".alert-success")).toHaveTextContaining("Success")
        })
    })
})