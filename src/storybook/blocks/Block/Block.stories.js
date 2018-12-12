import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';

import Bem from 'bem-react-core';

import BaseDemo from './Form.assets/BaseDemo';

const stories = storiesOf('Block', module)
  .addDecorator(withReadme(require('./Block.md')))
  .addDecorator(story => (
    <Bem block="Story" mods={{ of: 'Block' }}>
      {story()}
    </Bem>
  ));

stories.addWithChapters('Base usage', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => <BaseDemo />,
          options: {
            allowSourceToggling: false,
            allowPropTablesToggling: false
          }
        }
      ]
    }
  ]
});
