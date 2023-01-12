export interface Routine {
  title: string
  status: RoutineStatus
  upvotes: number
  userViews: number
  userCompletions: number
  dateCreated: Date
  lastModified: Date
}

export enum RoutineStatus {
  Official = 'OFFICIAL',
  Community = 'COMMUNITY'
}
