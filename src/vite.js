import { FluidTemplate as _FluidTemplate } from './typo3fluid/template'

const FluidTemplate = (args) => _FluidTemplate({
  ...args,
  api: {
    url: import.meta.env?.STORYBOOK_TYPO3FLUID_API_URL,
    password: import.meta.env?.STORYBOOK_TYPO3FLUID_API_PASSWORD
  }
})

export {
  FluidTemplate
}
