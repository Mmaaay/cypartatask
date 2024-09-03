import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";
import { EyeIcon, EyeOff } from "lucide-react";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [ShowPassword, setShowPassword] = React.useState<boolean>(false);
    return (
      <Input
        type={ShowPassword ? "text" : "password"}
        suffix={
          ShowPassword ? (
            <EyeIcon
              className="cursor-pointer"
              onClick={() => setShowPassword(!ShowPassword)}
            />
          ) : (
            <EyeOff
              className="cursor-pointer"
              onClick={() => setShowPassword(!ShowPassword)}
            />
          )
        }
        className={className}
        {...props}
        ref={ref}
      />
    );
  }
);
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
