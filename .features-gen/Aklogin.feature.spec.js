// Generated from: Aklogin.feature
import { test } from "playwright-bdd";

test.describe('Verify Login Functionality on Sauce Demo', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to "https://www.saucedemo.com/"', null, { page }); 
    await When('I enter valid Username "standard_user"', null, { page }); 
    await And('I enter valid Password "secret_sauce"', null, { page }); 
    await And('I click on the login button', null, { page }); 
    await Then('I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Aklogin.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://www.saucedemo.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I enter valid Username \"standard_user\"","stepMatchArguments":[{"group":{"start":23,"value":"\"standard_user\"","children":[{"start":24,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I enter valid Password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":23,"value":"\"secret_sauce\"","children":[{"start":24,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click on the login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the homepage \"https://www.saucedemo.com/inventory.html\"","stepMatchArguments":[{"group":{"start":39,"value":"\"https://www.saucedemo.com/inventory.html\"","children":[{"start":40,"value":"https://www.saucedemo.com/inventory.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end