import React from "react";
import { Grid, Card, Typography, CardContent, CardMedia, Badge } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles'
import { calcDistance } from '../../utils/Distances'



const useStyles = makeStyles({
    grideContainer: {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '10px',
    },

    TypographyStyle: {
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '25px'
    }
});
export default function RidesItems(props) {
    const {
        id,
        origin_station_code,
        station_path,
        date,
        state,
        city,
        station_code,

    } = props;

    const d = new Date(date * 1000);
    const classes = useStyles()

    const _date = d.toDateString().split(" ");
    const _time = d.toTimeString().substring(0, 5)
    const txtDate = `${_date[2]}th ${_date[1]} ${_date[3]} ${_time}`;

    const distance = calcDistance(station_path, station_code);

    return (

        <Grid container className={classes.grideContainer} justifyContent='center' spacing={1} >

            <Grid item xs={12} sm={12} lg={12} >
                <Card style={{ display: 'flex', margin: '0', padding: '0', backgroundColor: '#171717', color: 'white' }}>


                    <CardMedia

                        style={{ height: '110px', width: '200px', marginTop: '23px', marginLeft: '20px', marginBottom: '0px', flex: '2' }}
                        image="assets/map/map.png"
                        title="Map"

                    />
                    <CardContent style={{ flex: '8' }} >
                        <Typography variant="body2" component="p" className={classes.TypographyStyle} >
                            Ride Id :

                            {id}

                        </Typography >
                        <Typography variant="body2" component="p" className={classes.TypographyStyle}>
                            Origin Station :
                            <span>
                                {origin_station_code}
                            </span>
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.TypographyStyle} >
                            station_path :
                            <span>
                                {`[${station_path.join(", ")}]`}
                            </span>
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.TypographyStyle}>
                            Date:
                            <span>
                                {txtDate}
                            </span>
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.TypographyStyle}>
                            Distance:
                            <span>
                                {distance}
                            </span>
                        </Typography>
                    </CardContent>

                    <Badge color="secondary" variant="standard" style={{ flex: '1', margin: '10px', display: 'flex', justifyContent: 'space-around' }}  >

                        <Typography className={classes.TypographyStyle}>City <br />
                            <span>{city}</span>  </Typography>

                    </Badge>

                    <Badge color="secondary" variant="standard" style={{ flex: '1', margin: '10px', display: 'flex', justifyContent: 'space-around' }}  >

                        <Typography className={classes.TypographyStyle}>State <br />{state}</Typography>

                    </Badge>

                </Card>
            </Grid>
        </Grid>

    );
}
