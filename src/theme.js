const theme =  {
    heading3Size: '12pt',
    heading2Size: '14pt',
    heading1Size: '18pt',
    normalSize: '10pt',
    buttonWidth: '180px',
    primaryColor: 'black',
    secondaryColor: 'blue',
};

export default function fromTheme(property) {
    return theme[property];
};