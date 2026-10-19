# React Native Form Elements

This document explains the different form elements used in React Native and their purposes.

## 1. Text Input

Used to collect text from the user, such as a name. In React Native, the `TextInput` component allows users to enter text.

## 2. Password Input

Used to collect passwords. The `secureTextEntry` property hides the entered characters for privacy.

## 3. Email Input

Used to collect email addresses. The `keyboardType="email-address"` property displays a keyboard suitable for entering email addresses.

## 4. Number Input

Used to collect numeric values, such as age. The `keyboardType="numeric"` property displays a numeric keyboard.

## 5. Telephone Input

Used to collect phone numbers. The `keyboardType="phone-pad"` property displays a keyboard suitable for entering telephone numbers.

## 6. URL Input

Used to collect website addresses. The `keyboardType="url"` property displays a keyboard suitable for entering URLs.

## 7. Search Input

Used to enter text when searching for specific information. It can be implemented using `TextInput` with `keyboardType="web-search"` or other appropriate keyboard settings.

## 8. Multiline Text Input

Used to collect longer text, such as comments or descriptions. The `multiline={true}` property allows users to enter text on multiple lines.

## 9. Checkbox

Used to select or deselect one or more options independently. A checkbox can be implemented using a suitable component or library, with state used to track whether each option is selected.

## 10. Radio Buttons

Used when the user should select one option from a group. State keeps track of the currently selected option.

## 11. Picker / Select

Used to choose one option from a predefined list. The `Picker` component from `@react-native-picker/picker` can display available options and store the selected value.

## 12. Switch

Used to turn a setting on or off. React Native's built-in `Switch` component provides a Boolean value indicating whether it is enabled.

## 13. Date Picker

Used to select a specific date. A date-picker library allows the user to choose a date instead of typing it manually.

## 14. Time Picker

Used to select a specific time. A time-picker component allows the user to choose hours and minutes.

## 15. Date and Time Picker

Used to select a date and time. A suitable date-time picker can collect both values, or separate date and time pickers can be combined.

## 16. Slider / Range

Used to select a numeric value within a defined range. For example, a slider can let users choose a budget between a minimum and maximum amount.

## 17. Color Picker

Used to select a color from available choices. A color-picker component or a set of selectable color options can store the selected color.

## 18. File Picker

Used to select a file from the device. A document-picker library can allow users to select files such as PDF documents.

## 19. Image Picker

Used to select an image from the device's gallery or, where supported, take a picture using the camera. An image-picker library provides this functionality.

## 20. Month Picker

Used to select a particular month and year. It can be implemented using a suitable picker library or selection controls for the month and year.

## 21. Week Picker

Used to select a particular week. It can be implemented using a date-selection component and logic to identify the selected week.

## Form State Management

React Native's `useState` hook stores the values entered or selected by the user. When a value changes, the corresponding state is updated.

For example:

```jsx
const [fullName, setFullName] = useState("");

<TextInput
  value={fullName}
  onChangeText={setFullName}
/>
```

* `useState("")` initializes the value as an empty string.
* `value={fullName}` displays the current value.
* `onChangeText={setFullName}` updates the state when the user types.

## Form Submission

A submit button collects the current values from the form. These values can be placed into a JavaScript object and displayed in the console using `console.log()`.

```jsx
const formData = {
  fullName,
  email,
  phone,
};

console.log("Submitted Form Data:", formData);
```

This makes it possible to inspect the submitted information in the development console.

## Conclusion

React Native provides built-in components such as `TextInput` and `Switch`, while other form elements may require third-party libraries or custom implementations. Together, these elements allow an application to collect different types of user input.
