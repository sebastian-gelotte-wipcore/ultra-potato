import React from 'react';
import _ from 'lodash';

export default class Contact extends React.Component {
    render() {
        return (
            <section>
                <h2>{_.get(this.props, 'pageContext.site.data.contact.title')}</h2>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field half">
                            <input type="text" name="name" id="name" placeholder="Name" />
                        </div>
                        <div class="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div class="field">
                            <textarea name="message" id="message" placeholder="Message" />
                        </div>
                    </div>
                    <ul class="actions">
                        <li><input type="submit" value="Send" class="primary" /></li>
                    </ul>
                </form>
            </section>
        );
    }
}
