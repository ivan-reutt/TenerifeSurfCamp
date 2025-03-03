import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

export const SURF_TITLE = (
    <Trans i18nKey={"surfing"}>Серфинг на Тенерифе</Trans>
);
export const PRICE_TITLE = <Trans i18nKey={"prices"}>Цены на Тенерифе</Trans>;

export const SURF_TEXT = [
    <Trans i18nKey={"surfModalText"}>
        Тенерифе - лучшее место для серфинга в Европе! Когда речь заходит о том,
        где обучиться серфингу в Европе многие думают о Португалии и считают,
        что там самые лучшие волны в мире. Не совсем так, Португалия известна
        самой большой волной в мире. Это так, но формируется эта волна только в
        одном местечке и только в определенные месяцы.Канары же - это
        европейские Гавайи! Тут сезон серфинга круглый год! Вода всегда теплая,
        а если говорить о юге острова Тенерифе, то тут примерно 360 солнечных
        дней в году. И зимой и летом температура воздуха около +25!Обилие спотов
        для серфинга позволяют подобрать самое удобное место для обучения. На
        острове хватает мест с крупной атлантической волной, но в тоже время
        всегда есть места с комфортными волнишками для обучения, подходящей по
        вашему уровню катания.
    </Trans>,
];
export const PRICE_TEXT = [
    <Trans i18nKey={"priceModalText-1"}>
        На острове взимают налог с продаж 5%, тогда как в остальной части
        Испании — 22%. Из-за этого цены на еду и алкогольные напитки на Тенерифе
        невысокие. Местные жители любят завтракать кофе с булочкой — это стоит
        2-2,5€. Большинство туристов на острове — англичане, поэтому в кафе и
        ресторанах предлагают британский завтрак за 3€. В него входит стаканчик
        натурального апельсинового сока, кофе, два жареных куриных яйца, бекон,
        нарезанный помидор, лист салата и тост с джемом и маслом. Самые дорогие
        — норвежские завтраки по 9€. Они включают стаканчик апельсинового сока,
        два вареных яйца, копченую колбасу или соленый лосось, хлеб, круассан,
        джем, масло и чашечку кофе.
    </Trans>,
    <Trans i18nKey={"priceModalText-2"}>
        Средний чек в бюджетном ресторане — 8-20€ на человека. Порции большие.
        Бизнес-ланчи есть во многих заведениях. С 12:00 до 16:00 посетителям
        предлагают фиксированное меню за 7-12€ — салат или закуска, основное
        блюдо, безалкогольный напиток или бокал вина. Цены на еду в кафе и
        ресторанах Тенерифе в 2023 году: паэлья с морепродуктами — 7€; пицца —
        6€; паста — 6,5€; большая тарелка морепродуктов — 12€; блюдо из
        осьминога — 6-20€; шашлык из королевских креветок — 19€; стейк из
        средиземноморской акулы — 23€; бокал сангрии — 2,5€.
    </Trans>,
];

export const marineDataUrl =
    "https://marine-api.open-meteo.com/v1/marine?latitude=28.064&longitude=-16.7301&hourly=wave_height&timezone=auto&start_date=2023-08-24&end_date=2023-08-24";
export const weatherDataUrl =
    "https://api.weatherapi.com/v1/current.json?key=f1208fc58678476ebe072935232408&q=costa%20adeje&aqi=no";
