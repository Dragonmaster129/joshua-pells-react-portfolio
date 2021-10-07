import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faTrashAlt,
  faSpinner,
  faPlusCircle,
  faPhoneAlt,
  faEnvelope,
  faMapMarked,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faTrashAlt,
    faSpinner,
    faPlusCircle,
    faPhoneAlt,
    faEnvelope,
    faMapMarked,
    faLock
  );
};

export default Icons;
