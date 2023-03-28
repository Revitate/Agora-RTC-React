import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import AgoraRTC__default from 'agora-rtc-sdk-ng';
export * from 'agora-rtc-sdk-ng';

var AgoraRTCErrorCode;

(function (AgoraRTCErrorCode) {
  AgoraRTCErrorCode["UNEXPECTED_ERROR"] = "UNEXPECTED_ERROR";
  AgoraRTCErrorCode["UNEXPECTED_RESPONSE"] = "UNEXPECTED_RESPONSE";
  AgoraRTCErrorCode["TIMEOUT"] = "TIMEOUT";
  AgoraRTCErrorCode["INVALID_PARAMS"] = "INVALID_PARAMS";
  AgoraRTCErrorCode["NOT_SUPPORTED"] = "NOT_SUPPORTED";
  AgoraRTCErrorCode["INVALID_OPERATION"] = "INVALID_OPERATION";
  AgoraRTCErrorCode["OPERATION_ABORTED"] = "OPERATION_ABORTED";
  AgoraRTCErrorCode["WEB_SECURITY_RESTRICT"] = "WEB_SECURITY_RESTRICT";
  AgoraRTCErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR";
  AgoraRTCErrorCode["NETWORK_TIMEOUT"] = "NETWORK_TIMEOUT";
  AgoraRTCErrorCode["NETWORK_RESPONSE_ERROR"] = "NETWORK_RESPONSE_ERROR";
  AgoraRTCErrorCode["API_INVOKE_TIMEOUT"] = "API_INVOKE_TIMEOUT";
  AgoraRTCErrorCode["ENUMERATE_DEVICES_FAILED"] = "ENUMERATE_DEVICES_FAILED";
  AgoraRTCErrorCode["DEVICE_NOT_FOUND"] = "DEVICE_NOT_FOUND";
  AgoraRTCErrorCode["ELECTRON_IS_NULL"] = "ELECTRON_IS_NULL";
  AgoraRTCErrorCode["ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR"] = "ELECTRON_DESKTOP_CAPTURER_GET_SOURCES_ERROR";
  AgoraRTCErrorCode["CHROME_PLUGIN_NO_RESPONSE"] = "CHROME_PLUGIN_NO_RESPONSE";
  AgoraRTCErrorCode["CHROME_PLUGIN_NOT_INSTALL"] = "CHROME_PLUGIN_NOT_INSTALL";
  AgoraRTCErrorCode["MEDIA_OPTION_INVALID"] = "MEDIA_OPTION_INVALID";
  AgoraRTCErrorCode["PERMISSION_DENIED"] = "PERMISSION_DENIED";
  AgoraRTCErrorCode["CONSTRAINT_NOT_SATISFIED"] = "CONSTRAINT_NOT_SATISFIED";
  AgoraRTCErrorCode["TRACK_IS_DISABLED"] = "TRACK_IS_DISABLED";
  AgoraRTCErrorCode["SHARE_AUDIO_NOT_ALLOWED"] = "SHARE_AUDIO_NOT_ALLOWED";
  AgoraRTCErrorCode["LOW_STREAM_ENCODING_ERROR"] = "LOW_STREAM_ENCODING_ERROR";
  AgoraRTCErrorCode["INVALID_UINT_UID_FROM_STRING_UID"] = "INVALID_UINT_UID_FROM_STRING_UID";
  AgoraRTCErrorCode["CAN_NOT_GET_PROXY_SERVER"] = "CAN_NOT_GET_PROXY_SERVER";
  AgoraRTCErrorCode["CAN_NOT_GET_GATEWAY_SERVER"] = "CAN_NOT_GET_GATEWAY_SERVER";
  AgoraRTCErrorCode["VOID_GATEWAY_ADDRESS"] = "VOID_GATEWAY_ADDRESS";
  AgoraRTCErrorCode["UID_CONFLICT"] = "UID_CONFLICT";
  AgoraRTCErrorCode["INVALID_LOCAL_TRACK"] = "INVALID_LOCAL_TRACK";
  AgoraRTCErrorCode["INVALID_TRACK"] = "INVALID_TRACK";
  AgoraRTCErrorCode["SENDER_NOT_FOUND"] = "SENDER_NOT_FOUND";
  AgoraRTCErrorCode["CREATE_OFFER_FAILED"] = "CREATE_OFFER_FAILED";
  AgoraRTCErrorCode["SET_ANSWER_FAILED"] = "SET_ANSWER_FAILED";
  AgoraRTCErrorCode["ICE_FAILED"] = "ICE_FAILED";
  AgoraRTCErrorCode["PC_CLOSED"] = "PC_CLOSED";
  AgoraRTCErrorCode["SENDER_REPLACE_FAILED"] = "SENDER_REPLACE_FAILED";
  AgoraRTCErrorCode["GATEWAY_P2P_LOST"] = "GATEWAY_P2P_LOST";
  AgoraRTCErrorCode["NO_ICE_CANDIDATE"] = "NO_ICE_CANDIDATE";
  AgoraRTCErrorCode["CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS"] = "CAN_NOT_PUBLISH_MULTIPLE_VIDEO_TRACKS";
  AgoraRTCErrorCode["EXIST_DISABLED_VIDEO_TRACK"] = "EXIST_DISABLED_VIDEO_TRACK";
  AgoraRTCErrorCode["INVALID_REMOTE_USER"] = "INVALID_REMOTE_USER";
  AgoraRTCErrorCode["REMOTE_USER_IS_NOT_PUBLISHED"] = "REMOTE_USER_IS_NOT_PUBLISHED";
  AgoraRTCErrorCode["CUSTOM_REPORT_SEND_FAILED"] = "CUSTOM_REPORT_SEND_FAILED";
  AgoraRTCErrorCode["CUSTOM_REPORT_FREQUENCY_TOO_HIGH"] = "CUSTOM_REPORT_FREQUENCY_TOO_HIGH";
  AgoraRTCErrorCode["FETCH_AUDIO_FILE_FAILED"] = "FETCH_AUDIO_FILE_FAILED";
  AgoraRTCErrorCode["READ_LOCAL_AUDIO_FILE_ERROR"] = "READ_LOCAL_AUDIO_FILE_ERROR";
  AgoraRTCErrorCode["DECODE_AUDIO_FILE_FAILED"] = "DECODE_AUDIO_FILE_FAILED";
  AgoraRTCErrorCode["WS_ABORT"] = "WS_ABORT";
  AgoraRTCErrorCode["WS_DISCONNECT"] = "WS_DISCONNECT";
  AgoraRTCErrorCode["WS_ERR"] = "WS_ERR";
  AgoraRTCErrorCode["LIVE_STREAMING_TASK_CONFLICT"] = "LIVE_STREAMING_TASK_CONFLICT";
  AgoraRTCErrorCode["LIVE_STREAMING_INVALID_ARGUMENT"] = "LIVE_STREAMING_INVALID_ARGUMENT";
  AgoraRTCErrorCode["LIVE_STREAMING_INTERNAL_SERVER_ERROR"] = "LIVE_STREAMING_INTERNAL_SERVER_ERROR";
  AgoraRTCErrorCode["LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED"] = "LIVE_STREAMING_PUBLISH_STREAM_NOT_AUTHORIZED";
  AgoraRTCErrorCode["LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED"] = "LIVE_STREAMING_TRANSCODING_NOT_SUPPORTED";
  AgoraRTCErrorCode["LIVE_STREAMING_CDN_ERROR"] = "LIVE_STREAMING_CDN_ERROR";
  AgoraRTCErrorCode["LIVE_STREAMING_INVALID_RAW_STREAM"] = "LIVE_STREAMING_INVALID_RAW_STREAM";
  AgoraRTCErrorCode["LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT"] = "LIVE_STREAMING_WARN_STREAM_NUM_REACH_LIMIT";
  AgoraRTCErrorCode["LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE"] = "LIVE_STREAMING_WARN_FAILED_LOAD_IMAGE";
  AgoraRTCErrorCode["LIVE_STREAMING_WARN_FREQUENT_REQUEST"] = "LIVE_STREAMING_WARN_FREQUENT_REQUEST";
  AgoraRTCErrorCode["WEBGL_INTERNAL_ERROR"] = "WEBGL_INTERNAL_ERROR";
  AgoraRTCErrorCode["BEAUTY_PROCESSOR_INTERNAL_ERROR"] = "BEAUTY_PROCESSOR_INTERNAL_ERROR";
  AgoraRTCErrorCode["CROSS_CHANNEL_WAIT_STATUS_ERROR"] = "CROSS_CHANNEL_WAIT_STATUS_ERROR";
  AgoraRTCErrorCode["CROSS_CHANNEL_FAILED_JOIN_SRC"] = "CROSS_CHANNEL_FAILED_JOIN_SEC";
  AgoraRTCErrorCode["CROSS_CHANNEL_FAILED_JOIN_DEST"] = "CROSS_CHANNEL_FAILED_JOIN_DEST";
  AgoraRTCErrorCode["CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST"] = "CROSS_CHANNEL_FAILED_PACKET_SENT_TO_DEST";
  AgoraRTCErrorCode["CROSS_CHANNEL_SERVER_ERROR_RESPONSE"] = "CROSS_CHANNEL_SERVER_ERROR_RESPONSE";
  AgoraRTCErrorCode["METADATA_OUT_OF_RANGE"] = "METADATA_OUT_OF_RANGE";
})(AgoraRTCErrorCode || (AgoraRTCErrorCode = {}));

const createClient = config => {
  let client;

  function createClosure() {
    if (!client) {
      client = AgoraRTC__default.createClient(config);
    }

    return client;
  }

  return () => createClosure();
};
function createMicrophoneAndCameraTracks(audioConfig, videoConfig) {
  let tracks = null;

  async function createClosure() {
    tracks = await AgoraRTC__default.createMicrophoneAndCameraTracks(audioConfig, videoConfig);
    return tracks;
  }

  return function useMicrophoneAndCameraTracks() {
    const [ready, setReady] = useState(false);
    const [agoraRTCError, setAgoraRTCError] = useState(null);
    const ref = useRef(tracks);
    useEffect(() => {
      if (ref.current === null) {
        createClosure().then(tracks => {
          ref.current = tracks;
          setReady(true);
        }, e => {
          setAgoraRTCError(e);
        });
      } else {
        setReady(true);
      }

      return () => {
        tracks = null;
      };
    }, []);
    return {
      ready,
      tracks: ref.current,
      error: agoraRTCError
    };
  };
}
function createBufferSourceAudioTrack(config) {
  let track = null;

  async function createClosure() {
    track = await AgoraRTC__default.createBufferSourceAudioTrack(config);
    return track;
  }

  return function useBufferSourceAudioTrack() {
    const [ready, setReady] = useState(false);
    const [agoraRTCError, setAgoraRTCError] = useState(null);
    const ref = useRef(track);
    useEffect(() => {
      if (ref.current === null) {
        createClosure().then(track => {
          ref.current = track;
          setReady(true);
        }, e => {
          setAgoraRTCError(e);
        });
      } else {
        setReady(true);
      }

      return () => {
        track = null;
      };
    }, []);
    return {
      ready,
      track: ref.current,
      error: agoraRTCError
    };
  };
}
function createCameraVideoTrack(config) {
  let track = null;

  async function createClosure() {
    track = await AgoraRTC__default.createCameraVideoTrack(config);
    return track;
  }

  return function useCameraVideoTrack() {
    const [ready, setReady] = useState(false);
    const [agoraRTCError, setAgoraRTCError] = useState(null);
    const ref = useRef(track);
    useEffect(() => {
      if (ref.current === null) {
        createClosure().then(track => {
          ref.current = track;
          setReady(true);
        }, e => {
          setAgoraRTCError(e);
        });
      } else {
        setReady(true);
      }

      return () => {
        track = null;
      };
    }, []);
    return {
      ready,
      track: ref.current,
      error: agoraRTCError
    };
  };
}
function createCustomAudioTrack(config) {
  let track = null;

  async function createClosure() {
    track = await AgoraRTC__default.createCustomAudioTrack(config);
    return track;
  }

  return function useCustomAudioTrack() {
    const [ready, setReady] = useState(false);
    const [agoraRTCError, setAgoraRTCError] = useState(null);
    const ref = useRef(track);
    useEffect(() => {
      if (ref.current === null) {
        createClosure().then(track => {
          ref.current = track;
          setReady(true);
        }, e => {
          setAgoraRTCError(e);
        });
      } else {
        setReady(true);
      }

      return () => {
        track = null;
      };
    }, []);
    return {
      ready,
      track: ref.current,
      error: agoraRTCError
    };
  };
}
function createCustomVideoTrack(config) {
  let track = null;

  async function createClosure() {
    track = await AgoraRTC__default.createCustomVideoTrack(config);
    return track;
  }

  return function useCustomVideoTrack() {
    const [ready, setReady] = useState(false);
    const [agoraRTCError, setAgoraRTCError] = useState(null);
    const ref = useRef(track);
    useEffect(() => {
      if (ref.current === null) {
        createClosure().then(track => {
          ref.current = track;
          setReady(true);
        }, e => {
          setAgoraRTCError(e);
        });
      } else {
        setReady(true);
      }

      return () => {
        track = null;
      };
    }, []);
    return {
      ready,
      track: ref.current,
      error: agoraRTCError
    };
  };
}
function createMicrophoneAudioTrack(config) {
  let track = null;

  async function createClosure() {
    track = await AgoraRTC__default.createMicrophoneAudioTrack(config);
    return track;
  }

  return function useMicrophoneAudioTrack() {
    const [ready, setReady] = useState(false);
    const [agoraRTCError, setAgoraRTCError] = useState(null);
    const ref = useRef(track);
    useEffect(() => {
      if (ref.current === null) {
        createClosure().then(track => {
          ref.current = track;
          setReady(true);
        }, e => {
          setAgoraRTCError(e);
        });
      } else {
        setReady(true);
      }

      return () => {
        track = null;
      };
    }, []);
    return {
      ready,
      track: ref.current,
      error: agoraRTCError
    };
  };
}
function createScreenVideoTrack(config, withAudio) {
  let tracks;

  async function createClosure() {
    tracks = await AgoraRTC__default.createScreenVideoTrack(config, withAudio);
    return tracks;
  }

  return function useScreenVideoTrack() {
    const [ready, setReady] = useState(false);
    const [agoraRTCError, setAgoraRTCError] = useState(null);
    const ref = useRef(tracks);
    useEffect(() => {
      if (ref.current === undefined) {
        createClosure().then(tracks => {
          ref.current = tracks;
          setReady(true);
        }, e => {
          setAgoraRTCError(e);
        });
      } else {
        setReady(true);
      }
    }, []);
    return {
      ready,
      tracks: ref.current,
      error: agoraRTCError
    };
  };
}
const AgoraVideoPlayer = props => {
  const vidDiv = useRef(null);
  const {
    videoTrack,
    config,
    ...other
  } = props;
  useLayoutEffect(() => {
    if (vidDiv.current !== null) videoTrack.play(vidDiv.current, config);
    return () => {
      videoTrack.stop();
    };
  }, [videoTrack]);
  return React.createElement("div", Object.assign({}, other, {
    ref: vidDiv
  }));
};

export default AgoraRTC__default;
export { AgoraRTCErrorCode, AgoraVideoPlayer, createBufferSourceAudioTrack, createCameraVideoTrack, createClient, createCustomAudioTrack, createCustomVideoTrack, createMicrophoneAndCameraTracks, createMicrophoneAudioTrack, createScreenVideoTrack };
//# sourceMappingURL=index.modern.js.map
