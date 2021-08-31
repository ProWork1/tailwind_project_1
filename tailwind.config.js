module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',

                // neutral
                neutral: {
                    white: '#FFFFFF',
                    10: '#F6F8FC',
                    20: '#F1F4F9',
                    30: '#E2E8F0',
                    40: '#CBD4E1',
                    50: '#94A3B8',
                    60: '#64748B',
                    70: '#475569',
                    80: '#27364B',
                    90: '#1E2A3B',
                    100: '#0F1A2A',
                },
                // palette colors
                pink: {
                    DEFAULT: '#CB3668',
                    10: '#FFF2F6',
                    20: '#FFBED4',
                    40: '#E86993',
                    60: '#CB3668',
                    80: '#A61C4A',
                    100: '#750A2E',
                },
                purple: {
                    DEFAULT: '#8219D4',
                    10: '#F5E8FF',
                    20: '#D8AAFD',
                    40: '#AC54F0',
                    60: '#8219D4',
                    80: '#530094',
                    100: '#320059',
                },
                indigo: {
                    DEFAULT: '#4032DC',
                    10: '#EDECFF',
                    20: '#B0A9FF',
                    40: '#7A6DFF',
                    60: '#4032DC',
                    80: '#0E00AB',
                    100: '#0A0075',
                },
                cyan: {
                    DEFAULT: '#007EA8',
                    10: '#EAFAFF',
                    20: '#9FDBEF',
                    40: '#40ADD1',
                    60: '#007EA8',
                    80: '#006182',
                    100: '#004157',
                },
                lime: {
                    DEFAULT: '#638404',
                    10: '#F9FFEA',
                    20: '#D8EE9B',
                    40: '#97B544',
                    60: '#638404',
                    80: '#486300',
                    100: '#354800',
                },
                orange: {
                    DEFAULT: '#CF4920',
                    10: '#FFEFEA',
                    20: '#FFB199',
                    40: '#F47048',
                    60: '#CF4920',
                    80: '#A82700',
                    100: '#621700',
                },

                // semantic colors
                success: {
                    DEFAULT: '#00632B',
                    10: '#E8FCF0',
                    20: '#A5E1BF',
                    40: '#419E6A',
                    60: '#00632B',
                    80: '#00401C',
                    100: '#002611',
                },
                info: {
                    DEFAULT: '#2563EB',
                    10: '#D3E1FE',
                    20: '#7EA5F8',
                    40: '#4D82F3',
                    60: '#2563EB',
                    80: '#0037B3',
                    100: '#002987',
                },
                warning: {
                    DEFAULT: '#976400',
                    10: '#FFF5D5',
                    20: '#FFDE81',
                    40: '#EFB008',
                    60: '#976400',
                    80: '#724B00',
                    100: '#4C2900',
                },
                error: {
                    DEFAULT: '#B01212',
                    10: '#FFEBEB',
                    20: '#FC9595',
                    40: '#D83232',
                    60: '#B01212',
                    80: '#8C0000',
                    100: '#660000',
                },
            },
            fontSize: {
                // title
                title42: ['42px', { lineHeight: '58px' }],
                title32: ['32px', { lineHeight: '40px' }],
                title32: ['24px', { lineHeight: '36px' }],

                // subtitle
                subtitle20: ['20px', { lineHeight: '30px' }],
                subtitle18: ['18px', { lineHeight: '28px' }],

                // body
                body16: ['16px', { lineHeight: '24px' }],
                body14: ['14px', { lineHeight: '22px' }],

                // caption
                caption12: ['12px', { lineHeight: '18px' }],
            },
            boxShadow: {
                small: '0px 1px 1px rgba(9, 30, 66, 0.25), 0px 0px 1px rgba(9, 30, 66, 0.31)',
                medium: '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
                large: '0px 8px 12px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
                xlarge: '0px 18px 28px rgba(9, 30, 66, 0.15), 0px 0px 1px rgba(9, 30, 66, 0.31)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}