describe("Ecommerce Application", () => {
    it("Login Fail page title", () => {
        //wdiocode
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("LoginPage Practise")
        $("input[name='username']").setValue("Avijit")
        $("#username").setValue("secondCss")
        $("#password").setValue("learning")
        $("#signInBtn").click()
        console.log($(".alert-danger").getText() +": Error Message")

        //$("#signInBtn").getAttribute('value') ==='Sign In'
        browser.waitUntil(()=> $("#signInBtn").getAttribute('value') === 'Sign In',
            { timeout: 4000, timeoutMsg: 'Err msg did not appear'})
        console.log($(".alert-danger").getText() +": Error Message")

        console.log($("p").getText()+"Txt msg")
        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
    })

    xit("Login Pass page title", () => {
        //wdiocode
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        $("input[name='username']").setValue("rahulshettyacademy")
        $("#password").setValue("learning")
        $("#signInBtn").click()
       
       const checkoutLink= $("*=Checkout")
       checkoutLink.waitForExist()
       expect(browser).toHaveTitleContaining("ProtoCommerce")
       expect(browser).toHaveUrlContaining("shop")


    })
})