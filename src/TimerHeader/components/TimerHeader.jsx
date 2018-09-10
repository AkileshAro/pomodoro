import React, { Component } from 'react';
import '../../App.css';
import * as timerStates from '../../timerStates';

class TimerHeader extends Component {
    leftPad = (val) => {
        if (val < 10) return `0${val}`;

        return `${val}`;
    }

    getButton = () => {
        if (this.props.timerState === timerStates.NOT_SET)
            return (<button className='btn btn-success d-block mx-auto' onClick={this.props.startTimer}>START</button>);

        if (this.props.timerState === timerStates.RUNNING)
            return (<button className='btn btn-danger d-block mx-auto' onClick={this.props.stopTimer}>INTERRUPT</button>);

        if (this.props.timerState === timerStates.COMPLETE)
            return (<button className='btn btn-info d-block mx-auto' onClick={this.props.stopTimer}>RESET</button>);
    }
    render() {
        return (
            <div className='card-header'>
                <h5 className="card-title text-center">POMODORO</h5>
                <div className='row center-block'>
                    {(this.props.timerState === timerStates.COMPLETE) && <iframe className='center-block youtube-responsive-width' height='315' src='https://www.youtube.com/embed/bf-wVVNfsOw'></iframe> }
                </div>
                <h6 className="card-subtitle mb-2 text-center text-muted">
                    {`${this.leftPad(this.props.currentTime.get('hours'))} : ${this.leftPad(this.props.currentTime.get('minutes'))} : ${this.leftPad(this.props.currentTime.get('seconds'))}`}
                </h6>
                <div>{this.getButton()}</div>
            </div>
        )
    }
}

export default TimerHeader;