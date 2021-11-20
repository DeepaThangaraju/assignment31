import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useFormik } from "formik";

const formValidationSchema = yup.object(
    {
        name: yup.string().min(4).required("Why not fill the name?"),
        rate: yup.number().required("Why not fill the Rate?"),
        milage: yup.string().required("why not fill the milage?"),
        pic: yup.string().min(10).required("Why not fill the pic")
    }
);

export function Editvechical() {
    const { id } = useParams();
    const [vechical, setVechical] = useState();
    useEffect(() => {
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/vechicles/${id}`,
            {
                method: "GET"
            }
        )
            .then((data) => data.json())
            .then((vh) => setVechical(vh));
    }, [id]);
    return vechical ? <Updatedvechical vechical={vechical} /> : " ";
}
function Updatedvechical({ vechical }) {
    const sty = { width: "60%", margin: "1rem" };
    const history = useHistory();
    const styl = { color: "black" }
    // const [name, setName] = useState(vechical.name);
    // const [rate, setRate] = useState(vechical.rate);
    // const [milage, setMilage] = useState(vechical.milage);
    // const [pic, setPic] = useState(vechical.pic);
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: vechical.name,
            rate: vechical.rate,
            milage: vechical.milage,
            pic: vechical.pic,

        },
        validationSchema: formValidationSchema,
        onSubmit: (updatedvehical) => {
            console.log("onsubmit", updatedvehical);
            editvechical(updatedvehical)
        },
    });
    const editvechical = (updatedvehical) => {
        // const updatedvechical = {
        //     name,
        //     rate,
        //     milage,
        //     pic
        // };
        console.log(updatedvehical);
        fetch(`https://6166c4e813aa1d00170a6717.mockapi.io/vechicles/${vechical.id}`,
            {
                method: "PUT",
                body: JSON.stringify(updatedvehical),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => history.push("/vechicals"));
    };
    return (
        <div className="vechical">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    value={values.name}
                    style={sty}
                    label="Model Name"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name}
                    helperText={errors.name}
                    placeholder="Vechical Name" /><br />
                <TextField
                    id="rate"
                    name="rate"
                    style={sty}
                    value={values.rate}
                    label="Rate"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.rate && touched.rate}
                    helperText={errors.rate}
                    placeholder="Rate" /><br />
                <TextField
                    id="milage"
                    name="milage"
                    style={sty}
                    value={values.milage}
                    label="Milage"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.milage && touched.milage}
                    helperText={errors.milage}
                    placeholder="20.0 to 20.25 kmpl" /><br />
                <TextField
                    id="pic"
                    name="pic"
                    style={sty}
                    value={values.pic}
                    label="Car Pic Link"
                    variant="standard"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.pic && touched.pic}
                    helperText={errors.pic}
                    placeholder="Pic Link" /><br />
                <Button style={styl} variant="outlined" type="submit">SAVE</Button>
            </form>

        </div>
    );
}
