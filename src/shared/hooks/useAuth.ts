import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateEmail,
  User,
  UserCredential,
} from 'firebase/auth'
import { FirebaseService } from '~/services'

const { auth: authFirebaseService } = FirebaseService

const useAuth = () => {
  async function auth(email: string, password: string): Promise<UserCredential> {
    const auth = await signInWithEmailAndPassword(authFirebaseService, email, password)

    return auth
  }

  async function register(email: string, password: string) {
    const account = await createUserWithEmailAndPassword(
      authFirebaseService,
      email,
      password,
    )

    await _sendVerificationEmail(account.user)

    return account
  }

  async function _sendVerificationEmail(user: User) {
    await sendEmailVerification(user)
  }

  async function updateAccount(options: {
    displayName?: string
    photoURL?: string
    email?: string
    phoneNumber?: string
    password?: string
    emailVerified?: boolean
    disabled?: boolean
  }) {
    if (options?.email) {
      await updateEmail(authFirebaseService.currentUser!, options.email)
    }

    delete options.email
    await updateProfile(authFirebaseService.currentUser!, options)
  }

  async function sendResetPassword(email: string) {
    await sendPasswordResetEmail(authFirebaseService, email)
  }

  async function logout() {
    await signOut(authFirebaseService)
  }

  return {
    auth,
    logout,
    register,
    updateAccount,
    sendResetPassword,
    resendEmailVerification: _sendVerificationEmail,
  }
}

export default useAuth
