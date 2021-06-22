import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(50)
    }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5}>
        <Card className={classes.root}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              FREE
            </Typography>
            <Typography variant="h3" component="h3">
              $0
            </Typography>
            /month
            <hr />
            <div>
              <CheckIcon fontSize="small" />
              Single User
              <br />
              <CheckIcon fontSize="small" />
              5GB Storage
              <br />
              <CheckIcon fontSize="small" />
              Unlimited Public Projects
              <br />
              <CheckIcon fontSize="small" />
              Community Acess
              <br />
              <Typography color="textSecondary" gutterBottom>
                <ClearIcon fontSize="small" color="disabled" />
                Unlimited Private Projcets
                <br />
                <ClearIcon fontSize="small" color="disabled" />
                Dedicated phone support <br />
                <ClearIcon fontSize="small" color="disabled" />
                Free Subdomin
                <br />
                <ClearIcon fontSize="small" color="disabled" />
                Monthly Status Reports
                <br />
              </Typography>
            </div>
            <Button
              style={{ borderRadius: 50, padding: "1px 30px" }}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Paper>
      <div>
        <Paper elevation={5}>
          <Card className={classes.root}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                PLUS
              </Typography>
              <Typography variant="h3" component="h3">
                $9
              </Typography>
              /month
              <hr />
              <div>
                <CheckIcon fontSize="small" />
                <b>5 Users</b>
                <br />
                <CheckIcon fontSize="small" />
                50GB Storage
                <br />
                <CheckIcon fontSize="small" />
                Unlimited Public Projects
                <br />
                <CheckIcon fontSize="small" />
                Community Acess
                <br />
                <CheckIcon fontSize="small" />
                Unlimited Private Projcets
                <br />
                <CheckIcon fontSize="small" />
                Dedicated phone support <br />
                <CheckIcon fontSize="small" />
                Free Subdomin
                <br />
                <Typography color="textSecondary" gutterBottom>
                  <ClearIcon fontSize="small" color="disabled" />
                  Monthly Status Reports
                  <br />
                </Typography>
              </div>
              <Button
                style={{ borderRadius: 50, padding: "0 30px" }}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Paper>
      </div>
      <div>
        <Paper elevation={5}>
          <Card className={classes.root}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                PRO
              </Typography>
              <Typography variant="h3" component="h3">
                $49
              </Typography>
              /month
              <hr />
              <div>
                <CheckIcon fontSize="small" />
                <b>Unlimited Users</b>
                <br />
                <CheckIcon fontSize="small" />
                5GB Storage
                <br />
                <CheckIcon fontSize="small" />
                Unlimited Public Projects
                <br />
                <CheckIcon fontSize="small" />
                Community Acess
                <br />
                <CheckIcon fontSize="small" />
                Unlimited Private Projcets
                <br />
                <CheckIcon fontSize="small" />
                Dedicated phone support <br />
                <CheckIcon fontSize="small" />
                <b>Unlimited</b> Free Subdomin
                <br />
                <CheckIcon fontSize="small" />
                Monthly Status Reports
                <br />
              </div>
              <Button
                style={{ borderRadius: 50, padding: "0 30px" }}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Paper>
      </div>
    </div>
  );
}
