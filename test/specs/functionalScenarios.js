const expectChai = require('chai').expect
describe("Functional testing on Application", () => {
    xit("Scrolling and Mouse hover", () => {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        $("#mousehover").scrollIntoView()
        browser.pause(3000)
        $("#mousehover").moveTo()
        browser.pause(3000)
        $("=Top").click()
    })

    xit("Double Click and window alert", () => {
        browser.url("https://only-testing-blog.blogspot.com/2014/09/selectable.html")
        $("button").doubleClick()
        console.log(browser.isAlertOpen())
        expectChai(browser.isAlertOpen()).to.be.true
        console.log(browser.getAlertText())
        expectChai(browser.getAlertText()).to.equal("You double clicked me.. Thank You..")
        browser.acceptAlert()


    })

    xit("Web Tables sort validation", () => {
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        $("tr th:nth-child(1)").click()
        //retrive the list of names into an array
        //sort all values in array A and create a new array B (Array A== Array B)
        let vegiesLocator = $$("tr td:nth-child(1)")
        const OriginalveggiesNames = vegiesLocator.map(veggie => veggie.getText())
        console.log(OriginalveggiesNames)
        veggiess=OriginalveggiesNames.slice()
        //Arrays are passed by reference
        const sortedVeggiesNames=veggiess.sort()
        console.log(sortedVeggiesNames)
        expectChai(OriginalveggiesNames).to.equal(sortedVeggiesNames)
    })

    xit("Web Tables Filter Validation",()=> {
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        $("input[type='search']").setValue("tomato")
        const vegiesLocator = $$("tr td:nth-child(1)")
        expect(vegiesLocator).toBeElementsArrayOfSize({eq:1})
        console.log(vegiesLocator[0].getText())
        expect(vegiesLocator[0]).toHaveTextContaining("Tomato")
    })
})