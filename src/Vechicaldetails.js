import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export function Vechicaldetails() {
    const { id } = useParams();
    const [vehical, setVehical] = useState({});
    const history = useHistory();
    useEffect(() => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/vechicles/${id}`,
            { method: "GET" })
            .then((data) => data.json())
            .then((vl) => setVehical(vl));
    }, [id]);
    return (
        <div>
            <iframe width="100%" height="409" src={vehical.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>Model Name:{vehical.name}</p>
            <p>Rate:Rs.{vehical.rate}Lakhs</p>
            <p>Milage:{vehical.milage}</p>
            <button onClick={() => history.goBack()}>BACK</button>
        </div>
    );
}
