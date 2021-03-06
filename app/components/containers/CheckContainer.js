define(function() {
    'use strict';

    var React = require('react');

    var CheckButtonsContainer = require('./CheckButtonsContainer');
    var CheckList = require('./../lists/CheckList');

    var CheckContainer = React.createClass({
        render:function() {
            return (
                <div className="check-container">
                    <CheckButtonsContainer />
                    <CheckList />
                </div>
            );
        }
    });

    return CheckContainer;
});