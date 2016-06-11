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
    // "channel": "@dhyde_sm",
    "channel": "#dailyproductscrum",
    "mrkdwn": true,
    "text": "Message"
};

class AppContainer extends React.Component {
    constructor (props) {
        super(props);

        this.state = defaultState;
    }

    updateYesterday (input) {
        this.setState({ yesterday: input });
    }

    updateToday (input) {
        this.setState({ today: input });
    }

    updateBlockers (input) {
        this.setState({ blockers: input });
    }

    getMessageText () {
        let message = '*Daily Scrum Report*\n';
        message += `>>>*Yesterday:* ${this.state.yesterday}\n`;
        message += `*Today:* ${this.state.today}\n`;
        message += (this.state.blockers.trim() !== '') ?
            ('*Blockers:* ' + this.state.blockers) :
            '*No Blockers*';

        return message;
    }

    sendUpdate () {
        // Axios.post(
        //     'https://hooks.slack.com/services/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',
        //     Object.assign({}, message, { text: this.getMessageText() })
        // ).then(() => {
        //     this.reset();
        // }).catch(() => {
        //     console.log('Failed to send!');
        // });
        console.log('Posting disabled...');
    }

    reset () {
        this.setState(defaultState);
        this.render();
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