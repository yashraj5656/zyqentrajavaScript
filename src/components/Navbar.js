"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const progressMap = {
    "/": 0,
    "/dashboard": 20,
    "/lesson": 40,
    "/quiz": 70,
    "/completion": 100,
  };
  const progress = progressMap[pathname] || 0;

  return (
    <>
      <nav className="navbar">
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link href="/lesson" className={pathname === "/lesson" ? "active" : ""}>
          Lesson
        </Link>
        {/*<Link href="/quiz" className={pathname === "/quiz" ? "active" : ""}>
          Quiz
        </Link>*/}
        <Link
          href="/codeeditor"
          className={pathname === "/codeeditor" ? "active" : ""}
        >
          CodeLab
        </Link>
        <Link href="/subscribe" className={pathname === "/subscribe" ? "active" : ""}>
          Pro
        </Link>

        {user ? (
          <>
            {/*<span className="user">{user.email}</span>*/}
            {/*<button style={{width:"10%", alignItems:"left", fontSize:"0.7rem", marginTop:"0px"}}onClick={logout}>Logout</button>*/}
          </>
        ) : (
          <>
            <Link href="/login" className={pathname === "/login" ? "active" : ""}>
              Login
            </Link>
            <Link href="/signup" className={pathname === "/signup" ? "active" : ""}>
              Sign Up
            </Link>
          </>
        )}
      </nav>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </>
  );
}
