import React from "react";
import ItemCard from "./ItemCard";

export default class Workspace extends React.Component {
    render() {
        const { currentList,keyNamePairs,renameItemCallback,swapItemCallback } = this.props;
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id ="edit-items">
                    {
                        Array.from(Array(5).keys()).map((index) => (
                            <ItemCard
                                currentItem={currentList!=null ? currentList.items[index] : null}
                                keyNamePair={keyNamePairs}
                                currentKey={currentList!=null ? currentList.key : null}
                                currentIndex={index}
                                renameItemCallback={renameItemCallback}
                                swapItemCallback={swapItemCallback}
                            />
                            
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}