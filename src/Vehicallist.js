import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Display } from './Display';

export function Vehicallist() {
    const history = useHistory();
    const [vehicals, setVehicals] = useState([]);
    const getvehical = () => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/vechicles`, { method: "GET", })
            .then((data) => data.json())
            .then((uls) => setVehicals(uls));
    }
    useEffect(getvehical, []);
    const deleteuser = (id) => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/vechicles/${id}`,
            { method: "DELETE", }
        )
            .then(() => getvehical());
    }
    return (
        <div className="vehical">
            {vehicals.map(({ name, rate, milage, pic, id, deletebutton, infobutton, editbutton }, index) => <Display
                name={name}
                rate={rate}
                milage={milage}
                pic={pic}
                id={id}
                key={index}
                deletebutton={
                    <button onClick={() => { deleteuser(id) }}>
                        Delete
                    </button>
                }
                infobutton={
                    <button onClick={() => history.push("/vechicals/" + id)}>Info</button>
                }
                editbutton={
                    <button onClick={() => history.push("/vechicals/edit/" + id)}>Edit</button>
                } />

            )}
        </div>
    );
}
