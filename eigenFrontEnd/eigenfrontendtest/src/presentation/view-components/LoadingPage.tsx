import React from "react";

export const LoadingPage: React.FC = () => {
    return (
        <div className="h-10" data-testid="loading-page">
            <h3 className="animate-bounce">
                Loading...
            </h3>
        </div>
    )
}