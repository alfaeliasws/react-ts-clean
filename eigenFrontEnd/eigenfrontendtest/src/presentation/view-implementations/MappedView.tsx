import React from "react";
import { MappedContentProps } from "../../domain/entity/structures/propsStructure";
import { CardMapped } from "../view-components/CardMapped";
import { useFade } from "../view-others/hook";

export const MappedView: React.FC<MappedContentProps> = ({data, onClick}) => {

    useFade('fade-1')

    return (
        <div className="flex flex-wrap w-full justify-center" data-testid="mapped-view">
            {
                data.map((item) => {
                    return (
                    <div key={item.id}>
                        <button className="border-none bg-neutral-100 cardMapped fade-1" value={item.id} onClick={onClick}>
                            <CardMapped data={item}/>
                        </button>
                    </div>
                    )
                })
                }
        </div>
    )
}