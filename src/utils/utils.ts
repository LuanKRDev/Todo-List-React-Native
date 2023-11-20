export const VerifyTextEmpty = (value: string): boolean => {
    let regex = /^.*\S+.*$/;
    return !regex.test(value)
}