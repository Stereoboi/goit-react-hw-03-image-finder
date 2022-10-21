import axios from 'axios';

  export const fetchImage = async (newQuery, newPage) => {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '29643507-3b76bc967b8b60a450e09af03',
        q: newQuery,
        image_type: `photo`,
        orientation: 'horizontal',
        per_page: 12,
        page: newPage
      }
    })
    return response.data.hits;
  };


