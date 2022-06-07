type Item = {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[];
  level: number;
  comments_count: number;
};

type User = {
  about?: string;
  created_time: number;
  created: string;
  id: string;
  karma: number; 
}

const state = {
  user: {} as User,
  item: {} as Item,
  list: [] as Item[],
};

type RootState = typeof state;

export { RootState, state };