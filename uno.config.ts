import { defineConfig } from 'unocss';
import flexPreset from './src/unocss/flex-preset';

export default defineConfig({
  presets: [flexPreset()],
});
