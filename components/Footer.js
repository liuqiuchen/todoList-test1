import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {
    readFilter (filter, name) {
        if(filter === this.props.filter) {
            return name;
        }
        return (<a href="#" onClick={e => {
            e.preventDefault();
            this.props.onFilterChange(filter);
        }}>{name}</a>)
    }
    render () {
        return (
            <div>
                <p>
                    Show:
                    {'   '}
                    {this.readFilter('SHOW_ALL', 'All')}
                    {'   '}
                    {this.readFilter('SHOW_COMPLETE', 'Completed')}
                    {'   '}
                    {this.readFilter('SHOW_ACTIVE', 'Active')}
                </p>
            </div>
        )
    }
}

Footer.PropTypes = {
    filter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired,
    onFilterChange: PropTypes.func.isRequired
};










