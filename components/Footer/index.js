import react, {Component} from 'react'
import Link from '../ActiveLink'
import styles from './style'
import $ from 'jquery';


const getSlug = url => {
    const parts = url.split('/');
    return parts.length > 2 ? (parts.length == 4 ? parts[parts.length - 1] : parts[parts.length - 2]) : '';
  };

export default class extends Component {

    componentDidMount(){
        var new_date = new Date();
        var new_year = new_date.getFullYear();
        $(".update-year").append(new_year);
    }

    render() {
        const {menu, siteOptions, socialMenu, footerMenu} = this.props;
        const {footer_options} = siteOptions;
        return (

            <div>
                <section className="cr-footer-widget">
                    <div className="cr-container">
                        <div className="cr-row">
                            <div className="cr-col">
                                <div className="widget-wrapper">
                                    <div className="widget address">
                                        <Link
                                            as={`/`}
                                            href={`/`}
                                        >
                                            <a><img src={siteOptions.logo} alt="footer logo" /></a>
                                        </Link>
                                        <address>
                                            <p>
                                                <span>Address</span>
                                                {footer_options.address}
                                            </p>
                                            <p>
                                                <span>Email</span>
                                                <a href={`mailto:${footer_options.email}`}>{footer_options.email}</a>
                                            </p>
                                        </address>
                                    </div>
                                    <div className="widget widget_nav_menu">
                                        <h6 className="widget-title">Explore</h6>
                                        <ul className="menu">
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
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="widget widget_nav_menu">
                                        <h6 className="widget-title">Follow</h6>
                                        <ul className="menu">
                                            { socialMenu.items.map((item, index) => {
                                                return <li key={item.ID}><a href={item.url} target='_blank'>{item.title}</a></li>
                                            })}
                                           
                                        </ul>
                                    </div>
                                    <div className="widget newsletter">
                                        <h6 className="widget-title">Newsletter</h6>
                                        <p>Get our stuff in your mail.</p>
                                        <div className="form-wrapper">
                                            <form action="">
                                                <input type="email" name="subscribe" placeholder="Enter your email" />>
                                                <button type="submit">
                                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="paper-plane" className="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"></path></svg>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cr-row">
                            <div className="cr-col">
                                <footer>
                                    <p className="copyright-txt">&copy; <span className="update-year" style={{paddingRight: '5px'}}> </span> 
                                             {footer_options.copy_text}
                                    </p>
                                    <ul className="menu">
                                        { footerMenu.items.map((item, index) => {
                                            const slug = getSlug(item.url);
                                            let actualPage = 'page';
                                            if(item.object === 'page') {
                                                actualPage = ''
                                            }else if(item.object === 'post') {
                                                actualPage = 'post'
                                            }else if(item.object === 'category') {
                                                actualPage = 'category'
                                            }
                                            let as = item.object === 'page' ? `${slug}` : `/${item.object}/${slug}`;
                                            return (
                                                <li key={item.ID}>
                                                    <Link
                                                        as={`/${as}`}
                                                        href={`/${slug}`}
                                                        activeClassName='active'
                                                    >
                                                        <a>{item.title}</a>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                       
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    </div>
                </section>

                <style jsx>
                    {styles}
                </style>
            </div>
        )
    }
}