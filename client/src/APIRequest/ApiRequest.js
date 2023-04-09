import axios from "axios";
import { SetALLProduct, SetTotal } from "../redux/slice/productSlice";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import store from "../redux/store/store";
const BaseURL = "http://localhost:5000/api/v1";

export function GetProductList(pageNo, perPage, searchKey) {
  store.dispatch(ShowLoader());
  let URL=`${BaseURL}/ProductList/${pageNo}/${perPage}/${searchKey}`;
  axios
    .get(URL)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200 && res.data["status"]) {
        store.dispatch(SetALLProduct(res.data["data"]));
        store.dispatch(SetTotal(res.data["total"]));
      } else {
        store.dispatch(SetALLProduct([]));
        store.dispatch(SetTotal(0));
      }
    })
    .catch((err) => {
      store.dispatch(HideLoader());
    });
}
