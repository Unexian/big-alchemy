function toLowerFirstUpper(str: String) {
    const lowerCaseString = str.toLowerCase(),
    firstLetter = str.charAt(0).toUpperCase(),
    strWithoutFirstChar = lowerCaseString.slice(1)
    return firstLetter + strWithoutFirstChar;
}