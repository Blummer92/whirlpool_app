/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Towels from "./TowelsComponent";

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

storiesOf("Towels", module)
    .add("default", () => < Towels
{...
    myProps
}
{...
    actions
}
/>)
    .add("pinned", () => < Towels
{...
    myProps
}
pinned = {true}
{...
    actions
}
/>)
    .add("archived", () => < Towels
{...
    myProps
}
archived = {true}
{...
    actions
}
/>);
