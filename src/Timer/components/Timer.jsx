import React, { Component } from 'react';
import moment from 'moment';
import TimerHeader from '../../TimerHeader/components/TimerHeader';
import TimerBody from '../../TimerBody/components/TimerBody';
import * as timerStates from '../../timerStates';
import '../../App.css';



class Timer extends Component {
    state = {
        currentTime: moment.duration(25, 'minutes'),
        baseTime: moment.duration(25, 'minutes'),
        timerState: timerStates.NOT_SET,
        timer: null
    }

    setBaseTime = (newBaseTime) => {
        this.setState({
            currentTime: newBaseTime,
            baseTime: newBaseTime
        })
    }

    startTimer = () => {
        this.setState({
            timerState: timerStates.RUNNING,
            timer: setInterval(this.reduceTimer, 1000)
        })
    }

    stopTimer = () => {
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        this.setState({
            timer: null,
            currentTime: moment.duration(this.state.baseTime),
            timerState: timerStates.NOT_SET
        })
    }


    reduceTimer = () => {
        if (this.state.currentTime.get('hours') === 0 &&
            this.state.currentTime.get('minutes') === 0 &&
            this.state.currentTime.get('seconds') === 0
        ) {
            this.resetTimer();
            return;
        }

        const newTime = moment.duration(this.state.currentTime);
        newTime.subtract(1, 'second');

        this.setState({
            currentTime: newTime
        });
    }

    resetTimer = () => {
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }
        this.setState({
            timerState: timerStates.COMPLETE,
            timer: null,
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className="card mx-auto">
                    <div className="card-body ">

                        <TimerHeader
                            currentTime={this.state.currentTime}
                            startTimer={this.startTimer}
                            timerState={this.state.timerState}
                            stopTimer={this.stopTimer}
                        />
                        {
                            (this.state.timerState !== timerStates.RUNNING)
                            &&
                            (<TimerBody
                                baseTime={this.state.baseTime}
                                setBaseTime={this.setBaseTime}
                            />)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Timer;