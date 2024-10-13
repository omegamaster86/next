'use client'

import { useState, ReactElement } from "react";
import type { Todo } from "./types";
import React from "react";
import Add from "./todo-add/page";
import Page from "./page";
import { Layout } from "./components/layout";

const TODOS: Todo[] = [
  { id: 1, text: "foo1", isDone: false },
  { id: 2, text: "foo2", isDone: true },
];

interface LayoutProps {
  children: ReactElement<{ todos: Todo[]; setTodos: React.Dispatch<React.SetStateAction<Todo[]>> }> | null;
}

export default function RootLayout({ children }: LayoutProps) {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  return (
    <Layout todoCount={todos.length}>
       <Page todos={todos} setTodos={setTodos} />
       <Add setTodos={setTodos}/>
    </Layout>
  );
}