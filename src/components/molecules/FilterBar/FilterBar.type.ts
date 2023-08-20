export interface FilterBarProps {
  activeTaskTab?: 'all' | 'inprogress' | 'completed'

  events?: {
    setActiveTaskTab?: (activeTaskTab: string) => void
    addTaskHandler?: (newTask: any) => void
  }
}
