import dynamic from "next/dynamic";

export default dynamic(
  async () => {
    await import("focus-visible");

    return () => null;
  },
  {
    ssr: false
  }
);
