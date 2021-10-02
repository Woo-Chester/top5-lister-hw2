import React from "react";

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.currentItem,
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 1) {
            ;
        }
        else if (event.detail === 2) {
            this.handleToggleEdit(event);
        }
    }
    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        //let key = this.props.keyNamePair.key;
        let textValue = this.state.text;
        console.log("ListCard handleBlur: " + textValue);
        this.props.renameItemCallback(this.props.currentKey, this.props.currentIndex, textValue);
        this.handleToggleEdit();
    }

    render() {
        const { selected, currentKey } = this.props;
        const { currentItem } = this.props;
        const { currentIndex } = this.props;
        if (this.state.editActive) {
            return (
                <input 
                    id={"item-text-input-" + currentIndex}
                    className='list-card'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={currentItem}
                />
            )
        }
        else{
            let selectClass = "unselected-item-card";
            if(selected) {
                selectClass = "selected-item-card";
            }
            return (
                <div
                    id={'item-card-' + currentIndex}
                    key={currentKey}
                    onClick={this.handleClick}
                    className={'top5-item ' + selectClass}>
                    {currentItem}
                </div>
            )
        }
        /*
        if (this.state.editActive) {
            return (
                <input
                    id={"list-" + keyNamePair.name}
                    className='list-card'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={keyNamePair.name}
                />)
        }
        else {

            let selectClass = "unselected-list-card";
            if (selected) {
                selectClass = "selected-list-card";
            }
            return (
                <div
                    id={keyNamePair.key}
                    key={keyNamePair.key}
                    onClick={this.handleClick}
                    className={'list-card ' + selectClass}>
                    <span
                        id={"list-card-text-" + keyNamePair.key}
                        key={keyNamePair.key}
                        className="list-card-text">
                        {keyNamePair.name}
                    </span>
                    <input
                        type="button"
                        id={"delete-list-" + keyNamePair.key}
                        className="list-card-button"
                        onClick={this.handleDeleteList}
                        value={"\u2715"} />
                </div>
            );
        }
        */
    }
}