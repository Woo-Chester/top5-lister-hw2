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
            this.setState({
                text: this.props.currentItem
            })
            if(this.props.currentItem !== null){
                this.handleToggleEdit(event); 
            }
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
            this.handleToggleEdit();
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
        const { currentItem } = this.props;
        const { currentIndex } = this.props;
        if (this.state.editActive) {
            return (
                <input 
                    autoFocus
                    id={"item-text-input-" + currentIndex}
                    className='list-card'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={currentItem === null ? "" : currentItem}
                />
            )
        }
        else{
            return (
                <div
                    id={'item-card-' + currentIndex}
                    key={currentIndex}
                    onClick={this.handleClick}
                    className={'top5-item'}>
                    {currentItem===null ? "" : currentItem}
                </div>
            )
        }
    }
}