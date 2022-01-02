const expectChai = require('chai').expect

describe("Ecommerce Appication", () => {
    xit("UI Controls", () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        $("input[name='username']").setValue("rahulshettyacademy")
        $("#password").setValue("learning")

        //2 $ gives the list of elements as an array, returns all the elements which are matched
        const radioBtns = $$(".customradio")
        userDropdown = radioBtns[1]
        userDropdown.$(".radiotextsty").click() //chain of locators
        const modal = $(".modal-body")
        modal.waitForDisplayed()
        $("#cancelBtn").click()
        console.log(userDropdown.$(".radiotextsty").isSelected())
        userDropdown.$(".radiotextsty").click()
        modal.waitForDisplayed()
        //modal.is
        $("#okayBtn").click()
        radioBtns[0].$(".radiotextsty").click()
        //Step to validate popup is not displayed
        expect(modal).not.toBeDisplayed()
        const dropdown = $("select.form-control")
        dropdown.selectByAttribute('value', 'teach')
        dropdown.selectByVisibleText('Consultant')
        dropdown.selectByIndex(0)

        expectChai(dropdown.getValue()).to.equal("stud")



    })

    xit("Dynamic Dropdown Controls Smoke", () => {
        browser.url("/AutomationPractice/")
        $("#autocomplete").setValue("Ind")
        browser.pause(3000)
        let items = $$("[class='ui-menu-item'] div")
        // for(var i=0;i<items.length;i++){
        //     console.log(items[i].getText())
        // }
        const locator = items.filter(item => item.getText() === 'India')
        locator[0].click()
        browser.pause(3000)
    })

    xit("Checkbox Identification", () => {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        browser.pause(3000)
        const element = $$("input[type='checkbox']")
        element[1].click
        console.log(element[1].isSelected)
        console.log(element[2].isSelected)
        browser.saveScreenshot("screenshot.png")
    })
})