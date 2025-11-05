import { Box, CardMedia, CardContent, Typography, Avatar } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail?.statistics?.subscriberCount)
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "358px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop: { xs: 0, md: 2 }
      }}
    >
      <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}>
        <CardContent 
          sx={{ 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            textAlign: "center",
            alignItems: "center"
          }}
        >
          <Avatar
            alt={channelDetail?.snippet?.title}
            src={channelDetail?.snippet?.thumbnails?.high?.url}
            sx={{
              width: { xs: 150, md: 180 },
              height: { xs: 150, md: 180 },
              mb: 2,
              border: "1px solid #e3e3e3",
              alignItems: "center"
            }}
          />

          {/* Channel Name */}
          <Typography variant="h6" color="#000">
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>

          {/* Subscriber Count */}
          {channelDetail?.statistics?.subscriberCount && (
            <Typography sx={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;