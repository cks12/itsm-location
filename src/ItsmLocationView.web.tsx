import * as React from 'react';

import { ItsmLocationViewProps } from './ItsmLocation.types';

export default function ItsmLocationView(props: ItsmLocationViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
