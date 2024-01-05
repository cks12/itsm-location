import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ItsmLocationViewProps } from './ItsmLocation.types';

const NativeView: React.ComponentType<ItsmLocationViewProps> =
  requireNativeViewManager('ItsmLocation');

export default function ItsmLocationView(props: ItsmLocationViewProps) {
  return <NativeView {...props} />;
}
