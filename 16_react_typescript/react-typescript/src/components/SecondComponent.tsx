import * as React from 'react';

export interface ISecondComponentProps {
  name:string
}

export default function SecondComponent (props: ISecondComponentProps) {
  return (
    <div>
      <p>Meu segundo componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  );
}
