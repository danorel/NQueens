import React from "react";

import Slot from "../Slot";

import { RowType } from "../../../../../types";

interface RowProps {
    elements: RowType
}

const RowView : React.FC<RowProps> = ({ elements }: RowProps) => {
    return (<React.Fragment>
        {elements.map(element => <Slot element={element}/>)}
    </React.Fragment>);
};

export default RowView;