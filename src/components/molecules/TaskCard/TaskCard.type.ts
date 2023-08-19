export interface TaskCardProps {
  id: string
  tag: string
  title: string
  description?: string
  priority?: string
  status: 'incomplete' | 'completed' | 'inprogress'
  media?: {
    imageUrl: string
    altText: string
  }
  events?: {
    onDeleteClick?: (id: string) => void
  }
}
