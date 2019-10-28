import React from 'react';
import App from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import MainLayout from '../layout';
import { PageTransition } from 'next-page-transitions'

Router.events.on('routeChangeStart', url => {
  NProgress.start();
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
})
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }


  render () {
    const { Component, pageProps, router } = this.props;
    const {page, post} = pageProps;
    let pageClass = 'coderex-page';
    if(page) {
      if(page.slug === 'home') {
        pageClass = `home front-page page-${page.id}`;
      }else if(page.slug === 'blog') {
        pageClass = `blog page-${page.id}`;
      }else {
        pageClass = `inner-page ${page.slug} page-${page.id}`;
      }
    }else if(post) {
      pageClass = post.slug ? `post-${post.id} single-post` : 'coderex-post';
    }
    return (
      <MainLayout pageClass={pageClass}>
        <Head>
          <title>CodeRex</title>
        </Head>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>

        
        
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </MainLayout>
    )
  }
}