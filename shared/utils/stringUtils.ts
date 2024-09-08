export const splitNameFromFullName = (name: string) => {
    const [firstname, lastname] = name.split(' ');
    return [firstname, lastname]
}