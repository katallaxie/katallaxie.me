import React from 'react'
import type { ProjectListItem } from './ProjectListItem'
import Project from './ProjectListItem'
import { H2 } from '@components/layout/default/DefaultLayoutHeading'

export interface ProjectListProps {
  projects?: ProjectListItem[]
}

export const ProjectList = ({
  projects,
  ...props
}: ProjectListProps): JSX.Element => {
  return (
    <section className="pb-8 lg:pb-12" {...props}>
      <H2 className="text-gray-500">Projects.</H2>
      {projects.map((link, i) => (
        <Project key={i} link={link} />
      ))}
    </section>
  )
}

export default ProjectList
