# GGEditor

An editor conponent for the graph.

## Usage

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor>
  <Flow />
</GGEditor>
```

## API

| Method | Description | Type |
| :--- | :--- | :--- |
| setTrackable | Turn on / off the tracking by setting the trackable value | `function(value: boolean)` |

## Events

See more on [EditorEvents](./editorEvents.en-US.md).


## Experience Improvement Program

GGEditor collects the information of the URL and its versions when the `Mind` or `Flow` components are initialized. This is for the purpose of improving our project. You can turn off the tracker with the following code:

```js
GGEditor.setTrackable(false);
```
