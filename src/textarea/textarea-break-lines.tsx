import React, { FC, Fragment } from 'react';

type Props = {
    value: string;
}

export const TextareaBreakLines: FC<Props> = ({ value }) => {
  const lines = value.split(/\r?\n/g);

  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={String(index)}>
          {line}
          <br />
        </Fragment>
      ))}
    </>
  );
};
