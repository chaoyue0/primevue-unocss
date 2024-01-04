import type { Preset } from 'unocss';

const enum align {
  between = 'space-between',
  around = 'space-around',
  evenly = 'space-evenly',
}

export default function gridPreset(): Preset {
  return {
    name: 'grid-preset',
    rules: [
      ['grid', { display: 'grid' }],
      ['inline-grid', { display: 'inline-grid' }],

      [
        /^grid-col-(\d+)$/,
        ([, d]) => ({ 'grid-template-columns': `repeat(${d},1fr)` }),
      ],
      [
        /^grid-row-(\d+)$/,
        ([, d]) => ({ 'grid-template-rows': `repeat(${d},1fr)` }),
      ],
      [
        /^grid-col-left-(\d+)$/,
        ([, d]) => ({ 'grid-template-columns': `${d}px auto` }),
      ],
      [
        /^grid-col-right-(\d+)$/,
        ([, d]) => ({ 'grid-template-columns': `auto ${d}px` }),
      ],

      [
        /^grid-col-span(\d+)$/,
        ([, d]) => ({ 'grid-column-start': `span ${d}` }),
      ],
      [/^grid-row-span(\d+)$/, ([, d]) => ({ 'grid-row-start': `span ${d}` })],

      ['grid-justify-between', { 'justify-content': align.between }],
      ['grid-justify-around', { 'justify-content': align.around }],
      ['grid-justify-evenly', { 'justify-content': align.evenly }],
      [/^grid-justify-(\w+)$/, ([, w]) => ({ 'justify-content': `${w}` })],

      [/^grid-justify-item-(\w+)$/, ([, w]) => ({ 'justify-items': `${w}` })],

      ['grid-align-between', { 'align-content': align.between }],
      ['grid-align-around', { 'align-content': align.around }],
      ['grid-align-evenly', { 'align-content': align.evenly }],
      [/^grid-align-(\w+)$/, ([, w]) => ({ 'align-content': `${w}` })],

      [/^grid-justify-item-(\w+)$/, ([, w]) => ({ 'align-items': `${w}` })],

      [/^grid-justify-self-(\w+)$/, ([, w]) => ({ 'justify-self': `${w}` })],

      [/^grid-align-self-(\w+)$/, ([, w]) => ({ 'align-self': `${w}` })],
    ],
  };
}
