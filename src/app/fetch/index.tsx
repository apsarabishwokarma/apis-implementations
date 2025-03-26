import Button from "@/components/ui/button";
import Link from "next/link";

export default function FetchImplementations() {
  return (
    <>
      <div className="mt-5 flex gap-2 wrap">
        <Link href="/fetch/login">
          <Button>Login</Button>
        </Link>
        <Link href="/fetch/signup">
          <Button>Signup</Button>
        </Link>
      </div>
    </>
  );
}
