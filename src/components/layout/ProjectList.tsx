import React from 'react'

export interface ProjectListProps {
  children?: React.ReactNode
}

export const ProjectList = ({
  children,
  ...props
}: ProjectListProps): JSX.Element => {
  return <div {...props}>{children}</div>
}

export default ProjectList
