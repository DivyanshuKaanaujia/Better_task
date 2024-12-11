import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name : Yup.string().min(2).max(100).required("Please enter your name"),
    email: Yup.string().email().min(2).max(100).required("Please enter your Email"),
    password: Yup.string().min(2).required("Please enter your Email"),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password")],"password must match"),
    remember: Yup.boolean() 
})

export const loginSchema = Yup.object({
    email: Yup.string().email().min(2).max(100).required("Please enter your Email"),
    password: Yup.string().min(2).required("Please enter your Email"),
    remember: Yup.boolean()
})