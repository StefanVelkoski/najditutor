export interface Announcement {
  tutor : Tutor,
  field: string,
  title: string,
  price: number,
  difficulty: string,
  description: string,
  score: number,
  date: string
}

export interface Tutor {
  name: string,
  surname: string,
  phoneNumber: string,
  email: string,
  bio: string,
  job: string,
  score: number,
  privateLessions: Announcement[],
  reviews: Review[]
}

export interface Review {
  submitter: Customer,
  privateLesson: Announcement,
  tutor: Tutor,
  score: number,
  reason: string
}

export interface Customer {
  name: string,
  surname: string,
  phoneNumber: string,
  email: string
}
