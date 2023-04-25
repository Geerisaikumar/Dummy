const API_KEY = "AIzaSyAk7zixJXZldABmekJJH8sWZf5otjL00XI";

export const YOUTUBE_VIDEOS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  API_KEY;
export const WATCH_VIDEOS_URL =
  "https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=48&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 15;

export const YOUTUBE_COMMENTS_THREAD =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&allThreadsRelatedToChannelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=" +
  API_KEY;

export const Comments_Thread =
  "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=" +
  API_KEY;

export const YOUTUBE_CHANNELS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=" +
  API_KEY;
