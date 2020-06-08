import React, { Component } from 'react';
// import Modal from 'react-modal';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSignOutAlt,faSmile} from '@fortawesome/free-solid-svg-icons'

class Headers extends Component {

    // constructor () {
    //     super();
    //     this.state = {
    //       showModal: false
    //     };
      
    //   this.handleOpenModal = this.handleOpenModal.bind(this);
    //   this.handleCloseModal = this.handleCloseModal.bind(this);
    // }
    
    // handleOpenModal () {
    //   this.setState({ showModal: true });
    // }
    
    // handleCloseModal () {
    //   this.setState({ showModal: false });
    // }
    
    render() {
        return (
            <div className='headers'>
                <div> Netcentric Magic Squares </div>
                {/* <span className="signout">
                <FontAwesomeIcon icon={faSignOutAlt} onClick={this.handleOpenModal}/>
                </span> */}
                {/* <Modal 
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             ariaHideApp={false}
             className="Modal"
             overlayClassName="Overlay"
            //  onRequestClose={this.handleCloseModal}
          >
            <div className='modalText'>
                <h2>Game Over</h2>
                <h3>Thank you for Participating    
                <FontAwesomeIcon icon={faSmile}/>
                </h3>
                <button className="closeModal" onClick={this.handleCloseModal}>
                    Close
                </button>
            </div>
            
          </Modal> */}
            </div>
        );
    }

};

export default Headers;
