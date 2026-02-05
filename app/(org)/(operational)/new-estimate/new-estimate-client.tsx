"use client";

import { BrushCleaning, ShoppingCart } from "lucide-react";
import { EstimateForm } from "./estimate-form";
import { useState } from "react";
import { EstimateFormSchema } from "./estimate-form-schema";

export function NewEstimateClient() {
  const date = new Date();
  date.setDate(date.getDate() + 14);

  const defaultValidity = date;
  const defaultDeadline = new Date();

  const [formData, setFormData] = useState<EstimateFormSchema>({
    name: "",
    phone: null,
    email: null,
    cep: null,
    address: null,
    number: null,
    description: null,
    deliveryDeadline: defaultDeadline,
    items: [],
    paymentMethod: null,
    installments: null,
    downPayment: null,
    validity: defaultValidity,
  });

  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-row gap-4">
      <div className="w-full h-full flex flex-col items-center p-8 rounded-lg bg-white">
        <EstimateForm formData={formData} setFormData={setFormData} />
      </div>

      <div className="w-1/4 h-full flex flex-col justify-between p-8 bg-white rounded-lg">
        <div className="h-full flex flex-col gap-4">
          <h1 className="text-xl font-bold">Resumo</h1>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-muted-foreground font-medium">
              Cliente
            </label>
            {formData.name ? (
              <span className="text-sm font-medium">{formData.name}</span>
            ) : (
              <span className="text-sm font-medium text-muted-foreground/80">
                Não informado
              </span>
            )}
          </div>


        </div>

        <div
          className={`w-full flex flex-row items-center gap-2 px-3 py-2 rounded-lg ${
            formData.items.length === 0
              ? "bg-secondary text-muted-foreground"
              : "bg-blue-500/10 text-blue-500"
          }`}
        >
          {formData.items.length === 0 ? (
            <>
              <BrushCleaning size={14} />
              <span className="text-xs font-medium">Orçamento vazio</span>
            </>
          ) : (
            <>
              <ShoppingCart size={14} />
              <span className="text-xs font-medium">
                Itens adicionados ao orçamento
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
