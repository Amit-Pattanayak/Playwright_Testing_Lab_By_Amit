Feature: Verify Login Functionality on Sauce Demo

  Verify that the login page works correctly with valid and invalid credentials.

  Scenario: Login with valid credentials
    Given I navigate to "https://www.saucedemo.com/"
    When I enter valid Username "standard_user"
    And I enter valid Password "secret_sauce"
    And I click on the login button
    Then I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"
