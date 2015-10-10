var React = require('react'),
    Classable = require('../mixins/classable.jsx'),
    TableRowsItem = require('./TableRowsItem.jsx');

var TableRow = React.createClass({

    mixins: [Classable],

    propTypes: {
        rowItems: React.PropTypes.array.isRequired
    },

    getDefaultProps: function() {
        return {
        };
    },

    render: function() {
        var classes = this.getClasses('chamel-table-rows');

        return (
            <div className={classes}>
                {this._getChildren()}
            </div>
        );
    },

    _getChildren: function() {
        var children = [],
            rowItem,
            itemComponent

        for (var i=0; i < this.props.rowItems.length; i++) {
            rowItem = this.props.rowItems[i];

            /*
             for(var prop in rowItem) {
             if(rowItem.hasOwnProperty(prop)) {
             console.log(prop);
             }
             }
             console.log("--");
             */

            itemComponent = (
                <TableRowsItem />
            );

            children.push(itemComponent);
        }

        return children;
    }

});

module.exports = TableRow;
