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
          className="modal__cover"
          onClick={this.props.onClickOutside}
          onKeyDown={this.props.onKeyDown}
        >
          <div className="modal__area" ref={this.props.modalRef}>
            <div className="modal__body">{this.props.content}</div>
            <div className="modal__footer align-right">
              <Button
                variant="secondary"
                size={"lg"}
                ref={this.props.buttonRef}
                aria-label="Close Modal"
                aria-labelledby="close-modal"
                handleChange={this.props.closeModal}
              >
                <span id="close-modal">Cancel</span>
              </Button>
              <Button
                variant="primary"
                size={"lg"}
                aria-label="Submit Book"
                aria-labelledby="submit-book"
              >
                <span id="submit-book">Submit</span>
              </Button>
            </div>
          </div>
        </aside>
      </FocusTrap>,
      document.body
    );
  }
}

export default ModalContent;
