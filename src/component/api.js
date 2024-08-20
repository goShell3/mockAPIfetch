import axios from 'axios';

const fetchShippingDetails = async () => {
  const options = {
    method: 'GET',
    url: 'https://aliexpress-datahub.p.rapidapi.com/shipping_detail',
    params: {
      itemId: '3256804591426248',
      quantity: '1',
      ext: 'bVkg9vW8ihgAMt4XYtZhMB3rnoY6MGI8Sk1gfrl4IGWuBdZZb0gRv5vgI1r5DIn8Rj7mxVzOKbKpyHkmBItRm_k2dtJ1j_gHLTu5zNN9jXHeQploYHEajpnygmD_xKGbi9I_HzxO8TtoIpwdvl5ZfH6o_x5qCBy5D1cUo6t7LoDhx7UTHmFDiCHY0PpHokfJ'
    },
    headers: {
      'x-rapidapi-key': 'eae60adfddmsh8744540bd5b5c0ep13a1dbjsnc6f0b5315594',
      'x-rapidapi-host': 'aliexpress-datahub.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchShippingDetails;
