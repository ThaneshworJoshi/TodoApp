export interface AddTaskFormProps {
  isLoading?: boolean
  events?: {
    onCancelClick?: () => void
    onSubmitClick?: (task: any) => void
  }
}
