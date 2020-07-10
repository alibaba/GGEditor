## [3.1.3](https://github.com/alibaba/GGEditor/compare/3.1.2...3.1.3) (2020-07-10)

### Bug Fixes

- fix `onAfterConnect` event ([a704aec](https://github.com/alibaba/GGEditor/commit/a704aec5a115020980f88231b1dd3c6442380fdb))

## [3.1.2](https://github.com/alibaba/GGEditor/compare/3.1.1...3.1.2) (2020-06-11)

### Bug Fixes

- fix for getting of recall edges ([bb7005c](https://github.com/alibaba/GGEditor/commit/bb7005cea51c7faef500e124fe4f5bfa84416910)), closes [#489](https://github.com/alibaba/GGEditor/issues/489)
- update type assertion ([f2eb776](https://github.com/alibaba/GGEditor/commit/f2eb776c30d69d2a3e76734433ae1e838087ed19))

## [3.1.1](https://github.com/alibaba/GGEditor/compare/3.1.0...3.1.1) (2020-04-22)

### Bug Fixes

- distinguish class component and function component ([565159f](https://github.com/alibaba/GGEditor/commit/565159ffa6acc13ccb41425a084be7984c03d528))
- suppress content editable warning ([5f4135c](https://github.com/alibaba/GGEditor/commit/5f4135c2ddddb16a116d00ed95bef208d82144f2))

# [3.1.0](https://github.com/alibaba/GGEditor/compare/3.0.6...3.1.0) (2020-04-07)

### Bug Fixes

- copying a model should be a deep copy ([03f9875](https://github.com/alibaba/GGEditor/commit/03f9875ba8997565e0a15df1ff7dcdcc44de70e6))
- the `GraphEvent` parameter may be empty ([d9476dd](https://github.com/alibaba/GGEditor/commit/d9476dd036a715afb0dfeccd615f7834447a926e))

### Features

- `withEditorContext` supports functional component ([e7e3512](https://github.com/alibaba/GGEditor/commit/e7e3512488dd46726b202f8061854ec28a2f6b7f))
- refactor the anchor point of the node ([9edbf9a](https://github.com/alibaba/GGEditor/commit/9edbf9a1ff43dcb213b05e4ba48d779d0453fee3))
- upgrade to G6 3.3.x ([104c6c1](https://github.com/alibaba/GGEditor/commit/104c6c1bf2ce600b011b6012a5b9c39fafa178aa))

## [3.0.6](https://github.com/alibaba/GGEditor/compare/3.0.5...3.0.6) (2020-03-24)

### Features

- command manager is not singleton ([962779a](https://github.com/alibaba/GGEditor/commit/962779a573570db46529615416ca5c295a8c868f))

## [3.0.5](https://github.com/alibaba/GGEditor/compare/3.0.4...3.0.5) (2020-02-11)

### Bug Fixes

- maybe parent node is undefined ([3d3c3a4](https://github.com/alibaba/GGEditor/commit/3d3c3a42bd99944bd68b140c2d657ce428e76536))

## [3.0.4](https://github.com/alibaba/GGEditor/compare/3.0.3...3.0.4) (2020-02-11)

### Bug Fixes

- optimize the `shouldTriggerShortcut` method ([9fd1db9](https://github.com/alibaba/GGEditor/commit/9fd1db9a8370b713219d280786760de43d29310f))
- the edges may have been removed ([63045b5](https://github.com/alibaba/GGEditor/commit/63045b5e2c4c0f7b926c8bb521c664f0ac10e2c0))

### Features

- export the `global` instance ([c1ff342](https://github.com/alibaba/GGEditor/commit/c1ff3426c3b34f27e7ecf467d581faae806bc4c7))
- focus on the root node of the mind graph ([3025a2d](https://github.com/alibaba/GGEditor/commit/3025a2d7d149b45185b5e5d29b2dca88a81cbeab))

## [3.0.3](https://github.com/alibaba/GGEditor/compare/3.0.2...3.0.3) (2020-02-06)

### Bug Fixes

- add `shouldTriggerShortcut` method ([3880958](https://github.com/alibaba/GGEditor/commit/3880958396900ec44a6b6dfe4209b33ba4f93ffa))

### Features

- export `G6` and `baseCommand` ([eb103c7](https://github.com/alibaba/GGEditor/commit/eb103c722b2a075ecb04c302507fcbb9e0d27a57))

## [3.0.2](https://github.com/alibaba/GGEditor/compare/3.0.1...3.0.2) (2020-02-04)

### Features

- export `commandManager` and `behaviorManager` ([a67fb0a](https://github.com/alibaba/GGEditor/commit/a67fb0a110e6ea49fad9aec5ae41879e137d67f0))

## [3.0.1](https://github.com/alibaba/GGEditor/compare/3.0.0...3.0.1) (2020-01-15)

### Bug Fixes

- check if edge is destroyed ([e6c2e06](https://github.com/alibaba/GGEditor/commit/e6c2e06e2d20486c5708de5d9b4416debe55a357))

### Features

- add `fold` and `unfold` buttons for mind graph ([86a9067](https://github.com/alibaba/GGEditor/commit/86a90673d05831d07987c2bec69913663dc35ac3))

# [3.0.0](https://github.com/alibaba/GGEditor/compare/2.0.4...3.0.0) (2020-01-09)

### Features

- upgrade to G6 3.x ([a5e574d](https://github.com/alibaba/GGEditor/commit/a5e574dd4dc04a64801fe877b8df172707132f01))

## [2.0.4](https://github.com/alibaba/GGEditor/compare/2.0.3...2.0.4) (2019-04-24)

### Bug Fixes

- Fix the position of the edges of the group ([8ea67e4](https://github.com/alibaba/GGEditor/commit/8ea67e4231d16037269a291f3c4492162b3bcb6e))

## [2.0.3](https://github.com/alibaba/GGEditor/compare/2.0.2...2.0.3) (2019-04-08)

### Features

- Add the type definitions for the project ([b70ff04](https://github.com/alibaba/GGEditor/commit/b70ff043de0378509ca72699f5f48f19ccb44cb0))

## [2.0.2](https://github.com/alibaba/GGEditor/compare/2.0.1...2.0.2) (2019-03-20)

### Bug Fixes

- Add the setting of `corejs` option ([a635c64](https://github.com/alibaba/GGEditor/commit/a635c64e691d463cd5754404f8cbd2991df3b8cb))

## [2.0.1](https://github.com/alibaba/GGEditor/compare/2.0.0...2.0.1) (2019-01-15)

### Bug Fixes

- The root node of mind can not be selected ([735da00](https://github.com/alibaba/GGEditor/commit/735da00ad852cdbd0102cc232882a8fb32154ec6))

### Features

- **Minimap:** Import the `Minimap` component directly from `G6` ([4bba85e](https://github.com/alibaba/GGEditor/commit/4bba85e78f20e9ace1fc6368ede81faa6b35ca68))

# [2.0.0](https://github.com/alibaba/GGEditor/compare/1.5.2...2.0.0) (2019-01-02)

### Features

- Replace `@antv/g6-editor` with `gg-editor-core` ([44c0e92](https://github.com/alibaba/GGEditor/commit/44c0e920dbcfcb8696519358f3200792c645fcc9))

## [1.5.2](https://github.com/alibaba/GGEditor/compare/1.5.1...1.5.2) (2018-12-29)

### Features

- Get the project version from the environment variables ([57bf784](https://github.com/alibaba/GGEditor/commit/57bf7840bd708cd8c8f8288c4b9df33fb5bd7fd6))

## [1.5.1](https://github.com/alibaba/GGEditor/compare/1.5.0...1.5.1) (2018-12-28)

### Bug Fixes

- Can't get the version of the project ([abc59fc](https://github.com/alibaba/GGEditor/commit/abc59fc70c4c7b321e92a8e50ec928cca44ff515))

# [1.5.0](https://github.com/alibaba/GGEditor/compare/1.4.0...1.5.0) (2018-12-28)

### Bug Fixes

- Can't get the `pageId` property of the child class ([2e2b1fe](https://github.com/alibaba/GGEditor/commit/2e2b1fe6dd5e53a85cd08e73b092b7000003efef))

# [1.4.0](https://github.com/alibaba/GGEditor/compare/1.3.5...1.4.0) (2018-12-26)

### Features

- Add the `Koni` component ([5fbbc8e](https://github.com/alibaba/GGEditor/commit/5fbbc8ee11729b8a7d1600e1c7d5cdf25c13fd13))

## [1.3.5](https://github.com/alibaba/GGEditor/compare/1.3.4...1.3.5) (2018-12-14)

### Features

- Record the version of the project ([8de4469](https://github.com/alibaba/GGEditor/commit/8de446943933f2d5cb1db2772962d9de1fc126b0))
- Upgrade the `track` method ([d2d41b8](https://github.com/alibaba/GGEditor/commit/d2d41b8a74be36acfe66cf55592e92dd3fd48721))
- **track:** Delay sending track messages ([f29aab6](https://github.com/alibaba/GGEditor/commit/f29aab6220ee0da5618fd2ceabc03766ca719795))
- **utils:** Add the `toQueryString` method ([2681afc](https://github.com/alibaba/GGEditor/commit/2681afc28ea485ff93dee8c5fbdf183fc29421c9))
- **utils:** Add the `uniqueId` method ([03d56e7](https://github.com/alibaba/GGEditor/commit/03d56e788e5de649b535c6ccefad58d3a2e9bddd))

## [1.3.4](https://github.com/alibaba/GGEditor/compare/1.3.3...1.3.4) (2018-11-22)

## [1.3.3](https://github.com/alibaba/GGEditor/compare/1.3.2...1.3.3) (2018-11-06)

## [1.3.2](https://github.com/alibaba/GGEditor/compare/1.3.1...1.3.2) (2018-11-06)

### Features

- Complement the mouse synthetic event ([4c3f0cf](https://github.com/alibaba/GGEditor/commit/4c3f0cf8bb024c7b8598ffd9ad7f2c1121dd4cba))

## [1.3.1](https://github.com/alibaba/GGEditor/compare/1.3.0...1.3.1) (2018-11-02)

# [1.3.0](https://github.com/alibaba/GGEditor/compare/1.2.5...1.3.0) (2018-10-24)

### Features

- Replace the track method with the track method of G6Editor ([8356eee](https://github.com/alibaba/GGEditor/commit/8356eeee14561867f0ba8802f215a0d3fe9a9351))

## [1.2.5](https://github.com/alibaba/GGEditor/compare/1.2.4...1.2.5) (2018-10-21)

### Features

- **Context:** Forward the `ref` property ([c370409](https://github.com/alibaba/GGEditor/commit/c370409bc362bf668392d40db1fda4e682ad835f))

## [1.2.4](https://github.com/alibaba/GGEditor/compare/1.2.3...1.2.4) (2018-10-21)

### Bug Fixes

- **Register:** Pass the context down to the `Register` component ([2a32a9d](https://github.com/alibaba/GGEditor/commit/2a32a9d5d3395af7f28ece91a9d8f18f57af0a1d))

## [1.2.3](https://github.com/alibaba/GGEditor/compare/1.2.2...1.2.3) (2018-10-19)

## [1.2.2](https://github.com/alibaba/GGEditor/compare/1.2.1...1.2.2) (2018-09-30)

### Bug Fixes

- **Toolbar:** Register the `Toolbar` after the page added ([252662a](https://github.com/alibaba/GGEditor/commit/252662a028216fb0daf56fcd1de58c49c658dcf3))

## [1.2.1](https://github.com/alibaba/GGEditor/compare/1.2.0...1.2.1) (2018-09-29)

### Features

- **propsAPI:** Pass the `executeCommand` method ([dff1c1b](https://github.com/alibaba/GGEditor/commit/dff1c1b4a3294775278c40e898f11e26cd9cf792))

# [1.2.0](https://github.com/alibaba/GGEditor/compare/1.1.3...1.2.0) (2018-09-20)

### Bug Fixes

- **Page:** Fix the propType of pageId ([3b6259b](https://github.com/alibaba/GGEditor/commit/3b6259b79e434b7a92e3e598b8bdc3e6f5891588))
- Update the components reference ([d748568](https://github.com/alibaba/GGEditor/commit/d748568a16d1c1d59f081a8b73764cdcc9be60c4))

### Features

- **GGEditor:** Add the `withPropsAPI` static method for the GGEditor ([d5602c6](https://github.com/alibaba/GGEditor/commit/d5602c6dcc4b31915ddb33aec7edd9d1210e29e7))
- **propsAPI:** Pass the `read` and `save` method of the current page ([a08fca8](https://github.com/alibaba/GGEditor/commit/a08fca86783b9035ebe9b3ed30ea1b801d374175))

## [1.1.3](https://github.com/alibaba/GGEditor/compare/1.1.2...1.1.3) (2018-09-11)

### Bug Fixes

- Listener support the components async render ([a27a1fa](https://github.com/alibaba/GGEditor/commit/a27a1fa7deebda471a3d724cff7bc0c5369d2880))

## [1.1.2](https://github.com/alibaba/GGEditor/compare/1.1.1...1.1.2) (2018-09-10)

## [1.1.1](https://github.com/alibaba/GGEditor/compare/33ea4e005600c4d3a5aa10824b90a2281a1b18fa...1.1.1) (2018-09-06)

### Bug Fixes

- **constants.js:** Rename event onBeforeItemUnactived to onBeforeItemInactivated as unactived is not ([9a15675](https://github.com/alibaba/GGEditor/commit/9a15675464e945eb43f5886cfafea655ec186b61))
- **DetailPannel:** Fix repeat render ([d1bfb78](https://github.com/alibaba/GGEditor/commit/d1bfb789f831c8d65a9557227b311a751966f7c7))
- Fix onKeyUpEditLabel event ([a4cafda](https://github.com/alibaba/GGEditor/commit/a4cafdafaa617bb41a870ab05d073417a6df8ed9))
- Fix read data after component props changed ([56bb985](https://github.com/alibaba/GGEditor/commit/56bb98559df152573a94a1868cb4372c7ee6e83a))
- Fix register command ([3022645](https://github.com/alibaba/GGEditor/commit/3022645956911990c459dfe747aaa6a631a056a1))
- Rename events name ([ed3a301](https://github.com/alibaba/GGEditor/commit/ed3a301d16992b7f3660ac5eaafa07ad83043e2d))
- **Flow:** Add the default data for the Flow component ([a73394c](https://github.com/alibaba/GGEditor/commit/a73394c126680b732c41ab822eae2050c53cb0b5))
- **Flow:** Add the default props for the Flow component ([b091bb9](https://github.com/alibaba/GGEditor/commit/b091bb93f6ac9c727b931676476413e53ca5bdee))
- **ItemPanel:** To separate the typo Itempannel from the code base. ([c54f6d7](https://github.com/alibaba/GGEditor/commit/c54f6d700d0c0ee346db2f4a576406aadeedfe47))
- **track.js:** Update the format of the `page` param ([2594366](https://github.com/alibaba/GGEditor/commit/25943660a0f5b1da11875cfe094341717b2ef52f))

### Features

- Execute `read` method after page added ([25e41d1](https://github.com/alibaba/GGEditor/commit/25e41d13b9d375bc3f696e21dc7a54f56a155255))
- **ContextMenu:** The menu container can toggle display status based on the page status ([8c294c9](https://github.com/alibaba/GGEditor/commit/8c294c9f07aa576f4800e07f01d006ef7559207f))
- Init ([33ea4e0](https://github.com/alibaba/GGEditor/commit/33ea4e005600c4d3a5aa10824b90a2281a1b18fa))
- **Base/Editor:** Call track funciton when the either Mind or Flow is added on the page ([e0d974c](https://github.com/alibaba/GGEditor/commit/e0d974c3b98a3d07aa516dfab6ddac2e025ee9fe))
- **BaseComponent:** Rename Base/index into Base/BaseComponent ([e1af153](https://github.com/alibaba/GGEditor/commit/e1af1531b5cece14b106be32542824d86df4abfe))
- **ContextMenu:** Pass the `className` and `style` props to the ContextMenu component ([74a32ef](https://github.com/alibaba/GGEditor/commit/74a32ef4393af91f8d517941cda67fc4d327a4a8))
- **Global:** Add Global for storing global variables ([2703203](https://github.com/alibaba/GGEditor/commit/27032038f42ab3f5ab355bf6168d3b6f517f9ee7))
- **Minimap:** Resize automatically ([c125f94](https://github.com/alibaba/GGEditor/commit/c125f948b7c0f58f03cd61b6eebad781761da8df))
- **PropsAPI:** Add PropsAPI class for exposing the API as the props for the child components in con ([51b199d](https://github.com/alibaba/GGEditor/commit/51b199da5100def86dd53dedb3b3585f39c6762d))
- **utils:** Add toQueryString into utils ([b8d0981](https://github.com/alibaba/GGEditor/commit/b8d0981dc1ffbdfd92751877a17fe1a0886b607a))
- **webpack.config.base:** Add GG_EDITOR_VERSION, G6_VERSION, G6_EDITOR_VERSION from package.json as ([2440d0d](https://github.com/alibaba/GGEditor/commit/2440d0d4b62ffbbe5cf66057b4e021dc59b5a3b1))
