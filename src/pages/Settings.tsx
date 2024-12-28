import { Routes, Route } from "react-router-dom";

const Settings = () => {
  return (
    <Routes>
      <Route
        path="profile"
        element={<h1 className="text-3xl font-bold text-gray-900">Profile</h1>}
      />
      <Route
        path="appearance"
        element={
          <h1 className="text-3xl font-bold text-gray-900">Appearance</h1>
        }
      />
      <Route
        path="categories"
        element={
          <h1 className="text-3xl font-bold text-gray-900">Categories & Groups</h1>
        }
      />
    </Routes>
  );
};

export default Settings;