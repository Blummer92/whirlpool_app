/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Didyoucleanthelint from "./DidyoucleanthelintComponent";

export const myProps = {
    id: "1",
    className: "mySampleClass",
    sampleString: "Test Task",
    sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
    onActionOne: action("onActionOne"),
    onActionTwo: action("onActionTwo")
};

storiesOf("Didyoucleanthelint", module)
    .add("default", () => < Didyoucleanthelint
{...
    myProps
}
{...
    actions
}
/>)
    .add("pinned", () => (
        < Didyoucleanthelint
{...
    myProps
}
pinned = {true}
{...
    actions
}
/>
))
.
add("archived", () => (
    < Didyoucleanthelint
{...
    myProps
}
archived = {true}
{...
    actions
}
/>
))
;
