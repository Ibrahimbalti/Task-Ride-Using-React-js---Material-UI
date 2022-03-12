
import { useStore } from '../../context/Store';
import RidesItems from './RidesItems';
import { NoResults } from '../NoResults/NoResults';
import  { sortByNearest } from '../../utils/Distances';

export const Rides = () => {
    const { user, getRides } = useStore();
    const ride = sortByNearest( getRides(), user.station_code )
    
    return (
        <div>
            { ride.length ? ride.map( ( r, i ) => (
                <RidesItems key = { i } station_code = { user.station_code } { ...r } /> )) :
                <NoResults />
            }
        </div>
    );
};