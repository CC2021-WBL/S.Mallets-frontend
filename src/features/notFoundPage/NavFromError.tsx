import { NavLink } from 'react-router-dom';

const linkStyle = 'text-base font-bold text-[#0050EC] text-center';

export type LinksType = {
  to: string;
  linkText: string;
};

function NavFromError(prop: { links: LinksType[] }) {
  return (
    <nav className="m-1 flex flex-wrap items-center justify-center gap-9 rounded-2xl border px-9 py-7">
      {prop.links.map((link, index) => {
        return (
          <NavLink key={index} className={linkStyle} to={link.to}>
            {link.linkText}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavFromError;
