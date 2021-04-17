import CampaignService from '../services/CampaignService';

export const state = {
    campaignList : []
};

export const mutations = {
    SET_CAMPAIGNS(state, value){
        state.campaignList = value;
    }
};

export const actions = {
    fetchCampaigns({commit, dispath}) {
        CampaignService.getCampaigns().then( response => {
            commit('SET_CAMPAIGNS', response.data)
        })
    }
};


export const getters = {};