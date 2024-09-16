export interface FormsType {
    handleSubmit: any,
    errors: any,
    register: any,
    onSubmit: any,
    isLoading: boolean
}

export interface RegisterFormFieldsType {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    role: string,
    tel: number
}

export interface LoginFormFieldsType {
    email: string,
    password: string
}