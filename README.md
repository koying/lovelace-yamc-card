# YAMC Card by [@koying](https://www.github.com/koying)

## Changelog

### 1.0.0

- Initial public release

## Credits

Based upon `boilerplate-card` by @iantrich and largely inspired by `upcoming-media-card` by @maykar

## Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:yamc-card`                          |
| entity            | string  | **Required** | HA entity that provides data                | `none`              |
| target_player     | string  | **Optional** | Target HA media_player                      | `none`              |
| domain            | string  | **Optional** | Domain for services                         | `none`              |
| max               | int     | **Optional** | Number of rows                              | `none`              |
| date              | string  | **Optional** | Date form: `dd/mm` or `mm/dd`               | `none`              |

## Starting a new card from boilerplate-card with [devcontainer][devcontainer]

Note: this is available only in vscode ensure you have the [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed.

1. Fork and clone the repository.
2. Open a [devcontainer][devcontainer] terminal and run `npm start` when it's ready.
3. The compiled `.js` file will be accessible on
   `http://127.0.0.1:5000/yamc-card.js`.
4. On a running Home Assistant installation add this to your Lovelace
   `resources:`

```yaml
- url: "http://127.0.0.1:5000/yamc-card.js"
  type: module
```

_Change "127.0.0.1" to the IP of your development machine._

### Bonus

If you need a fresh test instance you can install a fresh Home Assistant instance inside the devcontainer as well.

1. Run the command `dc start`.
2. Home Assistant will install and will eventually be running on port `9123`

## [Troubleshooting](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins)
NB This will not work with node 9.x if you see the following errors try installing node 8.10.0
```yarn install
yarn install v1.3.2
[1/4] 🔍  Resolving packages...
warning rollup-plugin-commonjs@10.1.0: This package has been deprecated and is no longer maintained. Please use @rollup/plugin-commonjs.
[2/4] 🚚  Fetching packages...
error @typescript-eslint/eslint-plugin@2.6.0: The engine "node" is incompatible with this module. Expected version "^8.10.0 || ^10.13.0 || >=11.10.1".
error Found incompatible module
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
```
