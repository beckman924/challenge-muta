export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#f1f1f1] z-10">
      <div className="bg-header-left absolute top-0 left-0 h-[135px] w-[250px]" />
      <div className="bg-header-right absolute top-0 left-[250px] right-0 h-[87px]" />
    </header>
  );
}
