type CardVerticalProps = {
  icon: string; // chemin vers l'image (ex : "/logos/permaculture.png")
  alt?: string;
  title: string;
  children: React.ReactNode;
};

export default function CardVertical({ icon, alt, title, children }: CardVerticalProps) {
  return (
    <div className="text-center p-6">
      <img src={icon} alt={alt || title} className="w-40 h-40 mx-auto mb-1 object-contain" />
      <h4 className="font-semibold text-green-800 text-xl mb-2">{title}</h4>
      <p className="text-gray-800">{children}</p>
    </div>
  );
}
