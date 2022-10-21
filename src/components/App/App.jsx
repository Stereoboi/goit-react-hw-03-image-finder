import { Component } from "react";
import {fetchImage} from '../api/api.js' 
import { Searchbar } from "components/Searchbar/Searchbar.jsx";
import { Gallery } from "components/ImageGallery/ImageGallery.jsx";
import { LoadMoreBtn } from "components/Button/Button.jsx";
import { Wrapper } from "./App.styled.js";
import { Modal } from "components/Modal/Modal.jsx";
import { Loader } from "components/Loader/Loade.jsx";

import { Notification, Toast } from "components/NotificationToastify/Notification.jsx";

export class App extends Component {
  state = {
    images: [],
    page: 1,
    searchQuery: '',
    status: "idle",
    showModal: false,
    modalImage: null,
    loadMore: true,
  }

  

  async componentDidUpdate(_, prevState) {
    
    const prevQuery = prevState.searchQuery;
    const newQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const newPage = this.state.page

    if (prevQuery !== newQuery || prevPage !== newPage) {
      
      this.setState({ status: "pending" });
      try {
        const result = await fetchImage(newQuery, newPage);
        console.log(result);

        if (!result.length) {
          throw new Error();
        }

        if (result.length < 12) {
          this.setState({ loadMore: false });
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...result],
          status: "resolved"
        }))

      //  console.log(this.state.images); 
        
      } catch (err) {
        this.setState({ status: "rejected" });
        Notification();
      }

    }
    
  }


  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };


  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      
    }))

    
  }

  FindModalImage = (id, img, tags) => {
    this.setState({ modalImage: { id: id, img: img, tags: tags } });
  };

  formSubmitHandler = data => {
    // console.log(data.searchQuery);
    this.setState({
      searchQuery: data.inputParam,
      page: 1,
      images: [],
      status: "idle"
    })
  }

  render() {
    const { images, modalImage,showModal, status, loadMore } = this.state;
    
      if (status === 'idle') {
        return  <Searchbar onSubmit={this.formSubmitHandler} />
                  
                
      }
      
      if (status === 'pending') {
        return  <Wrapper>
                <Searchbar onSubmit={this.formSubmitHandler} />
                <Gallery
                    images={images}
                    modalImage={this.FindModalImage}
                    toggleModal={this.toggleModal}
                />
                <Loader/>
                </Wrapper>
      }
      if (status === 'resolved') {
        return  <Wrapper>
                  <Searchbar onSubmit={this.formSubmitHandler} />
                  <Gallery
                    images={images}
                    modalImage={this.FindModalImage}
                    toggleModal={this.toggleModal}
                  />
                  {showModal && (
                    <Modal onClose={ this.toggleModal} modalImage={modalImage} />
                  )}
                  
                  {loadMore && <LoadMoreBtn loadMore={this.loadMore} />}
                  
                </Wrapper>     
      }
      
      if (status === 'rejected') {
        return  <Wrapper>
                  <Searchbar onSubmit={this.formSubmitHandler} />
                  <Toast/>
                </Wrapper>  
      }
  }
}


