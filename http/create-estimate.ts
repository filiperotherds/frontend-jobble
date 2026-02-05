import { api } from "./api-client";

interface CreateEstimateRequest {
  name: string;
  phone: string | null;
  email: string | null;
  cep: string | null;
  address: string | null;
  number: string | null;
  description: string | null;
  deliveryDeadline: Date;
  items: {
    productId: string;
    name: string;
    quantity: number;
    unitValue: number;
  }[];
  paymentMethod: string | null;
  installments: number | null;
  downPayment: number | null;
  validity: Date | null;
}

type CreateEstimateResponse = void;

export async function CreateEstimate({
  name,
  phone,
  email,
  cep,
  address,
  number,
  description,
  deliveryDeadline,
  items,
  paymentMethod,
  installments,
  downPayment,
  validity,
}: CreateEstimateRequest): Promise<CreateEstimateResponse> {
  await api.post("estimates", {
    json: {
      name,
      phone,
      email,
      cep,
      address,
      number,
      description,
      deliveryDeadline,
      items,
      paymentMethod,
      installments,
      downPayment,
      validity,
    },
  });
}
