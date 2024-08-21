"use client";

import { Link } from "@solidjs/meta";
import { FaRegularNewspaper, FaSolidAngleDown, FaSolidDatabase, FaSolidHandsPraying, FaSolidHeadSideCough, FaSolidPhoneFlip, FaSolidUser, FaSolidUserSecret, FaSolidUsersRectangle, FaSolidWindowMaximize } from "solid-icons/fa";
import { IoDocumentTextSharp, IoGrid } from "solid-icons/io";
import { TbFriends, TbScale } from "solid-icons/tb";

import { createSignal, createEffect, JSXElement } from "solid-js";
import { updateSession } from "vinxi/http";

// NavbarAdmin Component
export function NavbarAdmin({ link }: { link: string }) {
  const [detailNavbar, setDetailNavbar] = createSignal({
    imgUser: "",
    namaUser: "",
    userId: "",
  });

  createEffect(() => {
    async function fetchDetailNavbar() {
      // await updateSession();

      // const session = await getDataSession();

      setDetailNavbar({
        imgUser:  "test",
        namaUser:   "test",
        userId:  "test",
      });
    }

    fetchDetailNavbar();
  });

  return (
    <nav class="shadow-lg">
      <div class="navbar bg-blue-600 justify-between px-20">
        <NavbarComponentLogo imageLogo={"/images/logo/logo-header.webp"} />

        <NavbarComponentProfile
          username={detailNavbar().namaUser}
          userImage={detailNavbar().imgUser}
          link={`/${link}/profile/${detailNavbar().userId}`}
        />
      </div>

      <div class="navbar justify-center h-16 bg-white">
        <ul class="menu menu-horizontal gap-4">
          <li>
            <NavbarComponentLink
              link={`/${link}/dashboard`}
              title={"Dashboard"}
              icon={<IoGrid />}
            />
          </li>

          <li>
            <NavbarComponentDropdownSingle
              link={`/${link}/master`}
              title={"Master"}
              icon={<FaSolidDatabase />}
            >
              <NavbarComponentDropdownLink
                link={`/${link}/master/assets`}
                title={"Aset Mobile"}
                icon={<FaSolidPhoneFlip />}
              />
            </NavbarComponentDropdownSingle>
          </li>

          <li>
            <NavbarComponentDropdownSingle
              link={`/${link}/menu_layanan`}
              title={"Menu Layanan"}
              icon={<FaRegularNewspaper />}
            >
              <NavbarComponentDropdownLink
                link={`/${link}/menu_layanan/pengaduan`}
                title={"Pengaduan Masyarakat"}
                icon={<FaSolidHeadSideCough />}
              />

              <NavbarComponentDropdownLink
                link={`/${link}/menu_layanan/permohonan_bantuan`}
                title={"Permohonan Bantuan"}
                icon={<FaSolidHandsPraying />}
              />
            </NavbarComponentDropdownSingle>
          </li>

          <li>
            <NavbarComponentDropdownSingle
              link={`/${link}/menu_user`}
              title={"Menu User"}
              icon={<FaSolidUsersRectangle />}
            >
              <NavbarComponentDropdownLink
                link={`/${link}/menu_user/users`}
                title={"Users"}
                icon={<FaSolidUser />}
              />
              <NavbarComponentDropdownLink
                link={`/${link}/menu_user/pegawai`}
                title={"Pegawai"}
                icon={<TbFriends />}
              />
              <NavbarComponentDropdownLink
                link={`/${link}/menu_user/penyidik`}
                title={"Penyidik"}
                icon={<FaSolidUserSecret />}
              />
            </NavbarComponentDropdownSingle>
          </li>

          <li>
            <NavbarComponentDropdownSingle
              link={`/${link}/menu_tindak`}
              title={"Menu Tindak Lajut"}
              icon={<TbScale />}
            >
              <NavbarComponentDropdownLink
                link={`/${link}/menu_tindak/pengaduan`}
                title={"Pengaduan Masyarakat"}
                icon={<FaSolidHeadSideCough />}
              />

              <NavbarComponentDropdownLink
                link={`/${link}/menu_tindak/permohonan_bantuan`}
                title={"Permohonan Bantuan"}
                icon={<FaSolidHandsPraying />}
              />
            </NavbarComponentDropdownSingle>
          </li>

          <li>
            <NavbarComponentDropdownSingle
              link={`/${link}/menu_laporan`}
              title={"Menu Laporan"}
              icon={<FaSolidWindowMaximize />}
            >
              <NavbarComponentDropdownLink
                link={`/${link}/menu_laporan/lap_pengaduan`}
                title={"Lap. Pengaduan"}
                icon={<IoDocumentTextSharp />}
              />
              <NavbarComponentDropdownLink
                link={`/${link}/menu_laporan/lap_permohonan`}
                title={"Lap. Permohonan"}
                icon={<IoDocumentTextSharp />}
              />
            </NavbarComponentDropdownSingle>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// NavbarComponentLink Component
function NavbarComponentLink({
  link,
  title,
  icon,
}: {
  link: string;
  title: string;
  icon: JSXElement;
}) {
  const pathname = window.location.pathname;

  return (
    <Link
      href={link}
      class={`hover:bg-transparent font-medium hover:!text-blue-400 text-sm !bg-transparent ${
        pathname === link ? "!text-blue-400 !bg-gray-100" : "!text-gray-500"
      }`}
    >
      <i>{icon}</i> {title}
    </Link>
  );
}

// NavbarComponentDropdownLink Component
function NavbarComponentDropdownLink({
  link,
  title,
  icon,
}: {
  link: string;
  title: string;
  icon: JSXElement;
}) {
  return (
    <a
      href={link}
      class="hover:bg-transparent hover:!text-blue-400 text-gray-500 text-sm font-medium flex w-64 items-center !bg-transparent"
    >
      <i>{icon}</i> {title}
    </a>
  );
}

// NavbarComponentDropdownSingle Component
function NavbarComponentDropdownSingle({
  link,
  title,
  icon,
  children,
}: {
  link: string;
  title: string;
  icon: JSXElement;
  children: JSXElement[] | JSXElement;
}) {
  const pathname = window.location.pathname;
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div class="dropdown dropdown-bottom !bg-white">
      <button
        tabIndex={0}
        type="button"
        class={`btn p-0 btn-ghost font-medium hover:!bg-white text-sm !bg-white ${
          pathname?.includes(link)
            ? "!text-blue-400 !bg-gray-100"
            : "!text-gray-500"
        }`}
      >
        <i>{icon}</i> {title}
        <i>
          <FaSolidAngleDown />
        </i>
      </button>

      <ul
        tabIndex={0}
        class="dropdown-content z-[1] menu p-2 bg-white rounded rounded-t-none flex flex-col gap-1 shadow-lg"
      >
        {childrenArray.map((child, index) => (
          <li>{child}</li>
        ))}
      </ul>
    </div>
  );
}

// NavbarComponentLogo Component
function NavbarComponentLogo({ imageLogo }: { imageLogo: string }) {
  return (
    <div>
      <Link href="">
        <img src={imageLogo} alt="Logo Navbar" class="max-h-8 w-full" />
      </Link>
    </div>
  );
}

// NavbarComponentProfile Component
function NavbarComponentProfile({
  username,
  userImage,
  link,
}: {
  username: string;
  userImage: string;
  link: string;
}) {
  const [origin, setOrigin] = createSignal<string | null>(null);

  createEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  });

  if (!origin()) {
    return null;
  }

  return (
    <Link href={link} class="flex items-center gap-5">
      <h2 class="text-white text-sm">
        <span class="text-gray-100 font-medium">Halo, </span>
        <span class="font-bold">{username}</span>
      </h2>

      <img
        class="h-10 w-10 rounded"
        alt="User Profile Image"
        src={`${origin()}/foto-pegawai/${userImage}`}
      />
    </Link>
  );
}
