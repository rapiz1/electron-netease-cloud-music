export const loginValid = state => state.user.loginValid;

export const userAvatarUrl = state => {
    return state.user.loginValid
        ? state.user.info.avatarUrl
        : null;
};

export const userName = state => {
    return state.user.loginValid
        ? state.user.info.nickname
        : '未登录';
};

export const userBkgUrl = state => {
    return state.user.loginValid
        ? state.user.info.backgroundUrl
        : null;
};

export const playing = state => {
    const { list, currentIndex, quality, playing } = state.playlist;
    const track = list[currentIndex];
    return {
        playing,
        ...track,
        url: track.urls[quality]
    };
};

export const playlist = state => {
    return state.playlist;
};

export const playLoopMode = state => {
    return state.playlist.loopMode;
};
