import {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

const ImageCard = () => {
  const [image, setImage] = useState([]);
  const {id} = useParams();

  const loadImage = () => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then(response => response.ok ? response.json() : Promise.reject('failed to load an image'))
      .then(data => setImage(data))
  }

  useEffect(() => {
    loadImage()
  });


  return (
      <div className={'image-card'}>
        <img src={image?.download_url} alt=""/>
        <div className={'details'}>
          <h2>Details</h2>
          <div className={'image-info'}>
            <div>
              <span>Resolution</span>
              <p>{image?.width} * {image?.height}</p>
            </div>
            <div>
              <span>Author</span>
              <p>{image?.author}</p>
            </div>
            <div>
              <span>Id</span>
              <p>{image?.id}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ImageCard;
