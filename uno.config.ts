import { defineConfig } from 'unocss';
import flexPreset from './src/unocss/flex-preset';
import gridPreset from './src/unocss/grid-preset';

export default defineConfig({
  presets: [flexPreset(), gridPreset()],
});
