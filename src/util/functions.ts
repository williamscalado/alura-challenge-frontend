import React from "react";

export function formatCurrency(valeu: number) {

    return new Intl.NumberFormat('pt-br',
        {
            style: "currency",
            currency: "BRL"
        })
        .format(valeu)
}


export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {

    let ValueInput = e.target.value
    ValueInput = ValueInput
        .replace(/\D/g, "")
        .replace(/(\d)(\d{2})$/, "$1,$2")
        .replace(/(?=(\d{3})+(\D))\B/g, ".")

    e.target.value = ValueInput

    return e
}