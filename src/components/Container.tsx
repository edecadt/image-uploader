export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col max-h-fit w-[400px] bg-white rounded-xl shadow-md  items-center px-8 py-9">
      {children}
    </div>
  );
}
