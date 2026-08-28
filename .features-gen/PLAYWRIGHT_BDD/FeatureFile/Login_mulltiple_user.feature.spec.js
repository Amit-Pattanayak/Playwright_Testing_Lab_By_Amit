// Generated from: PLAYWRIGHT_BDD\FeatureFile\Login_mulltiple_user.feature
import { test } from "playwright-bdd";

test.describe('Verify that users can log in with valid credentials and handle different user types.', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('I navigate to "https://www.saucedemo.com/"', null, { page }); 
  });
  
  test.describe('Verify login for multiple user types', () => {

    test('Example #1', { tag: ['@DataDriven'] }, async ({ When, Then, And, page }) => { 
      await When('I enter username "standard_user"', null, { page }); 
      await And('I enter password "secret_sauce"', null, { page }); 
      await And('I click on the login button', null, { page }); 
      await Then('I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"', null, { page }); 
    });

    test('Example #2', { tag: ['@DataDriven'] }, async ({ When, Then, And, page }) => { 
      await When('I enter username "problem_user"', null, { page }); 
      await And('I enter password "secret_sauce"', null, { page }); 
      await And('I click on the login button', null, { page }); 
      await Then('I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"', null, { page }); 
    });

    test('Example #3', { tag: ['@DataDriven'] }, async ({ When, Then, And, page }) => { 
      await When('I enter username "performance_glitch_user"', null, { page }); 
      await And('I enter password "secret_sauce"', null, { page }); 
      await And('I click on the login button', null, { page }); 
      await Then('I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"', null, { page }); 
    });

    test('Example #4', { tag: ['@DataDriven'] }, async ({ When, Then, And, page }) => { 
      await When('I enter username "error_user"', null, { page }); 
      await And('I enter password "secret_sauce"', null, { page }); 
      await And('I click on the login button', null, { page }); 
      await Then('I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"', null, { page }); 
    });

    test('Example #5', { tag: ['@DataDriven'] }, async ({ When, Then, And, page }) => { 
      await When('I enter username "visual_user"', null, { page }); 
      await And('I enter password "secret_sauce"', null, { page }); 
      await And('I click on the login button', null, { page }); 
      await Then('I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('PLAYWRIGHT_BDD\\FeatureFile\\Login_mulltiple_user.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":17,"tags":["@DataDriven"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I enter username \"standard_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"standard_user\"","children":[{"start":18,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click on the login button","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the homepage \"https://www.saucedemo.com/inventory.html\"","stepMatchArguments":[{"group":{"start":39,"value":"\"https://www.saucedemo.com/inventory.html\"","children":[{"start":40,"value":"https://www.saucedemo.com/inventory.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":18,"tags":["@DataDriven"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I enter username \"problem_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"problem_user\"","children":[{"start":18,"value":"problem_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click on the login button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the homepage \"https://www.saucedemo.com/inventory.html\"","stepMatchArguments":[{"group":{"start":39,"value":"\"https://www.saucedemo.com/inventory.html\"","children":[{"start":40,"value":"https://www.saucedemo.com/inventory.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":19,"tags":["@DataDriven"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I enter username \"performance_glitch_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"performance_glitch_user\"","children":[{"start":18,"value":"performance_glitch_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click on the login button","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the homepage \"https://www.saucedemo.com/inventory.html\"","stepMatchArguments":[{"group":{"start":39,"value":"\"https://www.saucedemo.com/inventory.html\"","children":[{"start":40,"value":"https://www.saucedemo.com/inventory.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":20,"tags":["@DataDriven"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I enter username \"error_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"error_user\"","children":[{"start":18,"value":"error_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click on the login button","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the homepage \"https://www.saucedemo.com/inventory.html\"","stepMatchArguments":[{"group":{"start":39,"value":"\"https://www.saucedemo.com/inventory.html\"","children":[{"start":40,"value":"https://www.saucedemo.com/inventory.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":21,"tags":["@DataDriven"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://www.saucedemo.com/\"","isBg":true,"stepMatchArguments":[{"group":{"start":14,"value":"\"https://www.saucedemo.com/\"","children":[{"start":15,"value":"https://www.saucedemo.com/","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I enter username \"visual_user\"","stepMatchArguments":[{"group":{"start":17,"value":"\"visual_user\"","children":[{"start":18,"value":"visual_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I enter password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":17,"value":"\"secret_sauce\"","children":[{"start":18,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I click on the login button","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the homepage \"https://www.saucedemo.com/inventory.html\"","stepMatchArguments":[{"group":{"start":39,"value":"\"https://www.saucedemo.com/inventory.html\"","children":[{"start":40,"value":"https://www.saucedemo.com/inventory.html","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end