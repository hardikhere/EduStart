interface IFeed {
  imageUrls?: Array<string>;
  title?: string;
  content?: string;
  // to be revaluated
  sid?: string;
}

interface ISchoolProfile {
  schoolType: string;
  board: string;
  classification: string;
  imageUrls: string[];
  subjects: string[];
  queries: any[]; // You might want to specify a more specific type for queries
  credits: number;
  _id: string;
  schoolName: string;
  fees: {
    _id: string;
    admissionFee: number;
    applicationFee: number;
    securityFee: number;
  };
  isPrivate: boolean;
  parentRating: number;
  yearOfEstablishment: number;
  logoUrl: string;
  about: string;
  schoolId: string;
  reviews: any[];
  announcements: any[];
  classAcademicsScore: any[]; // You might want to specify a more specific type
  pillars: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  address: string;
}
