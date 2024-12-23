import { Navigate, Route, Routes } from 'react-router-dom';
import NewMobankRegistration from './NewMobankRegistration';
import MobankResetPin from './MobankResetPin';
import MobankBlock from './MobankBlock';
import MobankUnBlock from './MobankUnblock';


export const MobankRoutes = () => {
    return (
      <Routes>
        <Route path="new-registration" element={<NewMobankRegistration />} />
        <Route path="reset-pin" element={<MobankResetPin />} />
        <Route path="deactivate" element={<MobankBlock />} />
        <Route path="activate" element={<MobankUnBlock />} />
        <Route path="*" element={<Navigate to="." />} />
      </Routes>
    );
  };