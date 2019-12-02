/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import TryWhatSWrongwithmyWhirlpoolDryer from "./TryWhatSWrongwithmyWhirlpoolDryerComponent";

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

storiesOf("TryWhatSWrongwithmyWhirlpoolDryer", module)
    .add("default", () => (
        < TryWhatSWrongwithmyWhirlpoolDryer
{...
    myProps
}
{...
    actions
}
/>
))
.
add("pinned", () => (
    < TryWhatSWrongwithmyWhirlpoolDryer
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
    < TryWhatSWrongwithmyWhirlpoolDryer
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
