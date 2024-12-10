import { IInputs, IOutputs } from "./generated/ManifestTypes";
import App from "./resources/App";
import * as React from "react";

export class imagedit implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private notifyOutputChanged: () => void;

    constructor() { }

    
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const sampleProperty = context.parameters.sampleProperty.raw || "https://avatarfiles.alphacoders.com/161/161002.jpg";
        return React.createElement(
            App, { sampleProperty : sampleProperty }
        );
    }


    public getOutputs(): IOutputs {
        return { };
    }

  
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
