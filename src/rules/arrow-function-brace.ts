import { Rule } from "eslint";
import { VariableDeclarator } from "estree";

const rule: Rule.RuleModule = {
  create: (context) => {
    return {
      VariableDeclaration(node) {
        if (node.type !== "VariableDeclaration") return;
        const arrowFunctionDeclarations = node.declarations.filter(
          (f) =>
            f.type === "VariableDeclarator" &&
            f.init &&
            f.init.type === "ArrowFunctionExpression"
        );
        if (arrowFunctionDeclarations === undefined) return;

        arrowFunctionDeclarations.forEach((af: VariableDeclarator) => {
          if (af.init?.type !== "ArrowFunctionExpression") return;
          if (af.init.body.type !== "BlockStatement") return;
          const filteredChildNodes =
            af.init.body.body.map((node) => node.type) ?? [];
          if (
            filteredChildNodes.includes("VariableDeclaration") &&
            filteredChildNodes.includes("ReturnStatement")
          )
            return;
          context.report({
            node,
            message: "can remove the brace from the arrow function.",
          });
        });
      },
    };
  },
};

export = rule;
