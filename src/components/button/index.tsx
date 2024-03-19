"use client"

import { FC, MouseEvent } from "react"

export interface ButtonProps {
  type?: "button" | "submit" | "reset"
  className?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  isDisabled?: boolean
  children: any
  others?: any
}

const Button: FC<ButtonProps> = ({ type = "button", className, onClick, isDisabled, children, ...others }) => {
  return (
    <button {...{ type, onClick }} className={className ? className : undefined} disabled={isDisabled ? isDisabled : undefined} {...others}>{children}</button>
  )
}

export default Button