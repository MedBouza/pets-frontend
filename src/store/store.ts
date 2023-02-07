import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userslice";
import petSlice from "./slices/petslice";
import { useDispatch, useSelector as useSelectorBase } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

export const rootReducer = combineReducers({
  user: userSlice,
  pets: petSlice,
});

// middleware
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat() as ReturnType<typeof getDefaultMiddleware>,
  devTools: true,
});
// creating store
export const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;

// Inferred type: { users: UsersState}
type AppDispatch = ReturnType<AppStore["dispatch"]>;
type DispatchType = typeof store.dispatch;
// Since we use typescript, lets utilize `useDispatch`
export const useAppDispatch = () => useDispatch<DispatchType>();

// And utilize `useSelector`
export const useAppSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
