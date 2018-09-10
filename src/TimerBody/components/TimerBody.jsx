import React, { Component } from 'react';
import '../../App.css';

class TimerBody extends Component {
    handleChange = (e) => {
        let newBaseTime = this.props.baseTime;0
        if (e.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(e.target.value, 10), 'hours');
        if (e.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(e.target.value, 10), 'minutes');
        if (e.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(e.target.value, 10), 'seconds');

        this.props.setBaseTime(newBaseTime);
    }

    render() {
        return (
            <form>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Hours</label>
                    <div className="col-sm-9">
                        <input
                            type="number"
                            className="form-control"
                            id="hours"
                            placeholder="hours"
                            defaultValue={this.props.baseTime.get('hours')}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Minutes</label>
                    <div className="col-sm-9">
                        <input
                            type="number"
                            className="form-control"
                            id="minutes"
                            placeholder="minutes"
                            defaultValue={this.props.baseTime.get('minutes')}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Seconds</label>
                    <div className="col-sm-9">
                        <input
                            type="number"
                            className="form-control"
                            id="seconds"
                            placeholder="seconds"
                            defaultValue={this.props.baseTime.get('seconds')}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
            </form>
        )
    }
}



export default TimerBody;