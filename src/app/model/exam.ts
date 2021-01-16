import {UserExam} from './user-exam';

export interface Exam {
  id?: number;
  countDown?: number;
  date?: Date;
  name?: string;
  questions?: any;
  userExams?: UserExam[];
}
