import React from 'react';

const videos = [
  { src: 'src/assets/video.mp4', title: 'Aerial View' },
  { src: 'video2.mp4', title: 'School Overview' },
  // Additional videos can be added here
];

const VideoCard = ({ src, title }) => {
  const cardStyle = {
    border: '2px solid rgb(59 130 246)',
    padding: '10px',
    margin: '10px',
    width: '300px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    backgroundColor: '#fff',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
  };

  const videoStyle = {
    width: '100%',
    height: '200px',
    background: '#ccc', // Placeholder for video
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    borderRadius: '4px',
  };

  const titleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <div style={videoStyle}>
        <video src={src} width="100%" height="200px" controls autoPlay loop muted>
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={titleStyle}>{title}</div>
    </div>
  );
};

const VideoBlogSection = () => {
  const sectionStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #f6f8fa, #eaeff3)',
    borderRadius: '8px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  };

  const videosContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const titleStyle = {
    fontSize: '32px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div style={sectionStyle} className=''>
      <div style={titleStyle}>VIDEO BLOG</div>
      <div style={videosContainerStyle} className=''>
        {videos.map((video, index) => (
          <VideoCard key={index} src={video.src} title={video.title} />
        ))}
      </div>
    </div>
  );
};

export default VideoBlogSection;
