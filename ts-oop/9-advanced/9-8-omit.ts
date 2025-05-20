{
  // 조금 더 제한적인 타입을 만들고 싶을 때 사용
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data' | 'h'>; // 빼고 싶은것만 명시

  // 무거운 api
  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://...',
      data: 'byte-data..',
    };
  }

  // 간략한 데이터만 리턴
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    };
  }
}
