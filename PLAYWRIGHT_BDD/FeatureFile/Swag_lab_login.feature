# Mark1 -Using POM and fixture

Feature: Verify that users can log in with valid credentials and handle different user types.

  Background:
    Given I navigate to "https://www.saucedemo.com/"

  @DataDriven
  Scenario Outline: Verify login for multiple user types
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on the login button
    Then I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"

    Examples:
  | username               | password     |
  | standard_user          | secret_sauce |
  | problem_user           | secret_sauce |
  | performance_glitch_user| secret_sauce |
  | error_user             | secret_sauce |
  | visual_user            | secret_sauce |