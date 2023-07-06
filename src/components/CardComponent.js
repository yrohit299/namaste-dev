import {CARD_LOGO_URL} from '../utils/constants';

const CardComponent = (props) => {
    const { data } = props;
    return (
      <div className='card-container'>
        <div className='res-logo-container'>
          <img
            src={
              CARD_LOGO_URL +
              data.cloudinaryImageId
            }
          />
        </div>
        <div className='res-content-container'>
          <h3>{data?.name}</h3>
          <p className='card-desc'>{data?.cuisines.join(', ')}</p>
          <div className='card-footer'>
            <p>{data?.avgRating ? data?.avgRating + ' stars' : ''}</p>
            <p>{data?.slaString}</p>
            <p>Rs. {data.costForTwo / 100} for 2</p>
          </div>
        </div>
      </div>
    );
  };

  export default CardComponent;