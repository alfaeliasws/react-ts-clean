import React, { useEffect } from "react";
import { MappedContentProps } from "../../domain/entity/structures/propsStructure";
import { CardMapped } from "../view-components/CardMapped";

export const MappedView: React.FC<MappedContentProps> = ({data, onClick}) => {

    return (
        <div className="flex flex-wrap w-full justify-center">
            {
                data.map((item) => {
                    return (
                    <div key={item.id}>
                        <button className="border-none bg-neutral-100 cardMapped" value={item.id} onClick={onClick}>
                            <CardMapped data={item}/>
                        </button>
                    </div>
                    )
                })
                }
        </div>
    )
}