import Profile from './components/profile/Profile.vue'
import ChangePassword from './components/changePassword/ChangePassword.vue'

export const routes = [
  { path: '/', component: Profile, titulo: 'Profile'},
  {path: '/changePassword', component: ChangePassword, titulo: "Change Password"},
]
