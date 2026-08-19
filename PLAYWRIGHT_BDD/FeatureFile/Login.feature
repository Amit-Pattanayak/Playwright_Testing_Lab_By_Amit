Feature: Login functionality
  Verify that the login page works correctly with valid and invalid credentials.

  Scenario: Login with valid credentials
    Given I navigate to "https://demoblaze.com/index.html"
    When I click on the login link
    And I enter username "Amitpattanayak@gmail.com"
    And I enter password "Amit@2648"
    And I click on the login button
    Then I should be redirected to the homepage "https://demoblaze.com/index.html"
