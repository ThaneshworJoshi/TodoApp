export interface FilterBarProps {
  activeTaskTab?: 'all' | 'inprogress' | 'completed'
  setActiveTaskTab?: (activeTaskTab: string) => void
}
