import React from 'react';
import { Graph } from '@/common/interfaces';
import withContext from '@/common/withContext';
import CommandManager from '@/common/CommandManager';

export interface EditorContextProps<T = unknown> {
  graph: Graph | null;
  executeCommand: (name: string, params?: object) => void;
  commandManager: CommandManager;
  forwardRef: React.Ref<T>;
}

export interface EditorPrivateContextProps<T = unknown> {
  setGraph: (graph: Graph) => void;
  commandManager: CommandManager;
  forwardRef: React.Ref<T>;
}

export const EditorContext = React.createContext({} as EditorContextProps);
export const EditorPrivateContext = React.createContext({} as EditorPrivateContextProps);

export const withEditorContext = withContext<EditorContextProps>(EditorContext, context => !!context.graph);
export const withEditorPrivateContext = withContext<EditorPrivateContextProps>(EditorPrivateContext);
