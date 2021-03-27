import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';

const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            thumb: {
                color: '#f3457d',
                backgroundColor: "#69ff79",
                border: '1px white solid'
            },
            track: {
                color: '#69ff79'
            },
            rail: {
                color: '#151515'
            }
        }
    }
});

interface SliderProps {
    value: number;
    disabled: boolean;

    onChange(event: React.ChangeEvent<{}>, value: number | number[]): Promise<void>;
}

export default function SizeSlider(props: SliderProps) {
    return (
        <React.Fragment>
            <ThemeProvider theme={muiTheme}>
                <Slider
                    disabled={props.disabled}
                    defaultValue={8}
                    value={props.value}
                    onChange={props.onChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={4}
                    max={10}
                />
            </ThemeProvider>
        </React.Fragment>
    );
}
