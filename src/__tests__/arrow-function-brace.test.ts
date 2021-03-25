import { RuleTester } from "eslint";

import rule from "../rules/arrow-function-brace";

const tester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

tester.run("arrow-function-brace", rule, {
  valid: [
    {
      code: `const getName = () => "test"`,
    },
  ],
  invalid: [
    {
      code: `const getName = () => {
				return "test";
			}`,
      errors: [{ message: "can remove the brace from the arrow function." }],
    },
  ],
});
