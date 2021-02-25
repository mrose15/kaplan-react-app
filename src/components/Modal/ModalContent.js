import React, { Component } from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import Button from "../Button/Button";

export class ModalContent extends Component {
  documentData;
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      title: "",
      author: "",
      publisher: "",
      publishdate: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //on form submit
  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("document", JSON.stringify(this.state));
  }

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
                size="lg"
                position="right"
                ref={this.props.buttonRef}
                aria-label="Close Modal"
                aria-labelledby="close-modal"
                handleChange={this.props.closeModal}
              >
                <span id="close-modal">Cancel</span>
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
