# Login for Demoweb shop site

Feature: Verify Login Functionality on Demowebshop site

Scenario: Login with valid credentials
Given I navigate to "https://demowebshop.tricentis.com/"
When I Click on Login tab
And Verify login page should open 'https://demowebshop.tricentis.com/login'
And I Enter email address "akpattanayak36@gmail.com"
And I Enter Password "Amit@2648"
And I click on Login button
Then Verify user is on HomePage 'https://demowebshop.tricentis.com/'
