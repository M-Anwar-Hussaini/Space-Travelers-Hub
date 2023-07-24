import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocket from './Rocket';
import { getData } from '../redux/rockets/rocketSlice';

export default function RocketContainer() {
  const { rockets } = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <section>
      <h2>Rockets</h2>
      <div className="d-flex flex-column gap-3">
        {rockets.map((rocket) => (
          <Rocket
            image={rocket.image}
            description={rocket.description}
            name={rocket.name}
            key={rocket.id}
            id={rocket.id}
            isReserved={rocket.isReserved}
          />
        ))}
      </div>
    </section>
  );
}
