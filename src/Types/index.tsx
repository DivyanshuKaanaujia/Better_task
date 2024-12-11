interface signUpFormData {
    name: string,
    email: string,
    password: string,
    confirm_password: string,
    remember:boolean
}

interface loginFormData {
    email: string,
    password: string,
    remember:boolean
}

export type { signUpFormData,loginFormData }