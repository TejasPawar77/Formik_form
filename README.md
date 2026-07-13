# 🧠 Formik + Yup: The Complete Guide (Dev.to Style)

If you're building forms in React and still managing state manually… you're making life harder than it needs to be.

Let’s fix that.

This blog will take you from **zero → confident** with **Formik + Yup**, covering **all important methods, concepts, and patterns** in a clean, practical way.

---

# 🚀 Why Formik?

Handling forms in React involves:

* Managing input state
* Validation
* Error handling
* Submission

Formik handles all of this for you.

👉 Think of Formik as:
**“React form state + validation + submission in one place”**

---

# 📦 Installation

```bash
npm install formik yup
```

---

# 🧩 Basic Formik Structure

```jsx
import { useFormik } from "formik";
import * as Yup from "yup";

const formik = useFormik({
  initialValues: {
    name: "",
    email: "",
  },
  validationSchema: Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  }),
  onSubmit: (values) => {
    console.log(values);
  },
});
```

---

# 🔑 Core Formik Properties (VERY IMPORTANT)

## 1. `initialValues`

Initial state of your form

```js
initialValues: {
  name: "",
  email: ""
}
```

---

## 2. `onSubmit`

Called when form is submitted

```js
onSubmit: (values) => {
  console.log(values);
}
```

---

## 3. `validationSchema` (Yup Integration)

Instead of manual validation, use Yup:

```js
validationSchema: Yup.object({
  name: Yup.string().required("Name is required"),
});
```

---

# 🧠 Formik Methods (Most Important Part)

---

## ✅ 1. `handleChange`

Automatically updates values

```jsx
<input
  name="name"
  onChange={formik.handleChange}
  value={formik.values.name}
/>
```

---

## ✅ 2. `handleBlur`

Tracks when user leaves input

```jsx
<input
  name="name"
  onBlur={formik.handleBlur}
/>
```

Used for:
👉 Showing errors only after user touches field

---

## ✅ 3. `handleSubmit`

Attach to form

```jsx
<form onSubmit={formik.handleSubmit}>
```

---

## ✅ 4. `setFieldValue`

Manually set value

```js
formik.setFieldValue("name", "Tejas");
```

👉 Useful for:

* Custom inputs
* Dropdowns
* APIs

---

## ✅ 5. `setFieldTouched`

Manually mark field as touched

```js
formik.setFieldTouched("email", true);
```

---

## ✅ 6. `resetForm`

Reset form to initial state

```js
formik.resetForm();
```

---

## ✅ 7. `setValues`

Update all values at once

```js
formik.setValues({
  name: "Tejas",
  email: "test@gmail.com",
});
```

---

## ✅ 8. `validateForm`

Trigger validation manually

```js
formik.validateForm();
```

---

## ✅ 9. `validateField`

Validate a single field

```js
formik.validateField("email");
```

---

## ✅ 10. `setErrors`

Manually set errors

```js
formik.setErrors({
  email: "Email already exists",
});
```

---

# 📊 Formik State (Important Objects)

---

## 🟢 `values`

```js
formik.values.name
```

👉 Stores form data

---

## 🔴 `errors`

```js
formik.errors.email
```

👉 Stores validation errors

---

## 🟡 `touched`

```js
formik.touched.name
```

👉 Tracks if user interacted

---

## 🔵 `isSubmitting`

```js
formik.isSubmitting
```

👉 Useful for disabling button

---

## 🟣 `dirty`

```js
formik.dirty
```

👉 True if user changed something

---

## ⚪ `isValid`

```js
formik.isValid
```

👉 True if no errors

---

# 🧪 Yup Validation (All Methods Explained)

---

## 🔹 String Validation

```js
Yup.string()
  .required("Required")
  .min(3, "Too short")
  .max(20, "Too long")
```

---

## 🔹 Email

```js
Yup.string().email("Invalid email")
```

---

## 🔹 Number

```js
Yup.number()
  .required()
  .positive()
  .integer()
```

---

## 🔹 Password Example

```js
Yup.string()
  .required("Required")
  .min(6, "Min 6 characters")
  .matches(/[A-Z]/, "One uppercase required")
  .matches(/[0-9]/, "One number required")
```

---

## 🔹 Boolean

```js
Yup.boolean().oneOf([true], "Must accept terms")
```

---

## 🔹 Array

```js
Yup.array().min(1, "Select at least one")
```

---

## 🔹 Object (Nested)

```js
Yup.object({
  address: Yup.object({
    city: Yup.string().required(),
  }),
});
```

---

## 🔹 Conditional Validation

```js
Yup.string().when("isStudent", {
  is: true,
  then: (schema) => schema.required("Required for students"),
});
```

---

# 🧱 Full Example (Production Style)

```jsx
import { useFormik } from "formik";
import * as Yup from "yup";

function SignupForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
      {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}

      <input name="email" onChange={formik.handleChange} value={formik.values.email} />
      <p>{formik.errors.email}</p>

      <input type="password" name="password" onChange={formik.handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}
```

---

# ⚡ Pro Tips

✔ Always use `validationSchema` instead of manual validation
✔ Show errors only when `touched`
✔ Use `setFieldValue` for custom UI components
✔ Disable submit using `isSubmitting`
✔ Combine with UI libraries (MUI, Bootstrap)

---

# 🏁 Final Thoughts

Formik + Yup is one of the **cleanest ways to handle forms in React**.
