import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.scss';
import './styles/config.scss';
import './styles/composition.scss';
import './styles/global-block.scss';

import './styles/_utils/utils-box-model.scss';
import './styles/_utils/utils-font.scss';
import './styles/_utils/utils-colors.scss';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
