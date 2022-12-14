import React from "react";
import { LoadingProps } from "../../domain/entity/structures/propsStructure";

export const LoadingPage: React.FC<LoadingProps> = ({text}) => {
    return (
        <div className="h-10" data-testid="loading-page">
            <h3>
                {text}
            </h3>
        </div>
    )
}