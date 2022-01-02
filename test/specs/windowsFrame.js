describe("Windows and Frames Handling",()=>
{
    xit("Parent Child Windows Switch",()=> 
    {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        $("[onclick*='openWindow']").click()
        let handles= browser.getWindowHandles()
        browser.switchToWindow(handles[1])
        console.log(browser.getTitle())
        //let childTitle = browser.getTitle()
        expect(browser).toHaveTitleContaining("QA Click Academy")
        browser.maximizeWindow()
        browser.closeWindow
        browser.switchToWindow(handles[0])
        console.log(browser.getTitle())

        
    })

    xit("Open Window on the fly",()=>
    {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")

        browser.newWindow("https://rahulshettyacademy.com/#/index")
        const title= browser.getTitle()
        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/")
        $("#name").setValue(title)
        browser.pause(3000)
        browser.switchWindow(title)
        //console.log(browser.getUrl)
    })
    
    xit("Operations with Frames",()=>
    {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        $("#mousehover").scrollIntoView()
        console.log($$("a").length)
        browser.switchToFrame($("[id='courses-iframe']"))
        console.log($("=Courses").getTagName())
        console.log($$("a").length)
        browser.switchToFrame(null)
        console.log($$("a").length)
    })

})