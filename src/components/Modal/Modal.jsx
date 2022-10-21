import PropTypes from 'prop-types';
import React, { Component } from "react";
import { createPortal } from "react-dom";
import { ModWindow, Overlay, Image } from "./Modal.styled";
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() { 
    window.addEventListener('keydown', this.handleKeyDown)
   }
  
  componentWillUnmount() { 
    window.removeEventListener('keydown', this.handleKeyDown )
  }
  
  handleKeyDown = event => {
    if (event.code === 'Escape') {
        this.props.onClose();
      }
  }

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  }
  
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick} >
        <ModWindow >
          <Image
            src={this.props.modalImage.img}
            alt={this.props.modalImage.tags}
            key={this.props.modalImage.id}
            loading="lazy"
          />
        </ModWindow>
      </Overlay>, modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  modalImage: PropTypes.object,
}




