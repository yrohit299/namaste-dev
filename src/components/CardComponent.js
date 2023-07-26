import { Link } from 'react-router-dom';
import { CARD_LOGO_URL } from '../utils/constants';

const CardComponent = (props) => {
  const { data } = props;
  const { id } = data
  // console.log(data);
  return (
    <Link to={`restaurants/${id}`}>
      <div className='w-64 p-2 mb-2 ml-2 border rounded-md' style={{ height: 'calc(100% - 10px)' }}>
        {data.promoted && <label className='absolute p-2 -mt-2 -ml-2 text-sm text-white bg-black rounded-sm'>Promoted</label>}
        <div className='res-logo-container'>
          <img src={CARD_LOGO_URL + data.cloudinaryImageId} />
        </div>
        <div className='res-content-container'>
          <h3 className='pt-2 text-sm font-medium'>{data?.name}</h3>
          <p title={data?.cuisines.join(', ')} className='pt-2 overflow-hidden text-sm font-light text-gray-400 whitespace-nowrap text-ellipsis'>{data?.cuisines.join(', ')}</p>
          <div className='flex items-center justify-between'>
            <p className='text-sm'>{data?.avgRating ? data?.avgRating + ' stars' : ''}</p>
            <p className='mt-2 mb-2 text-sm'>{data?.slaString}</p>
            <p className='text-sm'>{data.costForTwo}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const withPromotedLabel = () => {
  // TODO implement promotions and show label accordingly here
  return (props) => {
    <div>
      <label>Promoted</label>
      <CardComponent />
    </div>
  }
}

export default CardComponent;
