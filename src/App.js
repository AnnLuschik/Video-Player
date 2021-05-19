import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { VideoPlayer, getDataRequest } from './VideoPlayer';

function App() {
  const dispatch = useDispatch();
  const { responseData, loading, errorMessage } = useSelector((state) => state.videoPlayer);

  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    dispatch(getDataRequest())
  }, [dispatch]);

  useEffect(() => {
    if (responseData) {
      setVideoUrl(responseData.data.find((item) => item.format === 'mp4').url);
    }
  }, [responseData]);

  return (
    <Container>
      {loading ? <Loading>Loading...</Loading> : null}
      {responseData ? <VideoPlayer url={videoUrl} /> : null}
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.p`
  font-weight: 800;
  font-size: 2em;
`;

const ErrorMessage = styled.div`
  font-size: 1.5em;
  color: red;
`;

export default App;
