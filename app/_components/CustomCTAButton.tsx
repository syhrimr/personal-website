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

function LinkIcon({ type }: { type: string }) {
  switch (type) {
    case 'github':
      return (
        <div>
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          x="0px" 
          y="0px" 
          width="24" 
          height="24" 
          viewBox="0 0 32 32"
        >
          <path
            fillRule="evenodd"
            d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path>
          </svg>
        </div>
      );
    default:
      return (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373"
              stroke="#1C274C"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            </svg>
        </div>
      )
  }
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
      {icon && <LinkIcon type={icon} />}

      <span className={textClasses}>
        {text}
      </span>
    </a>
  );
}