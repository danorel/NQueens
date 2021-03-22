import React from 'react';

import svgQueen from '../../../../../../../public/images/svg/queen.svg';

import { DivImage, ImageQueen } from "./styles";

interface SlotProps {
    element: number
}

const SlotView : React.FC<SlotProps> = ({ element }: SlotProps) => {
    return <React.Fragment>
        <DivImage>{element === 1
            ? <ImageQueen src={svgQueen}/>
            : null}
        </DivImage>
    </React.Fragment>;
};

export default SlotView;
