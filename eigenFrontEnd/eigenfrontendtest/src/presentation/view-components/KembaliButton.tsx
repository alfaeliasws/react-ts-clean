import React from "react"
import { KembaliProps } from "../../domain/entity/structures/propsStructure"
import { useFade } from "../view-others/hook"

export const KembaliButton: React.FC<KembaliProps> = ({onClick}) => {

    useFade('fade-1')

    return (
        <div className="fade-1" data-testid="kembali-button">
            <button value="99" onClick={onClick} className="kembali">Kembali</button>
        </div>
    )
}