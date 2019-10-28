import React, {Fragment} from 'react';
import globalStyles from './styles';

const Layout = props => {
  const { children, pageClass } = props;
  return (
    <div className={`content-wrapper ${pageClass}`}>
        {children}
      <style jsx global>
        {globalStyles}
      </style> 
      <style jsx global>{`
        @font-face {
          font-family: 'Circular Std Bold';
          src: url('/static/fonts/circularstd-bold.eot');
          src: url('/static/fonts/circularstd-bold.woff2') format('woff2'),
              url('/static/fonts/circularstd-bold.woff') format('woff'), 
              url('/static/fonts/circularstd-bold.ttf') format('truetype'),
              url('/static/fonts/circularstd-bold.svg') format('svg'),
              url('/static/fonts/circularstd-bold.eot?#iefix') format('embedded-opentype');
          font-weight: 700;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
            font-family: 'CircularStd-Medium';
            src: url('/static/fonts/CircularStd-Medium.eot');
            src: url('/static/fonts/CircularStd-Medium.otf') format('opentype'),
                url('/static/fonts/CircularStd-Medium.woff') format('woff'), 
                url('/static/fonts/CircularStd-Medium.ttf') format('truetype'),
                url('/static/fonts/CircularStd-Medium.svg') format('svg'),
                url('/static/fonts/CircularStd-Medium.eot?#iefix') format('embedded-opentype');
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }
      `}</style> 
    </div>
  );
};
export default Layout;