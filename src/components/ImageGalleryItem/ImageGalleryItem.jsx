import PropTypes from 'prop-types';
import { ImageGalleryItem, Image } from "components/ImageGalleryItem/ImageGalleryItem.styled"

export const GalleryItem = ({ imageData, modalImage, toggleModal }) => {

  return (
    <ImageGalleryItem >
      <Image
        src={imageData.webformatURL}
        alt={imageData.tags}
        onClick={() => { toggleModal(); modalImage()}}
        />
    </ImageGalleryItem>
  )
}

GalleryItem.propTypes = {
  imageData: PropTypes.object,
  modalImage: PropTypes.func,
  toggleModal: PropTypes.func,
}