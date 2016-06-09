import '../less/app_container.less';

import React from 'react';
import Axios from 'axios';

import Note from '../components/note';
import Send from '../components/send';

const defaultState = {
    yesterday: '',
    today: '',
    blockers: '',
    text: ''
};

const message = {
    "username": "Donald Hyde's Scrum Bot",
    "icon_emoji": ":dhyde:",
    "channel": "@dhyde_sm",
    // "channel": "#dailyproductscrum",
    "attachments": [],
    "text": "Message",
};

const attachment = {
    // "title": "Daily Scrum Report",
    "pretext": "*Daily Scrum Report*",
    "text": "Message",
    "mrkdwn_in": [
        "text",
        "pretext"
    ]
};

class AppContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = defaultState;
    }

    updateYesterday (input) {
        this.setState({ yesterday: input.trim() });
        this.updateMessage();
    }

    updateToday (input) {
        this.setState({ today: input.trim() });
        this.updateMessage();
    }

    updateBlockers (input) {
        this.setState({ blockers: input.trim() });
        this.updateMessage();
    }

    updateMessage () {
        const blockers = this.state.blockers !== '' ? ('*Blockers:* ' + this.state.blockers) : '*No Blockers*';
        this.setState({ text: `*Yesterday:* ${this.state.yesterday}\n*Today:* ${this.state.today}\n${blockers}` });
    }

    sendUpdate () {
        if (this.state.yesterday.trim() !== '' && this.state.today.trim() !== '') {
            Axios.post(
                'https://hooks.slack.com/services/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',
                Object.assign({}, message, //{
                    // attachments: [
                        Object.assign({}, attachment, { text: this.state.text })
                    //]
                //}
                )
            );
            this.setState(defaultState);
            this.render();
        }
    }

    render () {
        return (
            <div className="main" >
                <h1>Scrum Report<sup>TM</sup></h1>
                <Note placeholder="Yesterday" value={this.state.yesterday} onChange={(data) => this.updateYesterday(data)} />
                <Note placeholder="Today" value={this.state.today} onChange={(data) => this.updateToday(data)} />
                <Note placeholder="Blockers" value={this.state.blockers} onChange={(data) => this.updateBlockers(data)} />
                <Send onClick={() => this.sendUpdate()}/>
            </div>
        );
    }
}

export default AppContainer;