import {
  Paper,
  Button,
  Box,
  Grid,
  FormControl,
  OutlinedInput,
  InputAdornment,
  LinearProgress,
} from "@material-ui/core";
import InfoTooltipMulti from "../../components/InfoTooltip/InfoTooltipMulti";
import TabPanel from "../../components/TabPanel";
import CardHeader from "../../components/CardHeader/CardHeader";

export function PresaleCard({
  title,
  address,
  tokenName,
  tazorPPrice,
  tazorPurchasedBalance,
  tazorPTotalSupply,
  tazorInCirculation,
  tazorBalance,
  tazorEthBalance,
  tazEthBalance,
  setTazorBalanceCallback,
  setTazBalanceCallback,
  setTazorETHBalanceCallback,
  setTazETHBalanceCallback,
  modalButton,
  currentETHBalance,
  tazPTotalSupply,
  tazInCirculation,
  tazBalance,
  tazPurchasedBalance,
}) {
  console.log(currentETHBalance);
  return (
    // <Paper className="ohm-card">
    <Box display="flex" flexDirection="column">
      <Grid container direction="row">
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ paddingRight: "10px" }}>
          <Grid>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <h1>Tazor $100 Per Token</h1>
                  <h2 style={{ margin: "0px", fontWeight: "400", marginBottom: "20px" }}>+5% bonus</h2>
                </div>
              </div>
            </FormControl>
          </Grid>
          <Grid alignItems="flex-end">
            <FormControl variant="outlined" color="primary" fullWidth>
              <div align="right">
                <h3 style={{ margin: "0px", fontWeight: "700", margin: "10px" }}>
                  Balance: {currentETHBalance} {tokenName}
                </h3>
              </div>
              <OutlinedInput
                type="number"
                placeholder="0"
                value={tazorEthBalance ? tazorEthBalance : ""}
                onChange={e => setTazorETHBalanceCallback(e.target.value)}
                labelWidth={0}
              />
            </FormControl>
          </Grid>
          <Grid container alignItems="flex-end" style={{ marginTop: "40px" }}>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div>
                <h3 style={{ margin: "0px", fontWeight: "700", margin: "10px" }}>
                  You will receive {tazorBalance} TAZOR + {Number(tazorBalance / 20).toFixed(2)} bonus.
                </h3>
              </div>
              <OutlinedInput
                id=""
                placeholder="0"
                value={tazorBalance ? tazorBalance : ""}
                onChange={e => setTazorBalanceCallback(e.target.value)}
                labelWidth={0}
              />
            </FormControl>
          </Grid>
          <Grid container alignItems="flex-end" style={{ marginTop: "30px" }}>
            <Grid item xs={12} sm={4} md={4} lg={4} />
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <FormControl variant="outlined" color="primary" style={{ display: "flex" }}>
                {address ? modalButton[1] : modalButton[0]}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} />
          </Grid>
          <Grid container alignItems="flex-end" style={{ marginTop: "40px", padding: "30px" }}>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ marginBottom: "5px" }}>0%</h3>
                <h3 style={{ marginBottom: "5px" }}>100%</h3>
              </div>
              <LinearProgress
                variant="determinate"
                value={((tazorPTotalSupply - tazorInCirculation) * 100) / tazorPTotalSupply}
              />
            </FormControl>
          </Grid>
          <Grid container>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div align="center">
                <h2>TAZOR Supply : {tazorPTotalSupply}</h2>
                <h2>Sold Tazor : {Number(tazorPTotalSupply - tazorInCirculation).toFixed(3)}</h2>
              </div>
            </FormControl>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} sm={1} md={1} lg={1}></Grid> */}
        {/* ===================   DIVIDER     ===============*/}
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ paddingLeft: "10px" }}>
          <Grid container>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <h1>Taz $1.00 Per Token</h1>
                  <h2 style={{ margin: "0px", fontWeight: "400", marginBottom: "20px" }}>+5% bonus</h2>
                </div>
              </div>
            </FormControl>
          </Grid>
          <Grid container alignItems="flex-end">
            <FormControl variant="outlined" color="primary" fullWidth>
              <div align="right">
                <h3 style={{ margin: "0px", fontWeight: "700", margin: "10px" }}>
                  Balance: {currentETHBalance} {tokenName}
                </h3>
              </div>
              <OutlinedInput
                type="number"
                placeholder="0"
                value={tazEthBalance ? tazEthBalance : ""}
                onChange={e => setTazETHBalanceCallback(e.target.value)}
                labelWidth={0}
              />
            </FormControl>
          </Grid>
          <Grid container alignItems="flex-end" style={{ marginTop: "40px" }}>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div>
                <h3 style={{ margin: "0px", fontWeight: "700", margin: "10px" }}>
                  You will receive {tazBalance} TAZ + {Number(tazBalance / 20).toFixed(2)} bonus.
                </h3>
              </div>
              <OutlinedInput
                type="number"
                id=""
                placeholder="0"
                value={tazBalance ? tazBalance : ""}
                onChange={e => setTazBalanceCallback(e.target.value)}
                labelWidth={0}
              />
            </FormControl>
          </Grid>
          <Grid container alignItems="flex-end" style={{ marginTop: "30px", display: "flex" }}>
            <Grid item xs={12} sm={4} md={4} lg={4} />
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <FormControl variant="outlined" color="primary" style={{ display: "flex" }}>
                {address ? modalButton[2] : modalButton[0]}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} />
          </Grid>
          <Grid container alignItems="flex-end" style={{ marginTop: "40px", padding: "30px" }}>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                <h3 style={{ marginBottom: "5px" }}>0%</h3>
                <h3 style={{ marginBottom: "5px" }}>100%</h3>
              </div>
              <LinearProgress
                variant="determinate"
                value={((tazPTotalSupply - tazInCirculation) * 100) / tazPTotalSupply}
              />
            </FormControl>
          </Grid>
          <Grid container>
            <FormControl variant="outlined" color="primary" fullWidth>
              <div align="center">
                <h2>TAZ Supply : {tazPTotalSupply}</h2>
                <h2>Sold Taz : {Number(tazPTotalSupply - tazInCirculation).toFixed(3)}</h2>
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
