const splitString = (str: string): [string, string] => {
    const spaceIndex: number = str.indexOf(' ');

    if (spaceIndex === -1) {
        return [str, ''];
    }

    const firstPart: string = str.substring(0, spaceIndex);
    const secondPart: string = str.substring(spaceIndex + 1);

    return [firstPart, secondPart];
};

export default splitString;