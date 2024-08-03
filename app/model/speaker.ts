export interface Speaker {
  name: string;
  profilePhoto?: string;
  description: string;
  url?: string;
  urlType?: "x" | "website" | "linkedin";
  priority: number;
}

export default Speaker;
