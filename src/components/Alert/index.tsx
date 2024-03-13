import { IconWarning } from "../Icons";
import * as S from "./styles";

type AlertProps = {
  children: React.ReactNode;
};

export const Alert = ({ children }: AlertProps) => {
  return (
    <S.Container>
      <IconWarning />
      {children}
    </S.Container>
  );
};
