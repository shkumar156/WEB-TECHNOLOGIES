import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let isDraggable = false;
let isCloseOnClick = false;

function configure(toastId, timer, showProgressBar, position, draggable = true, closeOnClick) {
  return {
    position: position || toast.POSITION.TOP_CENTER,
    autoClose: timer ? timer : 5000,
    hideProgressBar: showProgressBar ? false : true,
    transition: Bounce,
    newestOnTop: true,
    toastId: toastId ? toastId : '000',
    draggable: draggable,
    closeOnClick: closeOnClick,
  };
}
const Toast = {
  success(message, toastId, timer, showProgressBar, position) {
    toast.success(message, configure(toastId, timer, showProgressBar, position));
  },
  warn(message, toastId, timer, showProgressBar, position) {
    toast.warn(message, configure(toastId, timer, showProgressBar, position));
  },
  error(message, toastId, timer, showProgressBar, position) {
    toast.error(
      message,
      configure(toastId, timer, showProgressBar, position, isDraggable, isCloseOnClick)
    );
  },
  info(message, toastId, timer, showProgressBar, position) {
    toast.info(message, configure(toastId, timer, showProgressBar, position));
  },
};
export { Toast };
