import type { Preset } from 'unocss';

export default function layoutPreset(): Preset {
  return {
    name: 'layout-preset',
    rules: [
      ['hidden', { display: 'none' }],
      ['block', { display: 'block' }],
      ['inline', { display: 'inline' }],
      ['inline-block', { display: 'inline-block' }],

      ['static', { position: 'static' }],
      ['relative', { position: 'relative' }],
      ['absolute', { position: 'absolute' }],
      ['fixed', { position: 'fixed' }],
      ['sticky', { position: 'sticky' }],

      ['top-auto', { top: 'auto' }],
      ['right-auto', { right: 'auto' }],
      ['bottom-auto', { bottom: 'auto' }],
      ['left-auto', { left: 'auto' }],

      [/^top-(\d+)%$/, ([, d]) => ({ top: `${d}%` })],
      [/^right-(\d+)%$/, ([, d]) => ({ right: `${d}%` })],
      [/^bottom-(\d+)%$/, ([, d]) => ({ bottom: `${d}%` })],
      [/^left-(\d+)%$/, ([, d]) => ({ left: `${d}%` })],

      [/^top-(\d+)$/, ([, d]) => ({ top: `${d}px` })],
      [/^right-(\d+)$/, ([, d]) => ({ right: `${d}px` })],
      [/^bottom-(\d+)$/, ([, d]) => ({ bottom: `${d}px` })],
      [/^left-(\d+)$/, ([, d]) => ({ left: `${d}px` })],

      [/^p-(\d+)$/, ([, d]) => ({ padding: `${d}px` })],
      [/^pt-(\d+)$/, ([, d]) => ({ 'padding-top': `${d}px` })],
      [/^pr-(\d+)$/, ([, d]) => ({ 'padding-right': `${d}px` })],
      [/^pb-(\d+)$/, ([, d]) => ({ 'padding-bottom': `${d}px` })],
      [/^pl-(\d+)$/, ([, d]) => ({ 'padding-left': `${d}px` })],

      [/^m-(\d+)$/, ([, d]) => ({ margin: `${d}px` })],
      [/^mt-(\d+)$/, ([, d]) => ({ 'margin-top': `${d}px` })],
      [/^mr-(\d+)$/, ([, d]) => ({ 'margin-right': `${d}px` })],
      [/^mb-(\d+)$/, ([, d]) => ({ 'margin-bottom': `${d}px` })],
      [/^ml-(\d+)$/, ([, d]) => ({ 'margin-left': `${d}px` })],
    ],
  };
}
