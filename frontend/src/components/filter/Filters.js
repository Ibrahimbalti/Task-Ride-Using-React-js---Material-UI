
import { useState } from 'react';
import { useStore } from '../../context/Store';
import { DropMenu } from './DropMenu';
import styles from './Filters.module.css';
import FilterListIcon from '@material-ui/icons/FilterList';


export const Filters = () => {
    const {
        btn_filter,
        fltr_cm,
        filter_relative,
        links,
        active,
        icon,
    } = styles;

    const [showMenue, setShowMenu] = useState(false);
    const { status, handleStatus, selectUpcomingRides, selectPastRides } = useStore()


    const nearestRide = status === "" ? active : null
    const upcoming = status === "upcoming" ? active : null
    const past = status === "past" ? active : null


    const upcomingCount = selectUpcomingRides().length;
    const pastCount = selectPastRides().length;


    return (
        <div className='--container'>
            <div className={fltr_cm}>
                <ul className={links} >
                    <li
                        onClick={() => handleStatus("")}
                        className={nearestRide}>
                        Nearest rides
                    </li>

                    <li
                        onClick={() => handleStatus("upcoming")}
                        className={upcoming}>
                        <span>Upcoming rides {`(${upcomingCount})`}</span>
                    </li>

                    <li
                        onClick={() => handleStatus("past")}
                        className={past}>
                        <span>Past rides {`(${pastCount})`}</span>
                    </li>
                </ul>

                <div className={filter_relative}>
                    <div
                        onClick={() => setShowMenu(prev => !prev)}
                        className={btn_filter}
                        role="button"
                        style={{ marginRight: '50px' }}
                    >
                        <span className={icon}>
                            <FilterListIcon />
                        </span>
                        Filters
                    </div>

                    {
                        showMenue ?
                            <DropMenu setMenu={setShowMenu} /> : <></>
                    }
                </div>
            </div>

        </div>
    );
};