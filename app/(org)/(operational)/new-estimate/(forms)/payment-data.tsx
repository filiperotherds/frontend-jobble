import { Field, FieldLabel } from "@/components/ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightLeft, Banknote, CreditCard, Receipt } from "lucide-react";
import { EstimateFormSchema } from "../estimate-form-schema";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

interface PaymentDataProps {
    data: EstimateFormSchema;
    updateField: (field: keyof EstimateFormSchema, value: string) => void;
    setFormData: Dispatch<SetStateAction<EstimateFormSchema>>;
}

export function PaymentData({
    data,
    updateField,
    setFormData,
}: PaymentDataProps) {
    return (
        <div className="w-full space-y-8 animate-in fade-in slide-in-from-left-4 duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <Field>
                    <div className="flex flex-row items-center space-x-2">
                        <FieldLabel>Forma de pagamento</FieldLabel>
                        <span className="text-xs text-muted-foreground/80 font-medium">
                            opcional
                        </span>
                    </div>
                    <Select
                        defaultValue={data.paymentMethod}
                        onValueChange={(e) => updateField("paymentMethod", e)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione uma forma de pagamento" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="PIX">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                    <path d="M306.4 356.5C311.8 351.1 321.1 351.1 326.5 356.5L403.5 433.5C417.7 447.7 436.6 455.5 456.6 455.5L471.7 455.5L374.6 552.6C344.3 582.1 295.1 582.1 264.8 552.6L167.3 455.2L176.6 455.2C196.6 455.2 215.5 447.4 229.7 433.2L306.4 356.5zM326.5 282.9C320.1 288.4 311.9 288.5 306.4 282.9L229.7 206.2C215.5 191.1 196.6 184.2 176.6 184.2L167.3 184.2L264.7 86.8C295.1 56.5 344.3 56.5 374.6 86.8L471.8 183.9L456.6 183.9C436.6 183.9 417.7 191.7 403.5 205.9L326.5 282.9zM176.6 206.7C190.4 206.7 203.1 212.3 213.7 222.1L290.4 298.8C297.6 305.1 307 309.6 316.5 309.6C325.9 309.6 335.3 305.1 342.5 298.8L419.5 221.8C429.3 212.1 442.8 206.5 456.6 206.5L494.3 206.5L552.6 264.8C582.9 295.1 582.9 344.3 552.6 374.6L494.3 432.9L456.6 432.9C442.8 432.9 429.3 427.3 419.5 417.5L342.5 340.5C328.6 326.6 304.3 326.6 290.4 340.6L213.7 417.2C203.1 427 190.4 432.6 176.6 432.6L144.8 432.6L86.8 374.6C56.5 344.3 56.5 295.1 86.8 264.8L144.8 206.7L176.6 206.7z" />
                                </svg>
                                Pix
                            </SelectItem>
                            <SelectItem value="CASH">
                                <Banknote />
                                Dinheiro
                            </SelectItem>
                            <SelectItem value="CARD">
                                <CreditCard />
                                Cartão
                            </SelectItem>
                            <SelectItem value="BOLETO">
                                <Receipt />
                                Boleto
                            </SelectItem>
                            <SelectItem value="TRANSFER">
                                <ArrowRightLeft />
                                Transferência
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </Field>

                <Field className="w-full md:max-w-40">
                    <div className="flex flex-row items-center space-x-2">
                        <FieldLabel>Parcelamento</FieldLabel>
                        <span className="text-xs text-muted-foreground/80 font-medium">
                            opcional
                        </span>
                    </div>

                    <Select
                        defaultValue={data.installments}
                        onValueChange={(e) => updateField("installments", e)}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Parcelamento" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">
                                1x
                            </SelectItem>
                            <SelectItem value="2">
                                2x
                            </SelectItem>
                            <SelectItem value="3">
                                3x
                            </SelectItem>
                            <SelectItem value="4">
                                4x
                            </SelectItem>
                            <SelectItem value="5">
                                5x
                            </SelectItem>
                            <SelectItem value="6">
                                6x
                            </SelectItem>
                            <SelectItem value="7">
                                7x
                            </SelectItem>
                            <SelectItem value="8">
                                8x
                            </SelectItem>
                            <SelectItem value="9">
                                9x
                            </SelectItem>
                            <SelectItem value="10">
                                10x
                            </SelectItem>
                            <SelectItem value="11">
                                11x
                            </SelectItem>
                            <SelectItem value="12">
                                12x
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </Field>
            </div>

            <Field>
                <div className="flex flex-row items-center space-x-2">
                    <FieldLabel>Entrada</FieldLabel>
                    <span className="text-xs text-muted-foreground/80 font-medium">
                        opcional
                    </span>
                </div>

                <InputGroup className="w-full md:max-w-40">
                    <InputGroupAddon>R$</InputGroupAddon>
                    <InputGroupInput
                        type="text"
                        inputMode="numeric"
                        placeholder="0,00"
                        value={
                            data.downPayment
                                ? data.downPayment.toLocaleString("pt-BR", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })
                                : "0,00"
                        }
                        onChange={(e) => {
                            const rawValue = e.target.value.replace(/\D/g, "");

                            const numericValue = Number(rawValue) / 100;

                            updateField("downPayment", numericValue)
                        }}
                    />
                </InputGroup>
            </Field>
        </div>
    )
}