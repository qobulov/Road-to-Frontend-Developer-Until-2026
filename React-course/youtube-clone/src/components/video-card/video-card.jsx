import { Card, CardMedia, CardContent, Typography, Stack, Avatar, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import moment from "moment";

const VideoCard = ({ video }) => {
  return (
    <Card 
      sx={{ 
        width: "100%", 
        maxWidth: { xs: "100%", sm: "350px" },
        boxShadow: "none", 
        borderRadius: { xs: "0px", sm: "12px" },
        cursor: "pointer",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: { xs: "none", sm: "scale(1.02)" }
        },
        backgroundColor: "transparent"
      }}
    >
      <CardMedia
        image={video.snippet.thumbnails.high.url}
        sx={{ 
          height: { xs: "180px", sm: "202px", md: "202px" },
          width: "100%",
          borderRadius: { xs: "0px", sm: "12px" },
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "16/9"
        }}
      />
      
      <CardContent
        sx={{
          padding: { xs: "8px 12px", sm: "12px 0px" },
          backgroundColor: "transparent",
          "&:last-child": {
            paddingBottom: { xs: "8px", sm: "0px" }
          }
        }}
      >
        <Stack direction="row" spacing={{ xs: 1, sm: 1.5 }}>
          <Avatar 
            src={video.snippet.thumbnails.default?.url || video.snippet.thumbnails.high.url}
            sx={{ 
              width: { xs: 32, sm: 36 }, 
              height: { xs: 32, sm: 36 },
              flexShrink: 0
            }}
          />
          
          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{ 
                fontSize: { xs: "14px", sm: "14px" },
                fontWeight: 600,
                lineHeight: { xs: "18px", sm: "20px" },
                color: "#0f0f0f",
                marginBottom: "4px",
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis"
              }}
            >
              {video.snippet.title}
            </Typography>
            
            <Stack direction="row" alignItems="center" spacing={0.5} mb="2px">
              <Typography
                variant="body2"
                sx={{ 
                  fontSize: { xs: "12px", sm: "12px" },
                  color: "#606060",
                  fontWeight: 400,
                  lineHeight: "18px"
                }}
              >
                {video.snippet.channelTitle}
              </Typography>
              <CheckCircle 
                sx={{ 
                  fontSize: { xs: "11px", sm: "12px" },
                  color: "#606060"
                }} 
              />
            </Stack>
            
            <Typography
              variant="body2"
              sx={{ 
                fontSize: { xs: "12px", sm: "12px" },
                color: "#606060",
                fontWeight: 400,
                lineHeight: "18px"
              }}
            >
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VideoCard;