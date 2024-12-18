 


    const images =
 require.context ('../public/imgs',false, /\.(jpg|png?)$/);
 const imagesKeys = images.keys();
 const imagesList = imagesKeys.map((key) => images(key));
 export default imagesList;