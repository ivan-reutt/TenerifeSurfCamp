import React, { useState, useEffect } from "react";
import { Modal } from "src/components/Modal";
import { ArrowRight } from "components/icons/ArrowRight";
import {
    InfoBlockSC,
    InfoItemSC,
    InfoItemsWrapperSC,
    ItemTextSC,
    IconSC,
    WeatherItemSC,
    TemparatureSC,
    WeatherItemWrapperSC,
    WeatherTextSC,
    BigCelsiusSC,
    SmallCelsiusSC,
    WeatherIconWrapperSC,
} from "./styled";
import { Trans } from "gatsby-plugin-react-i18next";
import { ModalContent } from "./ModalContent";
import { marineDataUrl, weatherDataUrl } from "./constants";

export enum ModalType {
    PRICE = "Price",
    SURF = "Surf",
}

interface IMeteo {
    temperature?: string;
    conditionIconPath?: string;
    waterTemp?: string;
    waveHeight?: string;
}

export const InfoBlock: React.FC = () => {
    const [modalType, setModalType] = useState<ModalType | undefined>();
    const [meteoData, setMeteoData] = useState<IMeteo>();

    const handleClickPrice = () => {
        setModalType(ModalType.PRICE);
        document.body.classList.add("modal-open");
    };

    const handleClickSurf = () => {
        setModalType(ModalType.SURF);
        document.body.classList.add("modal-open");
    };

    const handleClose = () => {
        setModalType(undefined);
    };

    useEffect(() => {
        fetch(weatherDataUrl)
            .then((response) => response.json())
            .then((resultData) => {
                const temperature = resultData.current.temp_c;
                const conditionIconPath = resultData.current.condition.icon;
                setMeteoData((prev) => ({
                    ...prev,
                    temperature,
                    conditionIconPath,
                }));
            });
        fetch(marineDataUrl)
            .then((response) => response.json())
            .then((resultData) => {
                const date = new Date();
                const hours = date.getHours();
                const waveHeight = resultData.hourly.wave_height[hours];
                setMeteoData((prev) => ({
                    ...prev,
                    waveHeight,
                }));
            });
    }, []);

    return (
        <>
            <InfoBlockSC>
                <WeatherItemWrapperSC
                    target="blank"
                    href="https://www.windy.com/28.053/-16.717?28.047,-16.730,12"
                >
                    <ItemTextSC>
                        <Trans i18nKey={"weather"}>Погода на Тенерифе</Trans>
                    </ItemTextSC>
                    <WeatherItemSC>
                        <WeatherIconWrapperSC>
                            <img
                                src={meteoData?.conditionIconPath}
                                alt="weather condition"
                            />
                        </WeatherIconWrapperSC>
                        <TemparatureSC>{meteoData?.temperature}</TemparatureSC>
                        <BigCelsiusSC>C</BigCelsiusSC>
                    </WeatherItemSC>
                    {/* <WeatherItemSC>
                        <WeatherTextSC>
                            <Trans i18nKey={"waterTemp"}>
                                Температура воды на Тенерифе
                            </Trans>
                        </WeatherTextSC>
                        <p>{meteoData?.waterTemp}</p>
                        <SmallCelsiusSC>C</SmallCelsiusSC>
                    </WeatherItemSC> */}
                    <WeatherItemSC>
                        <WeatherTextSC>
                            <Trans i18nKey={"waveHeight"}>Высота волн</Trans>
                        </WeatherTextSC>
                        <p>🌊 ⇧{meteoData?.waveHeight}m</p>
                    </WeatherItemSC>
                </WeatherItemWrapperSC>
                <InfoItemsWrapperSC>
                    <InfoItemSC onClick={handleClickPrice}>
                        <ItemTextSC>
                            <Trans i18nKey={"prices"}>Цены на Тенерифе</Trans>
                        </ItemTextSC>
                        <IconSC>
                            <ArrowRight color="#000" />
                        </IconSC>
                    </InfoItemSC>
                    <InfoItemSC onClick={handleClickSurf}>
                        <ItemTextSC>
                            <Trans i18nKey={"surfing"}>
                                Серфинг на Тенерифе
                            </Trans>
                        </ItemTextSC>
                        <IconSC>
                            <ArrowRight color="#000" />
                        </IconSC>
                    </InfoItemSC>
                </InfoItemsWrapperSC>
            </InfoBlockSC>
            {modalType && (
                <Modal onClose={handleClose} withPadding={true}>
                    <ModalContent modalType={modalType} />
                </Modal>
            )}
        </>
    );
};
