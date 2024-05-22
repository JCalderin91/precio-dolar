import * as cheerio from 'cheerio';

export const getDollar = async () => {
    try {
        const response = await fetch('https://www.bcv.org.ve/');
        const html = await response.text()
        const $ = cheerio.load(html)

        const dollarText = $('#dolar .centrado strong').text()

        const dollar = dollarText ? parseFloat(dollarText.replace(',', '.')) : 0;
        return dollar;
    } catch (error) {
        console.error('Error al obtener el valor del dólar:', error);
        return 0;
    }
};