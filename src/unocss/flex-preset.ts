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

export default function flexPreset(): Preset {
  return {
    name: 'flex-preset',
    rules: [
      ['flex', { display: 'flex' }],
      ['inline-flex', { display: 'inline-flex' }],
      ['flex-row', { 'flex-direction': 'row' }],
      ['flex-row-reverse', { 'flex-direction': 'row-reverse' }],
      ['flex-col', { 'flex-direction': 'col' }],
      ['flex-col-reverse', { 'flex-direction': 'col-reverse' }],

      ['flex-wrap', { 'flex-wrap': 'wrap' }],
      ['flex-nowrap', { 'flex-wrap': 'nowrap' }],
      ['flex-wrap-reverse', { 'flex-wrap': 'wrap-reverse' }],

      ['flex-justify-start', { 'justify-content': align.start }],
      ['flex-justify-center', { 'justify-content': align.center }],
      ['flex-justify-end', { 'justify-content': align.end }],
      ['flex-justify-between', { 'justify-content': align.between }],
      ['flex-justify-around', { 'justify-content': align.around }],
      ['flex-justify-evenly', { 'justify-content': align.evenly }],
      ['flex-justify-stretch', { 'justify-content': align.stretch }],
      ['flex-justify-baseline', { 'justify-content': align.baseline }],

      ['flex-content-start', { 'align-content': align.start }],
      ['flex-content-center', { 'align-content': align.center }],
      ['flex-content-end', { 'align-content': align.end }],
      ['flex-content-between', { 'align-content': align.between }],
      ['flex-content-around', { 'align-content': align.around }],
      ['flex-content-stretch', { 'align-content': align.stretch }],
      ['flex-content-baseline', { 'align-content': align.baseline }],
      ['flex-content-evenly', { 'align-content': align.evenly }],

      ['flex-items-start', { 'align-items': align.start }],
      ['flex-items-center', { 'align-items': align.center }],
      ['flex-items-end', { 'align-items': align.end }],
      ['flex-items-stretch', { 'align-items': align.stretch }],
      ['flex-items-baseline', { 'align-items': align.baseline }],

      ['flex-self-start', { 'align-self': align.start }],
      ['flex-self-center', { 'align-self': align.center }],
      ['flex-self-end', { 'align-self': align.end }],
      ['flex-self-stretch', { 'align-self': align.stretch }],
      ['flex-self-baseline', { 'align-self': align.baseline }],

      [/^flex-gap-(\d+)$/, ([, d]) => ({ gap: `${d}px` })],
      [/^flex-gap-row-(\d+)$/, ([, d]) => ({ 'row-gap': `${d}px` })],
      [/^flex-gap-col-(\d+)$/, ([, d]) => ({ 'col-gap': `${d}px` })],

      [/^flex-(\d+)$/, ([, d]) => ({ flex: `${d}` })],

      ['flex-auto', { flex: '1 1 auto' }],
      ['flex-none', { flex: 'none' }],

      [/^flex-grow-(\d+)$/, ([, d]) => ({ 'flex-grow': `${d}` })],
      [/^flex-shrink-(\d+)$/, ([, d]) => ({ 'flex-shrink': `${d}` })],
      [/^flex-order-(\d+)$/, ([, d]) => ({ 'flex-order': `${d}` })],
    ],
    shortcuts: [
      {
        'flex-center': 'flex flex-justify-center flex-items-end',
      },
    ],
  };
}
