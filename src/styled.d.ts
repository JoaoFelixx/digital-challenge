import 'styled-components';

import type { Theme } from './styles/theme';


declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Theme['colors']
  }
}