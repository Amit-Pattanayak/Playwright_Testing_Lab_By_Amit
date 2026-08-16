// Generated from: Playwright\FeatureFile\Login.feature
import { test } from "playwright-bdd";

test.describe('Login functionality', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I navigate to "https://demoblaze.com/index.html"', null, { page }); 
    await When('I click on the login link', null, { page }); 
    await And('I enter username "Amitpattanayak@gmail.com"', null, { page }); 
    await And('I enter password "Amit@2648"', null, { page }); 
    await And('I click on the login button', null, { page }); 
    await Then('I should be redirected to the homepage "https://demoblaze.com/index.html"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('Playwright\\FeatureFile\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://demoblaze.com/index.html\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://demoblaze.com/index.html\"","children":[{"start":15,"value":"https://demoblaze.com/index.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When I click on the login link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And I enter username \"Amitpattanayak@gmail.com\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Amitpattanayak@gmail.com\"","children":[{"start":18,"value":"Amitpattanayak@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And I enter password \"Amit@2648\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Amit@2648\"","children":[{"start":18,"value":"Amit@2648","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I click on the login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the homepage \"https://demoblaze.com/index.html\"","stepMatchArguments":[{"group":{"start":39,"value":"\"https://demoblaze.com/index.html\"","children":[{"start":40,"value":"https://demoblaze.com/index.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end