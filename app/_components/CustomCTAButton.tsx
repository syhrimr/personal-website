import CustomIconRender from "./CustomIconRender";

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'link';
type LinkType = 'website' | 'github';

type CTAButtonProps = {
  text: string | undefined;
  url: string | undefined;
  size?: ButtonSize | undefined;
  type?: ButtonType | undefined;
  icon?: LinkType | undefined;
}

export default function CTAButton({ text, url, size, type, icon }: CTAButtonProps) {
  if (!url && !text) {
    return null;
  }

  let width: number;
  let height: number;
  let linkClasses: string;
  let textClasses: string;

  switch (size) {
    case 'sm':
      width = 100;
      height = 36;
      break;
    case 'lg':
      width = 250;
      height = 64;
      break;
    default:
      width = 150;
      height = 48;
      break;
  }

  switch (type) {
    case 'link':
      linkClasses = `flex flex-row gap-1 hover:scale-110 hover:drop-shadow-md`;
      textClasses = `block w-full underline`;
      break;
    default:
      linkClasses = `h-[${height}px] w-[${width}px] p-4 pt-3 block bg-gradient-primary text-white rounded-md shadow-sm hover:scale-110 hover:shadow-md`;
      textClasses = `block text-center font-semibold`;
      break;
  }

  return (
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      className={linkClasses}
    >
      {icon && <CustomIconRender type={icon} />}

      <span className={textClasses}>
        {text}
      </span>
    </a>
  );
}