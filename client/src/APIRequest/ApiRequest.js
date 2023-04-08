import axios from "axios";
import store from "../redux/store/store";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import { SetALLProduct, SetTotal } from "../redux/slice/productSlice";
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
