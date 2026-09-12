// Generated from: PLAYWRIGHT_BDD\FeatureFile\Demo_web_login.feature
import { test } from "../../../PLAYWRIGHT_BDD/Fixtures/Demo_shop.js";

test.describe('Verify Login Functionality on Demowebshop site', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, demo_loginPage }) => { 
    await Given('I navigate to "https://demowebshop.tricentis.com/"', null, { demo_loginPage }); 
    await When('I Click on Login tab', null, { demo_loginPage }); 
    await And('Verify login page should open \'https://demowebshop.tricentis.com/login\'', null, { demo_loginPage }); 
    await And('I Enter email address "akpattanayak36@gmail.com"', null, { demo_loginPage }); 
    await And('I Enter Password "Amit@2648"', null, { demo_loginPage }); 
    await And('I click on Login button', null, { demo_loginPage }); 
    await Then('Verify user is on HomePage \'https://demowebshop.tricentis.com/\'', null, { demo_loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('PLAYWRIGHT_BDD\\FeatureFile\\Demo_web_login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://demowebshop.tricentis.com/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://demowebshop.tricentis.com/\"","children":[{"start":15,"value":"https://demowebshop.tricentis.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When I Click on Login tab","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And Verify login page should open 'https://demowebshop.tricentis.com/login'","stepMatchArguments":[{"group":{"start":30,"value":"'https://demowebshop.tricentis.com/login'","children":[{"children":[{}]},{"start":31,"value":"https://demowebshop.tricentis.com/login","children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"And I Enter email address \"akpattanayak36@gmail.com\"","stepMatchArguments":[{"group":{"start":22,"value":"\"akpattanayak36@gmail.com\"","children":[{"start":23,"value":"akpattanayak36@gmail.com","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And I Enter Password \"Amit@2648\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Amit@2648\"","children":[{"start":18,"value":"Amit@2648","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I click on Login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Verify user is on HomePage 'https://demowebshop.tricentis.com/'","stepMatchArguments":[{"group":{"start":27,"value":"'https://demowebshop.tricentis.com/'","children":[{"children":[{}]},{"start":28,"value":"https://demowebshop.tricentis.com/","children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end