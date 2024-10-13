import { FC } from "react";

type Props = {
  todoCount: number;
};

export const TodoCounter: FC<Props> = ({ todoCount }) => {
  return <h2 className="text-center font-bold text-3xl">TODO: {todoCount}件</h2>;
};