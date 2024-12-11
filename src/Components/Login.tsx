import { useFormik } from "formik";
import { loginFormData } from "../Types";
import { loginSchema } from "../Schema";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  let formData: loginFormData = {
    email: "",
    password: "",
    remember: false,
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: formData,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        localStorage.setItem("email", values.email)
        localStorage.setItem("remember", JSON.stringify(values.remember));
        navigate("/");
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched.email && values.email && <p>{errors.email}</p>}
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched.password && values.password && <p>{errors.password}</p>}
      <input
        type="checkbox"
        name="remember"
        checked={values.remember}
        onBlur={handleBlur}
        onChange={handleChange}
      /><label>Remember Me</label>
      <button type="submit">Submit</button>
      <Link to={"/signup"}>Create New account</Link>
    </form>
  );
};

export default Login;
