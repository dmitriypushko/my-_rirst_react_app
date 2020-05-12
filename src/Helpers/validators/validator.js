const requiredField = (value) => {
    if (value) {
        return undefined
    }
    else return 'Field is required'
};
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength ) return `max length is ${maxLength} symbols`;
     return undefined
};
export default requiredField;