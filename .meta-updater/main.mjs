import { catalog, devDependencies } from '@zkochan/pnpm-template-example'

export default (workspaceDir) => ({
  'package.json' (manifest, dir) {
    if (manifest.name === 'foo' || manifest.name === 'bar') {
      manifest.dependencies = {
        ...manifest.dependencies,
        react: catalog.react,
      }
    }
    if (manifest.name === 'foo') {
      manifest.devDependencies = {
        ...manifest.devDependencies,
        ...devDependencies,
      }
    }
    return manifest
  },
})
