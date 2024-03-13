import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../providers/AuthProvider";
import { LoginSchema, LoginType } from "../types";
import { usePostLogin } from "./use-post-login";

export const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm<LoginType>({ resolver: zodResolver(LoginSchema) })
  
  const { mutate, isPending, isError } = usePostLogin({
    onSuccess: ({ data }) => {
      login(data.token);
    },
    onError: (err) => {
      console.log("Error", err);
    }
  });

  const onSubmit = (data: LoginType) => {
    mutate(data);
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isPending,
    isError,
    showPassword,
    togglePassword: ()=> setShowPassword(!showPassword),
  }
}
