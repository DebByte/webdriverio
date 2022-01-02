import { Given, When, Then } from '@cucumber/cucumber'
import cucumberJson from 'wdio-cucumberjs-json-reporter';

Given("user open the URL", function () {
    browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
    expect(browser).toHaveTitleContaining("LoginPage Practise")
    cucumberJson.attach({ "json-string": true }, 'application/json');
})

Then("user perform Login", function () {
    $("input[name='username']").setValue("rahulshettyacademy")
    $("#password").setValue("learning")
    console.log("********" + browser.getTitle())
    $("#signInBtn").click()
    cucumberJson.attach({ "json-string": true }, 'application/json');
})