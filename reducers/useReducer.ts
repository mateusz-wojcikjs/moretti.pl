import { FormState } from "interfaces/form.interface";

export const actionTypes = {
  updateValues: "UPDATE_VALUES",
  updateErrors: "UPDATE_ERRORS",
  submit: "SUBMIT",
};

type UpdateValuesAction = {
  type: typeof actionTypes.updateValues;
  payload: { [x: string]: string | boolean };
};
type UpdateErrorsAction = {
  type: typeof actionTypes.updateErrors;
  payload: "";
};

type SubmitAction = {
  type: typeof actionTypes.submit;
  payload: "";
};

type Action = UpdateErrorsAction | UpdateValuesAction | SubmitAction;

export const formReducer = (state: FormState, action: Action) => {
  switch (action.type) {
    case actionTypes.updateValues:
      return { ...state, values: { ...state.values, ...action.payload } };
    case actionTypes.updateErrors:
      return { ...state, errors: { ...state.errors, ...action.payload } };
    case actionTypes.submit:
      return { ...state, isSubmitting: true };
    default:
      throw new Error("Unhandled action");
  }
};
