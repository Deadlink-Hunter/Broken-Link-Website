import type React from "react"
import type { CSSProperties } from "react"
import { dividerVariants } from "./styles"
import { Divider as MantineDivider } from "@mantine/core"

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  style?: CSSProperties
  variant?: keyof typeof dividerVariants
  orientation?: "horizontal" | "vertical"
}

export const Divider = ({
  style,
  variant = "primary",
  orientation = "horizontal",
  ...props
}: DividerProps) => {
  const variantStyle = dividerVariants[variant]

  return (
    <MantineDivider
      orientation={orientation}
      style={{ ...variantStyle, ...style }}
      {...props}
    />
  )
}
