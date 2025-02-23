import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL: `https://raw.githubusercontent.com/shetdisha94/mock-front-data/refs/heads/main`,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }}
);

export default {
    getCampaigns() {
      return apiClient.get('campagin-mock.json')
    }
}
