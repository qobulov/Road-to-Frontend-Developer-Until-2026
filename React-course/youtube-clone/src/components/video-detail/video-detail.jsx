import {
  Avatar,
  Box,
  Chip,
  Stack,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CheckCircle,
  ThumbUpOutlined,
  ShareOutlined,
  MoreHoriz,
  Tag,
} from "@mui/icons-material";
import parse from "html-react-parser";
import moment from "moment";
import { Loader, Videos, ApiService } from "../";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
        const relatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=20`
        );
        setRelatedVideo(relatedData.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  return (
    <Box minHeight="90vh" sx={{ backgroundColor: "#f9f9f9", pb: 4 }}>
      <Box
        display="flex"
        sx={{
          flexDirection: { xs: "column", lg: "row" },
          gap: { xs: 2, lg: 3 },
          maxWidth: "1750px",
          margin: "0 auto",
          px: { xs: 0, sm: 2, lg: 3 },
        }}
      >
        {/* Main Video Section */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          {/* Video Player with iframe */}
          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
              backgroundColor: "#000",
              borderRadius: { xs: 0, sm: "12px" },
              overflow: "hidden",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=0&rel=0`}
              title={videoDetail?.snippet?.title || "YouTube video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </Box>

          {/* Video Info Section */}
          <Box sx={{ px: { xs: 2, sm: 0 }, mt: 2 }}>
            {/* Tags */}
            {videoDetail?.snippet?.tags && (
              <Stack
                direction="row"
                spacing={1}
                sx={{ mb: 2, flexWrap: "wrap", gap: 1 }}
              >
                {videoDetail.snippet.tags.slice(0, 5).map((item, idx) => (
                  <Chip
                    key={idx}
                    label={item}
                    size="small"
                    icon={<Tag sx={{ fontSize: "14px" }} />}
                    sx={{
                      backgroundColor: "#f2f2f2",
                      "&:hover": { backgroundColor: "#e0e0e0" },
                      fontSize: "12px",
                      height: "24px",
                    }}
                  />
                ))}
              </Stack>
            )}

            {/* Title */}
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                fontSize: { xs: "18px", sm: "20px" },
                lineHeight: 1.4,
                color: "#0f0f0f",
                mb: 1,
              }}
            >
              {videoDetail.snippet.title}
            </Typography>

            {/* Stats and Actions */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={{ xs: "flex-start", sm: "center" }}
              spacing={2}
              sx={{ mb: 2 }}
            >
              {/* Views and Date */}
              <Typography
                variant="body2"
                sx={{ color: "#606060", fontSize: "14px" }}
              >
                {parseInt(videoDetail.statistics.viewCount).toLocaleString()}{" "}
                views •{" "}
                {moment(videoDetail.snippet.publishedAt).format("MMM D, YYYY")}
              </Typography>

              {/* Action Buttons */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    px: 2,
                    py: 1,
                    borderRadius: "18px",
                    cursor: "pointer",
                    border: "1px solid #e0e0e0",
                    "&:hover": { backgroundColor: "#f2f2f2" },
                  }}
                >
                  <ThumbUpOutlined sx={{ fontSize: "20px" }} />
                  <Typography variant="body2" fontWeight={500}>
                    {parseInt(
                      videoDetail.statistics.likeCount
                    ).toLocaleString()}
                  </Typography>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    px: 2,
                    py: 1,
                    borderRadius: "18px",
                    cursor: "pointer",
                    border: "1px solid #e0e0e0",
                    "&:hover": { backgroundColor: "#f2f2f2" },
                  }}
                >
                  <ShareOutlined sx={{ fontSize: "20px" }} />
                  <Typography variant="body2" fontWeight={500}>
                    Share
                  </Typography>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    py: 1,
                    borderRadius: "18px",
                    cursor: "pointer",
                    border: "1px solid #e0e0e0",
                    "&:hover": { backgroundColor: "#f2f2f2" },
                  }}
                >
                  <MoreHoriz sx={{ fontSize: "20px" }} />
                </Paper>
              </Stack>
            </Stack>

            {/* Channel Info and Description */}
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "#f2f2f2",
                borderRadius: "12px",
                p: 2,
                mt: 2,
              }}
            >
              {/* Channel Info */}
              <Link
                to={`/channel/${videoDetail?.snippet?.channelId}`}
                style={{ textDecoration: "none" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Avatar
                    alt={videoDetail.snippet.channelTitle}
                    src={videoDetail.snippet.thumbnails.default?.url}
                    sx={{
                      width: 40,
                      height: 40,
                      cursor: "pointer",
                      "&:hover": { transform: "scale(1.05)" },
                      transition: "transform 0.2s",
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          color: "#0f0f0f",
                          "&:hover": { color: "#065fd4" },
                        }}
                      >
                        {videoDetail.snippet.channelTitle}
                      </Typography>
                      <CheckCircle
                        sx={{ fontSize: "14px", color: "#606060" }}
                      />
                    </Stack>
                  </Box>
                </Stack>
              </Link>

              {/* Description */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#0f0f0f",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: showFullDescription ? "unset" : 3,
                    WebkitBoxOrient: "vertical",
                    "& a": {
                      color: "#065fd4",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    },
                  }}
                >
                  {parse(videoDetail.snippet.description || "No description")}
                </Typography>
                <Typography
                  variant="body2"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  sx={{
                    mt: 1,
                    color: "#0f0f0f",
                    fontWeight: 500,
                    cursor: "pointer",
                    fontSize: "14px",
                    "&:hover": { color: "#065fd4" },
                  }}
                >
                  {showFullDescription ? "Show less" : "Show more"}
                </Typography>
              </Box>

              {/* Comments Count */}
              <Divider sx={{ my: 2 }} />
              <Typography
                variant="body2"
                sx={{ color: "#0f0f0f", fontWeight: 600 }}
              >
                {parseInt(videoDetail.statistics.commentCount).toLocaleString()}{" "}
                Comments
              </Typography>
            </Paper>
          </Box>
        </Box>

        {/* Related Videos Sidebar */}
        <Box
          sx={{
            width: { xs: "100%", lg: "400px" },
            px: { xs: 2, sm: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              fontSize: "16px",
              display: { xs: "block", lg: "none" },
            }}
          >
            Related Videos
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Har bir video bittadan qatorda
              gap: 1.5, // Videolar orasida joy
              maxHeight: { lg: "calc(100vh - 100px)" },
              overflowY: { lg: "auto" },
              pr: { lg: 1 },
              "&::-webkit-scrollbar": { width: "8px" },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#909090",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#606060",
              },
            }}
          >
            {relatedVideo.map((video, index) => (
              <Box key={index} sx={{ width: "100%" }}>
                <Videos videos={[video]} direction="row" />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
