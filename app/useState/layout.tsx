'use client'

import { useState } from "react";
import type { Todo } from "./types";
import Page from "./page";
import Add from "./todo-add/page";

const TODOS: Todo[] = [
  { id: 1, text: "foo1", isDone: false },
  { id: 2, text: "foo2", isDone: true },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <div>
      <Page todos={todos} setTodos={setTodos}/>
      <Add setTodos={setTodos}/>
    </div>
  );
}