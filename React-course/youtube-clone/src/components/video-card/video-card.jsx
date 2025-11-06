import { Avatar, Card, CardContent, CardMedia, Stack, Typography, Box } from '@mui/material';
import moment from 'moment';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
	return (
		<Card
			sx={{
				width: { xs: '100%', sm: '360px', md: '320px' },
				boxShadow: 'none',
				borderRadius: { xs: 0, sm: '12px' },
				backgroundColor: 'transparent',
				cursor: 'pointer',
				transition: 'transform 0.2s ease-in-out',
				'&:hover': {
					transform: { sm: 'translateY(-4px)' }
				}
			}}
		>
			{/* Video Thumbnail */}
			<Link to={`/video/${video.id.videoId}`} style={{ textDecoration: 'none' }}>
				<CardMedia
					image={video?.snippet?.thumbnails?.high?.url}
					alt={video?.snippet?.title}
					sx={{
						width: '100%',
						height: { xs: '180px', sm: '202px' },
						borderRadius: { xs: 0, sm: '12px' },
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						aspectRatio: '16/9',
						position: 'relative',
						'&:hover': {
							'&::after': {
								content: '""',
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								background: 'rgba(0,0,0,0.1)',
								borderRadius: { xs: 0, sm: '12px' }
							}
						}
					}}
				/>
			</Link>

			{/* Card Content */}
			<CardContent
				sx={{
					backgroundColor: 'transparent',
					padding: { xs: '8px 12px', sm: '12px 0' },
					'&:last-child': {
						paddingBottom: { xs: '8px', sm: 0 }
					}
				}}
			>
				<Stack direction='row' spacing={1.5}>
					{/* Channel Avatar */}
					<Link to={`/channel/${video?.snippet?.channelId}`} style={{ textDecoration: 'none' }}>
						<Avatar
							src={video?.snippet?.thumbnails?.default?.url}
							alt={video?.snippet?.channelTitle}
							sx={{
								width: { xs: 32, sm: 36 },
								height: { xs: 32, sm: 36 },
								flexShrink: 0,
								transition: 'transform 0.2s',
								'&:hover': {
									transform: 'scale(1.1)'
								}
							}}
						/>
					</Link>

					{/* Video Info */}
					<Box sx={{ minWidth: 0, flex: 1 }}>
						{/* Video Title */}
						<Link
							to={`/video/${video.id.videoId}`}
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							<Typography
								variant='subtitle1'
								sx={{
									fontSize: { xs: '14px', sm: '14px' },
									fontWeight: 600,
									lineHeight: { xs: '18px', sm: '20px' },
									color: '#0f0f0f',
									marginBottom: '4px',
									overflow: 'hidden',
									display: '-webkit-box',
									WebkitLineClamp: 2,
									WebkitBoxOrient: 'vertical',
									textOverflow: 'ellipsis',
									'&:hover': {
										color: '#065fd4'
									}
								}}
							>
								{video?.snippet?.title}
							</Typography>
						</Link>

						{/* Channel Name */}
						<Link
							to={`/channel/${video?.snippet?.channelId}`}
							style={{ textDecoration: 'none' }}
						>
							<Stack direction='row' alignItems='center' spacing={0.5} mb='2px'>
								<Typography
									variant='body2'
									sx={{
										fontSize: { xs: '12px', sm: '12px' },
										color: '#606060',
										fontWeight: 400,
										lineHeight: '18px',
										overflow: 'hidden',
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap',
										'&:hover': {
											color: '#0f0f0f'
										}
									}}
								>
									{video?.snippet?.channelTitle}
								</Typography>
								<CheckCircle sx={{ fontSize: '12px', color: '#606060', flexShrink: 0 }} />
							</Stack>
						</Link>

						{/* Published Date */}
						<Typography
							variant='body2'
							sx={{
								fontSize: { xs: '12px', sm: '12px' },
								color: '#606060',
								fontWeight: 400,
								lineHeight: '18px'
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