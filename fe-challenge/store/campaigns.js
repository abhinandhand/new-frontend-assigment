import CampaignService from '../services/CampaignService';

export const state = {
    campaignList : [],
    networkError: false,
};

export const mutations = {
    SET_CAMPAIGNS(state, value){
        state.campaignList = value;
    },
    SET_NETWORK_ERROR(state, value){
        state.networkError = true;
    }
};

export const actions = {
    fetchCampaigns({commit, dispath}) {
        CampaignService.getCampaigns().then( response => {
            commit('SET_CAMPAIGNS', response.data)
        }).catch(error => {
            commit('SET_NETWORK_ERROR');
        })
    }
};

export const getters ={
    networkStatus: state => state.networkError,
}
