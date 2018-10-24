import React, { Component } from "react";
import moment from "moment";

import Timeline from "react-calendar-timeline";

import generateFakeData from "../../generate-fake-data";

export default class App extends Component {
  constructor(props) {
    super(props);

    const { groups, items } = generateFakeData();
    const defaultTimeStart = moment()
      .startOf("day")
      .toDate();
    const defaultTimeEnd = moment()
      .startOf("day")
      .add(1, "day")
      .toDate();

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
            console.log("on item click", item);
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
    const { groups, items, defaultTimeStart, defaultTimeEnd } = this.state;

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
        itemHeightRatio={0.98}
        showCursorLine
        canMove={true}
        canResize={true}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
        itemRenderer={this.itemRenderer}
      />
    );
  }
}
