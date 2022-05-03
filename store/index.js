export const state = () => ({
  user: {},
  accessToken: null,
  listPages: [],
  listInsta: [],
  insights: [],
  loading_details: true,
  loading: true,
});
export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_LIST_PAGES(state, listPages) {
    state.listPages = listPages;
  },
  SET_LIST_INSTAGRAM(state, listInsta) {
    state.listInsta = listInsta;
  },
  SET_LOADING_DETAILS(state, detail) {
    state.loading_details = detail;
  },
  SET_LOADING(state, detail) {
    state.loading = detail;
  },
  SET_INSIGHTS(state, detail) {
    state.insights = detail;
  },
  SET_ACCESS_TOKEN(state, token) {
    state.accessToken = token;
  },
};

export const actions = {
  async Login({ commit }, payload) {
    try {
      console.log("payload da função login no store", payload);

      // vai fazer o login na api do ale

      const UserMe = await this.$axios.$get(
        "https://graph.facebook.com/v10.0/me?fields=id,name,email&access_token=" +
          payload.token +
          ""
      );
      console.log("ME", UserMe);
      console.log("ME", UserMe);

      const Login = await this.$axios.$post(
        "/api/auth",
        {
          external_id: UserMe.id,
          email: UserMe.email,
          oauth2_token: payload.token,
          type: "facebook",
        }
      );

      console.log('vai tentar autentica na api do ale')

      const ME_ale = await this.$axios.$get(
        "/api/users/me",
        {
          headers: {
            'Authorization': 'Bearer ' + Login.token
          }
        }
      );

      console.log(ME_ale)

      console.log("Retorno do login na api do Ale " + JSON.stringify(Login));

      let renewToken = await this.$axios.$get("/api/auth/renew", {
        headers: { token: payload.token,
            'Authorization': 'Bearer ' + Login.token
          }
      });

      console.log("Renew Token " + renewToken);

      localStorage.setItem("token", payload.token);
      localStorage.setItem("userID", UserMe.id);
      const data = await this.$axios.$get(
        "https://graph.facebook.com/v10.0/" +
          UserMe.id +
          "/accounts?fields=name,picture.type(large),access_token,instagram_business_account,profile_picture_url,username",
        { headers: { Authorization: `Bearer ${payload.token}` } }
      );
      const resp = data.data;
      console.log(data.data);
      commit("SET_USER", {
        accessToken: payload.token,
        userID: UserMe.id,
      });
      commit("SET_LOADING_DETAILS", false);
      commit("SET_LIST_PAGES", resp);
      commit("SET_LOADING", false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  },

  async uploadCloudinary({ commit }, payload) {
    const cloudinaryPayload = {
      file: payload.file,
      upload_preset: "meu-perfil-deubom",
      public_id: `meu-perfil-deubom`,
    };
    let response = await this.$axios.$post(
      "https://api.cloudinary.com/v1_1/deubom/image/upload",
      cloudinaryPayload
    );
    console.log("cloudinary response", response);
    return response.secure_url;
  },

  async ListInstagram({ commit }, payload) {
    let token = localStorage.getItem("token");
    let pageId = localStorage.getItem("pageId");
    const data = await this.$axios.$get(
      "https://graph.facebook.com/v10.0/" +
        pageId +
        "?fields=instagram_business_account",
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const resp = data;
    // console.log(data.instagram_business_account.id)
    data.instagram_business_account
      ? localStorage.setItem(
          "instagramBusinessId",
          data.instagram_business_account.id
        )
      : "";
    commit("SET_LIST_INSTAGRAM", resp);
    commit("SET_LOADING", false);
    return data.instagram_business_account
      ? data.instagram_business_account.id
      : null;
  },

  async Insights({ commit }, payload) {
    try {
      let token = localStorage.getItem("token");
      let idInstagram = localStorage.getItem("instagramBusinessId");
      const List = [];

      const UserMe = await this.$axios.$get(
        "https://graph.facebook.com/v10.0/me?fields=id,name,email&access_token=" +
          token +
          ""
      );
      console.log("ME", UserMe);
      const Impressions = await this.$axios.$get(
        "https://graph.facebook.com/v10.0/" +
          idInstagram +
          "/insights?metric=impressions,reach&period=week&access_token=" +
          token +
          ""
      );
      console.log("Impressões", Impressions);
      const AudienceLocal = await this.$axios.$get(
        "https://graph.facebook.com/v10.0/" +
          idInstagram +
          "/insights?metric=audience_city&period=lifetime&access_token=" +
          token +
          ""
      );
      console.log("Audience", AudienceLocal.data[0].values[0].value);
      const UserData = await this.$axios.$get(
        "https://graph.facebook.com/v10.0/" +
          idInstagram +
          "?fields=followers_count,name,username,follows_count,media_count,website,biography,profile_picture_url&access_token=" +
          token +
          ""
      );
      console.log("UserData", UserData);
      const UserMedia = await this.$axios.$get(
        "https://graph.facebook.com/v10.0/" +
          idInstagram +
          "/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=" +
          token +
          ""
      );
      console.log("UserMedia", UserMedia);

      console.log("alooo");

      let Audience = AudienceLocal.data[0].values[0].value;
      // console.log('aud', Audience)
      let r = Object.entries(Audience).sort((a, b) => b[1] - a[1]);
      // console.log('r', r)
      let city1Index = r[0][0].indexOf(",");
      let city1 = r[0][0].slice(0, city1Index);
      let city2Index = r[1][0].indexOf(",");
      let city2 = r[1][0].slice(0, city2Index);
      //
      let audienceFinal = city1 + " " + city2;
      console.log("audience store", audienceFinal);
      // console.log('audience store', audienceFinal, 'impressions store', Impressions[0].values[0].value)
      console.log("impressions store", Impressions.data[0].values[0].value);

      const GravaDados = await this.$axios
        .$post("https://deubom.app/socialnetwork", {
          instagram_id: idInstagram,
          external_id: UserMe.id,
          username: UserData.username,
          name: UserMe.name,
          email: UserMe.email,
          bio: UserData.biography,
          profile_picture_url: UserData.profile_picture_url,
          followers: UserData.followers_count,
          following: UserData.follows_count,
          impressions: Impressions.data[0].values[0].value,
          engagement: "0",
          audience: audienceFinal,
          city1: city1,
          city2: city2,
          posts: UserData.media_count,
          token: token,
          indicated: payload.referral ? payload.referral : "",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.log(err));

      commit("SET_INSIGHTS", {
        Impressions: Impressions.data,
        AudienceLocal: AudienceLocal.data,
        UserData: UserData,
        UserMedia: UserMedia.data,
        UserMe: UserMe,
      });
      commit("SET_LOADING", false);
      return console.log("ok");
    } catch (e) {
      console.log("deu ruim");
    }
  },
};
