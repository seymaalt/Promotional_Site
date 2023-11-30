import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Head({ responseData, changedData }) {
  const url = responseData.url;
  var appStoreLink = "#";
  var googleStoreLink = "#";

  url.split("/", 5)[2] == "play.google.com"
    ? (googleStoreLink = url)
    : (appStoreLink = url);

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <div className="left">
            <div className="header">
              <h1 className="headerHead" style={{ color: "black" }}>
                {" "}
                Bu Uygulama Hakkında
              </h1>
            </div>
            <div className="headDisDiv">
              <div
                className="headDis "
                style={{
                  padding: "40px",
                  maxwidth: "717px",
                  maxHeight: "580px",
                  marginTop: "20px",
                }}
              >
                {responseData.description}
              </div>
            </div>
            <div className="buton">
              <div className="downloadbutton">
                <Grid container>
                  <Grid
                    item
                    xs={6}
                    className="grid"
                    style={{ marginBottom: 0 }}
                  >
                    <a href={appStoreLink}>
                      <img
                        src="https://i.ibb.co/T1kqnWp/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png"
                        alt="Logo"
                      />
                    </a>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    className="grid"
                    style={{ marginBottom: 0 }}
                  >
                    <a href={googleStoreLink}>
                      <img
                        src="https://i.ibb.co/xMJKQ5j/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli-1.png"
                        alt="Logo"
                      />
                    </a>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={5}>
          <div
            className="right"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="logoo"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <img className="logo" src={responseData.logo} alt="Logo" />
            </div>
            <div className="Image">
              <img
                src={responseData.images[0]}
                style={{
                  width: "486px",
                  height: "783px",
                  borderRadius: "16px",

                }}
                alt="Image"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
