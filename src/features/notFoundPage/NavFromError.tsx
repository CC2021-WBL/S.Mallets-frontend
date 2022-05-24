import { NavLink } from 'react-router-dom';

const linkStyle = 'text-base font-bold text-[#0050EC]';

export type LinksType = {
  to: string;
  linkText: string;
};

function NavFromError(prop: { links: LinksType[] }) {
  return (
    <nav className="flex items-center justify-between gap-9 rounded-2xl border px-9 py-7">
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
