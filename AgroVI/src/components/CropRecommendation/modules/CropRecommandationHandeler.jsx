import { dataFetch_at_8000,dataFetch_at_5000 } from "../../../../Hooks/axiosFetch";

const CropRecommandationHandeler= async(e,values)=>{
    e.preventDefault();
    const {prediction} = await dataFetch_at_5000('crop_recommendation', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(values),
    })

   const {crop_data} = await dataFetch_at_8000('get_crop_data',{
    method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({value:prediction})
    })
  return crop_data
}

export default CropRecommandationHandeler