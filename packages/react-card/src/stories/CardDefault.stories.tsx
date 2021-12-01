import * as React from 'react';

import { CardHeader } from '../index';

const ASSET_URL = 'https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card';

const avatarElviaURL = ASSET_URL + '/assets/avatar_elvia.svg';

export const Default = () => {
  return (
    <CardHeader
      image={<img src={avatarElviaURL} alt="Face of a person" />}
      header={<p>Hi</p>}
      description={<p>Hi</p>}
    />
  );
};
