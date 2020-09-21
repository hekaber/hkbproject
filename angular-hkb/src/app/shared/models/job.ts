export interface IJob {
  id: string,
  title: string,
  description: string,
  text: string
}

export class Job implements IJob {
  id: string;
  title: string;
  description: string;
  text: string;
}