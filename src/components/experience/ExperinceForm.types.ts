export interface ExperienceFormValues {
  current_designation: string
  total_experience: number
  previous_experience: Array<{ company: string; designation: string }>
}
