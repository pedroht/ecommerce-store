import { PropsWithChildren } from "react";

interface FooterProps extends PropsWithChildren {}

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-sm text-black">
          &copy; {new Date().getFullYear()} FakeStoreName, Inc. All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
