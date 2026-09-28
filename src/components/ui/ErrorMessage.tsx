export default function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-label-sm text-[#ffb4ab] flex items-center gap-1">
      <span aria-hidden="true" className="material-symbols-outlined !text-[14px]">error</span> {children}
    </p>
  )
}
