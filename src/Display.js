import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export function Display({ name, rate, milage, pic, id, deletebutton, infobutton, editbutton }) {

    return (
        <div className="single">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={pic}
                    alt={name} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name} {infobutton}
                    </Typography>
                    <p>Model:{name}</p>
                    <p>Rate:Rs.{rate}Lakhs</p>
                    <p>Milage:{milage}</p>
                    <p><span className="btn">{deletebutton}</span>
                        <span className="btn">{editbutton}</span></p>
                </CardContent>
            </Card>
        </div>
    );
}
