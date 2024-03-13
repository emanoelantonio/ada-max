import { useTranslation } from "react-i18next";
import { Alert, Button, Input } from "../../../../components";
import { IconEyeClosed, IconEyeOpened } from "../../../../components/Icons";

import { useLogin } from "../../hooks/use-login";

export const Form = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    errors,
    isPending,
    isError,
    togglePassword,
    showPassword,
  } = useLogin();

  return (
    <div className="login">
      <h2 className="title">Sign In</h2>
      <p className="text-center">{t("login.description")}</p>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email Address"
          placeholder="any@email.com"
          disabled={isPending}
          error={errors?.email?.message}
          {...register("email")}
        />
        <div className="form-group">
          <label htmlFor="">Password</label>
          <div className="input-with-icon">
            <input
              type={showPassword ? "text" : "password"}
              disabled={isPending}
              {...register("password")}
            />
            <button className="eye" type="button" onClick={togglePassword}>
              {showPassword ? <IconEyeClosed /> : <IconEyeOpened />}
            </button>
          </div>
          {errors?.password?.message && (
            <span>{errors?.password?.message}</span>
          )}
        </div>
        <div>
          <Button type="submit" isLoading={isPending}>
            {t("login.signIn")}
          </Button>
        </div>
        {isError && <Alert>Credencias inválidas</Alert>}
      </form>
    </div>
  );
};
