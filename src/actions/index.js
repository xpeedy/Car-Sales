export const ADD_ADDITIONAL_FEATURE = "ADD_ADDITIONAL_FEATURE";


export const addAdditionalFeature = (feature) => {
    return { type: ADD_ADDITIONAL_FEATURE, payload: feature };
}