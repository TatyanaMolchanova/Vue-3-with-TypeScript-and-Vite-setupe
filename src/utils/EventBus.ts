import mitt, { type Emitter } from 'mitt';
import { type Events } from './Events'

// type Events<T> = {
//   [key: string]: string | number | null | undefined | T;
// };


export const EventBus: Emitter<Events> = mitt<Events>();