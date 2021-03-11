import React from 'react'
import type { ProjectListItem } from './ProjectListItem'
import Project from './ProjectListItem'
import SectionTitle from './HomeLayoutSectionTitle'

export interface ProjectListProps {
  projects?: ProjectListItem[]
}

export const ProjectList = ({
  projects,
  ...props
}: ProjectListProps): JSX.Element => {
  return (
    <div {...props}>
      <SectionTitle>Projects.</SectionTitle>
      {projects.map((link, i) => (
        <Project key={i} link={link} />
      ))}
    </div>
  )
}

export default ProjectList
