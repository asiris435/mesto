export default class UserInfo {
    constructor (profileInfoConfig) {
        this._nameProfile = document.querySelector(profileInfoConfig.nameProfileSelector);
        this._jobProfile = document.querySelector(profileInfoConfig.jobProfileSelector);
        this._avatarProfile = document.querySelector(profileInfoConfig.avatarProfileSelector);
    }

    getUserInfo () {
        return {username: this._nameProfile.textContent, job: this._jobProfile.textContent};
    }

    setUserInfo ({ username, job, avatar }) {
        this._nameProfile.textContent = username;
        this._jobProfile.textContent = job;
        this._avatarProfile.src = avatar; 
    }
}