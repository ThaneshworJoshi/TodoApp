export interface TaskCardProps {
  id?: string
  tag: string
  title: string
  description?: string
  priority?: string
  status?: string
  media?: {
    imageUrl: string
    altText: string
  }
}
