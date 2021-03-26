import React from "react";

import { Grid } from "@material-ui/core";

import {
    ButtonNext,
    ButtonRegime,
    ButtonContinue,
    ButtonNextDisabled
} from "./styles";


interface BarProps {
    isFull: boolean;
    isAutomatic: boolean;

    onClickPerform(): Promise<void>;
    onClickSwitch(): void;
    onClickContinue(): void;
}


const BarView = (props: BarProps) => {

    if (props.isAutomatic && props.isFull)
        return (<React.Fragment>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}>
                <Grid item>
                    <ButtonRegime type="button" onClick={props.onClickContinue}>Automatic
                        👻</ButtonRegime>
                </Grid>
                <Grid item>
                    <ButtonContinue type="button"
                                    onClick={props.onClickContinue}>Agree
                        📞</ButtonContinue>
                </Grid>
            </Grid>
        </React.Fragment>);

    if (props.isAutomatic && !props.isFull)
        return (<React.Fragment>
            <ButtonRegime type="button" onClick={props.onClickContinue}>Automatic
                👻</ButtonRegime>
        </React.Fragment>);

    if (!props.isAutomatic && props.isFull)
        return (<React.Fragment>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={2}>
                <Grid item>
                    <ButtonRegime type="button"
                                  onClick={props.onClickSwitch}> Manual
                        🛠</ButtonRegime>
                    {props.isFull
                        ? <ButtonNextDisabled type="button" disabled={true} onClick={props.onClickPerform}>Next 🤌</ButtonNextDisabled>
                        :  <ButtonNext type="button"
                                       onClick={props.onClickPerform}>Next
                            🤌</ButtonNext>}
                </Grid>
                <Grid item>
                    <ButtonContinue type="button"
                                    onClick={props.onClickContinue}>Agree
                        📞</ButtonContinue>
                </Grid>
            </Grid>
        </React.Fragment>);

    return (<React.Fragment>
        <ButtonRegime type="button"
                      onClick={props.onClickSwitch}> Manual
            🛠</ButtonRegime>
        <ButtonNext type="button" disabled={props.isFull}
                    onClick={props.onClickPerform}>Next
            🤌</ButtonNext>
    </React.Fragment>);
}

export default BarView;