import clsx from "clsx";
import {Typography} from "@/ui/design-system/typography/typography";

interface Props {
    placeholder: string,
    type: "text" | "email" | "password",
    register?: any,
    errors?: any,
    id: string,
    errorMessage?: string,
    required?: boolean,
    isAutoCompleted?: boolean,
    isLoading?: boolean
}

export const Input = ({
                          isLoading,
                          placeholder,
                          type = "text",
                          register,
                          errors,
                          id,
                          errorMessage = "Tu dois renseigner ce champ",
                          required = true,
                          isAutoCompleted = false
                      }: Props) => {
    return (
        <div className="space-y-2">
            <input
                type={type}
                placeholder={placeholder}
                className={clsx(
                    isLoading && "cursor-not-allowed",
                    errors[id] ? "placeholder-alert-danger text-alert-danger focus:ring-alert-danger" : "placeholder-gray-600 focus:ring-primary",
                    "p-4 w-full border border-midnight-600 font-white rounded focus:outline-none focus:ring-1 bg-midnight-700 text-white"
                )}
                disabled={isLoading}
                {...register(id, {
                    required: {
                        value: required,
                        message: errorMessage
                    }
                })}
                autoComplete={isAutoCompleted ? "on" : "off"}
            />
            {errors[id] &&
				<Typography
					variant="caption4"
					tag="div"
					theme="danger"
				>
                    {errors[id]?.message}
				</Typography>
            }
        </div>
    )
}