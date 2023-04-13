import mitt, { type Emitter } from 'mitt';

type Events = {
  alignH: string;
  alignV: string;
};
export const eventBus: Emitter<Events> = mitt();
