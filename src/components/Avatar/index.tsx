import user from "../../assets/user.svg";
import { IconEdit } from "../Icons";
import * as S from "./styles";

type AvatarProps = {
  image?: string;
  isEdit?: boolean;
  size?: "medium" | "large" | "small";
  disabled?: boolean;
};

export const Avatar = ({
  image,
  isEdit,
  size = "medium",
  disabled,
}: AvatarProps) => {
  const imagePath = image ? `/images/${image}.webp` : user;
  return (
    <S.Container
      size={size}
      disabled={disabled}
    >
      <img src={imagePath} alt="" />
      {isEdit && (
        <div className="icon">
          <IconEdit />
        </div>
      )}
    </S.Container>
  );
};