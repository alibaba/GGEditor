import React from 'react';
import { RegisterBehavior } from 'gg-editor';
import { bizErrorListenerConfig } from './bizErrorListener';

const customBehaviors = [
  {
    name: 'bizErrorListener',
    config: bizErrorListenerConfig,
  },
];

export default function MindBehavior() {
  return customBehaviors.map(behavior => <RegisterBehavior name={behavior.name} config={behavior.config} />);
}
