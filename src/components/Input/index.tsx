import React, { ComponentPropsWithoutRef } from "react";
import * as S from "./styles";

type InputProps = {
  label?: string;
  error?: string;
} & ComponentPropsWithoutRef<"input">;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }: InputProps, ref) => {
    return (
      <S.Container>
        {label && (
          <S.Label htmlFor={props.id}>
            {label}
          </S.Label>
        )}
        <S.GlobalInput {...props} ref={ref} />
        {error && <S.SpanError>{error}</S.SpanError>}
      </S.Container>
    );
  }
);