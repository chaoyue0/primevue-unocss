import type { Preset } from 'unocss';

const enum align {
  start = 'flex-start',
  center = 'center',
  end = 'flex-end',
  between = 'space-between',
  around = 'space-around',
  evenly = 'space-evenly',
  baseline = 'baseline',
  stretch = 'stretch',
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

      ['grid-justify-start', { 'justify-content': align.start }],
      ['grid-justify-end', { 'justify-content': align.end }],
      ['grid-justify-center', { 'justify-content': align.center }],
      ['grid-justify-stretch', { 'justify-content': align.stretch }],
      ['grid-justify-between', { 'justify-content': align.between }],
      ['grid-justify-around', { 'justify-content': align.around }],
      ['grid-justify-evenly', { 'justify-content': align.evenly }],

      ['grid-justify-item-start', { 'justify-items': align.start }],
      ['grid-justify-item-end', { 'justify-items': align.end }],
      ['grid-justify-item-center', { 'justify-items': align.center }],
      ['grid-justify-item-stretch', { 'justify-items': align.stretch }],

      ['grid-align-start', { 'align-content': align.start }],
      ['grid-align-end', { 'align-content': align.end }],
      ['grid-align-center', { 'align-content': align.center }],
      ['grid-align-stretch', { 'align-content': align.stretch }],
      ['grid-align-between', { 'align-content': align.between }],
      ['grid-align-around', { 'align-content': align.around }],
      ['grid-align-evenly', { 'align-content': align.evenly }],

      ['grid-align-item-start', { 'align-items': align.start }],
      ['grid-align-item-end', { 'align-items': align.end }],
      ['grid-align-item-center', { 'align-items': align.center }],
      ['grid-align-item-stretch', { 'align-items': align.stretch }],

      ['grid-justify-self-start', { 'justify-self': align.start }],
      ['grid-justify-self-end', { 'justify-self': align.end }],
      ['grid-justify-self-center', { 'justify-self': align.center }],
      ['grid-justify-self-stretch', { 'justify-self': align.stretch }],

      ['grid-align-self-start', { 'align-self': align.start }],
      ['grid-align-self-end', { 'align-self': align.end }],
      ['grid-align-self-center', { 'align-self': align.center }],
      ['grid-align-self-stretch', { 'align-self': align.stretch }],
    ],
  };
}
