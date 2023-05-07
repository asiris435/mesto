export default class UserInfo {
    constructor (profileInfoConfig) {
        this._nameProfile = document.querySelector(profileInfoConfig.nameProfileSelector);
        this._jobProfile = document.querySelector(profileInfoConfig.jobProfileSelector);
    }

    getUserInfo () {
        return {username: this._nameProfile.textContent, job: this._jobProfile.textContent};
    }

    setUserInfo (userData) {
        this._nameProfile.textContent = userData.username;
        this._jobProfile.textContent = userData.job; 
    }
}