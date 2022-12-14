import React from "react"
import { KembaliProps } from "../../domain/entity/structures/propsStructure"

export const KembaliButton: React.FC<KembaliProps> = ({onClick}) => {
    return (
        <div className="text-left " data-testid="kembali-button">
            <button value="99" onClick={onClick} className="kembali">Kembali</button>
        </div>
    )
}