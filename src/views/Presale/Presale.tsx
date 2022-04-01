import { memo, useState, ChangeEvent, useEffect } from "react";
import "./presale.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { Paper, Grid, Box, Tab, Tabs, Zoom, Button, Container, useMediaQuery, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CardHeader from "../../components/CardHeader/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { useWeb3Context } from "src/hooks/web3Context";
import { t, Trans } from "@lingui/macro";
import TabPanel from "../../components/TabPanel";
import { PresaleCard } from "./PresaleCard";
import { FairLaunchCard } from "./FairLaunchCard";
import { isPendingTxn, txnButtonText } from "src/slices/PendingTxnsSlice";
import { error, info } from "../../slices/MessagesSlice";
import { useAppSelector } from "src/hooks";
import { maxTransactionFee } from "../../constants";
import { purchaseToken, redeem } from "../../slices/PresaleThunk";
import PresaleTimer from "../../components/RebaseTimer/PresaleTimer";
import { getBalances } from "../../slices/AccountSlice";
import { MetricCollection } from "src/components/Metric";

type InputEvent = ChangeEvent<HTMLInputElement>;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Presale = memo(() => {
  const dispatch = useDispatch();
  const { provider, address, connect } = useWeb3Context();
  const networkId = useAppSelector(state => state.network.networkId);

  const isSmallScreen = useMediaQuery("(max-width: 650px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 379px)");

  const [tazorBalance, setTazorBalance] = useState(0);
  const [tazBalance, setTazBalance] = useState(0);
  const [tazorEthBalance, setTazorETHBalance] = useState(0);
  const [tazEthBalance, setTazETHBalance] = useState(0);
  const SECONDS_TO_REFRESH = 60;
  const [secondsToRefresh, setSecondsToRefresh] = useState(SECONDS_TO_REFRESH);

  // tabs
  const [view, setView] = useState<number>(0);
  const [nativeTokenName, setNativeTokenName] = useState("");
  const changeView = (event: ChangeEvent<{}>, value: string | number): void => {
    setView(Number(value));
  };
  // --

  useEffect(() => {
    if (networkId == 1 || networkId == 3) setNativeTokenName("ETH");
    else if (networkId == 56 || networkId == 97) setNativeTokenName("BNB");
    else if (networkId == 43113 || networkId == 43114) setNativeTokenName("AVAX");

    let interval: number | NodeJS.Timer = 0;
    if (secondsToRefresh > 0) {
      interval = setInterval(() => {
        setSecondsToRefresh(secondsToRefresh => secondsToRefresh - 1);
      }, 1000);
    } else {
      dispatch(getBalances({ address, networkID: networkId, provider }));
      clearInterval(interval);
      setSecondsToRefresh(SECONDS_TO_REFRESH);
    }

    return () => clearInterval(Number(interval));
  }, [secondsToRefresh]);

  const pendingTransactions = useAppSelector(state => {
    return state.pendingTransactions;
  });

  const tazorPTotalSupply = useAppSelector(state => {
    return state.account.balances && state.account.balances.tazorPTotalSupply;
  });
  // console.log("[tz] => tazorPTotalSupply: ", tazorPTotalSupply);

  const tazorInCirculation = useAppSelector(state => {
    return state.account.balances && state.account.balances.tazorInCirculation;
  });
  // console.log("[tz] => tazorInCirculation: ", tazorInCirculation);

  const isFairLaunchFinshed = useAppSelector(state => {
    return state.account.presale && state.account.presale.isFairLaunchFinshed;
  });

  const isTazorClaimed = useAppSelector(state => {
    return state.account.presale && state.account.presale.isTazorClaimed;
  });

  const isTazClaimed = useAppSelector(state => {
    return state.account.presale && state.account.presale.isTazClaimed;
  });

  const tazorPPrice = useAppSelector(state => {
    return state.account.presale && state.account.presale.tazorPPrice;
  });

  const tazPTotalSupply = useAppSelector(state => {
    return state.account.balances && state.account.balances.tazPTotalSupply;
  });

  const tazInCirculation = useAppSelector(state => {
    return state.account.balances && state.account.balances.tazInCirculation;
  });

  const tazPPrice = useAppSelector(state => {
    return state.account.presale && state.account.presale.tazPPrice;
  });

  const currentETHBalance =
    useAppSelector(state => {
      return state.account.balances && state.account.balances.currentETHBalance;
    }) || 0;

  const tazorPurchasedBalance =
    useAppSelector(state => {
      return state.account.presale && state.account.presale.tazorPurchasedBalance;
    }) || 0;
  // console.log("[tz] => tazorPurchasedBalance: ", tazorPurchasedBalance);

  const tazPurchasedBalance =
    useAppSelector(state => {
      return state.account.presale && state.account.presale.tazPurchasedBalance;
    }) || 0;

  const pendingPayoutPresale = useAppSelector(state => {
    return state.account.presale && state.account.presale.pendingPayoutPresale;
  });

  const vestingPeriodPresale = useAppSelector(state => {
    return state.account.presale && state.account.presale.vestingPeriodPresale;
  });

  const setTazorBalanceCallback = (value: number) => {
    setTazorBalance(value);
    setTazorETHBalance(value * tazorPPrice);
  };

  const setTazBalanceCallback = (value: number) => {
    setTazBalance(value);
    setTazETHBalance(value * tazPPrice);
  };

  const setTazorETHBalanceCallback = (value: number) => {
    setTazorETHBalance(value);
    setTazorBalance(Number(Number(value / tazorPPrice).toFixed(3)));
  };

  const setTazETHBalanceCallback = (value: number) => {
    setTazETHBalance(value);
    setTazBalance(Number(Number(value / tazPPrice).toFixed(3)));
  };

  const onTazorPurchase = async (action: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(tazorEthBalance) || tazorEthBalance === 0) {
      // eslint-disable-next-line no-alert
      return dispatch(info("Please enter a value!"));
    }

    // if (ethBalance > currentETHBalance) {
    //   // setETHBalanceCallback(currentETHBalance - maxTransactionFee);
    //   return dispatch(info("You have not enough balance."));
    // }

    let amount = 0;
    if (action == "tazor") {
      amount = tazorBalance;
    } else {
      amount = tazBalance;
    }
    console.log("[tz] => ethBalance: ", tazorEthBalance);
    console.log("[tz] => amount for buy: ", amount);
    await dispatch(
      purchaseToken({
        amount: amount,
        ethBalance: tazorEthBalance,
        token: action,
        provider,
        address,
        networkID: networkId,
      }),
    );
    setTazorBalanceCallback(0);
  };

  const onTazPurchase = async (action: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(tazEthBalance) || tazEthBalance === 0) {
      // eslint-disable-next-line no-alert
      return dispatch(info("Please enter a value!"));
    }

    // if (ethBalance > currentETHBalance) {
    //   // setETHBalanceCallback(currentETHBalance - maxTransactionFee);
    //   return dispatch(info("You have not enough balance."));
    // }

    let amount = 0;
    if (action == "tazor") {
      amount = tazorBalance;
    } else {
      amount = tazBalance;
    }
    console.log("[tz] => ethBalance: ", tazEthBalance);
    console.log("[tz] => amount for buy: ", amount);
    await dispatch(
      purchaseToken({
        amount: amount,
        ethBalance: tazEthBalance,
        token: action,
        provider,
        address,
        networkID: networkId,
      }),
    );
    setTazorBalanceCallback(0);
  };

  const onClaim = async (action: string) => {
    // eslint-disable-next-line no-restricted-globals
    await dispatch(redeem({ provider, token: action, address, networkID: networkId }));
  };

  let modalButton = [];

  modalButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      Connect Wallet
    </Button>,
  );

  modalButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={isPendingTxn(pendingTransactions, "buy_tazor")}
      onClick={() => {
        onTazorPurchase("tazor");
      }}
    >
      {txnButtonText(pendingTransactions, "buy_tazor", "Submit")}
    </Button>,
  );

  modalButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={isPendingTxn(pendingTransactions, "buy_taz")}
      onClick={() => {
        onTazPurchase("taz");
      }}
    >
      {txnButtonText(pendingTransactions, "buy_taz", "Submit")}
    </Button>,
  );

  let claimButton = [];

  claimButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      Connect Wallet
    </Button>,
  );

  claimButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={isPendingTxn(pendingTransactions, "redeem_presale")}
      onClick={() => {
        onClaim("tazor");
      }}
    >
      {txnButtonText(pendingTransactions, "redeem_presale", "Claim Tazor")}
    </Button>,
  );

  claimButton.push(
    <Button
      className="stake-button"
      variant="contained"
      color="primary"
      disabled={isPendingTxn(pendingTransactions, "redeem_presale")}
      onClick={() => {
        onClaim("taz");
      }}
    >
      {txnButtonText(pendingTransactions, "redeem_presale", "Claim Taz")}
    </Button>,
  );

  return (
    <div id="treasury-dashboard-view" className={`${isSmallScreen && "smaller"} ${isVerySmallScreen && "very-small"}`}>
      <Container
        style={{
          paddingLeft: isSmallScreen || isVerySmallScreen ? "0" : "3.3rem",
          paddingRight: isSmallScreen || isVerySmallScreen ? "0" : "3.3rem",
        }}
      >
        <Zoom in={true}>
          <Paper className={`ohm-card`}>
            <Box className="card-header" paddingBottom={2}>
              <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h4" align="center">
                  <PresaleTimer />
                </Typography>
                {isFairLaunchFinshed ? (
                  <Typography align="right">
                    {isTazorClaimed ? (
                      <h3>Claimed Tazor {tazorPurchasedBalance}</h3>
                    ) : (
                      <h3>Purchased Tazor {tazorPurchasedBalance}</h3>
                    )}
                    {isTazClaimed ? (
                      <h3>Claimed Taz {tazPurchasedBalance}</h3>
                    ) : (
                      <h3>Purchased Taz {tazPurchasedBalance}</h3>
                    )}
                  </Typography>
                ) : (
                  <Typography align="right">
                    <h3>Purchased Tazor {tazorPurchasedBalance}</h3>
                    <h3>Purchased Taz {tazPurchasedBalance}</h3>
                  </Typography>
                )}
              </div>
            </Box>
            <Box className="card-header" paddingBottom={2}>
              {!isFairLaunchFinshed ? (
                <Typography variant="h3" align="center">
                  <Trans>Liquidity Generation Event</Trans>
                </Typography>
              ) : (
                <Typography variant="h3" align="center" style={{ fontWeight: 600, marginTop: 20, lineHeight: 2 }}>
                  <Trans>Liquidity Generation Event</Trans>
                  <br />
                  <Trans>Completed</Trans>
                  <br />
                  <Trans>Thanks to All Participants</Trans>
                </Typography>
              )}
            </Box>
            <TabPanel value={view} index={0}>
              {!isFairLaunchFinshed ? (
                <PresaleCard
                  title="TAZOR"
                  tokenName={nativeTokenName}
                  address={address}
                  tazorPurchasedBalance={tazorPurchasedBalance}
                  tazPurchasedBalance={tazPurchasedBalance}
                  tazorPPrice={tazorPPrice}
                  tazorPTotalSupply={tazorPTotalSupply}
                  tazorInCirculation={tazorInCirculation}
                  tazorBalance={tazorBalance}
                  tazorEthBalance={tazorEthBalance}
                  tazEthBalance={tazEthBalance}
                  modalButton={modalButton}
                  currentETHBalance={currentETHBalance}
                  setTazorBalanceCallback={setTazorBalanceCallback}
                  setTazorETHBalanceCallback={setTazorETHBalanceCallback}
                  setTazBalanceCallback={setTazBalanceCallback}
                  setTazETHBalanceCallback={setTazETHBalanceCallback}
                  tazPTotalSupply={tazPTotalSupply}
                  tazInCirculation={tazInCirculation}
                  tazBalance={tazBalance}
                />
              ) : (
                <FairLaunchCard
                  title="TAZOR"
                  address={address}
                  tokenName={nativeTokenName}
                  tazorPurchasedBalance={tazorPurchasedBalance}
                  tazPurchasedBalance={tazPurchasedBalance}
                  pendingPayoutPresale={pendingPayoutPresale}
                  vestingPeriodPresale={vestingPeriodPresale}
                  claimButton={claimButton}
                />
              )}
            </TabPanel>
          </Paper>
        </Zoom>
      </Container>
    </div>
  );
});

const queryClient = new QueryClient();

// Normally this would be done
// much higher up in our App.
export default () => (
  <QueryClientProvider client={queryClient}>
    <Presale />
  </QueryClientProvider>
);
