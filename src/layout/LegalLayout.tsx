import { NavLink, Outlet } from "react-router-dom";

export default function LegalLayout() {
  return (
    <main className="w-full px-4 py-8 mt-12 md:mt-24 md:flex md:gap-5">
      <aside className="mb-8 md:w-1/4 md:mb-0">
        <div className="sticky p-6 bg-white rounded-lg shadow-sm top-24">
          <h3 className="mb-4 text-lg font-semibold">Legal Documents</h3>
          <div className="flex flex-col items-start justify-start w-full space-y-2">
            <NavLink
              to={"/privacy-policy"}
              className={({ isActive }) =>
                `w-full text-left px-3 py-2 rounded-lg !rounded-button whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100"
                }`
              }
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to={"/terms-of-service"}
              className={({ isActive }) =>
                `w-full text-left px-3 py-2 rounded-lg !rounded-button whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100"
                }`
              }
            >
              Terms of Service
            </NavLink>

            <NavLink
              to={"/sitemap"}
              className={({ isActive }) =>
                `w-full text-left px-3 py-2 rounded-lg !rounded-button whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-medium"
                    : "hover:bg-gray-100"
                }`
              }
            >
              Sitemap
            </NavLink>
          </div>
        </div>
      </aside>

      <Outlet />
    </main>
  );
}
