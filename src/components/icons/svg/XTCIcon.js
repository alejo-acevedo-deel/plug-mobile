import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

const XTCIcon = ({ color = 'black', ...props }) => (
  <Svg width="41" height="41" viewBox="0 0 41 41" fill="none" {...props}>
    <Rect width="41" height="41" rx="20.5" fill={color} />
    <Path
      d="M27.4671 29.3973L26.9957 26.9993C25.9591 28.0839 24.5849 28.8855 23.0378 29.3081C20.0947 30.1156 17.0235 29.4528 14.8685 27.796C14.7635 27.7147 14.6606 27.6313 14.5598 27.5457C14.4591 27.4601 14.3623 27.3738 14.2695 27.2866L15.686 26.5727L10.5544 24.9211L9.64819 29.6155L10.923 28.973C11.0087 29.0653 11.0943 29.1575 11.1833 29.2474C11.2722 29.3373 11.3651 29.4269 11.4583 29.5146C14.5839 32.4615 19.4948 33.7491 24.1826 32.4631C26.7643 31.758 29.0039 30.3275 30.5502 28.396L27.4671 29.3973Z"
      fill="white"
    />
    <Path
      d="M9.82827 23.1829L12.5568 24.1733C12.5116 24.0517 12.4677 23.9289 12.4277 23.8046C10.9713 19.2742 13.4944 14.4484 18.0703 12.9516C18.1165 12.9365 18.1619 12.9194 18.2087 12.9048C18.3028 12.8758 18.3971 12.8508 18.4914 12.8248C18.6317 12.7869 18.7726 12.7514 18.9129 12.7201L18.916 14.3888L23.3143 10.8049L18.9034 7.23511L18.9061 8.74986C18.7658 8.77167 18.6248 8.79878 18.4845 8.82571C18.3442 8.85264 18.2035 8.88089 18.063 8.91199C17.7119 8.98974 17.3615 9.07867 17.0124 9.18676C10.2555 11.2774 6.50609 18.3473 8.63753 24.9783C8.80894 25.5079 9.01551 26.026 9.25589 26.5292L9.82827 23.1829Z"
      fill="white"
    />
    <Path
      d="M31.9343 25.1028C31.9748 24.9735 32.0112 24.8423 32.0481 24.7108C32.7201 22.3213 32.717 19.7588 32.0393 17.3712C30.661 12.4941 26.8043 9.25767 22.5067 8.84229L24.7871 10.9425L22.8651 12.7233C25.5636 13.2508 27.9128 15.3957 28.7938 18.5137C29.1825 19.8834 29.2509 21.3413 28.9923 22.7488C28.9671 22.8866 28.9387 23.0234 28.9071 23.1592C28.8764 23.2937 28.8423 23.4266 28.8059 23.5591L27.546 22.7501L28.3707 28.1364L32.9577 26.2252L31.805 25.4847C31.8492 25.358 31.8934 25.2313 31.9343 25.1028Z"
      fill="white"
    />
  </Svg>
);

export default XTCIcon;