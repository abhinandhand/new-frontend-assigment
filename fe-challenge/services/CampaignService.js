import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL: `https://run.mocky.io/v3`,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
);

export default {
    getCampaigns() {
      return apiClient.get('/85e0a8f4-2c7c-4cf4-bced-b53060307733')
    }
}