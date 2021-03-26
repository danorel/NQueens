import React from "react";

import Slot from "../Slot";

import { RowType } from "../../../../../types";

interface RowProps {
    size: string;
    elements: RowType;
}

const RowView : React.FC<RowProps> = ({ elements, size = 'medium' }: RowProps) => {
    return (<React.Fragment>
        {elements.map(element => <Slot element={element} size={size} />)}
    </React.Fragment>);
};

export default RowView;