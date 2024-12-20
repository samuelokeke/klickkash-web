"use server";

export const createTodo = async (formData: FormData) => {
  const formValue = formData.get("todo");

  await new Promise((resolve) => {
    setTimeout(() => resolve(formValue), 3000);
  });
};

/**
 * this is an experimental feature coming in v19
 * @param prevState
 * @param formData
 * @returns
 */
export async function actionState(prevState: string, formData: FormData) {
  const formValue = formData.get("todo");

  if (formValue === "Sam") {
    return "The form value is accurate";
  } else {
    return "No value is present here";
  }
}
