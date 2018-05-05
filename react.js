// Specifies additional options to use in React / React-JSX projects.
// Note that you need to manually install `eslint-plugin-react` as a peer
// dependency (see https://goo.gl/I4AYlb for more details).

module.exports = {
  // https://github.com/yannickcr/eslint-plugin-react
  extends: ["plugin:react/recommended"],

  plugins: ["react"],

  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Enforces consistent naming for boolean props
    "react/boolean-prop-naming": 1,
    // Forbid "button" element without an explicit "type" attribute
    "react/button-has-type": 1,
    // Prevent extraneous defaultProps on components
    "react/default-props-match-prop-types": 1,
    // Rule enforces consistent usage of destructuring assignment in component
    "react/destructuring-assignment": [1, "always"],
    // Prevent missing displayName in a React component definition
    "react/display-name": [0, { ignoreTranspilerName: true }],
    // Forbid certain props on Components
    "react/forbid-component-props": [0, { forbid: ["className", "style"] }],
    // Forbid certain props on DOM Nodes
    "react/forbid-dom-props": 0,
    // Forbid certain elements
    "react/forbid-elements": 0,
    // Forbid certain propTypes
    "react/forbid-prop-types": 0,
    // Forbid foreign propTypes
    "react/forbid-foreign-prop-types": 0,
    // Prevent using this.state inside this.setState
    "react/no-access-state-in-setstate": 2,
    // Prevent using Array index in key props
    "react/no-array-index-key": 1,
    // Prevent passing children as props
    "react/no-children-prop": 2,
    // Prevent usage of dangerous JSX properties
    "react/no-danger": 2,
    // Prevent problem with children and props.dangerouslySetInnerHTML
    "react/no-danger-with-children": 2,
    // Prevent usage of deprecated methods, including component lifecyle methods
    "react/no-deprecated": 2,
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": [1, "disallow-in-func"],
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": [1, "disallow-in-func"],
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": 2,
    // Prevent usage of findDOMNode
    "react/no-find-dom-node": 2,
    // Prevent usage of isMounted
    "react/no-is-mounted": 1,
    // Prevent multiple component definition per file
    "react/no-multi-comp": [1, { ignoreStateless: true }],
    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    "react/no-redundant-should-component-update": 1,
    // Prevent usage of the return value of React.render
    "react/no-render-return-value": 2,
    // Prevent usage of setState
    "react/no-set-state": 0,
    // Prevent common casing typos
    "react/no-typos": 1,
    // Prevent using string references in ref attribute.
    "react/no-string-refs": 1,
    // Prevent using this in stateless functional components
    "react/no-this-in-sfc": 2,
    // Prevent invalid characters from appearing in markup
    "react/no-unescaped-entities": 2,
    // Prevent usage of unknown DOM property (fixable)
    "react/no-unknown-property": 2,
    // Prevent definitions of unused prop types
    "react/no-unused-prop-types": 1,
    // Prevent definitions of unused state properties
    "react/no-unused-state": 1,
    // Prevent usage of setState in componentWillUpdate
    "react/no-will-update-set-state": [1, "disallow-in-func"],
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": [1, "always"],
    // Enforce stateless React Components to be written as a pure function
    "react/prefer-stateless-function": [1, { ignorePureComponents: true }],
    // Prevent missing props validation in a React component definition
    "react/prop-types": [0, { ignore: [], customValidators: [] }],
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope": 2,
    // Enforce a defaultProps definition for every prop that is not a required prop
    "react/require-default-props": 0,
    // Enforce React components to have a shouldComponentUpdate method
    "react/require-optimization": 0,
    // Enforce ES5 or ES6 class for returning value in render function
    "react/require-render-return": 2,
    // Prevent extra closing tags for components without children (fixable)
    "react/self-closing-comp": 1,
    // Enforce propTypes declarations alphabetical sorting
    "react/sort-comp": [
      1,
      {
        // Enforce component methods order (fixable)
        order: ["static-methods", "lifecycle", "everything-else", "render"],
        groups: {
          lifecycle: [
            "displayName",
            "propTypes",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "defaultProps",
            "constructor",
            "getDefaultProps",
            "state",
            "getInitialState",
            "getChildContext",
            "getDerivedStateFromProps",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount",
          ],
        },
      },
    ],
    "react/sort-prop-types": [
      1,
      {
        callbacksLast: false,
        ignoreCase: true,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    // Enforce style prop value being an object
    "react/style-prop-object": 2,
    // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
    "react/void-dom-elements-no-children": 2,

    // Enforce boolean attributes notation in JSX (fixable)
    "react/jsx-boolean-value": [1, "always"],
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
    "react/jsx-child-element-spacing": 0,
    // Validate closing bracket location in JSX (fixable)
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    // Validate closing tag location in JSX (fixable)
    "react/jsx-closing-tag-location": 1,
    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions (fixable)
    "react/jsx-curly-spacing": [
      2,
      { when: "never", children: true, allowMultiline: false },
    ],
    // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    "react/jsx-equals-spacing": [2, "never"],
    // Restrict file extensions that may contain JSX
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    // Enforce position of the first prop in JSX (fixable)
    "react/jsx-first-prop-new-line": [1, "multiline-multiprop"],
    // Enforce event handler naming conventions in JSX
    "react/jsx-handler-names": 1,
    // Validate JSX indentation (fixable)
    "react/jsx-indent": ["warn", 2],
    // Validate props indentation in JSX (fixable)
    "react/jsx-indent-props": ["warn", 2],
    // Validate JSX has key prop when in array or iterator
    "react/jsx-key": 1,
    // Validate JSX maximum depth
    "react/jsx-max-depth": 0,
    // Limit maximum of props on a single line in JSX (fixable)
    "react/jsx-max-props-per-line": 0,
    // Prevent declaring functions on props
    "react/jsx-no-bind": [
      1,
      {
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowFunctions: false,
        allowBind: false,
      },
    ],
    // Prevent comments from being inserted as text nodes
    "react/jsx-no-comment-textnodes": 2,
    // Prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": [2, { ignoreCase: true }],
    // Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals": 0,
    // Prevent usage of unsafe target='_blank'
    "react/jsx-no-target-blank": 2,
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    // Limit to one expression per line in JSX
    "react/jsx-one-expression-per-line": 1,
    // Enforce curly braces or disallow unnecessary curly braces in JSX
    "react/jsx-curly-brace-presence": 1,
    // Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": 2,
    // Enforce default props alphabetical sorting
    "react/jsx-sort-default-props": [1, { ignoreCase: true }],
    // Enforce props alphabetical sorting (fixable)
    "react/jsx-sort-props": [
      1,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    // Validate whitespace in and around the JSX opening and closing brackets (fixable)
    "react/jsx-tag-spacing": [
      2,
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "allow",
      },
    ],
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": 1,
    // Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": 1,
    // Prevent missing parentheses around multilines JSX (fixable)
    "react/jsx-wrap-multilines": [
      1,
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
        prop: "parens-new-line",
      },
    ],
  },
};
