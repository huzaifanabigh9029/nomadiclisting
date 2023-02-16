import { takeLatest } from "redux-saga/effects";
function* Saga({payload}) {
  console.log(payload);
}
function* HomeSaga() {
  yield takeLatest("ONSUBMIT", Saga);
}
export default HomeSaga;