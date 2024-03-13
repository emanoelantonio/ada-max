import { IconLoading } from "../Icons";
import { GlobalButton, IconWrapper } from './styles';

type ButtonProps = {
  variant?: "subtle" | "filled";
  fullWidth?: boolean;
  isLoading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  variant,
  fullWidth,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <GlobalButton variant={variant} fullWidth={fullWidth} disabled={props.disabled || isLoading} {...props}>
      {children}
      {isLoading && (
        <IconWrapper>
          <IconLoading/>
        </IconWrapper>
      )}
    </GlobalButton>
  )
};
