import { TaskCardProps } from '../TaskCard'

export interface TaskColumnProps {
  id: string
  title: string
  tasks?: TaskCardProps[]
}
