import { useFormik } from "formik";
import { signUpFormData } from "../Types";
import { signUpSchema } from "../Schema";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    navigate("/");
  let formData: signUpFormData = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    remember:false
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: formData,
      validationSchema: signUpSchema,
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
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={values.name}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched.name && values.name && (<p>{errors.name}</p>)}
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched.email && values.email && (<p>{errors.email}</p>)}
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched.password && values.password && (<p>{errors.password}</p>)}
      <label>Confirm Password</label>
      <input
        type="password"
        name="confirm_password"
        value={values.confirm_password}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched.confirm_password && values.confirm_password && (<p>{errors.confirm_password}</p>)}
      <input
        type="checkbox"
        name="remember"
        checked={values.remember}
        onBlur={handleBlur}
        onChange={handleChange}
      /><label>Remember Me</label>
      <button type="submit">Submit</button>
      <Link to={"/login"}>Login</Link>
    </form>
  );
};

export default Signup;
