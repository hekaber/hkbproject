export interface IJob {
  title: string,
  description: string
}

export class Job implements IJob {
  title: string;
  description: string;
}