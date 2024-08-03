export interface Speaker {
  name: string;
  profilePhoto?: string;
  description: string;
  url?: string;
  urlType?: "x" | "website" | "linkedin" | "github";
  priority: number;
}

export default Speaker;
