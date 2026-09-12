
# Login for Demoweb shop site

Feature: Verify Login Functionality on Demowebshop site

Scenario: Login with valid credentials
Given I navigate to "https://demowebshop.tricentis.com/"
When I Click on Login tab
And Verify login page should open 'https://demowebshop.tricentis.com/login'
And I Enter email address "akpattanayak36@gmail.com"
And I Enter Password "Amit@2648"
And I click on Login button
And Verify user is on HomePage 'https://demowebshop.tricentis.com/'
And  Verify BOOK tab is on HomePage
And  Verify COMPUTER tab is on HomePage
And  Verify Electronics tab is on HomePage
And  Verify Apparel & Shoes tab is on HomePage
And  Verify Digital downloads tab is on HomePage
And  Verify Jewelry tab is on HomePage
And  Verify Gift Cards tab is on HomePage
And  I click on Cellphone option 
And  I click on Smartphone option
And  I click on AddtoCart option
