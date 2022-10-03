# Storybook Addon TYPO3 Fluid

Render TYPO3 Fluid templates in Storybook.

## Requirements

- installed and configured TYPO3 instance with [`typo3fluid-api`](https://github.com/philip-hartmann/typo3fluid-api) extension installed

## Installation

Install with npm

```sh
npm i storybook-typo3fluid
```

Create a `.env` file in your Storybook folder and add the following environment variables which should match with the `typo3fluid-api` extension settings in your TYPO3 instance.

```sh
TYPO3FLUID_API_URL="<absolute path to typo3 typo3fluid-api endpoint>"
TYPO3FLUID_API_PASSWORD=""
```

## Usage

Stories for TYPO3 Fluid templates are similar to html stories. The only difference is how you create the component template inside the story. Use the `FluidTemplate` function to indicate which TYPO3 Fluid template you want to render. The passed arguments `args` contain all defined arguments from your story which will be made available in the TYPO3 Fluid template you want to use.

```js
import { FluidTemplate } from "storybook-typo3fluid";

const Template = (args) => FluidTemplate({
  extension: '<extension name>',
  template: '<template name>',
  partial: '<partial name>',
  section: '<(optional) section name>',
  args
});
```

Compare this to an official html template from storybook.

```js
import { createButton } from './Button';

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};
```

## Limitations

- In stories defined callback functions are not yet supported.