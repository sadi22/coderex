import React, { Component } from 'react';
import Link from '../ActiveLink'
import styles from './style';
import $ from 'jquery';

const getSlug = url => {
  const parts = url.split('/');
  return parts.length > 2 ? (parts.length == 4 ? parts[parts.length - 1] : parts[parts.length - 2]) : '';
};


class Menu extends Component {
    componentDidMount(){

        //------navbar toggle------
        $(".toggle-bar").on("click", function () {
            $(".navigation-overlay").addClass("open-overlay");
            $(".navigation-wrapper").addClass("visible");
        });

        $(".cross-bar").on("click", function () {
            $(".navigation-overlay").removeClass("open-overlay");
            $(".navigation-wrapper").removeClass("visible");
        });

        $(".cr-navigation ul.dropdown").parent("li").addClass("has-children");

        // $(".cr-navigation ul.dropdown").parent("li").append("");

        $(".cr-navigation li svg").on("click", function () {
            $(this).parent("li").children(".dropdown").slideToggle();
            $(this).parent("li").siblings().children(".dropdown").slideUp();

        });
        $(".cr-navigation ul.dropdown li ").on("click", function (e) {
            e.stopPropagation();
        });
    }
    render() {
        const { menu, siteOptions } = this.props;
        return (
            <div>
                <header className="cr-header">
                    <div className="container-fluid">
                        <div className="cr-row">
                            <div className="cr-col">
                                <nav>
                                    <div className="logo">
                                        <Link
                                            as={`/`}
                                            href={`/`}
                                        >
                                            <a>
                                                <img src={siteOptions.logo} className="custom-logo-link" alt="logo" />
                                                <img src={siteOptions.blog_logo} className="custom-logo-link blog-logo" alt="logo" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="toggle-bar">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="cr-navigation right-canvas">
                    <div className="navigation-overlay"></div>
                    <div className="navigation-wrapper">
                        <div className="cross-bar">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="navigation-item">
                            <ul>
                                { menu.items.map((item, index) => {
                                    const slug = getSlug(item.url);
                                    let actualPage = 'page';
                                    if(item.object === 'page') {
                                        if(slug === 'blog') {
                                            actualPage = 'blog'
                                        }else {
                                            actualPage = 'page'
                                        }
                                    }else if(item.object === 'post') {
                                        actualPage = 'post'
                                    }else if(item.object === 'category') {
                                        actualPage = 'category'
                                    }
                                    let as = item.object === 'page' ? `${slug}` : `${actualPage}/${slug}`;
                                    let href = slug ? `/${slug}` : '/';
                                    return (
                                        <li key={item.ID}>
                                            <Link
                                                as={`/${as}`}
                                                href={href}
                                                activeClassName='active'
                                            >
                                                <a>{item.title}</a>
                                            </Link>
                                            {item.child_items && 
                                                <svg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='angle-down' className='svg-inline--fa fa-angle-down fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'><path fill='currentColor' d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z'></path></svg>
                                            }
                                            {item.child_items && 
                                                <ul className="dropdown">
                                                    {item.child_items.map((item, index) => {
                                                        const slug = getSlug(item.url);
                                                        let actualPage = 'page';
                                                        if(item.object === 'page') {
                                                            if(slug === 'blog') {
                                                                actualPage = 'blog'
                                                            }else {
                                                                actualPage = 'page'
                                                            }
                                                        }else if(item.object === 'post') {
                                                            actualPage = 'post'
                                                        }else if(item.object === 'category') {
                                                            actualPage = 'category'
                                                        }
                                                        let as = item.object === 'page' ? `${slug}` : `${actualPage}/${slug}`;
                                                        let href = slug ? `/${slug}` : '/';
                                                        return (
                                                            <li key={item.ID}>
                                                                <Link
                                                                    as={`/${as}`}
                                                                    href={href}
                                                                    activeClassName='active'
                                                                >
                                                                    <a>{item.title}</a>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })} 
                                                </ul>
                                            }
                                        </li>
                                        
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <style jsx>
                    {styles}
                </style>
            </div>
        )
    }
}

export default Menu;

