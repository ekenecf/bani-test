// Create actions and reducers
export const ActionTypes = {
  FETCH_FIXED_DATA_LOADING: 'FETCH_FIXED_DATA_LOADING',
  FETCH_FIXED_DATA_ERROR: 'FETCH_FIXED_DATA_ERROR',
  FETCH_FIXED_DATA: 'FETCH_FIXED_DATA',
  PHONE_NUMBER: 'PHONE_NUMBER',
  COUNTRY_CODE: 'COUNTRY_CODE',
  INCREMENTCOUNTER: 'INCREMENTCOUNTER',
  DECREMENTCOUNTER: 'DECREMENTCOUNTER',
  SETEMAILINPUT: 'SETEMAILINPUT',
  SETFIRSTNAME: 'SETFIRSTNAME',
  SETLASTNAME: 'SETLASTNAME',
  MESSAGE: 'MESSAGE',
  PAYMENT: 'PAYMENT',
}

export const setDataSuccess = (data) => ({
  type: ActionTypes.FETCH_FIXED_DATA,
  payload: data,
})

export const setPhoneNumber = (data) => ({
  type: ActionTypes.PHONE_NUMBER,
  payload: data,
})

export const setCountryCode = (data) => ({
  type: ActionTypes.COUNTRY_CODE,
  payload: data,
})

export const setIncrementCounter = () => ({
  type: ActionTypes.INCREMENTCOUNTER,
  //   payload: data,
})

export const setDecrementCounter = () => ({
  type: ActionTypes.DECREMENTCOUNTER,
  //   payload: data,
})

export const setDataLoading = () => ({
  type: ActionTypes.FETCH_FIXED_DATA_LOADING,
})

export const setDataError = (data) => ({
  type: ActionTypes.FETCH_FIXED_DATA_ERROR,
  payload: data,
})

export const setEmail = (data) => ({
  type: ActionTypes.SETEMAILINPUT,
  payload: data,
})

export const setFirstName = (data) => ({
  type: ActionTypes.SETFIRSTNAME,
  payload: data,
})

export const setlastName = (data) => ({
  type: ActionTypes.SETLASTNAME,
  payload: data,
})
export const setMessage = (data) => ({
  type: ActionTypes.MESSAGE,
  payload: data,
})
export const setPayment = (data) => ({
  type: ActionTypes.PAYMENT,
  payload: data,
})

const initialState = {
  loading: false,
  data: [],
  error: [],
  phoneNumber: '',
  country_code: '',
  increment_counter: 1,
  //   decrement_counter: 0,
  emailInput: '',
  FirstName: '',
  lastName: '',
  message: '',
  payment: '',
}

const fixedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_FIXED_DATA_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.FETCH_FIXED_DATA:
      return {
        ...state,
        data: payload,
      }
    case ActionTypes.PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: payload,
      }
    case ActionTypes.INCREMENTCOUNTER:
      return {
        ...state,
        increment_counter: (state.increment_counter += 1),
      }
    case ActionTypes.DECREMENTCOUNTER:
      if (state.increment_counter === 0) {
        return {
          ...state,
          increment_counter: 0,
        }
      }
      return {
        ...state,
        increment_counter: (state.increment_counter -= 1),
      }
    case ActionTypes.COUNTRY_CODE:
      return {
        ...state,
        country_code: payload,
      }
    case ActionTypes.FETCH_FIXED_DATA_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case ActionTypes.SETEMAILINPUT:
      return {
        ...state,
        emailInput: payload,
      }
    case ActionTypes.SETFIRSTNAME:
      return {
        ...state,
        FirstName: payload,
      }
    case ActionTypes.SETLASTNAME:
      return {
        ...state,
        lastName: payload,
      }
    case ActionTypes.MESSAGE:
      return {
        ...state,
        message: payload,
      }
    case ActionTypes.PAYMENT:
      return {
        ...state,
        payment: payload,
      }
    default:
      return state
  }
}
export default fixedReducer
