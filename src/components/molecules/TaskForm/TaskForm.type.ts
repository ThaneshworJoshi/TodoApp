export interface TaskFormProps {
  isLoading?: boolean
  task?: any
  mode?: 'add' | 'edit'
  events?: {
    onCancelClick?: () => void
    onSubmitClick?: (task: any) => void
  }
}
