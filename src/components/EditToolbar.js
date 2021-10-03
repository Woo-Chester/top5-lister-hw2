import React from "react";

export default class EditToolbar extends React.Component {
    render() {
        const{closeCallback,currentList} = this.props;
        return (
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className="top5-button-disabled"
                >
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className="top5-button-disabled"
                >
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className={currentList!==null ? "top5-button" : "top5-button-disabled"}
                    onClick={closeCallback}
                >
                        &#x24E7;
                </div>
            </div>
        )
    }
}