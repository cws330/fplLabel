import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className=' pt-3   w-[100vw] overflow-auto'
        suppressHydrationWarning={true}
      >
        <div className='w-[90vw] h-[100vh] flex flex-col items-center ml-auto mr-auto'>
          {children}
        </div>
      </div>
      <Toaster position='top-center' duration={5000} />
    </>
  );
}
