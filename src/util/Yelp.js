const apiKey = 'xn6KLZ9XrpyuDfC_hE9FXVBcDtZPatveN3jIch87AAK5XyXVyuOA-Ho290mxG0GXu29eiK4fYprGj3tSkC56-CjaEmTE2YVnNvyw_SGxUeAtbo9wSgL7cMxN23nEXXYx';

const Yelp = {

};

const search = (term, location, sortBy) => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    { headers: { Authorization: `Bearer ${apiKey}`} }
  ).then(response => {
    return response.json;
  }).then(jsonResponse => {
    if (jsonResponse.businesses) {
      jsonResponse.businesses.map(business => {
        return {
          imageSrc: business['image_url'],
          name: business['name']
          address: business['address1'],
          city: business['city'],
          state: business['state'],
          zipCode: business['zip_code'],
          category: business['categories'][0]['title'],
          rating: business['rating'],
          reviewCount: business['review_count']
        }
      })
    }
  })
};