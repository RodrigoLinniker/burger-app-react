interface ItemModalProps {
  name: string;
  icon: React.ReactNode;
  amount?: number;
}
export function ItemModal({ name, icon, amount }: ItemModalProps) {
  return (
    <div className="w-full flex items-center gap-2 max-w-[280px] py-2 px-4 rounded-full border-[1px] ">
      {icon}
      <h1>{amount}</h1>
      <h1>{name}</h1>
    </div>
  );
}
