import React from 'react';

import Slider from '@material-ui/core/Slider';

interface SliderProps {
    value: number;
    disabled: boolean;

    onChange(event: React.ChangeEvent<{}>, value: number | number[]): Promise<void>;
}

export default function SizeSlider(props: SliderProps) {
    return (
        <React.Fragment>
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
        </React.Fragment>
    );
}
