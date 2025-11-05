import {Box} from '@mui/material'
import {VideoCard ,ChannelCard,Loader} from '../'
const Videos = ({videos}) => {
  if(!videos?.length) return <Loader />
  return (
    <Box width={'100%'} gap={2} display='grid' gridTemplateColumns='repeat(4,1fr)' justifyContent='center'>
      {videos.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Box>
  )
}
export default Videos