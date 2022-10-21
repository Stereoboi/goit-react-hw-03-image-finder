import PropTypes from 'prop-types';
import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGallery } from "./ImageGallery.styled"

export const Gallery = ({ images, modalImage, toggleModal  }) => {
  return (<ImageGallery>
          {images.map(image => (
            <GalleryItem
              key={image.id}
              
              imageData={image}
              toggleModal={() => toggleModal()}
              modalImage={() => modalImage(image.id, image.largeImageURL, image.tags) }
            /> 
          ))}
          </ImageGallery>
  )
}

Gallery.propTypes = {
  images: PropTypes.array,
  modalImage: PropTypes.func,
  toggleModal: PropTypes.func,
}