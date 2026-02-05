import { HTTPError } from "ky";
import { estimateFormSchema } from "./estimate-form-schema";
import { z } from "zod";
import { CreateEstimate } from "@/http/create-estimate";

export async function createNewEstimate(data: FormData) {
  const rootData = data.get("root-data");
  const parsedData =
    typeof rootData === "string" ? JSON.parse(rootData) : Object.fromEntries(data);

  if (parsedData.deliveryDeadline && typeof parsedData.deliveryDeadline === 'string') {
    parsedData.deliveryDeadline = new Date(parsedData.deliveryDeadline);
  }
  if (parsedData.validity && typeof parsedData.validity === 'string') {
    parsedData.validity = new Date(parsedData.validity);
  }


  const result = estimateFormSchema.safeParse(parsedData);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const {
    name,
    phone,
    email,
    address,
    cep,
    number,
    description,
    deliveryDeadline,
    items,
    downPayment,
    paymentMethod,
    installments,
    validity,
  } = result.data;

  try {
    await CreateEstimate({
      name,
      phone,
      email,
      address,
      cep,
      number,
      description,
      deliveryDeadline,
      items,
      downPayment,
      paymentMethod,
      installments,
      validity,
    });
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
    }

    console.error(err);

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    };
  }

  return { success: true, message: null, errors: null };
}
