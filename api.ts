let api = {
  //droter
  droter: {
    regPhone: (payload: any, config: any) =>
      droter.post('drotr/auth/reg-phone', payload, config),
    regEmail: (payload: any, config: any) =>
      droter.post('drotr/auth/reg-email', payload, config),
    configPhone: (payload: any, config: any) =>
      droter.post('drotr/auth/confirm-phone', payload, config)
  },
  admin: {
    hidePost: (payload: any) =>
      site.post('v1/users/posts/hide', payload),
    banByAvatar: (payload: any) =>
      site.post('v1/users/ban-avatar', payload),
    setStatus: (payload: any) =>
      site.post('v1/users/set-status', payload),
  },
  locations: {
    getCountries: (payload: any) =>
      site.post('v1/locations/countries', payload),
    getPopularLocations: (payload: any) =>
      site.post('v1/locations/popular', payload),
    getPostsLocations: (payload: any) =>
      site.post('v1/locations/posts', payload),
    getLocationById: (payload: any) =>
      site.post('v1/locations/get', payload),
  },
  places: {
    getPlaces: (payload: any) =>
      site.post('v1/places/get', payload),
  },
  statistics: {
    getInteractions: (payload: any) =>
      site.post('v1/me/statistic/interactions', payload),
    uniqueViews: (payload: any) =>
      site.post('v1/me/statistic/discovery', payload),
    nonUniqueViews: (payload: any) =>
      site.post('v1/me/statistic/impressions', payload),
    profileVisits: (payload: any) =>
      site.post('v1/me/statistic/profile-visits', payload),
    uniqueUsers: (payload: any) =>
      site.post('v1/me/statistic/reach', payload),
    summActions: (payload: any) =>
      site.post('v1/me/statistic/actions', payload),
    totalWeekContent: (payload: any) =>
      site.post('v1/me/statistic/content', payload),
    feedPostsWeek: (payload: any) =>
      site.post('v1/me/statistic/feed-posts', payload),
    storiesWeek: (payload: any) =>
      site.post('v1/me/statistic/stories', payload),
    myAudience: (payload: any) =>
      site.post('v1/me/statistic/audience', payload),
  },
  // site request
  chat: {
    addChatToArchive: (payload: any) =>
      site.post('v1/me/chats/archive', payload),
    addMsgToFavorite: (payload: any) =>
      site.post('v1/me/chats/messages/favourite/add', payload),
    deleteMsgFromFavorite: (payload: any) =>
      site.post('v1/me/chats/messages/favourite/delete', payload),
    chatCreated: (payload: any) =>
      site.post('v1/me/chats/create', payload),
    chatGet: (payload: any) =>
      site.post('v1/me/chats/get', payload),
    deleteChat: (payload: any) =>
      site.post('v1/me/chats/delete', payload),
    distributionChat: (payload: any) =>
      site.post('v1/me/chats/messages/distribution', payload),
    forwardChat: (payload: any) =>
      site.post('v1/me/chats/messages/forward-post', payload),
    forwardChatGroup: (payload: any) =>
      site.post('v1/me/chats/messages/forward-group', payload),
    forwardMsgChat: (payload: any) =>
      site.post('v1/me/chats/messages/forward', payload),
    getAllMyArchive: (payload: any) =>
      site.post('v1/me/chats/archived/all', payload),
    getAllMyChat: (payload: any) =>
      site.post('v1/me/chats/all', payload),
    getFavoriteMsg: (payload: any) =>
      site.post('v1/me/chats/messages/favourite/all', payload),
    getMsg: (payload: any) =>
      site.post('v1/me/chats/messages/all', payload),
    readMsg: (payload: any) =>
      site.post('v1/me/chats/messages/read', payload),
    removeMsg: (payload: any) =>
      site.post('v1/me/chats/messages/delete', payload),
    sendChinChin: (payload: any) =>
      site.post('v1/me/chats/messages/chin', payload),
    sendMsg: (payload: any) =>
      site.post('v1/me/chats/messages/send', payload),
    unreadMsgCount: (payload: any) =>
      site.post('v1/me/chats/messages/unread', payload),
    sendStoryComment: (payload: any) =>
      site.post('v1/me/chats/messages/forward-story', payload),
  },
  complaints: {
    addGroupsComplaints: (payload: any) =>
      site.post('v1/complaints/groups/add', payload),
  },
  contest: {
    allPrizeContest: (payload?: any) =>
      site.post('v1/contests/prizes/all', payload),
    createContest: (payload: any) =>
      site.post('v1/contests/create', payload),
    getActiveUserContest: (payload: any) =>
      site.post('v1/users/contests/get', payload),
    getAllContest: (payload: any) =>
      site.post('v1/contests/all', payload),
    getTopContest: (payload: any) =>
      site.post('v1/contests/top', payload),
    getContest: (payload: any) =>
      site.post('v1/contests/get', payload),
    getContestApplicationCheck: (payload: any) =>
      site.post('v1/contests/applications/check', payload),
    sendContestApplication: (payload: any) =>
      site.post('v1/contests/applications/send', payload),
    userOnContest: (payload: any) =>
      site.post('v1/contests/users/all', payload),
    voteInContest: (payload: any) =>
      site.post('v1/contests/users/vote', payload),
    getAllCategories: (payload?: any) =>
      site.post('v1/contests/categories/all', payload),
    contestsByCategory: (payload: any) =>
      site.post('v1/contests/categories/get', payload)
  },
  documents: {
    getDocuments: (name: string, lang: string) => {
      let data = new FormData();
      data.append('name', name);
      data.append('lang', lang);

      return site.post('v1/documents/get', data);
    },
    getRules: (lang: string) => {
      return api.documents.getDocuments('rules', lang);
    },
  },
  feed: {
    allFeed: (payload: any) =>
      site.post('v1/me/feeds/new/all', payload),
    viewFeed: (payload: any) =>
      site.post('v1/me/feeds/view', payload)
  },
  group: {
    addPost: (payload: any) =>
      site.post('v1/groups/posts/add', payload),
    addPostV2: (payload: any, config: any) =>
      site.post('v1/groups/posts/add-v2', payload, config),
    addVideo: (payload: any) =>
      site.post('v1/groups/videos/add', payload),
    addVideoV2: (payload: any, config: any) =>
      site.post('v1/groups/videos/add-v2', payload, config),
    getGroupIntags: (payload: any) =>
      site.post('v1/groups/intags/posts', payload),
    searchGroupIntag: (payload: any) =>
      site.post('v1/groups/intags/posts/search', payload),
    findGroupIntags: (payload: any) =>
      site.post('v1/groups/intags/search', payload),
    getPollsHistory: (payload: any) =>
      site.post('v1/polls/history', payload),
    getGroupUsers: (payload: any) =>
      site.post('v1/groups/users/all', payload),
    admin: {
      addUserToGroupBlacklist: (payload: any) =>
        site.post('v1/groups/blacklist/add', payload),
      allUsersInGroupBlacklist: (payload: any) =>
        site.post('v1/groups/blacklist/all', payload),
      assignGroupAdmin: (payload: any) =>
        site.post('v1/groups/users/role', payload),
      removeFromGroupBlacklist: (payload: any) =>
        site.post('v1/groups/blacklist/delete', payload),
      removeUserFromGroup: (payload: any) =>
        site.post('v1/groups/users/kick', payload),
    },
    album: {
      addAlbum: (payload: any, config: any) =>
        site.post('v1/albums/posts/add', payload, config),
      createAlbum: (payload: any) =>
        site.post('v1/albums/create', payload),

      /*
        Album access levels:

        0: read_and_write_for_all,
        1: read_and_write_for_me,
        2: read_for_all_write_for_me
      */
      setAlbumAccess: (payload: any) =>
        site.post('v1/albums/access', payload),
      changeIntags: (payload: any) =>
        site.post('v1/albums/intags/change', payload),
      changeMentions: (payload: any) =>
        site.post('v1/albums/mentions/change', payload),
      loadIntags: (payload: any) =>
        site.post('v1/albums/intags/get', payload),
      loadMentions: (payload: any) =>
        site.post('v1/albums/mentions/get', payload),
      addPost: (payload: any) =>
        site.post('v1/albums/posts/add-v2', payload),
      deleteAlbum: (payload: any) =>
        site.post('v1/albums/delete', payload),
      editAlbum: (payload: any) =>
        site.post('v1/albums/edit', payload),
      getAlbum: (payload: any) =>
        site.post('v1/albums/get', payload),
      groupAlbum: (payload: any) =>
        site.post('v1/albums/all', payload),
      deleteAlbumPost: (payload: any) =>
        site.post('v1/albums/posts/delete', payload),
      getAlbumPosts: (payload: any) =>
        site.post('v1/albums/posts/get', payload),
      comments: {
        getAllComments: (payload: any) =>
          site.post('v1/albums/comments/all', payload),
        deleteComment: (payload: any) =>
          site.post('v1/albums/comments/delete', payload),
        editComment: (payload: any) =>
          site.post('v1/albums/comments/edit', payload),
        likeComment: (payload: any) =>
          site.post('v1/albums/comments/like', payload),
        addComment: (payload: any) =>
          site.post('v1/albums/comments/add', payload),
      },
      mentions: {
        getAllMentions: (payload: any) =>
          site.post('v1/albums/mentions/get', payload),
        changeMentions: (payload: any) =>
          site.post('v1/albums/mentions/change', payload),
      },
      intags: {
        getAllIntags: (payload: any) =>
          site.post('v1/albums/intags/get', payload),
      }
    },
    // get group info
    discussion: {
      createDiscussion: (payload: any) =>
        site.post('v1/discussions/create', payload),
      discussionAll: (payload: any) =>
        site.post('v1/discussions/all', payload),
      getDiscussion: (payload: any) =>
        site.post('v1/discussions/get', payload),
      getMessageDiscussion: (payload: any) =>
        site.post('v1/discussions/messages/all', payload),
    },
    createGroup: (payload: any) =>
      site.post('v1/groups/create', payload),
    deleteGroup: (payload: any) =>
      site.post('v1/groups/delete', payload),
    deletePostGroup: (payload: any) =>
      site.post('v1/groups/posts/delete', payload),
    editGroup: (payload: any) =>
      site.post('v1/groups/edit', payload),
    getGroup: (payload: any) =>{
      const res = site.post('v1/groups/get', payload)
      res.then(r=>console.log({r}))
      return res
    },
    getGroupList: (payload: any) =>
      site.post('v1/groups/search', payload),
    getGroupPost: (payload: any) =>
      site.post('v1/groups/posts/all', payload),
    getGroupVideoPost: (payload: any) =>
      site.post('v1/groups/videos/get', payload),
    getGroupPhoto: (payload: any) =>
      site.post('v1/groups/images/get', payload),
    getMsgSend: (payload: any) =>
      site.post('v1/groups/send', payload),
    getMyGroupList: (payload: any) =>
      site.post('v1/me/groups/all', payload),
    getMyGroupsCount: (payload: any) =>
      site.post('v1/me/groups/count', payload),
    joinGroup: (payload: any) =>
      site.post('v1/groups/join', payload),
    // created group
    reportGroup: (payload: any) =>
      site.post('v1/groups/report', payload),
    searchGroupSubject: (payload: any) =>
      site.post('v1/groups/subjects/all', payload),
    user: {
      groupInvite: (payload: any) =>
        site.post('v1/groups/invite/add', payload),
      groupRequestUser: (payload: any) =>
        site.post('v1/groups/users/requests', payload),
      groupRequestUserApply: (payload: any) =>
        site.post('v1/groups/users/requests/apply', payload),
      groupUser: (payload: any) =>
        site.post('v1/groups/users/all', payload),
      groupUserRole: (payload: any) =>
        site.post('v1/groups/users/role', payload),
    }
  },
  post: {
    addPost: (payload: any, config: any) =>
      site.post('v1/users/posts/add', payload, config),
    bookmarkPost: (payload: any) =>
      site.post('v1/users/posts/bookmark', payload),
    comment: {
      commentDelete: (payload: any) =>
        site.post('v1/users/posts/comments/delete', payload),
      commentPostAdd: (payload: any) =>
        site.post('v1/users/posts/comments/add', payload),
      commentPostEdit: (payload: any) =>
        site.post('v1/users/posts/comments/edit', payload),
      commentPostAll: (payload: any) =>
        site.post('v1/users/posts/comments/all', payload),
      commentLike: (payload: any) =>
        site.post('v1/comments/like', payload),
      commentLikers: (payload: any) =>
        site.post('v1/comments/likers', payload),
    },
    deleteMyMentions: (payload: any) =>
      site.post('v1/users/posts/mentions/delete', payload),
    deletePost: (payload: any) =>
      site.post('v1/users/posts/delete', payload),
    editPost: (payload: any) =>
      site.post('v1/users/posts/edit', payload),
    getAllPost: (payload: any) =>
      site.post('v1/users/posts/all', payload),
    getAllPostHome: (payload: any) =>
      site.post('v1/users/posts/home', payload),
    getAllPostProfile: (payload: any) =>
      site.post('v1/users/posts/profile', payload),
    getAllPostRating: (payload: any) =>
      site.post('v1/users/posts/rating', payload),
    getOnlyPhotoPost: (payload: any) =>
      site.post('v1/users/posts/only-photo', payload),
    getPostBySearch: (payload: any) =>
      site.post('v1/users/posts/search', payload),
    // getPostSubscriptions: (payload: any) =>
    //   site.post('v1/me/posts/subscriptions/all', payload),
    getSoloPost: (payload: any) =>
      site.post('v1/users/posts/get', payload),
    likePost: (payload: any) =>
      site.post('v1/users/posts/like', payload),
    mentionOnImg: (payload: any) =>
      site.post('v1/mentioned-users/on-image/all', payload),
    postProfileMove: (payload: any) =>
      site.post('v1/users/posts/actions/add', payload),
    repostPost: (payload: any) =>
      site.post('v1/users/posts/repost', payload),
    statisticsGet: (payload: any) =>
      site.post('v1/users/posts/statistics/get', payload),
    triggerPost: (payload: any) =>
      site.post('v1/users/posts/' + payload.type, payload.data),
    uploadCreated: (payload: any) =>
      site.post('v1/uploads/create', payload),
    uploadLoad: (payload: any, config: any) =>
      site.post('v1/uploads/load', payload, config),
    uploadLoadImage: (payload: any, config: any) =>
      site.post('v1/uploads/load-image', payload, config),
    viewPost: (payload: any) =>
      site.post('v1/users/posts/view', payload),
    statistics: {
      getCommentator: (payload: any) =>
        site.post('v1/users/posts/commentators/all', payload),
      getLiker: (payload: any) =>
        site.post('v1/users/posts/likers/all', payload),
      getMentions: (payload: any) =>
        site.post('v1/users/posts/mentions/all', payload),
      getReposters: (payload: any) =>
        site.post('v1/users/posts/reposters/all', payload),
      getBookmarkers: (payload: any) =>
        site.post('v1/users/posts/bookmarkers/all', payload),
    },
    reportPost: (payload: any) =>
      site.post('v1/users/posts/report', payload),
    my: {
      bookmarkedPost: (payload: any) =>
        site.post('v1/me/posts/bookmarks/all', payload),
      mentionsPost: (payload: any) =>
        site.post('v1/me/posts/mentions/all', payload),

    },
    commercial: {
      getReachCount: (payload: any) =>
        site.post('v1/ad/reach/count', payload),
      addPost: (payload: any) =>
        site.post('v1/ad/posts/add', payload),
      getSettings: (payload: any) =>
        site.post('v1/ad/posts/settings/get', payload),
    }
  },
  rating: {
    ratingHistory: (payload: any) =>
      site.post('v1/rating-history/all', payload),
    ratingPostUsers: (payload: any) =>
      site.post('v1/users/posts/rating/new', payload),
    userRating: (payload: any) =>
      site.post('v1/users/rating', payload),
  },
  register: {
    checkCredentials: (payload: any) =>
      site.post('v1/check-credentials-v2', payload),
    verifyPhone: (payload: any) =>
      site.post('v1/verify-phone', payload),
    confirmDroter: (payload: any) =>
      site.post('v1/confirm-drotr', payload),
    register: (payload: any, config: any) =>
      site.post('v1/register-v2', payload, config),
    registerWithoutDroter: (payload: any, config: any) =>
      site.post('v1/register-without-drotr', payload, config),
    restorePassword: (payload: any) =>
      site.post('v1/restore-password', payload),
    registerViaFacebook: (payload: any) =>
      site.post('v1/register-via-facebook', payload),
    getClientCountry: () =>
      site.get('v1/get-client-country'),

    registerCommerce: (payload: any) =>
      site.post('v1/me/accounts/add', payload),

    getMyCommerce: () =>
      site.get('v1/me/accounts/get'),

    getCategories: () =>
      site.get('v1/commercial/categories/get'),
  },
  commercial: {
    getPostStatistic: (payload: any) =>
      site.post('v1/ad/posts/statistic', payload),
    getCommercialPosts: () =>
      site.post('v1/ad/posts/my'),
    clickCommercialPost: (payload: any) =>
      site.post('v1/ad/posts/click', payload),
    cancelAd: (payload: any) =>
      site.post('v1/ad/cancel', payload),
  },
  m1: {
    m1GetPlaylist: (payload: any) =>
      site.post('v1/m1/get-playlist', payload),
    m1Vote: (payload: any) =>
      site.post('v1/m1/vote-f', payload),
    m1PollsCurrent: (payload: any) =>
      site.post('v1/polls/current', payload),
    m1PollsVote: (payload: any) =>
      site.post('v1/polls/vote', payload),
  },
  clips: {
    __getEmojisAndShapes: (tag: string = 'inrating_tv') => {
      let data = new FormData();
      data.append('tag', tag);
      return site.post('v1/clips/get-emojis', data);
    },
    getEmojisAndShapes: (() => {
      let saved: any = {};
      let isLoading = false;
      return async (tag: string = 'inrating_tv') => {
        if (isLoading) {
          await AsyncUtils.waitForCallback(() => {
            return !isLoading;
          });
        }
        if (!saved[tag]) {
          isLoading = true;
          saved[tag] = await api.clips.__getEmojisAndShapes(tag);
          isLoading = false;
        }
        return saved[tag];
      }
    })(),
    getChannel: (payload: any) =>
      site.post('v1/channels/get', payload),
    getChannelStatistics: (payload: any) =>
      site.post('v1/channels/statistics/get', payload),
    getPlaylist: (payload: any) =>
      site.post('v1/clips/get-playlist', payload),
    getChannelVotings: (payload: any) =>
      site.post('v1/channels/votings/current', payload),
    getClipInfo: () =>
      site.post('v1/clips/get-clip-info'),
    vote: (payload: any) =>
      site.post('v1/channels/votings/vote', payload),
    reactToClip: (payload: any) =>{
      return site.post('v1/clips/emoji', payload)
    },
    voteForClip: (payload: any) =>
      site.post('v1/clips/vote-cosmonova', payload),
    getClipInfo: () =>
      site.post('/v1/clips/get-clip-info'),
    voteForDjSet: (payload: any) =>
      site.post('/v1/clips/dj-rating/set', payload),
    getBloggerInfo: () =>
      site.get('/v1/clips/blogshow/get'),
    voteForBlogger: (payload: any) =>
      site.post('v1/clips/blogshow/set', payload)
  },
  search: {
    searchActivityStatus: (payload: any) =>
      site.post('v1/dict/activity-status/search', payload),
    searchGroup: (payload: any) =>
      site.post('v1/groups/search', payload),
    searchIntag: (payload: any) =>
      site.post('v1/dict/intags/search', payload),
    searchPopularIntags: (payload: any) =>
      site.post('v1/intags/popular', payload),
    getPostsByIntag: (payload: any) =>
      site.post('v1/intags/posts', payload),
    searchPopularLocations: (payload: any) =>
      site.post('v1/locations/popular', payload),
    getPostsByLocation: (payload: any) =>
      site.post('v1/locations/posts', payload),
    searchPostChunks: (payload: any) =>
      site.post('v1/me/posts/search/chunks', payload),
    searchSocialStatus: (payload: any) =>
      site.post('v1/dict/social-status/search', payload),
    searchUser: (payload: any) =>
      site.post('v1/users/search', payload),
  },
  setting: {
    changePasswordByPhone: (payload: any) =>
      site.post('v1/restore-password-by-sms', payload),
    avatarChange: (payload: any) =>
      site.post('v1/me/settings/avatar/change', payload),
    backgroundChange: (payload: any) =>
      site.post('v1/me/settings/background/change', payload),
    switchBackground: (payload: any) =>
      site.post('v1/me/gifts/switch-bg', payload),
    baseSettingEdit: (payload: any) =>
      site.post('v1/me/settings/base/edit', payload),
    editPrivateSetting: (payload: any) =>
      site.post('v1/me/settings/privacy/edit', payload),
    editSettings: (payload: any) =>
      site.post('v1/me/settings/edit', payload),
    FAQ: (payload: any) =>
      site.post('v1/faq/all', payload),
    settingsFilter: (payload: any) =>
      site.post('v1/me/settings/filters/edit', payload),
    settingsGet: (payload: any) =>
      site.post('v1/me/settings/get', payload),
    supportLater: (payload: any) =>
      site.post('v1/me/support/letter', payload),
    checkBonusFields: (payload: any) =>
      site.post('v1/me/settings/bonus-fields', payload),
    settingsCommercial: (payload: any) =>
      site.post('/v1/me/settings/commercial/edit', payload),
    getButton: (payload: any) =>
      site.post('v1/me/accounts/button/get', payload),
    editButton: (payload: any) =>
      site.post('/v1/me/accounts/button/edit', payload),
    phoneChange: (payload: any) =>
      site.post('v1/me/phone/update', payload),


    lang: {
      editLang: (payload: any) =>
        site.post('v1/me/settings/lang/edit', payload),
    },
    blackList: {
      allBlackListUser: (payload: any) =>
        site.post('v1/me/settings/blacklist/all', payload),
      addUserToBlackList: (payload: any) =>
        site.post('v1/me/settings/blacklist/add', payload),
      removeFromBlackList: (payload: any) =>
        site.post('v1/me/settings/blacklist/delete', payload),
    },
  },
  story: {
    albumAddStory: (payload: any) =>
      site.post('v1/users/stories/albums/add', payload),
    albumGet: (payload: any) =>
      site.post('v1/users/stories/albums/get', payload),
    albumStory: (payload: any) =>
      site.post('v1/users/stories/albums/all', payload),
    albumStoryV2: (payload: any) =>
      site.post('v1/users/stories/albums/all-v2', payload),
    getAllStory: (payload: any) =>
      site.post('v1/users/stories/all', payload),
    getStory: (payload: any) =>
      site.post('v1/users/stories/get', payload),
    getStoryArchive: (payload: any) =>
      site.post('v1/users/stories/archive/all', payload),
    storyAdd: (payload: any) =>
      site.post('v1/users/stories/add', payload),
  },
  user: {
    auth: {
      login: (payload: any) =>
        site.post('v1/me/login', payload),
      logout: (payload: any) =>
        site.post('v1/me/logout', payload),
      logoutAll: (payload: any) =>
        site.post('v1/me/logout-all', payload),
      refreshToken: (payload: any) =>
        site.post('v1/me/token-refresh', payload),
    },
    setLocation: (payload: any) =>
      site.post('v1/me/location/set', payload),
    nearestUsers: (payload: any) =>
      site.post('/v1/me/location/nearest-users', payload),
    checkChat: (payload: any) =>
      site.post('v1/me/chats/check', payload),
    feedUnwatched: (payload: any) =>
      site.post('v1/me/feeds/unwatched', payload),
    getAllUser: (payload?: any) =>
      site.post('v1/users/all', payload),
    getMyUser: (payload: any, config: any) =>
      site.post('v1/me', payload, config),
    getUser: (payload: any) =>
      site.post('v1/users/get', payload),
    gift: {
      getGift: (payload: any) =>
        site.post('v1/gifts/all', payload),
      myGift: (payload: any) =>
        site.post('v1/me/gifts/all', payload),
      getAllGifts: (payload: any) =>
        site.post('v1/gifts/available', payload),
    },
    giftAccept: (payload: any) =>
      site.post('v1/me/gifts/accept', payload),
    giftSend: (payload: any) =>
      site.post('v1/me/gifts/send', payload),
    guest: {
      getGuest: (lang: string) => {
        const formData = new FormData();
        formData.append('lang', lang);
        return site.post('v1/guest/get', formData);
      },
    },
    ratingHistory: (payload: any) =>
      site.post('v1/rating-history/get', payload),
    //кто на меня подписан
    selfDestruction: (payload: any) =>
      site.post('v1/me/selfdestruction', payload),
    subscribe: (payload: any) =>
      site.post('v1/users/subscribe', payload),
    subscribersGet: (payload: any) =>
      site.post('v1/users/subscribers/all', payload),
    //на кого я подписан
    subscriptionsGet: (payload: any) =>
      site.post('v1/users/subscriptions/all', payload),
    userStatistics: (payload: any) =>
      site.post('v1/me/statistic/daily/all', payload),
    voteUser: (payload: any) =>
      site.post('v1/users/vote', payload),
    walletInfo: (payload: any) =>
      site.post('v1/me/wallet/info', payload),
    my: {
      approveRequest: (payload: any) =>
        site.post('v1/users/subscribers/requests/approve', payload),
      deleteRequest: (payload: any) =>
        site.post('v1/users/subscribers/requests/delete', payload),
      inviteRequest: (payload: any) =>
        site.post('v1/users/subscribers/requests/all', payload),
      recommend: (payload: any) =>
        site.post('v1/me/recommendations', payload),
    }
  },
  wallet: {
    coinPack: (payload?: any) =>
      site.post('v1/me/wallet/coinpacks/all', payload),
    coinPackBuy: (payload: any) =>
      site.post('v1/me/wallet/coinpacks/buy', payload),
    sendWallet: (payload: any) =>
      site.post('v1/me/wallet/send', payload),
    getMyTransactions: (payload: any) =>
      site.post('v1/me/transactions', payload),
  },
  exchange: {
    getAllOffers: (payload: any) =>
      site.post('v1/exch/offers/all', payload),
    createOffer: (payload: any) =>
      site.post('v1/exch/offers/create', payload),
    editOffer: (payload: any) =>
      site.post('v1/exch/offers/edit', payload),
    myOffer: (payload: any) =>
      site.post('v1/exch/offers/my', payload),
    topOffers: (payload: any) =>
      site.post('v1/exch/offers/top', payload),
    pushOfferToTop: (payload: any) =>
      site.post('v1/exch/offers/top/push', payload),
    getAllProfiles: (payload: any) =>
      site.post('v1/exch/profiles/all', payload),
    createProfile: (payload: any) =>
      site.post('v1/exch/profiles/create', payload),
    profileEdit: (payload: any) =>
      site.post('v1/exch/profiles/edit', payload),
    profileGet: (payload?: any) =>
      site.post('v1/exch/profiles/get', payload),
    getProfilesTop: (payload: any) =>
      site.post('v1/exch/profiles/top', payload),
    pushProfileTop: (payload: any) =>
      site.post('v1/exch/profiles/top/push', payload),
  },
  other: {
    getBanner: (payload: any) =>
      site.post('v1/banners/all', payload),
    getBannerByTag: (payload: any) =>
      site.post('v1/banners/all-by-tag', payload),
    icoAffiliate: (payload: any) =>
      site.post('v1/ico-affiliate', payload),
  }
};