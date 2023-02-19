import axios from 'axios'
import { setDataLoading, setDataError, setDataSuccess } from './Fixed'

const USERURL = 'https://stage.getbani.com/api/v1/comhub/direct_payment_page_details'

export const FixedPayment = (page_ref) => (dispatch) => {
  dispatch(setDataLoading())
  axios
    .get(`${USERURL}/${page_ref}`)
    .then((response) => {
      dispatch(setDataSuccess(response.data.data))
    })
    .catch((error) => {
      console.log(error)
      dispatch(setDataError(error.message))
    })
}
