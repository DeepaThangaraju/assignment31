
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';
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
export function Addvehical() {
    const sty = { width: "60%", margin: "1rem" }
    const styl = { color: "black" }
    const history = useHistory();
    // const [name, setName] = useState();
    // const [rate, setRate] = useState();
    // const [milage, setMilage] = useState();
    // const [pic, setPic] = useState();
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            rate: "",
            milage: "",
            pic: "",

        },
        validationSchema: formValidationSchema,
        onSubmit: (newvehical) => {
            console.log("onsubmit", newvehical);
            addvechical(newvehical)
        },
    });
    const addvechical = (newvehical) => {
        // const newvechical = {
        //     name,
        //     rate,
        //     milage,
        //     pic
        // };
        console.log(newvehical);
        fetch("https://6166c4e813aa1d00170a6717.mockapi.io/vechicles",
            {
                method: "POST",
                body: JSON.stringify(newvehical),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(() => history.push("/vechical"));
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
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.name && touched.name}
                    helperText={errors.name}
                    placeholder="Vechical Name" /><br />
                <TextField
                    id="rate"
                    name="rate"
                    style={sty}

                    label="Rate"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.rate && touched.rate}
                    helperText={errors.rate}
                    placeholder="Rate" /><br />
                <TextField
                    id="milage"
                    name="milage"
                    style={sty}

                    label="Milage"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.milage && touched.milage}
                    helperText={errors.milage}
                    placeholder="20.0 to 20.25 kmpl" /><br />
                <TextField
                    id="pic"
                    name="pic"
                    style={sty}

                    label="Car Pic Link"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.pic && touched.pic}
                    helperText={errors.pic}
                    placeholder="Pic Link" /><br />
                <Button style={styl} variant="outlined" type="submit">ADD</Button>
            </form>

        </div>
    );
}
