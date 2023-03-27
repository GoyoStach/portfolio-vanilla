export interface Tech {
  src: string
  name: string
  level?: string
}

export interface Experience {
  jobTitle: string
  companyLogo: string
  companyName: string
  clientName?: string
  clientLogo?: string
  techUsed: Tech[]
  startingDate: string
  endDate: string
  summary: string[]
}
