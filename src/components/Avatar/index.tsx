import user from "../../assets/user.svg";
import { IconEdit } from "../Icons";
import * as S from "./styles";

type AvatarProps = {
  image?: string;
  isEdit?: boolean;
  size?: "medium" | "large";
  disabled?: boolean;
};

export const Avatar = ({
  image,
  isEdit,
  size = "medium",
  disabled,
}: AvatarProps) => {
  return (
    <S.Container
      size={size}
      disabled={disabled}
    >
      <img src={image || user} alt="" />
      {isEdit && (
        <div className="icon">
          <IconEdit />
        </div>
      )}
    </S.Container>
  );
};