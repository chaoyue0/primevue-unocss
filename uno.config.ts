import { defineConfig } from 'unocss';
import flexPreset from './src/unocss/flex-preset';
import gridPreset from './src/unocss/grid-preset';
import layoutPreset from './src/unocss/layout-preset';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  presets: [presetUno, flexPreset(), gridPreset(), layoutPreset()],
});
