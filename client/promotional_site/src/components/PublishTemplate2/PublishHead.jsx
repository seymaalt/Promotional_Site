
import Grid from "@mui/material/Grid";
import { useContext} from "react";
import TextContext from "../../context/TextContext";
import './style/template2.css'




export default function Head() {
  const { discription, setDiscription } = useContext(TextContext);

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
          <div className="temp2Header">
            <h1 className="headerHead">
              Bu Uygulama Hakkında
            </h1>
          </div>
          <div className="headDisDiv">
              <div >
                <div
                  className="headDis "
                  style={{
                    textAlign: `${designHeadDiscriprion.textAlign}`,
                    fontSize: `${designHeadDiscriprion.fontSize}px`,
                    color: `${designHeadDiscriprion.color}`,
                    fontFamily: designHeadDiscriprion.font,
                  }}
                >
                  {discription == null ? responseData.description : discription}
                </div>
              </div>
          </div>
          <div>
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
        </Grid>
        <Grid item xs={5}>
          <div
            className="right"
          >
            <div
              className="logoo"
            >
              <img className="temp2Logo" src={responseData.logo} alt="Logo" />
            </div>
            <div className="temp2ImageDiv">
              <img
                src={responseData.images[0]}
                className="temp2Image0"
                alt="Image"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}