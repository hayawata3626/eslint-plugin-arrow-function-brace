# eslint-plugin-arrow-function-brace

ESLint plugin that checks if the arrow function can remove the brace.

## Installation

```
npm install --save-dev eslint-plugin-arrow-function-brace
```

## Setup

Touch `.eslintrc`

```
{
  "plugins": [
    ...,
    "arrow-function-brace"
  ],
  "rules": {
    ...,
    "arrow-function-brace/arrow-function-brace": 1
  }
}
```

## Example

Show a warning message if the arrow function can remove the brace.

```ts
const isAdult = (age) => {
  return age >= 20;
};
```

```
example-prj/index.ts
  1:1  warning  can remove the brace from the arrow function.

✖ 1 problem (0 errors, 1 warning)
```

## Lisence

MIT
