import { redirect } from "next/navigation";

export default function PassportVerificationRedirect() {
    redirect("/passport-verification-api");
}
