import React from "react";
import ProductAttachment from "./ProductAttachment";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SubmitProduct from "./SubmitProduct";
import StatusInfo from "./StatusInfo";

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  display: "flex",
  padding: grid,
  overflow: "auto",
  marginTop: "10px"
});

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const reorderAttachment = (list, startIndex, endIndex) => {
  const results = Array.from(list);
  const [removed] = results.splice(startIndex, 1);
  results.splice(endIndex, 0, removed);
  results.map((result, index) => {
    result.seq = index;
    return result;
  });

  return results;
};

const OverallProduct = props => {
  let renderInfo = false;
  if (
    !props.statusFilter ||
    "" === props.statusFilter ||
    "pending" === props.statusFilter
  ) {
    renderInfo = false;
  } else if (
    "approved" === props.statusFilter ||
    "rejected" === props.statusFilter
  ) {
    renderInfo = true;
  }

  const onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    // nothing happened if source and destination indexes are the same
    if (result.source.index === result.destination.index) {
      return;
    }

    const newAttachment = reorderAttachment(
      props.product.productAttachment,
      result.source.index,
      result.destination.index
    );

    props.product.productAttachment = newAttachment;
    props.reorderHandler(props.productIndex, props.product);
  };

  const submitHandler = (status, reason) => {
    props.product.status = status;
    props.product.reason = reason;
    props.updateStatus(props.product);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId={`droppable-${props.product.id}`}
          direction="horizontal"
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {props.product.productAttachment.map((attachment, index) => (
                <Draggable
                  key={attachment.id}
                  draggableId={attachment.id}
                  index={index}
                  isDragDisabled={renderInfo}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <ProductAttachment
                        key={attachment.id}
                        url={attachment.url}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              {renderInfo ? (
                <StatusInfo
                  status={props.product.status}
                  rejectReason={props.product.reason}
                />
              ) : (
                <SubmitProduct submitHandler={submitHandler} />
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default OverallProduct;
