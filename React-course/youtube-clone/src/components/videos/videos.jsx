import {Stack,Box} from '@mui/material'
import {VideoCard ,ChannelCard} from '../'
const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2} alignItems="center">
      {videos.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}
export default Videos