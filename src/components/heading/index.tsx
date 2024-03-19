"use client"

import { FC } from "react"

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  children: string
  others?: any
}

const Heading: FC<HeadingProps> = ({ level, className, children, ...others }) => {
  const HeadingTag = `h${level}` as const

  return (
    <HeadingTag className={className ? className : undefined} {...others}>{children}</HeadingTag>
  )
}

export default Heading