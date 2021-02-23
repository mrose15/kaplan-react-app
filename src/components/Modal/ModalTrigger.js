import React from "react";
import Button from "../Button/Button";

export default class ModalTrigger extends React.Component {
  render() {
    return (
      <Button
        variant="primary"
        size={"lg"}
        ref={this.props.buttonRef}
        handleChange={this.props.showModal}
      >
        {this.props.triggerText}
      </Button>
    );
  }
}
