import {UserExam} from "./user-exam";

export interface UserAnswer {
  id?: number;
  content?: string;
  questionIndex?: number;
  userExam?: UserExam;
}
