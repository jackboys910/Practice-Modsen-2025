import PlusJakartaSansBold from '@assets/fonts/PlusJakartaSans/Bold/PlusJakartaSans-Bold.ttf';
import PlusJakartaSansExtraBold from '@assets/fonts/PlusJakartaSans/ExtraBold/PlusJakartaSans-ExtraBold.ttf';
import PlusJakartaSansMedium from '@assets/fonts/PlusJakartaSans/Medium/PlusJakartaSans-Medium.ttf';
import PlusJakartaSansRegular from '@assets/fonts/PlusJakartaSans/Regular/PlusJakartaSans-Regular.ttf';
import PlusJakartaSansSemiBold from '@assets/fonts/PlusJakartaSans/SemiBold/PlusJakartaSans-SemiBold.ttf';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    max-width: 1005px;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'PlusJakartaSansRegular';
    src: url(${PlusJakartaSansRegular})
  }

  @font-face {
    font-family: 'PlusJakartaSansMedium';
    src: url(${PlusJakartaSansMedium})
  }

  @font-face {
    font-family: 'PlusJakartaSansSemiBold';
    src: url(${PlusJakartaSansSemiBold})
  }

  @font-face {
    font-family: 'PlusJakartaSansBold';
    src: url(${PlusJakartaSansBold})
  }

  @font-face {
    font-family: 'PlusJakartaSansExtraBold';
    src: url(${PlusJakartaSansExtraBold})
  }
`;
