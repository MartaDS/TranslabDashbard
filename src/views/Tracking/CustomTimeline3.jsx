import React, { Component } from "react";
import moment from "moment";
import Modal from "react-modal";

import Timeline from "react-calendar-timeline";

import generateFakeData from "../../generate-fake-data3";

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const minTime = moment().add(-3, 'months').valueOf()
const maxTime = moment().add(1, 'months').valueOf()

var keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end'
}

export default class App extends Component {
  constructor(props) {
    super(props);

    const { groups, items } = generateFakeData();
    const defaultTimeStart = moment()
      .startOf('month')
      .toDate().valueOf()
    const defaultTimeEnd = moment()
      .endOf('month')
      .toDate().valueOf()

    this.state = {
      groups,
      items,
      defaultTimeStart,
      defaultTimeEnd,
      clickedItemId: 0,
      openState: false,
      clickedItem: items[0]
    };
  }
  
  itemRenderer = ({
    item,
    timelineContext,
    itemContext,
    getItemProps,
    getResizeProps
  }) => {
    const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();
    const backgroundColor = itemContext.selected
      ? itemContext.dragging
        ? "red"
        : item.selectedBgColor
      : item.bgColor;

    return (
      <div
        {...getItemProps({
          style: {
            backgroundColor,
            color: "#ffffff",
            borderColor: "none",
            borderStyle: "none",
            borderWidth: 0,
            borderRadius: 0,
            borderLeftWidth: itemContext.selected ? 1 : 1,
            borderRightWidth: itemContext.selected ? 1 : 1
          },
          onMouseDown: () => {
            console.log("on click", item);
            this.setState({clickedItem: item});
          }
        })}
      >
        {itemContext.useResizeHandle ? <div {...leftResizeProps} /> : null}

        <div
          style={{
            height: itemContext.dimensions.height,
            overflow: "hidden",
            paddingLeft: 3,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {itemContext.title}
        </div>

        {itemContext.useResizeHandle ? <div {...rightResizeProps} /> : null}
      </div>
    );
  };

   handleClickOpen = (itemId) => {
    //you can use this instead of itemSelected if you prefer
  };
  itemSelected = (itemId) => {
    this.setState({ openState: true, clickedItemId: itemId});
  };
  handleClose = () => {
    this.setState({ openState: false });
  };


  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd, clickedItem, clickedItemId, openState} = this.state;

    return (
      <div>
      <Timeline
        ref="timeline"
        groups={groups}
        items={items}
        sidebarContent={<div>Vehicle</div>}
        sidebarWidth={60}
        lineHeight={20}
        headerLabelGroupHeight={20}
        fullUpdate={false}
        itemsSorted
        itemTouchSendsClick={false}
        stackItems
        minZoom={7 * 24 * 60 * 60 * 1000}
        maxZoom={7 * 24 * 60 * 60 * 1000}
        itemHeightRatio={0.98}
        showCursorLine
        canMove={false}
        canResize={false}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        itemRenderer={this.itemRenderer}
        onItemClick={this.itemId}
        onItemClick={this.itemClicked}
        onItemSelect={this.itemSelected}
      />
      <Dialog ref="popup" onClose={this.handleClose} open={openState} aria-labelledby="simple-dialog-title"  >
        <DialogTitle id="simple-dialog-title">DURATION: {items[clickedItemId].duration}</DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p><strong>START:</strong> {items[clickedItemId].start}</p>
            <p><strong>coord:</strong> {items[clickedItemId].startcoord}</p>
            <p><strong>FINISH:</strong> {items[clickedItemId].finish}</p>
            <p><strong>coord:</strong> {items[clickedItemId].finishcoord}</p>
          </DialogContentText>
          </DialogContent>
      </Dialog>
      </div>
      );
  }
}
