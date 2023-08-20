import { TaskCardProps } from '../TaskCard'

export interface TaskColumnProps {
  id: string
  title: string
  tasks?: TaskCardProps[]
  activeTaskTab?: 'all' | 'inprogress' | 'completed'
  events?: {
    onDeleteClick?: (id: string) => void
  }
}
