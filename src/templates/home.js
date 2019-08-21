import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, getPages, safePrefix, Link, markdownify} from '../utils';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <header>
                    <h1>{htmlToReact(_.get(this.props, 'pageContext.frontmatter.header').replace(/\n/g, '<br />'))}</h1>
                    {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </header>
                <section class="tiles">
                    {_.map(_.orderBy(getPages(this.props.pageContext.pages, '/posts'), 'frontmatter.date', 'desc'), (post, post_idx) => (
                        <article key={post_idx} class={_.get(post, 'frontmatter.home_style')}>
                            <span class="image">
                                <img src={safePrefix(_.get(post, 'frontmatter.home_img'))} alt="" />
                            </span>
                            <Link to={safePrefix(_.get(post, 'url'))}>
                                <h2>{_.get(post, 'frontmatter.title')}</h2>
                                <div class="content">
                                    {markdownify(_.get(post, 'frontmatter.excerpt'))}
                                </div>
                            </Link>
                        </article>
                    ))}
                </section>
            </Layout>
        );
    }
}
