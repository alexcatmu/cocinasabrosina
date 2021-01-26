import PropTypes from "prop-types"
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  withStyles,
  Grid,
  SwipeableDrawer,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import Link from "@material-ui/core/Link"
import { Component } from "react"
// import {BrowserRouter} from "react-router-dom";
// import { Routes } from '../routes'

const styleSheet = (theme) => ({
  list: {
    width: 200,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },
  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
  toolbar: theme.mixins.toolbar,

  myContentGrid: { width: "calc(100% - 10px)", margin: "auto" },
})

class MyNavbar extends Component {
  constructor(props) {
    super(props)
    this.state = { drawerActivate: false, drawer: false, searcher: false }
    this.createDrawer = this.createDrawer.bind(this)
    this.destroyDrawer = this.destroyDrawer.bind(this)
  }

  componentDidMount() {
    if (window.innerWidth <= 600) {
      this.setState({ drawerActivate: true })
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        this.setState({ drawerActivate: true })
      } else {
        this.setState({ drawerActivate: false })
      }
    })
  }

  // Small Screens
  createDrawer() {
    return (
      <>
        <AppBar>
          <Toolbar style={{ background: "#FF6600" }}>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <MenuIcon
                className={this.props.classes.sideBarIcon}
                onClick={() => {
                  this.setState({ drawer: true })
                }}
              />

              <Typography color="inherit" variant="h6">
                {/* <img */}
                {/*  src={"/favicon.ico"} */}
                {/*  alt="Logo" */}
                {/*  width={"80px"} */}
                {/*  height={"80px"} */}
                {/* /> */}
              </Typography>
              <SearchIcon
                className={this.props.classes.sideBarIcon}
                onClick={() => {
                  this.setState({ searcher: true })
                }}
              />
            </Grid>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.drawer}
          onClose={() => {
            this.setState({ drawer: false })
          }}
          onOpen={() => {
            this.setState({ drawer: true })
          }}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              this.setState({ drawer: false })
            }}
            onKeyDown={() => {
              this.setState({ drawer: false })
            }}
          >
            <List className={this.props.classes.list}>
              <ListItem key={1} divider style={{ justifyContent: "center" }}>
                <img
                  src={"/favicon.ico"}
                  alt="Logo"
                  width={"100px"}
                  height={"100px"}
                />
              </ListItem>
              <ListItem key={2} button style={{ justifyContent: "center" }}>
                <Link color="inherit" href={"/"}>
                  <img
                    src={"/instagram.png"}
                    alt="Instagram"
                    width={"50px"}
                    height={"50px"}
                  />
                </Link>
              </ListItem>
              <ListItem key={3} button style={{ justifyContent: "center" }}>
                <Link color="inherit" href={"/"}>
                  <img
                    src={"/youtube.png"}
                    alt="Instagram"
                    width={"85px"}
                    height={"53px"}
                  />
                </Link>
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </>
    )
  }

  // Larger Screens
  destroyDrawer() {
    const { classes } = this.props
    return (
      <>
        <AppBar>
          <Toolbar style={{ background: "#FF6600" }}>
            <Typography
              variant="h6"
              style={{ flexGrow: 1 }}
              color="textPrimary"
            >
              <Link
                style={{ textDecoration: "none" }}
                color="textPrimary"
                href={"/"}
              >
                Hacker News
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.padding}
              color="inherit"
            >
              <Link color="textPrimary" href={"/"}>
                New
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.padding}
              color="inherit"
            >
              <Link color="textPrimary" href={"/"}>
                Threads
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.padding}
              color="inherit"
            >
              <Link color="textPrimary" href={"/"}>
                Ask
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.padding}
              color="inherit"
            >
              <Link color="textPrimary" href={"/"}>
                Submit
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.padding}
              color="inherit"
            >
              <Link color="textPrimary" href={"/"}>
                User
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.padding}
              color="inherit"
            >
              <Link color="textPrimary" href={"/"}>
                Manage API key
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    )
  }

  render() {
    return (
      <>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
        <div className={this.props.classes.toolbar} />
        <div className={this.props.classes.myContentGrid}>
          {/* <BrowserRouter> */}
          {/*    <Routes/> */}
          {/* </BrowserRouter> */}
        </div>
      </>
    )
  }
}

MyNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styleSheet)(MyNavbar)
