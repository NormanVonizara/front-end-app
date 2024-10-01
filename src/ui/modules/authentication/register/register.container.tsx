"use client"

import {set, SubmitHandler, useForm} from "react-hook-form";
import {RegisterFormFieldsType} from "@/types/forms";
import {RegisterView} from "@/ui/modules/authentication/register/register.view";
import {useState} from "react";

export const RegisterContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {
        handleSubmit,
        formState: {errors},
        register,
        control,
        setError,
        watch
    } = useForm<RegisterFormFieldsType>()
    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
        setIsLoading(true)
        console.log(formData)
        const {firstname, lastname, email, phone_number, password, role} = formData
        try {
            await fetch("", {
                method: "POST",
                body: JSON.stringify({firstname, lastname, email, phone_number, password, role}),
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <RegisterView form={{handleSubmit, errors, register, onSubmit, isLoading, control, setError, watch}}/>
    )
}