import React from 'react';
import withContext from '@/common/withContext';
import CommandManager from '@/common/CommandManager';

export interface EditorContextProps {
  graph: G6.Graph | null;
  executeCommand: (name: string, params?: object) => void;
  commandManager: CommandManager;
}

export interface EditorPrivateContextProps {
  setGraph: (graph: G6.Graph) => void;
  commandManager: CommandManager;
}

export const EditorContext = React.createContext({} as EditorContextProps);
export const EditorPrivateContext = React.createContext({} as EditorPrivateContextProps);

export const withEditorContext = withContext<EditorContextProps>(EditorContext, context => !!context.graph);
export const withEditorPrivateContext = withContext<EditorPrivateContextProps>(EditorPrivateContext);
