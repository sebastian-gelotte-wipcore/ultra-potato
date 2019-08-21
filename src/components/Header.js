import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div class="inner">
                    <Link to={safePrefix('/')} class="logo">
                        <span class="symbol"><img src={safePrefix(_.get(this.props, 'pageContext.site.data.header.logo_img_src'))} alt="" /></span><span class="title">{_.get(this.props, 'pageContext.site.siteMetadata.title')}</span>
                    </Link>
                    <nav>
                        <ul>
                            <li><Link to="#menu">Menu</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
