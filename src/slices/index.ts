import { combineReducers } from "redux";

// Front
import LayoutReducer from "./layouts/reducer";

// login
import LoginReducer from "./auth/login/reducer";

// register
import RegisterReducer from "./auth/register/reducer";

// userProfile
import ProfileReducer from "./auth/profile/reducer";

// Chat
import ChatReducer from "./chat/reducer";

// MailBox
import MailboxReducer from "./mailbox/reducer";

// Calendar
import CalendarReducer from "./calendar/reducer";

// Ecommerce
import EcommerceReducer from "./ecommerce/reducer";

// HR Managment
import HRManagmentReducer from "./hrManagement/reducer";

// Notes
import NotesReducer from "./notes/reducer";

// Social
import SocialReducer from "./social/reducer";

// Invoice
import InvoiceReducer from "./invoice/reducer";

// Users
import UsersReducer from "./users/reducer";

// Groups
import GroupsReducer from "./groups/reducer";

import TwoStepReducer from "./TwoStep/reducer";
import TermsAndConditionsReducer from "./termsAndConditions/reducer";
import PaymentReducer from "./payments/reducer";
import GeneralBalanceReducer from "./balanceGeneral/reducer";

import ServiceReducer from "./services/reducer";

const rootReducer = combineReducers({
  Layout: LayoutReducer,
  Login: LoginReducer,
  Register: RegisterReducer,
  Profile: ProfileReducer,
  Chat: ChatReducer,
  Mailbox: MailboxReducer,
  Calendar: CalendarReducer,
  Ecommerce: EcommerceReducer,
  HRManagment: HRManagmentReducer,
  Notes: NotesReducer,
  Social: SocialReducer,
  Invoice: InvoiceReducer,
  Users: UsersReducer,
  Groups: GroupsReducer,
  TwoStep: TwoStepReducer,
  TermsAndConditions: TermsAndConditionsReducer,
  Payments: PaymentReducer,
  GeneralBalances: GeneralBalanceReducer,
  Services: ServiceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
