const plugin = require('tailwindcss/plugin');

//TODO - Package these variables as an npm package
const colorBlue10 = '#D1F3FF';
const colorBlue20 = '#A6E4FB';
const colorBlue30 = '#7CD5F7';
const colorBlue40 = '#54c3f1';
const colorBlue50 = '#2DB8F0';
const colorBlue70 = '#0674C1';
const colorBlue80 = '#0D59A3';
const colorBlue90 = '#114484';
const colorBlue100 = '#143466';
const colorGreen10 = '#F4FFE6';
const colorGreen20 = '#D0F8B9';
const colorGreen30 = '#9FF28F';
const colorGreen40 = '#69EB6E';
const colorGreen50 = '#45E46A';
const colorGreen60 = '#13CE66';
const colorGreen70 = '#04A632';
const colorGreen80 = '#007F0E';
const colorGreen90 = '#055700';
const colorGreen100 = '#0B2F00';
const colorGreen110 = '#030800';
const colorYellow10 = '#FCFFE6';
const colorYellow20 = '#FDFFBB';
const colorYellow30 = '#FFF890';
const colorYellow40 = '#FFE667';
const colorYellow50 = '#FFCC3D';
const colorYellow60 = '#D7B834';
const colorYellow70 = '#AFA02E';
const colorYellow80 = '#878429';
const colorYellow90 = '#5C5F21';
const colorYellow100 = '#333717';
const colorYellow110 = '#0E0F07';
const colorRed10 = '#FAF2ED';
const colorRed20 = '#FEE0D2';
const colorRed30 = '#FFC7B5';
const colorRed40 = '#FFAA98';
const colorRed50 = '#FF867B';
const colorRed60 = '#FF4949';
const colorRed70 = '#CE3B2B';
const colorRed80 = '#9C3219';
const colorRed90 = '#6B290F';
const colorRed100 = '#391A08';
const colorRed110 = '#080401';
const colorGrey10 = '#FAFAFA';
const colorGrey20 = '#EBEBEB';
const colorGrey30 = '#DCDCDC';
const colorGrey40 = '#CECECE';
const colorGrey50 = '#BFBFBF';
const colorGrey60 = '#A0A0A0';
const colorGrey70 = '#828282';
const colorGrey80 = '#616161';
const colorGrey90 = '#414141';
const colorGrey100 = '#212121';
const colorBrandPrimary = '#0097E0';

const colorBrandSecondary = colorBlue40;
const colorBrandMediumgrey = colorGrey70;
const colorBrandDarkgrey = colorGrey90;
const colorFeedbackPositive = colorGreen60;
const colorFeedbackWarning = colorYellow50;
const colorFeedbackNegative = colorRed60;

const DAIKIN_PRIMARY_BLUE = colorBrandPrimary;
const DAIKIN_SECONDARY_BLUE = colorBrandSecondary;

const DAIKIN_DARK_GREY = colorBrandDarkgrey;
const DAIKIN_MEDIUM_GREY = colorBrandMediumgrey;

const DAIKIN_NEGATIVE = colorFeedbackNegative;
const DAIKIN_WARNING = colorFeedbackWarning;
const DAIKIN_POSITIVE = colorFeedbackPositive;

const colors = {
    daikinBlue: {
        50: colorBlue10,
        100: colorBlue20,
        200: colorBlue30,
        300: DAIKIN_SECONDARY_BLUE,
        400: colorBlue50,
        500: DAIKIN_PRIMARY_BLUE,
        600: colorBlue70,
        700: colorBlue80,
        800: colorBlue90,
        900: colorBlue100,
        DEFAULT: DAIKIN_PRIMARY_BLUE
    },
    daikinNeutral: {
        50: colorGrey10,
        100: colorGrey20,
        200: colorGrey30,
        300: colorGrey40,
        400: colorGrey50,
        500: colorGrey60,
        600: DAIKIN_MEDIUM_GREY,
        700: colorGrey80,
        800: DAIKIN_DARK_GREY,
        900: colorGrey100
    },
    daikinRed: {
        50: colorRed10,
        100: colorRed20,
        200: colorRed30,
        300: colorRed40,
        400: colorRed50,
        500: DAIKIN_NEGATIVE,
        600: colorRed70,
        700: colorRed80,
        800: colorRed90,
        900: colorRed100,
        1000: colorRed110,
        DEFAULT: DAIKIN_NEGATIVE
    },
    daikinYellow: {
        50: colorYellow10,
        100: colorYellow20,
        200: colorYellow30,
        300: colorYellow40,
        400: DAIKIN_WARNING,
        500: colorYellow60,
        600: colorYellow70,
        700: colorYellow80,
        800: colorYellow90,
        900: colorYellow100,
        1000: colorYellow110,
        DEFAULT: DAIKIN_WARNING
    },
    daikinGreen: {
        50: colorGreen10,
        100: colorGreen20,
        200: colorGreen30,
        300: colorGreen40,
        400: colorGreen50,
        500: DAIKIN_POSITIVE,
        600: colorGreen70,
        700: colorGreen80,
        800: colorGreen90,
        900: colorGreen100,
        1000: colorGreen110,
        DEFAULT: DAIKIN_POSITIVE
    }
};

const fontFamilyBase = 'Roboto';

const daikinPlugin = ({ callback } = { callback: () => {} }) => {
    return plugin.withOptions(
        function () {
            return callback;
        },
        function () {
            return {
                theme: {
                    extend: {
                        colors,
                        fontFamily: {
                            daikinSerif: `${fontFamilyBase}, sans-serif`
                        }
                    }
                }
            };
        }
    );
};

module.exports = daikinPlugin;
