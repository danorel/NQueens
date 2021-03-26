import React from 'react';

import svgQueen from '../../../../../../../public/images/svg/queen-in-red.svg';

import {
    DivImageSmall,
    DivImageMedium,
    DivImageLarge,
    ImageQueenSmall,
    ImageQueenMedium,
    ImageQueenLarge,
} from "./styles";

interface SlotProps {
    size: string,
    element: number
}

const SlotView : React.FC<SlotProps> = ({ element, size = 'small' }: SlotProps) => {
    switch (size) {
        case 'small':
            return (<React.Fragment>
                <DivImageLarge>{element
                    ? <ImageQueenLarge src={svgQueen}/>
                    : null}
                </DivImageLarge>
            </React.Fragment>);

        case 'medium':
            return (<React.Fragment>
                <DivImageMedium>{element
                    ? <ImageQueenMedium src={svgQueen}/>
                    : null}
                </DivImageMedium>
            </React.Fragment>);

        case 'large':
            return (<React.Fragment>
                <DivImageSmall>{element
                    ? <ImageQueenSmall src={svgQueen}/>
                    : null}
                </DivImageSmall>
            </React.Fragment>);
    }

    return (<React.Fragment>
        <DivImageMedium>{element
            ? <ImageQueenMedium src={svgQueen}/>
            : null}
        </DivImageMedium>
    </React.Fragment>);
};

export default SlotView;
