// import { QuestionMarkCircleIcon as Question } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { CogIcon, SearchIcon } from "@heroicons/react/solid";
import { AnnotationIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { ExclamationCircleIcon as Exclamation } from "@heroicons/react/solid";


const Menu = () => {

  const header =
    "w-full bg-white rounded-tr-md rounded-tl-md p-3 shadow-sm border mt-3 max-w-md mx-auto";
  const headerIcon =
    "inline w-5 drop-shadow-sm center mr-2 m-auto text-gray-500";
  // conten
  const contentContainer =
    "w-full bg-white rounded-br-md rounded-bl-md p-3 shadow-sm border max-w-md mx-auto flex flex-wrap gap-3 ";
  const content =
    "p-2 px-4  bg-gray-500 h-min border-2 shadow rounded-full text-center text-white hover:bg-green transition-all duration-400 hover:text-gray-800 ";
  const contenIcon = "w-5 droop-shadow-sm inline mr-1";
  const contentText = "inline text-xs font-semibold";

  return (
    <div className="grid p-2 gap-1 grid-cols-1">
      {/*header*/}
      <span className={header}>
        <CogIcon className={headerIcon} />
        <p className="text-normal font-semibold text-gray-500 inline">
          Settings
        </p>
      </span>
      {/*content items goes here*/}
      <span className={contentContainer}>
        <span className={content}>
          <a href="mailto:olsencortuna@gmail.com?subject=Report Issue">
            <Exclamation className={contenIcon} />
            <p className={contentText}>Report Issue</p>
          </a>
        </span>

        <span className={content}>
          <AnnotationIcon className={contenIcon} />
          <a href="mailto:olsencortuna@gmail.com?subject=Contact">
            <p className={contentText}>Contact</p>
          </a>
        </span>

        <span className={content}>
          <Link to={"/about"}>
            <InformationCircleIcon className={contenIcon} />
            <p className={contentText}>About</p>
          </Link>
        </span>

        <span className={content}>
          <Link to={"/term"}>
            <InformationCircleIcon className={contenIcon} />
            <p className={contentText}>Term and Condition</p>
          </Link>
        </span>

        <span className={content}>
          <Link to={"/search"}>
            <SearchIcon className={contenIcon} />
            <p className={contentText}>Search</p>
          </Link>
        </span>

      </span>
    </div>
  );
};

export default Menu;
