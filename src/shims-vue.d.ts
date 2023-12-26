declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
  export = component;
}

// assets
declare module '*.png';
declare module '*.svg' {
  const content: string;
  export default content;
}
