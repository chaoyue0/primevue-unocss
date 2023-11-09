import type { Preset, Rule } from 'unocss';

export default function staticPreset(): Preset {
  return {
    name: 'static-preset',
    rules: [
      ...appearances,
      ...resizes,
      ...userSelects,
      ...breaks,
      ...textWraps,
      ...textTransforms,
    ],
  };
}

const appearances: Rule[] = [
  ['visible', { visibility: 'visible' }],
  ['hidden', { visibility: 'hidden' }],
  ['backface-visible', { 'backface-visibility': 'visible' }], //3D
  ['backface-hidden', { 'backface-visibility': 'hidden' }], //3D
];

const resizes: Rule[] = [
  ['resize-x', { resize: 'horizontal' }],
  ['resize-y', { resize: 'vertical' }],
  ['resize', { resize: 'both' }],
  ['resize-none', { resize: 'none' }],
];

const userSelects: Rule[] = [
  ['select-auto', { '-webkit-user-select': 'auto', 'user-select': 'auto' }],
  ['select-all', { '-webkit-user-select': 'all', 'user-select': 'all' }],
  ['select-text', { '-webkit-user-select': 'text', 'user-select': 'text' }],
  ['select-none', { '-webkit-user-select': 'none', 'user-select': 'none' }],
];

const breaks: Rule[] = [
  ['break-all', { 'word-break': 'break-all' }],
  ['break-keep', { 'word-break': 'keep-all' }],
];

const textWraps: Rule[] = [
  ['wrap-words', { 'overflow-wrap': 'break-word' }],
  ['wrap-anywhere', { 'overflow-wrap': 'anywhere' }],
];

const textTransforms: Rule[] = [
  ['case-upper', { 'text-transform': 'uppercase' }],
  ['case-lower', { 'text-transform': 'lowercase' }],
  ['case-capital', { 'text-transform': 'capitalize' }],
];
