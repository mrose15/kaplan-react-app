import React, { Component } from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import Button from "../Button/Button";

export class ModalContent extends Component {
  render() {
    return ReactDOM.createPortal(
      <FocusTrap>
        <aside
          tag="aside"
          role="dialog"
          tabIndex="-1"
          aria-modal="true"
          className="modal-cover"
          onClick={this.props.onClickOutside}
          onKeyDown={this.props.onKeyDown}
        >
          <div className="modal-area" ref={this.props.modalRef}>
            <Button
              variant="primary"
              size={"lg"}
              ref={this.props.buttonRef}
              aria-label="Close Modal"
              aria-labelledby="close-modal"
              handleChange={this.props.closeModal}
            >
              <span id="close-modal" className="hidden">
                Close
              </span>
              X
            </Button>
            <div className="modal-body">{this.props.content}</div>
          </div>
          <div className="modal modal__bg"></div>
        </aside>
      </FocusTrap>,
      document.body
    );
  }
}

export default ModalContent;
