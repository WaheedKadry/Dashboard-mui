import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Line from "../../Pages/LineChart/Line";
import React from "react";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Transactions } from "./Data";

function Row2() {
  let theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ flexWrap: "wrap", mt: 2, gap: 1 }}>
      <Paper
        sx={{
          Width: { xs: "100%", sm: "100%", md: "700px" },
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Box sx={{}}>
            <Typography
              variant="h6"
              sx={{ color: theme.palette.secondary.main, mb: 1, mt: 2, ml: 4 }}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" sx={{ ml: 4 }}>
              $59,342.32
            </Typography>
          </Box>
          <Box sx={{}}>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlinedIcon />
            </IconButton>
          </Box>
        </Stack>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            flexGrow: 1,
            overflow: "hidden",
          }}
        >
          <Line height={"100%"} isDash={true} width={"100%"} />
        </Box>
      </Paper>
      <Box
        sx={{
          maxHeight: "380px",
          flexGrow: 1,
          minWidth: "280px",
          overflow:"auto"
        }}
      >
        <Paper>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              p: 1.2,
            }}
          >
            Recent Transactions
          </Typography>
        </Paper>
        {Transactions.map((item) => {
          return (
            <Paper key={Math.random()}
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}

export default React.memo(Row2);
