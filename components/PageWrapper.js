import React from 'react';
import { getDataByEndPoint } from '../api/api';
import Menu from './Header'
import Footer from './Footer'
import CallToAction from './CallToAction'
import ScrollToTop from './ScrollToTop'


const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const [headerMenu, siteOptions, innerPageMenu, socialMenu, footerMenu, childProps] = await Promise.all([
        getDataByEndPoint('menus/v1/menus/header-menu').then(data=>{return data}),
        getDataByEndPoint('coderex/v1/site_options').then(data=>{return data}),
        getDataByEndPoint('menus/v1/menus/inner-pages-menu').then(data=>{return data}),
        getDataByEndPoint('menus/v1/menus/social-menu').then(data=>{return data}),
        getDataByEndPoint('menus/v1/menus/footer-menu').then(data=>{return data}),
        Comp.getInitialProps ? Comp.getInitialProps(args) : {},
      ]);

      return {
        headerMenu,
        siteOptions,
        innerPageMenu,
        socialMenu,
        footerMenu,
        ...childProps,
      };
    }

    render() {
      const { headerMenu, siteOptions, innerPageMenu, socialMenu, footerMenu } = this.props;
      return (
        <React.Fragment>
          <Menu menu={ headerMenu } siteOptions={siteOptions}/>
          <Comp {...this.props} />
          <CallToAction />
          <ScrollToTop />
          <Footer menu={innerPageMenu} socialMenu={socialMenu} footerMenu={footerMenu} siteOptions={siteOptions}/>
        </React.Fragment>
      );
    }
  };

export default PageWrapper;