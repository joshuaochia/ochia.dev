import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class CounterupOne extends Component {
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }

    render() {
        let Data = [
            {
                countNum : 95,
                countTitle: 'React Js/TS',
            },
            {
                countNum : 85,
                countTitle: 'JAMStack Development',
            },
            {
                countNum : 70,
                countTitle: 'Wagtail Development',
            },
            {
                countNum : 75,
                countTitle: 'NextJS Development',
            },
            {
                countNum : 80,
                countTitle: 'HTML & CSS',
            },
      
    
        ];
        return (
            <ul className="counter-box">
                {Data.map((value, index) => (
                    <li key={index}>
                        <div className="inner">
                            <span className="description">{value.countTitle}</span>
                            <label className="counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                    <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                                </VisibilitySensor>%
                            </label>
                        </div>
                    </li>
                ))}
            </ul>

        )
    }
    
}

export default CounterupOne;