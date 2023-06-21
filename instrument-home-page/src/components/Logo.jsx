import React from 'react'
import { motion } from 'framer-motion'

export const Logo = ({isMainLogo}) => {
    if (isMainLogo) return (
        <svg
            viewBox='0 0 1824 189'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-black'>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.1 }}
					d='M0 183.495H86.2815V4.58737H0V183.495Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.15 }}
					d='M93.5816 183.495H175.274V118.538L204.646 183.495H291.478V4.58737H209.786V69.5446L180.414 4.58737H93.5816V183.495Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					d='M383.912 188.083C443.942 188.083 470.378 166.247 470.378 123.309C470.378 89.1786 452.57 74.866 408.328 66.7922C383.545 62.3883 378.956 60.7369 378.956 54.865C378.956 52.6631 381.342 50.8281 383.912 50.8281C387.951 50.8281 390.888 54.1311 390.888 58.7184V62.2049H468.358V59.2689C468.358 19.267 438.435 0 383.545 0C325.535 0 299.1 22.9369 299.1 61.1039C299.1 93.766 315.989 105.877 359.864 115.969C386.115 121.841 392.173 122.391 392.173 128.63C392.173 130.832 390.521 133.584 386.299 133.584C382.995 133.584 378.956 129.548 378.956 124.777V122.208H296.162V122.942C296.162 164.412 318.192 188.083 383.912 188.083Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.25 }}
					d='M512.209 183.495H598.49V77.068H636.124V4.58737H473.107V77.068H512.209V183.495Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}
					d='M641.625 183.495H722.399V130.282H722.767C729.008 130.282 731.028 131.016 731.028 140.557V183.495H811.802V145.879C811.802 112.483 804.459 105.693 769.028 102.574V101.473C796.381 97.4359 812.536 86.6097 812.536 58.7184C812.536 20.9184 789.405 4.58737 731.945 4.58737H641.625V183.495ZM725.52 87.8942H722.216V62.5718H725.52C729.926 62.5718 731.945 66.6087 731.945 75.7835C731.945 84.2243 729.926 87.8942 725.52 87.8942Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.35 }}
					d='M912.032 189C975.183 189 1006.21 163.494 1006.21 101.656V4.58737H916.255V109.18C916.255 116.152 915.337 118.354 912.032 118.354C908.728 118.354 907.626 116.152 907.626 109.18V4.58737H817.673V101.656C817.673 162.76 841.538 189 912.032 189Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.4 }}
					d='M1013.62 183.495H1093.48V86.9767L1111.1 183.495H1170.76L1188.57 85.1417V183.495H1268.43V4.58737H1155.71L1142.86 74.3155L1130.01 4.58737H1013.62V183.495Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.45 }}
					d='M1450.12 183.495V117.987H1365.67V109.73H1450.12V75.4165H1365.67V67.1592H1450.12V4.58737H1275.72V183.495H1450.12Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					d='M1457.51 183.495H1539.2V118.538L1568.57 183.495H1655.4V4.58737H1573.71V69.5446L1544.34 4.58737H1457.51V183.495Z'></motion.path>
				<motion.path
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.55 }}
					d='M1700.09 183.495H1786.37V77.068H1824V4.58737H1660.98V77.068H1700.09V183.495Z'></motion.path>
			</svg>
        
    )
    else return (
        <svg xmlns="http://www.w3.org/2000/svg" width="191" height="20" viewBox="0 0 402 42" fill="none">
            <path d="M0.0999756 0.999999H18.1V40H0.0999756V0.999999Z" fill="black"/>
            <path d="M21.3109 0.999999H39.2309L47.2309 15.96V0.999999H64.0309V40H46.1109L38.1109 25.04V40H21.3109V0.999999Z" fill="black"/>
            <path d="M84.6068 41C80.4202 41 76.9135 40.4667 74.0869 39.4C71.2869 38.3333 69.1802 36.7467 67.7669 34.64C66.3535 32.5333 65.6469 29.92 65.6469 26.8V26.84H83.4869V27.2C83.4869 27.7333 83.6469 28.1867 83.9669 28.56C84.2869 28.9333 84.6735 29.12 85.1269 29.12C85.5535 29.12 85.8602 29.0133 86.0469 28.8C86.2602 28.56 86.3669 28.2667 86.3669 27.92C86.3669 27.5467 86.2202 27.2267 85.9269 26.96C85.6602 26.6933 85.1535 26.44 84.4069 26.2C83.6869 25.9333 82.5935 25.6267 81.1269 25.28L79.3669 24.88C76.0069 24.1067 73.4068 23.28 71.5668 22.4C69.7535 21.52 68.4202 20.3867 67.5668 19C66.7135 17.5867 66.2868 15.6933 66.2868 13.32C66.2868 9.02666 67.7268 5.73333 70.6068 3.44C73.5135 1.14667 78.0202 0 84.1269 0C90.1002 0 94.6335 1.08 97.7269 3.24C100.847 5.37333 102.407 8.6 102.407 12.92V13.36H85.7269V12.8C85.7269 12.2933 85.5802 11.88 85.2868 11.56C85.0202 11.24 84.6602 11.08 84.2069 11.08C83.8869 11.08 83.6202 11.1733 83.4069 11.36C83.1935 11.52 83.0869 11.7733 83.0869 12.12C83.0869 12.5733 83.2469 12.9467 83.5669 13.24C83.9135 13.5333 84.5269 13.8133 85.4069 14.08C86.3135 14.32 87.6735 14.6133 89.4869 14.96C92.7669 15.5733 95.3669 16.3733 97.2868 17.36C99.2335 18.3467 100.647 19.6 101.527 21.12C102.407 22.64 102.847 24.56 102.847 26.88C102.847 31.5733 101.34 35.1067 98.3269 37.48C95.3135 39.8267 90.7402 41 84.6068 41Z" fill="black"/>
            <path d="M112.37 16.8H103.85V0.999999H138.57V16.8H130.37V40H112.37V16.8Z" fill="black"/>
            <path d="M141.389 0.999999H161.389C165.682 0.999999 169.136 1.41333 171.749 2.24C174.362 3.06666 176.269 4.34666 177.469 6.08C178.669 7.78666 179.269 10.0267 179.269 12.8C179.269 15.7067 178.469 17.88 176.869 19.32C175.296 20.7333 172.936 21.6667 169.789 22.12V22.36C172.482 22.6 174.469 23 175.749 23.56C177.029 24.0933 177.909 24.9733 178.389 26.2C178.869 27.4267 179.109 29.2933 179.109 31.8V40H161.509V30.64C161.509 29.9467 161.442 29.4533 161.309 29.16C161.176 28.84 160.949 28.64 160.629 28.56C160.309 28.4533 159.789 28.4 159.069 28.4H158.989V40H141.389V0.999999ZM160.109 18.76C160.642 18.76 161.029 18.56 161.269 18.16C161.509 17.7333 161.629 17.0533 161.629 16.12C161.629 15.1067 161.509 14.3733 161.269 13.92C161.029 13.4667 160.642 13.24 160.109 13.24H158.989V18.76H160.109Z" fill="black"/>
            <path d="M200.983 41.2C196.13 41.2 192.263 40.5467 189.383 39.24C186.503 37.9067 184.423 35.8667 183.143 33.12C181.863 30.3467 181.223 26.6933 181.223 22.16V0.999999H199.503V24.2C199.503 25 199.597 25.5733 199.783 25.92C199.997 26.24 200.397 26.4 200.983 26.4C201.57 26.4 201.957 26.24 202.143 25.92C202.33 25.6 202.423 25.0267 202.423 24.2V0.999999H220.703V22.16C220.703 28.7733 219.063 33.6 215.783 36.64C212.53 39.68 207.597 41.2 200.983 41.2Z" fill="black"/>
            <path d="M223.928 0.999999H248.088L251.688 17L255.288 0.999999H278.648V40H262.448V18.56L256.968 40H245.568L240.128 18.96V40H223.928V0.999999Z" fill="black"/>
            <path d="M281.858 40V0.999999H318.258V14.32H299.858V16.44H318.258V23.92H299.858V26.04H318.258V40H281.858Z" fill="black"/>
            <path d="M321.467 0.999999H339.387L347.387 15.96V0.999999H364.187V40H346.267L338.267 25.04V40H321.467V0.999999Z" fill="black"/>
            <path d="M375.143 16.8H366.623V0.999999H401.343V16.8H393.143V40H375.143V16.8Z" fill="black"/>
        </svg>
    )
}
