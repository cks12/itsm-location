import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ItsmLocation.web.ts
// and on native platforms to ItsmLocation.ts
import ItsmLocationModule from './ItsmLocationModule';
import ItsmLocationView from './ItsmLocationView';
import { ChangeEventPayload, ItsmLocationViewProps } from './ItsmLocation.types';

// Get the native constant value.
export const PI = ItsmLocationModule.PI;

export function hello(): string {
  return ItsmLocationModule.hello();
}

export async function setValueAsync(value: string) {
  return await ItsmLocationModule.setValueAsync(value);
}

const emitter = new EventEmitter(ItsmLocationModule ?? NativeModulesProxy.ItsmLocation);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ItsmLocationView, ItsmLocationViewProps, ChangeEventPayload };
