import React from 'react';

import Skeleton from '@mui/material/Skeleton';
import CardMedia from '@mui/material/CardMedia';

import { fetchData } from 'utils';

interface Props {
  postId: string;
  mediaName: string;
}

const PostCardImage = ({ postId, mediaName }: Props): JSX.Element => {
  const [imageSrc, setImageSrc] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const url = `/get-media?postId=${postId}&mediaName=${mediaName}`;
    fetchData<string>(
      url,
      setImageSrc,
      'imageSrc',
      'https://source.unsplash.com/random',
    ).then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Skeleton animation="wave" variant="rectangular" height="300px" />;
  } else {
    return (
      <CardMedia
        component={'img'}
        image={imageSrc}
        alt="random"
        height="300px"
      />
    );
  }
};

export default PostCardImage;
