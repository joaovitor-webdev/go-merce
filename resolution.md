I have identified and fixed a potential cause for the "java.lang.String cannot be cast to java.lang.Boolean" error.

The issue was likely caused by invalid style properties being applied to `Text` and `TextInput` components. Specifically, `alignItems` and `justifyContent` were used on components that do not support them, which can lead to unexpected behavior in React Native's layout system.

I have removed these invalid properties from the following files:
- `src/components/inputs/input-user/styles.js`
- `src/components/inputs/input-password/styles.js`
- `src/pages/login/styles.js`

As a diagnostic step, I also temporarily removed the `spellCheck` and `autoCorrect` boolean props from the `TextInput` components. These have been restored as the styling issue was the more likely root cause.

Please try running your application again. If the issue persists, we can investigate further.
