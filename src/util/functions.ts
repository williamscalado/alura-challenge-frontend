import React from "react";
import { useNavigate } from "react-router-dom";

export function formatCurrency(valeu: number) {

    return new Intl.NumberFormat('pt-br',
        {
            style: "currency",
            currency: "BRL"
        })
        .format(valeu)
}


export function formatDate(date: Date) {

    return new Intl.DateTimeFormat('pt-br').format(new Date(date))
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

export function Redirect(to: string) {
    const navigate = useNavigate()
    navigate(to)
}