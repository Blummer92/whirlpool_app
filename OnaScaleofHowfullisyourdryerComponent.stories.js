/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import OnaScaleofHowfullisyourdryer from "./OnaScaleofHowfullisyourdryerComponent";

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

storiesOf("OnaScaleofHowfullisyourdryer", module)
    .add("default", () => (
        < OnaScaleofHowfullisyourdryer
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
    < OnaScaleofHowfullisyourdryer
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
    < OnaScaleofHowfullisyourdryer
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
