import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import chaptersAddon from 'react-storybook-addon-chapters';
import { name, repository as repo } from '../package.json';

setAddon(chaptersAddon);

setOptions({
  name: name.replace('@bizone/', ''),
  url: (repo && repo.url) || '#',
  addonPanelInRight: true,
  selectedAddonPanel: 'REACT_STORYBOOK/readme/panel'
});

const r = require.context('../blocks', true, /\.stories\.(js|less)$/);
configure(() => r.keys().forEach(r), module);
