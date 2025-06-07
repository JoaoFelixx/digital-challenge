import { memo, useMemo } from "react";

import {
  type ActivePage,

  usePage
} from "@/context/page-provider";
import { useNavigate } from "react-router";


interface Redirect {
  page: ActivePage;
  name: string;
  path: string;
  icon: string;
}

interface RedirectItemProps {
  redirect: Redirect
}


const RedirectItem = ({ redirect, }: RedirectItemProps) => {
  const navigate = useNavigate();
  const {
    activePage,

    changePage,
  } = usePage();

  const imgUrl = useMemo(() => redirect.icon, [redirect.icon])

  const onChangePage = () => {
    if (activePage !== redirect.page) {
      changePage(redirect.page)

      navigate(redirect.path);
    }
  }

  return (
    <li
      key={redirect.name}
      className={activePage === redirect.page ? 'active' : ''}
      onClick={onChangePage}
    >
      <img src={imgUrl} alt={redirect.name} />
      <span>{redirect.name}</span>
    </li>
  )
}

export default memo(RedirectItem)