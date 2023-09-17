export interface JobData {
    id: number;
    bookmark: boolean;
    image: string;
    title: string;
    level1: string;
    level2: string;
    type: string;
    skills: string;
    appeal: string;
    reward: number;
    reward_text: string;
    logo: string;
    company: {
        logo: string;
        name: string;
        grade: number;
        grade_count: number;
    }
  }