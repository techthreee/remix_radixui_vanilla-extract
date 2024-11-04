import type { MetaFunction } from "@remix-run/node";
import { BaseButton } from "~/components/base/Button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <BaseButton text={"Default Button"} />;
}
