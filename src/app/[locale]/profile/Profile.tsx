import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Profile() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isAdmin, user } = useAppSelector(
    (state: any) => state.auth
  );
  return (
    <main>
      <h1>Profile Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome {user.name}</p>
          <p>LastName: {user.lastName}</p>
          <p>Email: {user.email}</p>
          
        </div>
      ) : (
        <p>Please login</p>
      )}
    </main>
  );
}
