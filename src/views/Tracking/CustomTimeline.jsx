import React, { Component } from "react";
import moment from "moment";

import Timeline from "react-calendar-timeline";

import generateFakeData from "../../generate-fake-data";

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
      defaultTimeEnd
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


  render() {
    const { groups, items, defaultTimeStart, defaultTimeEnd, clickedItem } = this.state;

    return (
      <Timeline
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
        clickedItem={this.clickedItem}
      />
      );
  }
}
