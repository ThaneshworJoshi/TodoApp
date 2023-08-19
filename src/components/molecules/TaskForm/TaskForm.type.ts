export interface TaskFormProps {
  isLoading?: boolean
  events?: {
    onCancelClick?: () => void
    onSubmitClick?: (task: any) => void
  }
}
