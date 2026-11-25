import { redirect } from "next/navigation";

export default function ReverseGeoCodesRedirect() {
    redirect("/reverse-geocode-api");
}
